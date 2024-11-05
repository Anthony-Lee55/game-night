let tony = {
  name: 'Tony',
  score: 0
}

let tim = {
  name: 'Tim',
  score: 0
}


export class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
  }
  check() {
    if (this.name == 'Tony') {
      console.log(`${this.name} here`);
    } else {
      console.log(`${this.name}, also here`);
    }
  }
}