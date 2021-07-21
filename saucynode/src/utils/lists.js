const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/**
 * Provided a list of objects, will split up the items by the value
 * of the specified key. Process works like the following:
 *
 * input: [{key: value1}, {key: value2}, {key: value1}, {key: value3}], key
 * output: {value1: [{key: value1}, {key: value1}], value2: [{key: value2}],  value3: [{key: value3}]}
 *
 * @param {Array<Object>} objectList
 * @param {String} key
 */
const sectionByKey = function(objectList, key) {
  let result = {};
  for (let object of objectList) {
    if (key in object) {
      try {
        result[object[key]].push(object);
      } catch (err) {
        // If we fail to add the object, it's because we
        // haven't initialized the list.
        result[object[key]] = [object];
      }
    }
  }
  return result;
};

/**
 * Provided a list of objects, will print a csv to filePath with a row
 * row corresponding to each object in the list.
 *
 * If list is standard (all objects have the same keys), then the writer
 * will save time by checking the keys of just the first document. If
 * list is not standard, then writer will check each object for unique keys.
 *
 * @param {Array<Object>} objectList
 * @param {String} filePath
 * @param {Boolean} standardList
 */
const listToCsv = async function(
  objectList,
  filePath = null,
  standardList = false,
) {
  if (!filePath) {
    filePath = 'listCsv.csv';
  }
  let csvList = objectList;
  let keyList;
  if (standardList) {
    // If list has standardized keys, build csv using only the first item (saves compute).
    keyList = Object.keys(csvList[0]);
  } else {
    // Iterate through objects and find all possible keys.
    keyList = [
      ...objectList.reduce((reduced, nextObj) => {
        Object.keys(nextObj).forEach((key) => reduced.add(key));
        return reduced;
      }, new Set()),
    ];
  }
  const csvWriter = createCsvWriter({
    path: filePath,
    // Convert key list into structure required by csv writer.
    header: keyList.map((key) => ({ id: key, title: key })),
  });
  try {
    await csvWriter.writeRecords(csvList);
    console.log('Done');
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  sectionByKey,
  listToCsv,
};
