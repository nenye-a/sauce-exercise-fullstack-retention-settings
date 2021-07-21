# Sauce Exercise

This is a repo hosts the "Customer Retention & Settings (Sauce Exercise)" exercise.

Instructions provided [here](https://docs.google.com/document/d/1ZHwj7OMi-4kzMKBFt_TUdrgE7RlKg7fxoGGdNqa9FvM/edit).

## Setup Backend (Task 1)

### Python

**Recommended**: Activate your virtual environment prior to initiating set up to keep a clean install. You are recommended to use python version 3.8, but 3.7+ will work.

1. Run `pip install -r requirements.txt && pip install -r dev-requirements.txt` in the root folder.
2. You have been provided with a collection name by the Sauce team. Enter that value into the `saucypython/src/mongo.py` file, at the variable `ITEM_ORDER_COLLECTION_NAME` (location snippet below).
3. We have provided a `.env` folder with the necessary environment variables. This should be in the root folder of the repo, but let us know if you see any issues. **If you don't have this, the code will not run.**
4. Create base functions in the `saucypython/src/retention.py` folder. Feel free to make supporting functions in additional files.
5. To run the retention file, run the command `python saucypython/src/retention.py` from the root folder.

```python
# In the 'saucypython/src/mongo.py'

MONGO_DB = 'sauce-exercise'
ITEM_ORDER_COLLECTION_NAME = ''  # TODO: Please enter your collection name
```

### Node

**Recommended**: You are recommended to use node version 12.16, but node versions 12.16 + should work.

1. Ensure that you have Node and [yarn](https://yarnpkg.com/getting-started/install) installed on your computer.
2. Run `yarn` in the root folder.
3. You have been provided with a collection name by the Sauce team. Enter that value into the `saucynode/src/models/itemOrder.py` file, at the variable `itemOrderCollectionName` (location snippet below).
4. We have provided a `.env` folder with the necessary environment variables. This should be in the root folder of the repo, but let us know if you see any issues. **If you don't have this, the code will not run.**
5. Create functions in the `saucynode/src/retention.js` folder. Feel free to make supporting functions in additional files.
6. To run the retention file, run either `node saucynode/src/retention.js` or `yarn start:saucynode`

```js
// In the 'saucynode/src/models/itemOrder.py' file

const itemOrderCollectionName = ''; // TODO: Please enter your collection name
```

## Frontend Set up (Task 2)

**Recommended**: You are recommended to use node version 12.16, but node versions 12.16 + should work.

1. Ensure that you have Node and [yarn](https://yarnpkg.com/getting-started/install) installed on your computer.
2. Run `yarn` in the root folder.
3. If you wish to add anything to an environment variables file, feel free to do so in a .env folder.

## Run Instructions

### `yarn start:frontend`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Designs

![image](https://user-images.githubusercontent.com/57047007/111898472-7f39ad80-89e3-11eb-83a9-fa7ae33653bc.png)
![image](https://user-images.githubusercontent.com/57047007/111898476-83fe6180-89e3-11eb-9c2b-bee954f65392.png)
![image](https://user-images.githubusercontent.com/57047007/111898473-82349e00-89e3-11eb-8184-dd3854d263de.png)
![image](https://user-images.githubusercontent.com/57047007/111898482-8660bb80-89e3-11eb-9930-bba34644b12f.png)

## Other

We've provided a set of utility functions that you may find useful. No need to use them.

If you'd like to make some adjustments to the mongodb collection take a look at the following. Again, the focus of the exercise isn't to make you test your knowledge of mongodb. If you prefer to implement without Mongo from the csv file, feel free to. If you do choose to read, you will fine looking at the documentaiton for find & update most relevant.

- [Python Mongodb Reference](https://pymongo.readthedocs.io/en/stable/api/pymongo/collection.html)
- [Node Mongodob Reference](https://docs.mongodb.com/manual/crud/)


If you have any questions, feel free to email [nenye@saucepricing.com](mailto:nenye@saucepricing.com)
