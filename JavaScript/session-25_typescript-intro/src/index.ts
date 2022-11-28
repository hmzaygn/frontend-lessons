export {};
console.log("Hello TypeScript!");

let a = 5;
let b = "hello";

console.log(a);
console.log(b);

let myVar: any = "cw";
myVar = 77;
console.log(myVar);

let v1: unknown = 5;
let v2: number = v1 as number;

console.log(v1, v2);

let firstName = "Mark";
let lastName = "Maddison";

function getFullName(): void {
  console.log(firstName + lastName);
}

function getFullName2(): string {
  return firstName + lastName;
}

getFullName();
console.log(getFullName2());

enum Roles {
  Manager = 1,
  Instructor,
  Mentor,
  Student,
}

console.log(Roles.Instructor);
