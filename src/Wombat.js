(function() {
  'use strict';

  window.zoo = window.zoo || {};



  window.zoo.Wombat = class Wombat extends window.zoo.Animal {
    constructor(name, dateofBirth, clawLength) {
      super(name, dateofBirth);
      if (typeof clawLength !== 'number') {
        throw new TypeError('Claw Length must be a number');
      }
      this.clawLength = clawLength;
      this.species = Wombat.toString();
    }

    getClawLength() {
      return this.length;
    }

    getAge() {
      let age = super.getAge();
      return age * 4;
    }

    static species(){
      return 'Vombatus';
    }

    giveInformation (name, dateOfBirth, clawLength) {
      if ((typeof name !== 'string') || (!(dateOfBirth instanceof Date)) || (typeof clawLength !== 'number')) {
        throw new TypeError("Please enter a valid name, date or Claw Length");
      }
      return new Wombat(name, dateOfBirth, length);
    }



    toString() {
      return this.name + ' is a ' + this.species + ' born on ' + this.dateOfBirth + '!';
    }

    run(duration) {
      let speed = 5;
      return (speed * duration);
    }
  };




}());
