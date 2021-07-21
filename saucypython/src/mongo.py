from decouple import config
from pymongo import MongoClient
from pymongo.errors import BulkWriteError
import urllib

'''

File to manage the connection to MongoDB resources. This includes managemenet of the connection,
as well as actual connection to the databases that are used.

'''

# Errors
BWE = BulkWriteError

# Authentication
MONGO_USER = config('MONGO_USER')
MONGO_PASS = config('MONGO_DB_PASS')
MONGO_DB = 'sauce-exercise'  # Do not adjust this, or you won't be able to access your data
ITEM_ORDER_COLLECTION_NAME = ''  # TODO: Please enter your collection name

# Database Collections
ITEM_ORDERS = f"{MONGO_DB}.{ITEM_ORDER_COLLECTION_NAME}"

'''Item Order Structure

{
  platform: { type: String, index: true },
  name: { type: String, index: 1 },
  purchasePrice: Number,
  purchasedQuantity: Number,
  platformItemId: { type: String, index: 1 },
  platformCustomerId: { type: String, index: 1 },
  purchaseDateTime: { type: Date, index: 1 },
  orderId: mongoose.Types.ObjectId,
  testId: { type: mongoose.Types.ObjectId, ref: 'priceSplit' },
  testStatus: { type: String, enum: ['control', 'experiment', null] },
}

ItemOrder.index({
  platform: 1,
  store: 1,
});

ItemOrder.index({
  platform: 1,
  store: 1,
  purchaseDateTime: 1,
});

'''


class Connect(object):

    def __init__(self, connect=True):
        """
        Initialize connection to mongo_db database. By default,
        connection will automatically connect.

        Parameter:
        connect (boolean): True to connect on open, False to remain unconnected until first action.
        """
        self.connection = self.get_connection(connect)

    @staticmethod
    def get_connection(connect=True):
        mongo_uri = "mongodb+srv://" + urllib.parse.quote(MONGO_USER) + ":" + urllib.parse.quote(
            MONGO_PASS
        ) + "@cluster0-c2jyp.mongodb.net/?retryWrites=true&ssl_cert_reqs=CERT_NONE"
        return MongoClient(mongo_uri, connect=connect)

    def get_collection(self, collection_path):
        """
        Provided the collection path, will return the collection object of this connection.

        Parameters:
        collection_path (string): string path to the collection, starting first with the database

        """

        path = [path_item.strip() for path_item in collection_path.split('.')]
        collection = self.connection
        for db_item in path:
            collection = collection[db_item]

        return collection

    def close(self):
        """Close connection"""
        self.connection.close()
