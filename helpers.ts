

export const startQueue =
  "ServiceBus topic trigger function processed message :: ";

export const done = (context: any) => {
  context.res = {
    status: 200,
    result: "success"
  };
  context.done();
};
