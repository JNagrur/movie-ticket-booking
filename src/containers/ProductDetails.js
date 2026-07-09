import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productsActions";

// Same static data as ProductListing — look up by ID
const ALL_MOVIES = [
  { _id: "1",  name: "Oppenheimer",                          imageUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", rate: "8.6", type: "Drama / History",          language: "English" },
  { _id: "2",  name: "Dune: Part Two",                       imageUrl: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", rate: "8.5", type: "Sci-Fi / Adventure",       language: "English" },
  { _id: "3",  name: "Poor Things",                          imageUrl: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXIhF8lU1ALQblA.jpg", rate: "8.0", type: "Comedy / Drama",           language: "English" },
  { _id: "4",  name: "The Zone of Interest",                 imageUrl: "https://image.tmdb.org/t/p/w500/hUu9zyZmDd3NCYMK5wFGBVFHDVt.jpg", rate: "7.4", type: "Drama / War",              language: "English / German" },
  { _id: "5",  name: "Past Lives",                           imageUrl: "https://image.tmdb.org/t/p/w500/k3waqVXSnYDBcmVOAeNNFiCPDDi.jpg", rate: "7.8", type: "Drama / Romance",          language: "English / Korean" },
  { _id: "6",  name: "Killers of the Flower Moon",           imageUrl: "https://image.tmdb.org/t/p/w500/dB6jEALHLMJWE7fLJzMSqFjZgwk.jpg", rate: "7.6", type: "Crime / Drama",            language: "English" },
  { _id: "7",  name: "Wonka",                                imageUrl: "https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9aNkCDfRHTQ.jpg", rate: "7.0", type: "Fantasy / Musical",        language: "English" },
  { _id: "8",  name: "Anyone But You",                       imageUrl: "https://image.tmdb.org/t/p/w500/lurEK87kukWNaHd0zYnsi3yzJrs.jpg", rate: "6.5", type: "Comedy / Romance",          language: "English" },
  { _id: "9",  name: "Inside Out 2",                         imageUrl: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg", rate: "7.8", type: "Animation / Family",        language: "English" },
  { _id: "10", name: "Furiosa",                              imageUrl: "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg", rate: "7.5", type: "Action / Adventure",        language: "English" },
  { _id: "11", name: "Kingdom of the Planet of the Apes",   imageUrl: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", rate: "6.8", type: "Sci-Fi / Action",           language: "English" },
  { _id: "12", name: "Deadpool & Wolverine",                 imageUrl: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", rate: "8.1", type: "Action / Comedy",           language: "English" },
  { _id: "13", name: "Taylor Swift: The Eras Tour",          imageUrl: "https://image.tmdb.org/t/p/w500/xizFJBSBpMBxjqkAnuNpz4zN6vR.jpg", rate: "9.0", type: "Concert / Music",           language: "English" },
  { _id: "14", name: "Renaissance: A Film by Beyoncé",       imageUrl: "https://image.tmdb.org/t/p/w500/nfAivuOKMNuS3l9sYoRFDYQOQYz.jpg", rate: "8.5", type: "Concert / Documentary",     language: "English" },
  { _id: "15", name: "Indiana Jones: The Live Experience",   imageUrl: "https://image.tmdb.org/t/p/w500/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg", rate: "7.2", type: "Live Event / Action",       language: "English" },
  { _id: "16", name: "Champions League Final 2024",          imageUrl: "https://image.tmdb.org/t/p/w500/9rC7M9PPQDVJmQTBw7FH11Z0C0x.jpg", rate: "9.5", type: "Sports / Live Event",       language: "Multi" },
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      const found = ALL_MOVIES.find((m) => m._id === productId);
      if (found) dispatch(selectedProduct(found));
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  if (Object.keys(product).length === 0) {
    return <div className="ui grid container"><div>Loading...</div></div>;
  }

  const { imageUrl, name, rate, type, language } = product;

  return (
    <div className="ui grid container">
      <div className="prod_container">
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={imageUrl} alt={name} />
              </div>
              <div className="column rp">
                <h1>{name} <span>Now Showing</span></h1>
                <h2>Rating: {rate} ⭐</h2>
                <div>
                  <p>Duration: 2h 14min</p>
                  <h3 className="ui header">{type}</h3>
                </div>
                <p>{language}</p>
                <Link to="/booking">
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="ticket icon"></i>
                    </div>
                    <div className="visible content">Book Now</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
