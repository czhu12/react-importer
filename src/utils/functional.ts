export function has<T extends { indexOf: (value: any) => number }>(
  collection: T,
  value: any
): boolean {
  return collection.indexOf(value) !== -1;
}

export function eachWithObject<T, P>(
  collection: T[],
  callback: (item: T, obj: Record<string, P>) => void
): Record<string, P> {
  const obj: Record<string, P> = {};
  collection.forEach((item) => {
    callback(item, obj);
  });
  return obj;
}

export function hasData(row: Record<string, any>) {
  const data = { ...row };
  delete data.rowIndex;
  const values = Object.values(data);
  return values.length > 0;
}
