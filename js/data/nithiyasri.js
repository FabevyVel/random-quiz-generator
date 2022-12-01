function getRandomNumber(max){
	var randomNumber = max*Math.random()
	randomNumber = parseInt(randomNumber)
	return randomNumber
}
function problem071(){
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
		'id': '071',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice - parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice
		},
		'answer': 'D',
		'author-id': '07'
	}
	
	return question;
	
}


function problem072(){
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
		'time': 70
		},
		{
		'distance': 10,
		'time': 60
		},
		{
		'distance': 10,
		'time': 80
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
		'id': '072',
		'question': 'A train is coming in ' + distance + 'km from north direction at ' + time + 'sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '07'
	}
	
	return question;
	
}

function problem073(){
	var inputData = [{
		'sellingprice': 2500,
		'costprice': 2000
		},
		{
		'sellingprice': 3500,
		'costprice': 2800
		},
		{
		'sellingprice': 2500,
		'costprice': 1800
		},
		{
		'sellingprice': 1000,
		'costprice': 900
		},
		{
		'sellingprice': 2000,
		'costprice': 1000
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellingprice= inputData[randomIndex]['sellingprice'],
		costprice= inputData[randomIndex]['costprice'],
		profit1,
		profit,
		question = {};

	sellingprice=parseInt(sellingprice);
	costprice=parseInt(costprice);
	profit1=sellingprice-costprice;
	profit=((profit1/costprice)*100);

	question = {
		'type': 'single',
		'id': '073',
		'question': 'A shopkeeper sold an article for ' + sellingprice + 'if the cost price of the article is  ' + costprice + 'find the profit percent',
		'options': {
			'A': profit-parseInt(Math.random()*10),
			'B': profit-parseInt(Math.random()*10),
			'C': profit,
			'D': profit+parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '07'
	}
	
	return question;
	
}
function problem074(){
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
		'id': '074',
		'question': 'A shopkeeper bought a watch for rs'  + costprice + 'at what price should he sell the watch to earn a profit of'+profitp,
		'options': {
			'A': sellingprice+parseInt(Math.random()*10),
			'B': sellingprice-parseInt(Math.random()*10),
			'C': sellingprice,
			'D': sellingprice-parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '07'
	}
	
	return question;
	
}
function problem075(){
	var inputData = [{
		'cp':27,
		'sp':30
		},
		{
		'cp':27,
		'sp':70
		},
		{
		'cp': 27,
		'sp':50
		},
		{
		'cp': 27,
			'sp':40
		},
		{
		'cp': 27,
		'sp':35
		}],
		randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		sp= inputData[randomIndex]['sp'],
		profit1,
		profit,
		question = {};

	cp=parseInt(cp);
	sp=parseInt(sp);
	profit1=sp-cp;
	profit=((profit1/cp)*100);

	question = {
		'type': 'single',
		'id': '075',
		'question': 'if a retall seller buys' +sp + 'pencils at the marked of '  +  cp  +'find the profit percent on the profit',
		'options': {
			'A': profit,
			'B': profit-parseInt(Math.random()*10),
			'C': profit+parseInt(Math.random()*10),
			'D':profit-parseInt(Math.random()*10),
		},
		'answer': 'a',
		'author-id': '07'
	}
	
	return question;
	
}
function problem076(){
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
		'id': '076',
		'question': 'Ramesh bought a chair for RS ' + costprice + ' and sold it suressh ,if ramesh earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '07'
	}
	
	return question;
	
}
function problem077(){
	var inputData = [{
		'distance':600,
		'time': 8
		},
		{
		'distance':600,
			'time': 5
		},
		{
		'distance':600,
			'time': 3
		},
		{
		'distance':600,
			'time': 6
		},
		{
			'distance':600,
			'time':7
		}
	],
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
		'id': '077',
		'question': 'a person crosses a' + distance + 'long street in ' + time + 'minitues what is his speed in km per hour',
		'options': {
			'A':  speed+parseInt(Math.random()*10),
			'B':  speed - parseInt(Math.random()*10),
			'C':  speed,
			'D':  speed - parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '07'
	}
	
	return question;
	
}
function problem078(){
	var inputData = [{
		'cp':695,
		'sp': 900
		},
		{
		'cp':655,
		'sp': 900
		},
		{
		'cp':675,
		'sp': 900
		},
		{
		'cp':665,
		'sp': 900
		},
		{
		'cp':685,
		'sp': 900
		}
	],
		randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		sp = inputData[randomIndex]['sp'],
	    profit1,
    	profit,
		question = {};
		
	    cp=parseInt(cp);
		sp=parseInt(sp);
		profit1=sp-cp;
		profit=((profit1/cp)*100);

	question = {
		'type': 'single',
		'id': '078',
		'question': 'an article is bought for'   + cp + 'and sold for '  + sp +  'find the gain percent',
		'options': {
			'A':  profit-parseInt(Math.random()*10),
			'B':  profit+parseInt(Math.random()*10),
			'C':  profit-parseInt(Math.random()*10),
			'D':  profit
		},
		'answer': 'd',
		'author-id': '07'
	}
	
	return question;
	
}
function problem079(){
	var inputData = [{
		'speed1':140,
		'time1': 2,
		'time2':1
		},
		{
		'speed1':140,
		'time1': 2,
		'time2':1
		},
		{
		'speed1':150,
		'time1': 2,
			'time2':1
		},
		{
		'speed1':160,
		'time1': 2,
			'time2':1
		},
		{
		'speed1':180,
		'time1': 2,
			'time2':1
		}
	],
		randomIndex = getRandomNumber(inputData.length),
		speed1= inputData[randomIndex]['speed1'],
		time1= inputData[randomIndex]['time1'],
	    time2= inputData[randomIndex]['time2'],
	    distance,
    	speed,
		question = {};
		
	    speed1=parseInt(speed1);
		time1=parseInt(time1);
		time2=parseInt(time2);
		distance=speed1*time1;
		speed=(distance/time2);

	question = {
		'type': 'single',
		'id': '079',
		'question': 'a car running speed of'   +  speed1   +  'reached its destination in'   + time1+  ' hr if the car wants to reach at its destination in'    + time2 +  ' hr at what speed it needs to travel',
		'options': {
			'A':  speed,
			'B':  speed+parseInt(Math.random()*10),
			'C':  speed-parseInt(Math.random()*10),
			'D':  speed-parseInt(Math.random()*10)
		},
		'answer': 'a',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0710(){
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
		'id': '0710',
		'question': 'a jogger is running at a speed of'   +  speed   +  'in what time he will cross a track of length'   + distance,
		'options': {
			'A':  time,
			'B':  time-parseInt(Math.random()*10),
			'C':  time+parseInt(Math.random()*10),
			'D':  time-parseInt(Math.random()*10)
		},
		'answer': 'a',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0711(){
	var inputData = [{
		'speed':20,
		'time': 2
		},
		{
		'speed':22,
			'time':2
		},
		{
		'speed':24,
			'time':2
		},
		{
		'speed':25,
			'time': 2
		},
		{
		'speed':26,
			'time': 2
		}
	],
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
		'id': '0711',
		'question': 'a cyclist moving at a speed of'   +  speed   +    'a crosses bridge in  '+ time +'minitues.what is the length of the bridge?',
		'options': {
			'A':  distance-parseInt(Math.random()*10),
			'B':  distance,
			'C':  distance+parseInt(Math.random()*10),
			'D':  distance-parseInt(Math.random()*10)
		},
		'answer': 'b',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0712(){
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
		'id': '0712',
		'question': 'a train'   +   distance1 +  'm long passes a pole in'  +time1 + 'seconds.how long will take to pass a plateform '+distance2+'m long',
		'options': {
			'A': time-parseInt(Math.random()*10),
			'B': time,
			'C': time+parseInt(Math.random()*10),
			'D': time-parseInt(Math.random()*10)
		},
		'answer': 'b',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0713(){
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
		'id': '0713',
		'question': 'a boat can travel with a speed of'   +   speed1 +  'km/hr is still water.if the speed of the stream is'  +speed2 + 'find the time taken by the boat to go '+distance,
		'options': {
			'A': time-parseInt(Math.random()*10),
			'B': time,
			'C': time+parseInt(Math.random()*10),
			'D': time-parseInt(Math.random()*10)
		},
		'answer': 'b',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0714(){
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
		'id': '0714',
		'question': ' the speed of a boat in stil water in'   +   speed1 +  'km/hr and the rate of current is '  +speed2 + 'km/hr.the distance travlled downstream in '+time+'minutes is?',
		'options': {
			'A': distance-parseInt(Math.random()*10),
			'B': distance+parseInt(Math.random()*10),
			'C': distance-parseInt(Math.random()*10),
			'D': distance
		},
		'answer': 'd',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0715(){
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
		'id': '0715',
		'question': ' ashok secures average of  '   +   average1 +  'marks in  '  +subjects1 + 'subjects if the average of amrks in    '+subjects2+'is  '+average2+'how many marks did he secure in the 6th subject?',
		'options': {
			'A': mark-parseInt(Math.random()*10),
			'B': mark+parseInt(Math.random()*10),
			'C': mark-parseInt(Math.random()*10),
			'D': mark
		},
		'answer': 'd',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0716(){
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
		'id': '0716',
		'question': ' in one hour a boat goes  '  +  speed1   + 'km/hr  along the stream and  '    +speed2   +   'km/hr  against the stream . the speed of the boat in still water is',
		'options': {
			'A': speed-parseInt(Math.random()*10),
			'B': speed,
			'C': speed+parseInt(Math.random()*10),
			'D': speed+parseInt(Math.random()*10)
		},
		'answer': 'b',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0717(){
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
		c,
		question = {};
		
	    add=C/(A+B+C)
        c=add*total
	question = {
		'type': 'single',
		'id': '0717',
		'question': 'A:B:C is in ratio of ' + A + ':' + B + ':' + C + ' ,how much money will c get out of ' + total + '.',
		'options': {
			'A': c + parseInt(Math.random()*10),
			'B': c- parseInt(Math.random()*10),
			'C': c,
			'D': c - parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0718(){
	var inputData = [{
		'overs':10 ,
		'runrate': 3.2,
		'overs1': 42,
		'target':282
		},
		{
		'overs':10 ,
		'runrate': 3.2,
		'overs1': 40,
		'target':282
		},
		{
		'overs':12 ,
		'runrate': 3.2,
		'overs1': 40,
		'target':282
		},
		{
		'overs':18 ,
		'runrate': 3.2,
		'overs1': 40,
		'target':288
		},
		{
		'overs':10 ,
		'runrate': 3.8,
		'overs1': 40,
		'target':282
		}],
		randomIndex = getRandomNumber(inputData.length),
		overs= inputData[randomIndex]['overs'],
		runrate= inputData[randomIndex]['runrate'],
		overs1= inputData[randomIndex]['overs1'],
		target= inputData[randomIndex]['target'],
		scorerate,
		question = {};
		
		target=parseInt(target);
		overs1=parseInt(overs1);
		overs=parseInt(overs);
		runrate=parseInt(runrate);
	    scorerate=((target-(runrate*overs))/40);
	question = {
		'type': 'single',
		'id': '0718',
		'question': 'in the first  ' + overs + '  of a cricket game.the run rate was only  ' + runrate + 'what should be the run rate in the remaining   ' + overs1 + 'overs to reach the target of   ' + target + 'runs',
		'options': {
			'A': scorerate + parseInt(Math.random()*10),
			'B': scorerate,
			'C': scorerate+ parseInt(Math.random()*10),
			'D':scorerate - parseInt(Math.random()*10)
		},
		'answer': 'b',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0719(){
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
		'id': '0719',
		'question': 'Find the cube root value of '+ value+'? ',
		'options': {
			'A':cubeRoot - parseInt(Math.random()*10),
			'B': cubeRoot - parseInt(Math.random()*10),
			'C': cubeRoot + parseInt(Math.random()*10),
			'D':  cubeRoot
		},
		'answer': 'D',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0720(){
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
		'id': '0720',
		'question': 'What is the area of triangle with base '+ base +'m and '+ height +'m ?',
		'options': {
			'A': areaTriangle,
			'B': areaTriangle - parseInt(Math.random()*10),
			'C': areaTriangle + parseInt(Math.random()*10),
			'D': areaTriangle - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '07'
	}
	
	return question;
	
}


function problem0721(){
	var inputData = [{
		'votes1': 1156,
		'votes2': 7050,
		'votes3':11628
		},
		{
		'votes1': 1050,
		'votes2': 761,
		'votes3':11628
		},
		{
		'votes1': 1136,
		'votes2': 7636,
		'votes3':11628
		},
		{
		'votes1': 1156,
		'votes2': 7686,
		'votes3':11638
		},
		{
		'votes1': 1156,
		'votes2': 766,
		'votes3':11630
		}],
	randomIndex = getRandomNumber(inputData.length),
		votes1= inputData[randomIndex]['votes1'],
		votes2 = inputData[randomIndex]['votes2'],
		votes3= inputData[randomIndex]['votes3'],
		totalVotes,
		winningVotes,
		question = {};
		
    votes1=parseInt(votes1);
	votes2=parseInt(votes2);
	votes3=parseInt(votes3);
	totalVotes=votes1+votes2+votes3;
	winningVotes=((votes3/totalVotes)*100);

	question = {
		'type': 'single',
		'id': '0721',
		'question': 'three candidates contested an election and recieved'+votes1+votes2+votes3+'votes respectively.what percentage of the total votes did the winning candidates get?' ,
		'options': {
			'A': winningVotes,
			'B': winningVotes- parseInt(Math.random()*10),
			'C': winningVotes + parseInt(Math.random()*10),
			'D': winningVotes / parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0722(){
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
		'id': '0722',
		'question': 'a sum of money amountsto Rs'+price2+'  after   '+years1+'and  Rs'+price1+'after  ' +years+'at the same rate of simple intrest.The rate of intrest pee annum is?',
		'options': {
			'A': years* parseInt(Math.random()*10),
			'B': years- parseInt(Math.random()*10),
			'C': years + parseInt(Math.random()*10),
			'D': years
		},
		'answer': 'D',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0723(){
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
		price1=inputData[randomIndex]['price1'],
		years=inputData[randomIndex]['years'],
		percentage=inputData[randomIndex]['percentage'],
		
		amount,
		question={},
		amount=(100*price1)/(percentage*years),
		
		question = {
		  'type': 'single',
		  'id': '0723',
		  'question': 'if the price  is ' +price1 + ' and years  is'  +years +' and percentage is ?'+percentage+'find the amount',
		  'options': {
			'A': amount, 
			'B': amount - parseInt(Math.random()*10),
			'C': amount + parseInt(Math.random()*10),
			'D': amount - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '07',
		}
	
	return question;
}
function problem0724(){
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
		'id': '0724',
		'question': 'The population of a town is increased from '+ population1 +' to '+ population2 +'  in one year. What is the percentage increase in the population?',
		'options': {
			'A': percentageincrease,
			'B': percentageincrease - parseInt(Math.random()*10), 
			'C': percentageincrease + parseInt(Math.random()*10),
			'D': percentageincrease - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '07'
	}
	
	return question;
	
}
	function problem0725(){
			var inputData = [{
				'price1': 500,
				'price2': 15,
				'simpleintrest': 4
				},
				{
				'price1': 556,
				'price2': 54,
				'simpleintrest': 3.7
				},
				{
				'price1': 815,
				'price2': 54,
				'simpleintrest': 4.6
				},
				{
				'price1': 450,
				'price2': 81,
				'simpleintrest': 4.5
				}],
				randomIndex = getRandomNumber(inputData.length),
				price1= inputData[randomIndex]['price1'],
				price2= inputData[randomIndex]['price2'],
				simpleintrest= inputData[randomIndex]['simpleintrest'],
			    s,
				question = {};
		
				t=(100*price2)/(price1*s);

			question = {
				'type': 'single',
				'id': '07',
				'question': 'How much time will it take for an amount of Rs. ' + price1 + ' to yield Rs. ' + price2 + ' as interest at ' + simpleintrest + '% per annum of simple interest?',
				'options': {
					'A': s- parseInt(Math.random()*10), 
					'B': s - parseInt(Math.random()*10),
					'C': s + parseInt(Math.random()*10),
					'D': s ,
				},
				'answer': 'D',
				'author-id': '07'
			}
	
			return question;
	
		}
	function problem0726(){
	 var inputData = [{
		'speed1':10,
		'speed2':16,
		'dis':8
		},
		{
		'speed1':10,
		'speed2': 12,
			'dis':4
		},
		{
		'speed1':10,
		'speed2': 14,
			'dis':6
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
		'id': '0726',
		'question': 'Two boys start running at the same time in the same direction at a speed of '+ speed1 +' km/hr and '+ speed2 +' km/hr respectively. In what time they will be '+ dis +' km apart?',
		'options': {
			'A': time+parseInt(Math.random()*10),
			'B': time,
			'C': time*parseInt(Math.random()*10),
			'D': time+parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0727(){
	var inputData = [{
		'average':20,
	     },
		{
		'average':40,
		},
		{
		'average':35,
		},
		{
		'average':20,
		}],
		randomIndex = getRandomNumber(inputData.length),
	    average= inputData[randomIndex]['average'],
		newAverage,
		question = {};
		   
		average=parseInt(average);
		newAverage=average*2;  
		   

	question = {
		'type': 'single',
		'id': '0727',
		'question': 'average of five number is  '+ average +' if each number is multiplied by  2. what will be the new average ?',
		'options': {
			'A': newAverage+parseInt(Math.random()*10),
			'B': newAverage-parseInt(Math.random()*10),
			'C': newAverage+parseInt(Math.random()*10),
			'D': newAverage
		},
		'answer': 'D',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0728(){
	var inputData = [{
		'correctnumber': 60,
		'wrongnumber':10
		},
		{
		'correctnumber': 50,
		'wrongnumber':10
		},
		{
		'correctnumber': 80,
		'wrongnumber':10
		},
		{
		'correctnumber': 30,
		'wrongnumber':10
		},
		{
		'correctnumber': 40,
		'wrongnumber':10
		}],
		randomIndex = getRandomNumber(inputData.length),
		correctnumber=inputData[randomIndex]['correctnumber'],
		wrongnumber=inputData[randomIndex]['wrongnumber'],
	    errorpercentage,
		correctnumber=parseInt(correctnumber),
		wrongnumber=parseInt(wrongnumber),
		errorpercentage=(correctnumber - wrongnumber)/correctnumber,
		errorpercentage=errorpercentage*100,
		question={};
		
		question = {
		'type': 'single',
		'id': '0728',
		'question': 'A student multiplied a number by ' + wrongnumber + 'instead of '+correctnumber+  'what is the percentage error in the calculation?',
		'options': {
			'A': errorpercentage- parseInt(Math.random()*10),
			'B': errorpercentage,
			'C': errorpercentage + parseInt(Math.random()*10),
			'D': errorpercentage - parseInt(Math.random()*10),
		},
		'answer': 'B',
		'author-id': '07',
	}
	
	return question;
}
function problem0729(){
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
		  'id': '0729',
		  'question': 'if the upstreamspeed  is ' + upstreamspeed + ' and downstreamspeed  is'  + downstreamspeed+' what is boat speed?',
		  'options': {
			'A': boatspeed- parseInt(Math.random()*10), 
			'B': boatspeed,
			'C': boatspeed + parseInt(Math.random()*10),
			'D': boatspeed - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '07'
		}
	
	return question;
}
function problem0730(){
	var inputData = [{
		'loss': 20,
		'costPrice': 7000
		},
		{
		'loss': 10,
		'costPrice': 8000
		},
		{
		'loss': 5,
		'costPrice': 8500
		},
		{
		'loss': 10,
		'costPrice': 5000
		},
		{
		'loss': 12,
		'costPrice': 9800
		}],
		randomIndex = getRandomNumber(inputData.length),
		loss= inputData[randomIndex]['loss'],
		costPrice = inputData[randomIndex]['costPrice'],
		sp,
		question = {};

	loss=parseInt(loss);
	costPrice=parseInt(costPrice);
	sp=((100-loss)/100)*costPrice;

	question = {
		'type': 'single',
		'id': '0730',
		'question': 'A man purchase a TV for Rs. '+ costPrice+' and sells it at '+loss+'. What is the sellingPrice of Tv?', 
		'options': {
			'A': sp - parseInt(Math.random()*10),
			'B': sp+ parseInt(Math.random()*10),
			'C': sp,
			'D': sp-parseInt(Math.random()*10)
	
		},
		'answer': 'D',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0731(){
	var inputData = [{
		'perimeter': 43,		
		},
		{
		'perimeter': 98,
		},
		{
		'perimeter': 84,	
		},
		{
		'perimeter': 41,		
		},
		{
		'perimeter': 64,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		perimeter= inputData[randomIndex]['perimeter'],
		squareSide,
		question = {};

	perimeter=parseInt(perimeter);
	squareSide=perimeter/4;

	question = {
		'type': 'single',
		'id': '0731',
		'question': 'If the perimeter of square is ' + perimeter+', find one of the side of square?',
		'options': {
			'A':squareSide - parseInt(Math.random()*10),
			'B': squareSide - parseInt(Math.random()*10),
			'C': squareSide,
			'D':  squareSide+ parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0732(){
	var inputData = [{
		'area': 100,		
		},
		{
		'area': 780,
		},
		{
		'area': 200,	
		},
		{
		'area': 310,		
		},
		{
		'area': 550,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		area= inputData[randomIndex]['area'],
		areaSquare,
		question = {};

	area=parseInt(area);
	areaSquare=area*area;

	question = {
		'type': 'single',
		'id': '0732',
		'question': 'What is the area of square field whose side is '+ area+'m ?',
		'options': {
			'A':areaSquare,
			'B': areaSquare- parseInt(Math.random()*10),
			'C': areaSquare + parseInt(Math.random()*10),
			'D':  areaSquare- parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0733(){
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
		'id': '0733',
		'question': 'A fruit seller had some apples. He sells' + percentage + 'oranges and still has' + apples + ' oranges. Originally, he had?' ,
		'options': {
			'A': original - parseFloat(Math.random()*10),
			'B': original - parseInt(Math.random()*10),
			'C': original + parseFloat(Math.random()*10),
			'D': original
		},
		'answer': 'D',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0734(){
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
		'id': '0734',
		'question':'The sum of ages of'+ children + 'children born at the intervals of' + years + 'years each is'+ age + 'years. What is the age of the youngest child?',
		'options': {
			'A': youngestChild - parseFloat(Math.random()*10),
			'B': youngestChild + parseFloat(Math.random()*10),
			'C': youngestChild,
			'D': youngestChild - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0735(){
	var inputData = [{
		'average':50,
		'years': 35,
		'teacher': 6,
		'teacher1':2
		},
		{
		'average':80,
		'years': 65,
		'teacher': 12,
			'teacher1':8
		},
		{
		'average':135,
		'years': 40,
		'teacher': 10,
		'teacher1':6
		},
		{
		'average':30,
		'years': 15,
		'teacher': 2,
			'teacher1': 3
		}],
		randomIndex = getRandomNumber(inputData.length),
		average = inputData[randomIndex]['average'],
		years = inputData[randomIndex]['years'],
		teacher = inputData[randomIndex]['teacher'],
		teacher1 = inputData[randomIndex]['teacher1'],
		a,
		sum,
		age,
		x,
		includes,
		question = {};
	

	a=average+teacher;
	sum=years+teacher1;
	age=average*years;
	x=a*sum;
	includes=x-age;


	question = {
		'type': 'single',
		'id': '0735',
		'question':'The average age of' + average + 'boys in a class is'+ years + 'years. If we include the age of' + teacher + 
		'teachers, the average age increases by' + teacher1 + ' . What is the sum of ages of the two teachers?',
		'options': {
			'A': includes - parseInt(Math.random()*10),
			'B': includes - parseInt(Math.random()*10),
			'C': includes + parseInt(Math.random()*10),
			'D': includes
		},
		'answer': 'D',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0736()
{
	var inputData = [{
		'person1': 16,
		'average1': 50.15,
		'person2': 8,
		'average2': 45.15
		},
		{
		'person1': 17,
		'average1': 51.35,
		'person2': 5,
		'averag2': 46.15
		},
		{
		'person1': 18,
		'average1': 52.25,
		'person2': 7,
		'average2': 44.15
		},
		{
		'person1': 10,
		'average1': 62.55,
		'person2': 2,
		'average2': 33.33
		},
		{
		'person1': 12,
		'average1': 55.35,
		'person2': 6,
		'average2': 44.35
		}],
		randomIndex = getRandomNumber(inputData.length),
		person1= inputData[randomIndex]['person1'],
		average1= inputData[randomIndex]['average1'],
		person2= inputData[randomIndex]['person2'],
		average2= inputData[randomIndex]['average2'],
		average,
		question = {};

	average=(person1*average1+person2*average2)/(person1+person2);
	average=parseInt(average);

	question = {
		'type': 'single',
		'id': '0736',
		'question': "The average weight of"+person1+"boys in a class is"+average1+"kg and that of the remaining"+person2+"boys is"+average2+"kg. Find the average weights of all the boys in the class.",
		'options': {
			'A': average - parseInt(Math.random()*10),
			'B': average,
			'C': average + parseInt(Math.random()*10),
			'D': average - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '07'
	}
	
	return question;
	
}
function problem0737(){
	var inputData = [{
		'principal': 4000,
		'Interest': 4,
		'Years': 6
		},
		{
		'principal': 5000,
		'Interest': 8,
		'Years': 2
		},
		{
		'principal': 6500,
		'rateOfInterest': 4,
		'Years': 6
		},
		{
		'principal': 6500,
		'Interest': 4,
		 'Years': 8
		},
		{
		'principal': 7500,
		'Interest': 4,
		'Years': 6
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal = inputData[randomIndex]['principal'],
		Interest = inputData[randomIndex]['Interest'],
		Years = inputData[randomIndex]['Years'],
		SI,
		question = {};

	principal = parseInt(principal);
	Interest = parseInt(Interest);
	Years = parseInt(Years);
	simpleInterest = (principal*Interest*Years)/100;

	question = {
		'type': 'single',
		'id': '0737',
		'question': 'Find the Simple Interest when Principal is  ' + principal+ ',Rate of Interest is   '+Interest  +'% per annum and Time is   '+Years+ 'years.?',
		'options': {
			'A': SI,
			'B': SI + parseInt(Math.random()*10),
			'C': SI/parseInt(Math.random()*10),
			'D': SI - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '07'
	}
	
	return question;
		
}
function problem0738(){
	var inputData = [{
		'sum': 550,
		'total': 8
		},
		{
		'sum': 415,
		'total': 5
		},
		{
		'sum': 850,
			'total': 9
		},
		{
		'sum': 84,
		'total': 6
		},
		{
		'sum': 60,
			'total': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		sum = inputData[randomIndex]['sum'],
		total = inputData[randomIndex]['total'],
		average,
		question = {};

	sum = parseInt(sum);
	total = parseInt(total);
	average = sum/total;

	question = {
		'type': 'single',
		'id': '0738',
		'question': ' The sum of   ' + total+ " " + 'numbers   ' + sum +'. Find their average number.?',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average,
			'C': average - parseInt(Math.random()*10),
			'D': average - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '07'
	}
	
	return question;	
}
function problem0739(){
	var inputData = [{
		'length': 24,
		'breadth': 16
		},
		{
		'length': 13,
		'breadth': 12
		},
		{
		'length': 43,
		'breadth': 22
		},
		{
		'length': 15,
		'breadth': 10
		},
		{
		'length': 50,
		'breadth': 22
		}],
		randomIndex = getRandomNumber(inputData.length),
		length = inputData[randomIndex]['length'],
		breadth = inputData[randomIndex]['breadth'],
		p,
		question = {};

	length = parseInt(length);
	breadth = parseInt(breadth);
	p = 2*(length+breadth);

	question = {
		'type': 'single',
		'id': '0739',
		'question': 'Find the Perimeter of the Rectangle with length   '+  length +'cm and breadth   '+ breadth + 'cm ?',
		'options': {
			'A': p + parseInt(Math.random()*10),
			'B': p - parseInt(Math.random()*10),
			'C': p- parseInt(Math.random()*10),
			'D': p 
		},
		'answer': 'D',
		'author-id': '07'
	}
	
	return question;	
}
function problem0740(){
	var inputData = [{
		'a': 4000,
		'b': 2200
		},
		{
		'a': 9000,
		'b': 3500
		},
		{
		'a': 5000,
		'b': 3000
		},
		{
		'a': 4000,
		'b': 1800
		},
		{
		'a': 6000,
		'b': 2000
		}],
		randomIndex = getRandomNumber(inputData.length),
		a= inputData[randomIndex]['a'],
		b = inputData[randomIndex]['b'],
		c,
		question = {};

	a = parseInt(a);
	b = parseInt(b);
	c = ((a-b)/a)*100;

	question = {
		'type': 'single',
		'id': '0740',
		'question': 'Anu salary is Rs.    '+ a+'and Mani salary is Rs.   '+ b + '.How much % is Mani salary is less than Anu salary?',
		'options': {
			'A': c- parseInt(Math.random()*10),
			'B': c,
			'C': c + parseInt(Math.random()*10), 
			'D': c - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '07'
	}
	
	return question;	
}
