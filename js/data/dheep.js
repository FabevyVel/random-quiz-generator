function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}
function problem031(){
	var inputData = [{
		'upstream': 5,
		'boat': 1
		},
		{
		'upstream': 5,
		'boat': 3
		},
		{
		'upstream': 5,
		'boat': 1
		},
		{
		'upstream': 7,
		'boat': 4
		}],
		randomIndex = getRandomNumber(inputData.length),
		upstream= inputData[randomIndex]['upstream'],
		boat = inputData[randomIndex]['boat'],
		speed,
		question = {};
		
	speed=upstream-boat;

	question = {
		'type': 'single',
		'id': '031',
		'question': 'The speed of boat in still water is ' + upstream + 'km/hr.if the speed of the boat against the stream is ' + boat + 'km.what is the speed of the stream',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}

function problem032(){
	var inputData = [{
		'distance': 600,
		'time': 5
		},
		{
		'distance': 700,
		'time': 9
		},
		{
		'distance': 150,
		'time': 6
		},
		{
		'distance': 120,
		'time': 9
		},
		{
		'distance': 150,
		'time': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};
		
	time=time*60;
	speed=((distance/time)*(18/5));

	question = {
		'type': 'single',
		'id': '032',
		'question': 'a person crosses a ' + distance + 'm long street in ' + time + ' minutes ,what is his speed in km/hr',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '04'
	}
	
	return question;
	
}



function problem033(){
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
		'id': '033',
		'question': 'In what time RS' + price + ' will give interest ofRS ' + interest + ' at rate of ' + rate + ' time?',
		'options': {
			'A': time + parseInt(Math.random()*10),
			'B': time - parseInt(Math.random()*10),
			'C': time,
			'D': time - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '03'
	}
	
	return question;
	
}

function problem034(){
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
		'id': '034',
		'question': 'A:B:C is in ratio of ' + A + ':' + B + ':' + C + ' ,how much money will c get out of ' + total + '.',
		'options': {
			'A': cshare + parseInt(Math.random()*10),
			'B': cshare- parseInt(Math.random()*10),
			'C': cshare - parseInt(Math.random()*10),
			'D': cshare 
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}

function problem035(){
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
		'id': '035',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice - parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}

function problem036(){
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
		'id': '036',
		'question': 'Ramesh bought a chai for RS ' + costprice + ' and sold it suressh ,if ramesh earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}

function problem037(){
	var inputData = [{
		'sellingprice': 140,
		'profit': 25
		},
		{
		'sellingprice': 170,
		'profit': 24
		},
		{
		'sellingprice': 120,
		'profit': 22
		},
		{
		'sellingprice': 140,
		'profit': 20
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellingprice= inputData[randomIndex]['sellingprice'],
		profit = inputData[randomIndex]['profit'],
		costprice,
		profitpercent,
		question = {};
		
	    costprice=(sellingprice-profit);
		profitpercent=(profit/costprice)*100;

	question = {
		'type': 'single',
		'id': '037',
		'question': 'After selling 140 apples a fruit seller earns a profit equal to S.P. of 20 apples.his profit percentage is',
		'options': {
			'A': profitpercent - parseInt(Math.random()*10),
			'B': profitpercent - parseInt(Math.random()*10),
			'C': profitpercent + parseInt(Math.random()*10),
			'D': profitpercent
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}

function problem038(){
	var inputData = [{
		'speed1': 20,
		'speed2': 5,
		'distance':55
		},
		{
		'speed1': 20,
		'speed2': 5,
		'distance':75
		},
		{
		'speed1': 10,
		'speed2': 5,
		'distance':65
		},
		{
		'speed1': 30,
		'speed2': 5,
		'distance':25
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed1= inputData[randomIndex]['speed1'],
		speed2 = inputData[randomIndex]['speed2'],
		distance = inputData[randomIndex]['distance'],
		speed,
		time,
		question = {};
		
	    speed=(speed1+speed2);
		time=distance/speed;

	question = {
		'type': 'single',
		'id': '038',
		'question': 'A man can row a boat at speed of ' + speed1 + 'km/hr in still water.if the speed of the stream is ' + speed2 + ' km/hr in what time he distance ' + distance + '  km downstream',
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time,
			'C': time + parseInt(Math.random()*10),
			'D': time- parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '03'
	}
	
	return question;
	
}

function problem039(){
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
		'id': '039',
		'question': 'The length of the largest rod than can be placed in a room that can be placed in a room ' + length + 'm long ' + breadth + 'm broad ' + height + 'm height',
		'options': {
			'A': y - parseInt(Math.random()*10),
			'B': y - parseInt(Math.random()*10),
			'C': y + parseInt(Math.random()*10),
			'D': y
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0310(){
	var inputData = [{
		'hour1': 5,
		'hour2': 10
		},
		{
		'hour1': 6,
		'hour2': 12
		},
		{
	    'hour1': 14,
		'hour2': 20
		},
		{
		'hour1': 10,
		'hour2': 20
		}],
		randomIndex = getRandomNumber(inputData.length),
		hour1= inputData[randomIndex]['hour1'],
		hour2 = inputData[randomIndex]['hour2'],
		time,
		question = {};
		
	    time=(hour1*hour2)/(hour2-hour1);

	question = {
		'type': 'single',
		'id': '0310',
		'question': 'A pipe can fill a tank in ' + hour1 + 'hours another pipe can empty the tank in ' + hour2 + 'hours both the pipes are opened at same time ,the tank can be filled ',
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time,
			'C': time + parseInt(Math.random()*10),
			'D': time- parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0311(){
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
		'id': '0311',
		'question': 'The average weight of ' + a + 'persons increases by ' + weight1 + ' kg when a new person comes in place of one of them weighing ' + weight2 + ' kg. What might be the weight of the new person?',
		'options': {
			'A': weight ,
			'B': weight- parseInt(Math.random()*10),
			'C': weight+ parseInt(Math.random()*10),
			'D': weight- parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0312(){
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
		'id': '0312',
		'question': 'If Suresh borrows Rs. ' + principle + ' from Mahesh at rate of interest ' + interest + ' S.I, at the end of four years how much interest Suresh has to pay along with principal amount?',
		'options': {
			'A': S + parseInt(Math.random()*10),
			'B': S - parseInt(Math.random()*10),
			'C': S,
			'D': S - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '03'
	}
	
	return question;
	
}
function problem0313(){
	var inputData = [{
		'length': 70,
		'breadth': 25,
		'height': 25,
		'sop': 230
		},
		{
		'length': 50,
		'breadth': 25,
		'height': 25,
		'sop': 240
		},
		{
		'length': 40,
		'breadth': 25,
		'height': 20,
		'sop': 200
		},
		{
		'length': 30,
		'breadth': 24,
		'height': 18,
		'sop': 220
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
		'id': '0313',
		'question': 'The dimensions of a hall are ' + length + 'm, ' + breadth + 'm and ' + height + 'm. If each person requires ' + sop + ' cubic meters, then the number of persons who can be accommodated in the hall are ?',
		'options': {
			'A': y - parseInt(Math.random()*10),
			'B': y - parseInt(Math.random()*10),
			'C': y ,
			'D': y + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0314(){
	var inputData = [{
		'cp': 100,
		'p': 23,
		'paid': 7011,
		},
		{
		'cp': 100,
		'p': 28,
		'paid': 7022,
		},
		{
		'cp':100,
		'p': 27,
		'paid': 7040,
		},
		{
		'cp': 100,
		'p': 28,
		'paid': 7051,
		}],
		randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		p= inputData[randomIndex]['p'],
		paid= inputData[randomIndex]['paid'],
		x,
		y,
		question = {};
		x=cp+p;
        y=(100/x)*paid;

	question = {
		'type': 'single',
		'id': '0314',
		'question':'The owner of a cell phone shop charges his customer ' + p + '% more than the cost price. If a customer paid Rs' + paid + ' for a cell phone, then what was the cost price of the cell phone?',
		'options': {
			'A': y,
			'B': y - parseInt(Math.random()*10),
			'C': y - parseInt(Math.random()*10),
			'D': y + parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0315(){
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
		'id': '0315',
		'question': 'A man buys a cycle for Rs' + costprice + ' and sells it at a loss of ' + loss + '%. What is the selling price of the cycle?',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0316(){
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
		'id': '0316',
		'question': 'A sum of money at simple interest amounts to Rs. ' + s1 + ' in ' + y1 + '  years and to Rs.' + s2 + ' in ' + y2 + ' years. The sum is:',
		'options': {
			'A': principal, 
			'B': principal - parseInt(Math.random()*10),
			'C': principal + parseInt(Math.random()*10),
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}


function problem0317(){
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
		'id': '0317',
		'question': 'How much time will it take for an amount of Rs. ' + price1 + ' to yield Rs. ' + price2 + ' as interest at ' + s + '% per annum of simple interest?',
		'options': {
			'A': t- parseInt(Math.random()*10), 
			'B': t - parseInt(Math.random()*10),
			'C': t + parseInt(Math.random()*10),
			'D': t ,
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}
function problem0318(){
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
		'id': '0318',
		'question': 'A boat can travel with a speed of ' + s1 + ' km/hr in still water. If the speed of the stream is ' + s2 + 'km/hr, find the time taken by the boat to go ' + d + ' km downstream.',
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time - parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0319(){
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
		'id': '0319',
		'question': 'In the first ' + over1 + ' overs of a cricket game, the run rate was only ' + rr + '. What should be the run rate in the remaining ' + over2 + ' overs to reach the target of ' + runs + ' runs?',
		'options': {
			'A': runrate - parseInt(Math.random()*10),
			'B': runrate - parseInt(Math.random()*10),
			'C': runrate+ parseInt(Math.random()*10),
			'D': runrate
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0320(){
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
		'id': '0320',
		'question': 'A man speed with the current is ' + manspeed + ' km/hr and the speed of the current is ' + currentspeed + ' km/hr. The mans speed against the current is',
		'options': {
			'A': b - parseInt(Math.random()*10),
			'B': b - parseInt(Math.random()*10),
			'C': b + parseInt(Math.random()*10),
			'D': b
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}
function problem0321(){
	var inputData = [{
		'downstreamdistance':20,
		'downstreamtime': 5,
		'upstreamtime': 8
		},
		{
		'downstreamdistance': 50,
		'downstreamtime': 30,
		'upstreamtime': 5
		},
		{
		'downstreamdistance': 60,
		'downstreamtime': 40,
		'upstreamtime': 2
		},
		{
		'downstreamdistance':26,
		'downstreamtime': 2,
		'upstreamtime': 4
		}],
		randomIndex = getRandomNumber(inputData.length),
		downstreamdistance = inputData[randomIndex]['downstreamdistance'],
		downstreamtime = inputData[randomIndex]['downstreamtime'],
		upstreamtime = inputData[randomIndex]['upstreamtime'],
		speed,
		x,
		stream_speed,
		question = {};
		
	downstreamdistance=parseInt(downstreamdistance);
	downstreamtime=parseInt(downstreamtime);
	upstreamtime=parseInt(upstreamtime);
	speed=downstreamdistance/downstreamtime;
	x=downstreamdistance/upstreamtime;
	streamspeed=1/2*(speed+x);

	question = {
		'type': 'single',
		'id': '0322',
		'question': 'A boat running downstream covers a distance of' + downstreamdistance + 'km in' + downstreamtime + 'hours while for covering the same distance upstream, it takes'
					+ upstreamtime + 'hours. What is the speed of the boat in still water?',
		'options':
		{
			'A': streamspeed,
			'B': streamspeed - parseFloat(Math.random()*10),
			'C': streamspeed + parseInt(Math.random()*10),
			'D': streamspeed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}
function problem0322(){
	var inputData = [{
		'dist1':260,
		'time1': 21,
		'dist2':600
		},
		{
		'dist1':220,
		'time1': 25,
		'dist2':750
		},
		{
		'dist1':300,
		'time1': 20,
		'dist2':700
		},
		{
		'dist1':180,
		'time1': 14,
		'dist2':560
		},
		{
		'dist1':200,
		'time1': 25,
		'dist2':800
		}
	],
		randomIndex = getRandomNumber(inputData.length),
	    dist1 = inputData[randomIndex]['dist1'],
		time1 = inputData[randomIndex]['time1'],
    	dist2 = inputData[randomIndex]['dist2'],
	    speed,
	    time,
		question = {};
		
	    dist1=parseInt(dist1);
		time1=parseInt(time1);
		dist2=parseInt(dist2);
		speed=dist1/time1;
	    time=((dist1+dist2)/speed);


	question = {
		'type': 'single',
		'id': '0322',
		'question': 'A train ' + dist1 + ' m long passes a pole in' + time1 + 'seconds. How long will take to pass a plateform '+ dist2 +'m long?',
		'options': {
			'A': time * parseInt(Math.random()*10),
			'B': time - parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time
		},
		'answer': 'D',
		'author-id': '03'
	}
	return question;	
}
function problem0323(){
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
		'id': '0323',
		'question': 'A cyclist moving at a speed of' + speed + 'a crosses bridge in '+ time +'minitues.what is the length' + distance +' of the bridge?',
		'options': {
			'A':  distance-parseInt(Math.random()*10),
			'B':  distance,
			'C':  distance+parseInt(Math.random()*10),
			'D':  distance-parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '03'
	}
	
	return question;
	
}

function problem0324(){
	var inputData = [{
	
		'population1': 54500,
		'population2': 58500
		},
		{
		'population1': 64500,
		'population2': 56500
		},
		{
		'population1': 75500,
		'population2': 57500
		},
		{
		'population1': 65500,
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
		'id': '0324',
		'question': 'The population of a town is increased from '+ population1 +' to '+ population2 +'  in one year. What is the percentage increase in the population?',
		'options': {
			'A': percentageincrease,
			'B': percentageincrease - parseInt(Math.random()*10), 
			'C': percentageincrease + parseInt(Math.random()*10),
			'D': percentageincrease - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}
function problem0325(){
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
		'id': '0325',
		'question': ' Raman bought an article at '+cp+'  % less of the marked price and sold it at '+sp+'% more than the marked price. Find the profit earned by him.',
		'options': {
			'A': profitpercent-parseInt(Math.random()*10),
			'B': profitpercent-parseInt(Math.random()*10),
			'C': profitpercent,
			'D': profitpercent+parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '03'
	}
	
	return question;
	
}
function problem0326(){
	var inputData = [{
		'price1': 1400,
		'years':9,
		'percentage':52
		},
		{
		'price1': 1600,
		'years':1,
		'percentage':12
		
		},
		{
		'price1': 1931,
		'years':4,
		'percentage':45
	    },
		{
		'price1': 143-51,
		'years':4,
		'percentage':12
		
		}],
		randomIndex = getRandomNumber(inputData.length),
		price1=inputData[randomIndex]['price1'],
		years=inputData[randomIndex]['years'],
		percentage=inputData[randomIndex]['percentage'],
		
		amount,
		question={},
		amount=(100*price1)/(percentage*years),
		
		question = {
		  'type': 'single',
		  'id': '0326',
		  'question': 'if the price  is ' +price1 + ' and years  is'  +years +' and percentage is ?'+percentage+'find the amount',
		  'options': {
			'A': amount, 
			'B': amount - parseInt(Math.random()*10),
			'C': amount + parseInt(Math.random()*10),
			'D': amount - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03',
		}
	
	return question;
}
function problem0327(){
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
		'id': '0327',
		'question': 'Two girls start running at the same time in the same direction at a speed of '+ speed1 +' km/hr and '+ speed2 +' km/hr respectively. In what time they will be '+ dis +' km apart?',
		'options': {
			'A': time,
			'B': time-parseInt(Math.random()*10),
			'C': time-parseInt(Math.random()*10),
			'D': time+parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
	
}
function problem0328(){
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
		   
		    sum=(100*s)/(r*t);
		   
			question= {};
			
			
	  question= {
			'type': 'single',
			'id': '0328',
			'question': 'A sum fetched a total simple interest of rs.'+s+'at the rate of '+r+'p.c.p.a. in '+t+'years what is the sum?',
			'options': {
				'A':sum,
				'B':sum-parseInt(Math.random()*10),
				'C':sum-parseInt(Math.random()*10),
				'D':sum+parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '03'
		}
		return question;
	
}

function problem0329(){
		var inputData = [{
			'speed':90
			},
			{
			
				'speed':30
			},
			{
			
				'speed':70
			},
			
			{
			
				'speed':20
			}],
			randomIndex = getRandomNumber(inputData.length),
			
			speed= inputData[randomIndex]['speed'],
		    
			
			
			speed=parseInt(speed);
			speed1=speed*(5/18);
			
			question = {};
			
			
	  question= {
			'type': 'single',
			'id': '0329',
			'question': 'A car moves at the speed of '+speed+'km/hr. What is the speed of the car in metres per second',
			'options': {
				'A':speed1-parseInt(Math.random()*10),
				'B':speed1,
				'C':speed1-parseInt(Math.random()*10),
				'D':speed1+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '03'
		}
		return question;
	
}


function problem0330(){
		var inputData = [{
			'student1':90,
			'student2':80,
			'student3':54
			},
			{
			'student1':80,
			'student2':88,
			'student3':64
			},
			{
			'student1':60,
			'student2':84,
			'student3':74
			},
			
			{
			'student1':50,
			'student2':85,
			'student3':84
			}],
			randomIndex = getRandomNumber(inputData.length),
			student1= inputData[randomIndex]['student1'],
			student2= inputData[randomIndex]['student2'],
		    student3 = inputData[randomIndex]['student3'],
			
			
			student1=parseFloat(student1/100);
			student2=parseFloat(student2/100);
			student3=parseFloat(student3/100);
			testp1=100;
			testp2=150;
			testp3=200;
			st1=student1*testp1;
		    st2=student2*testp2;
			st3=student3*testp3;
			total=st1+st2+st3;
			markt=testp1+testp2+testp3;
		    percentage=(total/markt)*100;
			
			question = {};
			
			
	  question= {
			'type': 'single',
			'id': '0330',
			'question': 'A student scores '+student1+','+student2+', '+student1+'marks in a test paper of 100, 150, 200 respectively as maximum marks. What is the total percentage?',
			'options': {
				'A':percentage-parseInt(Math.random()*10),
				'B':percentage,
				'C':percentage-parseInt(Math.random()*10),
				'D':percentage+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '03'
		}
		return question;
	
}

function problem0331(){
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
		'salaryC': 6555,
		'salaryD': 7230,
		'salaryE': 6562,
		'average': 6500
		},
		{
		'salaryA': 5459,
		'salaryB': 3967,
		'salaryC': 4665,
		'salaryD': 1505,
		'salaryE': 3689,
		'average': 5432
		},
		{
		'salaryA': 9075,
		'salaryB': 5634,
		'salaryC': 5423,
		'salaryD': 9509,
		'salaryE': 5500,
		'average': 5000
		},
		{
		'salaryA': 6543,
		'salaryB': 6789,
		'salaryC': 5087,
		'salaryD': 6790,
		'salaryE': 3026,
		'average': 7050
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
	    total= parseInt(salary - total);

	question = {
		'type': 'single',
		'id': '0331',
		'question': 'Raman gets a salary of '+ salaryA +', '+salaryB+ ', '+salaryC+', '+salaryD+' and '+salaryE +' for 5 months. How much salary he must have in the sixth month so that he gets an average of '+ average +'',
		'options': {
			'A': total,
			'B': total - parseInt(Math.random()*10),
			'C': total + parseInt(Math.random()*10),
			'D': total - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '03'
	}
	
	return question;
}
function problem0332(){
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
	totalamount=parseFloat(principal*(1+(interest/100))**years);

	question = {
		'type': 'single',
		'id': '0332',
		'question': ' What is the amount for a sum of money '+ principal +' at '+ interest +' rate of interest C.I. for '+ years +' years?',
		'options': {
			'A': totalamount + parseInt(Math.random()*10),
			'B': totalamount - parseInt(Math.random()*10),
			'C': totalamount,
			'D': totalamount - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '03'
	}
	
	return question;
}
function problem0333(){
	var inputData = [{
		'area': 10,		
		},
		{
		'area': 780,
		},
		{
		'area': 500,	
		},
		{
		'area': 510,		
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
		'id': '0333',
		'question': 'What is the area of square field whose side is '+ area+'m ?',
		'options': {
			'A':areaSquare - parseInt(Math.random()*10),
			'B': areaSquare - parseInt(Math.random()*10),
			'C': areaSquare + parseInt(Math.random()*10),
			'D':  areaSquare
		},
		'answer': 'D',
		'author-id': '03'
	}
	
	return question;
	
}

