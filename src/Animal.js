(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    constructor(name, dateofBirth) {
      if(!(name instanceof String)) {
        throw new TypeError('not a valid name');
      }
      this.name = name;
      this.dob = dateofBirth;


      if (typeof newName !== 'string') {
        throw new TypeError('enter a real name');
      }
      this.name = newName;
    }


    getAge() {
      let birthYear = this.dob.getFullYear();
      if (birthYear < 1930 || birthYear > 2017); {
        throw new Error('birthday must be between 1930 and 2017');
      }
      let currentYear = new Date();
      let year = currentYear.getFullYear();

      let age = year - birthYear;
      return age;
    }


    changeWhatIAmCalled(newName) {
      this.name = newName;
    }

    toString() {
      return this.name + ' was born on ' + this.dob;
    }


  };





}());
