# Online Movie Ticket Booking App

A React application for browsing movies and booking tickets. Built with React, Redux, and React Router.

**[Live Demo](https://jnagrur.github.io/movie-ticket-booking/#/)** 

## What it does

- Browse movies across three categories: Latest, Upcoming, and Events
- Click any movie to see details (title, genre, rating, language)
- Select a show time and number of seats on the booking page
- Receive a confirmation page with a QR code on successful booking

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Movie listing with category tabs |
| Details | `/product/:id` | Individual movie details and Book Now button |
| Booking | `/booking` | Select show time and seats |
| Confirmation | `/confirm` | Booking confirmation with QR code |

## Tech stack

- React 17
- Redux (for global product state)
- React Router v5 (for page navigation)
- React Bootstrap

## What I fixed in this version

- Replaced a dead private API with static movie data so the app always works
- Fixed a bug where the Book button navigated to the confirmation page even when no time or seats were selected
- Rewrote nested CSS syntax (which only works in SCSS) as plain CSS so it compiles correctly
- Added a guard on the confirmation page for users who navigate there directly
- Added an active state to the category tabs so you can see which tab is selected

## To run locally

```bash
npm install
npm start
```

App runs at `http://localhost:3000`
