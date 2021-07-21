function chunk(list, chunkLength) {
  chunkLists = [];
  for (let i = 0; i < list.length; i += chunkLength) {
    chunkLists.push(list.slice(i, i + chunkLength));
  }
  return chunkLists;
}

module.exports = chunk;
