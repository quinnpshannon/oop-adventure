const zone = document.getElementById('adventure-zone');
const row = document.createElement('main');
// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"],
//     companion: {
//         name: "Leo",
//         type: "Cat",
//         companion: {
//             name: "Frank",
//             type: "Flea",
//             inventory: ["small hat", "sunglasses"]
//         }

//     },
//     roll (mod = 0) {
//         const result = Math.floor(Math.random() * 20) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     }
// }
// adventurer.inventory.forEach(element=>{
//     console.log(element)
// });
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();
// adventurer.roll();
class Character {
    static MAX_HEALTH = 100;
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
    printout() {
        return `Character ${this.name}
        ${this.health} HP
        Inventory: ${this.inventory}`;
    }
}
class Adventurer extends Character {
    static ROLES = ['Fighter','Healer','Wizard','Bard'];
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      // If you try to pass something that isn't a normal role...
      // Well, you're a Fighter now.
      Adventurer.ROLES.includes(role) ? this.role = role : this.role = Adventurer.ROLES[0];
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    setRole (roleNum) {
        (roleNum>=0 && roleNum<ROLES.length) ? this.role = Character.ROLES[roleNum] : console.log('Not a valid Role Number');
    }
    printout() {
        return `Adventurer ${this.name} the ${this.role}!
        ${this.health} HP
        Inventory: ${this.inventory}
        `;
    }
}
class Companion extends Character {
    constructor (name, type) {
      super(name);
      // Companions have types!
      this.type = type;
      // Companions seem like they are broke.
    }
    // Companions can encourage an adventurer
    encourage () {
      console.log(`${this.name} is trying to be encouraging!`);
      super.roll();
    }
    printout() {
        return `Companion ${this.name} the ${this.type}!
        ${this.health} HP
        Inventory: ${this.inventory}
        `;
    }
}
const robin = new Adventurer('Robin','Bard');
robin.inventory.push("sword");
robin.inventory.push("potion");
robin.inventory.push("artifact");
robin.companion = new Companion('Leo','Cat');
robin.companion.companion = new Companion('Frank','Flea');
robin.companion.companion.inventory.push('small hat');
robin.companion.companion.inventory.push('sunglasses');
robin.companion.encourage();
const robinBox = document.createElement('p');
robinBox.innerText = robin.printout();
const leoBox = document.createElement('p');
leoBox.innerText = robin.companion.printout();
const frankBox = document.createElement('p');
frankBox.innerText = robin.companion.companion.printout();
row.appendChild(robinBox);
row.appendChild(leoBox);
row.appendChild(frankBox);
zone.appendChild(row);