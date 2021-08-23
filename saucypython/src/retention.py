from utils import ITEM_ORDERS


def retention(start_date=None, end_date=None):
    '''
    This function takes item orders from the ITEM_ORDERS database
    and generates:
      - overall customer retention for the specified time period in the dataset.
      - if no date period is provided, will provide data for the entire data set.

    If an order_type is specified, it returns retention only for orders belonging
    to the provided subgroup. Otherwise, it returns overall retention, ignoring
    orderType.

    Parameters
    --------
        start_date (date): datetime indicating the start date of the time period
        end_date (date): datetime indicating the end date of the time period

    '''
    # TODO: Implement - feel free to break logic into multiple functions.
    # Feel free to adjust the input structure of the function, so long as
    # the task is completed.
    pass


if __name__ == "__main__":
    from utils import list_to_csv
    #  The following will generate a csv of all orders in this example'ss database.
    #  If you are not comfortable using the Mongodb API to manage the data, feel
    #  free to work from the csv.
    list_to_csv(ITEM_ORDERS.find(), 'item_orders.csv')  # Print csv of item orders.

    # Retention function
    retention()
