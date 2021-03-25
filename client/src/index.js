import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createFeatureHub } from "@feature-hub/core";
import { loadAmdModule } from "@feature-hub/module-loader-amd";
import { FeatureHubContextProvider } from "@feature-hub/react";
import { FeatureAppContainer } from "@feature-hub/react";
import helloPageDefinition from "./components/HelloComponent";
import { HelloServiceDefinition } from "./components/HelloService";

const { featureAppManager } = createFeatureHub("test:integrator", {
  featureServiceDefinitions: [HelloServiceDefinition],
  moduleLoader: loadAmdModule,
});

ReactDOM.render(
  <FeatureHubContextProvider value={{ featureAppManager }}>
    <FeatureAppContainer
      featureAppId={"test:hello-featureApp"}
      featureAppDefinition={helloPageDefinition}
    />
  </FeatureHubContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
