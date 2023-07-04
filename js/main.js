


function sathesh(){let fullday=document.getElementById("fullday");
let today=new Date();
// fullday.innerHTML=today;



let a=["sun","tue","wed","thurs","fri","sat"];
let day=document.getElementById("day");
let days=today.getDay();
day.innerHTML=(a[today.getDay()]);




let date=document.getElementById("date");
let dates=today.getDate();

if(dates<10){
		date.innerHTML=("0"+today.getDate())}
		
	else{
		date.innerHTML=(today.getDate())}

// date.innerHTML=dates;//

let hours=document.getElementById("hour");
let hour=today.getHours();
if(hour>12){
	list=hour-12;
hours.innerHTML=list;
}

else if(hour<10){
	hours.innerHTML=("0"+hour)
}

else{
	hours.innerHTML=hour;
}


let d=document.getElementById("ampm");
let f=today.getHours();
	if(hour>=12){
		ampm.innerHTML=(" Post Meridiem")}
		
	else{
		ampm.innerHTML=(" Ante Meridiem")}

let min=document.getElementById("minutes");
let mins=today.getMinutes();

if(mins<10){
		min.innerHTML=("0"+today.getMinutes())}
		
	else{
		min.innerHTML=(today.getMinutes())}



let secs=document.getElementById("sec");
let sec=today.getSeconds();
if(sec<10){
		secs.innerHTML=("0"+today.getSeconds())}
		
	else{
		secs.innerHTML=(today.getSeconds())}

// secs.innerHTML=sec;//

let b=["january","feburuary","march","april","may","june","july","august","september","october","novmember","december"]
let months=document.getElementById("month");
let month=today.getMonth();
months.innerHTML=(b[today.getMonth()]);

let years=document.getElementById("year");
let year=today.getFullYear();
if(year>0){
		years.innerHTML=(year-2000)}
		
	else{
		years.innerHTML=(today.getFullYear())}

// years.innerHTML=year;//
}
setInterval(sathesh,1000)
