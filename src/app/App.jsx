import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
// Pages
const Home = lazy(() => import("./Pages/Home"));
const Commands = lazy(() => import("./Pages/Commands"));
const Staff = lazy(() => import("./Pages/Staff"));
const Leaderboard = lazy(() => import("./Pages/Leaderboard"));
const GuildSelector = lazy(() => import("./Pages/Dashboard"))

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./style.css";

export default () => {
  return (
    <>
      <div className="psuedoBody">
        <CookiesProvider>
          <NavBar />
          <Switch>
            <Suspense fallback={<div></div>}>
              <Route exact strict component={() => <Home />} path="/" />
              <Route component={() => <Commands />} path="/commands" />
              <Route component={() => <Staff />} path="/staff" />
              <Route component={() => <Leaderboard />} path="/leaderboard" />
              <Route component={() => <GuildSelector />} path="/dashboard" />
              {/* TODO; dashboard, admin panel, proper leaderboard pages!*/}
            </Suspense>
          </Switch>
        </CookiesProvider>
        <Footer />
      </div>
    </>
  );
};
