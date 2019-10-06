//Aritmetik operat�rler///////

let value;

const value1 =10;
const value2= 4;

value = value1 + value2;
value = value1-value2;

console.log(value1 + value2);


 value = Math.PI;
 value = Math.E;

 value = Math.round(3.6);
 value = Math.ceil(3.7);

value = Math.abs(-10);

value = Math.random()* 20 +1;

console.log(value);


let value;
const firstName = "Louis";
///const lastName "Armstrong";

const langs= "Java,Python,C++";

value = "mustafa murat";
value += "co�kun"; ///value =value +"co�kun";

value= firstName.length;


value = firstName.concat(" ",lastName," ","Caz");
value = firstName.toLowerCase();
value=firstName.toUpperCase();

value =firstName[0];

value =firstName[2];

value =firstName[4];

value = firstName[firstName.length -1];



///INDEX OF

value=firstName.indexOf("L");
value=firstName.indexOf("o");
value=firstName.indexOf("l");

console.log(value);

///char at

value= firstName.charAt(0);
value=firstName.charAt(firstName.length -1);

///SPLIT

value = langs.split(",");

//replace

value = langs.replace("Python","CSS");

//include
value =langs.includes()

const name = "Mustafa Murat Co�kun";
const department = "Bili�im";
const salary = 4000;


const a= "isim:"+ name + "\n" + "Departman:" + department +"\n"+ "maa�:" + salary;

console.log(a);

const a='isim:${name}\nDepartmnet:${department}\nMaa�:${salary}';


//TEMPLATE LITERAL

const html="<ul>"+
"<li>"+name+"</li>"
"<li>"+department+"</li>"
"<li>"+salary+"</li>"
"</ul>";

document.body.innerHTML=html;
