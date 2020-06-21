//Chapter 21-25

// task1
var f_name=prompt("Enter Your First name");
var l_name=prompt("Enter Your Last name");
var full_name= f_name+l_name;
alert("Welcome "+ full_name);

//task 2
var m_model=prompt("Enter your favorite mobile model ");
alert("My favorite mobile is "+m_model + "\nLength of String: "+m_model.length);

//task 3
var country="pakistan";
alert("String: "+country);
alert("Index of n "+country.indexOf("n"));

//task 4
var str="Hello World";
document.write("String: "+str+"<br>Last Index of l"+str.lastIndexOf("l"));

//task 5
document.write("String: " +country+"<br>Character at Index 3: "+country[3]);

//task 6
document.write("Welcome "+f_name+" "+l_name);

//task 7
var city="Hyderabad";
document.write("City: "+city+"<br>After Replacement: " +city.replace("Islamabad"));

//task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
message=message.replace(/and/g,"&");
document.write(message);

//task 9
var Value="472";
document.write("Value "+Value+"<br>Type :"+typeof(Value)+"<br>Value "+Value+"<br>Type: "+typeof(value=Number(Value)))

//task 10
var dish=prompt("Enter Your favorite dish");
alert("User input: " +dish+ "\nUpper Case : "+ dish.toUpperCase());

//task 11
var f_char=dish.slice(0,1);
var l_char=dish.slice(1);
var dish1=f_char.toUpperCase()+l_char.toLowerCase();
alert("User input: "+dish+"\nTitle case: "+dish1);

//task 12
var num=35.36;
num=num.toString();
s=num.replace(".","");
document.write(s);

//task 13
var ur_name=prompt("Enter Your name");
for(var i=0;i<ur_name.length;i++){
    if(ur_name[i]==='@' ||ur_name[i]=='.' ||ur_name[i]==','||ur_name[i]=='!'){
        alert("Please enter a valid username");
    }
}

//task 14
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var order=prompt("Welcome to abc Company, what you want to order??");
order=order.toLowerCase();
for(var i=0;i<bakery.length;i++){
    if(bakery.indexOf(order)!=-1){
        alert(order+" is available at index "+bakery.indexOf(order)+" in our bakery!");
        break;
    }
    else{
        alert("We are sorry, "+order+" is not present in our bakery");
    }
}

//task 15
var pass = prompt("Enter Your password");
for (var i = 0; i < pass.length; i++) {
    if (pass.length >= 6 && (pass[i] >= 'a' || pass[i] <= 'z' || pass[i] >= 'A' || pass[i] <= 'Z') || pass[i] >= 0) {
        if(pass[0]!=0) {
            alert("Password: " + pass);
            break;
        }
        else {
            alert("Please enter a valid password");
            break;
        }
    }
}

//task 16
var university = "University of Karachi";
var uni=university.split('');
for(var i=0;i<uni.length;i++){
document.write(uni[i]+"<br>");
}

// task 17
var c=prompt("Enter your country name");
var l=c.length;
document.write(c.charAt(l-1));

//task 18
var count=0;
var f_d="The quick brown fox jumps over the lazy dog";
for(i=0;i<f_d.length;i++){
  if(f_d.slice(i,i+3)==="the" ||f_d.slice(i,i+3)==="The"){
      count++;
  }}
  alert(count);


//chapter 26-30

//task 1
var number=prompt("Enter a positive number");
document.write(number+"<br>"+Math.round(number)+"<br>"+Math.floor(number)+"<br>"+Math.ceil(number));

//task 2
var neg_number=prompt("Enter a negative number");
document.write("<br>"+neg_number+"<br>"+Math.round(neg_number)+"<br>"+Math.floor(neg_number)+"<br>"+Math.ceil(neg_number));

//task 3
var absolute=prompt("Enter a number");
if(absolute>0){
    document.write("-"+absolute);
}
else if(absolute<0){
    document.write(-1*absolute);
}
else{
    document.write(absolute);
}

//task 4
var random=Math.random();
document.write("<br>Random dice value"+Math.round(random*6+1));

//task 5
var toss=Math.random()*2;
var result=Math.ceil(toss);

if(result===2){
    document.write(result);
    document.write("<br>Random coin value heads");
}
else if(result===1){
        document.write(result);
        document.write("<br>Random coin value tails");
    }

//task 6
var ran=Math.random()*100+1;
ran=Math.floor(ran);
document.write("Random Number between 1 to 100: "+ran)

//task 7
var weight=prompt("Enter your weigth");
document.write(parseFloat(weight+" kilograms"));

//task 8
var secret_number= 5;
var secret=+prompt("Enter a number from 1 to 10");
    if(secret_number===secret){
        alert("Congratulation Your answer is correct");
    }
    else{
        alert("Try Next tym");
    }


//chapter 31-34

//task 1
var date=new Date();
document.write(date);

//task 2
var months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
var m=new Date();
alert("Current month is "+months[m.getMonth()]);

//task 3
var months=["sat","sun","mon","tue","wed","thu","fri"];
var d=new Date();
var day=months[d.getDay()]
alert("Today is "+day);

//task 4
if(day==="sun" ||day==="sat"){
    alert("It's Fun day");
}

//task 5
var f_l=new Date();
var date=f_l.getDate();
if(date<=15){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}

