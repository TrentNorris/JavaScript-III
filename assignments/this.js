/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding, using this to select the window/console object on a global scope.
* 2. Implicit Binding, using this in a object's method, accessing data from said method.
* 3. 
* 4. 
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
Explicit Binding*/
const player = {
    name: "Joseph",
    age: 24,
    id: 66,
    sport: 'basketball',
    player_card: function() {
       return this.name + ", age " + this.age + ", is playing with the lucky jersey number, " + this.id;
    } 
}
console.log(player.player_card());


// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding