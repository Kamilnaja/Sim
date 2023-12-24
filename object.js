export class Object {
  #position = new Coordinate(0, 0);

  constructor(x, y) {
    this.#position.set(x, y);
  }
}
