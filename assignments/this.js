/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding, using this to select the window/console object on a global scope.
* 2. Implicit Binding, using this in a object's method, accessing data from said method.
* 3. New Binding, using this inside a function, creating a constructor, with an inner function that is excuted through the variable we set.
* 4. Explicit Binding, is when a call or apply method is used to explicitly set this.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function greeting(phrase) {
    console.log(this);
    return phrase;
}
console.log(greeting('What\'s up! Nice to meet you.'));



/* Principle 2
Implicit Binding*/
const person = {
    name: "Sam",
    greetMe: function(name) {
        console.log("Hello, " + name + "! I\'m " + this.name);
    }
}
person.greetMe('Trent');

// Principle 3

function createRoom(room_name) {
    this.room_name = room_name;
    this.size = 'large';
    this.bathroom = false;
    this.cleanRoom = function() {
        console.log('Cleaned ' + room_name + '\'s room');
    };
}
let trentsRoom = new createRoom('Trent');
console.log(trentsRoom);
trentsRoom.cleanRoom();

// Principle 4

// code example for Explicit Binding
function createOffice(office_name) {
    this.office_name = office_name;
    this.size = 'large';
    this.computers = 2;
    this.lockOffice = function() {
        console.log('Locked ' + office_name + '\'s office.');
    };
}
let trentsOffice = new createOffice('Trent');
let joshsOffice = new createOffice('Josh');
trentsOffice.lockOffice.call(joshsOffice);
joshsOffice.lockOffice.apply(trentsOffice);

trentsOffice.lockOffice();
joshsOffice.lockOffice();