//task 6
var d=new Date;
document.write("<br>Current date: "+d);
var mili=d.getTime();
document.write("<br>Milli seconds: "+mili);
var min=("<br>Minutes: "+mili/(1000*60*60));
document.write(min);

//task 7
 var hours=new Date().getHours();
 if(hours<=12){
     alert("its am");
 }
 else {
     alert("its pm");
 }


//task 8
var currentmonth=new Date().getMonth();
var later_date =new Date();
later_date.setMonth(currentmonth-1,later_date.getDate())
document.write(later_date);



//task 9
function ramzan(){
    var ram=new Date("june 18, 2015");
    var rammili=ram.getTime();
    var today=new Date();
    var todaymili=today.getTime();
    var diff=todaymili-rammili;
    var days=Math.floor((diff/(1000*60*60*24)));
    document.write(days+" days has passed since 2015<br>");
   }
   ramzan();


//task 10
var ref=new Date("dec 5, 2015");
var beg=new Date("jan 1, 2015");
var refmili=ref.getTime();
var begmili=beg.getTime();
var sec=refmili-begmili;
document.write(sec/(1000*60));

//task 11
var date=new Date();
document.write(date);
var currenthour=new Date().getHours();
date.setHours(currenthour-1);
document.write("<br>1 hour ago its was "+date+"<br>");

//task 12
var date=new Date();
var currentyear=new Date().getFullYear();
date.setFullYear(currentyear-100);
alert("<br>100 years ago its was "+date);

//task 13
var age=prompt("Enter your age:");
var currentyear=new Date().getFullYear();
var birthyear=currentyear-age;
document.write(birthyear);

//task 14
var customer_name="ABC";
var month=new Date().getMonth();
var no_of_units=410;
var charges=16;
var net_payable=no_of_units*charges;
var net_charges=350;
var after_due=net_payable+net_charges;

document.write("<br>Customer: "+customer_name+"<br>Month: "+month+"<br>No: of units: "+no_of_units+"<br>Charges: "+charges+"<br><br>Net Payable Amount(within due date): "+net_payable+"<br>Net Payable Charges: "+net_charges+"<br>Gross Amount Payable(after due): "+after_due)

//chapter 35-38

//task 1
function date(){
    var d=new Date();
    document.write(d);
}
date();

//task 2
function greeting() {
    var f_name = prompt("Enter first name");
    var l_name = prompt("Enter last name");
    alert(" welcome " + f_name + " " + l_name)
}
greeting();

//task 3
function add() {
    a = +prompt("enter 1st number");
    b = +prompt("enter 2nd number");
    alert(a + b);
}
add();

//task 4
function cal(a, b, c) {
    if (c === '+') {
            return a+b;
        }
        else if (c === '-') {
            return a-b;
        }
        else if (c === '*') {
            return a*b;
        }
        else if (c === '/') {
            return a/b;
        }
        else if (c === '%') {
            return a%b;
        }
}
document.write(cal(1,2,"+"));

//task 5
function square(a){
    return a*a;
}
document.write("<br>"+square(5));

//task 6
var answer=1;
function fac(n){
    for(var i=n;i>=1;i--){
          answer=answer*(i);   
             }
     return answer;
 }
 document.write(fac(5)+"<br>");

 //task 7
 function num(){
     var s=prompt("Enter starting number");
     var l=prompt("Enter last number");
     for(var i=s;i<=l;i++){
         document.write("<br>"+i);
     } }
num();

//task 8
function calculateHypotenuse(){
    hypotenuse=Math.sqrt(calculateSquare(1,1));
    return (hypotenuse.toFixed(3));
        function calculateSquare(perp,base){
        var perpsq=perp*perp;
        var basesq=base*base;
        return (perpsq+basesq);
    }
}
document.write(calculateHypotenuse());

//task 9
function area(width,height){
    area=width*height
    return area;
}
document.write("<br>"+area(4,6));

var width=5;
var height=5;
function area1(width,height){
    area1=width*height;
    return area1;
}
document.write("<br>"+area1(width,height));

//task 10

function palindrome(){
    var a = prompt("enter a word");
    var word = "";
    for (var i = a.length - 1; i >= 0; i--){
        word += a[i];
    }
    if (a === word) {
        document.write(word + " is a palimdrome");
    }
    else {
        document.write(a + " is not a palimdrome");
    }}
palindrome();

//task 11

function Uppercase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
 }

 document.write(Uppercase("the quick brown fox"));

 //task 12
 function l_Word(string) {
    var str = string.split(" ");
    var long = 0;
    var word = null;
    for (var i = 0; i < str.length ; i++) {
        if (long < str[i].length) {
            long = str[i].length;
            word = str[i];
        }
    }
    return word;
}
document.write(l_Word("Web Development Tutorial"));


 //task 13
 var str=prompt("Enter a string");
 var l=prompt("Enter a letter");
 count=0;
 function find(str,l){
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)===l){
            count++;
        }
    }
    return count;
 }
 document.write(find(str,l));

 //task 14
 function calcCircumference(radius){
     return (2*3.142*radius);
 }
 function calcArea(radius){
    return (3.142*radius*radius);
 }
 document.write("<br>The circumference is "+calcCircumference(4));
 document.write("<br>The area is "+calcArea(4));


