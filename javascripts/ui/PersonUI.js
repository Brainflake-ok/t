
var $ = require("jquery");
var _ = require("lodash");
var randomPick = require("../util/random").randomPick;

export default class PersonUI {
  constructor(person){
    this.person = person;
    this.element = $(`
        <div>
          <div class="person-name">${this.getName()}</div>
          <div class="person-age">${person.age}</div>
          <div class="person-party">Leans ${this.getParty()}</div>
        </div>
      `);
  }

  getParty(){
    var partyIndex = this.person.parties.indexOf(_.max(this.person.parties));
    return ["Liberal", "NDP", "Conservative"][partyIndex];
  }

  getName(){
    var firstNames = [
      "Bob",
      "John",
      "Sam",
      "Alice",
      "Nicholas",
      "Tony",
      "Bilal",
      "Dave",
      "Mark"
    ];

    var lastNames = [
      "Smith",
      "Tessier-Ashpoole",
      "Potter",
      "Johnson",
      "Xu",
      "Liu",
      "Pagurek van Mossel",
      "Ayylmao",
    ];

    return `${randomPick(firstNames)} ${randomPick(lastNames)}`;
  }
}