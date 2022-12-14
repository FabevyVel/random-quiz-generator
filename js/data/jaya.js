function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem041(){
	var inputData = [{
		'distance': 600,
		'time': 5
		},
		{
		'distance': 900,
		'time': 4
		},
		{
		'distance': 700,
		'time': 6
		},
		{
		'distance': 500,
		'time': 3
	    }],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question1 = {};

	distance=parseInt(distance);
	time=parseInt(time*60);
	speed=((distance/time)*(18/5));

	question1 = {
		'type': 'single',
		'id': '041',
		'question': 'A person crosses a'+distance+'long street in'+time+'.what is his speed in km per hour?',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '04'
	}
	
	return question1;
	
}

function problem042(){
	var inputData = [{
		'rate': 20
        },
		{
		'rate':40
		},
		{
		'rate':30
		},
		{
		'rate': 20
		}],
		randomIndex = getRandomNumber(inputData.length),
		rate= inputData[randomIndex]['rate'],
		
		rate=parseInt(rate);
		percentage=[rate/(100-rate)*100];
		question2 = {};

	

	question2 = {
		'type': 'single',
		'id': '042',
		'question': 'If A is salary is'+rate+'less than B is salary by how much percent is B is salary more than A is?',
		'options': {
			'A': percentage+ parseInt(Math.random()*10),
			'B': percentage - parseInt(Math.random()*10),
			'C': percentage,
			'D': percentage- parseInt(Math.random()*10)
		},
		'answer': 'c',
		'author-id': '04'
	}
	
	return question2;
	
}
function problem043(){
	var inputData = [{
		'x': 90,
		'y': 30
		},
		{
		'x': 30,
		'y': 20
		},
		{
		'x': 70,
		'y': 60
		},
		{
		'x': 110,
		'y': 70
		}],
		randomIndex = getRandomNumber(inputData.length),
		x= inputData[randomIndex]['x'],
		y = inputData[randomIndex]['y'],
		average,
		question3 = {};

	x=parseInt(x);
	y=parseInt(y);
	average=(2*x*y/(x+y));

	question3= {
		'type': 'single',
		'id': '043',
		'question': 'Distance between two stations A and B is 778km. A train covers the journey from A to B at '+x+'per hour and returns back to A with a uniform speed of '+y+'per hour. Find the average speed of the train during the whole journey',
		'options': {
			'A': average,
			'B': average +parseInt(Math.random()*10),
			'C': average- parseInt(Math.random()*10),
			'D': average*parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '04'
	}
	return question3;
	
}
	

function problem044(){
		var inputData = [{
			'costprice': 30,
			'sellingprice':90
			},
			{
			'costprice': 27,
			'sellingprice': 28
			},
			{
			'costprice': 70,
			'sellingprice': 60
			},
			
			{
			'costprice': 110,
			'sellingprice':70
			}],
			randomIndex = getRandomNumber(inputData.length),
			costprice= inputData[randomIndex]['costprice'],
			sellingprice = inputData[randomIndex]['sellingprice'],
			
			
			costprice=parseInt(costprice);
			sellingprice=parseInt(sellingprice);
			gain=sellingprice-costprice;
			percentage=(gain/costprice*100);
			question4 = {};
			
	  question4= {
			'type': 'single',
			'id': '044',
			'question': 'A man buy an  article for'+costprice+' and sells it for'+sellingprice+'. Find his gain percent',
			'options': {
				'A': percentage-parseInt(Math.random()*10),
				'B': percentage+parseInt(Math.random()*10),
				'C': percentage-parseInt(Math.random()*10),
				'D': percentage
			},
			'answer': 'D',
			'author-id': '04'
		}
		return question4;
	
}
function problem045(){
		var inputData = [{
			'l': 14,
			'b':12,
			'h':9
			},
			{
			'l': 13,
			'b':10,
			'h':8
			},
			{
			'l': 12,
			'b':11,
			'h':7
			},
			
			{
			'l': 14,
			'b':2,
			'h':39
			}],
			randomIndex = getRandomNumber(inputData.length),
			l= inputData[randomIndex]['l'],
			b= inputData[randomIndex]['b'],
			h= inputData[randomIndex]['h'],
			
			l=parseInt(l);
			b=parseInt(b);
			h=parseInt(h);
			volume=(l*b*h);
			surfacearea=(2*(l*b+b*h+l*h));
			question5 = {};
			
			
	  question5= {
			'type': 'single',
			'id': '045',
			'question': 'Find the volume and area of a cuboid'+l+' long, '+b+'breath and'+h+' hight.',
			'options': {
				'A': surfacearea-parseInt(Math.random()*10),
				'B': surfacearea,
				'C': surfacearea-parseInt(Math.random()*10),
				'D': surfacearea+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question5;
	
}
function problem046(){
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
			'id': '046',
			'question': 'To a sugar solution of '+ litres+' containing '+sugar+', one litre of water is added.the percentage of sugar in the new solution is',
			'options': {
				'A': percentage-parseInt(Math.random()*10),
				'B': percentage-parseInt(Math.random()*10),
				'C': percentage,
				'D': percentage+parseInt(Math.random()*10)
			},
			'answer': 'c',
			'author-id': '04'
		}
		return question6;
	
}
	
function problem047(){
		var inputData = [{
			'inspectorrejects':8,
			'examine':2
			},
			{
			'inspectorrejects':4,
				'examine':3
			},
			{
			'inspectorrejects': 0.08,
				'examine':2
			},
			
			{
			'inspectorrejects': 0.13,
				'examine':10
			}],
			randomIndex = getRandomNumber(inputData.length),
			inspectorrejects= inputData[randomIndex]['inspectorrejects'],
			examine= inputData[randomIndex]['examine'],
		    
			
			inspectorrejects=parseInt((inspectorrejects/100)*(1/100));
			
			x=(examine*100*inspectorrejects);
			question7 = {};
			
			
	  question7= {
			'type': 'single',
			'id': '047',
			'question': 'An'+inspectorrejects+'of the meters as defective.How many will he examine to reject 2?',
			'options': {
				'A':x-parseInt(Math.random()*10),
				'B':x,
				'C':x-parseInt(Math.random()*10),
				'D':x+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question7;
	
}
		
function problem048(){
		var inputData = [{
			'speedoftrain':8,
			'speedoftrain1':68,
			'distance':150
			},
			{
			'speedoftrain':4,
				'speedoftrain1':66,
			'distance':160
			},
			{
			'speedoftrain':2,
				'speedoftrain1':65,
			'distance':170
			},
			
			{
			'speedoftrain':6,
			'speedoftrain1':64,
			'distance':180
			}],
			randomIndex = getRandomNumber(inputData.length),
			speedoftrain= inputData[randomIndex]['speedoftrain'],
			speedoftrain1= inputData[randomIndex]['speedoftrain1'],
			distance= inputData[randomIndex]['distance'],
		    
			
			speedoftrain=parseInt(speedoftrain);
			speedoftrain1=parseInt(speedoftrain1-speedoftrain);
		    distance=parseInt(distance);
			speed=speedoftrain1*5/18;
		    time=distance*(1/speed);
			question8 = {};
	
	question8= {
			'type': 'single',
			'id': '048',
			'question': 'A train '+distance+'m long is running with a speed of '+speedoftrain1+'. in what time will it pass a man who is running at '+speedoftrain+'kmph in the same direction in which the train is going?',
			'options': {
				'A':time-parseInt(Math.random()*10),
				'B':time,
				'C':time-parseInt(Math.random()*10),
				'D':time+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question8;
	
}
function problem049(){
		var inputData = [{
			'u':15,
			'v':2.5
			},
			{
			'u':14,
				'v':3.5
			},
			{
			'u': 28,
				'v':2.6
			},
			
			{
			'u': 18,
				'v':10.5
			}],
			randomIndex = getRandomNumber(inputData.length),
			u= inputData[randomIndex]['u'],
			v= inputData[randomIndex]['v'],
		    
			
			 
			u=parseInt(u);
			v=parseFloat(v);
			still=(u-v);
		    current=(still-v);
			
			question9 = {};
			
			
	  question9= {
			'type': 'single',
			'id': '049',
			'question': 'A man speed with the current is '+u+'km/hr and the speed of the current is '+v+'km/hr the man is speed aganist current is',
			'options': {
				'A':current,
				'B':current-parseInt(Math.random()*10),
				'C':current-parseInt(Math.random()*10),
				'D':current+parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '04'
		}
		return question9;
	
}
		
function problem0410(){
		var inputData = [{
			'x':21000,
			'y':17500,
			'profit':26400
			},
			{
			'x':22000,
				'y':18500,
			'profit':27500
			},
			{
			'x':24000,
				'y':19500,
			'profit':28600
			},
			
			{
			'x':23000,
				'y':20800,
			'profit':29800
			}],
			randomIndex = getRandomNumber(inputData.length),
			x= inputData[randomIndex]['x'],
			y= inputData[randomIndex]['y'],
		    profit= inputData[randomIndex]['y'],
			
			
			x=parseInt(((x/100)/5)/7);
			y=parseInt(((y/100)/5)/7);
			profit=parseInt(profit);
		    totalprofitxandy=11;
			profitx=profit*(x/totalprofitxandy);
			
			question10 = {};
			
			
	  question10= {
			'type': 'single',
			'id': '0410',
			'question': 'X and Y invest rs.'+x+'and rs.'+y+'respectively in a business.At the end of the year, they make a profit of rs.'+profit+'.what is the share of X in the profit?',
			'options': {
				'A':profitx-parseInt(Math.random()*10),
				'B':profitx,
				'C':profitx-parseInt(Math.random()*10),
				'D':profitx+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question10;
	
}
		
function problem0411(){
		var inputData = [{
			'apple':420,
			'sells':40
			},
			{
			'apple':480,
				'sells':30
			},
			{
			'apple': 410,
				'sells':20
			},
			
			{
			'apple': 430,
				'sells':10
			}],
			randomIndex = getRandomNumber(inputData.length),
			apple= inputData[randomIndex]['apple'],
			sells= inputData[randomIndex]['sells'],
		    
			
			
			apple=parseInt(apple);
			
			sells=parseInt(sells);
		    totalsells=100;
			selling=totalsells-sells;
		    price=parseFloat(selling/100);
		    price=x;
		    x=apple*100/selling;
			
			question11 = {};
			
			
	  question11= {
			'type': 'single',
			'id': '0411',
			'question': 'A fruit seller had some apples. He sells '+sells+'% apples and still has '+apple+' apples. Originally, he had',
			'options': {
				'A':x-parseInt(Math.random()*10),
				'B':x,
				'C':x-parseInt(Math.random()*10),
				'D':x+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question11;
	
}
function problem0412(){
		var inputData = [{
			'mp':35,
			'gp':8
			},
			{
			'mp':34,
				'gp':3
			},
			{
			'mp': 48,
				'gp':2
			},
			
			{
			'mp': 53,
				'gp':10
			}],
			randomIndex = getRandomNumber(inputData.length),
			mp= inputData[randomIndex]['mp'],
			gp= inputData[randomIndex]['gp'],
		    
			
			cp=100;
		 
			mp=parseInt(mp);
		    mp=cp*(mp+cp)/cp;
			
			gp=parseInt(gp);
			sp=(100+gp)/100*cp;
			dp=(mp-sp)*cp/mp;
		
			question12 = {};
			
			
	  question12 = {
			'type': 'single',
			'id': '0412 ',
			'question': 'A trader keeps the marked price of an item '+mp+'% above its cost price. The percentage of discount allowed to gain '+gp+'% is',
			'options': {
				'A':dp-parseInt(Math.random()*10),
				'B':dp+parseInt(Math.random()*10),
				'C':dp-parseInt(Math.random()*10),
				'D':dp
			},
			'answer': 'D',
			'author-id': '04'
		}
		return question12 ;
	
}
function problem0413(){
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
			
			question13= {};
			
			
	  question13= {
			'type': 'single',
			'id': '0413',
			'question': 'The ratio between the speed of two train is '+train1+':'+train2+'.If the second train runs '+distance+' km in '+time+'hours, then the speed of the first train is?',
			'options': {
				'A':firsttrain-parseInt(Math.random()*10),
				'B':firsttrain,
				'C':firsttrain-parseInt(Math.random()*10),
				'D':firsttrain+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question13;
	
}
function problem0414(){
		var inputData = [{
			'swimwater':4,
			'speedwater':2,
			'distance':6
			},
			{
			'swimwater':5,
			'speedwater':3,
				'distance':7
			},
			{
			'swimwater':6,
			'speedwater':4,
				'distance':8
			},
			
			{
			'swimwater':7,
			'speedwater':5,
				'distance':9
			}],
			randomIndex = getRandomNumber(inputData.length),
			swimwater= inputData[randomIndex]['swimwater'],
			speedwater= inputData[randomIndex]['speedwater'],
		    distance= inputData[randomIndex]['distance'],
			
			swimwater=parseInt(swimwater);
			speedwater=parseInt(speedwater);
			distance=parseInt(distance);
			upstream=swimwater-speedwater;
		    time=distance/upstream;
			
			
			question14 = {};
			
			
	  question14= {
			'type': 'single',
			'id': '0414',
			'question': 'A person can swim in water at '+swimwater+' km/h. If the speed of water '+speedwater+'km/h, how many hours will the man take to swim back against the current for '+distance+'km?',
			'options': {
				'A':time,
				'B':time-parseInt(Math.random()*10),
				'C':time-parseInt(Math.random()*10),
				'D':time+parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '04'
		}
		return question14;
	
}
		
function problem0415(){
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
		    per=(total/markt)*100;
			
			question15 = {};
			
			
	  question15= {
			'type': 'single',
			'id': '0415',
			'question': 'A student scores '+student1+','+student2+', '+student1+'marks in a test paper of 100, 150, 200 respectively as maximum marks. What is the total percentage?',
			'options': {
				'A':per-parseInt(Math.random()*10),
				'B':per,
				'C':per-parseInt(Math.random()*10),
				'D':per+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question15;
	
}
function problem0416(){
		var inputData = [{
			'sp':490,
			'cp':465.50
			},
			
			{
			'sp': 480,
				'cp':456.00
			},
			{
			'sp': 470,
				'cp':43.50
			},
			
			{
			'sp': 460,
				'cp':45.00
			}],
			randomIndex = getRandomNumber(inputData.length),
			cp= inputData[randomIndex]['cp'],
			sp= inputData[randomIndex]['sp'],
		    
			
			
			cp=parseInt(cp);
			
			sp=parseFloat(sp);
			 
			loss=cp-sp;
			losspercentage=(loss/cp)*100;
			
			question16 = {};
			
			
	  question16= {
			'type': 'single',
			'id': '0416',
			'question': 'If a radio is purchased for Rs.'+sp+' and sold for Rs.'+cp+',Find the loss percent',
			'options': {
				'A':losspercentage,
				'B':losspercentage+parseInt(Math.random()*10),
				'C':losspercentage-parseInt(Math.random()*10),
				'D':losspercentage-parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '04'
		}
		return question16;
	
}
		
function problem0417(){
		var inputData = [{
			'speed':80
			},
			{
			
				'speed':30
			},
			{
			
				'speed':20
			},
			
			{
			
				'speed':50
			}],
			randomIndex = getRandomNumber(inputData.length),
			
			speed= inputData[randomIndex]['speed'],
		    
			
			
			speed=parseInt(speed);
			speed1=speed*(5/18);
			
			question17 = {};
			
			
	  question17= {
			'type': 'single',
			'id': '0417',
			'question': 'A car moves at the speed of '+speed+'km/hr. What is the speed of the car in metres per second',
			'options': {
				'A':speed1-parseInt(Math.random()*10),
				'B':speed1,
				'C':speed1-parseInt(Math.random()*10),
				'D':speed1+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question17;
	
}
		
function problem0418(){
		var inputData = [{
			'speed':144,
			'distance':100
			},
			{
			'speed':166,
				'distance':50
			},
			{
			'speed': 122,
			'distance':20
			},
			
			{
			'speed': 100,
			'distance':10
			}],
			randomIndex = getRandomNumber(inputData.length),
			speed= inputData[randomIndex]['speed'],
			distance= inputData[randomIndex]['distance'],
		    
			
			
			speed=parseInt(speed*(5/18));
			
			distance=parseInt(distance);
			
			 time=distance/speed;
			
			question18 = {};
			
			
	  question18= {
			'type': 'single',
			'id': '0418',
			'question': 'In what time will a train '+distance+'meters long cross an electric pole,if its speed be '+speed+'km/hr',
			'options': {
				'A':time-parseInt(Math.random()*10),
				'B':time-parseInt(Math.random()*10),
				'C':time,
				'D':time+parseInt(Math.random()*10)
			},
			'answer': 'C',
			'author-id': '04'
		}
		return question18;
	
}
		
function problem0419(){
		var inputData = [{
			'downstream':13,
			'upstream':8
			},
			{
			'downstream':12,
			'upstream':2
			},
			{
			'downstream':10,
				'upstream':4
			},
			
			{
			'downstream':16,
				'upstream':5
			}],
			randomIndex = getRandomNumber(inputData.length),
			downstream= inputData[randomIndex]['downstream'],
			upstream= inputData[randomIndex]['upstream'],
		    
			
			
			downstream=parseInt(downstream);
			
			upstream=parseInt(upstream);
			
			speed=1/2*(downstream-upstream);
			
			question19 = {};
			
			
	  question19= {
			'type': 'single',
			'id': '0419',
			'question': 'A man rows upstream at '+upstream+' kmph and downstream at '+downstream+' kmph. the speed of the stream is',
			'options': {
				'A':speed-parseInt(Math.random()*10),
				'B':speed,
				'C':speed-parseInt(Math.random()*10),
				'D':speed+parseInt(Math.random()*10)
			},
			'answer': 'B',
			'author-id': '04'
		}
		return question19;
	
}
		
function problem0420(){
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
		   
			question20= {};
			
			
	  question20= {
			'type': 'single',
			'id': '0420',
			'question': 'A sum fetched a total simple interest of rs.'+s+'at the rate of '+r+'p.c.p.a. in '+t+'years what is the sum?',
			'options': {
				'A':p,
				'B':p-parseInt(Math.random()*10),
				'C':p-parseInt(Math.random()*10),
				'D':p+parseInt(Math.random()*10)
			},
			'answer': 'A',
			'author-id': '04'
		}
		return question20;
	
}
function problem0421(){
	var inputData = [{
		'speed':90,
		'time': 10,
		'time2': 4
		},
		{
		'speed':80,
		'time': 6,
		'time2': 5
		},
		{
		'speed':60,
		'time': 4,
		'time2': 2
		},
		{
		'speed':40,
		'time': 2,
		'time2': 3
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
		time2 = inputData[randomIndex]['time2'],
		distance,
		speed2,
		speed1,
		question21 = {};
		
	
	distance=speed1*time;
	speed2=distance/time2;
	speed1=speed2-speed;

	question21 = {
		'type': 'single',
		'id': '0421',
		'question': 'A car covers its journey at the speed of' + speed + ' km/hour in' + time +' hours. If the same distance is to be covered in'
						+ time2 + 'hours, by how much the speed of car will have to increase?',
		'options': {
			'A': speed1 - parseInt(Math.random()*10),
			'B': speed1,
			'C': speed1 + parseInt(Math.random()*10),
			'D': speed1 - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '04'
	}
	
	return question21;
	
}
function problem0421(){
	var inputData = [{
		'speed':90,
		'time': 10,
		'time2': 4
		},
		{
		'speed':80,
		'time': 6,
		'time2': 5
		},
		{
		'speed':60,
		'time': 4,
		'time2': 2
		},
		{
		'speed':40,
		'time': 2,
		'time2': 3
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		time = inputData[randomIndex]['time'],
		time2 = inputData[randomIndex]['time2'],
		distance,
		speed2,
		speed1,
		question21 = {};
		
	
	distance=speed1*time;
	speed2=distance/time2;
	speed1=speed2-speed;

	question21 = {
		'type': 'single',
		'id': '0421',
		'question': 'A car covers its journey at the speed of' + speed + ' km/hour in' + time +' hours. If the same distance is to be covered in'
						+ time2 + 'hours, by how much the speed of car will have to increase?',
		'options': {
			'A': speed1 - parseInt(Math.random()*10),
			'B': speed1,
			'C': speed1 + parseInt(Math.random()*10),
			'D': speed1 - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '04'
	}
	
	return question21;
	
}
function problem0422(){
	var inputData = [{
		'speed1':75,
		'time1': 20
		},
		{
		'speed1':105,
		'time1': 10
		},
		{
		'speed1':85,
		'time1': 25
		},
		{
		'speed1':65,
			'time1': 8
		}],
		randomIndex = getRandomNumber(inputData.length),
		speed1 = inputData[randomIndex]['speed1'],
		time1 = inputData[randomIndex]['time1'],
		speed,
		distance1,
		question22 = {};
		
		
	speed=speed1*5/18;
	distance1=speed*time1;

	question22 = {
		'type': 'single',
		'id': '0422',
		'question': 'What distance will be covered by a bus moving at'+ speed1 +' kmph in' + time1 +' seconds?' ,
		'options': {
			'A': distance1 - parseInt(Math.random()*10),
			'B': distance1+ parseInt(Math.random()*10),
			'C': distance1, 
			'D': distance1 - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '04'
	}
	
	return question22;
	
}
function problem0423(){
	var inputData = [{
		'sellprofit':672,
		'costprofit': 450
		},
		{
		'sellprofit':872,
		'costprofit': 114
		},
		{
		'sellprofit':672,
		'costprofit': 700
		},
		{
		'sellprofit':872,
		'costprofit': 155
		}],
		randomIndex = getRandomNumber(inputData.length),
		sellprofit = inputData[randomIndex]['sellprofit'],
		costprofit = inputData[randomIndex]['costprofit'],
		profit,
		profitpercentage,
		question23 = {};
	
	profit=sellprofit-costprofit;
	profitpercentage=(profit/costprofit)*100;

	question23 = {
		'type': 'single',
		'id': '0423',
		'question':'An article is bought for Rs.' + sellprofit + 'and sold for Rs.' + costprofit + '. What is the gain percentage?',
		'options': {
			'A': profitpercentage - parseFloat(Math.random()*10),
			'B': profitpercentage + parseInt(Math.random()*10),
			'C': profitpercentage+ parseInt(Math.random()*10),
			'D': profitpercentage 
		},
		'answer': 'D',
		'author-id': '04'
	}
	
	return question23;
	
}
function problem0424(){
	var inputData = [{
		'children':6,
		'age': 50,
		'years':3
		},
		{
		'children':8,
		'age': 30,
		'years':3
		},
		{
		'children':4,
		'age': 80,
		'years':3
		},
		{
		'children':5,
		'age': 40,
		'years':3
		}],
		randomIndex = getRandomNumber(inputData.length),
		children = inputData[randomIndex]['children'],
		age = inputData[randomIndex]['age'],
		years = inputData[randomIndex]['years'],
		interval,
		x,
		young,
		profitpercentage,
		question24 = {};
	
	interval=(age*age*age)+age;
	x=years-interval;
	young=x/children;

	question24= {
		'type': 'single',
		'id': '0424',
		'question':'The sum of ages of'+ children + 'children born at the intervals of' + years + 'years each is'+ age + 'years. What is the age of the youngest child?',
		'options': {
			'A': young - parseFloat(Math.random()*10),
			'B': young+ parseFloat(Math.random()*10),
			'C': young ,
			'D': young - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '04'
	}
	
	return question24;
	
}
function problem0425(){
	var inputData = [{
		'average':50,
		'years': 45,
		'teacher': 6,
		'yearsteacher':2
		},
		{
		'average':80,
		'years': 65,
		'teacher': 12,
		'yearsteacher':3
		},
		{
		'average':125,
		'years': 30,
		'teacher': 10,
		'yearsteacher':6
		},
		{
		'average':40,
		'years': 25,
		'teacher': 2,
		'yearsteacher': 1
		}],
		randomIndex = getRandomNumber(inputData.length),
		average = inputData[randomIndex]['average'],
		years = inputData[randomIndex]['years'],
		teacher = inputData[randomIndex]['teacher'],
		yearsteacher = inputData[randomIndex]['yearsteacher'],
		a,
		sum,
		age,
		x1,
		includes,
		question25 = {};
	

	a=average+teacher;
	sum=years+yearsteacher;
	age=average*years;
	x1=a*sum;
	includes=x1-age;


	question25 = {
		'type': 'single',
		'id': '0425',
		'question':'The average age of' + average + 'boys in a class is'+ years + 'years. If we include the age of' + teacher + 
		'teachers, the average age increases by' + yearsteacher + ' . What is the sum of ages of the two teachers?',
		'options': {
			'A': includes - parseInt(Math.random()*10),
			'B': includes - parseInt(Math.random()*10),
			'C': includes,
			'D': includes + parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '04'
	}
	
	return question25;
	
}
function problem0426(){
	var inputData = [{
		'principal': 5500,
		'rateinterest': 2,
		'noyears': 6
		},
		{
		'principal': 6000,
		'rateinterest': 8,
		'noyears': 2
		},
		{
		'principal': 5000,
		'rateinterest': 4,
			'noyears': 3
		},
		{
		'principal': 6500,
		'rateinterest': 3,
			'noyears': 4
		},
		{
		'principal': 7000,
		'rateinterest': 5,
			'noyears': 1
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal = inputData[randomIndex]['principal'],
		rateinterest = inputData[randomIndex]['rateinterest'],
		noyears = inputData[randomIndex]['noyears'],
		simpleInterest,
		question26 = {};

	principal = parseInt(principal);
	rateinterest = parseInt(rateinterest);
	noyears = parseInt(noyears);
	simpleInterest = (principal*rateinterest*noyears)/100;

	question26 = {
		'type': 'single',
		'id': '0426',
		'question': 'Find the Simple Interest when Principal is' +" "+ + principal +" "+ ',Rate of Interest is' +" "+ + rateinterest  +'% per annum and Time is' +" "+ + noyears+ 'years.?',
		'options': {
			'A': simpleInterest + parseInt(Math.random()*10),
			'B': simpleInterest + parseInt(Math.random()*10),
			'C': simpleInterest - parseInt(Math.random()*10),
			'D': simpleInterest
		},
		'answer': 'D',
		'author-id': '04'
	}
	
	return question26;
		
}
function problem0427(){
	var inputData = [{
		'cp': 6000,
		'loss': 4
		},
		{
		'cp': 5000,
			'loss': 7
		},
		{
		'cp': 8000,
			'loss': 9
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
	    
	question27 = {
		'type': 'single',
		'id': '0427',
		'question': 'A man purchase tv for RS ' + cp + ' and sells it ' + loss + '% loss.what is the sellingprice of TV',
		'options': {
			'A': sp - parseInt(Math.random()*10),
			'B': sp+ parseInt(Math.random()*10),
			'C': sp ,
			'D': sp - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '04'
	}
	
	return question27;
	
}
function problem0428(){
	var inputData = [{
		'principal': 13600,
		'rateinterest': 10,
		'noyears': 2
		},
		{
		'principal': 58000,
		'rateinterest': 8,
		'noyears': 1
		},
		{
		'principal': 9000,
		'rateinterest': 15,
		'noyears': 2
		},
		{
		'principal': 8500,
		'rateinterest': 4,
		'noyears': 6
		},
		{
		'principal': 7000,
		'rateinterest': 4,
		'noyears': 6
		}],
		randomIndex = getRandomNumber(inputData.length),
		principal = inputData[randomIndex]['principal'],
		rateinterest = inputData[randomIndex]['rateinterest'],
		noyears = inputData[randomIndex]['noyears'],
		amount,compoundInterest,
		question28 = {};

	principal = parseInt(principal);
	rateinterest = parseInt(rateinterest);
	noyears = parseInt(noyears);
	amount = principal*(1+(rateinterest/100))**noyears;
	compoundInterest = amount-principal

	question28 = {
		'type': 'single',
		'id': '0428',
		'question': 'Find the Compound Interest on Rs' +" "+ + principal +" "+ 'for' +" "+ + noyears  +'years at' +" "+ + rateinterest+ '% per annum compounded annually.?',
		'options': {
			'A': compoundInterest + parseInt(Math.random()*10),
			'B': compoundInterest- parseInt(Math.random()*10),
			'C': compoundInterest + parseInt(Math.random()*10),
			'D': compoundInterest 
		},
		'answer': 'D',
		'author-id': '04'
	}
	
	return question28;
		
}
function problem0429(){
	var inputData = [
		{
		'distance':10,
		'speed': 400
		},
		{
		'distance':20,
		'speed': 600
		},
		{
		'distance':15,
		'speed': 300
		},
		{
		'distance':25,
		'speed': 200
		}
	],
		randomIndex = getRandomNumber(inputData.length),
		speed= inputData[randomIndex]['speed'],
		distance= inputData[randomIndex]['distance'],
    	time,
		question29 = {};
		
	    speed=parseInt(speed*5/18);
		distance=parseInt(distance);
		time=(distance/speed);
		
	question29 = {
		'type': 'single',
		'id': '0429',
		'question': 'A van is running at a speed of '+ speed +' km/hr. In what time he will cross a track of length '+ distance+' meters?',
		'options': {
			'A':  time,
			'B':  time-parseInt(Math.random()*10),
			'C':  time+parseInt(Math.random()*10),
			'D':  time-parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '04'
	}
	
	return question29;
	
}
function problem0430(){
var inputData = [{
		'no':2
		},
		{
		'no':4
		},
		{
		'no':6
		},
		{
		'no':5
		}],
	randomIndex = getRandomNumber(inputData.length),
		no= inputData[randomIndex]['no'],
		average ,
		question30 = {};
		
    no=parseInt(no);
	average=(2*(no+1)*(2*no+1)/3);
	question30 = {
		'type': 'single',
		'id': '0430',
		'question': 'The average of square of first '+ no +' consecutive even numbers is:',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average, 
			'C': average- parseInt(Math.random()*10),
			'D': average - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '04'
	}
	
	return question30;
}
function problem0431(){
	var inputData = [{
		'correct': 20,
		'wrong': 10
		},
		{
		'correct': 60,
		'wrong': 20
		},
		{
		'correct': 40,
		'wrong': 30
		},
		{
		'correct': 30,
		'wrong': 40
		},
		{
		'correct': 20,
			'wrong': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		correct=inputData[randomIndex]['correct'],
		wrong=inputData[randomIndex]['wrong'],
	    errorpercentage,
		correct=parseInt(correct),
		wrong=parseInt(wrong),
		errorpercentage=(correct - wrong)/correct,
		error=errorpercentage*100,
		
		question31 = {
		'type': 'single',
		'id': '0431',
		'question': 'A student multiplied a number by ' + wrong + 'instead of '+correct+  'what is the percentage error in the calculation?',
		'options': {
			'A': error- parseInt(Math.random()*10),
			'B': error - parseInt(Math.random()*10),
			'C': error + parseInt(Math.random()*10),
			'D': error
		},
		'answer': 'D',
		'author-id': '04',
	}
	
	return question31;
}
function problem0432(){
	var inputData = [{
		'costprice': 1640,
		'profit': 35
		},
		{
		'costprice': 1540,
		'profit': 25
		},
		{
		'costprice': 1420,
		'profit': 20
		},
		{
		'costprice': 1840,
		'profit': 45
		}],
		randomIndex = getRandomNumber(inputData.length),
		costprice= inputData[randomIndex]['costprice'],
		profit = inputData[randomIndex]['profit'],
		p,
		sellingprice,
		question32 = {};
		
	    p=(100+profit)/100;
		sellingprice=p*costprice;

	question32 = {
		'type': 'single',
		'id': '0432',
		'question': 'Ramesh bought a chair for RS ' + costprice + ' and sold it suressh ,if ramesh earned a profit of ' + profit + '% profit.what is the sellingprice of chair',
		'options': {
			'A': sellingprice+ parseInt(Math.random()*10), 
			'B': sellingprice - parseInt(Math.random()*10),
			'C': sellingprice ,
			'D': sellingprice - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '04'
	}
	
	return question32;
	
}
function problem0433(){
	var inputData = [{
		'diagonal': 90
		},
		{		
		'diagonal': 60
		},
		{		
		'diagonal': 70
		},
		{
		'diagonal': 80
		},
		{		
		'diagonal': 50
		}],
		randomIndex = getRandomNumber(inputData.length),
		diagonal = inputData[randomIndex]['diagonal'],
		areaSquare,
		question33 = {};

	diagonal=parseInt(diagonal);
	areaSquare=1/2*(diagonal*diagonal);

	question33 = {
		'type': 'single',
		'id': '0433',
		'question': 'The diagonal of a square field is '+ diagonal +'m,then area of the field is',
		'options': {
			'A': areaSquare - parseInt(Math.random()*10),
			'B': areaSquare ,
			'C': areaSquare + parseInt(Math.random()*10),
			'D': areaSquare- parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '04'
	}
	
	return question33;
	
}
function problem0434(){
	var inputData = [{
		'area':5,
		'hec': 1.5,
		},
		{
		'area':6,
		'hec': 2.5,
		},
		{
        'area':7,
		'hec':3.5,
		},
		{
			'area':8,
		'hec': 1.5,
		},
		{
        'area':7,
		'hec': 1.5,
		}],
	 randomIndex = getRandomNumber(inputData.length),
		area= inputData[randomIndex]['area'],
		hec = inputData[randomIndex]['hec'],
		volume,
		question34 = {};

	area=parseInt(area);
	hec=parseInt(hec);
	volume=(area*hec);

	question34 = {
		'type': 'single',
		'id': '0434',
		'question': 'In a shower' +area+ 'of rain falls The volume of water that falls on' +hec+ 'of ground is',
		'options': {
			 'A':volume,
             'B':volume - parseInt(Math.random()*10),
             'C' :volume+parseInt(Math.random()*10),
			'D': volume+parseInt(Math.random()*10),
		},
		'answer': 'A',
		'author-id': '04'
	}
	
	return question34;
}
function problem0435(){
	var inputData = [{
		'value': 2	
		},
		{
			'value': 4
		},
		{
			'value': 6	
		},
		{
			'value': 12		
		},
		{
			'value': 8	
		}],
		randomIndex = getRandomNumber(inputData.length),
		value= inputData[randomIndex]['value'],
		squareRoot,
		question35 = {};

	value=parseInt(value);
	squareRoot=Math.sqrt(value);

	question35 = {
		'type': 'single',
		'id': '0435',
		'question': 'Find the square root value of '+ value+'? ',
		'options': {
			'A':squareRoot - parseInt(Math.random()*10),
			'B': squareRoot - parseInt(Math.random()*10),
			'C': squareRoot ,
			'D':  squareRoot+ parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '04'
	}
	
	return question35;
	
}
function problem0436(){
	var inputData = [{
        'perimeter':414,
		'breath':5,
		},
		{
        'perimeter':316,
		'breath':3,
		},
		{
        'perimeter':316,
		'breath':4,
		},
		
		{
		'perimeter':236,
		'breath':5,
		}],
	 randomIndex = getRandomNumber(inputData.length),
	       perimeter= inputData[randomIndex]['perimeter'],
         breath= inputData[randomIndex]['breath'],
		area,
		question36 = {};

	perimeter=parseInt(perimeter);
	breath=parseInt(breath);
	length*breath,
	area=(length+breath/breath),

	question36 = {
		'type': 'single',
		'id': '0436',
		'question': 'The ratio between the' +perimeter+ 'and the' +breath+ 'of a is If the area of the rectangle is what is the length of the rectangle', 
		'options': {
			'A': area ,
			'B': area - parseInt(Math.random()*10),
			'C': area + parseInt(Math.random()*10),
			'D': area* parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '04'
	}
	
	return question36;
}
function problem0437(){
	var inputData = [{
		'profit': 65,
		'costprice': 1400
		},
		{
		'profit': 55,
		'costprice': 1200
		},
		{
		'profit': 25,
		'costprice': 1500
		},
		{
		'profit': 85,
		'costprice': 1600
		},
		{
		'profit': 45,
		'costprice': 1800
		}],
		randomIndex = getRandomNumber(inputData.length),
		profit= inputData[randomIndex]['profit'],
		costprice= inputData[randomIndex]['costprice'],
		sellingprice,
		question37 = {};

	profit=parseInt(profit);
	costprice=parseInt(costprice);
	sellingprice=(((100/profit)/100)*costprice)

	question37 = {
		'type': 'single',
		'id': '0437',
		'question': 'A shopkeeper bought a clock for rs'  + costprice + 'at what price should he sell the watch to earn a profit of'+profit,
		'options': {
			'A': sellingprice,
			'B': sellingprice-parseInt(Math.random()*10),
			'C': sellingprice+parseInt(Math.random()*10),
			'D': sellingprice-parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '04'
	}
	
	return question37;
	
}
function problem0438(){
	var inputData = [{
		'sub1':5,
		'sub2': 6,
		'a1':65,
		'a2':64
		},
		{
		'sub1':4,
		'sub2': 5,
		'a1':85,
		'a2':75
		},
		{
		'sub1':7,
		'sub2': 9,
		'a1':5,
		'a2':73
		},
		{
		'sub1':6,
		'sub2': 5,
		'a1':7,
		'a2':2
		},
		{
		'sub1':6,
		'sub2': 5,
		'a1':75,
		'a2':55
		}
	],
		randomIndex = getRandomNumber(inputData.length),
	    sub1= inputData[randomIndex]['sub1'],
		sub2 = inputData[randomIndex]['sub2'],
    	a1= inputData[randomIndex]['a1'],
	    a2= inputData[randomIndex]['a2'],
	    themarks1,
	    themarks2,
	    mark,
		question38 = {};
		
	    sub1=parseInt(sub1);
		sub2=parseInt(sub2);
		a1=parseInt(a1);
		a2=parseInt(a2);
	    themarks1=a1*sub1;
        themarks2=a2*sub2;
		mark=themarks1-themarks2;
	question38 = {
		'type': 'single',
		'id': '0438',
		'question': ' A karthik secures average of  '   +   a1 +  'marks in  '  +sub1 + 'subjects if the average of amrks in    '+sub2+'is  '+a2+'how many marks did he secure in the 6th subject?',
		'options': {
			'A': mark-parseInt(Math.random()*10),
			'B': mark,
			'C': mark-parseInt(Math.random()*10),
			'D': mark+parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '04'
	}
	
	return question38;
	
}
function problem0439(){
	var inputData = [{
		't': 25,
		'b': 3/5
		},
		{
		't': 80,
			'b': 4/5
		},
		{
		't': 70,
			'b': 2/5
		},
		{
		't': 85,
			'b': 6/5
		},
		{
		't': 90,
			'b': 8/5
		}],
		randomIndex = getRandomNumber(inputData.length),
	    t= inputData[randomIndex]['t'],
		b = inputData[randomIndex]['b'],
		n,
		question39 = {};

	t = parseInt(t);
    b= parseFloat(b);
    n = t/b;

	question39 = {
		'type': 'single',
		'id': '0439',
		'question': 'To fill a tank ' + t + 'buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to ' + b + ' two fifth of its present?',
		'options': {
			'A': n * parseFloat(Math.random()*10),
			'B': n + parseFloat(Math.random()*10),
			'C': n- parseFloat(Math.random()*10),
			'D': n 
		},
		'answer': 'D',
		'author-id': '04'
    }
	return question39;
}
function problem0440()
{
	var inputData = [{
		't': 150,
		'b': 2,
		's': 5
		},
		{
		't': 120,
		'b': 3,
			's': 7
		},
		{
		't': 110,
		'b': 4,
		's': 8
		},
		{
		't': 140,
		'b': 3,
			's': 6
		},
		{
		't': 180,
		'b': 2,
			's': 5
		}],
		randomIndex = getRandomNumber(inputData.length),
		t= inputData[randomIndex]['t'],
		b= inputData[randomIndex]['b'],
		s= inputData[randomIndex]['s'],
		p,
		question40 = {};

	p=(total-(b*4+s*6))*100/total;
	p=parseFloat(p);

	question40= {
		'type': 'single',
		'id': '0440',
		'question': "A batsman scored "+t+" runs which included "+b+" boundaries and "+s+" sixes. What percent of his total score did he make by running between the wickets?",
		'options': {
			'A': p- parseInt(Math.random()*10),
			'B': p+ parseInt(Math.random()*10),
			'C': p- parseInt(Math.random()*10),
			'D': p
		},
		'answer': 'D',
		'author-id': '04'
	}
	
	return question40;
	
}


	
	
