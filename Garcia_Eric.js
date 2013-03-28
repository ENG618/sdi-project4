//alert("JavaScript works!");

//Eric Garcia
//SDI 1303
//Project 4
//ENG618 Library 

//Array sorting should have a function within a fiction (which would need it's own flowchart)

var myLibrary = function (){

	//String

	//Check Phone Number
	/*
	Does a string follow a 123-456-7890 pattern like a phone number?
		This problem asks you to create a function that can accept a string and then
		determine if that string follows the pattern presented. For example, if you pass
		the string “123-45-67”, this would not match the pattern. But, if you passed the
		string “407-695-0100”, this would match the pattern. The only value returned
		from the function should be a Boolean; that is, true if the string matches the
		pattern or false if it does not.
	*/

	var checkPhoneNumber = function(val){
		if (val[3] == "-"){
		}if (val[7] == "-"){
			return true;
		}else{
			return false;
		};
	};


	//Check Email
	/*
	Does a string follow an aaa@bbb.ccc pattern like an email address?
		This problem is similar to the first except that the submitted string must follow a
		different pattern. For example, if you passed the string “fsosupport@fullsail", this
		would not match the pattern. But, if you passed the string “llewis@fullsail.com",
		this would match the pattern. The only value returned from the function should
		be a Boolean; that is, true if the string matches the pattern or false if it does not.
	*/
/*
	var checkEmail = function (){

		//return true or false
	};
	

	//Check URL
	/*
	Is the string a URL? (Does it start with http: or https:?)
		This task also involves looking at a submitted string to see if it includes the data
		necessary to indicate it is a URL. Thus, you should look for the http:// or https://.
		You do not have to worry if the rest of the URL is valid at this time. The only
		value returned from the function should be a Boolean; that is, true if the string
		matches the pattern or false if it does not.
	*/

	var checkUrl = function (url){
		if (url.substr(0,7) == 'http://'){
			return true
		} if (url.substr(0,8) == 'https://'){
			return true
		}else{
			return false
		}

		//returns true or false
	};


	//Create Title
	/*
	Title-case a string (split into words, then uppercase the first letter of each word)
		This problem involves sending a string into the function, changing the first letter
		of each word to uppercase while making sure the rest of the word is lowercase,
		and then returning the string from the function so it can be output.
	*/
/*
	var createTitle = function (Title){};


	//Change Separator 
	/*
	Given a string that is a list of things separated by a given string, 
	as well as another string separator, 
	return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
		For this problem, you will need to send three arguments into your function. The
		first is the string with items separated by a separator (such as a comma). The
		second is the separator that is being replaced. The third parameter is the
		separator you are going to use in place of the original. Thus, if you send the
		parameters (“a,b,c”, “,”, “/”), the function should return the string as “a/b/c”.
	*/
/*
	var changeSeparator = function (string, separator, newSeparator){
	};


	//Number



	//Decimal place
	/*
	Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
		This function will require two parameters. The first is the number you wish to
		change, and the second is the number of decimal places you wish to use to
		format the number. For example, to format pi to three decimal places, you might
		send the following argument parameters: (3.14159, 3). The function will then
		return 3.142.
	*/

	var convertDecimal = function (val, deci){
		var newNum = val.toFixed(deci)
			return newNum
	};


	//Percent
	/*
	Fuzzy-match a number: is the number above or below a number within a certain percent?
		This function confuses students the most, so please ask if you have questions.
		You will send three numbers as parameters for the function. You will then
		compare the first number to the second number to see if the first number is
		greater than or less than the second number, and then you will use the third
		number to see if the first number is within that percentage of the second number.
		So, if you were to send (5, 10, 50), the function would first determine if 5 is
		greater than or less than 10. It would then determine if 5 is within 50% of 10. The
		function should then return the results.
	*/
/*
	var checkPercent = function (check, val, percent){
	};


	//Date Difference
	/*
	Find the number of hours or days difference between two dates.
		This function requires you to send three parameters. The first two will be dates
		that you want to compare, and the third will be a string to determine if the
		function returns hours or days. The function will then perform the math
		necessary to find the difference between the two dates and return the choice of
		hours or days.
	*/
/*
	var dateDiff = function (date1, date2, hoursDay){
	};


	//String to Numeric
	/*
	Given a string version of a number such as "42", return the value as an actual Number, such as 42.
		As you have learned, there is a difference between a number as a string data
		type and a number as a Number data type. For this task, you will simply need to
		send a string into the function and return it as a Number. If you want to get
		creative, you also can add a conditional to determine if the string sent into the
		function is a number before you do the conversion.
	*/
/*
	var stringNum = function (val){
	};


	//Array



	//Smallest Value in an Array
	/*
	Given a string version of a number such as "42", return the value as an actual Number, such as 42.
		You will need to send two items into the function. The first is an array of numbers
		and the second will be a number you’ll compare to numbers within the array. You
		will then return the number in the array that is the next highest number to the one
		you’re using in the comparison. So, if you send the array [1,4,7,9,10,14,15] and
		the number 12 into the function, it should return 14 as the next highest number.
	*/
/*
	var getLowes = function (){
	};



	//Sum of Numeric Values
	/*
	Find the total value of just the numbers in an array, even if some of the items are not numbers.
		This one can be tricky if your array includes a string that is a number. You will
		send an array into the function and have it add together the numbers in the array.
		For example, if you send the array [1, “pickles”, 3, “onions”, 5, “10”, 6, “SDI”], the
		function should return 15. Therefore, it should be able to recognize “10” as a
		string and ignore it from the total.
	*/

	var getSum = function(val){ //Not sure why it is not ignoring the "10" 
		var strLen = val.length;
		var sum = 0;
		for (var i=0; i <= strLen; i++){
			if (!isNaN (val[i])) {
					sum += val[i]
				}
		}	
		return sum
	};


	//Labeled Array
	/*
	Find the total value of just the numbers in an array, even if some of the items are not numbers.
		This function also requires you to send two argument parameters. The first one
		is an array of objects and the second one is a key. The function will then sort the
		array of objects by the key you send. In this case, you might send an array of
		objects [{a:2},{b:3}.{a:1},{a:4}] and the key “a” which will then be sorted by the
		function using the key “a” and returned as [{a:1},{a:2},{a:3},{a:4},{b:3}].
	*/

	//var gitSumNum = function (val){};


	//Returns
	return {
		'checkPhoneNumber': 	checkPhoneNumber,
		//'checkEmail': 		checkEmail,
		'checkUrl': 			checkUrl,
		//'createTitle': 		createTitle,
		//'changeSeparator': 	changeSeparator,
		'convertDecimal': 	convertDecimal,
		//'checkPercent': 		checkPercent,
		//'dateDiff': 			dateDiff,
		//'stringNum': 			stringNum,
		//'getLowes': 			getLowes,
		'getSum': 				getSum
		//'gitSumNum': 			gitSumNum
	}
};

var newLib = new myLibrary();

console.log('It is ' + newLib.checkPhoneNumber('123-456-7890') + ' that this is a phone number');
console.log('It is ' + newLib.checkUrl("http://www.whereever.com") + ' that this is in url format')
console.log(newLib.convertDecimal(3.14159, 3));
console.log('Find the sum of ' + newLib.getSum([1, 'pickles', 3, 'onions', 5, '10', 6, 'SDI']));


