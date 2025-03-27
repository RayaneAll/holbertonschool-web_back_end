export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    this._size = size;
    this._location = location;
  }

  // When cast to a number, return the size
  valueOf() {
    return this._size;
  }

  // When cast to a string, return the location
  toString() {
    return this._location;
  }
}
