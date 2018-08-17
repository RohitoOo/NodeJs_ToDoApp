var events = require('events');

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
