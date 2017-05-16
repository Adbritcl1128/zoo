(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Platypus = class Platypus extends Animal {
    constructor(name, dateofBirth, webbedFeetLength) {
      if(!(name instanceof String)) {
        throw new TypeError('enter a real name');
      }
      if(!(name instanceof Date)) {
        throw new TypeError('enter a valid date');
      }
      if(!(dateofBirth instanceof Date))
      super(name, dateofBirth);
      this.webbedFeetLength = webbedFeetLength;
      this.species = Platypus.toString();
    }

    getSkill(speed, duration) {
      if (typeof(speed) !== 'number' || typeof(duration) !== 'number') {
        throw new TypeError('Please enter a valid number');
      }
      let distance = speed * duration;
      return this.name + ' swam ' + distance + ' feet in the wetland ecosystem!';
    }
    swim(duration) {
      let speed = 10;
      return (speed * duration);
    }

    toString() {
      return this.name + ' is a ' + this.species;
    }

    static species(){
      return 'Enchinada';
    }

  };




}());
