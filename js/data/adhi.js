function getRandomNumber(max){
       var randomNumber = max * Math.random();
       randomNumber = parseInt(randomNumber);
       return randomNumber;
}

function problem0101(){
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
		'id': '0101',
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

function problem0102(){
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
		'id': '0102',
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

function problem0103(){
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
		'id': '0103',
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

function problem0104(){
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
		'id': '0104',
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

function problem0105(){
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
		'id': '0105',
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

function problem0106(){
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
		'id': '0106',
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

function problem0107(){
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
		'id': '0107',
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

function problem0108(){
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
		'id': '0108',
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

function problem0109(){
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
		'id': '0109',
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

function problem0121(){
		var inputData = [{
			's':4016.25,
			'r':9,
			't':5
			},
			{
			's':4006.05,
			'r':8,
				't':4
			},
			{
			's':3016.15,
			'r':6,
				't':3
			},
			
			{
			's':5016.25,
			'r':4,
				't':2
			}],
			randomIndex = getRandomNumber(inputData.length),
			s= inputData[randomIndex]['s'],
			r= inputData[randomIndex]['r'],
		    t= inputData[randomIndex]['t'],
			
		    
		    s=parseInt(s);
		   
		   r=parseInt(r);
		   
		   t=parseInt(t);
		   
		    p=(100*s)/(r*t);
		   
			question = {};
			
			
	  question = {
			'type': 'single',
			'id': '0121',
			'question': 'A sum fetched a total simple interest of rs.'+s+'at the rate of '+r+'p.c.p.a. in '+t+'years what is the sum?',
			'options': {
				'A':p,
				'B':p-parseInt(Math.random()*10),
				'C':p-parseInt(Math.random()*10),
				'D':p+parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '01'
		}
		return question;	
}

function problem0122(){
	var inputData = [{
		'current_bill':35,
		'deducted': 150
		},
		{
		'current_bill':50,
		'deducted': 200
		},
		{
		'current_bill':60,
		'deducted': 180
		},
		{
		'current_bill':90,
		'deducted': 300
		}],
		randomIndex = getRandomNumber(inputData.length),
		current_bill= inputData[randomIndex]['current_bill'],
		deducted = inputData[randomIndex]['deducted'],
		bill,
		question = {};
	
	
	to_pay=deducted-current_bill;
	bill=(deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '0122',
		'question': 'If' + current_bill + '% of an current bill is deducted then rs' + deducted + 'is still to be paid .How much was the original bill',
		'options': {
			'A': bill,
			'B': bill + parseInt(Math.random()*10),
			'C': bill + parseInt(Math.random()*10),
			'D': bill - parseFloat(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '01'
	}
	
	return question;
}

function problem0122(){
	var inputData = [{
		'current_bill':35,
		'deducted': 150
		},
		{
		'current_bill':50,
		'deducted': 200
		},
		{
		'current_bill':60,
		'deducted': 180
		},
		{
		'current_bill':90,
		'deducted': 300
		}],
		randomIndex = getRandomNumber(inputData.length),
		current_bill= inputData[randomIndex]['current_bill'],
		deducted = inputData[randomIndex]['deducted'],
		bill,
		question = {};
	
	
	to_pay=deducted-current_bill;
	bill=(deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '0122',
		'question': 'If' + current_bill + '% of an current bill is deducted then rs' + deducted + 'is still to be paid .How much was the original bill',
		'options': {
			'A': bill,
			'B': bill + parseInt(Math.random()*10),
			'C': bill + parseInt(Math.random()*10),
			'D': bill - parseFloat(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '01'
	}
	
	return question;	
}

function problem0123(){
    var inputData = [{
    'over1': 10,
    'rr': 3.2,
    'over2': 40,
    'runs': 252
    },
    {
    'over1': 10,
    'rr': 3.2,
    'over2': 40,
    'runs': 262
    },
    {
    'over1': 10,
    'rr': 3.2,
    'over2': 40,
    'runs': 292
    },
    {
    'over1': 10,
    'rr': 3.2,
    'over2': 40,
    'runs': 282
    }],
    randomIndex = getRandomNumber(inputData.length),
    over1= inputData[randomIndex]['over1'],
    over2= inputData[randomIndex]['over2'],
    rr= inputData[randomIndex]['rr'],
    runs= inputData[randomIndex]['runs'],
    r,
    runrate,
    question = {};
    
    r=runs-(over1*rr);
    runrate=r/over2;

question = {
    'type': 'single',
    'id': '0123',
    'question': 'In the first ' + over1 + ' overs of a cricket game, the run rate was only ' + rr + '. What should be the run rate in the remaining ' + over2 + ' overs to reach the target of ' + runs + ' runs?',
    'options': {
        'A': runrate - parseInt(Math.random()*10),
        'B': runrate - parseInt(Math.random()*10),
        'C': runrate+ parseInt(Math.random()*10),
        'D': runrate
    },
    'answer': 'D',
    'author-id': '01'
}

return question;

}

function problem0124(){
    var inputData = [{
    'manspeed': 10,
    'bike': 1.5
    },
    {
    'manspeed': 15,
    'bike': 4.5
    },
    {
    'manspeed': 8,
    'bike': 3.5
    },
    {
    'manspeed':5,
    'bike': 2.5
    }],
    randomIndex = getRandomNumber(inputData.length),
    manspeed= inputData[randomIndex]['manspeed'],
    bike= inputData[randomIndex]['bike'],
    a,
    b,
    question = {};
    
    a=manspeed-bike;
    b=a-bike;

question = {
    'type': 'single',
    'id': '0124',
    'question': 'A man speed  is ' + manspeed + ' km/hr and the speed of the bike is ' + bike + ' km/hr. The mans speed against the bike is',
    'options': {
        'A': b - parseInt(Math.random()*10),
        'B': b - parseInt(Math.random()*10),
        'C': b + parseInt(Math.random()*10),
        'D': b
    },
    'answer': 'D',
    'author-id': '01'
}

return question;

}

function problem0125(){
	var inputData = [{
		'distance':16,
		'time1': 2,
		'time2': 4,
		},
		{
		'distance':18,
		'time1': 3,
		'time2': 4,
		},
		{
		'distance':20,
		'time1': 7,
		'time2': 5,
		},
		{
		'distance':14,
		'time1': 5,
		'time2': 7,
		},
		{
        'distance':15,
		'time1': 2,
		'time2': 4,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time1 = inputData[randomIndex]['time1'],
		time2 = inputData[randomIndex]['time2'],
		manspeed,
		question = {};

	distance=parseInt(distance);
	time1=parseInt(time1);
	time2=parseInt(time2);
	rate=(distance/time1*time2);

	question = {
		'type': 'single',
		'id': '0125',
		'question': 'The speed of a boat in still water in' +distance+ 'and the rate of current is' +time1+ 'The distance travelled downstream in' +time2+ 'is',
		'options': {
			 'A'	:1.2,
             'B': 1.8,
             'C' :2.4,
             'D': rate,
		},
		'answer': 'D',
		'author-id': '01'
	}

	return question;
}


function problem0126(){
	var inputData = [{
		'base':5,
		'height':15,
		},
		{
		'base':8,
		'height':15,
		},
		{
        'base':7,
		'height':10,
		},
		{
        'base':5,
		'height':12,
		},
		{
		'base':5,
		'height':10,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		base= inputData[randomIndex]['base'],
         height= inputData[randomIndex]['height'],
		area,
		question = {};

	base=parseInt(base);
	height=parseInt(height);
	area=(1/2*base*height),

	question = {
		'type': 'single',
		'id': '0126',
		'question': 'what is the area of a triangle with' +base+ 'and' +height+ 'meters',
		'options': {
			 'A':area,
             'B': 40,
             'C' :52,
             'D': 25,
		},
		'answer': 'a',
		'author-id': '01'
	}

	return question;
}

function problem0127(){
	var inputData = [{
		'typist':80,
		'pages': 1150,
		'hours': 4
		},
		{
		'typist':50,
		'pages': 400,
		'hours': 5
		},
		{
		'typist':70,
		'pages': 750,
		'hours': 2
		},
		{
		'typist':10,
		'pages': 600,
		'hours': 8
		}],
		randomIndex = getRandomNumber(inputData.length),
		typist= inputData[randomIndex]['typist'],
		pages = inputData[randomIndex]['pages'],
		hours = inputData[randomIndex]['hours'],
		count,
		total,
		question = {};
	
	
	count=pages/typist;
	total=count/hours;

	question = {
		'type': 'single',
		'id': '0127',
		'question': + typist + 'typists can type' + pages + 'pages in' + hours + 
					'hours.Find the average number of pages typed by each typist in an hour.',
		'options': {
			'A': total - parseInt(Math.random()*10),
			'B': total - parseInt(Math.random()*10),
			'C': total + parseInt(Math.random()*10),
			'D': total
		},
		'answer': 'D',
		'author-id': '01'
	}
	
	return question;
	
}


function problem0128(){
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
		'id': '0128',
		'question': 'Mohan gets a salary of '+ salaryA +', '+salaryB+ ', '+salaryC+', '+salaryD+' and '+salaryE +' for 5 months.How much salary he must have in the sixth month so that he gets an average of '+ average +'',
		'options': {
			'A': finalSalary,
			'B': finalSalary - parseInt(Math.random()*10),
			'C': finalSalary + parseInt(Math.random()*10),
			'D': finalSalary - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '01'
	}
	
	return question;
}

function problem0129(){
	var inputData = [{
		'perimeter': 56	
		},
		{
		'perimeter': 78,
		},
		{
		'perimeter': 29,	
		},
		{
		'perimeter': 41,		
		},
		{
		'perimeter': 49,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		perimeter= inputData[randomIndex]['perimeter'],
		side,
		question = {};

	perimeter=parseInt(perimeter);
	side=perimeter/4;

	question = {
		'type': 'single',
		'id': '0129',
		'question': 'If the perimeter of square is ' + perimeter+', find one of the side of square?',
		'options': {
			'A':side - parseInt(Math.random()*10),
			'B': side - parseInt(Math.random()*10),
			'C': side + parseInt(Math.random()*10),
			'D':  side
		},
		'answer': 'D',
		'author-id': '01'
	}
	
	return question;
	
}

function problem0130(){
	var inputData = [{
		'value': 7836		
		},
		{
		'value': 7465,
		},
		{
		'value': 2340,	
		},
		{
		'value': 5293,		
		},
		{
		'value': 3343,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		value= inputData[randomIndex]['value'],
		cubeRoot,
		question = {};

	value=parseInt(value);
	cubeRoot=Math.cbrt(value);

	question = {
		'type': 'single',
		'id': '0130',
		'question': 'Find the cube root value of '+ value+'? ',
		'options': {
			'A':cubeRoot - parseInt(Math.random()*10),
			'B': cubeRoot - parseInt(Math.random()*10),
			'C': cubeRoot + parseInt(Math.random()*10),
			'D':  cubeRoot
		},
		'answer': 'D',
		'author-id': '01'
	}
	
	return question;
	
}

function problem0131(){
    var inputData = [{
        'milk': 40,
        'litres':3
        },
        {
        'milk': 44,
            'litres':2
        },
        {
        'milk': 12,
            'litres':4
        },
        
        {
        'milk': 80,
        
        'litres':12
        }],
        randomIndex = getRandomNumber(inputData.length),
        milk= inputData[randomIndex]['sugar'],
        litres= inputData[randomIndex]['litres'],
        
        
        milk=parseInt(milk/100);
        litres=parseInt(litres);
        quality=milk*litres;
        addedonelitres=litres+1;
        percentage=(quality/addedonelitres)*100;
        question = {};
        
        
    question = {
        'type': 'single',
        'id': '0131',
        'question': 'To a milk solution of '+ litres+' containing '+milk+', one litre of water is added.the percentage of milk in the new solution is',
        'options': {
            'A': percentage-parseInt(Math.random()*10),
            'B': percentage-parseInt(Math.random()*10),
            'C': percentage,
            'D': percentage+parseInt(Math.random()*10)
        },
        'answer': 'c',
        'author-id': '01'
    }
    return question;

}

function problem0132(){
	var inputData = [{
		'Ajay':1000,
		'bijoy': 2200,
		'chandru': 6200
		},
		{
		'Ajay':3000,
		'bijoy': 5500,
		'chandru': 12000
		},
		{
		'Ajay':35000,
		'bijoy': 45000,
		'chandru': 80000
		},
		{
		'Ajay':60000,
		'bijoy': 80000,
		'chandru': 71000
		}],
		randomIndex = getRandomNumber(inputData.length),
		Ajay = inputData[randomIndex]['Ajay'],
		bijoy = inputData[randomIndex]['bijoy'],
		chandru = inputData[randomIndex]['chandru'],
		percentage,
		question = {};


	Ajay = parseInt(Ajay);
	bijoy = parseInt(bijoy);
	chandru = parseInt(chandru);
	election=Ajay+bijoy+chandru;
	percentage=(Ajay/election)*100;


	question = {
		'type': 'single',
		'id': '0132',
		'question':'Three candidates, Ajay, Bijoy & Chandu contested an election and received' 
					+ Ajay + ','+ bijoy + 'and' + chandru + 'votes respectively. What percent of the total votes did get?',
		'options': {
			'A': percentage - parseFloat(Math.random()*10),
			'B': percentage - parseInt(Math.random()*10),
			'C': percentage + parseInt(Math.random()*10),
			'D': percentage
		},
		'answer': 'D',
		'author-id': '01'
	}
	
	return question;
	
}

function problem0133(){
	var inputData = [{
		'group_boy':30,
		'boys_years': 60,
		'boys_leave': 19,
		'new_boy': 15.8
		},
		{
		'group_boy': 60,
		'boys_years': 40,
		'boys_leave': 12,
		'new_boy': 30.4
		},
		{
		'group_boy': 80,
		'boys_years': 23,
		'boys_leave': 12,
		'new_boy':20.7
		},
		{
		'group_boy':30,
		'boys_years': 36,
		'boys_leave': 29,
		'new_boy': 15.8
		}],
		randomIndex = getRandomNumber(inputData.length),
		group_boy = inputData[randomIndex]['group_boy'],
		boys_years = inputData[randomIndex]['boys_years'],
		boys_leave = inputData[randomIndex]['boys_leave'],
		new_boy = inputData[randomIndex]['new_boy'],
		age,
		group,
		question = {};
	
	group_boy = parseInt(group_boy);
	boys_years = parseInt(boys_years);
	boys_leave = parseInt(boys_leave);
	new_boy = parseFloat(new_boy);
	age=group_boy*boys_years;
	group=(new_boy*group_boy)-age+boys_leave;




	question = {
		'type': 'single',
		'id': '0133',
		'question': 'Average age of a group of' + group_boy + 'boys is' + boys_years + 'years. A boy of age' + boys_leave + 
					'leaves the group and a new boy joins the group. If the new average age of the group is' + new_boy + 
					'years, find the age of the new boy.',
		'options': {
			'A': group - parseFloat(Math.random()*10),
			'B': group - parseInt(Math.random()*10),
			'C': group,
			'D': group + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '01'
	}
	
	return question;
	
}

function problem0134(){
	var inputData = [{
		'village_increased':656000,
		'decade': 234000
		},
		{
		'village_increased':654000,
		'decade': 543000
		},
		{
		'village_increased':785000,
		'decade': 258000
		},
		{
		'village_increased':175000,
		'decade': 262500
		}],
		randomIndex = getRandomNumber(inputData.length),
		village_increased = inputData[randomIndex]['village_increased'],
		decade = inputData[randomIndex]['decade'],
		percentage_increase,
		Increase_percentage,
		required_average,
		question = {};
	
	village_increased = parseInt(village_increased);
	decade = parseInt(decade);
	percentage_increase=(village_increased-decade);
	Increase_percentage=(percentage_increase/village_increased)*100;
	required_average=(Increase_percentage/10);




	question = {
		'type': 'single',
		'id': '0134',
		'question': 'The population of a town increased from' + village_increased + 'to' + decade + 
					'in a decade. The average percent increased of population per year is:',
		'options': {
			'A': required_average - parseInt(Math.random()*10),
			'B': required_average - parseInt(Math.random()*10),
			'C': required_average + parseInt(Math.random()*10),
			'D': required_average
		},
		'answer': 'D',
		'author-id': '01'
	}
	
	return question;
	
}
function problem0135(){
	var inputData = [{
		'parallel_line':34,
		'same_direction': 67,
		'train_slower':33
		},
		{
		'parallel_line':65,
		'same_direction': 50,
		'train_slower':3
		},
		{
		'parallel_line':72,
		'same_direction': 40,
		'train_slower': 35
		},
		{
		'parallel_line':46,
		'same_direction': 36,
		'train_slower':36
		}],
		randomIndex = getRandomNumber(inputData.length),
		parallel_line = inputData[randomIndex]['parallel_line'],
		same_direction = inputData[randomIndex]['same_direction'],
		train_slower = inputData[randomIndex]['train_slower'],
		train,
		meter_sec,
		x,
		length,
		question = {};
	
	parallel_line = parseInt(parallel_line);
	same_direction = parseInt(same_direction);
	train_slower = parseInt(train_slower),
	train=parallel_line-same_direction;
	meter_sec=[train*(5/18)];
	x=meter_sec*train_slower;
	length=x/2;
	


	question = {
		'type': 'single',
		'id': '0135',
		'question': 'Two trains of equal lengths are running on parallel lines in the same direction at the rate of' + parallel_line + 'km/hr and' 
					+ same_direction + 'km/hr. The faster train passes the slower train in' + train_slower + 'seconds. What is the length of the each trains ?',
		'options': {
			'A': length - parseFloat(Math.random()*10),
			'B': length + parseFloat(Math.random()*10),
			'C': length,
			'D': length - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '01'
	}
	
	return question;
	
}

function problem0136(){
	var inputData = [{
		'buys':50,
		'sell': 35,
		'after_buying': 16,
		'after_selling':90
		},
		{
		'buys':80,
		'sell': 65,
		'after_buying': 12,
		'after_selling':30
		},
		{
		'buys':13,
		'sell': 40,
		'after_buying': 10,
		'after_selling':80
		},
		{
		'buys':15,
		'sell': 20,
		'after_buying': 30,
		'after_selling': 40
		}],
		randomIndex = getRandomNumber(inputData.length),
		buys = inputData[randomIndex]['buys'],
		sell = inputData[randomIndex]['sell'],
		after_buying = inputData[randomIndex]['after_buying'],
		after_selling = inputData[randomIndex]['after_selling'],
		cp,
		sp,
		profit,
		profit_percentage,
		question = {};
	


	cp=after_buying+buys;
	sp=after_selling+sell;
	profit=sp-cp;
	profit_percentage=(profit/cp)*100;




	question = {
		'type': 'single',
		'id': '0136',
		'question': 'A person buys a horse for' + buys + 'pounds. after one year, he sells it for' + sell + 
					'pounds. after one year, again he buys the same horse at' + after_buying + 
					'pounds and sells it for' + after_selling + 
					'pounds. what is the overall profit percent for that person over both the transactions?',
		'options': {
			'A': profit_percentage - parseInt(Math.random()*10),
			'B': profit_percentage - parseFloat(Math.random()*10),
			'C': profit_percentage,
			'D': profit_percentage + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '01'
	}
	
	return question;
	
}

function problem0137(){
	var inputData = [{
		'start':90,
		'mid':33.5,
		'end':55
		},
		{
		'start':83,
		'mid':6.9,
		'end':95
		},
		{
		'start':67,
		'mid':89.5,
		'end':65
		},	
		{
		'start':70,
		'mid':44.7,
		'end':95
		}],
		randomIndex = getRandomNumber(inputData.length),
		start= inputData[randomIndex]['start'],
		mid= inputData[randomIndex]['mid'],
		end=inputData[randomIndex]['end'],
		total,
		question = {};
		
	start=parseInt(start);
	mid=parseFloat(mid);
	end=parseInt(end);
	total=(start*mid)+end;
		
	question={
		'type':'single',
		'id':'0137',
		'question':'The average weight of the' + start + 'increased by ' + mid + 
					'kg when a new person comes in place of one of them weighting ' + end + ' of the new person.',
		'option':
		{
			'A':total,
			'B':total + parseInt(Math.random()*10),
			'C':total - parseFloat(Math.random()*10),			
			'D':total - parseInt(Math.random()*10),
		},
		'answer':'A',
		'author-id':'01'
		}
		return question;
}
function problem0138(){
	var inputData = [{
		'input1': 160,
		'input2': 100
		},
		{
		'input1': 220,
		'input2': 120
		},
		{
		'input1': 300,
		'input2': 230
		},
		{
		'input1': 430,
		'input2': 420
		},
		{
		'input1': 260,
		'input2': 180
		}],
		randomIndex = getRandomNumber(inputData.length),
		input1=inputData[randomIndex]['input1'],
		input2=inputData[randomIndex]['input2'],
	    precentage,
		
		
		input1=parseInt(input1),
		input2=parseInt(input2),
		precentage=(input1 - input2)/input1,
		precentage=precentage*100,
		
		question = {
		'type': 'single',
		'id': '0138',
		'question': 'A student multiplied a number by ' + input2 + 'instead of '+input1+ 'what is the percentage error in the calculation?',
		'options': {
			'A': precentage - parseFloat(Math.random()*10),
			'B': precentage - parseInt(Math.random()*10),
			'C': precentage + parseInt(Math.random()*10),
			'D': precentage,
		},
		'answer': 'A',
		'author-id': '01',
	}
	
	return question;
}
function problem0139(){
	var inputData = [{
		'costprice': 2054,
		'profit': 65
		},
		{
		'costprice': 6540,
		'profit': 23
		},
		{
		'costprice': 2320,
		'profit': 89
		},
		{
		'costprice': 8640,
		'profit': 67
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		profit = inputData[randomIndex]['profit'],
		p,
		sellingprice,
		question = {};
		
	costprice= inputData[randomIndex]['costprice'],
	profit = inputData[randomIndex]['profit'],
	p=(100+profit)/100;
	sellingprice=p*costprice;


	question = {
		'type': 'single',
		'id': '0139',
		'question': 'Rajesh bought a chai for RS ' + costprice + ' and sold it suresh ,if rajesh earned a profit of ' + profit + 
					'% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '01'
	}
	
	return question;
	
}
function problem0140(){
		var inputData = [{
			'train1':45,
			'train2':53,
			'distance':700,
			'time':42
			},
			{
			'train1':84,
			'train2':98,
			'distance':60,
			'time':35
			},
			{
			'train1':105,
			'train2':110,
			'distance':500,
			'time':23
			},
			
			{
			'train1':102,
			'train2':23,
			'distance':300,
			'time':58
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
		ratio=train1*speed;
					
			
	  question= {
			'type': 'single',
			'id': '0140',
			'question': 'The ratio between the speed of two train is ' + train1 + ':' + train2 +
			'.If the second train runs '+distance+' km in '+time+'hours, then the speed of the first train is?',
			'options': {
				'A':ratio-parseFloat(Math.random()*10),
				'B':ratio-parseInt(Math.random()*10),
				'C':ratio,
				'D':ratio+parseInt(Math.random()*10)
			},
			'answer': 'C',
			'author-id': '01'
		}
		return question;
	
}