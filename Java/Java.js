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