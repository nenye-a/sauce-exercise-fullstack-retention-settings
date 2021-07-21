import mongo
import pandas as pd

'''
Utility methods for this project
'''

# Regexes & Patterns

# System connection to mongodb
SYSTEM_MONGO = mongo.Connect()  # client, MongoDB connection

ITEM_ORDERS = SYSTEM_MONGO.get_collection(mongo.ITEM_ORDERS)


def sys_db(collection_string):
    return SYSTEM_MONGO.get_collection(collection_string)


def ensure_default_indices():
    """
    Create all the necessary indexes for the project based on a received collection.
    """

    db_index(ITEM_ORDERS, 'platform')
    db_index(ITEM_ORDERS, 'name')
    db_index(ITEM_ORDERS, 'platformItemId')
    db_index(ITEM_ORDERS, 'purchaseDateTime')
    db_index(ITEM_ORDERS, 'purchaseCustomerId')
    db_index(ITEM_ORDERS, 'platform', 'store')
    db_index(ITEM_ORDERS, 'platform', 'store', 'purchaseDateTime')


def db_index(collection, *indices, **kwargs):
    """
    Provided a collection object and a list of index strings, will create indexes.
    supports both compound and singular indexes. supports all native pymongo
    keyword arguments (i.e. unique, partialFilterExpression, background, sparse, etc.)
    """
    index_request = []
    for index in indices:
        index_request.append((index, 1))
    collection.create_index(index_request, **kwargs)


def chunks(lst, n):
    """Yield successive n-sized chunks from lst."""
    for i in range(0, len(lst), n):
        yield lst[i:i + n]


def remove_duplicate_lists(list_of_lists):
    """
    Removes the duplicate within a list. All of the items in the sublist
    should be hashable primary items.
    """
    return list(list(item) for item in set([tuple(sublist) for sublist in list_of_lists]))


def dictionary_diff(previous, new, replaced=True):
    """
    Provided a dictionary, will return a dictionary of the values that have
    been changed. By default will return the previous values of the changed
    keys, but if 'replaced' == False, will return the the updated values of
    the keys.

    Only dictionaries are treated as root items. Additions or subtractions
    to lists will return the whole list as a diff or insert, even if the
    change is just an addition.
    """

    diff_dict = {}

    for key in list(new.keys()) + list(previous.keys()):
        new_value = new.get(key, None)
        old_value = previous.get(key, None)

        if old_value != new_value:
            if isinstance(old_value, dict) and isinstance(new_value, dict):
                diff_dict[key] = dictionary_diff(
                    old_value, new_value, replaced)
            else:
                diff_dict[key] = old_value if replaced else new_value

    return diff_dict


def section_by_key(list_items, key):
    """
    Given a list of items, will section them off by the provided key.
    Will return a dictionary of the following form:

    {
        val1 : [sublist with item[key] == val1],
        val2: [sublist with item[key] == val2]
    }
    """

    my_dict = {}
    for item in list_items:
        if key in item:
            my_dict[item[key]] = my_dict.get(item[key], []) + [item]
    return my_dict


def list_to_csv(object_list, file_path=None):
    if not file_path:
        file_path = 'list_csv.csv'
    try:
        pd.DataFrame(object_list).to_csv(file_path)
        return True
    except Exception:
        return False


ensure_default_indices()

if __name__ == "__main__":
    pass
