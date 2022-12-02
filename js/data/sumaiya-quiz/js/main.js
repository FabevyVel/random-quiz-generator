var questionBank = {},
    funtionKeys = [],
    questionSet = [],
    randomKeyIndex,
    wrapperElement = document.getElementById('wrapper'),
    generatorButton = document.getElementById('generate-questions'),
    questionTemplate = '<header> <h2></h2> </header> <section> <ul> </ul> </section> <footer> <div class="d-flex"> <div class="answer"> <button>Show Answer</button> <strong class="answer"></strong> </div> <div class="author-wrapper"> <img src="" alt=""> <strong class="author"></strong> </div> </div> </footer>';

const QUESTIONCOUNT = 5;
//questionBank.push(problem1201());
// funtionKeys.push(Object.keys(sumaiya));

function clearData(){
    wrapperElement.innerHTML = "";
    questionBank = {};
    funtionKeys = [];
    questionSet = [];
}

function createQuestionTemplate(questionObject)
{
    let questionWrapper = document.createElement('div');
        questionWrapper.classList = 'question-wrapper';
        questionWrapper.innerHTML = questionTemplate,
        questionElement = questionWrapper.getElementsByTagName('h2')[0],
        optionWrapperElement = questionWrapper.getElementsByTagName('ul')[0],
        answerElement = questionWrapper.getElementsByClassName('answer')[0],
        authorNameElement = questionWrapper.getElementsByClassName('author')[0],
        authorAvatarElement = questionWrapper.getElementsByTagName('img')[0],

//Update question
    questionElement.innerText = questionObject.question;

//Update options 
for(option in questionObject.options)
{
        let optionElement = document.createElement('li');
        optionElement.innerText = option + ": " + questionObject.options[option]
        optionWrapperElement.append(optionElement);
    }
//Update answer
answerElement.innerText = questionObject.answer + ": " +questionObject.options[questionObject.answer];
//TODO: Implement 'Show Answer' feature
//Update author
//TODO: Get Author Info
   authorNameElement.innerText = questionObject['author-id'];
   wrapperElement.append(questionWrapper);
}
function generateQuestionData(){
//fetch from sumaiya
    for(let key in sumaiya)
	{
        questionBank[key] = sumaiya[key];
        funtionKeys.push(key);
    }
//TODO: fetch from other contributors

for(let i = 0; i < QUESTIONCOUNT; i++)
{
    randomKeyIndex = getRandomNumber(funtionKeys.length);
    questionSet.push(questionBank[funtionKeys[randomKeyIndex]]());
    funtionKeys.splice(randomKeyIndex, 1);
    }
}
function generateQuestionDOM(){
    questionSet.forEach(createQuestionTemplate);    
}

generatorButton.addEventListener('click', function(){
    clearData();
    generateQuestionData();
    generateQuestionDOM();
});