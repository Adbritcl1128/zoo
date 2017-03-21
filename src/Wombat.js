(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Wombat = class Wombat extends Animal {
    constructor(name, dateofBirth, clawLength) {
      super(name, dateofBirth);
      this.clawLength = clawLength;
      this.species = Wombat.toString();
    }



    static toString() {
    return this.name + ' is a ' + this.species;
    }

    /**
     *
     */
    run(duration) {
      let speed = 5;
      return (speed * duration);
    }
  };




}());
