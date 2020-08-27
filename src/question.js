 class Question{
     static arrayOfQuestions = []
     constructor(id, text, right, answer1, answer2, answer3, country_id){
        this.id = id
        this.text = text
        this.right = right
        this.answer1 = answer1
        this.answer2 = answer2
        this.answer3 = answer3
        this.country_id = country_id
        
        Question.arrayOfQuestions.push(this)
     }
     addQuestiontoDOM(){
         const textOfQuestion = document.createElement('h5')
         textOfQuestion.textContent = this.text
         console.log(this)
         const answerButton1 = document.createElement('button')
         answerButton1.textContent = this.answer1
         const answerButton2 = document.createElement('button')
         answerButton2.textContent = this.answer2
         const answerButton3 = document.createElement('button')
         answerButton3.textContent = this.answer3
         const placeForQuestions = document.querySelector('main')
         placeForQuestions.appendChild(textOfQuestion)
         placeForQuestions.appendChild(answerButton1)
         placeForQuestions.appendChild(answerButton2)
         placeForQuestions.appendChild(answerButton3)
         answerButton1.addEventListener('click', this.whenTheyClickAnAnswer)
         answerButton2.addEventListener('click', this.whenTheyClickAnAnswer)
         answerButton3.addEventListener('click', this.whenTheyClickAnAnswer)
         
     }
 

whenTheyClickAnAnswer= (e) =>{
    console.log(this.answer1)
    console.log(e.target.innerText)
    
    if (e.target.innerText === this.answer1){
        alert("You got it right!")
        e.target.style.backgroundColor = 'Green'
    }else{
        alert("You got it wrong!")
        e.target.style.backgroundColor = 'Red'
    }
   
}
 }
