function getRandomNumber(max){
       var randomNumber = max * Math.random();
       randomNumber = parseInt(randomNumber);
       return randomNumber;
}

function problem011(){
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
		question = {};

	distance=parseInt(distance);
	time=parseInt(time*60);
	speed=((distance/time)*(18/5));

	question = {
		'type': 'single',
		'id': '011',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '011'
	}
	
	return question;
	
}

function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}

function problem012(){
	var inputData = [{
		'distance': 100,
		'time': 50
		},
		{
		'distance': 80,
		'time': 20
		},
		{
		'distance': 90,
		'time': 30
		},
		{
		'distance': 70,
		'time': 10
		},
		{
		'distance': 50,
		'time': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance = inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};


	distance = parseInt(distance);
	time = parseInt(time);
	speed = (distance/time);


	question = {
		'type': 'single',
		'id': '012',
		'question': 'A car travels a distance of'+" "+ + distance + 'km in'+" "+ + time + 'hours. What is its speed in km/hr?',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '012'
	}
	
	return question;	
}

function problem013(){
	var inputData = [{
		'streamSpeed': 10,
		'boatSpeed': 25
		},
		{
		'streamSpeed': 5,
		'boatSpeed': 15
		},
		{
		'streamSpeed': 19,
		'boatSpeed': 35
		},
		{
		'streamSpeed': 7,
		'boatSpeed': 10
		},
		{
		'streamSpeed': 2,
		'boatSpeed': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		streamSpeed = inputData[randomIndex]['streamSpeed'],
		boatSpeed = inputData[randomIndex]['boatSpeed'],
		upStream,
		question = {};


	streamSpeed = parseInt(streamSpeed);
	boatSpeed = parseInt(boatSpeed);
	upStream = (boatSpeed - streamSpeed);


	question = {
		'type': 'single',
		'id': '013',
		'question': 'The speed of boat in still water is' +" "+ + boatSpeed + 'kmph. The speed of current is'+" "+ + streamSpeed + 'kmph. What is its Up stream speed in kmph?',
		'options': {
			'A': upStream + parseInt(Math.random()*10),
			'B': upStream - parseInt(Math.random()*10),
			'C': upStream + parseInt(Math.random()*10),
			'D': upStream
		},
		'answer': 'D',
		'author-id': '013'
	}
	
	return question;
		
}

function problem014(){
	var inputData = [{
		'sellingPrice': 8400,
		'profit': 12
		},
		{
		'sellingPrice': 800,
		'profit': 25
		},
		{
		'sellingPrice': 1925,
		'profit': 25
		},
		{
		'sellingPrice': 198,
		'profitprofit': 32
		},
		{
		'sellingPrice': 625,
		'profit': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellingPrice= inputData[randomIndex]['sellingPrice'],
		profit = inputData[randomIndex]['profit'],
		costPrice,
		question = {};


	sellingPrice = parseInt(sellingPrice);
	profit = parseInt(profit);
	costPrice = (100/(100+profit)*sellingPrice);


	question = {
		'type': 'single',
		'id': '014',
		'question': 'Sam brought cell phone from a shop. If he sells at Rs' +" "+ + sellingPrice +" "+'and earns a profit of'+" "+ + profit  +'%. Find the cost price of the cell phone.?',
		'options': {
			'A': costPrice + parseInt(Math.random()*10),
			'B': costPrice,
			'C': costPrice + parseInt(Math.random()*10),
			'D': costPrice - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '014'
	}
	
	return question;
		
}

function problem015(){
	var inputData = [{
		'principal': 4500,
		'rateOfInterest': 4,
		'noOfYears': 6
		},
		{
		'principal': 5000,
		'rateOfInterest': 8,
		'noOfYears': 2
		},
		{
		'principal': 5000,
		'rateOfInterest': 4,
		'noOfYears': 6
		},
		{
		'principal': 7500,
		'rateOfInterest': 4,
		'noOfYears': 6
		},
		{
		'principal': 8000,
		'rateOfInterest': 4,
		'noOfYears': 6
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal = inputData[randomIndex]['principal'],
		rateOfInterest = inputData[randomIndex]['rateOfInterest'],
		noOfYears = inputData[randomIndex]['noOfYears'],
		simpleInterest,
		question = {};


	principal = parseInt(principal);
	rateOfInterest = parseInt(rateOfInterest);
	noOfYears = parseInt(noOfYears);
	simpleInterest = (principal*rateOfInterest*noOfYears)/100;


	question = {
		'type': 'single',
		'id': '015',
		'question': 'Find the Simple Interest when Principal is' +" "+ + principal +" "+ ',Rate of Interest is' +" "+ + rateOfInterest  +'% per annum and Time is' +" "+ + noOfYears+ 'years.?',
		'options': {
			'A': simpleInterest + parseInt(Math.random()*10),
			'B': simpleInterest + parseInt(Math.random()*10),
			'C': simpleInterest,
			'D': simpleInterest - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '015'
	}
	
	return question;
		
}

function problem016(){
	var inputData = [{
		'principal': 12600,
		'rateOfInterest': 10,
		'noOfYears': 2
		},
		{
		'principal': 48000,
		'rateOfInterest': 8,
		'noOfYears': 1
		},
		{
		'principal': 8000,
		'rateOfInterest': 15,
		'noOfYears': 2
		},
		{
		'principal': 7500,
		'rateOfInterest': 4,
		'noOfYears': 6
		},
		{
		'principal': 8000,
		'rateOfInterest': 4,
		'noOfYears': 6
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal = inputData[randomIndex]['principal'],
		rateOfInterest = inputData[randomIndex]['rateOfInterest'],
		noOfYears = inputData[randomIndex]['noOfYears'],
		amount,compoundInterest,
		question = {};


	principal = parseInt(principal);
	rateOfInterest = parseInt(rateOfInterest);
	noOfYears = parseInt(noOfYears);
	amount = principal*(1+(rateOfInterest/100))**noOfYears;
	compoundInterest = amount-principal


	question = {
		'type': 'single',
		'id': '016',
		'question': 'Find the Compound Interest on Rs' +" "+ + principal +" "+ 'for' +" "+ + noOfYears  +'years at' +" "+ + rateOfInterest+ '% per annum compounded annually.?',
		'options': {
			'A': compoundInterest + parseInt(Math.random()*10),
			'B': compoundInterest,
			'C': compoundInterest + parseInt(Math.random()*10),
			'D': compoundInterest - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '016'
	}
	
	return question;
		
}

function problem017(){
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
		'id': '017',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '017',
		}
	
	return question;
	
}

function problem018(){
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
		'id': '018',
		'question': 'A train is coming in ' + speed + 'km/hr from north direction at ' + time + 'hr Calculate the time of the train.',
		'options': {
			'A': time,
			'B': Math.abs(time - parseInt(Math.random()*10)),
			'C': Math.abs(time + parseInt(Math.random()*10)),
			'D': Math.abs(time - parseInt(Math.random()*10))
		},
		'answer': 'A',
		'author-id': '018',
	}
	
	return question;
	
}

function problem019(){
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
		'id': '019',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time  +'sec. Calculate the distance of the train.',
		'options': {
			'A': distance,
			'B': distance - parseInt(Math.random()*10),
			'C': distance + parseInt(Math.random()*10),
			'D': distance - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '019'
	}
	
	return question;
}

function problem0110(){
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
		'id': '0110',
		'question': 'A student multiplied a number by ' + wronginput + 'instead of '+correctinput+  'what is the percentage error in the calculation?',
		'options': {
			'A': errorpercentage,
			'B': errorpercentage - parseInt(Math.random()*10),
			'C': errorpercentage + parseInt(Math.random()*10),
			'D': errorpercentage - parseInt(Math.random()*10),
		},
		'answer': 'A',
		'author-id': '0110',
	}
	
	return question;
}

function problem0111(){
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
		'id': '0111',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice - parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice
		},
		'answer': 'D',
		'author-id': '0111'
	}
	
	return question;
	
}

function problem0112(){
	var inputData = [{
		'distance': 35,
		'time': 50
		},
		{
		'distance': 55,
		'time': 70
		},
		{
		'distance': 12,
			'time': 26
		},
		{
		'distance': 23,
			'time': 56
		},
		{
		'distance': 15,
		'time': 45
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
		'id': '0112',
		'question': 'A car travells a distance ' + distance + 'km at ' + time + ' sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed * parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0112'
	}
	
	return question;
	
}

function problem0113(){
	var inputData = [{
		'number': 5,
		},
		{
		'number': 6,
		},
		{
		'number': 9,
		},
		{
		'number': 3,		
		},
		{
		'number': 10,
		}],
		randomIndex = getRandomNumber(inputData.length),
		number= inputData[randomIndex]['number'],
		average,
		question = {};

	number = parseInt(number);
    average = (number-1)/2;

	question = {
		'type': 'single',
		'id': '0113',
		'question': 'find the average of first 10 ' + number + 'whole numbers.',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average - parseInt(Math.random()*10),
			'C': average,
			'D': average * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0113'
	}
	
	return question;
}

function problem0114(){
	var inputData = [{
		'cp': 8000,
		'lp': 10
		},
		{
		'cp': 7500,
		'lp': 12
		},
		{
		'cp': 7000,
		'lp': 10
		},
		{
		'cp': 6500,
		'lp': 10
		},
		{
		'cp': 6000,
		'lp': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
	    cp = inputData[randomIndex]['cp'],
		lp = inputData[randomIndex]['lp'],
		sp,
		question = {};

	cp = parseInt(cp);
    lp = parseFloat(lp);
	sp = (lp * cp)/100 - cp ;

	question = {
		'type': 'single',
		'id': '0114',
		'question': 'A man purchases TV for ' + cp + 'rs and sells it at ' + lp + ' loss percentage. what is the sp of the TV?',
		'options': {
			'A': sp - parseFloat(Math.random()*10),
			'B': sp * parseFloat(Math.random()*10),
			'C': sp + parseFloat(Math.random()*10),
			'D': sp 
		},
		'answer': 'D',
		'author-id': '0114'
    }
	return question;
}

function problem0115(){
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
		'id': '0115',
		'question': 'To fill a tank ' + tankCap + 'buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to ' + buckCap + ' two fifth of its present?',
		'options': {
			'A': nBuck * parseFloat(Math.random()*10),
			'B': nBuck ,
			'C': nBuck + parseFloat(Math.random()*10),
			'D': nBuck - parseFloat(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0115'
    }
	return question;
}

function problem0116(){
	var inputData = [{
		'sp': 8400,
		'pp': 12
		},
		{
		'sp': 7000,
		'pp': 12
		},
		{
		'sp': 6500,
		'pp': 12
		},
		{
		'sp': 6000,
		'pp': 15
		},
		{
		'sp': 8200,
		'pp':12
		}],
		randomIndex = getRandomNumber(inputData.length),
	    sp = inputData[randomIndex]['sp'],
		pp = inputData[randomIndex]['pp'],
		cp,
		question = {};

	sp = parseInt(sp);
    pp = parseFloat(pp);
    cp = 100/(100+pp)*sp;

	question = {
		'type': 'single',
		'id': '0116',
		'question': 'suresh bought a cell phone from a shop. If he sells it at ' + sp + ' rs to mahesh and earns a profit ' + pp + ' percentage . Find the price at which suresh bought the cell phone.',
		'options': {
			'A': cp * parseInt(Math.random()*10),
			'B': cp,
			'C': cp + parseInt(Math.random()*10),
			'D': cp - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0116'
    }
	return question;
}

function problem0117(){
	var inputData = [{
        'upstream':20,
		'downstream':3.5,
		},
		{
        'upstream':8,
		'downstream':2.4,
		},
		{
        'upstream':60,
		'downstream':1.6,
		},
		{
		'upstream':10,
		'downstream':1.5,
		},
		{
		'upstream':9,
		'downstream':2.5,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       upstream= inputData[randomIndex]['upstream'],
        downstream= inputData[randomIndex]['downstream'],
		distance,
		time,
		question = {};

	upstream=parseInt(upstream);
	downstream=parseInt(downstream);
	distance=upstream-downstream;
		distance=upstream+downstream;
	time=distance/upstream;
	

	question = {
		'type': 'single',
		'id': '0117',
		'question': 'Speed of a boat in standing water is' +upstream+ 'and the speed of the stream is' +downstream+ 'A man rows to a place at a' +distance+ 'and comes back to the starting point. The total time taken by him is', 
		'options': {
			'A': time / parseInt(Math.random()*10),
			'B':  time- parseInt(Math.random()*10),
			'C': time,
			'D':time * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0117'
	}
	
	return question;
}

function problem0118(){
	var inputData = [{
        'principle ':6000,
		'interest':720,
		'rate':6,
		},
		{
        'principle ':6000,
		'interest':720,
		'rate':6,
		},
		{
        'principle ':6000,
		'interest':720,
		'rate':6,
		},
		{
		'principle ':6000,
		'interest':720,
		'rate':6,
		},
		{
		'principle ':6000,
		'interest':720,
		'rate':6,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       principle= inputData[randomIndex]['principle'],
        interest= inputData[randomIndex]['interest'],
        rate= inputData[randomIndex]['rate'],
		time,
		question = {};

	principle=parseInt(	principle);
	interest=parseInt(interest);
	rate=parseInt(rate);
	time=(interest*100);
	principle*rate;
	

	question = {
		'type': 'single',
		'id': '0118',
		'question': 'In what time' +principle+ 'will give interest of' +interest+  'at the' +rate+  'of simple interest' , 
		'options': {
			'A': time / parseInt(Math.random()*10),
			'B':  time- parseInt(Math.random()*10),
			'C': time,
			'D':time * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0118'
	}
	
	return question;
}

function problem0119(){
	var inputData = [{
        'length':10,
		'breath':4,
		'height':3,
		},
		{
        'length':10,
		'breath':4,
		'height':3,
		},
		{
        'length':10,
		'breath':4,
		'height':3,
		},
		{
		'length':10,
		'breath':4,
		'height':3,
		},
		{
		'length':10,
		'breath':4,
		'height':3,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       length= inputData[randomIndex]['length'],
        breath= inputData[randomIndex]['breath'],
        height= inputData[randomIndex]['height'],
		area,
		question = {};

       length=parseInt(length);
	breath=parseInt(breath);
	height=parseInt(height);
	area=2*((length*breath)+(breath*length)+(height*length)),
	
	

	question = {
		'type': 'single',
		'id': '0119',
		'question': 'the' +length+  +breath+ 'and'  +height+ 'of a brick are also find the surface area of the brick' , 
		'options': {
			'A': area / parseInt(Math.random()*10),
			'B':  area,
			'C':area- parseInt(Math.random()*10),
			'D':area * parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0119'
	}
	
	return question;
}

function problem0120(){
	var inputData = [{
        'facevalue':100,
		'discount':6,
		'brokage':2,
		},
		{
        'facevalue':100,
		'discount':6,
		'brokage':2,
		},
		{
        'facevalue':100,
		'discount':6,
		'brokage':2,
		},
		{
		'facevalue':100,
		'discount':6,
		'brokage':2,
		},
		{
		'facevalue':100,
		'discount':6,
		'brokage':2,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       facevalue= inputData[randomIndex]['facevalue'],
        discount= inputData[randomIndex]['discount'],
       brokage= inputData[randomIndex]['brokage'],
		costprice,
		question = {};

       facevalue=parseInt(facevalue);
	discount=parseInt(discount);
	brokage=parseInt(brokage);
	costprice=(facevalue-discount+brokage),
	
	
	question = {
		'type': 'single',
		'id': '0120',
		'question': 'what is the cost price of a' +facevalue+ 'stock at'  +discount+ 'when the' +brokage+ 'find the costprice' , 
		'options': {
			'A': costprice,
			'B':  costprice - parseInt(Math.random()*10),
			'C': costprice / parseInt(Math.random()*10),
			'D': costprice * parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0120'
	}
	
	return question;
}