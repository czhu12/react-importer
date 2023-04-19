export function has(collection, value) {
  return collection.indexOf(value) !== -1
}

export function find(collection, value) {
  return collection.filter(value) === 0
}
