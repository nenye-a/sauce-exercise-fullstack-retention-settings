/**
 * Provided a list of objects, will split up the items by the value
 * of the specified key. Procses works like the following:
 *
 * input: [{key: value1}, {key: value2}, {key: value1}, {key: value3}], key
 * output: {value1: [{key: value1}, {key: value1}], value2: [{key: value2}],  value2: [{key: value3}]}
 *
 * @param {Array<Object>} objectList
 * @param {*} key
 */
export default function sectionByKey(objectList, key) {
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
}
