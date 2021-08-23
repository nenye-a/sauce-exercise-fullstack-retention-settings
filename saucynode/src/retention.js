const { itemOrders } = require('./models');

/**
 * This function takes item orders from the itemOrders database
 * and generates:
 *    - overall customer retention for the specified time period in the dataset.
 *    - if no date period is provided, will provide data for the entire data set.
 *
 *
 *
 * @param {Date} startDate date obj indicating the start date of the time period
 * @param {Date} endDate date obj indicating the end date of the time period
 */
const retention = async (orderType, startDate, endDate) => {
  // TODO: Implement - feel free to break logic into multiple functions.
  // Feel free to adjust the input structure of the function, so long as
  // the task is completed.
};

if (require.main === module) {
  let { listToCsv } = require('./utils/lists');
  (async () => {
    // The following will generate a csv of all orders in this example'ss database.
    // If you are not comfortable using the Mongodb API to manage the data, feel
    // free to work from the csv.
    let orders = await itemOrders.find();
    console.log(orders);
    listToCsv(
      // Mongoose docs need to be converted to native objects in order to be
      // printed well.
      orders.map((order) => order.toObject()),
      `itemOrdersCsv.csv`,
    );

    // Retention Function
    await retention();
  })();
}
