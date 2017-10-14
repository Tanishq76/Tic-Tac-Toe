$("document").ready(function(){
  // to store computer is X or O
  var computer =[];
  //to store player is X or O
  var select=[];
// select X on clicking select X button
  $("#X").click(function (){
    select=[];
    computer =[];
    select.push("X");
    computer.push("O");
    reset();
  });
  // select O on clicking select O button
  $("#O").click(function (){
    select=[];
    computer =[];
    var status;
    select.push("O");
    computer.push("X");
    reset();
  });
  // checks win of player and computer
  function checkWin(){
    if ($("#1").html()===select[0] && $("#2").html()===select[0] && $("#3").html()===select[0]){
      window.alert("Player  wins");
      status= true;
    } else if ($("#4").html()===select[0] && $("#5").html()===select[0] && $("#6").html()===select[0]){
        window.alert("Player  wins");
        status= true;
      } else if ($("#7").html()===select[0] && $("#8").html()===select[0] && $("#9").html()===select[0]){
          window.alert("Player wins");
          status= true;
        } else if ($("#1").html()===select[0] && $("#5").html()===select[0] && $("#9").html()===select[0]){
            window.alert("Player  wins");
            status= true;
          } else if ($("#3").html()===select[0] && $("#5").html()===select[0] && $("#7").html()===select[0]){
              window.alert("Player  wins");
              status= true;
            } else if ($("#1").html()===select[0] && $("#4").html()===select[0] && $("#7").html()===select[0]){
                window.alert("Player  wins");
                status= true;
              } else if ($("#2").html()===select[0] && $("#5").html()===select[0] && $("#8").html()===select[0]){
                  window.alert("Player  wins");
                  status= true;
                } else if ($("#3").html()===select[0] && $("#6").html()===select[0] && $("#9").html()===select[0]){
                    window.alert("Player  wins");
                    status= true;
                  } if ($("#1").html()===computer[0] && $("#2").html()===computer[0] && $("#3").html()===computer[0]){
                    window.alert("Computer  wins");
                  } else if ($("#4").html()===computer[0] && $("#5").html()===computer[0] && $("#6").html()===computer[0]){
                      window.alert("Computer  wins");
                    } else if ($("#7").html()===computer[0] && $("#8").html()===computer[0] && $("#9").html()===computer[0]){
                        window.alert("Computer wins");
                      } else if ($("#1").html()===computer[0] && $("#5").html()===computer[0] && $("#9").html()===computer[0]){
                          window.alert("Computer wins");
                        } else if ($("#3").html()===computer[0] && $("#5").html()===computer[0] && $("#7").html()===computer[0]){
                            window.alert("Computer wins");
                          } else if ($("#1").html()===computer[0] && $("#4").html()===computer[0] && $("#7").html()===computer[0]){
                              window.alert("Computer wins");
                            } else if ($("#2").html()===computer[0] && $("#5").html()===computer[0] && $("#8").html()===computer[0]){
                                window.alert("Computer wins");
                              } else if ($("#3").html()===computer[0] && $("#6").html()===computer[0] && $("#9").html()===computer[0]){
                                  window.alert("Computer wins")}
                                }
// genrates computer's turn
              function computerTurn(){
                var idInput = (Math.random()*10).toFixed();
                if ($('#'+idInput).html() !== "X"){
                  $('#'+idInput).html(computer);
                } else {
                  var elseInput =(Math.random()*9).toFixed();
                  $('#'+elseInput).html(computer);
                }
              }
//gives input on screen
  $("th").click(function(){

      $('#'+this.id).html(select[0]);

  checkWin();
        computerTurn();
        checkWin();



  });
  // reset the screen
  function reset(){
    $("th").html("");
  }

  $("#reset").click(reset);
});
