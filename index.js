fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    //Matt helped with const of and const in. Also Array.isArray() for control flow
    each: function(collection, cb) {
      if (Array.isArray(collection)) {
        for (const element of collection){
          cb(element, collection)
        }
      } else {
        for (const key in collection){
          cb(key, collection[key], collection)
        }
      }

      return collection
    },

    map: function(collection, cb) {
      let newArr = []

      if (Array.isArray(collection) === true) {
        for (const element of collection){
          let newVal = cb(element, collection)
          newArr.push(newVal)
        }
      } else {
        for (let key in collection){
          let newVal = cb(collection[key])
          newArr.push(newVal)
        }
      }
    return newArr;
    },

    //Scott figured out acc needs to be assigned to cb return value
    reduce: function(arr, cb, acc) {
      for (const element of arr) {
        acc = cb(acc, element, arr)
      }
      return acc
    },

    //I figured out return false is on wrong line
    find: function(collection, predicate){
      for (const element of collection){
        if (predicate(element)) {
          return true
        }
      }
      return false
    },

    filter: function(collection, predicate){
      newArr = []
      for (const element of collection){
        if (predicate(element)) {
          newArr.push(element)
        }
      }
      return newArr
    },

    //Laura helped with refactor
    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(collection, n) {
      if (n === undefined) {
        return collection[0];
      } else {
        return collection.splice(0, n)
      }
    },

    last: function(collection, n) {
      if (n === undefined) {
        return collection[collection.length - 1];
      } else {
        return collection.slice(-n)
      }

    },

    compact: function(array) {
      let newArr = []
      for (const element of array){
        if (element) {
          newArr.push(element)
        }
      }
      return newArr
    },

    sortBy: function(array, cb) {
      let newArr = []
      for (const element of array) {
        newArr.push(cb(element))
      }
      return newArr.sort(function (a, b) {
        return a - b
      })
    },

    flatten: function(arr, shallow = false, newArr = []) {
      if (shallow) {
        for (const element of arr) {
          if (Array.isArray(element)) {
            for (const e of element){
              newArr.push(e)
            }
          } else {
            newArr.push(element)
          }
        }
      } else {
        for (const element of arr) {
          if (Array.isArray(element)) {
            // debugger;
            fi.flatten(element, false, newArr)
          } else {
            newArr.push(element)
          };
        };
      }
      return newArr;
    },

    uniq: function(arr, isSorted, cb) {
      let newArr = []
      let cbArr = []
      if (cb === undefined) {
        for (const element of arr) {
          if (!newArr.includes(element)) {
            newArr.push(element)
          }
        }
        return newArr
      } else {
        for (const element of arr) {
          cb(element)
        }
        console.log(cbArr)
        for (const e of cbArr) {
          if (!newArr.includes(e)) {
            newArr.push(e)
          }
        }
      }
      return newArr
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
