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
		'currentspeed': 2.5
		},
		{
		'speed': 15,
		'currentspeed': 2.5
		},
		{
		'speed': 15,
		'currentspeed': 2.5
		},
		{
		'speed': 15,
		'currentspeed': 2.5
		},
		{
		'speed': 15,
		'currentspeed': 2.5
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
		'time2': 4
		},
		{
		'distance':16,
		'time1': 2,
		'time2': 4
		},
		{
		'distance':16,
		'time1': 2,
		'time2': 4
		},
		{
		'distance':16,
		'time1': 2,
		'time2': 4
		},
		{
        'distance':16,
		'time1': 2,
		'time2': 4
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
		'hectares': 1.5
		},
		{
		'area':5,
		'hectares': 1.5
		},
		{
        'area':5,
		'hectares':1.5
		},
		{
        'area':5,
		'hectares': 1.5
		},
		{
        'area':5,
		'hectares': 1.5
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
		'loss': 15
		},
		{
		'CP':1400,
		'loss': 15
		},
		{
        'CP':1400,
		'loss': 15
		},
		{
        'CP':1400,
		'loss': 15
		},
		{
        'CP':1400,
		'loss': 15
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
		'sellinprice': 375
		},
		{
		'costprice':20,
		'sellinprice': 375
		},
		{
        'costprice':20,
		'sellinprice': 33
		},
		{
        'costprice':20,
		'sellinprice': 33
		},
		{
        'costprice':20,
		'sellinprice': 375
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
		'height':10
		},
		{
		'base':5,
		'height':10
		},
		{
        'base':5,
		'height':10
		},
		{
        'base':5,
		'height':10
		},
		{
		'base':5,
		'height':10
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
		'meters':200
		},
		{
        'length':40,
		'breath':25,
		'height':20,
		'meters':200
		},
		{
        'length':40,
		'breath':25,
		'height':20,
		'meters':200
		},
		{
		 'length':40,
		'breath':25,
		'height':20,
		'meters':200
		},
		{
		'length':40,
		'breath':25,
		'height':20,
		'meters':200
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
		'sp':2500
		},
		{
        'cp':2000,
		'sp':2500
		},
		{
        'cp':2000,
		'sp':2500
		},
		{
		'cp':2000,
		'sp':2500
		},
		{
		'cp':2000,
		'sp':2500
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
		'breath':34
		},
		{
        'length':20,
		'breath':34
		},
		{
        'length':20,
		'breath':34
		},
		{
		'length':20,
		'breath':34
		},
		{
		'length':20,
		'breath':34
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
		'breath':5
		},
		{
        'perimeter':216,
		'breath':5
		},
		{
        'perimeter':216,
		'breath':5
		},
		{
		'perimeter':216,
		'breath':5
		},
		{
		'perimeter':216,
		'breath':5
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
		'loss':30
		},
		{
        'costprice':8000,
		'loss':5
		},
		{
        'costprice':6000,
		'loss':10
		},
		{
		'costprice':1000,
		'loss':5
		},
		{
		'costprice':4000,
		'loss':20
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
		'downstream':3.5
		},
		{
        'upstream':8,
		'downstream':2.4
		},
		{
        'upstream':60,
		'downstream':1.6
		},
		{
		'upstream':10,
		'downstream':1.5
		},
		{
		'upstream':9,
		'downstream':2.5
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
		'rate':6
		},
		{
        'principle ':6000,
		'interest':720,
		'rate':6
		},
		{
        'principle ':6000,
		'interest':720,
		'rate':6
		},
		{
		'principle ':6000,
		'interest':720,
		'rate':6
		},
		{
		'principle ':6000,
		'interest':720,
		'rate':6
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
		'height':3
		},
		{
        'length':10,
		'breath':4,
		'height':3
		},
		{
        'length':10,
		'breath':4,
		'height':3
		},
		{
		'length':10,
		'breath':4,
		'height':3
		},
		{
		'length':10,
		'breath':4,
		'height':3
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
		'brokage':2
		},
		{
        'facevalue':100,
		'discount':6,
		'brokage':2
		},
		{
        'facevalue':100,
		'discount':6,
		'brokage':2
		},
		{
		'facevalue':100,
		'discount':6,
		'brokage':2
		},
		{
		'facevalue':100,
		'discount':6,
		'brokage':2
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
function problem0821(){
	var inputData = [{
        'facevalue':100,
		'truediscount':6
		},
		{
        'facevalue':200,
		'truediscount':3
		},
		{
        'facevalue':100,
		'truediscount':6
		},
		{
		'facevalue':500,
		'truediscount':4
		},
		{
		'facevalue':100,
		'truediscount':6
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       facevalue= inputData[randomIndex]['facevalue'],
        truediscount= inputData[randomIndex]['truediscount'],
		costprice,
		simpleinterest,
		question = {};

    facevalue=parseInt(facevalue);
	truediscount=parseInt(truediscount);
	presentworth =facevalue-truediscount;
	simpleinterest=(truediscount/presentworth*100);
	
	
	question = {
		'type': 'single',
		'id': '0821',
		'question': 'The true discount on a bill of' +facevalue+ 'is' +truediscount+ 'What is the bankers discount', 
		'options': {
			'A':presentworth,
			'B':  presentworth - parseInt(Math.random()*10),
			'C': presentworth / parseInt(Math.random()*10),
			'D': presentworth * parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0821'
	}
	
	return question;
}
function problem0822(){
	var inputData = [{
		'upstream':25,
		'downstream': 55
		},
		{
		'upstream':76,
		'downstream': 89
		},
		{
		'upstream':90,
		'downstream': 50
		},
		{
		'upstream':35,
		'downstream': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		upstream= inputData[randomIndex]['upstream'],
		downstream = inputData[randomIndex]['downstream'],
		water,
		question = {};
		
	upstream= parseInt(upstream);
	downstream = parseInt(downstream);
	water=(upstream+downstream)/2;

	question = {
		'type': 'single',
		'id': '0822',
		'question': 'A man can row upstream at' + upstream + ' kmph and downstream at' + downstream + 'kmph, and then find the speed of the man in still water?' ,
		'options': {
			'A': water,
			'B': water + parseInt(Math.random()*10),
			'C': water + parseInt(Math.random()*10),
			'D': water - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0822'
	}
	
	return question;
	
}
function problem0823(){
	var inputData = [{
		'children':5,
		'age': 60,
		'years':4
		},
		{
		'children':3,
		'age': 49,
		'years':3
		},
		{
		'children':5,
		'age': 20,
		'years':2
		},
		{
		'children':2,
		'age': 60,
		'years':8
		}],
		randomIndex = getRandomNumber(inputData.length),
		children = inputData[randomIndex]['children'],
		age = inputData[randomIndex]['age'],
		years = inputData[randomIndex]['years'],
		interval,
		x1,
		young,
		profit_percentage,
		question = {};
		
	children = parseInt(children);
	age = parseInt(age);
	years = parseInt(years);
	interval=(age*age*age)+age;
	x1=years-interval;
	young=x1/children;

	question = {
		'type': 'single',
		'id': '0823',
		'question':'The sum of ages of'+ children + 'children born at the intervals of' + years + 'years each is'+ age + 'years. What is the age of the youngest child?',
		'options': {
			'A': young - parseInt(Math.random()*10),
			'B':young - parseInt(Math.random()*10),
			'C': young + parseInt(Math.random()*10),
			'D': young
		},
		'answer': 'D',
		'author-id': '0823'
	}
	
	return question;
	
}
function problem0824(){
	var inputData = [{
		'downstream_distance':20,
		'downstream_time': 5,
		'upstream_time': 8
		},
		{
		'downstream_distance': 40,
		'downstream_time': 30,
		'upstream_time': 5
		},
		{
		'downstream_distance': 50,
		'downstream_time': 40,
		'upstream_time': 2
		},
		{
		'downstream_distance':16,
		'downstream_time': 2,
		'upstream_time': 4
		}],
		randomIndex = getRandomNumber(inputData.length),
		downstream_distance = inputData[randomIndex]['downstream_distance'],
		downstream_time = inputData[randomIndex]['downstream_time'],
		upstream_time = inputData[randomIndex]['upstream_time'],
		speed,
		x,
		stream_speed,
		question = {};
		
	downstream_distance=parseInt(downstream_distance);
	downstream_time=parseInt(downstream_time);
	upstream_time=parseInt(upstream_time);
	speed=downstream_distance/downstream_time;
	x=downstream_distance/upstream_time;
	stream_speed=1/2*(speed+x);

	question = {
		'type': 'single',
		'id': '0824',
		'question': 'A boat running downstream covers a distance of' + downstream_distance + 'km in' + downstream_time + 'hours while for covering the same distance upstream, it takes'
					+ upstream_time + 'hours. What is the speed of the boat in still water?',
		'options': {
			'A': stream_speed + parseInt(Math.random()*10),
			'B': stream_speed - parseFloat(Math.random()*10),
			'C': stream_speed,
			'D': stream_speed - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0824'
	}
	
	return question;
	
}
function problem0825(){
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
		'id': '0825',
		'question': 'The diagonal of a square field is '+ diagonal +'m,then area of the field is',
		'options': {
			'A': areaSquare - parseInt(Math.random()*10),
			'B': areaSquare - parseInt(Math.random()*10),
			'C': areaSquare,
			'D': areaSquare + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0825'
	}
	
	return question;
	
}
function problem0826(){
	var inputData = [{
		'trueinput': 60,
		'falseinput': 10
		},
		{
		'trueinput': 20,
		'falseinput': 20
		},
		{
		'trueinput': 30,
		'falseinput': 20
		},
		{
		'trueinput': 40,
		'falseinput': 40
		},
		{
		'trueinput': 20,
		'falseinput': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		trueinput=inputData[randomIndex]['trueinput'],
		falseinput=inputData[randomIndex]['falseinput'],
	    errorpercentage,
		trueinput=parseInt(trueinput),
		falseinput=parseInt(falseinput),
		errorpercentage=(trueinput - falseinput)/trueinput,
		errorpercentage=errorpercentage*100,
		
		question = {
		'type': 'single',
		'id': '0826',
		'question': 'A student multiplied a number by ' + falseinput + 'instead of '+trueinput+  'what is the percentage error in the calculation?',
		'options': {
			'A': errorpercentage + parseInt(Math.random()*10),
			'B': errorpercentage - parseInt(Math.random()*10),
			'C': errorpercentage,
			'D': errorpercentage - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0826'
	}
	
	return question;
}
function problem0827(){
	var inputData = [{
		'time':1,
		'speed':30
		},
		{
		'time':6,
		'speed':45
		},
		{
		'time':2,
		'speed': 54
		},
		{
		'time':5,
		'speed': 76
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
		'id': '0827',
		'question': 'A cyclist moving at a speed of '+ speed  +' a crosses bridge in  '+ time +' minitues.what is the length of the bridge?',
		'options': {
			'A':  distance+parseInt(Math.random()*10),
			'B':  distance-parseInt(Math.random()*10),
			'C':  distance,
			'D':  distance-parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0827'
	}
	
	return question;
	
}
function problem0828(){
	var inputData = [{
		'rate': 36
        },
		{
		'rate':20
		},
		{
		'rate':50
		},
		{
		'rate': 80
		}],
		randomIndex = getRandomNumber(inputData.length),
		rate= inputData[randomIndex]['rate'],
		
		rate=parseInt(rate);
		percentage=[rate/(100-rate)*100];
		question = {};
	question = {
		'type': 'single',
		'id': '0828',
		'question': 'If A is salary is'+rate+'less than B is salary by how much percent is B is salary more than A is?',
		'options': {
			'A': percentage,
			'B': percentage- parseInt(Math.random()*10),
			'C': percentage+ parseInt(Math.random()*10),
			'D': percentage/ parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0828'
	}
	
	return question;
}
function problem0829(){
		var inputData = [{
			'sugar': 40,
			'litres':3
			},
			{
			'sugar': 44,
				'litres':2
			},
			{
			'sugar': 12,
				'litres':4
			},
			
			{
			'sugar': 80,
			
				'litres':12
			}],
			randomIndex = getRandomNumber(inputData.length),
			sugar= inputData[randomIndex]['sugar'],
			litres= inputData[randomIndex]['litres'],
			
			
		    sugar=parseInt(sugar/100);
			litres=parseInt(litres);
			quality=sugar*litres;
		    addedonelitres=litres+1;
		    percentage=(quality/addedonelitres)*100;
			question6 = {};
			
			
	  question6= {
			'type': 'single',
			'id': '0829',
			'question': 'To a sugar solution of '+ litres+' containing '+sugar+', one litre of water is added.the percentage of sugar in the new solution is',
			'options': {
				'A': percentage-parseInt(Math.random()*10),
				'B': percentage-parseInt(Math.random()*10),
				'C': percentage,
				'D': percentage+parseInt(Math.random()*10)
			},
			'answer': 'c',
			'author-id': '0829'
		}
		return question;
	
}
	
function problem0830(){
		var inputData = [{
			'train1':7,
			'train2':8,
			'distance':400,
			'time':4
			},
			{
			'train1':8,
			'train2':9,
			'distance':600,
				'time':3
			},
			{
			'train1':10,
			'train2':11,
			'distance':500,
				'time':2
			},
			
			{
			'train1':12,
			'train2':13,
			'distance':300,
		    'time':5
			}],
			randomIndex = getRandomNumber(inputData.length),
			train1= inputData[randomIndex]['train1'],
			train2= inputData[randomIndex]['train2'],
		    distance= inputData[randomIndex]['distance'],
			time= inputData[randomIndex]['time'],
			
			 train1=parseInt(train1);
			 train2=parseInt(train2);
			 distance=parseInt(distance);
			 time=parseInt( time);
			 speed=(distance/time)/train2;
			 firsttrain=train1*speed;
			
			question= {};
			
			
	  question= {
			'type': 'single',
			'id': '0830',
			'question': 'The ratio between the speed of two train is '+train1+':'+train2+'.If the second train runs '+distance+' km in '+time+'hours, then the speed of the first train is?',
			'options': {
				'A':firsttrain-parseInt(Math.random()*10),
				'B':firsttrain+parseInt(Math.random()*10),
				'C':firsttrain-parseInt(Math.random()*10),
				'D':firsttrain
			},
			'answer': 'D',
			'author-id': '0830'
		}
		return question;
	
}
function problem0831(){
	var inputData = [{
		'a': 8,
		'weight1': 2.5,
		'weight2': 65
		},
		{
	   'a': 8,
		'weight1': 2.5,
		'weight2': 69
		},
		{
	    'a': 8,
		'weight1': 2.5,
		'weight2': 68
		},
		{
		'a': 8,
		'weight1': 2.5,
		'weight2': 75
		}],
		randomIndex = getRandomNumber(inputData.length),
		a= inputData[randomIndex]['a'],
		weight1= inputData[randomIndex]['weight1'],
		weight2= inputData[randomIndex]['weight2'],
		x,
		weight,
		question = {};
		
	    x=a*weight1;
		weight=x+weight2

	question = {
		'type': 'single',
		'id': '0831',
		'question': 'The average weight of ' + a + 'persons increases by ' + weight1 + ' kg when a new person comes in place of one of them weighing ' + weight2 + ' kg. What might be the weight of the new person?',
		'options': {
			'A':weight- parseInt(Math.random()*10),
			'B': weight,
			'C': weight+ parseInt(Math.random()*10),
			'D': weight- parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0831'
	}
	
	return question;
	
}

function problem0832(){
	var inputData = [{
		'principle': 23000,
		'interest': 9,
		'years': 4
		},
		{
	    'principle': 3500,
		'interest': 6,
		'years': 9
		},
		{
	    'principle': 46000,
		'interest': 6,
		'years': 6
		},
		{
		'principle': 80000,
		'interest': 5,
		'years': 7
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
		'id': '0832',
		'question': 'If Suresh borrows Rs. ' + principle + ' from Mahesh at rate of interest ' + interest + ' S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': S,
			'B': S - parseInt(Math.random()*10),
			'C': S+ parseInt(Math.random()*10),
			'D': S - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0832'
	}
	
	return question;
	
}
function problem0833(){
	var inputData = [{
		'length': 10,
		'breadth': 24,
		'height': 35,
		'sop': 270
		},
		{
		'length': 50,
		'breadth': 25,
		'height': 25,
		'sop': 250
		},
		{
		'length': 80,
		'breadth': 25,
		'height': 29,
		'sop': 249
		},
		{
		'length': 30,
		'breadth': 24,
		'height': 18,
		'sop': 276
		}],
		randomIndex = getRandomNumber(inputData.length),
		length= inputData[randomIndex]['length'],
		breadth= inputData[randomIndex]['breadth'],
		height = inputData[randomIndex]['height'],
		sop = inputData[randomIndex]['sop'],
		x,
		y,
		question = {};
		x=(length)*(breadth)*(height);
        y=x/sop;

	question = {
		'type': 'single',
		'id': '0833',
		'question': 'The dimensions of a hall are ' + length + 'm, ' + breadth + 'm and ' + height + 'm. If each person requires ' + sop + ' cubic meters, then the number of persons who can be accommodated in the hall are ?',
		'options': {
			'A': y / parseInt(Math.random()*10),
			'B': y - parseInt(Math.random()*10),
			'C': y + parseInt(Math.random()*10),
			'D': y,
		},
		'answer': 'D',
		'author-id': '0833'
	}
	
	return question;
	
}
function problem0834(){
	var inputData = [{
		'initial': 4600,
		'ending': 59000,
		'years': 4
		},
		{
		'initial': 18400,
		'ending': 45500,
			'years': 8
		},
		{
		'initial': 96600,
		'ending': 69000,
			'years': 3
		},
		{
		'initial': 27800,
		'ending': 6600,
		'years': 5
		},
		{
		'initial': 1100,
		'ending': 4000,
			'years': 4
		}],
		randomIndex = getRandomNumber(inputData.length),
		initial= inputData[randomIndex]['initial'],
		ending = inputData[randomIndex]['ending'],
		years = inputData[randomIndex]['years'],
		average,
		question = {};
	
	initial=parseInt(initial);
	ending=parseInt(ending);
	years=parseInt(years);
	increased=ending-initial;
	increasedPercentage=(increased/initial)*100;
	average=(increasedPercentage/years);

	question = {
		'type': 'single',
		'id': '0834',
		'question': ' The population of a town increased from '+ initial +' to '+ ending+' in a '+ years +'. The average percent increase of population per year is:',
		'options': {
			'A': average / parseInt(Math.random()*10),
			'B': average - parseInt(Math.random()*10),
			'C': average + parseInt(Math.random()*10),
			'D': average,
		},
		'answer': 'D',
		'author-id': '0834'
	}
	
	return question;
}
function problem0835(){
	var inputData = [{
		'speed':30,
		'time': 10
		},
		{
		'speed':42,
		'time':24
		},
		{
		'speed':44,
		'time':64
		},
		{
		'speed':55,
		'time': 82
		},
		{
		'speed':48,
		'time': 91
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed = inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
    	distance,
		question = {};
		
	    speed = parseInt(speed*5/18);
		time = parseInt(time*60);
		distance = speed*time;
		
	question = {
		'type': 'single',
		'id': '0835',
		'question': 'A rider moving at a speed of' + speed + ' m/s and crosses a street in  '+ time +' mins .what is the ' + distance + 'distance of the street?',
		'options': {
			'A':  distance-parseInt(Math.random()*10),
			'B':  distance-parseInt(Math.random()*10),
			'C':  distance+parseInt(Math.random()*10),
			'D':  distance
		},
		'answer': 'B',
		'author-id': '0835'
	}
	
	return question;
}
function problem0836(){
		var inputData = [{
		'manspeed': 12,
		'currentspeed': 1
		},
		{
		'manspeed': 15,
		'currentspeed': 4
		},
		{
		'manspeed': 16,
		'currentspeed': 3
		},
		{
		'manspeed': 17,
		'currentspeed': 2
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
		'id': '0836',
		'question': 'A man speed with the current is ' + manspeed + ' km/hr and the speed of the current is ' + currentspeed + ' km/hr. The mans speed against the current is',
		'options': {
			'A': b,
			'B': b - parseInt(Math.random()*10),
			'C': b + parseInt(Math.random()*10),
			'D':  b / parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0836'
	}
	
	return question;
	
}


function problem0837(){
	var inputData = [{
		's1': 700,
		's2': 94,
		'y1': 3,
		'y2': 4
		},
		{
		's1': 615,
		's2': 254,
		'y1': 8,
		'y2': 5
		},
		{
		's1': 215,
		's2': 159,
		'y1': 5,
		'y2': 9
		},
		{
		's1': 315,
		's2': 53,
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
		'id': '0837',
		'question': 'A sum of money at simple interest amounts to Rs. ' + s1 + ' in ' + y1 + '  years and to Rs.' + s2 + ' in ' + y2 + ' years. The sum is:',
		'options': {
			'A': principal + parseInt(Math.random()*10),
			'B': principal - parseInt(Math.random()*10),
			'C': principal,
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0837'
	}
	
	return question;
	
}
function problem0838(){
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
		'id': '0838',
		'question': 'Suresh bought a cell phone from a shop. If he sells it at '+ sellingPrice +' to Mahesh and earns a profit of '+ gainPercentage +', find the price at which Suresh bought the cell phone.?',
		'options': {
			'A': costPrice,
			'B': costPrice - parseInt(Math.random()*10),
			'C': costPrice + parseInt(Math.random()*10),
			'D': costPrice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '0838'
	}
	
	return question;
	
}
function problem0839(){
	var inputData = [{
		'distance1': 160,
		'time1': 6,
		'time2': 3
		},
		{
		'distance1': 134,
		'time1': 14,
		'time2': 2
		},
		{
		'distance1': 527,
		'time1': 2,
		'time2': 9
		},
		{
		'distance1': 1900,
		'time1': 5,
		'time2': 15
		},
		{
		'distance1': 490,
		'time1': 3,
		'time2': 7
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance1=inputData[randomIndex]['distance1'],
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
		'id': '0839',
		'question': ' A boat running downstream covers a distance of '+ distance1 +' km in '+ time1 +' hours while for covering the same distance upstream, it takes '+ time2 +' hours. What is the speed of the boat in still water?',
		'options': {
			'A': speedStream + parseInt(Math.random()*10),
			'B': speedStream,
			'C': speedStream - parseInt(Math.random()*10),
			'D': speedStream - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '0839'
	}
	
	return question;
}
function problem0840(){
var inputData = [{
		'sum': 220,
		'number':40
		},
		{
		'sum': 230,
		'number':40
		},
		{
		'sum': 240,
		'number':40
		},
		{
		'sum': 250,
		'number':40
		}],
	randomIndex = getRandomNumber(inputData.length),
		sum= inputData[randomIndex]['sum'],
		number= inputData[randomIndex]['number'],
		average ,
		question = {};
		
    sum=parseInt(sum);
    number=parseInt(number);
	average=sum/number;
	question = {
		'type': 'single',
		'id': '0840',
		'question': 'If the sum is '+ sum +' and average is '+ number +', find the number of quantities.',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average - parseInt(Math.random()*10),
			'C': average,
			'D': average - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '0840'
	}
	
	return question;

}
