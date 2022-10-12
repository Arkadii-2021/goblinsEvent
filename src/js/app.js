export default class NewCell {
  constructor() {
    this.activecell = 1;
  }

  static makeCell() {
    const parentEl = document.querySelector('.cell-game');
    for (let i = 1; i <= 16; i += 1) {
      const div = document.createElement('div');
      div.id = `cell${i}`;
      div.classList = 'cell';
      parentEl.appendChild(div);
    }
  }

  static getCell(index) {
    return document.getElementById(`cell${index}`);
  }

  static deactivateCell(index) {
    NewCell.getCell(index).classList = 'cell';
  }

  static activatecell(index) {
    NewCell.getCell(index).classList.toggle('cell_has-goblin');
  }

  nextCell() {
    const next = () => setTimeout(() => {
      NewCell.deactivateCell(this.activecell);
      this.activecell = Math.floor(1 + Math.random() * 16);
      NewCell.activatecell(this.activecell);
      next();
    }, 1000);
    next();
  }
}
