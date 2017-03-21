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


      if ( ! (dateofBirth instanceof Date) ) {
        dateofBirth = new Date();
      }
      if(dateofBirth instanceof Date)
      throw new TypeError('enter a real date of birth');
    }
  

    getAge() {
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
