class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor (questions, timeLimit, timeRemaining,) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    // 2. getQuestion()
    getQuestion() {
        return `${this.questions}`;
      }


    // 3. moveToNextQuestion()
    moveToNextQuestion() {
        return this.currentQuestionIndex ++;
      }


    // 4. shuffleQuestions()
    shuffleQuestions() {
     
      }

    // 5. checkAnswer(answer)
    checkAnswer(answer){
    const currentQuestion = this.getQuestion();    
    if(answer === currrentQuestion.answer){
       this.correctAnswers++;

        }
      
      }


    // 6. hasEnded()
    hasEnded() {
    
      }
}