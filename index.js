/*Напишіть функцію checkBrackets(str) яка приймає рядок жс коду (someFn)
  і перевіряє правильність закриття дужок () {} []
  Якщо рядок містить коректний код функція повертає true.
  В іншому випадку повертає false
*/
/* const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

function checkBrackets(someFn) {}

console.log(checkBrackets(someFn)); */

const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

const bracketOpen = "("; // створюємо змінну для кожної дужки, щоб зручніше з ним працювати далі
const bracketClose = ")";
const bracketCurvyOpen = "{";
const bracketCurvyClose = "}";
const bracketSqOpen = "[";
const bracketSqClose = "]";
const newArr = someFn.split(""); //  приводимо рядок до масиву щоб зручно було фільтрувати

function checkBrackets(someFn) {
  const isOrdinaryCorrect = checkOrdinaryBrackets(
    newArr,
    bracketOpen,
    bracketClose
  );
  const isCurvyCorrect = checkCurvyBrackets(
    newArr,
    bracketCurvyOpen,
    bracketCurvyClose
  );
  const isSqCorrect = checkSqBrackets(newArr, bracketSqOpen, bracketSqClose);

  console.log("Ordinary Brackets Order:", isOrdinaryCorrect);
  console.log("Curvy Brackets Order:", isCurvyCorrect);
  console.log("Square Brackets Order:", isSqCorrect);
}

// перевіряємо по черзі кожен тип дужок: по-перше, дивимося чи присутні обидві,
//а якщо так, то перевіряємо, чи відкриваюча дужка стоїть перед закриваючою

function checkOrdinaryBrackets(newArr, bracketOpen, bracketClose) {
  const openIndex = newArr.indexOf(bracketOpen);
  const closeIndex = newArr.indexOf(bracketClose);
  if (openIndex !== -1 && closeIndex !== -1) {
    return openIndex < closeIndex;
  } else {
    return false;
  }
}

function checkCurvyBrackets(newArr, bracketCurvyOpen, bracketCurvyClose) {
  const openIndex1 = newArr.indexOf(bracketCurvyOpen);
  const closeIndex1 = newArr.indexOf(bracketCurvyClose);
  if (openIndex1 !== -1 && closeIndex1 !== -1) {
    return openIndex1 < closeIndex1;
  } else {
    return false;
  }
}

function checkSqBrackets(newArr, bracketSqOpen, bracketSqClose) {
  const openIndex2 = newArr.indexOf(bracketSqOpen);
  const closeIndex2 = newArr.indexOf(bracketSqClose);
  if (openIndex2 !== -1 && closeIndex2 !== -1) {
    return openIndex2 < closeIndex2;
  } else {
    return false;
  }
}

checkBrackets(someFn);
