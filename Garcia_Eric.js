//alert("JavaScript works!");

//Eric Garcia
//SDI 1303
//Project 4
//ENG618 Library 

//Array sorting should have a function within a fiction (which would need it's own flowchart)

var myLibrary = function (){

	//Check Numeric Function
	var checkNumeric = function(val){
		if (isNaN(val)){
			return false;
		}else{
			return true;
		}
	}

	//Check Name Function
	var areYouJosh = function(val){

		if (val === "josh"){
			return true;
		}else{
			return false;
		}
	}

	//check String Patter

	var checkString = function(val){

		var strLen = val.length;
		for (var i=0; i <=strLen ; i++){
			if (val.substring(i, i+1) === '-'){
				return i+1;
			}
		}
	}

	return {
		"checkNumeric": checkNumeric,
		"areYouJosh": areYouJosh,
		"checkString": checkString
	}
}

var newLib = new myLibrary();

console.log('checkNumeric: ' + newLib.checkNumeric(156));
console.log('areYouJosh: ' + newLib.areYouJosh("Josh"));
console.log('The dash is in position ' + newLib.checkString('12-3456'));