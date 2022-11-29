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
	
	

  
  

	
	 
		  
	
		
	
		
			   