 class Question{
     static arrayOfQuestions = []
     constructor(text, right, answer1, answer2, answer3, country_id){
        this.text = text
        this.right = right
        this.answer1 = answer1
        this.answer2 = answer2
        this.answer3 = answer3
        this.country_id = country_id
        Question.arrayOfQuestions.push(this)
     }
     addQuestiontoDOM(){
         const answerButton1 = document.createElement('button')
         answerButton1.textContent = this.answer1
         const answerButton2 = document.createElement('button')
         answerButton2.textContent = this.answer2
         const answerButton3 = document.createElement('button')
         answerButton3.textContent = this.answer3
         const placeForQuestions = document.querySelector('main')
         placeForQuestions.appendChild(answerButton1)
         placeForQuestions.appendChild(answerButton2)
         placeForQuestions.appendChild(answerButton3)
         answerButton1.addEventListener('click', this.whenTheyClickAnswer)
         answerButton2.addEventListener('click', this.whenTheyClickAnswer)
         answerButton3.addEventListener('click', this.whenTheyClickAnswer)
         
     }
 

whenTheyClickAnAnswer= (e) =>{
    if (e.target === "right")
    
  }
 }
