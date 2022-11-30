// 1st program

function getRandomNumber(max)
{
	var randomNumber=max *Math.random();
	randomNumber=parseInt(randomNumber);
	return randomNumber;
} 
function problem021()
{
	var inputData=[
		{
		'bucket':25,
		'capacity_of_tank':0.4
		},
		{
		'bucket':35,
		'capacity_of_tank':0.5
		},

		{
		'bucket':25,
		'capacity_of_tank':0.5
		},

		{
		'bucket':40,
		'capacity_of_tank':0.6
		}],
		randomIndex=getRandomNumber(inputData.length),
		bucket=inputData[randomIndex]['bucket'],
		capacity_of_tank=inputData[randomIndex]['capacity_of_tank'],
		number_of_bucket,
		question={};
		
	bucket=parseInt(bucket);
	capacity_of_tank=parseFloat(capacity_of_tank);
	number_of_bucket=(bucket/capacity_of_tank);
	
	question={
		'type':'single',
		'id':'021',
		'question':'To fill a tank '+ bucket+'bucket of water is required.how many bucket of water will be required to fill the same tank if the capacity of the bucket is required to two-fifth of its present',
		'options':{
			'A':number_of_bucket,
			'B':number_of_bucket - parseFloat(Math.random()*10),
			'C':number_of_bucket + parseFloat(Math.random()*10),
			'D':number_of_bucket - parseFloat(Math.random()*10),
		},
		'answer':'A',
		'author-id':'02'
	}
	return question;

}

// program 2

