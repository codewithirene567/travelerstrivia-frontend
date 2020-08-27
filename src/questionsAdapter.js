class QuestionsAdapter{
    constructor(){
        this.baseUrl = "http://127.0.0.1:3000/questions"
    }

    fetchQuestions(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => renderQuestions(json))
      }
}

function renderQuestions(questions){
   
    
    questions.forEach(questionObject => {
        console.log(questionObject)
        let question = new Question(questionObject.id, questionObject.text,
            questionObject.right, questionObject.answer1, questionObject.answer2,
            questionObject.answer3, questionObject.country_id)
            //debugger
        question.addQuestiontoDOM()
        
        })
}