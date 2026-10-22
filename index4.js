// Object in javascript and desctructing with spread operation /rest parameter template 
// creating an object

const student ={
    name:"ritha",
    course:"Advanced- frontend development",
    skills:["HTML","CSS","JAVASCRIPT","React","Node.js"],
    age:25,
    isEnroled:true,
    profile:null,
    address :{
        street:"123 Main st",
        city:"Kigali",
        state:"Kigali",
        zip:'00000',
    },
     greet(){
        console.log(`Hello ,My name is ${this.name} and I am enrolled in ${this.course}`);
    }
};

//mutation
//adding a new property to an object 

student.email="nadine1234@gamil.com";

// updating an existing property from the object 
student.name="Nadine";
//deleting a property from an object 
//delete student.name;

console.log(student.greet());
console.log(student.name);
console.log(student.skills.push('java'));
console.log(student.skills);

//bracket notation
console.log(student["address"]["city"]);

//looping over or thought an object using for ...in loop 
// objectf.keys ()mehtod 
// object array method 

const price={shoes:45000,bag:30000, cap:8000};

//loop
for (const key in price){
    console.log(key +" : " + price[key]);
}

// object.value() method

console.log(Object.entries(price));
console.log(Object.keys(price));
console.log(Object.values(price));

// destructuring of an object 
const { name, course}=student;
console.log( name, course);

//spread operator and rest parameter 

(...student) =>{};
const newStudent1={...student};
const newStudent2={...student};

// rest parameter
const number=[1,2,3,4,5,6,7,8,9,10];
function sum(...number){
return number.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(...number));

//(...number) =>{}


//const sum =function()

const array1=[1,2,3,4,5];
const array2=[6,7,8,9,10];
//merging array using spread operator
const newArray=[...array1, ...array2];
console.log(newArray);

// copying an array using spread operator

const copyArray =[...array1];
copyArray.push(11);
console.log(array1);
console.log(copyArray);

function add(x,y,z){
    return x+y+z;
}
console.log(add(...array1));

// spread operator with objects
const student3 ={
    job:"Software engineer",
    position:"intern",
    project:"micro-service",
    isInProduction:true
}
// merging objects
const newStudent={...student,...student3};
console.log(newStudent);

// shallow copy of an object

const copyStudent={...student3};
console.log(student3);
copyStudent.isInProduction =false;
console.log(copyStudent);

// literal 
