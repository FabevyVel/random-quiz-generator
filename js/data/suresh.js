function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem131(){
	var inputData = [{
		'distance': 10,
		'time': 60
		},
		{
		'distance': 10,
		'time': 90
		},
		{
		'distance': 10,
		'time': 60
		},
		{
		'distance': 10,
		'time': 60
		},
		{
		'distance': 10,
		'time': 60
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
		'id': '13',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
	
}

function problem132(){
	var inputData = [{
		'costprice': 8000,
		'loss': 10
		},
		{
		'costprice': 5000,
		'loss': 10
		},
		{
		'costprice': 4000,
		'loss': 10
		},
		{
		'costprice': 2000,
		'loss': 10
		},
		{
		'costprice': 6000,
		'loss': 10
		}
		],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		loss = inputData[randomIndex]['loss'],
		p,
		sellingprice,
		question = {};
		
	    p=(100-loss)/100;
		sellingprice=p*costprice;

	question = {
		'type': 'single',
		'id': '132',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice,
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10),
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
	
}
	


function problem133(){
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
		'id': '133',
		'question': 'The speed of the bus is '+ speed +' m/sec if it covers a '+ distance +' kmph how much time it takes.', 
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time + parseInt(Math.random()*10),
			'C': time - parseInt(Math.random()*10),
			'D': time,
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
	

function problem134(){
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
		'id': '134',
		'question': 'A man rows downstream at '+ downStream +' km/hr and rows upstream at '+ upStream +' km/hr. At what speed he can row in still water?',
		'options': {
			'A': speedStream,
			'B': speedStream - parseInt(Math.random()*10),
			'C': speedStream + parseInt(Math.random()*10),
			'D': speedStream - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
	
}
function problem135(){
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
		'id': '135',
		'question': ' If Suresh borrows '+ principal +' from Mahesh at rate of interest '+ interest +' S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': simpleInterest - parseInt(Math.random()*10),
			'B': simpleInterest + parseInt(Math.random()*10),
			'C': simpleInterest - parseInt(Math.random()*10),
			'D': simpleInterest, 
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
}
function problem136(){
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
		'id': '136',
		'question': 'The diagonal of a square field is '+ diagonal +'m,then area of the field is',
		'options': {
			'A': areaSquare - parseInt(Math.random()*10),
			'B': areaSquare - parseInt(Math.random()*10),
			'C': areaSquare + parseInt(Math.random()*10),
			'D': areaSquare
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
function problem137(){
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
		'id': '137',
		'question': 'A:B:C is in ratio of ' + A + ':' + B + ':' + C + ' ,how much money will c get out of ' + total + '.',
		'options': {
			'A': cshare + parseInt(Math.random()*10),
			'B': cshare- parseInt(Math.random()*10),
			'C': cshare - parseInt(Math.random()*10),
			'D': cshare 
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
function problem138(){
	var inputData = [{
		'costprice': 1540,
		'profit': 25
		},
		{
		'costprice': 1740,
		'profit': 25
		},
		{
		'costprice': 1620,
		'profit': 25
		},
		{
		'costprice': 1840,
		'profit': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		profit = inputData[randomIndex]['profit'],
		p,
		sellingprice,
		question = {};
		
	    p=(100+profit)/100;
		sellingprice=p*costprice;

	question = {
		'type': 'single',
		'id': '138',
		'question': 'Ramesh bought a chai for RS ' + costprice + ' and sold it suressh ,if ramesh earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
	
}
function problem139(){
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
		'id': '139',
		'question': 'Mohan gets a salary of '+ salaryA +', '+salaryB+ ', '+salaryC+', '+salaryD+' and '+salaryE +' for 5 months. How much salary he must have in the sixth month so that he gets an average of '+ average +'',
		'options': {
			'A': finalSalary,
			'B': finalSalary - parseInt(Math.random()*10),
			'C': finalSalary + parseInt(Math.random()*10),
			'D': finalSalary - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
}
function problem1310(){
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
		'id': '1310',
		'question': ' The population of a town increased from '+ initial +' to '+ ending+' in a '+ years +'. The average percent increase of population per year is:',
		'options': {
			'A': requiredAverage + parseInt(Math.random()*10),
			'B': requiredAverage - parseInt(Math.random()*10),
			'C': requiredAverage,
			'D': requiredAverage - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '13'
	}
	
	return question;
}
function problem1311(){
	var inputData = [{
		'subjects1':6,
		'subjects2': 5,
		'average1':75,
		'average2':74
		},
		{
		'subjects1':6,
		'subjects2': 5,
		'average1':75,
		'average2':76
		},
		{
		'subjects1':6,
		'subjects2': 5,
		'average1':75,
		'average2':73
		},
		{
		'subjects1':6,
		'subjects2': 5,
		'average1':75,
		'average2':72
		},
		{
		'subjects1':6,
		'subjects2': 5,
		'average1':75,
		'average2':75
		}
	],
		randomIndex = getRandomNumber(inputData.length),
	    subjects1= inputData[randomIndex]['subjects1'],
		subjects2 = inputData[randomIndex]['subjects2'],
    	average1= inputData[randomIndex]['average1'],
	    average2= inputData[randomIndex]['average2'],
	    tomarks1,
	    tomarks2,
	    mark,
		question = {};
		
	    subjects1=parseInt(subjects1);
		subjects2=parseInt(subjects2);
		average1=parseInt(average1);
		average2=parseInt(average2);
	    tomarks1=average1*subjects1;
        tomarks2=average2*subjects2;
		mark=tomarks1-tomarks2;
	question = {
		'type': 'single',
		'id': '1311',
		'question': ' ashok secures average of  '   +   average1 +  'marks in  '  +subjects1 + 'subjects if the average of amrks in    '+subjects2+'is  '+average2+'how many marks did he secure in the 6th subject?',
		'options': {
			'A': mark-parseInt(Math.random()*10),
			'B': mark+parseInt(Math.random()*10),
			'C': mark-parseInt(Math.random()*10),
			'D': mark
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1312(){
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
		'id': '1312',
		'question': ' the speed of a boat in stil water in'   +   speed1 +  'km/hr and the rate of current is '  +speed2 + 'km/hr.the distance travlled downstream in '+time+'minutes is?',
		'options': {
			'A': distance-parseInt(Math.random()*10),
			'B': distance+parseInt(Math.random()*10),
			'C': distance-parseInt(Math.random()*10),
			'D': distance
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1313(){
	var inputData = [{
		'distance':68,
		'speed1': 13,
		'speed2':4
		},
		{
		'distance':68,
		'speed1': 13,
			'speed2':5
		},
		{
		'distance':68,
		'speed1': 13,
			'speed2':6
		},
		{
		'distance':68,
		'speed1': 13,
			'speed2':7
		},
		{
		'distance':68,
		'speed1': 13,
			'speed2':8
		}
	],
		randomIndex = getRandomNumber(inputData.length),
	    distance = inputData[randomIndex]['distance'],
		speed1 = inputData[randomIndex]['speed1'],
    	speed2 = inputData[randomIndex]['speed2'],
	    speed,
	    time,
		question = {};
		
	    distance=parseInt(distance);
		speed1=parseInt(speed1);
		speed2=parseInt(speed2);
		speed=speed1+speed2;
	    time=(distance/speed);


	question = {
		'type': 'single',
		'id': '1313',
		'question': 'a boat can travel with a speed of'   +   speed1 +  'km/hr is still water.if the speed of the stream is'  +speed2 + 'find the time taken by the boat to go '+distance,
		'options': {
			'A': time-parseInt(Math.random()*10),
			'B': time,
			'C': time+parseInt(Math.random()*10),
			'D': time-parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1314(){
	var inputData = [{
		'distance1':240,
		'time1': 24,
		'distance2':650
		},
		{
		'distance1':240,
		'time1': 25,
		'distance2':700
		},
		{
		'distance1':240,
		'time1': 26,
		'distance2':720
		},
		{
		'distance1':240,
		'time1': 24,
		'distance2':690
		},
		{
		'distance1':240,
		'time1': 24,
			'distance2':640
		}
	],
		randomIndex = getRandomNumber(inputData.length),
	    distance1 = inputData[randomIndex]['distance1'],
		time1 = inputData[randomIndex]['time1'],
    	distance2 = inputData[randomIndex]['distance2'],
	    speed,
	    time,
		question = {};
		
	    distance1=parseInt(distance1);
		time1=parseInt(time1);
		distance2=parseInt(distance2);
		speed=distance1/time1;
	    time=((distance1+distance2)/speed);


	question = {
		'type': 'single',
		'id': '1314',
		'question': 'a train'   +   distance1 +  'm long passes a pole in'  +time1 + 'seconds.how long will take to pass a plateform '+distance2+'m long',
		'options': {
			'A': time-parseInt(Math.random()*10),
			'B': time,
			'C': time+parseInt(Math.random()*10),
			'D': time-parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1315(){
	var inputData = [{
		'principle': 35000,
		'interest': 9,
		'years': 5
		},
		{
	    'principle': 35000,
		'interest': 6,
		'years': 5
		},
		{
	    'principle': 35000,
		'interest': 6,
		'years': 6
		},
		{
		'principle': 35000,
		'interest': 5,
		'years': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		principle= inputData[randomIndex]['principle'],
		interest= inputData[randomIndex]['interest'],
		years= inputData[randomIndex]['years'],
		x,
		S,
		question = {};
		
	    x=principle*interest*years;
		S=x/100;

	question = {
		'type': 'single',
		'id': '1315',
		'question': 'If Suresh borrows Rs. ' + principle + ' from Mahesh at rate of interest ' + interest + ' S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': S + parseInt(Math.random()*10),
			'B': S - parseInt(Math.random()*10),
			'C': S,
			'D': S - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1316(){
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
		'id': '1316',
		'question': 'What is the area of triangle with base '+ base +'m and '+ height +'m ?',
		'options': {
			'A': areaTriangle,
			'B': areaTriangle - parseInt(Math.random()*10),
			'C': areaTriangle + parseInt(Math.random()*10),
			'D': areaTriangle - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1317(){
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
		'id': '1317',
		'question': 'Find the cube root value of '+ value+'? ',
		'options': {
			'A':cubeRoot - parseInt(Math.random()*10),
			'B': cubeRoot - parseInt(Math.random()*10),
			'C': cubeRoot + parseInt(Math.random()*10),
			'D':  cubeRoot
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1318(){
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
		'id': '1318',
		'question': 'A person crosses a '+ distance+' m long street in '+ time+' minutes. What is speed in km per hour?', 
		'options': {
			'A': speed - parseInt(Math.random()*10),
			'B': speed,
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1319(){
	var inputData = [{
		'speed':15,
		'distance': 400
		},
		{
		'speed':18,
		'distance': 400
		},
		{
		'speed':12,
		'distance': 400
		},
		{
		'speed':24,
		'distance': 400
		},
		{
		'speed':20,
		'distance': 400
		}
	],
		randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		distance= inputData[randomIndex]['distance'],
    	time,
		question = {};
		
	    speed=parseInt(speed*5/18);
		distance=parseInt(distance);
		time=(distance/speed);
		


	question = {
		'type': 'single',
		'id': '1319',
		'question': 'a jogger is running at a speed of'   +  speed   +  'in what time he will cross a track of length'   + distance,
		'options': {
			'A':  time,
			'B':  time-parseInt(Math.random()*10),
			'C':  time+parseInt(Math.random()*10),
			'D':  time-parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1320(){
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
		'id': '1320',
		'question': 'A man purchase a TV for Rs. '+ costPrice+' and sells it at '+lossPercentage+'. What is the sellingPrice of Tv?', 
		'options': {
			'A': sellingPrice - parseInt(Math.random()*10),
			'B': sellingPrice + parseInt(Math.random()*10),
			'C': sellingPrice,
			'D': sellingPrice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '13'
	}
	
	return question;
	
}

function problem1321(){
	var inputData = [{
		'costprice':20,
		'sellinprice': 375,
		},
		{
		'costprice':20,
		'sellinprice': 375,
		},
		{
        'costprice':20,
		'sellinprice': 33,
		},
		{
        'costprice':20,
		'sellinprice': 33,
		},
		{
        'costprice':20,
		'sellinprice': 375,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
         sellingprice= inputData[randomIndex]['sellingprice'],
		profit,
		question = {};

	costprice=parseInt(costprice);
	sellingprice=parseInt(sellingprice);
	profit=(sellingprice-costprice),

	question = {
		'type': 'single',
		'id': '1321',
		'question': 'Sam purchased' +costprice+ 'of toys at the rate of' +sellingprice+ 'per dozen. He sold each one of them at the rate What was his percentage profit',
		'options': {
			'A':profit+ parseInt(Math.random()*10),
			'B':profit- parseInt(Math.random()*10),
			'C':profit,
			'D':profit- parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '13'
	}
	
	return question;
}
function problem1322(){
	var inputData = [{
		'amount': 815,
		'time': 3
		},
		{
		'amount': 815,
		'time': 3
		},
		{
		'amount': 854,
		'time': 4
		},
		{
		'amount': 854,
		'time': 3
		},
		{
		'amount': 854,
		'time': 4
		}],
	 randomIndex = getRandomNumber(inputData.length),
		amount= inputData[randomIndex]['amount'],
		time = inputData[randomIndex]['time'],
		simpleinterest,
		question = {};

	amount=parseInt(amount);
	time=parseInt(time);
	simpleinterest=(simpleinterest*100/amount*time);

	question = {
		'type': 'single',
		'id': '1322',
		'question': 'A sum of money at simple interest '+amount+ 'in '+time+ 'years and '+amount+ 'in '+time+ 'years The sum is',
		'options': {
			'A':simpleinterest-parseInt(Math.random()*10),
			'B':simpleinterest+parseInt(Math.random()*10),
			'C':simpleinterest,
			'D':simpleinterest+parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '13'
	}
	
	return question;
}

function problem1323(){
	var inputData = [{
		'average': 80,
		},
		{
		'average': 90,
		},
		{
		'average': 30,
		},
		{
		'average': 60,
		},
		{
		'average': 40,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		average= inputData[randomIndex]['average'],
		newAverage,
		question = {};

	average=parseInt(average);
	newAverage=average*2;

	question = {
		'type': 'single',
		'id': '1323',
		'question': 'average of five numbers is '+average+ 'if each number is multiplied by 2 what will be the new average?',
		'options': {
			'A':newAverage-parseInt(Math.random()*10),
			'B':newAverage+parseInt(Math.random()*10),
			'C':newAverage,
			'D':newAverage+parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '13'
	}
	
	return question;
}
function problem1324(){
	var inputData = [{
		'area':5,
		'hectares': 1.5,
		},
		{
		'area':5,
		'hectares': 1.5,
		},
		{
        'area':5,
		'hectares':1.5,
		},
		{
        'area':5,
		'hectares': 1.5,
		},
		{
        'area':5,
		'hectares': 1.5,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		area= inputData[randomIndex]['area'],
		hectares = inputData[randomIndex]['hectares'],
		volume,
		question = {};

	area=parseInt(area);
	hectares=parseInt(hectares);
	volume=(area*hectares);

	question = {
		'type': 'single',
		'id': '1324',
		'question': 'In a shower' +area+ 'of rain falls The volume of water that falls on' +hectares+ 'of ground is',
		'options': {
			'A':volume - parseInt(Math.random()*10),
			'B':volume,
			'C':volume + parseInt(Math.random()*10),
			'D': volume- parseInt(Math.random()*10)
			
		},
		'answer': 'B',
		'author-id': '13'
	}
	
	return question;
}
function problem1325(){
	var inputData = [{
		'price1': 12005,
		'price2': 9800,
		'years1':10,
		'years2':8
		},
		{
		'price1': 12005,
		'price2': 9800,
		'years1':7,
		'years2':8
		},
		{
		'price1': 12005,
		'price2': 9800,
		'years1':5,
		'years2':8
		},
		{
		'price1': 12005,
		'price2': 9800,
		'years1':15,
		'years2':8
		},
		{
		'price1': 12005,
		'price2': 9800,
		'years1':12,
		'years2':8
		}],
	randomIndex = getRandomNumber(inputData.length),
		price1= inputData[randomIndex]['price1'],
		price2 = inputData[randomIndex]['price2'],
		years1= inputData[randomIndex]['years1'],
		years2= inputData[randomIndex]['years2'],
		years3,
		years,
		question = {};
		
    price1=parseInt(price1);
	price2=parseInt(price2);
	years1=parseInt(years1);
	years2=parseInt(years2);
	years3=(price1-price2);
	years=((years3)*years1);


	question = {
		'type': 'single',
		'id': '1325',
		'question': 'a sum of money amountsto Rs'+price2+'  after   '+years1+'and  Rs'+price1+'after  ' +years+'at the same rate of simple intrest.The rate of intrest pee annum is?',
		'options': {
			'A':years- parseInt(Math.random()*10),
			'B':years+ parseInt(Math.random()*10),
			'C':years- parseInt(Math.random()*10),
			'D':years
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1326(){
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
		'id': '1326',
		'question': 'In one hour a boat goes  ' + us + ' km/hr along stream and ' + ds + ' km/hr against the stream . The speed of boat in ' + ss +' in km/hr is.',
		'options': {
			'A': ss -parseInt(Math.random()*10),
			'B': ss +parseInt(Math.random()*10),
			'C': ss,
			'D': ss -parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '13'
    }
	return question;
}
function problem1327(){
	var inputData = [{
		'p': 12600,
		'n': 2,
		'r':10
		},
		{
		'p': 12400,
		'n': 2,
		'r':4		
		},
		{
		'p': 12600,
		'n': 2,
		'r':8
		},
		{
		'p': 12600,
		'n': 2,
		'r':12
		},
		{
		'p': 12400,
		'n': 2,
		'r':8
		}],
		randomIndex = getRandomNumber(inputData.length),
	    p = inputData[randomIndex]['p'],
		n = inputData[randomIndex]['n'],
		r = inputData[randomIndex]['r'],
		a,
		ci,
		question = {};

	p = parseInt(p);
    n = parseInt(n);
    r = parseInt(r);
	a = p*(1+(r/100))**n;
	ci = a - p,

	question = {
		'type': 'single',
		'id': '1327',
		'question': 'Find the compound interest on' + p + ' rs for ' + n + ' years at ' + r + ' percentage per annum completed annualy.',
		'options': {
			'A': ci - parseInt(Math.random()*10),
			'B': ci + parseInt(Math.random()*10),
			'C': ci - parseInt(Math.random()*10),
			'D': ci 
		},
		'answer': 'D',
		'author-id': '13'
    }
	return question;
}
function problem1328(){
		var inputData = [{
			'train1':6,
			'train2':8,
			'distance':480,
			'time':4
			},
			{
			'train1':8,
			'train2':10,
			'distance':800,
				'time':3
			},
			{
			'train1':10,
			'train2':12,
			'distance':600,
				'time':2
			},
			
			{
			'train1':4,
			'train2':6,
			'distance':500,
				'time':5
			}],
			randomIndex = getRandomNumber(inputData.length),
			train1= inputData[randomIndex]['train1'],
			train2= inputData[randomIndex]['train2'],
		    distance= inputData[randomIndex]['distance'],
			time= inputData[randomIndex]['time'],
			
			question= {};
			
			 train1=parseInt(train1);
			 train2=parseInt(train2);
			 distance=parseInt(distance);
			 time=parseInt( time);
			 speed=(distance/time)/train2;
			 firsttrain=train1*speed;
			
	  question = {
			'type': 'single',
			'id': '1328',
			'question': 'The ratio between the speed of two train is '+train1+':'+train2+'.If the second train runs '+distance+' km in '+time+'hours, then the speed of the first train is?',
			'options': {
				'A':firsttrain-parseInt(Math.random()*10),
				'B':firsttrain+parseInt(Math.random()*10),
				'C':firsttrain-parseInt(Math.random()*10),
				'D':firsttrain
			},
			'answer': 'D',
			'author-id': '13'
		}
		return question;	
}
function problem1329()
{
	var inputData = [{
		'person1': 16,
		'avgone': 50.25,
		'person2': 8,
		'avgtwo': 45.15
		},
		{
		'person1': 17,
		'avgone': 51.25,
		'person2': 9,
		'avgtwo': 46.15
		},
		{
		'person1': 18,
		'avgone': 52.25,
		'person2': 7,
		'avgtwo': 44.15
		},
		{
		'person1': 10,
		'avgone': 62.5,
		'person2': 6,
		'avgtwo': 33.33
		},
		{
		'person1': 12,
		'avgone': 55.3,
		'person2': 8,
		'avgtwo': 44.35
		}],
		randomIndex = getRandomNumber(inputData.length),
		person1= inputData[randomIndex]['person1'],
		avgone= inputData[randomIndex]['avgone'],
		person2= inputData[randomIndex]['person2'],
		avgtwo= inputData[randomIndex]['avgtwo'],
		avg,
		question = {};

	avg=(person1*avgone+person2*avgtwo)/(person1+person2);
	avg=parseFloat(avg);

	question = {
		'type': 'single',
		'id': '1329',
		'question': "The average weight of"+person1+"boys in a class is"+avgone+"kg and that of the remaining"+person2+"boys is"+avgtwo+"kg. Find the average weights of all the boys in the class.",
		'options': {
			'A': avg - parseInt(Math.random()*10),
			'B': avg,
			'C': avg + parseInt(Math.random()*10),
			'D': avg - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1330()
{
	var inputData = [{
		'total': 110,
		'boundaries': 3,
		'six': 8
		},
		{
		'total': 100,
		'boundaries': 3,
		'six': 8
		},
		{
		'total': 110,
		'boundaries': 4,
		'six': 8
		},
		{
		'total': 120,
		'boundaries': 3,
		'six': 8
		},
		{
		'total': 110,
		'boundaries': 2,
		'six': 7
		}],
		randomIndex = getRandomNumber(inputData.length),
		total= inputData[randomIndex]['total'],
		boundaries= inputData[randomIndex]['boundaries'],
		six= inputData[randomIndex]['six'],
		percentage,
		question = {};

	percentage=(total-(boundaries*4+six*6))*100/total;
	percentage=parseFloat(percentage);

	question = {
		'type': 'single',
		'id': '1330',
		'question': "A batsman scored "+total+" runs which included "+boundaries+" boundaries and "+six+" sixes. What percent of his total score did he make by running between the wickets?",
		'options': {
			'A': percentage- parseInt(Math.random()*10),
			'B': percentage+ parseInt(Math.random()*10),
			'C': percentage,
			'D': percentage- parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1331(){
	var inputData = [{
		'children':8,
		'age': 50,
		'years':3
		},
		{
		'children':6,
		'age': 60,
		'years':3
		},
		{
		'children':7,
		'age': 70,
		'years':3
		},
		{
		'children':5,
		'age': 80,
		'years':3
		}],
		randomIndex = getRandomNumber(inputData.length),
		children = inputData[randomIndex]['children'],
		age = inputData[randomIndex]['age'],
		years = inputData[randomIndex]['years'],
		interval,
		x,
		youngestChild,
		question = {};
	
	interval=(age*age*age)+age;
	x=years-interval;
	youngestChild=x/children;


	question = {
		'type': 'single',
		'id': '1331',
		'question':'The sum of ages of'+ children + 'children born at the intervals of' + years + 'years each is'+ age + 'years. What is the age of the youngest child?',
		'options': {
			'A': youngestChild - parseFloat(Math.random()*10),
			'B': youngestChild + parseFloat(Math.random()*10),
			'C': youngestChild,
			'D': youngestChild - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1332(){
	var inputData = [{
		'average':50,
		'years': 35,
		'teacher': 6,
		'years_teacher':9
		},
		{
		'average':80,
		'years': 65,
		'teacher': 12,
		'years_teacher':3
		},
		{
		'average':135,
		'years': 40,
		'teacher': 10,
		'years_teacher':6
		},
		{
		'average':30,
		'years': 15,
		'teacher': 2,
		'years_teacher': 1
		}],
		randomIndex = getRandomNumber(inputData.length),
		average = inputData[randomIndex]['average'],
		years = inputData[randomIndex]['years'],
		teacher = inputData[randomIndex]['teacher'],
		years_teacher = inputData[randomIndex]['years_teacher'],
		a,
		sum,
		age,
		x,
		includes,
		question = {};
	
	a=average+teacher;
	sum=years+years_teacher;
	age=average*years;
	x=a*sum;
	includes=x-age;

		question = {
		'type': 'single',
		'id': '1332',
		'question':'The average age of' + average + 'boys in a class is'+ years + 'years. If we include the age of' + teacher + 
		'teachers, the average age increases by' + years_teacher + ' . What is the sum of ages of the two teachers?',
		'options': {
			'A': includes - parseInt(Math.random()*10),
			'B': includes - parseInt(Math.random()*10),
			'C': includes + parseInt(Math.random()*10),
			'D': includes
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1333(){
	var inputData = [{
		'speed':20,
		'time': 4
		},
		{
		'speed':22,
		'time':6
		},
		{
		'speed':54,
		'time':2
		},
		{
		'speed':55,
		'time': 9
		},
		{
		'speed':30,
		'time': 6
		}
	],
		randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		time= inputData[randomIndex]['time'],
    	distance,
		question = {};
		
	    speed = parseInt(speed*5/18);
		time = parseInt(time*60);
		distance = speed*time;
		
		question = {
		'type': 'single',
		'id': '1333',
		'question': 'A cyclist moving at a speed of' + speed + 'a crosses bridge in '+ time +'minitues.what is the length' + distance +' of the bridge?',
		'options': {
			'A':  distance-parseInt(Math.random()*10),
			'B':  distance,
			'C':  distance+parseInt(Math.random()*10),
			'D':  distance-parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1334(){
	var inputData = [{
		'cp':55,
		'sp': 45
		},
		{
		'cp':45,
		'sp': 35
		},
		{
		'cp':25,
		'sp': 15
		},
		{
		'cp':35,
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
		'id': '1334',
		'question': ' Raman bought an article at '+cp+'  % less of the marked price and sold it at '+sp+'% more than the marked price. Find the profit earned by him.',
		'options': {
			'A': profitpercent-parseInt(Math.random()*10),
			'B': profitpercent+parseInt(Math.random()*10),
			'C': profitpercent,
			'D': profitpercent-parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1335(){
	var inputData = [{
		'speed1':10,
		'speed2':12,
		'dis':8
		},
		{
		'speed1':10,
		'speed2': 24,
		'dis':8
		},
		{
		'speed1':10,
		'speed2': 96,
		'dis':8
		},
		{
		'speed1':10,
		'speed2': 28,
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
		'id': '1335',
		'question': 'Two girls start running at the same time in the same direction at a speed of '+ speed1 +' km/hr and '+ speed2 +' km/hr respectively. In what time they will be '+ dis +' km apart?',
		'options': {
			'A': time,
			'B': time-parseInt(Math.random()*10),
			'C': time+parseInt(Math.random()*10),
			'D': time-parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1336(){
	var inputData = [{
		'percentage':30,
		'apples': 180
		},
		{
		'percentage':50,
		'apples': 240
		},
		{
		'percentage':40,
		'apples': 170
		},
		{
		'percentage':20,
		'apples': 150
		}],
		randomIndex = getRandomNumber(inputData.length),
		percentage = inputData[randomIndex]['percentage'],
		apples = inputData[randomIndex]['apples'],
		fruit,
		seller,
		original,
		question = {};
	
	
	
	fruit=(100-percentage);
	seller=(apples*100);
	original=seller/fruit;


	question = {
		'type': 'single',
		'id': '1336',
		'question': 'A fruit seller had some apples. He sells' + percentage + 'oranges and still has' + apples + ' oranges. Originally, he had?' ,
		'options': {
			'A': original - parseFloat(Math.random()*10),
			'B': original + parseInt(Math.random()*10),
			'C': original - parseFloat(Math.random()*10),
			'D': original
		},
		'answer': 'D',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1337(){
	var inputData = [{
		'tankCap': 25,
		'buckCap': 2/5
		},
		{
		'tankCap': 30,
		'buckCap': 2/5
		},
		{
		'tankCap': 40,
		'buckCap': 2/5
		},
		{
		'tankCap': 45,
		'buckCap': 2/5
		},
		{
		'tankCap': 50,
		'buckCap': 2/5
		}],
		randomIndex = getRandomNumber(inputData.length),
	    tankCap= inputData[randomIndex]['tankCap'],
		buckCap = inputData[randomIndex]['buckCap'],
		nBuck,
		question = {};

	tankCap = parseInt(tankCap);
    buckCap = parseFloat(buckCap);
    nBuck = tankCap/buckCap;

	question = {
		'type': 'single',
		'id': '1337',
		'question': 'To fill a tank ' + tankCap + 'buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to ' + buckCap + ' two fifth of its present?',
		'options': {
			'A': nBuck - parseInt(Math.random()*10),
			'B': nBuck ,
			'C': nBuck + parseInt(Math.random()*10),
			'D': nBuck - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '13'
    }
	return question;
}
function problem1338(){
	var inputData = [{
		'petrol_bill':50,
		'deducted': 150
		},
		{
		'petrol_bill':50,
		'deducted': 200
		},
		{
		'petrol_bill':100,
		'deducted': 180
		},
		{
		'petrol_bill':80,
		'deducted': 180
		},
		{
		'petrol_bill':100,
		'deducted': 300
		}],
		randomIndex = getRandomNumber(inputData.length),
		petrol_bill= inputData[randomIndex]['petrol_bill'],
		deducted = inputData[randomIndex]['deducted'],
		bill,
		question = {};
	
	
	to_pay = deducted - petrol_bill;
	bill = (deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '1338',
		'question': 'If' +" "+ petrol_bill + ' % of an petrol bill is deducted then Rs' + deducted +" "+ 'is still to be paid .How much was the original bill',
		'options': {
			'A': bill,
			'B': bill - parseInt(Math.random()*10),
			'C': bill + parseInt(Math.random()*10),
			'D': bill - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '13'
	}
	
	return question;
	
}
function problem1339(){
    var inputData = [{
    'plane': 25,
    'helicopter': -15
    },
    {
    'plane': 6,
    'helicopter': -15
    },
    {
    'plane': 7,
    'helicopter': -15
    },
    {
    'plane':8,
    'helicopter': -14
    }],
    randomIndex = getRandomNumber(inputData.length),
    plane = inputData[randomIndex]['plane'],
    helicopter = inputData[randomIndex]['helicopter'],
    x,
    y,
    question = {};
    
    x = plane - helicopter;
    y = x - plane;

question = {
    'type': 'single',
    'id': '1339',
    'question': 'A plane speed  is ' + plane + ' km/hr and the speed of the helicopter is ' + helicopter + ' km/hr. The plane speed against the helicopter is',
    'options': {
        'A': y - parseInt(Math.random()*10),
        'B': y + parseInt(Math.random()*10),
        'C': y - parseInt(Math.random()*10),
        'D': y
    },
    'answer': 'D',
    'author-id': '13'
}

return question;

}
function problem1340(){
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
		'id': '1340',
		'question': 'rectangular field to be fenced on' +length+ 'sides leaving side of' +
		breath+ 'uncovered if the area of the field is' +area+ 'how many feet of fencing will be required', 
		'options': {
			'A': fencing_length * parseInt(Math.random()*10),
			'B': fencing_length - parseInt(Math.random()*10),
			'C': fencing_length + parseInt(Math.random()*10),
			'D': fencing_length
		},
		'answer': 'D',
		'author-id': '1340'
	}
	
	return question;
}