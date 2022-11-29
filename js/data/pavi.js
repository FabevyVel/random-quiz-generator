function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}

function problem081(){
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
		'id': '081',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed * parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '081'
	}
	
	return question;
	
}
function problem082(){
	var inputData = [{
		'speed': 60,
		'time': 9
		},
		{
		'speed': 60,
		'time': 9
		},
		{
		'speed': 60,
		'time': 9
		},
		{
		'speed': 60,
		'time': 9
		},
		{
		'speed': 60,
		'time': 9
		}],
	 randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
		trainlength,
		question = {};

	speed=parseInt(speed*60);
	time=parseInt(time);
	trainlength=(speed/time);

	question = {
		'type': 'single',
		'id': '082',
		'question': 'A train running at the '+speed+ 'km/hr crosses a pole in '+time+ 'sec What is the length of the train?',
		'options': {
			 'A':trainlength - parseInt(Math.random()*10),
			'B': trainlength - parseInt(Math.random()*10),
			'C': trainlength+ parseInt(Math.random()*10),
			'D': trainlength
		},
		'answer': 'D',
		'author-id': '082'
	}
	
	return question;
}
function problem083(){
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
		'id': '083',
		'question': 'A sum of money at simple interest '+amount+ 'in '+time+ 'years and '+amount+ 'in '+time+ 'years The sum is',
		'options': {
			'A':simpleinterest - parseInt(Math.random()*10),
			'B': simpleinterest * parseInt(Math.random()*10),
			'C':simpleinterest,
			'D': simpleinterest + parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '083'
	}
	
	return question;
}

