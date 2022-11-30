function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem1620(){
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
	
}

function problem2(){
	
}

function problem3(){
	
}