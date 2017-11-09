const equals = (object1, object2) =>
  (Object.keys(object1).length === Object.keys(object2).length
    ? Object.keys(object1).reduce((e, key) => {
      if (typeof object1[key] === 'object') {
        return equals(object1[key], object2[key]);
      }
      return e && object1[key] === object2[key];
    }, true)
    : false);

export default equals;
