let score = 0
let numberOfQuestionsAnswered = 0
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
        const answerButton1 = document.createElement('button')
        answerButton1.id = 'Q' + this.id + 'B1'
        answerButton1.textContent = this.answer1
        const answerButton2 = document.createElement('button')
        answerButton2.id = 'Q' + this.id + 'B2'
        answerButton2.textContent = this.answer2
        const answerButton3 = document.createElement('button')
        answerButton3.id = 'Q' + this.id + "B3"
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

    whenTheyClickAnAnswer = (e) =>{
    //reason why it has to be written in arrow function
    //when regular function, the keyword this gets its value when function is executed
    //it is not executed until click happens
    //this now becomes the button you click
    //arrow functions allow this to be defined when the arrow function is defined
   
        if (e.target.innerText === this.right){
            alert("You got it right!")
            document.getElementById('Q' + this.id + "B1").disabled = true
            document.getElementById('Q' + this.id + "B2").disabled = true
            document.getElementById('Q' + this.id + 'B3').disabled = true
            let green = e.target.style.backgroundColor = 'Green'
            if (green) {
                let addOne = ++score
                addOne
            }
        }else{
            alert("You got it wrong!")
            e.target.style.backgroundColor = 'Red'
            document.getElementById('Q' + this.id + "B1").disabled = true
            document.getElementById('Q' + this.id + "B2").disabled = true
            document.getElementById('Q' + this.id + 'B3').disabled = true
            
        }

        numberOfQuestionsAnswered ++

        this.checkIfAnsweredAll()
        this.calculateScore()
       
     }

         checkIfAnsweredAll(){
             if(numberOfQuestionsAnswered === 3) {
                 const submitButton = document.getElementById('high-score-button');
                 submitButton.removeAttribute('hidden');
             }
         }

        calculateScore(){
          this.selectSubmitToEnd()
          
          let finalScore = document.getElementById('display-score')
          finalScore.textContent = `Congrats! Your score is ${score}`
         
           
        }

          selectSubmitToEnd(){
             let submitButton = document.getElementById('high-score-button')
             submitButton.addEventListener('click', this.endGame)
            }
         

         endGame = (e) =>{
            if (e.target.innerText === "Click here to submit your score to the high scores list"){
                let submitButton = document.getElementById('high-score-button')
                submitButton.setAttribute("hidden", true)
                let highscoreForm = document.getElementById('high-score-form-container')
    highscoreForm.removeAttribute("hidden")
    highscoreForm.className = ""
    
             }
         }
        
  }