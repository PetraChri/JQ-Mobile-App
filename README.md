# JQ-Mobile-App

## Description

This project is an application in wich a user can find 10 step tutorials about various things. The one that I programmed
is a step tutorial on braiding your hair. The notion is basically giving simple steps and tips on how to do things.

## Instruction

When the user opens the app he is directed into the main page wich has the title and the start button. From then he can choose to begin the days tutorial or visit other tutorials through the footer menu. The footer menu is always stationary making navigation easy and the user can go through the home, favorites, and other lists buttons. Once he has begun one of the tutorials he can then move forward or back through steps as well as just leave. If the user chooses to leave mid way of the tutorial the app will remember at which step the user took off if he clicks to go back on again. Here you will see how the JS allows the app to trace the steps and remember where the user has left off :


```javascript 

var CounterSteps;
document.addEventListener("DOMContentLoaded", function (){
	
	if(localStorage.getItem('HairTutorial')){
		
	CounterSteps = localStorage['HairTutorial'];
	
	}else{
		CounterSteps='#secondpage';
	}
	
	$("#beginbtn").on("click",function (action){
	
	action.preventDefault();
	
	$.mobile.changePage(CounterSteps);
	
	});

	$(".next").on("click", clickHandler);
	$(".back").on("click", clickHandler);
	
	});
	
function clickHandler(action) {
	action.preventDefault();
	CounterSteps = $(this).attr("href");
	$.mobile.changePage(CounterSteps);
	localStorage.setItem('HairTutorial', CounterSteps);
}
``` 

## Author

Petra Chrisostomakis

[Visit Algonquin College](www.algonquincollege.com)
