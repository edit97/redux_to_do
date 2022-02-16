import React, {Component} from "react";
import {Route, Router, Switch} from "react-router-dom";

import Layout from "../components/Layout";

import {history} from "./history";
import Homepage from "../components/homepage/Homepage";
import List from "../components/list/List";

export default class Routes extends Component {
    render() {
        return <Router history={history}>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Homepage/>
                    </Route>
                    <Route exact path="/list">
                        <List/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    }
}
