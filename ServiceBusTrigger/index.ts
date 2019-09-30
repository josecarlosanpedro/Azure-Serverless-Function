import { AzureFunction, Context } from "@azure/functions";
import { startQueue, done } from "../helpers";

const ServiceBusTopicTrigger: AzureFunction = (
  context: Context,
) => {
  context.log('Node.js ServiceBus queue trigger function processed message');
};

export default ServiceBusTopicTrigger;
