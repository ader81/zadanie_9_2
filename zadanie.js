var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = [];
var arr = allNames.concat(femaleNames,maleNames);
var newName = 'Arek';
  if (arr.indexOf(newName) ===-1) {
  var name = arr.push(newName);
  };
console.log(arr);