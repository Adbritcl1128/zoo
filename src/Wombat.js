(function() {
  'use strict';

  window.zoo = window.zoo || {};



  window.zoo.Wombat = class Wombat extends window.zoo.Animal {
    constructor(name, dateofBirth, clawLength) {
      super(name, dateofBirth);
      this.clawLength = clawLength;
      this.species = Wombat.toString();
    }

    getAge() {
      let age = super.getAge();
      return age * 4;
    }

    static species(){
      return 'Vombatus';
    }


    toString() {
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
