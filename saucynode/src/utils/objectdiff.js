/**
 * Provided two objects, will return an object of values that have
 * been changed between the objects. By default, will return the
 * previous values of the changed keys, but will return the updated
 * values if replaced. Only pure objects can be treated as roots.
 *
 * @param {Object} previous
 * @param {Object} next
 * @param {Boolean} previousValues
 */
function objectDiff(previous, next, previousValues = true) {
  let diff = {};

  let keys = new Set(Object.keys(previous).concat(Object.keys(next)));

  for (let key of keys) {
    nextVal = next[key] || null;
    prevVal = previous[key] || null;

    if (
      nextVal &&
      nextVal.constructor == Object &&
      prevVal &&
      prevVal.constructor == Object
    ) {
      let oDiff = objectDiff(prevVal, nextVal, previousValues);
      if (Object.keys(oDiff).length) {
        diff[key] = oDiff;
      }
    } else if (prevVal != nextVal) {
      diff[key] = previousValues ? prevVal : nextVal;
    }
  }
  return diff;
}

module.exports = objectDiff;
