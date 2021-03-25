import React from "react";

function HelloComponent({ service }) {
  console.log("service", service);
  const helloServiceDetails = service.getData();
  console.log("helloServiceDetails", helloServiceDetails);

  return (
    <>
      <h1>Andres!!!! Eres cabron!!</h1>
      <span>{helloServiceDetails.data.text}</span>
      <br />
      <span>{helloServiceDetails.data.titleBold}</span>
    </>
  );
}

const helloPageDefinition = {
  id: "test:hello-component",

  dependencies: {
    externals: {
      react: "^16.7.2",
      "@feature-hub/react": "^2.0.0",
    },
    featureServices: {
      "test:hello-service": "^1.0.0",
    },
  },

  create(env) {
    const helloService = env.featureServices["test:hello-service"];
    return {
      render() {
        return <HelloComponent service={helloService} />;
      },
    };
  },
};

export default helloPageDefinition;
