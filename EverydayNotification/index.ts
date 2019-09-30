import { AzureFunction, Context } from "@azure/functions";
import { done } from "../helpers";

const ServiceBusTopicTrigger: AzureFunction = (
  context: Context,
) => {
  context.log('Node.js EverdayNoti function processed message');
  done(context)
};

export default ServiceBusTopicTrigger;
