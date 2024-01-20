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

/* const someFn = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`; */

const str = `function foo() {
  const arr = [1, 2, 3];
  console.log(arr);
}`;

function checkBrackets(str) {
  const stack = [];
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    if (bracket === "(" || bracket === "{" || bracket === "[") {
      stack.push(bracket);
    }
    if (bracket === "}" || bracket === ")" || bracket === "]") {
      const lastEl = stack.pop();
      if (bracket !== obj[lastEl]) {
        return false;
      }
    }
  }
  if (stack.length) return false;
  return true;
}
console.log(checkBrackets(str));
