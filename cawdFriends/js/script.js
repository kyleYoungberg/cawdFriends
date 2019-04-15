window.onload = function(){
	"use strict";
	
	var myButton = document.getElementById("myButton");
	var resetButton = document.getElementById("resetButton");

	myButton.addEventListener("click", processTextFunction);
	resetButton.addEventListener("click", resetOutputFunction);
	function processTextFunction(){
		
		// Creat the variable from the HTML
		var first = document.getElementById("first").value;
		var last = document.getElementById("last").value;
		var hometown = document.getElementById("hometown").value;
		var education = document.getElementById("education").value;
		var relationship = document.getElementById("relationship").value;
		var motto = document.getElementById("motto").value;
		var quote = document.getElementById("quote").value;
		
		console.log("First Name: " + first);
		console.log("Last name: " + last);
		console.log("Hometown: " + hometown);
		console.log("Education: " + education);
		console.log("Relationship status: " + relationship);
		console.log("Life motto: " + motto);
		console.log("Favorite quote: " + quote);
		
		
		
		// Make the story using strings and variables
		
	
	
		
		
		
		
		
		document.getElementById("output").innerHTML = "";
		
		}
		
		function resetOutputFunction(){
		document.getElementById("output").innerHTML = "";
			
		}
	
};