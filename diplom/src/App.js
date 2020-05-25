import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import TopBar from "./components/topBar";
import { CurrentUserState } from "./context/curentUser/currentUserState";
import CurrentUserChecked from "./components/currentUserChecked";
import Footer from "./components/footer";

function App() {
  return (
    <CurrentUserState>
      <CurrentUserChecked>
        <Router>
          <TopBar />
          <Routes />
          <Footer />
        </Router>
      </CurrentUserChecked>
    </CurrentUserState>
  );
}

export default App;
