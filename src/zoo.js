(function() {
  'use strict';

  let Animal = window.zoo.Animal;
  let Wombat = window.zoo.Wombat;
  let Platypus = window.zoo.Platypus;
  let currentDate = Date.now();

  let timothy = new Animal('timothy', new Date('1/1/1980'), new Date());
  timothy.changeWhatIAmCalled('cassandra');
  console.log(timothy.name);
  let allan = new Animal('allan');
  allan.changeWhatIAmCalled('Jackson', new Date('1/1/2006'));
  console.log(allan.name);

  console.log(timothy.toString());

  let webbedFeetLength = 20;
  let clawLength = 15;
  let species1 = 'Vombatus';
  let species2 = 'Echidna';


}());
