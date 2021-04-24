'use strict';
/* Ahoj, asi sa divíš, prečo tu mám len jednu stránku tejto hry- dovod je, že som si opravením stylovania hracej plochy rozjebkala cele css a nestihla som to opravit, pretože pardon ale tento js kod mi dal strasne zabrat, nez som to napisala tak aby to aj fungovalo... takze odpust, dufam ze do buducej ulohy to stihnem dat cele dokopy*/

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
  });
});
