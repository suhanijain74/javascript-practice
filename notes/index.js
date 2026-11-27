// //basics

// //we can use '',"",`` all are same
// console.log(`hello`)              //this wont be visible but will be present in inspect->console
// window.alert('this is an alert')  //popup alert
// document.getElementById("myH1").textContent = `Hello`; //visible text
// document.getElementById("myP").textContent = `shawtyy`;


// //variables
// let x=10; 
// console.log(`You are ${x} years old.`);

// //strings
// let firstname="suhani";
// console.log(typeof firstname);

// //boolean
// let online =true;
// console.log(`I am online: ${online}`);

// //arthematic operators-same


// //user input - 2 ways--(1) window input, (2) HTML textbox (professional)-----------------------------
// //1. window input
// let username;
// username = window.prompt("What's your username?");
// console.log(username);

// //HTML textbox (professional)
// let username;
// document.getElementById("mysubmit").onclick = function(){
//     username = document.getElementById("mytext").value;
//     username = document.getElementById("myh1-2").textContent=`sup ${username}`;
// }


// //type conversion----------------------------------------------------------------------------------
// let age = window.prompt("How old are you?");
// age =Number(age);
// age+=1;
// console.log(age,typeof age);


// //Math- built in object that provides a collections of properties and methods----------------------

// console.log(Math.PI)   //give value of pi

// let x = 3.67;
// let y =2;
// let z;

// z= Math.round(x); //round off
// z= Math.floor(x); //round down
// z =Math.ceil(x);  //round up
// z= Math.trunc(x); //remove digits after decimal
// z= Math.pow(3,y); // x^y(power)
// z=Math.sqrt(16);  //sq root
// z=Math.log(y);   //log
// z=Math.sin(y); //sin - we can do tan,cos too
// z=Math.abs(x); // makes no. positive
// z=Math.sign(x); // gives sign
// z=Math.max(x,y); // gives max no.
// z=Math.min(x); // gives min no.

// console.log(z);


// //random number generator--------------------------------------------------------------------------

// //random
// let rn =Math.random();
// console.log(rn);

// //between 1-6
// let rn =Math.floor(Math.random()*6)+1;
// console.log(rn);

// //between 2 numbers
// const max = 100;
// const min = 50;
// let rn =Math.floor(Math.random()*(max-min))+min;
// console.log(rn);


//if,else if,else - you already know it!
//syntax:
// if(statement){
//     console.log("bla bla bla");
// }
//else if(statement){
//     console.log("bla bla bla");
// else{
//     console.log("bla bla bla");
// }


//checkbox
const ok = document.getElementById("ok");
const summer = document.getElementById("summer");
const winter = document.getElementById("winter");
const autumn= document.getElementById("autumn");
const mysubmit2 = document.getElementById("mysubmit2");
const subresult = document.getElementById("subresult");
const result = document.getElementById("result");
mysubmit2.onclick=function(){
    if(ok.checked){
        subresult.textContent="you are ok";
    }else{
        subresult.textContent="you are not ok";
    }
    if(summer.checked){
        result.textContent="you like summer";
    }
    else if(autumn.checked){
        result.textContent="you like autumn";
    }
    else if(winter.checked){
        result.textContent="you like winter";
    }
    else{
        result.textContent="choose a season!";
    }
}


// //ternary operator syntax
// //condition ? if statement : else statement;

// //switch  - already know


// //strings-already know


// //method chaining - calling methods one after other in single line of code
// let username= window.prompt("Enter username ");
// username =username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase(); //1st letter capital rest small no matter the input
// console.log(username);


// //logical operators- done

// //assignment operators:  
// //=== strict equality(compares if values and datatypes)


// //function - reuseable code
// // function HBD(parameters){
// //    console.log("Happy Birthday to you!")
//  //}
// //HBD(arguments);


// //array
// let fruits =["apple","banana","mango"];
// fruits.push("lychee"); //add to end
// fruits.pop();   //remove last element
// fruits.unshift("mango"); //add to beggining
// fruits.shift(); //1st 2 elements become undefined


// //spread operator  ... -allows an iteratble (array/string) to be expanded into seperate elements
// let num=[1,2,3,4,5];
// let maximum = Math.max(...num);
// console.log(maximum);

// let fruits = ["apple","banana","mango"];
// let vegetables = ["potato","brocolli","celery"];
// let food =[...fruits,...vegetables,"rice","wheat"];
// console.log(food);


