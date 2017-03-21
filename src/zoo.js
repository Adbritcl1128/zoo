(function() {
  'use strict';

  window.zoo = window.zoo || {};


  let Animal = window.zoo.Animal;
  let Wombat = window.zoo.Wombat;
  let Platypus = window.zoo.Platypus;
  let currentDate = Date.now();

  // try {
  //   let testing = new Platypus('test');
  //   console.log(Testing);
  // } catch(err) {
  //   console.warn('SAD',err);
  // }

  let timothy = new Wombat('timothy', new Date('1/1/1980'));
  timothy.changeWhatIAmCalled('cassandra');
  console.log(timothy.name);
  let allan = new Platypus('allan');
  allan.changeWhatIAmCalled('Jackson', new Date('1/1/2006'));
  console.log(allan.name);

  console.log(timothy.toString());

  let webbedFeetLength = 20;
  let clawLength = 15;
  let species1 = 'Vombatus';
  let species2 = 'Echidna';


}());