function problem084(){
	var inputData = [{
		'sum': 450,
		'rate': 81,
		'time': 3
		},
		{
		'sum': 450,
		'rate': 81,
		'time': 3
		},
		{
		'sum': 854,
		'rate': 85,
		'time': 4
		},
		{
		'sum': 450,
		'rate': 85,
		'time': 3
		},
		{
		'sum': 854,
		'rate': 85,
		'time': 4
		}],
	 randomIndex = getRandomNumber(inputData.length),
		sum= inputData[randomIndex]['sum'],
		time = inputData[randomIndex]['time'],
		rate = inputData[randomIndex]['rate'],
		simpleinterest,
		question = {};

	sum=parseInt(sum);
	time=parseInt(time);
		rate=parseInt(rate);
	simpleinterest=(sum*time*rate/100);

	question = {
		'type': 'single',
		'id': '084',
		'question': 'How much time will it take for an' +sum+ 'to yield' +time+ 'as interest at' +rate+ 'per annum of simple interest',
		'options': {
			 'A':simpleinterest - parseInt(Math.random()*10),
			'B': simpleinterest,
			'C':simpleinterest* parseInt(Math.random()*10),
			'D': simpleinterest + parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '084'
	}
	
	return question;
}
function problem085(){
	var inputData = [{
		'principle': 30000,
		'amount': 7,
		'compound': 4347
		},
		{
		'principle': 30000,
		'amount': 7,
		'compound': 4347
		},
		{
		'principle': 30000,
		'amount': 8,
		'compound': 4347
		},
		{
		'principle': 45000,
		'amount': 8,
		'compound': 4347
		},
		{
		'principle': 40000,
		'amount': 8,
		'compound': 4347
		}],
	 randomIndex = getRandomNumber(inputData.length),
		principle= inputData[randomIndex]['principle'],
		amount = inputData[randomIndex]['amount'],
		compound = inputData[randomIndex]['compound'],
		simpleinterest,
		question = {};

	principle=parseInt(principle);
	amount=parseInt(amount);
     compound=parseInt(compound);
	simpleinterest=(principle*compound*amount/100);

	question = {
		'type': 'single',
		'id': '085',
		'question': 'The compound' +principle+ 'at' +amount+  'per annum is' +compound+ 'The period in years is',
		'options': {
			 'A':simpleinterest,
			'B': simpleinterest * parseInt(Math.random()*10),
			'C':simpleinterest - parseInt(Math.random()*10),
			'D': simpleinterest + parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '085'
	}
	
	return question;
}
function problem086(){
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
		'id': '086',
		'question': 'A man speed with the current is' +speed+ 'and the speed of the current is current' +currentspeed+ 'The man speed against the current is',
		'options': {
			'A':	manspeed * parseInt(Math.random()*10),
			'B': 	manspeed * parseInt(Math.random()*10),
			'C':	manspeed,
			'D': 	manspeed + parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '086'
	}
	
	return question;
}
function problem087(){
	var inputData = [{
		'distance':16,
		'time1': 2,
		'time2': 4,
		},
		{
		'distance':16,
		'time1': 2,
		'time2': 4,
		},
		{
		'distance':16,
		'time1': 2,
		'time2': 4,
		},
		{
		'distance':16,
		'time1': 2,
		'time2': 4,
		},
		{
        'distance':16,
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
		'id': '087',
		'question': 'The speed of a boat in still water in' +distance+ 'and the rate of current is' +time1+ 'The distance travelled downstream in' +time2+ 'is',
		'options': {
			'A':	manspeed * parseInt(Math.random()*10),
			'B': 	manspeed * parseInt(Math.random()*10),
			'C':	manspeed + parseInt(Math.random()*10),
			'D': 	manspeed
		},
		'answer': 'D',
		'author-id': '087'
	}
	
	return question;
}
function problem088(){
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
		'id': '088',
		'question': 'In a shower' +area+ 'of rain falls The volume of water that falls on' +hectares+ 'of ground is',
		'options': {
			'A':	volume * parseInt(Math.random()*10),
			'B':    volume,
			'C':	volume + parseInt(Math.random()*10),
			'D': volume- parseInt(Math.random()*10)
			
		},
		'answer': 'B',
		'author-id': '088'
	}
	
	return question;
}
function problem089(){
	var inputData = [{
		'CP':1400,
		'loss': 15,
		},
		{
		'CP':1400,
		'loss': 15,
		},
		{
        'CP':1400,
		'loss': 15,
		},
		{
        'CP':1400,
		'loss': 15,
		},
		{
        'CP':1400,
		'loss': 15,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		CP= inputData[randomIndex]['CP'],
		loss = inputData[randomIndex]['loss'],
		sellingprice,
		question = {};

	CP=parseInt(CP);
	loss=parseInt(loss);
	sellingprice=(loss-(CP/100)),

	question = {
		'type': 'single',
		'id': '089',
		'question': 'A man buys a cycle for' +CP+ 'and sells it at a' +loss+ 'What is the selling price of the cycle',
		'options': {
            'A': sellingprice / parseInt(Math.random()*10),
			'B': sellingprice,
			'C':  sellingprice - parseInt(Math.random()*10),
			'D':sellingprice * parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '089'
	}
	
	return question;
}
function problem0810(){
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
		'id': '0810',
		'question': 'Sam purchased' +costprice+ 'of toys at the rate of' +sellingprice+ 'per dozen. He sold each one of them at the rate What was his percentage profit',
		'options': {
			'A': profit  / parseInt(Math.random()*10),
			'B':  profit* parseInt(Math.random()*10),
			'C':profit,
			'D':profit- parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0810'
	}
	
	return question;
}
function problem0811(){
	var inputData = [{
		'base':5,
		'height':10,
		},
		{
		'base':5,
		'height':10,
		},
		{
        'base':5,
		'height':10,
		},
		{
        'base':5,
		'height':10,
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
		'id': '0811',
		'question': 'what is the area of a triangle with' +base+ 'and' +height+ 'meters',
		'options': {
			 'A': area * parseInt(Math.random()*10),
			'B': area - parseInt(Math.random()*10),
			'C': area + parseInt(Math.random()*10),
			'D': area
		},
		'answer': 'D',
		'author-id': '0811'
	}
	
	return question;
}

function problem0812(){
	var inputData = [{
		'length':40,
		'breath':25,
		'height':20,
		'meters':200,
		},
		{
        'length':40,
		'breath':25,
		'height':20,
		'meters':200,
		},
		{
        'length':40,
		'breath':25,
		'height':20,
		'meters':200,
		},
		{
		 'length':40,
		'breath':25,
		'height':20,
		'meters':200,
		},
		{
		'length':40,
		'breath':25,
		'height':20,
		'meters':200,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		length= inputData[randomIndex]['length'],
         breath= inputData[randomIndex]['breath'],
         height= inputData[randomIndex]['height'],
         meters= inputData[randomIndex]['meters'],
		volume,
		question = {};

	length=parseInt(length);
	breath=parseInt(breath);
	height=parseInt(height);
	meters=parseInt(meters);
	volume=(length*breath*height),
	(volume/meters),

	question = {
		'type': 'single',
		'id': '0812',
		'question': 'the dimensions of a hall are' +length+ " " +breath+ " " +height+ 'if each person requires' +meters+  'cubic meters find the number of person who can be accomodated in the hall', 
		'options': {
             'A': volume  / parseInt(Math.random()*10),
			'B':  volume* parseInt(Math.random()*10),
			'C':volume- parseInt(Math.random()*10),
			'D':volume
		},
		'answer': 'D',
		'author-id': '0812'
	}
	
	return question;
}

function problem0813(){
	var inputData = [{
		'cp':2000,
		'sp':2500,
		},
		{
        'cp':2000,
		'sp':2500,
		},
		{
        'cp':2000,
		'sp':2500,
		},
		{
		'cp':2000,
		'sp':2500,
		},
		{
		'cp':2000,
		'sp':2500,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       cp= inputData[randomIndex]['cp'],
         sp= inputData[randomIndex]['sp'],

		profit,
		question = {};

	cp=parseInt(cp);
	sp=parseInt(sp);
	gain=(cp-sp),
	profit=(profit/cp*100),

	question = {
		'type': 'single',
		'id': '0813',
		'question': 'A shopkeeper sold an article for' +sp+ 'of the cost price of the article is is' +sp+ 'find the profit', 
		'options': {
			'A': profit  / parseInt(Math.random()*10),
			'B':  profit* parseInt(Math.random()*10),
			'C':profit- parseInt(Math.random()*10),
			'D':profit
		},
		'answer': 'D',
		'author-id': '0813'
	}
	
	return question;
}
function problem0814(){
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
		'id': '0814',
		'question': 'rectangular field to be fenced on' +length+ 'sides leaving side of' +
		breath+ 'uncovered if the area of the field is' +area+ 'how many feet of fencing will be required', 
		'options': {
			'A': fencing_length * parseInt(Math.random()*10),
			'B': fencing_length - parseInt(Math.random()*10),
			'C': fencing_length + parseInt(Math.random()*10),
			'D': fencing_length
		},
		'answer': 'D',
		'author-id': '0814'
	}
	
	return question;
}
function problem0815(){
	var inputData = [{
        'perimeter':216,
		'breath':5,
		},
		{
        'perimeter':216,
		'breath':5,
		},
		{
        'perimeter':216,
		'breath':5,
		},
		{
		'perimeter':216,
		'breath':5,
		},
		{
		'perimeter':216,
		'breath':5,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       perimeter= inputData[randomIndex]['perimeter'],
         breath= inputData[randomIndex]['breath'],
		area,
		question = {};

	perimeter=parseInt(perimeter);
	breath=parseInt(breath);
	length*breath,
	area=(length+breath/breath),

	question = {
		'type': 'single',
		'id': '0815',
		'question': 'The ratio between the' +perimeter+ 'and the' +breath+ 'of a is If the area of the rectangle is what is the length of the rectangle', 
		'options': {
			'A': area * parseInt(Math.random()*10),
			'B': area - parseInt(Math.random()*10),
			'C': area + parseInt(Math.random()*10),
			'D': area
		},
		'answer': 'D',
		'author-id': '0815'
	}
	
	return question;
}
function problem0816(){
	var inputData = [{
        'costprice':2000,
		'loss':30,
		},
		{
        'costprice':8000,
		'loss':5,
		},
		{
        'costprice':6000,
		'loss':10,
		},
		{
		'costprice':1000,
		'loss':5,
		},
		{
		'costprice':4000,
		'loss':20,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       costprice= inputData[randomIndex]['costprice'],
        loss= inputData[randomIndex]['loss'],
		p,
		sellingprice,
		question = {};

	costprice=parseInt(costprice);
	loss=parseInt(loss);
	p=(100-loss)/100;
	sellingprice=p*costprice,

	question = {
		'type': 'single',
		'id': '0816',
		'question': 'A man purchase tv for rs' +costprice+ 'and sells it' +loss+ 'what is the selling price of tv', 
		'options': {
			'A': sellingprice / parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice,
			'D':sellingprice * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0816'
	}
	
	return question;
}
function problem0817(){
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
		'id': '0817',
		'question': 'Speed of a boat in standing water is' +upstream+ 'and the speed of the stream is' +downstream+ 'A man rows to a place at a' +distance+ 'and comes back to the starting point. The total time taken by him is', 
		'options': {
			'A': time / parseInt(Math.random()*10),
			'B':  time- parseInt(Math.random()*10),
			'C': time,
			'D':time * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0817'
	}
	
	return question;
}
function problem0818(){
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
		'id': '0818',
		'question': 'In what time' +principle+ 'will give interest of' +interest+  'at the' +rate+  'of simple interest' , 
		'options': {
			'A': time / parseInt(Math.random()*10),
			'B':  time- parseInt(Math.random()*10),
			'C': time,
			'D':time * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0818'
	}
	
	return question;
}
function problem0819(){
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
		'id': '0819',
		'question': 'the' +length+  +breath+ 'and'  +height+ 'of a brick are also find the surface area of the brick' , 
		'options': {
			'A': area / parseInt(Math.random()*10),
			'B':  area,
			'C':area- parseInt(Math.random()*10),
			'D':area * parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0819'
	}
	
	return question;
}
function problem0820(){
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
		'id': '0820',
		'question': 'what is the cost price of a' +facevalue+ 'stock at'  +discount+ 'when the' +brokage+ 'find the costprice' , 
		'options': {
			'A': costprice,
			'B':  costprice - parseInt(Math.random()*10),
			'C': costprice / parseInt(Math.random()*10),
			'D': costprice * parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0820'
	}
	
	return question;
}