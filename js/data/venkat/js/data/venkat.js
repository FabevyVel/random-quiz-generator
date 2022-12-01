function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


var venkat={
	"problem1401":function(){
		
		var inputData = [{
		'distance': 10,
		'time': 60,
		},
		{
		'distance': 10,
		'time': 90,
		},
		{
		'distance': 10,
		'time': 60,
		},
		{
		'distance': 10,
		'time': 60,
		},
		{
		'distance': 10,
		'time': 60,
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {},

	    distance=parseInt(distance),
	    time=parseInt(time*60),
	    speed=((distance/time)*(18/5)),

	    question = {
		'type': 'single',
		'id': '1401',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14',
		}
	
	return question;
	},	
    "problem1402":function(){
	var inputData = [{
		'distance': 60,
		'speed': 10
		},
		{
		'distance': 70,
		'speed': 20
		},
		{
		'distance': 30,
		'speed': 20
		},
		{
		'distance': 80,
		'speed': 40
		},
		{
		'distance': 10,
		'speed': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		speed = inputData[randomIndex]['speed'],
		time,
		question = {},

	distance=parseInt(distance),
	speed=parseInt(speed),
	time=distance/speed,

	question = {
		'type': 'single',
		'id': '1402',
		'question': 'A train is coming in ' + speed + 'km/hr from north direction at ' + time + 'hr Calculate the time of the train.',
		'options': {
			'A': time,
			'B': Math.abs(time - parseInt(Math.random()*10)),
			'C': Math.abs(time + parseInt(Math.random()*10)),
			'D': Math.abs(time - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '14',
	}
	
	return question;
	
},
    "problem1403":function(){
		var inputData = [{
		'time': 60,
		'speed': 10
		},
		{
		'time': 20,
		'speed': 20
		},
		{
		'time': 30,
		'speed': 20
		},
		{
		'time': 40,
		'speed': 40
		},
		{
		'time': 20,
		'speed': 10
		}],
		
		randomIndex = getRandomNumber(inputData.length),
		time= inputData[randomIndex]['time'],
		speed = inputData[randomIndex]['speed'],
		distance,
		question = {},
		time=parseInt(time),
	speed=parseInt(speed),
	distance=speed*time,
	
	question = {
		'type': 'single',
		'id': '1403',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time  +'sec. Calculate the distance of the train.',
		'options': {
			'A': distance,
			'B': distance - parseInt(Math.random()*10),
			'C': distance + parseInt(Math.random()*10),
			'D': distance - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
	}
	
	return question;
},
    "problem1404":function(){
	var inputData = [{
		'correctinput': 60,
		'wronginput': 10
		},
		{
		'correctinput': 20,
		'wronginput': 20
		},
		{
		'correctinput': 30,
		'wronginput': 20
		},
		{
		'correctinput': 40,
		'wronginput': 40
		},
		{
		'correctinput': 20,
		'wronginput': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		correctinput=inputData[randomIndex]['correctinput'],
		wronginput=inputData[randomIndex]['wronginput'],
	    errorpercentage,
		correctinput=parseInt(correctinput),
		wronginput=parseInt(wronginput),
		errorpercentage=(correctinput - wronginput)/correctinput,
		errorpercentage=errorpercentage*100,
		
		question = {
		'type': 'single',
		'id': '1404',
		'question': 'A student multiplied a number by ' + wronginput + 'instead of '+correctinput+  'what is the percentage error in the calculation?',
		'options': {
			'A': errorpercentage,
			'B': errorpercentage - parseInt(Math.random()*10),
			'C': errorpercentage + parseInt(Math.random()*10),
			'D': errorpercentage - parseInt(Math.random()*10),
		},
		'answer': 'A',
		'author-id': '14',
	}
	
	return question;
},
    "problem1405":function(){
	var inputData = [{
		'costprice': 2000,
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
		'costprice': 8000,
		'loss': 10
		}],
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
		'id': '1405',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice - parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice
		},
		'answer': 'D',
		'author-id': '14'
	}
	
	return question;
	
},
    "problem1406":function(){
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
		'id': '1406',
		'question': 'Ramesh bought a chai for RS ' + costprice + ' and sold it suressh ,if ramesh earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
	}
	
	return question;
	
},
	"problem1408":function(){
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
		'id': '1408',
		'question': 'Ramesh bought a chai for RS ' + costprice + ' and sold it suressh ,if ramesh earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
	}
	
	return question;
	
},
	"problem1409":function(){
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
		'id': '1409',
		'question': 'If Suresh borrows Rs. ' + principle + ' from Mahesh at rate of interest ' + interest + ' S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': S + parseInt(Math.random()*10),
			'B': S - parseInt(Math.random()*10),
			'C': S,
			'D': S - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '14'
	}
	
	return question;
	
},
	"problem1410":function(){
	var inputData = [{
		'costprice': 2000,
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
		'costprice': 8000,
		'loss': 10
		}],
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
		'id': '1410',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice - parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice
		},
		'answer': 'D',
		'author-id': '14'
	}
	
	return question;
	
},
    "problem1411":function(){
		var inputData = [{
		'manspeed': 15,
		'currentspeed': 1.5
		},
		{
		'manspeed': 15,
		'currentspeed': 4.5
		},
		{
		'manspeed': 15,
		'currentspeed': 3.5
		},
		{
		'manspeed': 15,
		'currentspeed': 2.5
		}],
		randomIndex = getRandomNumber(inputData.length),
		manspeed= inputData[randomIndex]['manspeed'],
		currentspeed= inputData[randomIndex]['currentspeed'],
		a,
		b,
		question = {};
		
		a=manspeed-currentspeed;
		b=a-currentspeed;

	question = {
		'type': 'single',
		'id': '1411',
		'question': 'A man speed with the current is ' + manspeed + ' km/hr and the speed of the current is ' + currentspeed + ' km/hr. The mans speed against the current is',
		'options': {
			'A': b - parseInt(Math.random()*10),
			'B': b - parseInt(Math.random()*10),
			'C': b + parseInt(Math.random()*10),
			'D': b
		},
		'answer': 'D',
		'author-id': '14'
	}
	
	return question;
	
},
    "problem1412":function(){
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
		'id': '1412',
		'question': 'A sum of money at simple interest amounts to Rs. ' + s1 + ' in ' + y1 + '  years and to Rs.' + s2 + ' in ' + y2 + ' years. The sum is:',
		'options': {
			'A': principal, 
			'B': principal - parseInt(Math.random()*10),
			'C': principal + parseInt(Math.random()*10),
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
	}
	
	return question;
	
},
    "problem1413":function(){
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
		'id': '1413',
		'question': 'A boat can travel with a speed of ' + s1 + ' km/hr in still water. If the speed of the stream is ' + s2 + 'km/hr, find the time taken by the boat to go ' + d + ' km downstream.',
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time - parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time
		},
		'answer': 'D',
		'author-id': '14'
	}
	
	return question;
	
},
    "problem1414":function(){
	var inputData = [{
		'price1': 500,
		'price2': 15,
		's': 3
		},
		{
		'price1': 556,
		'price2': 54,
		's': 3.7
		},
		{
		'price1': 815,
		'price2': 54,
		's': 3.6
		},
		{
		'price1': 450,
		'price2': 81,
		's': 4.5
		}],
		randomIndex = getRandomNumber(inputData.length),
		price1= inputData[randomIndex]['price1'],
		price2= inputData[randomIndex]['price2'],
		s= inputData[randomIndex]['s'],
	    t,
		question = {};
		
		t=(100*price2)/(price1*s);

	question = {
		'type': 'single',
		'id': '1414',
		'question': 'How much time will it take for an amount of Rs. ' + price1 + ' to yield Rs. ' + price2 + ' as interest at ' + s + '% per annum of simple interest?',
		'options': {
			'A': t- parseInt(Math.random()*10), 
			'B': t - parseInt(Math.random()*10),
			'C': t + parseInt(Math.random()*10),
			'D': t ,
		},
		'answer': 'D',
		'author-id': '14'
	}
	
	return question;
	
},
    "problem1415":function(){
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
		'id': '1415',
		'question': 'A sum of money at simple interest amounts to Rs. ' + s1 + ' in ' + y1 + '  years and to Rs.' + s2 + ' in ' + y2 + ' years. The sum is:',
		'options': {
			'A': principal, 
			'B': principal - parseInt(Math.random()*10),
			'C': principal + parseInt(Math.random()*10),
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
	}
	
	return question;
},
    "problem1416":function(){
	var inputData = [{
		'costprice': 1400,
		'loss': 85
		},
		{
		'costprice': 1740,
		'loss': 25
		},
		{
		'costprice': 1620,
		'loss': 25
		},
		{
		'costprice': 1840,
		'loss': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		loss = inputData[randomIndex]['loss'],
		sellingprice,
		question = {};
		
		sellingprice=(loss/100)*costprice;

	question = {
		'type': 'single',
		'id': '1416',
		'question': 'A man buys a cycle for Rs' + costprice + ' and sells it at a loss of ' + loss + '%. What is the selling price of the cycle?',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
	}
	
	return question;
	
},
    "problem1417":function(){
	var inputData = [{
		'costprice': 1400,
		'sellingprice': 1800
		},
		{
		'costprice': 1740,
		'sellingprice': 1900
		},
		{
		'costprice': 1620,
		'sellingprice': 2000
		},
		{
		'costprice': 1840,
		'sellingprice': 2100
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice=inputData[randomIndex]['costprice'],
		sellingprice=inputData[randomIndex]['sellingprice'],
		
	    profitpercentage,
		question = {},
		profit=(sellingprice-costprice)/costprice,
		profitpercentage=profit*100,
		
		question = {
		'type': 'single',
		'id': '1417',
		'question': 'if man selling price is ' + sellingprice + ' and costprice '  + '%. What is the profitpercentage price of the cycle?',
		'options': {
			'A': profitpercentage, 
			'B': profitpercentage - parseInt(Math.random()*10),
			'C': profitpercentage + parseInt(Math.random()*10),
			'D': profitpercentage - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
		}
	
	return question;
	
},
    "problem1418":function(){
	var inputData = [{
		'boatspeed': 14,
		'streamspeed': 12
		},
		{
		'boatspeed': 15,
		'streamspeed': 11
		},
		{
		'boatspeed': 13,
		'streamspeed': 10
		},
		{
		'boatspeed': 17,
		'streamspeed': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
		boatspeed=inputData[randomIndex]['boatspeed'],
		streamspeed=inputData[randomIndex]['streamspeed'],
		downstream,
		question={},
		downstream=boatspeed+streamspeed,
		
		question = {
		'type': 'single',
		'id': '1418',
		'question': 'if the boat speed is ' + boatspeed + ' and stream speed  is'  + streamspeed+' what is downstream speed?',
		'options': {
			'A': downstream, 
			'B': downstream - parseInt(Math.random()*10),
			'C': downstream + parseInt(Math.random()*10),
			'D': downstream - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
		}
	
	return question;
},
    "problem1419":function(){
	var inputData = [{
		'upstreamspeed': 14,
		'downstreamspeed': 12
		},
		{
		'upstreamspeed': 15,
		'downstreamspeed': 11
		},
		{
		'upstreamspeed': 9,
		'downstreamspeed': 10
		},
		{
		'upstreamspeed': 17,
		'downstreamspeed': 11
		}],
		randomIndex = getRandomNumber(inputData.length),
		upstreamspeed=inputData[randomIndex]['upstreamspeed'],
		downstreamspeed=inputData[randomIndex]['downstreamspeed'],
		streamspeed,
		question={},
		streamspeed=1/2*(downstreamspeed-upstreamspeed),
		
		question = {
		  'type': 'single',
		  'id': '1419',
		  'question': 'if the upstreamspeed  is ' + upstreamspeed + ' and downstreamspeed  is'  + downstreamspeed+' what is boat speed?',
		  'options': {
			'A': streamspeed, 
			'B': streamspeed - parseInt(Math.random()*10),
			'C': streamspeed + parseInt(Math.random()*10),
			'D': streamspeed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
		}
	
	return question;
},
    "problem1420":function(){
	var inputData = [{
		'upstreamspeed': 14,
		'downstreamspeed': 12
		},
		{
		'upstreamspeed': 15,
		'downstreamspeed': 11
		},
		{
		'upstreamspeed': 13,
		'downstreamspeed': 10
		},
		{
		'upstreamspeed': 17,
		'downstreamspeed': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
		upstreamspeed=inputData[randomIndex]['upstreamspeed'],
		downstreamspeed=inputData[randomIndex]['downstreamspeed'],
		boatspeed,
		question={},
		boatspeed=1/2*(upstreamspeed+downstreamspeed),
		
		question = {
		  'type': 'single',
		  'id': '1420',
		  'question': 'if the upstreamspeed  is ' + upstreamspeed + ' and downstreamspeed  is'  + downstreamspeed+' what is boat speed?',
		  'options': {
			'A': boatspeed, 
			'B': boatspeed - parseInt(Math.random()*10),
			'C': boatspeed + parseInt(Math.random()*10),
			'D': boatspeed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
		}
	
	return question;
},
    "problem1421":function(){
	var inputData = [{
		'price1': 1400,
		'years':9,
		'percentage':12
		},
		{
		'price1': 140,
		'years':1,
		'percentage':12
		
		},
		{
		'price1': 1431,
		'years':4,
		'percentage':12
	    },
		{
		'price1': 1431,
		'years':4,
		'percentage':12
		
		}],
		randomIndex = getRandomNumber(inputData.length),
		price1=inputData[randomIndex][price1],
		years=inputData[randomIndex][years],
		percentage=inputData[randomIndex][percentage],
		
		amount,
		question={},
		amount=(100*price)/(percentage*years)
		
		question = {
		  'type': 'single',
		  'id': '1421',
		  'question': 'if the price  is ' +price1 + ' and years  is'  +years +' and percentage is ?'+percentage+'find the amount',
		  'options': {
			'A': amount, 
			'B': amount - parseInt(Math.random()*10),
			'C': amount + parseInt(Math.random()*10),
			'D': amount - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '14'
		}
	
	return question;
},
    "problem1422":function(){
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
		'years2':2
		},
		{
		'price1': 12005,
		'price2': 9800,
		'years1':15,
		'years2':8
		},
		{
		'price1': 12005,
		'price2': 800,
		'years1':2,
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
		'id': '1422',
		'question': 'a sum of money amountsto Rs'+price2+'  after   '+years1+'and  Rs'+price1+'after  ' +years+'at the same rate of simple intrest.The rate of intrest pee annum is?',
		'options': {
			'A': years* parseInt(Math.random()*10),
			'B': years- parseInt(Math.random()*10),
			'C': years + parseInt(Math.random()*10),
			'D': years
		},
		'answer': 'D',
		'author-id': '14'
	}
	
	return question;
	
}
}









































