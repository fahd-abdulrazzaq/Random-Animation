let numbers=[ 1, 2 ,3 ,4 ,5 ,6, 7, 8, 9, 10,]
// // for loop
// for(let x= 5; x<=30 ; x++){

//     console.log(`x is now: ${x}`);
// }

// while loop
// let z=5
// while( z<15 ){
//     console.log( `z is now ${z}`);
//     z++;
// }

// looping through arrays
// for( let x=2; x<numbers.length ; x++ ){
//     console.log(`x is now : ${x}`)
    
// }

//conditionals
    // IF
// let x=15
// if(x > 15){
//     console.log(`x is 15`)
// }
// else if( x >10){
//     console.log(`x is ${x}`)
// }
// else{
//     console.log(`x is not 15`)
// }

// do while loop

// let Q= 40

// do{
//     console.log(Q)
//     Q++

// }
// while(Q<70)

// console.log(typeof Q)


// do{
//     console.log(x)
//     x++
// }
//     while (x<20)

// switch statement
// const x=33
// const color= x> 10? 'red': 'blue';

// switch(color){
//     case'red':
//     console.log('color is red');
//     break;
//     case 'blue': 
//     console.log('color is blue');
//     break;
//     default:
//         console.log('color is neither red nor bue')
//         break;
// }

// functions
// function addnum(num1,num2){
// return (num1+num2);
// }
// console.log (addnum(3,8))

// 
//turning the above funtion to an arrow function we have..
// const addnum=(num1,num2)=>{
//     return (num1+ num2);
// }
// console.log(addnum(3,12))

// OOP
// function person(firstname,lastname,dob) {
//     this.firstname =firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);

// }
// // Instantiating object 
// const person1 = new person('John', 'Doe' , '4-3-1980');
// console.log(person1)
// console.log(person1.dob)
// console.log(typeof dob)

// // Instantiating object 
// const person1 = new person('John', 'Doe' , '4-3-1980');
// console.log(person1)
// console.log(person1.dob)
// console.log(typeof dob)


// function person(firstname,lastname,dob) {
//     this.firstname =firstname;
//     this.lastname = lastname;
//     this.dob = new Date(dob);
//     this.getBirthYear = function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullname = function(){
//         return `${this.firstName} ${this.lastname}`;
//     }

// }
// // Instantiating object 
// const person1 = new person('John', 'Doe' , '4-3-1980');
// console.log(person1)
// console.log(person1.dob)
// console.log(typeof dob)
// console.log(person1.getBirthYear())
// console.log(person1.getFullname())

//DOM
// console.log(window)
// eLEMENT selectors

// Single Element SELECTORS
//  console.log(document.getElementById('but'))
// document.querySelector('#but'){
    
6
 


//Multiple Element Selectors
// document.querySelectorAll('')
// document.getElementsByClassName('')
// const button=document.querySelector('button');
// DOM Manipulation
// const button=document.querySelector('button');
// button.style.background = 'red';
// button.remove();
// button.lastElementChild.textContent = 'Hello';
// button.children[1].innertext = 'brad';
// button.lastElementChild.innerHTML = '<h1>Hello</h1>';

//DOM EVENTS
const button=document.querySelector('button');

button.addEventListener(`click`, (e) => {
    e.preventDefault();
    alert('You Clicked');
    console.log(e);
    document.querySelector('button').style.background = 'red';
})

// JS form Validation
//note: all constants here are pre-defined in html
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = documen.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit'.onSubmit);

function onSubmit(e){
    e.preventDefault();
        
        if(nameInput.value=== '' || emailInput.value === ''){
            msg.classList.add('error');
            // Note "error is a pre-defined css style for errors"
            msg.innerHTML = 'please enter all fiekds';
            //setTimeout is used to set the timeout of a particular JS section, in this case being "msg"
            setTimeout(() => msg.remove(),3000);
        }
        else{
            const li = document.createElement('li')
            li.appendChild(documemnt.createTextNode(`${name.input.value} : ${email.input.value}`));

            userList.appendChild(li);

            //Clear fields
            nameInput.value = '';
            email.input.value = '';
        }
    }

