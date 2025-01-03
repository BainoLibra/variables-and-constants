let firstName ="Libra";
let lastName ="Baino";
let title ="juniour developer";
let age =25;
let dateBirth = new Date ("1999, 09, 29");
console.log(firstName + "" + lastName + "" + title + "" + age +"" + dateBirth)
console.log(`FirstName; ${firstName} LastName; ${lastName} Title; ${title} Age; ${age} DateBirth; ${new Date}`)
let upperCase = firstName.toUpperCase();
console.log(upperCase)
let lowerCase = lastName.toLowerCase();
console.log(lowerCase);
console.log(`UpperCase; ${upperCase}`);
console.log(`LowerCase; ${lowerCase}`);
console.log(`UpperCase; ${upperCase} LowerCase; ${lowerCase}`);
let idx1 = firstName.indexOf("Baino");
let idx2 = firstName.indexOf("Bai");
let idx3 = lastName.indexOf("Libra");
let idx4 = lastName.indexOf("Lib");
console.log(`FirstName-idx1; ${idx1}`);
console.log(`FirstName-idx2; ${idx2}`);
console.log(`LasName-idx3; ${idx3}`);
console.log(`LastName-idx4; ${idx4}`);
let length =firstName.length;
console.log(length);
let secondCharacter =lastName[1];
console.log(`secondCharacter; ${secondCharacter}`)
// let doesContain =firstName.includes["Bai"];
// let doesContain1 =lastName.includes["Lib"];
// console.log(`doesContain; ${doesContain}`);
// console.log(`doesContain1; ${doesContain1}`);