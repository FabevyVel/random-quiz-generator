var questionilank = { } 
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