function problem022()
{
	var inputData = [{
		'distance': 600,
		'time': 5
		},
		{
		'distance':50,
		'time': 10
		},
		{
		'distance': 20,
		'time': 6
		},
		{
		'distance': 30,
		'time': 2
		},
		{
		'distance': 70,
		'time': 9
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
		'id': '022',
		'question': 'A person crosses  a  ' + distance + 'm  long  street  in  ' + time + 'min. What  is the speed in km/hr .',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '02'
	}
	
	return question;
	
}

  
  
  // program3

function problem023()
{  
	var inputData=[{
		'week':7,
		'days':6,
		'hours':10,
		'per_hour':3.40,
		'working_hour':4.20,
		'earn':532
	     },
		{
		'week':4,
		'days':5,
		'hours':8,
		'per_hour':2.40,
		'working_hour':3.20,
		'earn':432
		},
		{
		'week':5,
		'days':8,
		'hours':10,
		'per_hour':4.40,
		'working_hour':5.20,
		'earn':632
		},
		{
		'week':9,
		'days':3,
		'hours':5,
		'per_hour':5.40,
		'working_hour':6.20,
		'earn':232
	}],

	randomIndex = getRandomNumber(inputData.length),
	week=inputData[randomIndex]['week'],
	days= inputData[randomIndex]['days'],
	hours = inputData[randomIndex]['hours'],
	per_hour=inputData[randomIndex]['per_hour'],
	working_hour=inputData[randomIndex]['working_hour'],
	earn=inputData[randomIndex]['earn'],
	total_hours,
	calculate,
	multi,
	eque,
	
	question = {};
	week=parseInt(week);
	days=parseInt(days);
	hours=parseInt(hours);
	per_hour=parseFloat(per_hour);
	working_hour=parseFloat(working_hour);
	earn=parseInt(earn);
	total_hour=(week*days*hours);
	calculate=(total_hour*per_hour);
	multi=(earn-calculate);	
	eque=multi/working_hour;
	 
	 question=
	{
		'type':'single',
		'id':'023',
		'question':' In a regular  week  ,there are ' +   days   + '  and for each day tha working hour are '  +  hours  + ' .A man gets ' +  per_hour  + ' for regular week and ' + working_hour + ' per hour for overtime if the earn ' +  earn + ' in ' +  week + ' week then how many hours does he work for.',
		'options':
		{
			'A':eque-parseInt(Math.random()*10),
			'B':eque,
			'C':eque+parseInt(Math.random()*10),
			'D':eque-parseInt(Math.random()*10)
		},
		'answer':'B',
		'author_id':'02'
	}	
	return question;
}

// program4
function problem024()
{
	var inputData=[{
		'big':2,
		'small':2,
		'sub':3,
		'year':67,
		'count':35,
		'min':6
	},
	{
		'big':3,
		'small':5,
		'sub':3,
		'year':67,
		'count':25,
		'min':6
	},
	{
		'big':5,
		'small':2,
		'sub':3,
		'year':37,
		'count':35,
		'min':6
	},
	{
		'big':4,
		'small':2,
		'sub':3,
		'year':67,
		'count':95,
		'min':6
	}],
randomIndex = getRandomNumber(inputData.length),
big= inputData[randomIndex]['big'],
small=inputData[randomIndex]['small'],
sub=inputData[randomIndex]['sub'],
year=inputData[randomIndex]['year'],
count=inputData[randomIndex]['count'],
min=inputData[randomIndex]['min'],
family,

question = {};
big=parseInt(big);
small=parseInt(small);
sub=parseInt(sub);
year=parseInt(year);
count=parseInt(count);
min=parseInt(min);
family=((year*big)+(small*count)+(sub*min)/6);

question={
	'type':'single',
	'id':'024',
	'question':'A family consists of '+ big +'  grandParent, '+  small +'  parents and '+ sub +'  children the average age of the grand parents is  '+year+' years that ofthe parent is '+count +' and that of the grandchildren is '+ min+' what is the average age of the family' ,
	'options':{
		'A':family,
		'B':family - parseInt(Math.random()*10),
		'C':family + parseInt(Math.random()*10),
		'D':family - parseInt(Math.random()*10),
	},
	'answer':'A',
	'author-id':'02'
}
return question;
}

// program 5
function problem025()
{
	var inputData = [{
		'start':9,
		'mid':3.5,
		'end':55
	},
	{
	'start':3,
	'mid':4.5,
	'end':45
    },
	{
	'start':8,
	'mid':2.5,
	'end':65
    },	
	{
    'start':10,
	'mid':5.5,
	'end':75
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
		'id':'025',
		'question':' the average weight of the '+ start+'  increased by '+ mid +' kg when a new person comes in place of one of them weighting '+ end +' of the new person.',
		'option':
		{
			'A':total - parseInt(Math.random()*10),
			'B':total + parseInt(Math.random()*10),
			'C':total,			
			'D':total - parseInt(Math.random()*10),
		},
		'answer':'C',
		'author-id':'02'
		}
		return question;
	}

// program 6
	function problem026()
	{
		var inputData = [{
			'distance': 800,
			'time': 50
			},
			{
			'distance':50,
				'time': 10
			},
			{
			'distance': 20,
			'time': 6
			},
			{
			'distance': 30,
			'time': 2
			},
			{
			'distance': 800,
				'time': 5
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
			'id': '026',
			'question':'A person crosses  a  ' + distance + 'm  long  street  in  ' + time + 'min. What  is the speed in km/hr ',
			'options': {
				'A': speed - parseInt(Math.random()*10),
				'B': speed - parseInt(Math.random()*10),
				'C': speed + parseInt(Math.random()*10),
				'D': speed,
			},
			'answer': 'D',
			'author-id': '02'
		}
		return question;
	}
	
	
// program7


	function problem027(){
		var inputData = [{	
			'train_1':7,
			'train_2':8,
			'runs':400,
			'hours':4
		},
		{
		'train_1':9,
		'train_2':10,
		'runs':300,
		'hours':4
	    },
		{
	    'train_1':3,
	    'train_2':6,
	    'runs':500,
		'hours':5
        },
		{
	   'train_1':8,
	    'train_2':9,
	    'runs':400,
	    'hours':4
     }],
	 randomIndex = getRandomNumber(inputData.length),
	 train_1=inputData[randomIndex]['train_1'],
	 train_2=inputData[randomIndex]['train_2'],
	 runs=inputData[randomIndex]['runs'],
	 hours=inputData[randomIndex]['hours'],	
	 speed,
	 cross,
	 question={};
	 train_1=parseInt(train_1);
	 train_2=parseInt(train_2);
	 runs=parseInt(runs);
	 hours=parseInt(hours);
	 speed=((runs/hours)/train_2);
	 cross=train_1*speed;
	 
	 question={
		 'type':'single',
		 'id':'027',
		 'question':'The ratio between the speed of two tains is '+train_1 +' '+ train_2+' if the second train runs '+ runs+' km in '+hours+' hours then the speed of the first train is',
	     'option':{
			 'A':cross,
			 'B': cross - parseInt(Math.random()*10),
			 'C': cross + parseInt(Math.random()*10),
			 'D': cross - parseInt(Math.random()*10),
	     },
		 'answer':'A',
		 'author_id':'02'
	 }
	 return question;
	 }
	 
// program 8

	 function problem028(){
	 	var inputData = [{
			'stream':16,
			'hours_1':2,
			'hours_2':4
		    },
			{
		  'stream':18,
		  'hours_1':4,
			'hours_2':5
	       },
		   {
	      'stream':19,
	      'hours_1':3,
	      'hours_2':4
          },
		  {
	     'stream':20,
	     'hours_1':2,
	      'hours_2':4
      }],
	  randomIndex = getRandomNumber(inputData.length),
	  stream=inputData[randomIndex]['stream'],
	  hours_1=inputData[randomIndex]['hours_1'],
	  hours_2=inputData[randomIndex]['hours_2'],
	  speed,
	  speed_1,
	  total,
	  question={};
	  stream=parseInt(stream);
	  hours_1=parseInt(hours_1);
	  hours_2=parseInt(hours_2);
	  speed=(stream/hours_1);
	  speed_1=(stream/hours_2);
	  total=(1/2*(speed+speed_1));
	  question=
	  {
		  'type':'single',
		  'id':'028',
		  'question':' A boat running downstream covers a distance of '+ stream +' km in '+hours_1+' while for covering the same distance upstream it takes '+ hours_2 +' what is the speed of the boat in still water',
		  'option':
		  {
			  'A':speed,
			  'B':speed - parseInt(Math.random()*10),
			  'C':speed + parseInt(Math.random()*10),
			  'D':speed - parseInt(Math.random()*10)
		  },
		  'answer':'A',
		  'author-id':'02'
	  }
	  return question;
  }
  
  
  // program 9

  function problem029(){
  	var inputData = [{
		'still_water':20,
		'distance':6,
		'down_stream':13
	   },
	   {
	    'still_water':15,
	   'distance':3,
	   'down_stream':12
       },
	   {
	   'still_water':30,
	   'distance':4,
	   'down_stream':6
      },
	  {
	  'still_water':60,
	  'distance':4,
	  'down_stream':6
      }],
	  randomIndex = getRandomNumber(inputData.length),
	  still_water=inputData[randomIndex]['still_water'],	  
	  distance=inputData[randomIndex]['distance'],
	  down_stream=inputData[randomIndex]['down_stream'],
	  speed,
	  total,
	  question={};
	  still_water=parseInt(still_water);
	  distance=parseInt(distance);
	  down_stream=parseInt(down_stream);
	  speed=(still_water+distance);
	  total=(speed*(down_stream/60));
	  question={
		  'type':'single',
		  'id':'029',
		  'question':'The speed of a bost in still waterin '+still_water+' and the rate of current is '+distance+' km/hr the distance travelled downstream in '+down_stream+' min is',
	      'options':{
			  'A':total-parseInt(Math.random()*10),
			  'B':total,
			  'C':total+parseInt(Math.random()*10),
			  'D':total-parseInt(Math.random()*10),
	      },
		  'answer':'B',
		  'author-id':'02'
	  }
	  return question;
	  }
	  
	
 
 // program 10 
	  

	  function problem210(){
	  	var inputData = [{
			'man_buys':20,
			'paying':9,
			'interest':12
			}, 
			{
		    'man_buys':20,
		    'paying':9,
		    'interest':12
		    },
			{
		    'man_buys':20,
		    'paying':9,
		    'interest':12
		    },
			{
		   'man_buys':20,
		   'paying':9,
		   'interest':12
		   }],
		   randomIndex = getRandomNumber(inputData.length),
		   man_buys=inputData[randomIndex]['man_buys'],
		   paying=inputData[randomIndex]['paying'],
		   interest=inputData[randomIndex]['interest'],
		   shares,
		   market_value,
		   question={};
		   
		   man_buys=parseInt(man_buys);
		   paying=parseInt(paying);
		   interest=parseInt(interest);
		   shares=((paying/100)*man_buys);
		   market_value=(100/interest*(shares));
		   
		   question=
		   {
			   'type':'single',
			   'id':'210',
			   'question':'A man buys '+ man_buys+' shares paying '+paying+' divident the man wants to have an interest of '+ interest+' on his money the market value of each shares is',
			   'option':
			   {
				   'A':market_value,
				   'B':market_value - parseInt(Math.random()*10),
				   'C':market_value + parseInt(Math.random()*10),
				   'D':market_value - parseInt(Math.random()*10),
			   },
			   'answer':'A',
			   'author_id':'02'
		   }
		   return question;
	   }
  
  
  // program 11

	   function problem211(){
	   	var inputData = [{
			'speed':30,
			'distance':300
		     },
			 {
		   'speed':20,
		   'distance':400
	        },
		    {
	      'speed':50,
	      'distance':200
           },
	      {
         'speed':30,
         'distance':600
          }],
		  randomIndex = getRandomNumber(inputData.length),
		  speed=inputData[randomIndex]['speed'],
		  distance=inputData[randomIndex]['distance'],
		  time,
		  questio={};
		  speed=parseInt(speed*5/18);
		  distance=parseInt(distance);
		  time=(distance/speed)/60;
		  
		  question={
			  'type':'single',
			  'id':'211',
			  'question':'How many times minutes does Aditya take to cover a distance of '+ distance+' if the runs at a speed of '+ speed+' km/hr',
		      'options':
			  {
			  	'A':time - parseInt(Math.random()*10),
				 'B':time,
				 'C':time + parseInt(Math.random()*10),
				 'D':time - parseInt(Math.random()*10),
			  },
			  'answer':'B',
			  'author-id':'02'
		  }
		  return question;
		  }
		  
			 
// program 12

		  function problem212(){
		  	var inputData = [{
			'pipeA':36,
			'pipeB':45
			},
			{
		    'pipeA':46,
		    'pipeB':35
		    },
			{
		    'pipeA':56,
		    'pipeB':40
		    },
			{
		   'pipeA':20,
			'pipeB':5
		   }],
		   randomIndex = getRandomNumber(inputData.length),
		   pipeA=inputData[randomIndex]['pipeA'],
		   pipeB=inputData[randomIndex]['pipeB'],
		   fill_tank,
		   question={};
		   
		   pipeA=parseInt(1/pipeA);
		   pipeB=parseInt(1/pipeB);
		   fill_tank=(pipeA + pipeB);
		   question ={
			   'type':'single',
			   'id':'212',
			   'question':'Two pipes A and B can fill a tank in '+ pipeA + ' hours and '+ pipeB +' hours respectively.If both the pipes are opened simultaneously, how much time will be taken to fill the tank',
			   'options':
			   {
			   'A':fill_tank,
			   'B':fill_tank - parseInt(Math.random()*10), 
			   'C':fill_tank + parseInt(Math.random()*10),
			   'D':fill_tank - parseInt(Math.random()*10),
		       },
		       'answer':'A',
		       'author-id':'02'
	          }
	   return question;
   }
		   
		   
	// program13
   

   function problem213(){
   	var inputData = [{
		'oil':25
	},
	{
	'oil':35
    },
	{
	'oil':45
    },
	{
	'oil':15
    }],
	randomIndex = getRandomNumber(inputData.length),
	oil=inputData[randomIndex]['oil'],
	increase,
	question={};
	oil=parseInt(oil);
	// formula [(R/R+100)*100]
	increase=((oil/oil+100)*100);
	question={
		'type':'single',
		'id':'213',
		'question':'In the budget the price of kersence oil nose by '+ oil +' by how much precent must a person reduce his consumption so that his expensive on it does not increase',
		'options':
		{  
		'A':oil,
		'B':oil - parseInt(Math.random()*10),
		'C':oil + parseInt(Math.random()*10),
		'D':oil - parseInt(Math.random()*10),
	},
	'answer':'A',
	'author-id':'02'
}
return question;
}




// program 14

function problem214(){
	var inputData = [{
		'score':100,
		'boundaries':4,
		'six':4
	},
	{
	'score':200,
	'boundaries':4,
	'six':6
    },
	{
	'score':110,
	'boundaries':3,
	'six':8
    },
	{
	'score':150,
	'boundaries':7,
	'six':3
    }],
   randomIndex = getRandomNumber(inputData.length),
   score=inputData[randomIndex]['score'],
   boundaries=inputData[randomIndex]['boundaries'],
   six=inputData[randomIndex]['six'],
	total,
	running,
	question={};
	
	score=parseInt(score);
	boundaries=parseInt(boundaries*4);
	six=parseInt(six*6);
	total=score-(boundaries+six);
	running=(total/score)*100;
	
	question={
		'type':'single',
		'id':'214',
		'question':' A batsman scored '+ score +' runs which included '+ boundaries+' and '+ six+'.what present of his total score did he make by running between the wickets',
		'optins':{
			'A':running - parseInt(Math.random()*10),
			'B':running + parseInt(Math.random()*10),
			'C':running,
			'D':running - parseInt(Math.random()*10),
		},
		'amswer':'C',
		'author-id':'02'
	}
	return question;
	}
	
// program 15

	function problem215(){
		var inputData = [{
			'speed':20,
			'time':15
			},	
			{
		   'speed':30,
			'time':20
		    },
			{
	      'speed':40,
	      'time':15
	      },
		  {
         'speed':72,
		  'time':30
         }],
	randomIndex = getRandomNumber(inputData.length),
		 speed=inputData[randomIndex]['speed'],
		 time=inputData[randomIndex]['time'],
		 distance,
		 question={};
		 speed=parseInt(speed);
		 time=parseInt(time);
		 distance=(speed*time);
		 
		 question={
			 'type':'single',
			 'id':'215',
			 'question':' What distance will be covered by a bus moving at '+ speed +' kmph in '+ time +' 30 sec',
			 'options':
			 {
			 'A':distance - parseInt(Math.random()*10),			 
			 'B':distance + parseInt(Math.random()*10),
			 'C':distance - parseInt(Math.random()*10),
			 'D':distance,
		  },
		  'answer':'D',
		  'author-id':'02',
	  }
	  return question;
  }
  
  
// program 16 
  

  function problem216(){
  	var inputData = [{
		'speed':108
	},
	{
	'speed':208
    },
	{
	'speed':138
    },
	{
	'speed':168
    }],
	randomIndex = getRandomNumber(inputData.length),
	speed=inputData[randomIndex]['speed'],
	total,
	question={};
	speed=parseInt(speed);
	total=speed*(5/18);
	
	question={
		'type':'single',
		'id':'216',
		'question':' A train with a speed of '+ speed +' km/ph .Its speed in meter pre second is',
		'options':
		{
		'A':total,
		'A':total - parseInt(Math.random()*10),
		'A':total - parseInt(Math.random()*10),
		'A':total - parseInt(Math.random()*10),
	},
	'answer':'A',
	 'author-id':'02',
}
return question;
}


// program 17


function problem217(){
	var inputData = [{
		'speed':15,
		'stream':3,
		'downStream':20
	},
	{
	'speed':13,
	'stream':4,
	'downStream':68
   },
   {
	'speed':15,
	'stream':3,
   'downStream':50
  },
  {
	'speed':20,
  'stream':6,
  'downStream':60
  }],
  randomIndex = getRandomNumber(inputData.length),
  speed=inputData[randomIndex]['speed'],
  stream=inputData[randomIndex]['stream'],
  downStream=inputData[randomIndex]['downStream'],
  boat,
  time,
  question={};
  
  speed=parseInt(speed);
  stream=parseInt(stream);
  downStream=parseInt(downStream);
  boat=(speed+stream);
  time=(downStream/boat);
  question={
	  'type':'single',
	  'id':'217',
	  'question':' A boat can travel with a speed of '+ speed +' km/hr in still water. If the speed of the stream is '+ stream +' km/hr find the time taken by the boat to go '+ downStream +' downStream',
	  'options':
	  {
	  'A':time - parseInt(Math.random()*10),
	  'B':time,
	  'C':time + parseInt(Math.random()*10),
	  'D':time - parseInt(Math.random()*10),
  },
  'answer':'B',
  'author-id':'02'
}
return question;
}


// program 18


function problem218(){
	var inputData = [{
		'apple_sold':40,
		'remaining_apple':60,
		'still':420,
	},
	{
	'apple_sold':30,
	'remaining_apple':50,
	'still':320,
    },
	{
	'apple_sold':40,
	'remaining_apple':80,
	'still':220,
    },
	{
	'apple_sold':70,
	'remaining_apple':30,
	'still':520,
    }],
	randomIndex = getRandomNumber(inputData.length),
	apple_sold=inputData[randomIndex]['apple_sold'],
	remaining_apple=inputData[randomIndex]['remaining_apple'],
	still=inputData[randomIndex]['still'],
	fruit,
	question={};
	apple_sold=parseInt(apple_sold);
	remaining_apple=parseInt(remaining_apple);
	still=parseInt(still);
	 // 100-40=60
	fruit=(100/60)*420;
	question={
		'type':'single',
		'id':'218',
		'question':' A fruit seller had some apples.He sells '+ apple_sold +' apples and still has '+ still +' .Originally he had',
		'options':
		{
		'A':fruit,
		'B':fruit - parseInt(Math.random()*10),
		'C':fruit + parseInt(Math.random()*10),
		'D':fruit - parseInt(Math.random()*10),
	},
	'answer':'A',
	'author-id':'02'
}
return question;
}

// program 19

function problem219(){
	var inputData = [{
		'income':600,
		'stock':10,
		'inversment':90
	},
	{
	'income':700,
	'stock':20,
	'inversment':80
    },
	{
	'income':650,
	'stock':10,
	'inversment':96
    },
	{
	'income':630,
	'stock':15,
	'inversment':30
    }],

   randomIndex = getRandomNumber(inputData.length),
	income=inputData[randomIndex]['income'],
	stock=inputData[randomIndex]['stock'],
	inversment=inputData[randomIndex]['inversment'],
	total,
	question={};
	income=parseInt(income);
	stock=parseInt(stock);
	inversment=parseInt(inversment);
	total=(inversment/stock)*income;
	
	question={
		'type':'single',
		'id':'219',
		'question':'In order to obtain an income of '+ income +' from '+ stock +' at '+inversment +' one ost an inversement of',
		'option':
		{
		'A':total - parseInt(Math.random()*10), 
		'B':total + parseInt(Math.random()*10),
		'C':total,
		'A':total - parseInt(Math.random()*10),
	},
	'answer':'C',
	'author-id':'02'
}
return question;
}

// program 20


function problem220(){
	var inputData = [{
		'buys':4800,
		'repair':850,
		'sells':5800
	},
	{
	'buys':5700,
	'repair':800,
	'sells':5000
    },
	{
	'buys':3700,
	'repair':800,
	'sells':5900
    },
	{
	'buys':4700,
	'repair':800,
	'sells':5800
    }],
 randomIndex = getRandomNumber(inputData.length),
	buys=inputData[randomIndex]['buys'],
	repair=inputData[randomIndex]['repair'],
	sells=inputData[randomIndex]['sells'],
	calc,
	profit,
	percent,
	question={};
	buys=parseInt(buys);
	repair=parseInt(repair);
	sells=parseInt(sells);
	calc=(buys+repair);
	profit=(sells-calc);
	percent=(profit/calc)*100;
	
	question={
		'type':'single',
		'id':'220',
		'question':'Alfered buys an old scooter for '+ buys +' and spend '+repair +' on its repair.If he sells the scooter for '+ sells +' his gain percent is',
		'options':
		{
		'A':percent - parseInt(Math.random()*10),
		'B':percent + parseInt(Math.random()*10),
		'C':percent - parseInt(Math.random()*10),
		'D':percent,
	},
	'answer':'D',
	'author-id':'02'
}
return question;
}

// program 21

function problem0221(){
	var inputData = [{
		'distanceStart':200,
		'time': 74,
		'distanceEnd':350
	     },
		 {
		'distanceStart':640,
		'time': 94,
		'distanceEnd':700
		},
		{
		'distanceStart':200,
		'time': 20,
		'distanceEnd':900
		},
		{
		'distanceStart':340,
		'time': 14,
		'distanceEnd':490
		}],
		randomIndex = getRandomNumber(inputData.length),
	    distanceStart = inputData[randomIndex]['distanceStart'],
		time = inputData[randomIndex]['time'],
    	distanceEnd = inputData[randomIndex]['distanceEnd'],
	    speed,
	    total,
		question = {};
		
	    distance=parseInt(distanceStart);
		time=parseInt(time);
		distanceEnd=parseInt(distanceEnd);
		speed=distanceStart/time;
	    total=((distanceStart+distanceEnd)/speed);


	question = {
		'type': 'single',
		'id': '0221',
		'question': 'A train '+distanceStart+' m long passes a pole in '+time+' seconds. How long will it take to pass a platform '+distanceEnd+' m long',
		'options': {
			'A': time - parseInt(Math.random()*10),
			'B': time + parseInt(Math.random()*10),
			'C': time,
			'D': time - parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '02'
	}
	
	return question;
	
}

// program  22	
function problem0222(){
	var inputData = [{
		'interest': 8000,
		'capital': 1550,
		'amount': 50
		},
		{
		'interest': 1000,
		'capital': 100,
		'amount': 3
		},
		{
		'interest': 4530,
		'capital': 1000,
		'amount': 6
		},
		{
		'interest': 5500,
		'capital': 1400,
		'amount': 8
		},
		{
		'interest': 4320,
		'capital': 300,
		'amount': 8
		}],
		randomIndex = getRandomNumber(inputData.length),
		interest= inputData[randomIndex]['interest'],
		capital= inputData[randomIndex]['capital'],
		amount= inputData[randomIndex]['amount'],
		count,
		question = {};
	
	interest=parseInt(interest);
	capital=parseInt(capital);
	amount=parseInt(amount);
	count= (interest*100)/(capital*amount);

	question = {
		'type': 'single',
		'id': '0222',
		'question': 'In how many years the simple interest on '+ capital +' at '+ amount +' rate of interest s.I will become '+ interest+'',
		'options': {
			'A': count - parseInt(Math.random()*10),
			'B': count + parseInt(Math.random()*10),
			'C': count - parseInt(Math.random()*10),
			'D': count
		},
		'answer': 'D',
		'author-id': '02'
	}
	
	return question;
}


// program 23



function problem0223(){
	var inputData = [{
		'price': 1000,
		'gain': 35
		},
		{
		'price': 600,
		'gain': 15
		},
		{
		'price': 1335,
			'gain': 65
		},
		{
		'price': 208,
		'gain': 32
		},
		{
		'price': 605,
		'gain': 65
		}],
		randomIndex = getRandomNumber(inputData.length),
		price= inputData[randomIndex]['price'],
		gain = inputData[randomIndex]['gain'],
		cost,
		question = {};


	price = parseInt(price);
	gain = parseInt(gain);
	cost = (100/(100+gain)*price);


	question = {
		'type': 'single',
		'id': '0223',
		'question': 'banu purchase cell phone from a shop. If he sells at Rs' + price +'and earns a profit of '+ gain  +'. Find the cost price of the cell phone.',
		'options': {
			'A': cost + parseInt(Math.random()*10),
			'B': cost,
			'C': cost + parseInt(Math.random()*10),
			'D': cost - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '02'
	}
	
	return question;
		
}

// program24
function problem0224(){
		var inputData = [{
			'start':64,
			'end':2
			},
			{
			'start':90,
				'end':8
			},
			{
			'start': 21,
				'end':4
			},
			
			{
			'start': 203,
			'end':50
			}],
			randomIndex = getRandomNumber(inputData.length),
			start= inputData[randomIndex]['start'],
			end= inputData[randomIndex]['end'],
		    
			
			count=100;
		 
			start=parseInt(start);
		    start=count*(start+count)/count;
			
			end=parseInt(end);
			total=(100+end)/100*count;
			main=(start-total)*count/start;
		
			question12 = {};
			
			
	  question12 = {
			'type': 'single',
			'id': '0224 ',
			'question': 'A trader keeps the marked price of an item '+start+'% above its cost price. The percentage of discount allowed to gain '+end+'% is',
			'options': {
				'A':main-parseInt(Math.random()*10),
				'B':main+parseInt(Math.random()*10),
				'C':main-parseInt(Math.random()*10),
				'D':main
			},
			'answer': 'D',
			'author-id': '02'
		}
		return question12 ;
	
}

  // program25


function problem0225(){
	var inputData = [{
		'height': 54,
		'bottom': 20
		},
		{
		'height': 20,
		'bottom': 18
		},
		{
		'height': 88,
		'bottom': 32
		},
		{
		'height': 60,
		'bottom': 30
		},
		{
		'height': 20,
		'bottom': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
		height = inputData[randomIndex]['height'],
		bottom = inputData[randomIndex]['bottom'],
		total,
		question = {};

	height = parseInt (height);
	bottom = parseInt (bottom);
	total = 2*(height+bottom);

	question = {
		'type': 'single',
		'id': '0225',
		'question': '  calculate the total of the Rectangle with length '+ height +' cm and breadth'+ bottom + 'cm .',
		'options': {
			'A': total + parseInt(Math.random()*10),
			'B': total - parseInt(Math.random()*10),
			'C': total - parseInt(Math.random()*10),
			'D': total
		},
		'answer': 'D',
		'author-id': '02'
	}
	
	return question;	
}

// program 26
function problem0226(){
	var inputData = [{
		'num': 8534,		
		},
		{
		'num': 8345,
		},
		{
		'num': 2456,	
		},
		{
		'num': 7835,		
		},
		{
		'num': 9235,	
		}],
		randomIndex = getRandomNumber(inputData.length),
		num= inputData[randomIndex]['num'],
		multi,
		question = {};

	num=parseInt(num);
	multi=parseInt(multi);

	question = {
		'type': 'single',
		'id': '0226',
		'question': 'find the cube root value of '+ num+' ',
		'options': {
			'A':multi,
			'B':multi - parseInt(Math.random()*10),
			'C':multi + parseInt(Math.random()*10),
			'D':multi - parseInt(Math.random()*10),
		},
		'answer': 'A',
		'author-id': '02'
	}
	
	return question;
	
}

// program27

function problem0227(){
	var inputData = [{
		'cp': 7000,
		'gp': 20
		},
		{
		'cp': 2500,
			'gp': 15
		},
		{
		'cp': 4300,
			'gp': 200
		},
		{
		'cp': 2000,
		'gp': 63
		},
		{
		'cp': 3090,
		'gp': 30
		}],
	randomIndex = getRandomNumber(inputData.length),
		cp= inputData[randomIndex]['cp'],
		gp = inputData[randomIndex]['gp'],
		sp,
		question = {};
		
    cp=parseInt(cp);
	gp=parseInt(gp);
	sp=((100+gp)/100)*cp;

	question = {
		'type': 'single',
		'id': '0227',
		'question': 'kavi bought a chair for '+ cp +' and sold it to banu. If kavi earned a profit of '+ gp+'%, find the selling price of chair.',
		'options': {
			'A': sp - parseInt(Math.random()*10),
			'B': sp,
			'C': sp + parseInt(Math.random()*10),
			'D': sp - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '02'
	}
	
	return question;
	
}	

// program 28
function problem0228(){
	var inputData = [{
		'boy':50,
		'years': 20,
		'leave': 17,
		'new_1': 13.5
		},
		{
		'boy': 70,
		'years': 10,
		'leave': 2,
		'new_1': 70.4
		},
		{
		'boy': 10,
		'years': 93,
		'leave': 16,
		'new_1':70.7
		},
		{
		'boy':70,
		'years': 96,
		'leave': 79,
		'new_1': 18.8
		}],
		randomIndex = getRandomNumber(inputData.length),
		boy = inputData[randomIndex]['boy'],
		years = inputData[randomIndex]['years'],
		leave = inputData[randomIndex]['leave'],
		new_1 = inputData[randomIndex]['new_1'],
		average,
		total,
		question = {};
	

	average=boy*years;
	total=(new_1*boy)-average+leave;


	question = {
		'type': 'single',
		'id': '0228',
		'question': 'Average age of a group of' + boy + 'boys is' + years + 'years. A boy of age' + leave + 
					'leaves the group and a new boy joins the group. If the new average age of the group is' + new_1 + 
					'years, find the age of the new boy.',
		'options': {
			'A': total - parseFloat(Math.random()*10),
			'B': total - parseInt(Math.random()*10),
			'C': total + parseInt(Math.random()*10),
			'D': total
		},
		'answer': 'D',
		'author-id': '02'
	}
	
	return question;
	
}

// program 29

function problem0229(){
	var inputData = [{
		'bill':25,
		'reduce': 130
		},
		{
		'bill':30,
		'reduce': 200
		},
		{
		'bill':40,
		'reduce': 150
		},
		{
		'bill':20,
		'reduce': 100
		}],
		randomIndex = getRandomNumber(inputData.length),
		bill= inputData[randomIndex]['bill'],
		reduce = inputData[randomIndex]['reduce'],
		total,
		question = {};
	
	
	pay=reduce-bill;
	total=(reduce/pay)*100;

	question = {
		'type': 'single',
		'id': '0229',
		'question': 'the' + bill + ' of an electricity bill is deducted then rs' + reduce + 'is still to be paid .How much was the total bill',
		'options': {
			'A': total + parseInt(Math.random()*10),
			'B': total,
			'C': total + parseInt(Math.random()*10),
			'D': total - parseFloat(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '02'
	}
	
	return question;
	
}

// program 30
function problem0230(){
	var inputData = [{
		'first':30,
		'book': 1000,
		'time': 5
		},
		{
		'first':20,
		'book': 200,
		'time': 5
		},
		{
		'first':80,
		'book': 250,
		'time': 2
		},
		{
		'first':60,
		'book': 300,
			'time': 9
		}],
		randomIndex = getRandomNumber(inputData.length),
		first= inputData[randomIndex]['first'],
		book = inputData[randomIndex]['book'],
		time = inputData[randomIndex]['time'],
		average,
		total,
		question = {};
	
	
	average=book/first;
	total=average/time;

	question = {
		'type': 'single',
		'id': '0230',
		'question': + first + 'typists can type' + book + 'pages in' + time + 
					'hours.Find the average number of pages typed by each typist in an hour.',
		'options': {
			'A': total + parseInt(Math.random()*10),
			'B': total - parseInt(Math.random()*10),
			'C': total + parseInt(Math.random()*10),
			'D': total
		},
		'answer': 'D',
		'author-id': '02'
	}
	
	return question;
	
}


// program 31

function problem0231(){
	var inputData = [{
		'calc': 300,
		'amount': 81,
		'hour': 2
		},
		{
		'calc': 550,
		'amount': 20,
			'hour': 4
		},
		{
		'calc': 854,
		'amount': 83,
			'hour': 9
		},
		{
		'calc': 900,
		'amount': 80,
			'hour': 3
		}],
	 randomIndex = getRandomNumber(inputData.length),
		calc= inputData[randomIndex]['calc'],
		hour = inputData[randomIndex]['hour'],
		amount = inputData[randomIndex]['amount'],
		si,
		question = {};

	calc=parseInt(calc);
	hour=parseInt(hour);
		amount=parseInt(amount);
	si=(calc*hour*amount/100);

	question = {
		'type': 'single',
		'id': '0231',
		'question': 'How much time will it take for an' +calc+ 'to yield' +hour+ 'as interest at' +amount+ 'P.A of simple interest',
		'options': {
			'A':si + parseInt(Math.random()*10),
			'B':si + parseInt(Math.random()*10),
            'C' :si + parseInt(Math.random()*10),
			'D':si
		},
		'answer': 'D',
		'author-id': '02'
	}
	
	return question;
}



  

	

	
	

  
  

	
	 
		  
	
		
	
		
			   