// //rest operator  ...rest- binds seperate elements into an array(used as a functoin only)
// const f1="pizza";
// const f2="burger";
// const f3="sushi";
// const f4="fries";
// order(f1,f2,f3,f4);
// function order(...f){
//     console.log(f);
// }

// //combine strings
// const fullname =combine("Albus","Percival","Wulfric","Brian","Dumbledoor");
// function combine(...name){
//     return name.join(" ");
// }
// console.log(fullname);


// //callback -function that is passed as an argument to anothe function
// sum(display,1,2);

// function sum(callback,x,y){
//     let result =x+y;
//     callback(result);
// }

// function display(result){
//     console.log(result);
// }


// //for each -built in array method in JavaScript that runs a function once for every element in an array.
// let numbers = [1, 2, 3, 4];

// numbers.forEach(function(num) {
//     console.log(num);
// }); 


// //.map()  - accepts a callback and applies that function to all elements of the array then return that array

// const students =["henry","sofia","Nancy","ferb"];
// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper);
// function upperCase(element){
//     return element.toUpperCase();
// }


// //.filter() -creates new array by filtering out elements
// let n =[1,2,3,4,5,6,7];
// function isEven(element){
//     return element%2 ===0;
// }

// let even_n = n.filter(isEven);
// console.log(even_n);


// //.reduce() - reduce the elements of an array to an single element
// const prices =[5,40,15,20,55];

// function sum(accumulator,element){
//     return accumulator+element;
// }

// const total = prices.reduce(sum);

// console.log(`${total.toFixed(2)} Rs`)


// //arrow function - shoter way for functions
// const add = (a, b) => a + b;

// console.log(add(5, 3));


// //object - collection of real world properties   
// //object ={key:value,function()}
// const person= {
//     firstname: "Cruella",
//     lastname: "Deville",
//     age : "27",
//     greet : function(){console.log("well well well")},
//     dialogue: () =>console.log("From the very beginning, I've always made a statement. Not everyone appreciated that, but I wasn't for everyone."),
// }
// console.log(person.firstname);
// person.greet();
// person.dialogue();


// //this - reference to the key value within the object;
// //it does not work with arrow functions
// const person= {
//     firstname: "Super",
//     lastname: "Mario",
//     greet : function(){console.log(`HI, I am ${this.lastname}`)},

// }
// person.greet();


// //constructors -special method for defining properties and methods of objects
// function car(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color
// }
// const car1 =new car("Ford","Mustang","1961","cherry red");
// const car1 =new car("Chevrolet","Camaro","2025","blue");
// console.log(car1.make);
// console.log(car2.make);


// //classes- much cleaner way to work with objects
// class product{
//     constructor(name,price){
//         this.name =name;
//         this.price =price;
//     }

//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: ${this.price}`);
//     }

//     total(tax){
//         return this.price +(this.price *tax);
//     }
// }
// const tax =0.05;
// const product1 =new product("shirt",1200);
// product1.displayProduct();
// const pay  = product1.total(tax);
// console.log(`Total bill(including tax): ${pay}`);


// //static-the static keyword is used to define class members (methods or properties) that belong to the class itself, not to instances (objects) created from the class.
// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }
// }

// console.log(MathUtils.add(2, 3)); 


// //inheritance - new class(child) inherit properties and methods of parent class
// class animal{
//     alive =true;
//     sleep(){
//         console.log(`This ${this.name} is sleeping.`)
//     }
// }

// class rabbit extends animal{
//     name = "bunny";
// }
// const r =new rabbit();
// console.log(r.alive);
// r.sleep();


// //super -keyword used in classes to call the constructor or access the properties and method of parent
// class animal{
//     constructor(name,age) {
//         this.name =name;
//         this.age =age;
//     }
// }
// class rabbit extends animal{
//     constructor(name,age,runspeed){
//         super(name,age);
//         this.runspeed =runspeed;
//     }
// }
// class fish extends animal{
//     constructor(name,age,swimspeed){
//         super(name,age);
//         this.swimspeed =swimspeed;
//     }
// }
// const r = new rabbit("Bunny",2,25);
// const f = new fish("nemo",1,12);
// console.log(r.age);
// console.log(r.name);
// console.log(r.runspeed);


