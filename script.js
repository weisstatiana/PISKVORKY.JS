'use strict';

let kdoJeNaTahu = 'circle';

document.querySelectorAll('.policko').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (kdoJeNaTahu === 'circle') {
      btn.classList.add('board__field--circle');
      document.querySelector('.ikona-hrac').src = 'circle.svg';
      kdoJeNaTahu = 'cross';
    } else {
      btn.classList.add('board__field--cross');
      document.querySelector('.ikona-hrac').src = 'cross.svg';
      kdoJeNaTahu = 'circle';
    }
    if (isWinningMove(btn)) {
      setTimeout(() => {
        if (kdoJenaTahu === 'cross') {
          confirm('Koliesko vyhrává! Spustiť novú hru?');
          location.reload();
        } else {
          confirm('Křížik vyhrává! Spustiť novú hru?');
          location.reload();
        }
      });
    }
  });
});
const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('board__field--cross')) {
    return 'circle';
  } else if (field.classList.contains('board__field--circle')) {
    return 'cross';
  }
};

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.policko'); // Selektor pozměň tak, aby odpovídal tvému kódu.

const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
