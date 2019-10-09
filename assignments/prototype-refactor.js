/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

// function GameObject(attrs) {
//     this.createdAt = attrs.createdAt;
//     this.name = attrs.name;
//     this.dimensions = attrs.dimensions;
//     this.destroy = function(){
//       console.log(`${this.name} was removed from the game`);
//   };
//   }
  
Class GameObject{
    constructor(createdAt, name, dimensions){
    this.createdAt = createdAt;
    this.name = name;
    this.dimensions = dimensions;
    }
    destroy(){
        console.log(`${this.name} was removed from the game`);
    };
}
  // GameObject.prototype.destroy = function(){
  //   return `${this.name} was removed from the game`;
  // };
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
  function CharacterStats(stats){
    this.healthPoints = stats.healthPoints;
    GameObject.call(this,stats);
    this.areStats = stats.areStats;
    this.takeDamage = function(){
      return `${this.name} took damage`;
    };
  };
  
  // CharacterStats.prototype.takeDamage = function(){
  //   return `${this.name} took damage`;
  // };
  
  CharacterStats.prototype = Object.create(GameObject.prototype);
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  function Humanoid(human){
    this.team = human.team;
    this.weapons = human.weapons;
    this.language = human.language;
    GameObject.call(this,human);
    CharacterStats.call(this,human);
    this.greet = function(){
      return `${this.name} offers a greeting in ${this.language}`;
  }}
  // Humanoid.prototype.greet = function(){
  //   return `${this.name} offers a greeting in ${this.language}`;
  // }
  
  Humanoid.prototype = Object.create(CharacterStats.prototype);
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  function Villain(villain){
    Humanoid.call(this,villain);
    this.attack = function(character){
      character.healthPoints -=5;
      // console.log(character.healthPoints);
      if(character.healthPoints == 0){
        character.destroy();
      }
  }
  }
  
  Villain.prototype = Object.create(Humanoid.prototype);
  
  function Hero(hero){
    Villain.call(this,hero);
  }
  
  Hero.prototype = Object.create(Humanoid.prototype);
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    const newVillain = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 20,
      name: 'evil',
      team: 'evil',
      weapons: [
        'evil stuff',
      ],
      language: 'Common Tongue',
    });
  
  
    const newHero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 20,
      name: 'good',
      team: 'good',
      weapons: [
        'gooder stuff',
      ],
      language: 'Common Tongue',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(newVillain.attack(mage));
    newVillain.attack(newHero);
    newHero.attack(newVillain);
    newVillain.attack(newHero);
    newHero.attack(newVillain);
    newVillain.attack(newHero);
    newHero.attack(newVillain);
    newVillain.attack(newHero);
    newHero.attack(newVillain);
  
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!