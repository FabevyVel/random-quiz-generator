/*questionbank=[]
/*questionbank.push(problem141());
questionbank.push(problem142());
questionbank.push(problem143());
questionbank.push(problem144());
questionbank.push(problem145());
questionbank.push(problem146());
questionbank.push(problem147());
questionbank.push(problem148());
questionbank.push(problem149());
questionbank.push(problem1410());
questionbank.push(problem1411());
questionbank.push(problem1412());
questionbank.push(problem1413());
questionbank.push(problem1414());
questionbank.push(problem1415());
questionbank.push(problem1416());
questionbank.push(problem1417());
questionbank.push(problem1418());
questionbank.push(problem1419());
questionbank.push(problem1420());
questionbank.push(problem1421());



console.log(questionbank);
*/




var questionilank - { } 
     funtionKeys = [ ], 
     questionSet = [ ], 
     randomKeyIndex,
     wrapperElement = document.getElementById ( 'wrapper')
     generatorButton document.getElementById('generate- questions' ),
     question Template = < header> <h2> </h2>   </header> <section > <ul> </ul> </section> 
      //questionBank.push ( problem1401 ( ) ) ; // funtionkeys.push ( Object keys ( adhi ) ) ;
	   function clearData ( ) 
	  wrapperElement.innerHTML ="";
	   questionBank =  {}; 
	   funtionkeys = [ ]; 
	   questionset = [ ]; 
   }
   function createQuestionTemplate(questionObject) {
	    let questionwrapper = document.createElement ('div');
		     questionwrapper.classlist= 'question-wrapper';
			 questionwrapper.innerHTML= questionTemplate , 
			 questionElement =questionwrapper.getElementsByTagName ( 'h2')[0],
			 optionWrapperElement =questionwrapper.getElementsByTagName('ul')[0], 
			 answerElement= questionwrapper.getElementsByClassName ( 'answer')[0],
			 authorNameElement =questionwrapper.getElementsByClassName ( 'author')[0],
			authorAvatarElement= questionWrapper.getElementsByTagName ('img')[0],
			 // Update question 
			 questionElement.innerText =questionobject.question ; 
			  // Update options 
			 for ( option questionobject.options ){
				  let optionElement document.createElement ( 'li' );
				  optionElement.innerText = option " : " + questionObject.option

