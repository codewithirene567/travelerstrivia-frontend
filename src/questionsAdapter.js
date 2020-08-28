class QuestionsAdapter{
    constructor(){
        this.baseUrl = "http://127.0.0.1:3000/questions"
    }

    fetchQuestions(id){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => renderQuestions(json,id))
      }
}

function renderQuestions(questions,id){
  
    
    questions.forEach(questionObject => {
        if (questionObject.country_id ==id) {
            console.log(questionObject)
            let question = new Question(questionObject.id, questionObject.text,
                questionObject.right, questionObject.answer1, questionObject.answer2,
                questionObject.answer3, questionObject.country_id)
                
            question.addQuestiontoDOM()
        }
        
        
        })
}