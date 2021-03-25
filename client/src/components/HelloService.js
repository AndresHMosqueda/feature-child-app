export class ConsumerHello {
  getData() {
    return {
      data: {
        titleBold: "Pinche Crack!!!!",
        text: "Esto es una feature app",
      },
    };
  }
}

// export default {
export const HelloServiceDefinition = {
  id: "test:hello-service",
  create: () => {
    return {
      "1.0.0": () => ({
        featureService: new ConsumerHello(),
      }),
    };
  },
};
