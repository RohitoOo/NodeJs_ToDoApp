var events = require('events');

let iEmmit = new events.EventEmitter(); 


// Used by the developer 
iEmmit.on("saySomething" , (msg) => {
console.log(msg)
});

// Codded in the background of a Library!! like express
iEmmit.emit("saySomething" , "Yess Yess!!")



// Util Module Used to Inherit eventsModules on Person Contructor
var util = require('util');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter)

var Rohito = new Person("Rohito")

Rohito.on('speak' , function(msg) {
  console.log( Rohito.name + " said : " + msg)
})

Rohito.emit('speak' , "Wassssup!");
