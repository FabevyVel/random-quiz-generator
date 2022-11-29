function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem1601(){
	var inputData = [
		{
            'monthly1': 4000,
            'monthly2': 6000,
            'monthly3': 3000
            },{
                'monthly1': 3000,
                'monthly2': 000,
                'monthly3': 3000
                },{
                    'monthly1': 4000,
                    'monthly2': 5000,
                    'monthly3': 2000
                    },{
                        'monthly1': 4000,
                        'monthly2': 5000,
                        'monthly3': 7000
                        },{
                            'monthly1': 9000,
                            'monthly2': 6000,
                            'monthly3': 5000
                            }],
		randomIndex = getRandomNumber(inputData.length),
		monthly1= inputData[randomIndex]['monthly1'],
		monthly2= inputData[randomIndex]['monthly2'],
        monthly3 = inputData[randomIndex]['monthly3'],
        
        
		p,
		question = {};

	p=((monthly1*2+monthly2*2+monthly3*2)/2-(monthly3*2));

	question = {
		'type': 'single',
		'id': '161',
		'question': 'The average monthly income of p and q is '+monthly1+' the average, monthly income q and r ' + monthly +
                'the average of p and r '+ monthly3 +' the monthly income of p is:'
		'option': {
			'A': p,
			'B': p - parseInt(Math.random()*10),
			'C': p + parseInt(Math.random()*10),
			'D': p - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '1601'
	}
	
	return question;
	
}

function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem1601(){
	var inputData = [
		{
            'monthly1': 4000,
            'monthly2': 6000,
            'monthly3': 3000
            },{
                'monthly1': 3000,
                'monthly2': 000,
                'monthly3': 3000
                },{
                    'monthly1': 4000,
                    'monthly2': 5000,
                    'monthly3': 2000
                    },{
                        'monthly1': 4000,
                        'monthly2': 5000,
                        'monthly3': 7000
                        },{
                            'monthly1': 9000,
                            'monthly2': 6000,
                            'monthly3': 5000
                            }],
		randomIndex = getRandomNumber(inputData.length),
		monthly1= inputData[randomIndex]['monthly1'],
		monthly2= inputData[randomIndex]['monthly2'],
        monthly3 = inputData[randomIndex]['monthly3'],
        
        
		p,
		question = {};

	p=((monthly1*2+monthly2*2+monthly3*2)/2-(monthly3*2));

	question = {
		'type': 'single',
		'id': '161',
		'question': 'The average monthly income of p and q is '+monthly1+' the average, monthly income q and r ' + monthly +
                'the average of p and r '+ monthly3 +' the monthly income of p is:'
		'option': {
			'A': p,
			'B': p - parseInt(Math.random()*10),
			'C': p + parseInt(Math.random()*10),
			'D': p - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '1601'
	}
	
	return question;
	
}

function problem1603(){
	var inputData = [{
		'electricity_bill':35,
		'deducted': 150
		},
		{
		'electricity_bill':50,
		'deducted': 200
		},
		{
		'electricity_bill':60,
		'deducted': 180
		},
		{
		'electricity_bill':90,
		'deducted': 300
		}],
		randomIndex = getRandomNumber(inputData.length),
		electricity_bill= inputData[randomIndex]['electricity_bill'],
		deducted = inputData[randomIndex]['deducted'],
		bill,
		question = {};
	
	
	to_pay=deducted-electricity_bill;
	bill=(deducted/to_pay)*100;

	question = {
		'type': 'single',
		'id': '1115',
		'question': 'If' + electricity_bill + '% of an electricity bill is deducted then rs' + deducted + 'is still to be paid .How much was the original bill',
		'options': {
			'A': bill,
			'B': bill + parseInt(Math.random()*10),
			'C': bill + parseInt(Math.random()*10),
			'D': bill - parseFloat(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '1603'
	}
	
	return question;
	
}

function problem1604(){
	var inputData = [{
		'costprice': 20090,
		'loss': 40
		},
		{
		'costprice': 50090,
		'loss': 50
		},
		{
		'costprice': 40050,
		'loss': 90
		},
		{
		'costprice': 80600,
		'loss': 70
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
		'id': '1604',
		'question': 'A man purchase tv for RS ' + costprice + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sellingprice - parseInt(Math.random()*10),
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice
		},
		'answer': 'D',
		'author-id': '16'
	}
	
	return question;
	
}

function problem1605(){
	var inputData = [{
		'costprice': 15040,
		'profit': 65
		},
		{
		'costprice': 17040,
		'profit': 95
		},
		{
		'costprice': 10020,
		'profit': 75
		},
		{
		'costprice': 10480,
		'profit': 65
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
		'id': '1605',
		'question': 'pradeep bought a chai for RS ' + costprice + ' and sold it suressh ,if pradeep earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice, 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice + parseInt(Math.random()*10),
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '16'
	}
	
	return question;
	
}

function problem1606(){
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
    'id': '1606',
    'question': 'In the first ' + over1 + ' overs of a cricket game, the run rate was only ' + rr + '. What should be the run rate in the remaining ' + over2 + ' overs to reach the target of ' + runs + ' runs?',
    'options': {
        'A': runrate - parseInt(Math.random()*10),
        'B': runrate - parseInt(Math.random()*10),
        'C': runrate+ parseInt(Math.random()*10),
        'D': runrate
    },
    'answer': 'D',
    'author-id': '16'
}

return question;

}

function problem1607(){
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
    'id': '1607',
    'question': 'A man speed  is ' + manspeed + ' km/hr and the speed of the bike is ' + bike + ' km/hr. The mans speed against the bike is',
    'options': {
        'A': b - parseInt(Math.random()*10),
        'B': b - parseInt(Math.random()*10),
        'C': b + parseInt(Math.random()*10),
        'D': b
    },
    'answer': 'D',
    'author-id': '16'
}

return question;

}

function problem1608(){
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
		'id': '1608',
		'question': 'The speed of a boat in still water in' +distance+ 'and the rate of current is' +time1+ 'The distance travelled downstream in' +time2+ 'is',
		'options': {
			 'A'	:1.2,
             'B': 1.8,
             'C' :2.4,
             'D': rate,
		},
		'answer': 'D',
		'author-id': '16'
	}

	return question;
}

function problem1609(){
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
		'id': '1609',
		'question': 'what is the area of a triangle with' +base+ 'and' +height+ 'meters',
		'options': {
			 'A':area,
             'B': 40,
             'C' :52,
             'D': 25,
		},
		'answer': 'a',
		'author-id': '16'
	}

	return question;
}

function problem1610(){
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
		'id': '1610',
		'question': + typist + 'typists can type' + pages + 'pages in' + hours + 
					'hours.Find the average number of pages typed by each typist in an hour.',
		'options': {
			'A': total - parseInt(Math.random()*10),
			'B': total - parseInt(Math.random()*10),
			'C': total + parseInt(Math.random()*10),
			'D': total
		},
		'answer': 'D',
		'author-id': '16'
	}
	
	return question;
	
}