// //getter - method that makes property readable
// //setter - method that makes property writeable
// class rectangle{
//     constructor(width,height){
//         this.width=width;
//         this.height=height;
//     }
//     set width(newwidth){
//         if(newwidth>0){
//             this._width=newwidth;
//         }else{
//             console.log("Width must be a positive number");
//         }
//     }
//     set height(newheight){
//         if(newheight>0){
//             this._height=newheight;
//         }else{
//             console.log("height must be positive");
//         }
//     }
//     get width(){
//         return this._width;
//     }
//     get height(){
//         return this._height;
//     }
//     get area(){ //it was not a property initially but we can still access it using get
//         return this._height * this._width;
//     }
// }

// const rect= new rectangle(3,4);
// console.log(rect.height);
// console.log(rect.width);
// console.log(rect.area);


// desturcturing - extract value from arrays and objects and assign them to variables in a convenient way
// [] - for array destructuring
// {} - for object destructuring


// //nested objects - objects inside objects
// const person = {
//     name: "Powerpuff girls",
//     age : 19,
//     teammates: {
//         bubbles: "blue",
//         blossom : "Pink",
//     }
// }
// console.log(person.name);  //Powerpuff girls
// console.log(person.teammates.bubbles); //blue
// console.log(person.teammates); ///will print all teammates in array

// for(const i in person.teammates){
//     console.log(person.teammates[i]); //will print all teammates
// }


// //sort() -sort the elements of an array in lexiographical manner

// //string
// let fruits = ["Banana", "Apple", "Orange", "Mango"];
// fruits.sort();
// console.log(fruits);// Output: ["Apple", "Banana", "Mango", "Orange"]

// //numbers - ascending 
// let numbers = [10, 2, 5, 1];
// numbers.sort((a, b) => a - b);
// console.log(numbers);// Output: [1, 2, 5, 10]


// //fisher yates algorithm - for shuffling 
// //O(n) time , O(1) space

// function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         let randomIndex = Math.floor(Math.random() * (i + 1));

//         // Swap
//         [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
//     }

//     return arr;
// }

// const nums = [1, 2, 3, 4, 5];
// console.log(shuffle(nums));


// //Date objects - represent date and time
// //Date(year,month,day,hour,minute,sec,ms)

//const date = new Date(2026,0,1,2,3,4,5); //set it in int
//const date = new Date("2026-07-02T12:00:002"); //set it in strings
//const date = new Date(1700000000000); //give milisec after the fixed date(31 dec 1969)
// const date = new Date(); //gives current
// console.log(date);

// //getting a paricular parameter
// const year = date.getFullYear();
// console.log(year);

// //another way of setting 
// date.setFullYear(2026);



// //closure - function defined in another function which has access tovariables and scope of the outer function
// function outer(){
//     let message = "Hello";
//     function inner(){
//         console.log(message);
//     }
//     inner();
// }
// outer();



// //setTimeout() - helps in setiing wait time before execution for a function
// //setTimeout(callback,delay)
// function sayhello(){
//     window.alert("Hello");
// }
// setTimeout(sayhello,2000); //2sec

// //another way of writing the same
// setTimeout(function(){window.alert("Hello"),2000});

//setTimeout(()=>{window.alert("Hello"),2000}); //arrow function can be used too



// //error - can be handled using try-catch-finally
// try{
//     console.log(x);
//     //network error, promise rejection, security error
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("this always executes error or not");
//     //close files, close connections, release resourses
// }
// console.log("The code runs regardless of error");



//DOM- The DOM (Document Object Model) in JavaScript is a programming interface that represents an HTML or XML document as a tree of objects. It allows JavaScript to access and modify the content, structure, and style of a web page dynamically.
//element selectors
//  document.getElementById() → when selecting a unique element by ID.
//  document.querySelector() → when you need the first element matching any CSS selector.
//  document.querySelectorAll() → when you need multiple elements
// document.getElementsByClassName() → HTML collection
// document.getElementsByTagName() →  HTML collection



// //event listner - listen for specific events to create an interactive web page
// //                events: click,mouseover,mouseout
// //        syntax: .addEventListener(event,callback or arrow function or function)
// const mybox = document.getElementById("mybox");

// mybox.addEventListener("click",event =>{
//     event.target.style.backgroundColor = "red";
//     event.target.textContent ="I am awake🫩"
// })
// mybox.addEventListener("mouseover",event =>{
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent ="Don't do it girl🥱"
// })
// mybox.addEventListener("mouseout",event =>{
//     event.target.style.backgroundColor = "darkseagreen";
//     event.target.textContent ="Click to wake me up😴"
// })