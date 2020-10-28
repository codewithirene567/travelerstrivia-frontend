class QuestionsAdapter{
    constructor(){
        this.baseUrl = "https://floating-citadel-25347.herokuapp.com/questions"
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
            let question = new Question(questionObject.id, questionObject.text,
                questionObject.right, questionObject.answer1, questionObject.answer2,
                questionObject.answer3, questionObject.country_id)
                
            question.addQuestiontoDOM()
        }
        
        
        })
}