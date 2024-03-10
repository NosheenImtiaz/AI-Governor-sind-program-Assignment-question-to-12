//Question#1 
//this program just helloo world
console.log("helloo world");
//Question#2
//this program print " helloo Eric ,would you like to lean python today ?"
var Name = "Eric";
console.log("Helloo ".concat(Name, ", would you like to learn python today?"));
//Question#3 
// convert in lowercase
console.log("lowerCase", Name.toLowerCase());
console.log("UpperCase", Name.toUpperCase());
console.log("titlecase:", Name.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
// question # 4 : Famous quote
console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\"");
// question # 5:
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said,\"A person who never made a mistake never tried anything new.\"");
console.log(message);
// Question# 6 :  Stripping Names
var whitespaceName = "\n\t Nosheen Kanwal\t\n";
console.log(whitespaceName);
var withoutwhitespaceName = whitespaceName.trim();
console.log(withoutwhitespaceName);
// Question 7 : playing with 8 ( addition, subtraction, multiplication, division
// addition
console.log(4 + 4);
// subtration 
console.log(12 - 4);
//multiplication
console.log(2 * 4);
// Division
console.log(16 / 2);
//Question#8...printing 8 four times
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
// Question#9  The program prints favourite number stored in variable
var fav_number = 5;
console.log("My favourite number is ".concat(fav_number, "."));
//Question#10   explain use of comments
// Nosheen Kanwal
// This program prints a personal mesage 
var My_Name = "Nosheen Kanwal";
console.log("Helloo ".concat(My_Name, ",hope u enjoying coding in typesript?"));
// Question # 11 
// This program creates an array named "Name"
var Friend_Name = ["Nosheen", "Atiya", "Basma", "Hina", "Farheen"];
for (var i = 0; i < Friend_Name.length; i++) {
    console.log(Friend_Name[i]);
}
//Question#12 Greeting:Array
//let Friend_Name: string[]= [`Nosheen`,`Atiya`,`Basma`,`Hina`,`Farheen`];
for (var _i = 0, Friend_Name_1 = Friend_Name; _i < Friend_Name_1.length; _i++) {
    var name_1 = Friend_Name_1[_i];
    console.log("Helloo ".concat(Friend_Name, ",how are you?"));
}
