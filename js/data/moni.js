function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}
function problem061(){
	var inputData = [{
		'distance': 10,
		'speed': 60
		},
		{
		'distance': 9,
		'speed': 54
		},
		{
		'distance': 5,
		'speed': 90
		},
		{
		'distance': 100,
		'speed': 74
		},
		{
		'distance': 40,
		'speed': 50
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		speed = inputData[randomIndex]['speed'],
		time,
		question = {};

	distance=parseInt(distance);
	speed=parseInt(speed);
	time=((distance/speed)*60);

	question = {
		'type': 'single',
		'id': '061',
		'question': 'The speed of the bus is '+ speed +' m/sec if it covers a '+ distance +' kmph how much time it takes.', 
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time,
			'C': time + parseInt(Math.random()*10),
			'D': time - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '06'
	}
	
	return question;
	
}
function problem062(){
	var inputData = [{
		'downStream': 60,
		'upStream': 55
		},
		{
		'downStream': 69,
		'upStream': 4
		},
		{
		'downStream': 25,
		'upStream': 90
		},
		{
		'downStream': 20,
		'upStream': 15
		},
		{
		'downStream': 10,
		'upStream': 30
		}],
	randomIndex = getRandomNumber(inputData.length),
		downStream= inputData[randomIndex]['downStream'],
		upStream = inputData[randomIndex]['upStream'],
		speedStream,
		question = {};
		
downStream=parseInt(downStream);
	upStream=parseInt(upStream);
	speedStream=(1/2*(downStream+upStream));

	question = {
		'type': 'single',
		'id': '062',
		'question': 'A man rows downstream at '+ downStream +' km/hr and rows upstream at '+ upStream +' km/hr. At what speed he can row in still water?',
		'options': {
			'A': speedStream,
			'B': speedStream - parseInt(Math.random()*10),
			'C': speedStream + parseInt(Math.random()*10),
			'D': speedStream - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem063(){
	var inputData = [{
		'principal': 36000,
		'interest': 6,
		'years': 6
		},
		{
		'principal': 1000,
		'interest': 140,
		'years': 70
		},
		{
		'principal': 5780,
		'interest': 650,
		'years': 390
		},
		{
		'principal': 1900,
		'interest': 660,
		'years': 10
		},
		{
		'principal': 9000,
		'interest': 450,
		'years': 590
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal= inputData[randomIndex]['principal'],
		interest = inputData[randomIndex]['interest'],
		years = inputData[randomIndex]['years'],
		simpleInterest,
		question = {};
	
	principal=parseInt(principal);
	interest=parseInt(interest);
	years=parseInt(years);
	simpleInterest=(principal*interest*years)/100;

	question = {
		'type': 'single',
		'id': '063',
		'question': ' If Suresh borrows '+ principal +' from Mahesh at rate of interest '+ interest +' S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': simpleInterest + parseInt(Math.random()*10),
			'B': simpleInterest - parseInt(Math.random()*10),
			'C': simpleInterest,
			'D': simpleInterest - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem064(){
	var inputData = [{
		'diagonal': 60
		},
		{		
		'diagonal': 90
		},
		{		
		'diagonal': 60
		},
		{
		'diagonal': 60
		},
		{		
		'diagonal': 60
		}],
		randomIndex = getRandomNumber(inputData.length),
		diagonal = inputData[randomIndex]['diagonal'],
		areaSquare,
		question = {};

	diagonal=parseInt(diagonal);
	areaSquare=1/2*(diagonal*diagonal);

	question = {
		'type': 'single',
		'id': '064',
		'question': 'The diagonal of a square field is '+ diagonal +'m,then area of the field is',
		'options': {
			'A': areaSquare - parseInt(Math.random()*10),
			'B': areaSquare - parseInt(Math.random()*10),
			'C': areaSquare + parseInt(Math.random()*10),
			'D': areaSquare
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem065(){
	var inputData = [{
		'salaryA': 2000,
		'salaryB': 6658,
		'salaryC': 4590,
		'salaryD': 2765,
		'salaryE': 1890,
		'average': 3579
		},
		{
		'salaryA': 6435,
		'salaryB': 6927,
		'salaryC': 6855,
		'salaryD': 7230,
		'salaryE': 6562,
		'average': 6500
		},
		{
		'salaryA': 5439,
		'salaryB': 3967,
		'salaryC': 4865,
		'salaryD': 1505,
		'salaryE': 3689,
		'average': 5432
		},
		{
		'salaryA': 9075,
		'salaryB': 7634,
		'salaryC': 5423,
		'salaryD': 9809,
		'salaryE': 4500,
		'average': 5000
		},
		{
		'salaryA': 6543,
		'salaryB': 6789,
		'salaryC': 9087,
		'salaryD': 6790,
		'salaryE': 4326,
		'average': 7000
		}],
		randomIndex = getRandomNumber(inputData.length),
		salaryA= inputData[randomIndex]['salaryA'],
		salaryB= inputData[randomIndex]['salaryB'],
		salaryC= inputData[randomIndex]['salaryC'],
		salaryD= inputData[randomIndex]['salaryD'],
		salaryE= inputData[randomIndex]['salaryE'],
		average= inputData[randomIndex]['average'],
		total= inputData[randomIndex]['total'],
		salary= inputData[randomIndex]['salary'],
		finalSalary,
		question = {};

	var total = parseInt(salaryA+salaryB+salaryC+salaryD+salaryE),
	    salary = parseInt(average*6),
	    finalSalary = parseInt(salary - total);

	question = {
		'type': 'single',
		'id': '065',
		'question': 'Mohan gets a salary of '+ salaryA +', '+salaryB+ ', '+salaryC+', '+salaryD+' and '+salaryE +' for 5 months. How much salary he must have in the sixth month so that he gets an average of '+ average +'',
		'options': {
			'A': finalSalary,
			'B': finalSalary - parseInt(Math.random()*10),
			'C': finalSalary + parseInt(Math.random()*10),
			'D': finalSalary - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
}
function problem066(){
	
	var inputData = [{
		'initial': 36000,
		'ending': 9000,
		'years': 6
		},
		{
		'initial': 175000,
		'ending': 262500,
		'years': 10
		},
		{
		'initial': 567902,
		'ending': 289002,
		'years': 2
		},
		{
		'initial': 138900,
		'ending': 660768,
		'years': 30
		},
		{
		'initial': 119000,
		'ending': 458900,
		'years': 3
		}],
		randomIndex = getRandomNumber(inputData.length),
		initial= inputData[randomIndex]['initial'],
		ending = inputData[randomIndex]['ending'],
		years = inputData[randomIndex]['years'],
		requiredAverage,
		question = {};
	
	initial=parseInt(initial);
	ending=parseInt(ending);
	years=parseInt(years);
	increased=ending-initial;
	increasedPercentage=(increased/initial)*100;
	requiredAverage=(increasedPercentage/years);

	question = {
		'type': 'single',
		'id': '066',
		'question': ' The population of a town increased from '+ initial +' to '+ ending+' in a '+ years +'. The average percent increase of population per year is:',
		'options': {
			'A': requiredAverage + parseInt(Math.random()*10),
			'B': requiredAverage - parseInt(Math.random()*10),
			'C': requiredAverage,
			'D': requiredAverage - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem067(){
	var inputData = [{
		'principal': 7500,
		'interest': 6,
		'years': 2
		},
		{
		'principal': 1000,
		'interest': 1,
		'years': 7
		},
		{
		'principal': 5540,
		'interest': 5,
		'years': 3
		},
		{
		'principal': 1900,
		'interest': 8,
		'years': 5
		},
		{
		'principal': 9340,
		'interest': 3,
		'years': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal= inputData[randomIndex]['principal'],
		interest = inputData[randomIndex]['interest'],
		years = inputData[randomIndex]['years'],
		amount,
		question = {};
	
	principal=parseInt(principal);
	interest=parseInt(interest);
	years=parseInt(years);
	amount=parseFloat(principal*(1+(interest/100))**years);

	question = {
		'type': 'single',
		'id': '067',
		'question': ' What is the amount for a sum of money '+ principal +' at '+ interest +' rate of interest C.I. for '+ years +' years?',
		'options': {
			'A': amount + parseInt(Math.random()*10),
			'B': amount - parseInt(Math.random()*10),
			'C': amount,
			'D': amount - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem068(){
	var inputData = [{
		'sellingPrice': 8634,
		'gainPercentage': 5
		},
		{
		'sellingPrice': 7621,
		'gainPercentage': 9
		},
		{
		'sellingPrice': 8400,
		'gainPercentage': 12
		},
		{
		'sellingPrice': 6500,
		'gainPercentage': 6
		},
		{
		'sellingPrice': 4320,
		'gainPercentage': 3
		}],
	randomIndex = getRandomNumber(inputData.length),
		sellingPrice= inputData[randomIndex]['sellingPrice'],
		gainPercentage = inputData[randomIndex]['gainPercentage'],
		costPrice,
		question = {};
		
sellingPrice=parseInt(sellingPrice);
	gainPercentage=parseInt(gainPercentage);
	costPrice=(100/(100+gainPercentage))*sellingPrice;

	question = {
		'type': 'single',
		'id': '068',
		'question': 'Suresh bought a cell phone from a shop. If he sells it at '+ sellingPrice +' to Mahesh and earns a profit of '+ gainPercentage +', find the price at which Suresh bought the cell phone.?',
		'options': {
			'A': costPrice,
			'B': costPrice - parseInt(Math.random()*10),
			'C': costPrice + parseInt(Math.random()*10),
			'D': costPrice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem069(){
	var inputData = [{
		'distance1': 360,
		'time1': 6,
		'time2': 2
		},
		{
		'distance1': 100,
		'time1': 14,
		'time2': 4
		},
		{
		'distance1': 16,
		'time1': 2,
		'time2': 4
		},
		{
		'distance1': 1900,
		'time1': 5,
		'time2': 15
		},
		{
		'distance1': 90,
		'time1': 3,
		'time2': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance1= inputData[randomIndex]['distance1'],
		time1 = inputData[randomIndex]['time1'],
		time2 = inputData[randomIndex]['time2'],
		speedStream,
		question = {};
	
	distance1=parseInt(distance1);
	time1=parseInt(time1);
	time2=parseInt(time2);
	ds= parseInt(distance1/time1);
	us = parseInt(distance1/time2);
	speedStream=1/2*(ds-us);

	question = {
		'type': 'single',
		'id': '069',
		'question': ' A boat running downstream covers a distance of '+ distance1 +' km in '+ time1 +' hours while for covering the same distance upstream, it takes '+ time2 +' hours. What is the speed of the boat in still water?',
		'options': {
			'A': speedStream + parseInt(Math.random()*10),
			'B': speedStream - parseInt(Math.random()*10),
			'C': speedStream,
			'D': speedStream - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem0610(){
	var inputData = [{
		'simpleInterest': 5000,
		'principal': 1650,
		'rate': 20
		},
		{
		'simpleInterest': 1800,
		'principal': 6000,
		'rate': 10
		},
		{
		'simpleInterest': 1600,
		'principal': 1200,
		'rate': 4
		},
		{
		'simpleInterest': 1900,
		'principal': 1450,
		'rate': 5
		},
		{
		'simpleInterest': 9000,
		'principal': 3500,
		'rate': 15
		}],
		randomIndex = getRandomNumber(inputData.length),
		simpleInterest= inputData[randomIndex]['simpleInterest'],
		principal = inputData[randomIndex]['principal'],
		rate = inputData[randomIndex]['rate'],
		years,
		question = {};
	
	simpleInterest=parseInt(simpleInterest);
	principal=parseInt(principal);
	rate=parseInt(rate);
	years= (simpleInterest*100)/(principal*rate);

	question = {
		'type': 'single',
		'id': '0610',
		'question': ' In how many years the simple interest on '+ principal +' at '+ rate +' rate of interest s.I will become '+ simpleInterest+'',
		'options': {
			'A': years + parseInt(Math.random()*10),
			'B': years - parseInt(Math.random()*10),
			'C': years,
			'D': years - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
}
function problem0611(){
	var inputData = [{
		'area': 10,		
		},
		{
		'area': 780,
		},
		{
		'area': 100,	
		},
		{
		'area': 610,		
		},
		{
		'area': 950,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		area= inputData[randomIndex]['area'],
		areaSquare,
		question = {};

	area=parseInt(area);
	areaSquare=area*area;

	question = {
		'type': 'single',
		'id': '0611',
		'question': 'What is the area of square field whose side is '+ area+'m ?',
		'options': {
			'A':areaSquare - parseInt(Math.random()*10),
			'B': areaSquare - parseInt(Math.random()*10),
			'C': areaSquare + parseInt(Math.random()*10),
			'D':  areaSquare
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0612(){
	var inputData = [{
		'costPrice': 8500,
		'gainPercentage': 50
		},
		{
		'costPrice': 1540,
		'gainPercentage': 25
		},
		{
		'costPrice': 5600,
		'gainPercentage': 120
		},
		{
		'costPrice': 6500,
		'gainPercentage': 68
		},
		{
		'costPrice': 4320,
		'gainPercentage': 36
		}],
	randomIndex = getRandomNumber(inputData.length),
		costPrice= inputData[randomIndex]['costPrice'],
		gainPercentage = inputData[randomIndex]['gainPercentage'],
		sellingPrice,
		question = {};
		
    costPrice=parseInt(costPrice);
	gainPercentage=parseInt(gainPercentage);
	sellingPrice=((100+gainPercentage)/100)*costPrice;

	question = {
		'type': 'single',
		'id': '0612',
		'question': 'Ramesh bought a chair for '+ costPrice +' and sold it to Suresh. If Ramesh earned a profit of '+ gainPercentage+'%, find the selling price of chair.',
		'options': {
			'A': sellingPrice,
			'B': sellingPrice - parseInt(Math.random()*10),
			'C': sellingPrice + parseInt(Math.random()*10),
			'D': sellingPrice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0613(){
	var inputData = [{
		'perimeter': 34		
		},
		{
		'perimeter': 78,
		},
		{
		'perimeter': 89,	
		},
		{
		'perimeter': 61,		
		},
		{
		'perimeter': 24,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		perimeter= inputData[randomIndex]['perimeter'],
		side,
		question = {};

	perimeter=parseInt(perimeter);
	side=perimeter/4;

	question = {
		'type': 'single',
		'id': '0613',
		'question': 'If the perimeter of square is ' + perimeter+', find one of the side of square?',
		'options': {
			'A':side - parseInt(Math.random()*10),
			'B': side - parseInt(Math.random()*10),
			'C': side + parseInt(Math.random()*10),
			'D':  side
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0614(){
	var inputData = [{
		'value': 1.5625		
		},
		{
		'value': 841,
		},
		{
		'value': 529,	
		},
		{
		'value': 144,		
		},
		{
		'value': 400,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		value= inputData[randomIndex]['value'],
		squareRoot,
		question = {};

	value=parseInt(value);
	squareRoot=Math.sqrt(value);

	question = {
		'type': 'single',
		'id': '0614',
		'question': 'Find the square root value of '+ value+'? ',
		'options': {
			'A':squareRoot - parseInt(Math.random()*10),
			'B': squareRoot - parseInt(Math.random()*10),
			'C': squareRoot + parseInt(Math.random()*10),
			'D':  squareRoot
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0615(){
	var inputData = [{
		'base': 8500,
		'height': 50
		},
		{
		'base': 1540,
		'height': 25
		},
		{
		'base': 5600,
		'height': 120
		},
		{
		'base': 6500,
		'height': 60
		},
		{
		'base': 4320,
		'height': 36
		}],
	randomIndex = getRandomNumber(inputData.length),
		base= inputData[randomIndex]['base'],
		height = inputData[randomIndex]['height'],
		areaTriangle,
		question = {};
		
    base=parseInt(base);
	height=parseInt(height);
	areaTriangle=1/2*(base*height);

	question = {
		'type': 'single',
		'id': '0615',
		'question': 'What is the area of triangle with base '+ base +'m and '+ height +'m ?',
		'options': {
			'A': areaTriangle,
			'B': areaTriangle - parseInt(Math.random()*10),
			'C': areaTriangle + parseInt(Math.random()*10),
			'D': areaTriangle - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0616(){
	var inputData = [{
		'value': 79507		
		},
		{
		'value': 9261,
		},
		{
		'value': 2744,	
		},
		{
		'value': 5832,		
		},
		{
		'value': 729,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		value= inputData[randomIndex]['value'],
		cubeRoot,
		question = {};

	value=parseInt(value);
	cubeRoot=Math.cbrt(value);

	question = {
		'type': 'single',
		'id': '0616',
		'question': 'Find the cube root value of '+ value+'? ',
		'options': {
			'A':cubeRoot - parseInt(Math.random()*10),
			'B': cubeRoot - parseInt(Math.random()*10),
			'C': cubeRoot + parseInt(Math.random()*10),
			'D':  cubeRoot
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0617(){
	var inputData = [{
		'distance': 600,
		'time': 5
		},
		{
		'distance': 90,
		'time': 4
		},
		{
		'distance': 45,
		'time': 9
		},
		{
		'distance': 100,
		'time': 5
		},
		{
		'distance': 40,
		'time': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance=parseInt(distance);
	time=parseInt(time);
	speed=(distance/(time*60)*(18/5));

	question = {
		'type': 'single',
		'id': '0617',
		'question': 'A person crosses a '+ distance+' m long street in '+ time+' minutes. What is speed in km per hour?', 
		'options': {
			'A': speed - parseInt(Math.random()*10),
			'B': speed,
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0618(){
	var inputData = [{
		'sellingPrice': 2500,
		'costPrice': 200
		},
		{
		'sellingPrice': 3500,
		'costPrice': 300
		},
		{
		'sellingPrice': 4500,
		'costPrice': 400
		},
		{
		'sellingPrice': 1500,
		'costPrice': 100
		},
		{
		'sellingPrice': 5500,
		'costPrice': 500
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellingPrice= inputData[randomIndex]['sellingPrice'],
		costPrice = inputData[randomIndex]['costPrice'],
		profit = inputData[randomIndex]['profit'],
		profitPercentage,
		question = {};

	sellingPrice=parseInt(sellingPrice);
	costPrice=parseInt(costPrice);
	profit= sellingPrice-costPrice;
	profitPercentage=(profit/costPrice)*100;

	question = {
		'type': 'single',
		'id': '0618',
		'question': 'A shopkeeper sold an article for rs. '+ sellingPrice+'. If costPrice of article is '+ costPrice +'. Find the profit percentage?', 
		'options': {
			'A': profitPercentage - parseInt(Math.random()*10),
			'B': profitPercentage,
			'C': profitPercentage + parseInt(Math.random()*10),
			'D': profitPercentage - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0619(){
	var inputData = [{
		'lossPercentage': 20,
		'costPrice': 4000
		},
		{
		'lossPercentage': 10,
		'costPrice': 8000
		},
		{
		'lossPercentage': 5,
		'costPrice': 3000
		},
		{
		'lossPercentage': 10,
		'costPrice': 5000
		},
		{
		'lossPercentage': 12,
		'costPrice': 9800
		}],
		randomIndex = getRandomNumber(inputData.length),
		lossPercentage= inputData[randomIndex]['lossPercentage'],
		costPrice = inputData[randomIndex]['costPrice'],
		sellingPrice,
		question = {};

	lossPercentage=parseInt(lossPercentage);
	costPrice=parseInt(costPrice);
	sellingPrice=((100-lossPercentage)/100)*costPrice;

	question = {
		'type': 'single',
		'id': '0619',
		'question': 'A man purchase a TV for Rs. '+ costPrice+' and sells it at '+lossPercentage+'. What is the sellingPrice of Tv?', 
		'options': {
			'A': sellingPrice - parseInt(Math.random()*10),
			'B': sellingPrice + parseInt(Math.random()*10),
			'C': sellingPrice,
			'D': sellingPrice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0620(){
	var inputData = [{
		'lossPercentage': 25,
		'sellingPrice': 4200
		},
		{
		'lossPercentage': 10,
		'sellingPrice': 3400
		},
		{
		'lossPercentage': 5,
		'sellingPrice': 3500
		},
		{
		'lossPercentage': 10,
		'sellingPrice': 5050
		},
		{
		'lossPercentage': 12,
		'sellingPrice': 4300
		}],
		randomIndex = getRandomNumber(inputData.length),
		lossPercentage= inputData[randomIndex]['lossPercentage'],
		sellingPrice = inputData[randomIndex]['sellingPrice'],
		costPrice,
		question = {};

	lossPercentage=parseInt(lossPercentage);
	sellingPrice=parseInt(sellingPrice);
    costPrice=(100/(100-lossPercentage))*sellingPrice;

	question = {
		'type': 'single',
		'id': '0620',
		'question': 'A shopkeeper purchases a table and sells it for '+ sellingPrice+'. If he incur a loss of '+ lossPercentage+'. Find the costPriceof table.',  
		'options': {
			'A': costPrice - parseInt(Math.random()*10),
			'B': costPrice + parseInt(Math.random()*10),
			'C': costPrice,
			'D': costPrice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	return question;
}

function problem0621(){
		var inputData = [{
		's1': 15,
		's2': 4,
		'd': 35,
		},
		{
		's1': 85,
		's2': 4,
		'd': 3,
		},
		{
		's1': 15,
		's2': 8,
		'd': 3,
		},
		{
		's1': 13,
		's2': 4,
		'd': 68,
		}],
		randomIndex = getRandomNumber(inputData.length),
		s1= inputData[randomIndex]['s1'],
		s2= inputData[randomIndex]['s2'],
		d= inputData[randomIndex]['d'],
		speed,
		time,
		question = {};
		
		speed=s1+s2;
		time=d/speed;

	question = {
		'type': 'single',
		'id': '0621',
		'question': 'A boat can travel with a speed of ' + s1 + ' km/hr in still water. If the speed of the stream is ' + s2 + 'km/hr, find the time taken by the boat to go ' + d + ' km downstream.',
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time - parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
}
function problem0622(){
	var inputData = [{
		'profitp': 25,
		'costprice': 1300
		},
		{
		'profitp': 25,
		'costprice': 1200
		},
		{
		'profitp': 25,
		'costprice': 1500
		},
		{
		'profitp': 25,
		'costprice': 1600
		},
		{
		'profitp': 25,
		'costprice': 1800
		}],
		randomIndex = getRandomNumber(inputData.length),
		profitp= inputData[randomIndex]['profitp'],
		costprice= inputData[randomIndex]['costprice'],
		sellingprice,
		question = {};

	profitp=parseInt(profitp);
	costprice=parseInt(costprice);
	sellingprice=(((100/profitp)/100)*costprice)

	question = {
		'type': 'single',
		'id': '0622',
		'question': 'A shopkeeper bought a watch for rs'  + costprice + 'at what price should he sell the watch to earn a profit of'+profitp,
		'options': {
			'A': sellingprice+parseInt(Math.random()*10),
			'B': sellingprice-parseInt(Math.random()*10),
			'C': sellingprice,
			'D': sellingprice-parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '06'
	}
	
	return question;
	
}

function problem0623(){
	var inputData = [{
		'speed':15,
		'currentspeed': 2.5,
		},
		{
		'speed': 15,
		'currentspeed': 2.5,
		},
		{
		'speed': 15,
		'currentspeed': 2.5,
		},
		{
		'speed': 15,
		'currentspeed': 2.5,
		},
		{
		'speed': 15,
		'currentspeed': 2.5,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		currentspeed = inputData[randomIndex]['currentspeed '],
		manspeed,
		question = {};

	speed=parseInt(speed);
	currentspeed=parseInt(currentspeed);
	manspeed=(speed-currentspeed);

	question = {
		'type': 'single',
		'id': '0623',
		'question': 'A man speed with the current is' +speed+ 'and the speed of the current is current' +currentspeed+ 'The man speed against the current is',
		'options': {
			'A':	manspeed * parseInt(Math.random()*10),
			'B': 	manspeed * parseInt(Math.random()*10),
			'C':	manspeed,
			'D': 	manspeed + parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '06'
	}
	
	return question;
}
function problem0624(){
	var inputData = [{
	
		'population1': 54500,
		'population2': 58500
		},
		{
		'population1': 54500,
		'population2': 56500
		},
		{
		'population1': 54500,
		'population2': 57500
		},
		{
		'population1': 54500,
		'population2': 55500
		}],
		randomIndex = getRandomNumber(inputData.length),
		population1= inputData[randomIndex]['population1'],
		population2 = inputData[randomIndex]['population2'],
		population,
		percentageincrease,
		question = {};

	population1=parseInt(population1);
	population2=parseInt(population2);
	
	population=(population1-population2);
	
	percentageincrease =((population/population1)*100);
	

	question = {
		'type': 'single',
		'id': '0624',
		'question': 'The population of a town is increased from '+ population1 +' to '+ population2 +'  in one year. What is the percentage increase in the population?',
		'options': {
			'A': percentageincrease,
			'B': percentageincrease - parseInt(Math.random()*10), 
			'C': percentageincrease + parseInt(Math.random()*10),
			'D': percentageincrease - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}

function problem0625(){
	var inputData = [{
		'cp':25,
		'sp': 45
		},
		{
		'cp':25,
		'sp': 35
		},
		{
		'cp':25,
		'sp': 15
		},
		{
		'cp':25,
		'sp': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
	    cp= inputData[randomIndex]['cp'],
		sp = inputData[randomIndex]['sp'],
		costprice,
		sellingprice,
		profit,
		profitpercent,
		
		question = {};
		
		costprice=100-cp;
		sellingprice=100+sp;
		profit=(sellingprice-costprice);
		profitpercent =((profit/costprice)*100);


	question = {
		'type': 'single',
		'id': '0624',
		'question': ' Mohan bought an article at '+cp+'  % less of the marked price and sold it at '+sp+'% more than the marked price. Find the profit earned by him.',
		'options': {
			'A': profitpercent-parseInt(Math.random()*10),
			'B': profitpercent-parseInt(Math.random()*10),
			'C': profitpercent,
			'D': profitpercent+parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
	
}

function problem0625(){
	var inputData = [{
		'speed1':10,
		'speed2':12,
		'dis':8
		},
		{
		'speed1':10,
		'speed2': 14,
		'dis':8
		},
		{
		'speed1':10,
		'speed2': 16,
		'dis':8
		},
		{
		'speed1':10,
		'speed2': 18,
		'dis':8
		}],
		randomIndex = getRandomNumber(inputData.length),
	    speed1= inputData[randomIndex]['speed1'],
		speed2 = inputData[randomIndex]['speed2'],
		dis = inputData[randomIndex]['dis'],
		time,
		
		question = {};
		speed=(speed2-speed1);
		time=dis/speed;

	question = {
		'type': 'single',
		'id': '0625',
		'question': 'Two boys start running at the same time in the same direction at a speed of '+ speed1 +' km/hr and '+ speed2 +' km/hr respectively. In what time they will be '+ dis +' km apart?',
		'options': {
			'A': time,
			'B': time-parseInt(Math.random()*10),
			'C': time-parseInt(Math.random()*10),
			'D': time+parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}


function problem0626(){
	var inputData = [{
		'distance': 600,
		'time': 5
		},
		{
		'distance': 900,
		'time': 4
		},
		{
		'distance': 700,
		'time': 6
		},
		{
		'distance': 500,
		'time': 3
	    }],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance=parseInt(distance);
	time=parseInt(time*60);
	speed=((distance/time)*(18/5));

	question = {
		'type': 'single',
		'id': '0626',
		'question': 'A person crosses a'+distance+'long street in'+time+'.what is his speed in km per hour?',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}

function problem0627(){
	var inputData = [{
		'x': 90,
		'y': 30
		},
		{
		'x': 30,
		'y': 20
		},
		{
		'x': 70,
		'y': 60
		},
		{
		'x': 110,
		'y': 70
		}],
		randomIndex = getRandomNumber(inputData.length),
		x= inputData[randomIndex]['x'],
		y = inputData[randomIndex]['y'],
		average,
		question = {};

	x=parseInt(x);
	y=parseInt(y);
	average=((2*x*y)/(x+y));

	question= {
		'type': 'single',
		'id': '0627',
		'question': 'Distance between two stations A and B is 778km. A train covers the journey from A to B at '+x+'per hour and returns back to A with a uniform speed of '+y+'per hour. Find the average speed of the train during the whole journey',
		'options': {
			'A': average,
			'B': average +parseInt(Math.random()*10),
			'C': average- parseInt(Math.random()*10),
			'D': average*parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	return question;
	
}
function problem0628(){
	var inputData = [
		{
		'distance':20,
		'speed': 400
		},
		{
		'distance':10,
		'speed': 400
		},
		{
		'distance':15,
		'speed': 400
		},
		{
		'distance':25,
		'speed': 400
		}
	],
		randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		distance= inputData[randomIndex]['distance'],
    	time,
		question = {};
		
	    speed=parseInt((speed)*5/18);
		distance=parseInt(distance);
		time=(distance/speed);
		
	question = {
		'type': 'single',
		'id': '0628',
		'question': 'A jogger is running at a speed of '+ speed +' km/hr. In what time he will cross a track of length '+ distance+' meters?',
		'options': {
			'A':  time+parseInt(Math.random()*10),
			'B':  time-parseInt(Math.random()*10),
			'C':  time,
			'D':  time-parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0629(){
	var inputData = [{
		'time':2,
		'speed':20
		},
		{
		'time':2,
		'speed':25
		},
		{
		'time':2,
		'speed': 24
		},
		{
		'time':2,
		'speed': 26
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		time= inputData[randomIndex]['time'],
    	distance,
		question = {};
		
	    speed=parseInt(speed*5/18);
		time=parseInt(time*60);
		distance=(speed*time);
		
	question = {
		'type': 'single',
		'id': '0629',
		'question': 'A cyclist moving at a speed of '+ speed  +' a crosses bridge in  '+ time +' minitues.what is the length of the bridge?',
		'options': {
			'A':  distance,
			'B':  distance-parseInt(Math.random()*10),
			'C':  distance+parseInt(Math.random()*10),
			'D':  distance-parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}

function problem0630(){
	var inputData = [{
		'sub1':6,
		'sub2':4,
		'mark1':74,
		'mark2':70
		},
		{
		'sub1':6,
		'sub2':5,
		'mark1':74,
		'mark2':70
		},
		{
		'sub1':6,
		'sub2':7,
		'mark1':74,
		'mark2':70
		},
		{
		'sub1':6,
		'sub2':8,
		'mark1':74,
		'mark2':70
		}],
		randomIndex = getRandomNumber(inputData.length),
	    sub1= inputData[randomIndex]['sub1'],
		sub2 = inputData[randomIndex]['sub2'],
		mark1 = inputData[randomIndex]['mark1'],
		mark2 = inputData[randomIndex]['mark2'],
		subjecta,
		subjectb,
		subjects,
		
		question = {};
		subjecta=(sub1*mark1);
		subjectb=(sub2*mark2);
		subjects=(subjecta-subjectb);

	question = {
		'type': 'single',
		'id': '0630',
		'question': 'The average of Sohans marks in '+sub1+' subjects is '+mark2+'. If his average in '+sub2+' subjects excluding science is '+mark2+', how many marks he obtained in science?',
		'options': {
			'A': subjects-parseInt(Math.random()*10),
			'B': subjects,
			'C': subjects-parseInt(Math.random()*10),
			'D': subjects+parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '06'
	}
	return question;
}
function problem0631(){
	var inputData = [{
		'speed1':15,
		'speed2': 3,
		'time':12
		},
		{
		'speed1':15,
		'speed2': 4,
		'time':12
		},
		{
		'speed1':15,
		'speed2': 5,
		'time':12
		},
		{
		'speed1':15,
		'speed2': 6,
		'time':12
		},
		{
		'speed1':15,
		'speed2': 7,
		'time':12
		}
	],
		randomIndex = getRandomNumber(inputData.length),
	    speed1= inputData[randomIndex]['speed1'],
		speed2 = inputData[randomIndex]['speed2'],
    	time = inputData[randomIndex]['time'],
	    speed,
	    distance,
		question = {};
		
	    speed1=parseInt(speed1);
		speed2=parseInt(speed2);
		time=parseInt(time);
		speed=speed1+speed2;
	    distance=(speed*(time/60));

	question = {
		'type': 'single',
		'id': '0631',
		'question': ' the speed of a boat in stil water in '+ speed1 +'km/hr and the rate of current is '+speed2 +'km/hr.the distance travlled downstream in '+time+'minutes is?',
		'options': {
			'A': distance-parseInt(Math.random()*10),
			'B': distance+parseInt(Math.random()*10),
			'C': distance-parseInt(Math.random()*10),
			'D': distance
		},
		'answer': 'd',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0632(){
	var inputData = [{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1660
		},
		{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1760
		},
		{
	    'A': 3,
		'B': 2,
		'C': 5,
		'total':1960
		},
		{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1560
		},
		{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1260
		}],
		randomIndex = getRandomNumber(inputData.length),
		A= inputData[randomIndex]['A'],
		B= inputData[randomIndex]['B'],
		C = inputData[randomIndex]['C'],
		total = inputData[randomIndex]['total'],
		add,
		cshare,
		question = {};
		
	    add=C/(A+B+C)
        cshare=add*total
	question = {
		'type': 'single',
		'id': '0632',
		'question': 'A:B:C is in ratio of ' + A + ':' + B + ':' + C + ' ,how much money will c get out of ' + total + '.',
		'options': {
			'A': cshare + parseInt(Math.random()*10),
			'B': cshare- parseInt(Math.random()*10),
			'C': cshare - parseInt(Math.random()*10),
			'D': cshare 
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0633(){
	var inputData = [{
		'price': 6000,
		'interest': 720,
		'rate': 6
		},
		{
		'price': 5000,
		'interest': 720,
		'rate': 6
		},
		{
	    'price': 2000,
		'interest': 720,
		'rate': 6
		},
		{
		'price': 6000,
		'interest': 720,
		'rate': 6
		},
		{
		'price': 3000,
		'interest': 420,
		'rate': 6
		}],
		randomIndex = getRandomNumber(inputData.length),
		price= inputData[randomIndex]['price'],
		interest = inputData[randomIndex]['interest'],
		rate = inputData[randomIndex]['rate'],
		time,
		question = {};
		
	    time=(interest*100)/(price*rate)

	question = {
		'type': 'single',
		'id': '0633',
		'question': 'In what time RS' + price + ' will give interest ofRS ' + interest + ' at rate of ' + rate + ' time?',
		'options': {
			'A': time + parseInt(Math.random()*10),
			'B': time - parseInt(Math.random()*10),
			'C': time,
			'D': time - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
	}
	
	return question;
	
}

function problem0634(){
	var inputData = [{
		'length': 70,
		'breadth': 25,
		'height': 25
		},
		{
		'length': 50,
		'breadth': 25,
		'height': 25
		},
		{
		'length': 90,
		'breadth': 25,
		'height': 25
		},
		{
		'length': 30,
		'breadth': 24,
		'height': 18
		}],
		randomIndex = getRandomNumber(inputData.length),
		length= inputData[randomIndex]['length'],
		breadth= inputData[randomIndex]['breadth'],
		height = inputData[randomIndex]['height'],
		x,
		y,
		question = {};
		x=(length**2)+(breadth**2)+(height**2);
        y=Math.sqrt(x);

	question = {
		'type': 'single',
		'id': '0634',
		'question': 'The length of the largest rod than can be placed in a room that can be placed in a room ' + length + 'm long ' + breadth + 'm broad ' + height + 'm height',
		'options': {
			'A': y - parseInt(Math.random()*10),
			'B': y - parseInt(Math.random()*10),
			'C': y + parseInt(Math.random()*10),
			'D': y
		},
		'answer': 'D',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0635(){
	var inputData = [{
		'speed1':11,
		'speed2': 5,
		},
		{
		'speed1':11,
		'speed2': 10,
		},
		{
		'speed1':11,
		'speed2': 12,
		},
		{
		'speed1':11,
		'speed2': 9,
		},
		{
		'speed1':11,
			'speed2':6
		}
	],
		randomIndex = getRandomNumber(inputData.length),
	    speed1= inputData[randomIndex]['speed1'],
		speed2 = inputData[randomIndex]['speed2'],
	    speed,
		question = {};
	
		speed=(1/2*(speed1+speed2));

	question = {
		'type': 'single',
		'id': '0635',
		'question': ' in one hour a boat goes  '  +  speed1   + 'km/hr  along the stream and  '    +speed2   +   'km/hr  against the stream . the speed of the boat in still water is',
		'options': {
			'A': speed-parseInt(Math.random()*10),
			'B': speed,
			'C': speed+parseInt(Math.random()*10),
			'D': speed+parseInt(Math.random()*10)
		},
		'answer': 'b',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0636(){
	var inputData = [{
		'score':100,
		'boundaries':4,
		'six':4
	},
	{
	'score':200,
	'boundaries':4,
	'six':6
    },
	{
	'score':110,
	'boundaries':3,
	'six':8
    },
	{
	'score':150,
	'boundaries':7,
	'six':3
    }],
   randomIndex = getRandomNumber(inputData.length),
   score=inputData[randomIndex]['score'],
   boundaries=inputData[randomIndex]['boundaries'],
   six=inputData[randomIndex]['six'],
	total,
	running,
	question={};
	
	score=parseInt(score);
	boundaries=parseInt(boundaries*4);
	six=parseInt(six*6);
	total=score-(boundaries+six);
	running=(total/score)*100;
	
	question={
		'type':'single',
		'id':'0636',
		'question':' A batsman scored '+ score +' runs which included '+ boundaries+' and '+ six+'. What present of his total score did he make by running between the wickets',
		'optins':{
			'A':running - parseInt(Math.random()*10),
			'B':running + parseInt(Math.random()*10),
			'C':running,
			'D':running - parseInt(Math.random()*10),
		},
		'amswer':'C',
		'author-id':'06'
	}
	return question;
}

function problem0637(){
	var inputData = [{
		'us': 8,
		'ds': 4
		},
		{
		'us': 10,
		'ds': 4
		},
		{
		'us': 12,
		'ds': 6
		},
		{
		'us': 16,
		'ds': 4
		},
		{
		'us': 14,
		'ds': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
	    us = inputData[randomIndex]['us'],
		ds = inputData[randomIndex]['ds'],
		ss,
		question = {};

	us = parseInt(us);
    ds = parseInt(ds);
    ss = (us+ds)/2;

	question = {
		'type': 'single',
		'id': '0637',
		'question': 'In one hour a boat goes  ' + us + ' km/hr along stream and ' + ds + ' km/hr against the stream . The speed of boat in ' + ss +' in km/hr is.',
		'options': {
			'A': ss - parseInt(Math.random()*10),
			'B': ss + parseInt(Math.random()*10),
			'C': ss,
			'D': ss * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '06'
    }
	return question;
}
function problem0638(){
	var inputData = [{
		's1': 815,
		's2': 854,
		'y1': 3,
		'y2': 4
		},
		{
		's1': 815,
		's2': 854,
		'y1': 8,
		'y2': 5
		},
		{
		's1': 815,
		's2': 859,
		'y1': 5,
		'y2': 9
		},
		{
		's1': 815,
		's2': 853,
		'y1': 8,
		'y2': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		s1= inputData[randomIndex]['s1'],
		s2= inputData[randomIndex]['s2'],
		y1= inputData[randomIndex]['y1'],
		y2= inputData[randomIndex]['y2'],
		a,
		b,
		principal,
		question = {};
		
		a=s2-s1;
		b=a*y1;
		principal=s1-b;

	question = {
		'type': 'single',
		'id': '0638',
		'question': 'A sum of money at simple interest amounts to Rs. ' + s1 + ' in ' + y1 + '  years and to Rs.' + s2 + ' in ' + y2 + ' years. The sum is:',
		'options': {
			'A': principal, 
			'B': principal - parseInt(Math.random()*10),
			'C': principal + parseInt(Math.random()*10),
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06'
	}
	
	return question;
	
}
function problem0639(){
	var inputData = [{
		'dist': 100,
		'time': 5
		},
		{
		'dist': 50,
		'time': 4
		},
		{
		'dist': 72,
		'time': 4
		},
		{
		'dist': 180,
		'time': 8
		},
		{
		'dist': 220,
		'time': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
		dist = inputData[randomIndex]['dist'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};
		
	dist = parseInt(dist*18/5);
	time = parseInt(time*60);
	speed = dist/time;
	
	question = {
		'type': 'single',
		'id': '0639',
		'question': 'A rider crosses a ' + dist + ' m long street in ' + time + ' minutes. What is speed in km per hour?', 
		'options': {
			'A': speed,
			'B': speed * parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '06',
	}
	return question;
}
function problem0640(){
	var inputData = [{
        'length':20,
		'breath':34,
		},
		{
        'length':20,
		'breath':34,
		},
		{
        'length':20,
		'breath':34,
		},
		{
		'length':20,
		'breath':34,
		},
		{
		'length':20,
		'breath':34,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       length= inputData[randomIndex]['length'],
         breath= inputData[randomIndex]['breath'],
		fencing_length,
		question = {};

	length=parseInt(length);
	breath=parseInt(breath);
	area=(length*breath),
	fencing_length=(length/2*breath),

	question = {
		'type': 'single',
		'id': '0640',
		'question': 'rectangular field to be fenced on' +length+ 'sides leaving side of' +
		breath+ 'uncovered if the area of the field is' +area+ 'how many feet of fencing will be required', 
		'options': {
			'A': fencing_length * parseInt(Math.random()*10),
			'B': fencing_length - parseInt(Math.random()*10),
			'C': fencing_length + parseInt(Math.random()*10),
			'D': fencing_length
		},
		'answer': 'D',
		'author-id': '0640'
	}
	
	return question;
}