export default class Action {
  constructor() {
    this.dead = document.getElementById('dead');
    this.lost = document.getElementById('lost');
    this.activeCell = document.getElementsByClassName('cell_has-goblin');
  }

  newCount() {
    this.dead.innerHTML = 0;
    this.lost.innerHTML = 0;
  }

  onStart(res, modalWindow) {
    res.innerHTML = parseInt(res.innerHTML) + 1;
    if (parseInt(res.innerHTML) === 5) {
      alert(modalWindow);
      this.newCount();
    }
  }

  hasGoblin(cell) {
    if (cell.classList.contains('cell_has-goblin')) {
      this.activeCell[0].classList = 'cell';
      this.onStart(this.dead, 'Победа!');
    } else {
      this.onStart(this.lost, 'Вы проиграли!');
    }
  }

  iterCell() {
    for (let i = 1; i <= 16; i += 1) {
      const element = document.getElementById(`cell${i}`);
      element.onclick = () => {
        this.hasGoblin(element);
      };
    }
  }
}
