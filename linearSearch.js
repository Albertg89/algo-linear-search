
function linearSearch(searchTerm, arr) {
  
  for (let idx in arr){
    if (arr[idx] === searchTerm)
      return Number(idx);
  }
    return undefined
}

function globalLinearSearch(searchTerm, arr) {
  let result = []
  for (let idx in arr) {
    if (arr[idx] === searchTerm)
      result.push(Number(idx))
  }
  return result;
}

module.exports = { linearSearch, globalLinearSearch };
