const myEach = (collection, callback) => {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)

    for (let i = 0; i < newCollection.length; i++)
      callback(newCollection[i])

    return collection
}

const myMap = (collection, callback) => {
    if (!(collection instanceof Array))
    collection = Object.values(collection)

  const newArr = []

  for (let i = 0; i < collection.length; i++)
    newArr.push(callback(collection[i]))

  return newArr
}

const myReduce = function (collection, callback, acc) {
    let newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
  
    if (!acc) {
      acc = newCollection[0];
      newCollection = newCollection.slice(1);
    }
  
    const len = newCollection.length;
  
    for (let i = 0; i < len; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
  };

  const myFind = function (collection, predicate) {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) return newCollection[idx];
    }
  
    return undefined;
  };
  
  const myFilter = function (collection, predicate) {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
  
    const newArr = [];
  
    for (let idx = 0; idx < newCollection.length; idx++) {
      if (predicate(newCollection[idx])) newArr.push(newCollection[idx]);
    }
  
    return newArr;
  };
  
  const mySize = function (collection) {
    const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
    return newCollection.length;
  };
  
  const myFirst = function (arr, stop = false) {
    return stop ? arr.slice(0, stop) : arr[0];
  };
  
  const myLast = function (arr, start = false) {
    return start
      ? arr.slice(arr.length - start, arr.length)
      : arr[arr.length - 1];
  };

  const myKeys = function (obj) {
    const keys = [];
    for (let key in obj) {
      keys.push(key);
    }
    return keys;
  };
  
  const myValues = function (obj) {
    const values = [];
    for (let key in obj) {
      values.push(obj[key]);
    }
    return values;
  };