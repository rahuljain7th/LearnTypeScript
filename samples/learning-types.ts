let person1 : {firstname:string,lastname:string}={
    firstname : 'Rahul',
    lastname : 'Jain'
}
// Below Line will not complile
//person1.address = ""

/*any is used to attach any reference later */
let person : any={
    firstname : 'Rahul',
    lastname : 'Jain'
}

person.address = 'This is My Address';


/*Define your Own Type HasName Person3 should have that Property as mandatory */
type HasName = {firstName:string,lastName:string}
let person3 : HasName = {
    firstName : 'Rahul',
    lastName : 'Jain'
}

/*Define your Own Type HasName Person3 should have that Property as mandatory */
type HasName1 = {
    firstName?:string,
    lastName:string
}
let person4 : HasName1 = {
    lastName : 'Jain'
}

// Combining types to Produce Complex Types
type HasName2 = {
    firstname :string,
    lastname : string
}
type HasAddress = {
    address:string
}
type person = {
    name : HasName2,
    adress?: HasAddress
}
let person5:person = {
    name : {
    firstname:'Rahul',
    lastname:'Jain'
    }
}

/* About Function . when writing a Function in Typscript it is a Best Practice
 to Define Function Input and Output Type 
 name is of type which is returning string */
 function createHelloMessage(name:string):string {
      return `Hello My name is ${name}`;
 }

const message = createHelloMessage("Rahul Jain");
console.log(message)

//Create a Function Type 
type MessageCreator = (name1:string)=>string;
const creator : MessageCreator = createHelloMessage;
console.log(creator('Rahul Jain'));


//using interface for message creator
interface MessageCreator1 {
(name1:string):string;
};

const creator1 : MessageCreator1 = createHelloMessage;
console.log(creator('Rahul Jain'));


//Array Strong Typing 
type ThreeName = [string,string,string]

let person6:ThreeName = ['Kim','John','Jim'];

let counters:number[]=[2,2];

type MixType = [string,number]
let personage:MixType = ["rahul",28]


// writing enum
enum PlayerPosition  {
    GUARD, 
    Forward,
    Center

}
type Player = [string,PlayerPosition]

let kobe : Player = ['kobe',PlayerPosition.GUARD]
let ash : Player = ['ash',PlayerPosition.Forward]


let players:Player[]=[kobe,ash]

// as strictNullChecks in tsconfig is you cant assign null or undefined below as it will give comiplation error
//kobe = null;
//kobe = undefined;

//type of virat is defined as null or undefined
let virat : Player | null | undefined = ['virat',PlayerPosition.GUARD]
virat = null


/*Using Interfaces vs Types Best Practice
Interface can be used to hold property
and type can be used to combine /union of Interface contract 
*/
interface HasName4 {
firstname:string
}
interface HasAddress4{
    address:string
}

type player6 = (HasName4 & HasAddress4) | null
const player6 : player6 = {firstname:"rahul",address:"ss"};
console.log("Player 6",player6);