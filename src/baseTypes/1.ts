// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize;
// let callback = (a) => { return 100 + a };

// export {};

let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: any = null;
let notInitialize: any;
let callback: (a: number) => number = (a: number): number => {
    return 100 + a;
};

export {};
