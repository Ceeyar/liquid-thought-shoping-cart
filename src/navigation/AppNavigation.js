import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from "react-helmet";

// Custom
import Routes from "./Routes"
import NoMatch from "../components/children/error-page/ErrorPage";

const title = "Liquid Cart"

class AppNavigation extends Component {
  render () {
    return (
      
      <div>
          <Helmet
            defaultTitle={title}
            titleTemplate={`${title} - %s`}
          />
          
          <Switch>
            {Routes.map((route, i) => <Route key={i} {...route} />)}
            <Router />
            <Route path="*" exact={true} component={NoMatch} />
          </Switch>
      </div>
    )
  }
}

export default AppNavigation
