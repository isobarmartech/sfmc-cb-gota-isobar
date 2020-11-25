import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import Header from "./blocks/Header";
import NewsHero from "./blocks/NewsHero";
import NewsStory from "./blocks/NewsStory";
import SoftHero from "./blocks/SoftHero";
import Checklist from "./blocks/Checklist";
import Checklist_v2 from "./blocks/Checklist_v2";
import Product from "./blocks/Product";
import Columns from "./blocks/Columns";
import AppModule from "./blocks/AppModule";
import Footer from "./blocks/Footer";

ReactDOM.render(
    <React.StrictMode>
        <IconSettings iconPath="/icons">
            <Provider store={store}>
                <Router>
                    <Route exact path="/" component={App} />
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/newsHero" component={NewsHero} />
                    <Route exact path="/newsStory" component={NewsStory} />
                    <Route exact path="/softHero" component={SoftHero} />
                    <Route exact path="/checklist" component={Checklist} />
                    <Route exact path="/checklist_v2" component={Checklist_v2} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/columns" component={Columns} />
                    <Route exact path="/appModule" component={AppModule} />
                    <Route exact path="/footer" component={Footer} />
                </Router>
            </Provider>
        </IconSettings>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
