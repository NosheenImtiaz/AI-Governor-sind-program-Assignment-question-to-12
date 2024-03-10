//Question#1 
//this program just helloo world
console.log("helloo world");

//Question#2
//this program print " helloo Eric ,would you like to lean python today ?"
let Name= "Eric";
console.log(`Helloo ${Name}, would you like to learn python today?`);

//Question#3 
// convert in lowercase
console.log("lowerCase", Name.toLowerCase());
console.log("UpperCase", Name.toUpperCase());
console.log("titlecase:", Name.replace(/\bw/g,c => c.toUpperCase()));



// question # 4 : Famous quote
console.log(`Albert Einstein once said, "A person who never made a mistake never tried anything new."`);


// question # 5:
let famous_person: string ="Albert Einstein";
let message: string = `${famous_person} once said,"A person who never made a mistake never tried anything new."`;
console.log(message);


// Question# 6 :  Stripping Names
let whitespaceName ="\n\t Nosheen Kanwal\t\n";
console.log(whitespaceName);
let withoutwhitespaceName = whitespaceName.trim();
console.log(withoutwhitespaceName);


// Question 7 : playing with 8 ( addition, subtraction, multiplication, division
// addition
console.log(4+4);
// subtration 
console.log(12-4);
//multiplication
console.log(2*4);
// Division
console.log (16/2);



//Question#8...printing 8 four times
console.log(5+3);
console.log(5+3);
console.log(5+3);
console.log(5+3);


// Question#9  The program prints favourite number stored in variable
let fav_number: number =5;
console.log(`My favourite number is ${fav_number}.`);


//Question#10   explain use of comments
// Nosheen Kanwal
// This program prints a personal mesage 
let My_Name : string ="Nosheen Kanwal";
console.log(`Helloo ${My_Name},hope u enjoying coding in typesript?`);


// Question # 11 
// This program creates an array named "Name"
let Friend_Name: string[]= [`Nosheen`,`Atiya`,`Basma`,`Hina`,`Farheen`];
for(let i=0; i<Friend_Name.length; i++){
    console.log(Friend_Name[i]);
}


//Question#12 Greeting:Array
//let Friend_Name: string[]= [`Nosheen`,`Atiya`,`Basma`,`Hina`,`Farheen`];
for (let name of Friend_Name ) {
    console.log(`Helloo ${Friend_Name},how are you?`);
}
