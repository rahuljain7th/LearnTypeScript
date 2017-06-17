var person1 = {
    firstname: 'Rahul',
    lastname: 'Jain'
};
// Below Line will not complile
//person1.address = ""
/*any is used to attach any reference later */
var person = {
    firstname: 'Rahul',
    lastname: 'Jain'
};
person.address = 'This is My Address';
var person3 = {
    firstName: 'Rahul',
    lastName: 'Jain'
};
var person4 = {
    lastName: 'Jain'
};
var person5 = {
    name: {
        firstname: 'Rahul',
        lastname: 'Jain'
    }
};
/* About Function . when writing a Function in Typscript it is a Best Practice
 to Define Function Input and Output Type
 name is of type which is returning string */
function createHelloMessage(name) {
    return "Hello My name is " + name;
}
var message = createHelloMessage("Rahul Jain");
console.log(message);
var creator = createHelloMessage;
console.log(creator('Rahul Jain'));
;
var creator1 = createHelloMessage;
console.log(creator('Rahul Jain'));
var person6 = ['Kim', 'John', 'Jim'];
var counters = [2, 2];
var personage = ["rahul", 28];
// writing enum
var PlayerPosition;
(function (PlayerPosition) {
    PlayerPosition[PlayerPosition["GUARD"] = 0] = "GUARD";
    PlayerPosition[PlayerPosition["Forward"] = 1] = "Forward";
    PlayerPosition[PlayerPosition["Center"] = 2] = "Center";
})(PlayerPosition || (PlayerPosition = {}));
var kobe = ['kobe', PlayerPosition.GUARD];
var ash = ['ash', PlayerPosition.Forward];
var players = [kobe, ash];
kobe = undefined;
