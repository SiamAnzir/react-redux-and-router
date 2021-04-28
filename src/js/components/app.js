import React from "react";
import Home from "./home";
import Articles from "./articles";
import premiumArticles from "./premiumArticles";
import Navbar from "./navbar";
import LoginPage from "./loginPage";
import PrivateRoute from "../Auth/privateRoute";
import {  Route, Switch } from "react-router-dom";

const App = () => (
    <>
        <main>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/allArticles" component={Articles}/>
                <Route path="/login" component={LoginPage}/>
                <PrivateRoute path="/premiumArticles" component={premiumArticles}/>
                <Route path="*" component={() => "404 NOT FOUND"} />
            </Switch>
        </main>
    </>
)

export default App;

