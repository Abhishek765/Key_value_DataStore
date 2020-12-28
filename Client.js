// Here we call the Main code library
import main from "./main_code.js";

let Main = new main();

// to create a key with key,value given and with time-to-live property value given(number of seconds)
Main.create("abhi", 70, 3700);

// to create a key with key,value given and with no time-to-live property
Main.create("abhasdf", 211);
Main.create("hhajsd", 223);

console.log("--------Read operation--------")
// Returning the respective Json object for the particular key
console.log(Main.read("abhi"));
console.log(Main.read("hhajsd"));
console.log(Main.read("abhasdf"));

console.log("\n");

console.log("--------Error When trying to creat a new value with already present Key--------")
// it returns an ERROR since the key already exists in the database
Main.create("abhasdf", 58);
console.log("\n");

// To overcome this error
// either use modify operation to change the value of a key
// or use delete operation and recreate it


console.log("--------Modifying the Key value--------")
// it replaces the initial value of the respective key with new value
Main.modify("abhasdf", 58);
console.log(Main.read("abhasdf"));
console.log("\n");


console.log("--------Deleting the Key--------")
//it deletes the respective key and its value from the database(memory is also freed)
Main.delete("abhasdf");
console.log("\n");


console.log("--------Key with Special characters or Space--------")
// Trying to Give a key with Special characters or Space
Main.create("abhi_vish",54);
console.log("\n");

/** Other than HTML5 web workers (which are very tightly controlled), Javascript is single threaded so there are no issues with thread safety. One thread of execution will finish before the next one is started.

 Things like ajax responses go through an event queue and are only executed when any other thread of execution has finished.
**/
