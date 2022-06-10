// Write a class called Unicorn
// it should have a dynamic name property
// it should have a color property, that is silver by default
// it should have a method called "say" that returns whatever string is passed in, with "*~*" at the beginning and end of the string
class Unicorn {
  constructor(horn) {
    this.horn = horn;
    this.color = 'Silver';
    this.message =  'message';
  }
  say(say) {
    this.message = say;
  }
}
var unicorn1 = new Unicorn('white');
console.log(unicorn1);

unicorn1.say('Unicorn type beat');
console.log(unicorn1);

// Write a class called Vampire
// it should have a dynamic name property
// it should have a pet property, that is a bat, by default BUT it could be dynamic if info is passed in initially
// it should have a thirsty property, that is true by default
// it should have a drink method. When called, the thirsty property changes to false
class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;
    this.pet = 'bat';
    this.thirsty = true;
  }
  drink(thirst) {
    this.thirsty = false
  }
}
var vamp1 = new Vampire ('Paul');
console.log(vamp1);
vamp1.drink();
console.log(vamp1);

//  Write a Dragon class
// it should have a dynamic name property (string)
//  it should have a dynamic rider property (string)
//  it should have a dynamic color property (string)
//  it should have a isHungry property that is true by default
//  it should have a eat method. If the dragon eats 4 times, it is no longer hungry
  // HINT: This requires you to use your knowledge from the conditionals lesson

  class Dragon {
    constructor(name, rider, color) {
      this.name = name;
      this.rider = rider;
      this.color = color;
      this.ishungry = true;
      this.tummy = 0;
    }
    food(yum) {
      this.ishungry = false
    }
    eat(tummy) {
      this.tummy = this.tummy +1
    }
  }
  var drag1 = new Dragon ('Greg', 'Rick', 'green');
  console.log(drag1);
  drag1.eat();
  console.log(drag1);
  drag1.eat();
  console.log(drag1);
  drag1.eat();
  console.log(drag1);
  drag1.eat();
  if (this.tummy = 4) {
    drag1.food();
  }
  console.log(drag1);
  if (this.tummy = 4) {
    console.log('No longer hungry')
  }
  console.log(drag1);


//  BIG CHALLNEGE: Write a Hobbit class
//  it should have a dynamic name property (string)
//  it should have a dynamic disposition property (string)
//  it should have an age property that defaults to 0
//  it should have a celebrateBirthday method. When called, the age increases by 1
//  it should have an isAdult property (boolean) that is false by default. once a Hobbit is 33, it should be an adult
//  it should have an isOld property that defaults to false. once a Hobbit is 101, it is old.
//  it should have a hasRing property. If the Hobbit's name is "Frodo", true, if not, false.
class Hobbit {
  constructor (name, dispo) {
    this.name = name;
    this.disposition = dispo;
    this.age = 33;
    this.isAdult = false;
    this.isOld = false;
    this.hasRing = false;
  }
  celebrateBirthday(age) {
    this.age = this.age +1
  }
  adultMan(adult) {
    this.isAdult = true
  }
  oldMan(old) {
    this.isOld = true
  }
  oldTime(oneOhOne) {
    this.age = this.age +68
  }
  oneRing(frodo) {
    this.hasRing = true
  }
}


var hob1 = new Hobbit ('Sam', 'Friendly');
if (this.name = 'Frodo' ) {
  hob1.oneRing();
} else if (this.name != 'Frodo') {
  console.log('Not the chosen one');
}
if (this.age = 33) {
  hob1.adultMan();
}
console.log(hob1);
