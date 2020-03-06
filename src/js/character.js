/* eslint-disable linebreak-style */
export default class Character {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }

  hit(damage) {
    this.health -= damage;
  }

  healthStatus() {
    let status = null;
    if (this.health > 50) {
      status = 'healthy';
    } else if (this.health < 50 && this.health > 15) {
      status = 'wounded';
    } else {
      status = 'critical';
    }
    return status;
  }
}
