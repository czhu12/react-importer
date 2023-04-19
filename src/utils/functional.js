export function has(collection, value) {
  return collection.indexOf(value) !== -1
}

export function find(collection, value) {
  return collection.filter(value) === 0
}

export function eachWithObject(collection, callback) {
  const obj = {}
  collection.forEach((item) => {
    callback(item, obj)
  })
  return obj
}
