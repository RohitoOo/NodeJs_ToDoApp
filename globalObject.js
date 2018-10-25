var timer = setInterval( () => {
    console.log("I'm a Global Object enbedded inside a global object")
    clearInterval(timer);
}, 2000)

var dirname = (__dirname);

console.log("Current Directory : " + dirname); 

