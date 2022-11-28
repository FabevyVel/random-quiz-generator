function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem091(){
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
		'id': '091',
		'question': 'A car travells a distance ' + distance + 'km at ' + time + ' sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed * parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '09'
	}
	
	return question;
	
}

function problem092(){
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
		'id': '092',
		'question': 'find the average of first 10 ' + number + 'whole numbers.',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average - parseInt(Math.random()*10),
			'C': average,
			'D': average * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '09'
	}
	
	return question;
}

function problem093(){
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
		'id': '093',
		'question': 'A man purchases TV for ' + cp + 'rs and sells it at ' + lp + ' loss percentage. what is the sp of the TV?',
		'options': {
			'A': sp - parseFloat(Math.random()*10),
			'B': sp * parseFloat(Math.random()*10),
			'C': sp + parseFloat(Math.random()*10),
			'D': sp 
		},
		'answer': 'D',
		'author-id': '09'
    }
	return question;
}
function problem094(){
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
		'id': '094',
		'question': 'To fill a tank ' + tankCap + 'buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to ' + buckCap + ' two fifth of its present?',
		'options': {
			'A': nBuck * parseFloat(Math.random()*10),
			'B': nBuck ,
			'C': nBuck + parseFloat(Math.random()*10),
			'D': nBuck - parseFloat(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
    }
	return question;
}
function problem095(){
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
		'id': '095',
		'question': 'suresh bought a cell phone from a shop. If he sells it at ' + sp + ' rs to mahesh and earns a profit ' + pp + ' percentage . Find the price at which suresh bought the cell phone.',
		'options': {
			'A': cp * parseInt(Math.random()*10),
			'B': cp,
			'C': cp + parseInt(Math.random()*10),
			'D': cp - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
    }
	return question;
}
function problem096(){
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
		'id': '096',
		'question': 'In one hour a boat goes  ' + us + ' km/hr along stream and ' + ds + ' km/hr against the stream . The speed of boat in ' + ss +' in km/hr is.',
		'options': {
			'A': ss - parseInt(Math.random()*10),
			'B': ss + parseInt(Math.random()*10),
			'C': ss,
			'D': ss * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '09'
    }
	return question;
}
function problem097(){
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
		'id': '097',
		'question': 'Find the compound interest on' + p + ' rs for ' + n + ' years at ' + r + ' percentage per annum completed annualy.',
		'options': {
			'A': ci * parseInt(Math.random()*10),
			'B': ci + parseInt(Math.random()*10),
			'C': ci - parseInt(Math.random()*10),
			'D': ci 
		},
		'answer': 'D',
		'author-id': '09'
    }
	return question;
}
function problem098(){
	var inputData = [{
		'p': 45000,
		'n': 6,
		'r':4
		},
		{
		'p': 45000,
		'n': 2,
		'r':6		
		},
		{
		'p': 40000,
		'n': 6,
		'r':6
		},
		{
		'p': 46000,
		'n': 6,
		'r':4
		},
		{
		'p': 44000,
		'n': 2,
		'r':6
		}],
		randomIndex = getRandomNumber(inputData.length),
	    p = inputData[randomIndex]['p'],
		n = inputData[randomIndex]['n'],
		r = inputData[randomIndex]['r'],
		si,
		question = {};

	p = parseInt(p);
    n = parseInt(n);
    r = parseInt(r);
    si=p*n*r/100;
	
	question = {
		'type': 'single',
		'id': '098',
		'question': 'Find the simple interest when ' + p + ' rs rate of interest ' + r + ' percentage per annum, time ' + n + ' years.',
		'options': {
			'A': si - parseInt(Math.random()*10),
			'B': si + parseInt(Math.random()*10),
			'C': si * parseInt(Math.random()*10),
			'D': si 
		},
		'answer': 'D',
		'author-id': '09'
    }
	return question;
}
function problem099(){
	var inputData = [{
		'l':8,
		'b':4
		},
		{
		'l':6,
		'b':3
		},
		{
		'l': 12,
		'b': 6
		},
		{
		'l': 4,
		'b': 3
		},
		{
		'l': 4,
		'b': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
	    l = inputData[randomIndex]['l'],
	    b = inputData[randomIndex]['b'],
		a,
		question = {};

	l = parseInt(l);
    b = parseInt(b);
    a = l*b;
	
	question = {
		'type': 'single',
		'id': '099',
		'question': 'If the length of rectangle is ' + l + ' m and its breadth is ' + b +' m. find the area'+ a + ' m? ',
		'options': {
			'A': a * parseInt(Math.random()*10),
			'B': a ,
			'C': a - parseInt(Math.random()*10),
			'D': a + parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
    }
	return question;
}
function problem0910(){
	var inputData = [{
		'a': 5,
		},
		{
		'a': 4,
		},
		{
		'a': 9,
		},
		{
		'a': 3,		
		},
		{
		'a': 10,
		}],
		randomIndex = getRandomNumber(inputData.length),
		a = inputData[randomIndex]['a'],
		area,
		question = {};

	a = parseInt(a);
    area = a*a ;

	question = {
		'type': 'single',
		'id': '0910',
		'question': 'If one side of square is ' + a + ' m. find the '+ area + ' m?',
		'options': {
			'A': area + parseInt(Math.random()*10),
			'B': area - parseInt(Math.random()*10),
			'C': area,
			'D': area * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '09'
	}
	
	return question;
}
function problem0911(){
	var inputData = [{
		'h':8,
		'b':4
		},
		{
		'h':6,
		'b':3
		},
		{
		'h': 12,
		'b': 6
		},
		{
		'h': 4,
		'b': 3
		},
		{
		'h': 4,
		'b': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
	    h = inputData[randomIndex]['h'],
	    b = inputData[randomIndex]['b'],
		a,
		question = {};

	h = parseInt(h);
    b = parseInt(b);
    a = b*h/2;
	
	question = {
		'type': 'single',
		'id': '0911',
		'question': 'If the height of triangle is ' + h + ' m and its breadth ' + b +' m. find the area'+ a + ' m? ',
		'options': {
			'A': a * parseInt(Math.random()*10),
			'B': a, 
			'C': a - parseInt(Math.random()*10),
			'D': a + parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
    }
	return question;
}
function problem0912(){
	var inputData = [{
		'cp': 45,
		'sp': 60
		},
		{
		'cp': 100,
		'sp': 120
		},
		{
		'cp': 700,
		'sp': 1000
		},
		{
		'cp': 450,
		'sp': 600
		},
		{
		'cp': 300,
		'sp': 500
		}],
		randomIndex = getRandomNumber(inputData.length),
	    cp = inputData[randomIndex]['cp'],
		sp = inputData[randomIndex]['sp'],
		p,
		pp,
		question = {};

	cp = parseInt(cp);
    sp = parseInt(sp);
	p = sp - cp ;
    pp = p/cp*100;

	question = {
		'type': 'single',
		'id': '0912',
		'question': 'An article is bought for  ' + cp + 'rs and sold for ' + sp + ' rs. what is the '+ pp +' profit percentage of the article?',
		'options': {
			'A': pp - parseFloat(Math.random()*10),
			'B': pp * parseFloat(Math.random()*10),
			'C': pp + parseFloat(Math.random()*10),
			'D': pp 
		},
		'answer': 'D',
		'author-id': '09'
    }
	return question;
}
function problem0913(){
	var inputData = [{
		'cp': 31.25,
		'sp': 33
		},
		{
		'cp': 31.25,
		'sp': 35
		},
		{
		'cp': 35.5,
		'sp': 40
		},
		{
		'cp': 34.5,
		'sp': 38
		},
		{
		'cp': 28.25,
		'sp': 30
		}],
		randomIndex = getRandomNumber(inputData.length),
	    cp = inputData[randomIndex]['cp'],
		sp = inputData[randomIndex]['sp'],
		p,
		pp,
		question = {};

	cp = parseFloat(cp);
    sp = parseInt(sp);
	p = sp - cp ;
    pp = p/cp*100;

	question = {
		'type': 'single',
		'id': '0913',
		'question': 'A pen is bought for  ' + cp + 'rs and sold for ' + sp + ' rs. what is the '+ pp +' profit percentage of the pen?',
		'options': {
			'A': pp - parseFloat(Math.random()*10),
			'B': pp * parseFloat(Math.random()*10),
			'C': pp + parseFloat(Math.random()*10),
			'D': pp 
		},
		'answer': 'D',
		'author-id': '09'
    }
	return question;
}
function problem0914(){
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
		'id': '0914',
		'question': 'A train ' + dist1 + ' m long passes a pole in' + time1 + 'seconds. How long will take to pass a plateform '+ dist2 +'m long?',
		'options': {
			'A': time * parseInt(Math.random()*10),
			'B': time - parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time
		},
		'answer': 'D',
		'author-id': '09'
	}
	return question;	
}
function problem0915(){
	var inputData = [{
		'initial': 46000,
		'ending': 59000,
		'years': 4
		},
		{
		'initial': 174000,
		'ending': 365000,
			'years': 8
		},
		{
		'initial': 45600,
		'ending': 69000,
			'years': 3
		},
		{
		'initial': 23800,
		'ending': 66000,
		'years': 5
		},
		{
		'initial': 11000,
		'ending': 40000,
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
		'id': '0915',
		'question': ' The population of a town increased from '+ initial +' to '+ ending+' in a '+ years +'. The average percent increase of population per year is:',
		'options': {
			'A': average,
			'B': average - parseInt(Math.random()*10),
			'C': average + parseInt(Math.random()*10),
			'D': average - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '09'
	}
	
	return question;
}
function problem0916(){
	var inputData = [{
		'speed':40,
		'time': 20
		},
		{
		'speed':22,
		'time':2
		},
		{
		'speed':14,
		'time':2
		},
		{
		'speed':15,
		'time': 2
		},
		{
		'speed':18,
		'time': 4
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
		'id': '0916',
		'question': 'A rider moving at a speed of' + speed + ' m/s and crosses a street in  '+ time +' mins .what is the ' + distance + 'distance of the street?',
		'options': {
			'A':  distance-parseInt(Math.random()*10),
			'B':  distance,
			'C':  distance+parseInt(Math.random()*10),
			'D':  distance-parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
	}
	
	return question;
}
function problem0917(){
	var inputData = [{
		'dist': 60,
		'time': 5
		},
		{
		'dist': 80,
		'time': 4
		},
		{
		'dist': 60,
		'time': 3
		},
		{
		'dist': 100,
		'time': 25
		},
		{
		'dist': 120,
		'time': 20
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
		'id': '0917',
		'question': 'A person crosses a ' + dist + ' m long street in '+ time+' minutes. What is speed in km per hour?', 
		'options': {
			'A': speed * parseInt(Math.random()*10),
			'B': speed,
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09',
	}
	return question;
}
function problem0918(){
	var inputData = [{
		'ss':15,
		'cs': 3,
		'time':10
		},
		{
		'ss':20,
		'cs': 4,
		'time':12
		},
		{
		'ss':15,
		'cs': 6,
		'time':10
		},
		{
		'ss':15,
		'cs': 4,
		'time':6
		},
		{
		'ss':16,
		'cs': 7,
		'time':14
		}
	],
		randomIndex = getRandomNumber(inputData.length),
	    ss = inputData[randomIndex]['ss'],
		cs = inputData[randomIndex]['cs'],
    	time = inputData[randomIndex]['time'],
	    speed,
	    distance,
		question = {};
		
	    ss = parseInt(ss);
		cs = parseInt(cs);
		time = parseInt(time/60);
		speed = ss+cs;
	    distance = speed*time;


	question = {
		'type': 'single',
		'id': '0918',
		'question': ' The speed of a boat in stil water in' + ss + 'km/hr and the rate of current is '+ cs + 'km/hr. The distance travlled downstream in ' + time + 'minutes is?',
		'options': {
			'A': distance-parseInt(Math.random()*10),
			'B': distance+parseInt(Math.random()*10),
			'C': distance-parseInt(Math.random()*10),
			'D': distance
		},
		'answer': 'D',
		'author-id': '09'
	}
	
	return question;
	
}
function problem0919(){
	var inputData = [{
		'speed':20,
		'time': 4
		},
		{
		'speed':22,
		'time':6
		},
		{
		'speed':44,
		'time':2
		},
		{
		'speed':25,
		'time': 6
		},
		{
		'speed':30,
		'time': 5
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
		'id': '0919',
		'question': 'A cyclist moving at a speed of' + speed + 'a crosses bridge in '+ time +'minitues.what is the length' + distance +' of the bridge?',
		'options': {
			'A':  distance-parseInt(Math.random()*10),
			'B':  distance,
			'C':  distance+parseInt(Math.random()*10),
			'D':  distance-parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
	}
	
	return question;
	
}
function problem0920(){
	var inputData = [{
		'sp': 2000,
		'cp': 1000
		},
		{
		'sp': 3500,
		'cp': 350
		},
		{
		'sp': 900,
		'cp': 400
		},
		{
		'sp': 800,
		'cp': 300
		},
		{
		'sp': 5000,
		'cp': 1000
		}],
		randomIndex = getRandomNumber(inputData.length),
		sp = inputData[randomIndex]['sp'],
		cp = inputData[randomIndex]['cp'],
		profit,
		profitPercentage,
		question = {};

	sp = parseInt(sp);
	cp = parseInt(cp);
	profit = sp - cp;
	pp = (profit/cp)*100;

	question = {
		'type': 'single',
		'id': '0920',
		'question': 'A shopkeeper sold an article for rs. ' + sp + '. If costPrice of article is ' + cp + '. Find the ' + pp + 'profit percentage?', 
		'options': {
			'A': pp,
			'B': pp * parseInt(Math.random()*10),
			'C': pp + parseInt(Math.random()*10),
			'D': pp - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '09',
	}
	
	return question;
	
}
