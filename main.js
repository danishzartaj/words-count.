import promptSync from "prompt-sync";
const prompt = promptSync();
let x = prompt("Enter your sentence:? ");
let b = x.trim().split(" ").length;
console.log(b);
