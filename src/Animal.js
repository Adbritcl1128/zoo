(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {
    constructor(name, dateofBirth) {
      this.name = name;

      if ( ! (dateofBirth instanceof Date) ) {
        dateofBirth = new Date();
      }
      this.dob = dateofBirth;
    }

    ageInYears() {
      let now = new Date();
      let age = (now.getFullYear() - this.dob.getFullYear());
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
