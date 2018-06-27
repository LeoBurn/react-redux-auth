import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";
import SignUp from "./components/auth/Signup";
import {
  RootUrl,
  SignUpUrl,
  FeatureUrl,
  SignOutUrl,
  SignInUrl
} from "./config/route-config.json";
import Feature from "./components/Feature";
import SignOut from "./components/auth/Signout";
import SignIn from "./components/auth/SignIn";

const store = createStore(
  reducers,
  { auth: { authenticated: localStorage.getItem("token") } },
  applyMiddleware(reduxThunk)
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path={RootUrl} exact component={Welcome} />
        <Route path={SignUpUrl} component={SignUp} />
        <Route path={FeatureUrl} component={Feature} />
        <Route path={SignOutUrl} component={SignOut} />
        <Route path={SignInUrl} component={SignIn} />
      </App>
    </BrowserRouter>
  </Provider>,

  document.querySelector("#root")
);
