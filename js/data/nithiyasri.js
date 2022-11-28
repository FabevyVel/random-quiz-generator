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

