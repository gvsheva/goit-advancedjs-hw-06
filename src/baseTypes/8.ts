/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

// const myGender;

// export {};

type myGender = "male" | "female";

let g: myGender = "male";

export { myGender, g };
