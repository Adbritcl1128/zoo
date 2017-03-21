(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Platypus = class Platypus extends Animal {
    constructor(name, dateofBirth, transportation) {
      super(name, dateofBirth);
      this.webbedFeetLength = webbedFeetLength;
      this.species = Platypus.toString();
    }

    static toString() {
      return this.name + ' is a ' + this.species;
    }

    swim(duration) {
      return (speed * duration);
    }
  };




}());
