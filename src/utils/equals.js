const equals = (object1, object2) =>
  (Object.keys(object1).length === Object.keys(object2).length
    ? Object.keys(object1).reduce((e, key) => {
      if (e && typeof object1[key] === 'object' && object1[key] !== null) {
        return equals(object1[key], object2[key]);
      }
      return e && object1[key] === object2[key];
    }, true)
    : false);

export default equals;
