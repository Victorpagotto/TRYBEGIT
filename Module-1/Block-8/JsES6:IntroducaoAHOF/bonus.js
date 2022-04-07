;
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: 0,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: 0,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: 0,
};
const battleMembers = { mage, warrior, dragon };
const dragonDamage = (strength) => Math.floor((Math.random()*strength) + 15);
const warriorDamage = (strength, weapomDmg) => Math.floor((Math.random()*weapomDmg) + strength);
const mageDamage = (int) => {
  const mageturn = {
    damage: Math.floor((Math.random() * int) + int),
    lostMana: 15,
  };
  return mageturn;
}

const gameActions = {
  warriorTurn(func) {
    const damaging = func(warrior.strength, warrior.weaponDmg);
    dragon.healthPoints -= damaging;
    warrior.damage += damaging;
  },
  mageTurn(func) {
    const damaging = func(mage.intelligence);
    dragon.healthPoints -= damaging.damage;
    mage.mana -= damaging.lostMana;
    mage.damage += damaging.damage;
  },
  dragonTurn(func) {
    const damaging = func(dragon.strength);
    warrior.healthPoints -= damaging;
    mage.healthPoints -= damaging;
    dragon.damage += 2 * damaging;
  },
  battle() {
    console.log(battleMembers);
  },
};
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.battle();
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.battle();
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.battle();
gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.battle();