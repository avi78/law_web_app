import "./App.css";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import Cases from "./components/Cases/Cases";
import Bare from "./components/Bare/Bare";
import Articles from "./components/Articles/Articles";
import Ebooks from "./components/Ebooks/Ebooks";
import Updates from "./components/Updates/Updates";
import { Login } from "./Login";
import { Register } from "./Register";

const Routing = () => {
  const [currentForm, setCurrentForm] = useState("login");
  const [currentTab, setCurrentTab] = useState("1");
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  const contentsItems = [
    {
      id: 1,
      name: "Cases",
    },
    {
      id: 2,
      name: "Bare Acts",
    },
    {
      id: 3,
      name: "Articles",
    },
    {
      id: 4,
      name: "Legal Notices",
    },
    {
      id: 5,
      name: "Blogs",
    },
    {
      id: 6,
      name: "E-Books",
    },
    {
      id: 7,
      name: "Legal Research",
    },
    {
      id: 8,
      name: "Court Updates",
    },
    {
      id: 9,
      name: "History",
    },
    {
      id: 10,
      name: "Account",
    },
    {
      id: 11,
      name: "Log Out",
    },
  ];

  const handleContents = (element) => {
    switch (element) {
      case "Cases":
        return <Cases />;
      case "Bare Acts":
        return <Bare />;
      case "Articles":
        return <Articles />;
      case "Legal Notices":
        return "legal notices";
      case "Blogs":
        return "blogs";
      case "E-Books":
        return <Ebooks />;
      case "Legal Research":
        return "legal research";
      case "Court Updates":
        return <Updates />;
      case "History":
        return "history";
      case "Account":
        return "account";
      case "Log Out":
        return "log out";
      default:
        return <></>;
    }
  };
  return (
    <Switch>
      <Route exact path="/">
        <Navbar />
        <div className="App">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>
      </Route>

      <Route exact path="/home">
        <Navbar />
        <div className="main_div">
        <div className="side_bar">
          {contentsItems.map((ele, i) => (
            <>
              <button
                key={i}
                disabled={currentTab === `${ele.id}`}
                id={ele.id}
                onClick={handleTabClick}
                type="button"
                className="sideBar_btn"
              >
                {ele.name}
              </button>
            </>
          ))}
        </div>
        <div className="main_bar">
          {contentsItems.map((ele, i) => (
            <div key={i}>
              {currentTab === `${ele.id}` && handleContents(ele.name)}
            </div>
          ))}
        </div>
      </div>
      </Route>
    </Switch>
  );
};

function App() {
  
  return (
    <>
      <Routing></Routing>    
    </>
  );
}

export default App;
