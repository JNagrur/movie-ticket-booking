import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import TicketBookingPage from "./containers/ProductBooking";
import ImageDetailsPage from "./containers/ConfirmationPage";

function App() {
  return (
    <div className="App" >
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/booking/" component={TicketBookingPage} />
          <Route path="/confirm/" component={ImageDetailsPage} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
