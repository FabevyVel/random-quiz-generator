function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem121(){
	var inputData = [{
		'd1':240,
		'ta': 24,
		'd2':650
		},
		{
		'd1':240,
		'ta': 24,
		'd2':600
		},
		{
		'd1':240,
		'ta': 30,
		'd2':725
		},
		{
		'd1':240,
		'ta': 24,
		'd2':690
		}],
		randomIndex = getRandomNumber(inputData.length),
	    d1 = inputData[randomIndex]['d1'],
		ta = inputData[randomIndex]['ta'],
    	d2 = inputData[randomIndex]['d2'],
	    speed,
	    time,
		question = {};
		
	    d1=parseInt(d1);
		ta=parseInt(ta);
		d2=parseInt(d2);
		speed=d1/ta;
	    time=((d1+d2)/speed);


	question = {
		'type': 'single',
		'id': '121',
		'question': 'A train '+d1+' m long passes a pole in '+ta+' seconds. How long will it take to pass a platform '+d2+' m long?',
		'options': {
			'A': time,
			'B': time-parseInt(Math.random()*10),
			'C': time+parseInt(Math.random()*10),
			'D': time-parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}
	
function problem122(){
	var inputData = [{
		'cp': 5000,
		'loss': 10
		},
		{
		'cp': 8000,
		'loss': 10
		},
		{
		'cp': 6000,
		'loss': 10
		},
		{
		'cp': 7000,
		'loss': 10
		}],
		randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		loss = inputData[randomIndex]['loss'],
		sp,
		question = {};
		sp=(((100-loss)/100)*cp);
	    
	question = {
		'type': 'single',
		'id': '122',
		'question': 'A man purchase tv for RS ' + cp + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sp - parseInt(Math.random()*10),
			'B': sp, 
			'C': sp + parseInt(Math.random()*10),
			'D': sp - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '12'
	}
	
	return question;
	
}

function problem123(){
	var inputData = [{
	
		'p': 8000,
		'i': 720,
		'r':6
		},
		{
		'p': 7000,
		'i': 720,
		'r':6
		},
		{
		'p': 6000,
		'i': 720,
		'r':6
		},
		{
		'p': 8500,
		'i': 720,
		'r':6
		}],
		randomIndex = getRandomNumber(inputData.length),
		p = inputData[randomIndex]['p'],
		i = inputData[randomIndex]['i'],
		r = inputData[randomIndex]['r'],
		n,
		question = {};

	p=parseInt(p);
	i=parseInt(i);
	r=parseInt(r);
	n=((i*100)/(p*r));

	question = {
		'type': 'single',
		'id': '123',
		'question': 'In what time Rs. '+ p +' will give interest of Rs. '+ i +' at the rate of '+ r +' % p.a. S.I.?',
		'options': {
			'A': n- parseInt(Math.random()*10),
			'B': n+ parseInt(Math.random()*10), 
			'C': n,
			'D': n - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '12'
	}
	
	return question;
	
} 

function problem124(){
	var inputData = [{
	
		'sp': 8500,
		'p': 12
		},
		{
		'sp': 8400,
		'p': 12
		},
		{
		'sp': 8100,
		'p': 12
		},
		{
		'sp': 8500,
		'p': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
		sp= inputData[randomIndex]['sp'],
		p = inputData[randomIndex]['p'],
		cp,
		question = {};

	sp=parseInt(sp);
	p=parseInt(p);
	cp=((100/(100+p))*sp);

	question = {
		'type': 'single',
		'id': '124',
		'question': 'Suresh bought a cell phone from a shop. If he sells it at Rs. '+sp+' to Mahesh and earns a profit of '+p+'%, find the price at which Suresh bought the cell phone.',
		'options': {
			'A': cp- parseInt(Math.random()*10),
			'B': cp, 
			'C': cp + parseInt(Math.random()*10),
			'D': cp - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '12'
	}
	
	return question;
	
}

function problem125(){
	var inputData = [{
		'cp': 2000,
		'p': 25
		},
		{
		'cp': 1540,
		'p': 25
		},
		{
		'cp': 2500,
		'p': 25
		},
		{
		'cp': 2100,
		'p': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		p = inputData[randomIndex]['p'],
		sp,
		question = {};
		
		sp=(((100+p)/100)*cp);

	question = {
		'type': 'single',
		'id': '125',
		'question': 'Ramesh bought a chai for RS ' + cp + ' and sold it suressh ,if ramesh earned a profit of ' + p + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sp - parseInt(Math.random()*10), 
			'B': sp,
			'C': sp + parseInt(Math.random()*10),
			'D': sp - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '12'
	}
	
	return question;
	
}

function problem126(){
	var inputData = [{
		'sp': 2000,
		'loss': 20
		},
		{
		'sp': 3000,
		'loss': 20
		},
		{
		'sp': 4000,
		'loss': 20
		},
		{
		'sp': 4200,
		'loss': 20
		}],
		randomIndex = getRandomNumber(inputData.length),
		sp= inputData[randomIndex]['sp'],
		loss = inputData[randomIndex]['loss'],
		cp,
		question = {};
		
		cp=((100/(100-loss))*sp);

	question = {
		'type': 'single',
		'id': '126',
		'question': 'A shopkeeper purchases a table and sells it for Rs. '+ sp +' . If he incurs a loss of '+ loss +' %, find the cost price of table.',
		'options': {
			'A': sp - parseInt(Math.random()*10), 
			'B': sp - parseInt(Math.random()*10),
			'C': sp + parseInt(Math.random()*10),
			'D': sp 
		},
		'answer': 'D',
		'author-id': '12'
	}
	
	return question;
	
}

function problem127(){
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
		
	    speed=parseInt(speed*5/18);
		distance=parseInt(distance);
		time=(distance/speed);
		
	question = {
		'type': 'single',
		'id': '127',
		'question': 'A jogger is running at a speed of '+ speed +' km/hr. In what time he will cross a track of length '+ distance+' meters?',
		'options': {
			'A':  time+parseInt(Math.random()*10),
			'B':  time-parseInt(Math.random()*10),
			'C':  time,
			'D':  time-parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '12'
	}
	
	return question;
	
}

function problem128(){
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
		'id': '128',
		'question': 'A cyclist moving at a speed of '+ speed  +' a crosses bridge in  '+ time +' minitues.what is the length of the bridge?',
		'options': {
			'A':  distance,
			'B':  distance-parseInt(Math.random()*10),
			'C':  distance+parseInt(Math.random()*10),
			'D':  distance-parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}

function problem129(){
	var inputData = [{
		'distance':68,
		'speeda': 13,
		'speedb':4
		},
		{
		'distance':60,
		'speeda': 10,
		'speedb':6
		},
		{
		'distance':68,
		'speeda': 10,
		'speedb':4
		},
		{
		'distance':60,
		'speeda': 15,
		'speedb':2
		}],
		
		randomIndex = getRandomNumber(inputData.length),
	    distance = inputData[randomIndex]['distance'],
		speeda = inputData[randomIndex]['speeda'],
    	speedb = inputData[randomIndex]['speedb'],
	    speed,
	    time,
		question = {};

		speed=speeda+speedb;
	    time=(distance/speed);


	question = {
		'type': 'single',
		'id': '129',
		'question': 'A boat can travel with a speed of '+ speeda +' km/hr in still water. If the speed of the stream is '+ speedb +' km/hr, find the time taken by the boat to go '+ distance +' km downstream.',
		'options': {
			'A': time,
			'B': time-parseInt(Math.random()*10),
			'C': time+parseInt(Math.random()*10),
			'D': time-parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1210(){
	var inputData = [{
		'speeda':15,
		'speedb': 5,
		'time':12
		},
		{
		'speeda':15,
		'speedb': 3,
		'time':12
		},
		{
		'speeda':15,
		'speedb': 4,
		'time':12
		},
		{
		'speeda':15,
		'speedb': 6,
		'time':12
		}],
		randomIndex = getRandomNumber(inputData.length),
	    speeda= inputData[randomIndex]['speeda'],
		speedb = inputData[randomIndex]['speedb'],
    	time = inputData[randomIndex]['time'],
	    speed,
	    distance,
		question = {};
		
	    speeda=parseInt(speeda);
		speedb=parseInt(speedb);
		time=parseInt(time);
		speed=speeda+speedb;
	    distance=(speed*(time/60));


	question = {
		'type': 'single',
		'id': '1210',
		'question': ' the speed of a boat in stil water in ' +  speeda + ' km/hr and the rate of current is '+speedb +' km/hr.the distance travlled downstream in '+time+'minutes is?',
		'options': {
			'A': distance-parseInt(Math.random()*10),
			'B': distance,
			'C': distance-parseInt(Math.random()*10),
			'D': distance+parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1211(){
	var inputData = [{
		'sp': 2500,
		'cp': 2000
		},
		{
		'sp': 2600,
		'cp': 2500
		},
		{
		'sp': 2700,
		'cp': 2500
		},
		{
		'sp': 2800,
		'cp': 2500
		}],
		randomIndex = getRandomNumber(inputData.length),
		sp= inputData[randomIndex]['sp'],
		cp = inputData[randomIndex]['cp'],
		p,
		profit,
		question = {};

	sp=parseInt(sp);
	cp=parseInt(cp);
	p= sp-cp;
	profit=(p/cp)*100;

	question = {
		'type': 'single',
		'id': '1211',
		'question': 'A shopkeeper sold an article for rs. '+ sp+'. If costPrice of article is '+ cp +'. Find the profit percentage?', 
		'options': {
			'A': profit,
			'B': profit - parseInt(Math.random()*10),
			'C': profit + parseInt(Math.random()*10),
			'D': profit - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}


function problem1212(){
	var inputData = [{
		'cp': 1500,
		'loss': 85
		},
		{
		'cp': 1600,
		'loss': 85
		},
		{
		'cp': 1700,
		'loss': 85
		},
		{
		'cp': 1400,
		'loss':15
		}],
		randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		loss = inputData[randomIndex]['loss'],
		sp,
		question = {};
		
		sp=((100-loss)/100*cp);

	question = {
		'type': 'single',
		'id': '1212',
		'question': 'A man buys a cycle for Rs ' + cp + ' and sells it at a loss of ' + loss + '%. What is the selling price of the cycle?',
		'options': {
			'A': sp - parseInt(Math.random()*10), 
			'B': sp - parseInt(Math.random()*10),
			'C': sp + parseInt(Math.random()*10),
			'D': sp 
		},
		'answer': 'D',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1213(){
	var inputData = [{
		'rate1': 815,
		'rate2': 854,
		'year1': 7,
		'year2': 4
		},
		{
		'rate1': 815,
		'rate2': 854,
		'year1': 3,
		'year2': 4
		},
		{
		'rate1': 815,
		'rate2': 854,
		'year1': 3,
		'year2': 7
		},
		{
		'rate1': 815,
		'rate2': 854,
		'year1': 3,
		'year2': 3
		}],
		randomIndex = getRandomNumber(inputData.length),
		rate1= inputData[randomIndex]['rate1'],
		rate2= inputData[randomIndex]['rate2'],
		year1= inputData[randomIndex]['year1'],
		year2= inputData[randomIndex]['year2'],
		SI1,
		SI2,
		principal,
		question = {};
		
		SI1=rate2-rate1;
		SI2=SI1*year1;
		principal=rate1-SI2;

	question = {
		'type': 'single',
		'id': '1213',
		'question': 'A sum of money at simple interest amounts to Rs. ' + rate1 + ' in ' + year1 + '  years and to Rs.' + rate2 + ' in ' + year2 + ' years. The sum is:',
		'options': {
			'A': principal - parseInt(Math.random()*10), 
			'B': principal,
			'C': principal + parseInt(Math.random()*10),
			'D': principal - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1214(){
	var inputData = [{
		'cp':1300,
		'p': 25
		},
		{
		'cp':1500,
		'p': 25
		},
		{
		'cp':1200,
		'p': 25
		},
		{
		'cp':1400,
		'p': 25
		}],
		randomIndex = getRandomNumber(inputData.length),
	    cp= inputData[randomIndex]['cp'],
		p = inputData[randomIndex]['p'],
	    sp,
		question = {};
		
	    cp=parseInt(cp);
		p=parseInt(p);
		
		sp=(((100-p)/100)*cp);


	question = {
		'type': 'single',
		'id': '1214',
		'question': ' A shopkeeper bought a watch for Rs. '+ cp +' . At what price should he sell the watch to earn a profit of '+ p +' % ?',
		'options': {
			'A': sp-parseInt(Math.random()*10),
			'B': sp-parseInt(Math.random()*10),
			'C': sp,
			'D': sp+parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '12'
	}
	
	return question;
	
}


function problem1215(){
	var inputData = [{
		'distance': 600,
		'time': 5
		},
		{
		'distance':500,
		'time': 5
		},
		{
		'distance': 400,
		'time': 5
		},
		{
		'distance': 300,
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
		'id': '1215',
		'question': 'A person crosses a '+ distance+' m long street in '+ time+' minutes. What is speed in km per hour?', 
		'options': {
			'A': speed,
			'B': speed + parseInt(Math.random()*10),
			'C': speed - parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1216(){
	var inputData = [{
		'base': 5,
		'height': 10
		},
		{
		'base': 10,
		'height': 10
		},
		{
		'base': 15,
		'height': 10
		},
		{
		'base': 20,
		'height': 10
		}],
	randomIndex = getRandomNumber(inputData.length),
		base= inputData[randomIndex]['base'],
		height = inputData[randomIndex]['height'],
		areaofTriangle,
		question = {};
		
    base=parseInt(base);
	height=parseInt(height);
	areaofTriangle=(1/2*(base*height));

	question = {
		'type': 'single',
		'id': '1216',
		'question': 'What is the area of a triangle with base '+ base +' meters and height '+ height +' meters?',
		'options': {
			'A': areaofTriangle,
			'B': areaofTriangle - parseInt(Math.random()*10),
			'C': areaofTriangle + parseInt(Math.random()*10),
			'D': areaofTriangle - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1217(){
var inputData = [{
		'side': 15
		},
		{
		'side': 10
		},
		{
		'side': 20
		},
		{
		'side': 25
		}],
	randomIndex = getRandomNumber(inputData.length),
		side= inputData[randomIndex]['side'],
		areaofasquare ,
		question = {};
		
    side=parseInt(side);
	areaofasquare=(side*side);
	question = {
		'type': 'single',
		'id': '1217',
		'question': 'What is the area of a square field whose side is '+ side +' meters?',
		'options': {
			'A': areaofasquare + parseInt(Math.random()*10),
			'B': areaofasquare - parseInt(Math.random()*10),
			'C': areaofasquare,
			'D': areaofasquare - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '12'
	}
	
	return question;

}

function problem1218(){
var inputData = [{
		'diagonal': 30
		},
		{
		'diagonal': 60
		},
		{
		'diagonal': 50
		},
		{
		'diagonal': 40
		}],
	randomIndex = getRandomNumber(inputData.length),
		diagonal= inputData[randomIndex]['diagonal'],
		areaofasquare ,
		question = {};
		
    diagonal=parseInt(diagonal);
	areaofasquare=(1/2*(diagonal*diagonal));
	question = {
		'type': 'single',
		'id': '1218',
		'question': 'What is the area of a square field whose diagonal is '+ diagonal +' meters?',
		'options': {
			'A': areaofasquare + parseInt(Math.random()*10),
			'B': areaofasquare - parseInt(Math.random()*10),
			'C': areaofasquare - parseInt(Math.random()*10),
			'D': areaofasquare
		},
		'answer': 'D',
		'author-id': '12'
	}
	
	return question;

}

function problem1219(){
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
		'id': '1219',
		'question': 'If the sum is '+ sum +' and average is '+ number +', find the number of quantities.',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average - parseInt(Math.random()*10),
			'C': average,
			'D': average - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '12'
	}
	
	return question;

}

function problem1220(){
var inputData = [{
		'n':2
		},
		{
		'n':4
		},
		{
		'n':6
		},
		{
		'n':5
		}],
	randomIndex = getRandomNumber(inputData.length),
		n= inputData[randomIndex]['n'],
		average ,
		question = {};
		
    n=parseInt(n);
	average=(2*(n+1)*(2*n+1)/3);
	question = {
		'type': 'single',
		'id': '1220',
		'question': 'The average of square of first '+ n +' consecutive even numbers is:',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average - parseInt(Math.random()*10),
			'C': average,
			'D': average - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '12'
	}
	
	return question;

}

function problem1221(){
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
		'id': '1221',
		'question': 'The population of a town is increased from '+ population1 +' to '+ population2 +'  in one year. What is the percentage increase in the population?',
		'options': {
			'A': percentageincrease,
			'B': percentageincrease - parseInt(Math.random()*10), 
			'C': percentageincrease + parseInt(Math.random()*10),
			'D': percentageincrease - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}
function problem1222(){
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
		'id': '1222',
		'question': ' Mohan bought an article at '+cp+'  % less of the marked price and sold it at '+sp+'% more than the marked price. Find the profit earned by him.',
		'options': {
			'A': profitpercent-parseInt(Math.random()*10),
			'B': profitpercent-parseInt(Math.random()*10),
			'C': profitpercent,
			'D': profitpercent+parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1223(){
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
		'id': '1223',
		'question': 'Two boys start running at the same time in the same direction at a speed of '+ speed1 +' km/hr and '+ speed2 +' km/hr respectively. In what time they will be '+ dis +' km apart?',
		'options': {
			'A': time,
			'B': time-parseInt(Math.random()*10),
			'C': time-parseInt(Math.random()*10),
			'D': time+parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1224(){
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
		'id': '1224',
		'question': 'The average of Sohans marks in '+sub1+' subjects is '+mark2+'. If his average in '+sub2+' subjects excluding science is '+mark2+', how many marks he obtained in science?',
		'options': {
			'A': subjects-parseInt(Math.random()*10),
			'B': subjects,
			'C': subjects-parseInt(Math.random()*10),
			'D': subjects+parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1225(){
	var inputData = [{
		'cp':375,
		'cpa':12,
		'sp':36
		},
		{
		'cp':375,
		'cpa':12,
		'sp':32
		},
		{
        'cp':375,
        'cpa':12,
		'sp':30
		},
		{
        'cp':375,
        'cpa':12,
		'sp':33
		}],
	randomIndex = getRandomNumber(inputData.length),
	cp= inputData[randomIndex]['cp'],
	cpa= inputData[randomIndex]['cpa'],
    sp= inputData[randomIndex]['sp'],
	costprice,
	gain,
	profit,
	question = {};
	costprice=(cp/cpa);
	gain=(sp-costprice);
	profit=((gain/costprice)*100)

	question = {
		'type':'single',
		'id': '1225',
		'question': 'Sam purchased '+cpa+' dozens of toys at the rate of Rs. '+cp+' per dozen. He sold each one of them at the rate of Rs. '+sp+' . What was his percentage profit?',
		'options': {
			'A':profit-parseInt(Math.random()*10),
			'B':profit+parseInt(Math.random()*10),
			'C':profit- parseInt(Math.random()*10),
			'D':profit
			},
		'answer':'D',
		'author-id': '12'
	}
	
	return question;
}

function problem1226(){
	var inputData = [{
		'pricea':9800,
		'priceb':12005,
		'yeara':5,
		'yearb':8
		},
		{
		'pricea':9800,
		'priceb':12005,
		'yeara':5,
		'yearb':6
		},
		{
		'pricea':9800,
		'priceb':12005,
		'yeara':5,
		'yearb':5
		},
		{
		'pricea':9800,
		'priceb':12005,
		'yeara':5,
		'yearb':4
		}],
	randomIndex = getRandomNumber(inputData.length),
		pricea= inputData[randomIndex]['pricea'],
		priceb = inputData[randomIndex]['priceb'],
		yeara= inputData[randomIndex]['yeara'],
		yearb= inputData[randomIndex]['yearb'],
		siyear3,
		siyear5,
		principal,
		rate,
		question = {};
		
		siyear3=(priceb-pricea);
		siyear5=((siyear3/3)*yeara);
		principal=(pricea-siyear5);
		rate=((100*siyear5)/(principal*yeara));

	question = {
		'type': 'single',
		'id': '1226',
		'question': 'A sum of money amounts to Rs. '+pricea+' after '+yeara+' years and Rs. '+priceb+' after '+yearb+' years at the same rate of simple interest. The rate of interest per annum is:',
		'options': {
			'A': rate,
			'B': rate- parseInt(Math.random()*10),
			'C': rate+ parseInt(Math.random()*10),
			'D': rate- parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}

function problem1227(){
	var inputData = [{
		'speedboat':20,
		'speedstream':5,
		'distance':75
		},
		{
		'speedboat':20,
		'speedstream':6,
		'distance':75
		},
		{
		'speedboat':20,
		'speedstream':8,
		'distance':75
		},
		{
		'speedboat':20,
		'speedstream':10,
		'distance':75
		}],
		randomIndex = getRandomNumber(inputData.length),
		speedboat= inputData[randomIndex]['speedboat'],
		speedstream = inputData[randomIndex]['speedstream'],
		distance = inputData[randomIndex]['distance'],
		speed,
		time,
		question = {};
		
	    speed=(speedboat+speedstream);
		time=distance/speed;

	question = {
		'type': 'single',
		'id': '1227',
		'question': 'A man can row a boat at speed of ' + speedboat + 'km/hr in still water.if the speed of the stream is ' + speedstream + ' km/hr in what time he distance ' + distance + '  km downstream',
		'options': {
			'A': time,
			'B': time - parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '12'
	}
	
	return question;
	
}
