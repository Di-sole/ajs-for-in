export default function orderByProps(obj, [...keys]) {
  const arr1 = [];

  keys.forEach((elem) => {
    arr1.push({ key: elem, value: obj[elem] });
  });

  const arr2 = [];

  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop) && !keys.includes(prop)) {
      arr2.push({ key: prop, value: obj[prop] });
    }
  }

  arr2.sort((a, b) => (a.key > b.key ? 1 : -1));

  return arr1.concat(arr2);
}
