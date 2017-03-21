(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Platypus = class Platypus extends Animal {
    constructor(name, dateofBirth, webbedFeetLength) {
      // if(!(name instanceof String)) {
      //   throw new TypeError('enter a real name');
      // }
      if(!(dateofBirth instanceof Date))
      super(name, dateofBirth);
      this.webbedFeetLength = webbedFeetLength;
      this.species = Platypus.toString();
    }

    toString() {
      return this.name + ' is a ' + this.species;
    }

    static species(){
      return 'Enchinada';
    }

    swim(duration) {
      return (speed * duration);
    }
  };




}());