function problem1611(){
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
		'id': '1611',
		'question': 'Mohan gets a salary of '+ salaryA +', '+salaryB+ ', '+salaryC+', '+salaryD+' and '+salaryE +' for 5 months.How much salary he must have in the sixth month so that he gets an average of '+ average +'',
		'options': {
			'A': finalSalary,
			'B': finalSalary - parseInt(Math.random()*10),
			'C': finalSalary + parseInt(Math.random()*10),
			'D': finalSalary - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '16'
	}
	
	return question;
}

function problem1612(){
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
		'id': '1612',
		'question': 'If the perimeter of square is ' + perimeter+', find one of the side of square?',
		'options': {
			'A':side - parseInt(Math.random()*10),
			'B': side - parseInt(Math.random()*10),
			'C': side + parseInt(Math.random()*10),
			'D':  side
		},
		'answer': 'D',
		'author-id': '16'
	}
	
	return question;
	
}

function problem1613(){
	var inputData = [{
		'value': 78367		
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
		'id': '1613',
		'question': 'Find the cube root value of '+ value+'? ',
		'options': {
			'A':cubeRoot - parseInt(Math.random()*10),
			'B': cubeRoot - parseInt(Math.random()*10),
			'C': cubeRoot + parseInt(Math.random()*10),
			'D':  cubeRoot
		},
		'answer': 'D',
		'author-id': '16'
	}
	
	return question;
	
}

function problem1614(){
	var inputData = [{
		'lossPercentage': 25,
		'costPrice': 6000
		},
		{
		'lossPercentage': 15,
		'costPrice': 8000
		},
		{
		'lossPercentage': 35,
		'costPrice': 30000
		},
		{
		'lossPercentage': 10,
		'costPrice': 5000
		},
		{
		'lossPercentage': 12,
		'costPrice': 9800
		}],
		randomIndex = getRandomNumber(inputData.length),
		lossPercentage= inputData[randomIndex]['lossPercentage'],
		costPrice = inputData[randomIndex]['costPrice'],
		sellingPrice,
		question = {};

	lossPercentage=parseInt(lossPercentage);
	costPrice=parseInt(costPrice);
	sellingPrice=((100-lossPercentage)/100)*costPrice;

	question = {
		'type': 'single',
		'id': '1614',
		'question': 'A man purchase a TV for Rs. '+ costPrice+' and sells it at '+lossPercentage+'. What is the sellingPrice of Tv?', 
		'options': {
			'A': sellingPrice - parseInt(Math.random()*10),
			'B': sellingPrice + parseInt(Math.random()*10),
			'C': sellingPrice,
			'D': sellingPrice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '16'
	}
	
	return question;
	
}
function problem1615(){
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
        q = {};
        
        
    q= {
        'type': 'single',
        'id': '1615',
        'question': 'To a milk solution of '+ litres+' containing '+milk+', one litre of water is added.the percentage of milk in the new solution is',
        'options': {
            'A': percentage-parseInt(Math.random()*10),
            'B': percentage-parseInt(Math.random()*10),
            'C': percentage,
            'D': percentage+parseInt(Math.random()*10)
        },
        'answer': 'c',
        'author-id': '16'
    }
    return q;

}

function problem1616(){
    var inputData = [{
        'orange':420,
        'sells':40
        },
        {
        'orange':480,
        'sells':30
        },
        {
        'orange': 410,
         'sells':20
        },
        
        {
        'orange': 430,
        'sells':10
        }],
        randomIndex = getRandomNumber(inputData.length),
        orange= inputData[randomIndex]['orange'],
        sells= inputData[randomIndex]['sells'],
        
        
        
        orange=parseInt(orange);
        
        sells=parseInt(sells);
        totalsells=100;
        selling=totalsells-sells;
        price=parseFloat(selling/100);
        price=x;
        x=orange*100/selling;
        
        q = {};
        
        
         q= {
        'type': 'single',
        'id': '1616',
        'question': 'A fruit seller had some orange. He sells '+sells+'% orange and still has '+orange+' orange. Originally, he had',
        'options': {
            'A':x-parseInt(Math.random()*10),
            'B':x,
            'C':x-parseInt(Math.random()*10),
            'D':x+parseInt(Math.random()*10)
        },
        'answer': 'B',
        'author-id': '16'
    }
    return q;

}

function problem1617(){
	var inputData = [{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1670
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
		'total':1860
		},
		{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1540
		},
		{
		'A': 3,
		'B': 2,
		'C': 5,
		'total':1500
		}],
		randomIndex = getRandomNumber(inputData.length),
		A= inputData[randomIndex]['A'],
		B= inputData[randomIndex]['B'],
		C = inputData[randomIndex]['C'],
		total = inputData[randomIndex]['total'],
		add,
		cshare,
		question = {};
		
	    add=C/(A+B+C),
        cshare=add*total,
	    question = {
		'type': 'single',
		'id': '1617',
		'question': 'A:B:C is in ratio of ' + A + ':' + B + ':' + C + ' ,how much money will c get out of ' + total + '.',
		'options': {
			'A': cshare + parseInt(Math.random()*10),
			'B': cshare- parseInt(Math.random()*10),
			'C': cshare - parseInt(Math.random()*10),
			'D': cshare 
		},
		'answer': 'D',
		'author-id': '16'
	}
	
	return question;
	
}

function problem11618(){
	var inputData = [{
		'principle': 65000,
		'interest': 9,
		'years': 5
		},
		{
	    'principle': 55000,
		'interest': 6,
		'years': 5
		},
		{
	    'principle': 85000,
		'interest': 6,
		'years': 6
		},
		{
		'principle': 95000,
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
		'id': '1618',
		'question': 'If venkat borrows Rs. ' + principle + ' from aadi at rate of interest ' + interest + ' S.I, at the end of four years how much interest venkat has to pay along with principal amount?',
		'options': {
			'A': S + parseInt(Math.random()*10),
			'B': S - parseInt(Math.random()*10),
			'C': S,
			'D': S - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '16'
	}
	
	return question;
	
}


function problem1619(){
	var inputData = [{
		'boatSpeed': 16,
		'streamSpeed': 4,
		'distance': 78
		},
		{
		'boatSpeed': 18,
		'streamSpeed': 3,
		'distance': 85
		},
		{
		'boatSpeed': 15,
		'streamSpeed':79,
			'distance': 100
		},
		{
		'boatSpeed': 17,
		'streamSpeed': 12,
		'distance': 120
		},
		{
		'boatSpeed': 12,
		'streamSpeed': 9,
		'distance': 150
		}],
		randomIndex = getRandomNumber(inputData.length),
		boatSpeed = inputData[randomIndex]['boatSpeed'],
		streamSpeed = inputData[randomIndex]['streamSpeed'],
		distance = inputData[randomIndex]['distance'],
		downStreamSpeed,time,
		question = {};

	boatSpeed = parseInt(boatSpeed);
	streamSpeed = parseInt(streamSpeed);
	distance = parseInt(distance);
	downStreamSpeed = boatSpeed + streamSpeed;
	time = distance/downStreamSpeed

	question = {
		'type': 'single',
		'id': '1619',
		'question': 'A Boat can travel with a speed of ' +" "+ + boatSpeed +" "+ 'km/hr in still water. If the speed of stream is ' +" "+ + streamSpeed  +'km/hr. Find the time by the boat to go' +" "+ + distance+ 'km downstream ?',
		'options': {
			'A': time,
			'B': time + parseInt(Math.random()*10),
			'C': time + parseInt(Math.random()*10),
			'D': time - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '16'
	}
	
	return question;
		
}

function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem1620()
{
	var inputData = [{
		'a': 10,
		'b': 60
		},
		{
			'a':30,
			'b': 60
			},
			{
				'a':310,
				'b': 7
				},
				{
					'a': 20,
					'b': 10
					},

					{
						'a': 50,
						'b': 80
						},
		
		]
	}
		
		randomIndex = getRandomNumber(inputData.length),
		a= inputData[randomIndex]['a'],
		b = inputData[randomIndex]['b'],
		c,
		question = {};

		if(a > b) {
			alert(c+"a is greater than b");
		  } else if(a < b) {
			alert("a is lesser than b"+c);
			 
			  alert("a is equal to b"+c);
		  };

	question = {
		'type': 'single',
		'id': '1620',
		'question': 'given number greater or lesser',
		'options': {
			'A': c,
			'B': c - parseInt(Math.random()*10),
			'C': c+ parseInt(Math.random()*10),
			'D': c- parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '16'
	
	
    }
	return question;
    
	
