class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    // this.title.hide()
    // this.button.hide()
    // this.input.hide()
    // this.input2.hide()
    // this.question.hide()
    // this.option1.hide()
    // this.option2.hide()
    // this.option3.hide()
    // this.option4.hide()

    //write code to change the background color here
    
     background("yellow");
     fill(0)
     textSize(30)

    //write code to show a heading for showing the result of Quiz
    //var title1 = createElement('h2')
    //this.title1.html("Results Of The Quiz");
    //this.title1.position(350, 0);
    text("results of the quiz",350,50)
    text("----------------",320,65)

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()


    //write condition to check if contestantInfor is not undefined
    if (allContestants !== undefined){
      debugger;
      var display_Answers=230
      
      fill("blue");
      textSize(20);
      text("NOTE : Contestants who answered correct are highlighted in green colour !",130,230)

    
    //}

    //write code to add a note here

    //write code to highlight contest who answered correctly

    for (var plr in allContestants){
      var correctAnswer= "2";
      if (correctAnswer === allContestants[plr].answer)
        fill("green");
      else
        fill("red")
      display_Answers+=30
      textSize(20)
      text(allContestants[plr].name+":  "+allContestants[plr].answer,250,display_Answers)

    }

    }
  }

}
