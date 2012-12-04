$(document).ready(function(){
  var red = 50;
  var blue = 50;
  var redCount = 0;
  var blueCount = 0;

  setInterval(function(){
    // console.log(top);
    console.log("Red "+redCount);
    console.log("Blue "+blueCount);
    redCount = 0;
    blueCount = 0;
  },1000);

  $$('.red').tap(function() {
    setTimeout(function(){
      red += 2;
      blue -= 2;
      update();
    },Math.random()*3);
    redCount++;
  });

  $$('.blue').tap(function() {
    setTimeout(function(){
      blue += 2;
      red -= 2;
      update();
    },Math.random()*3);
    blueCount++;
  });

  $$('.blue').hold(function(){
    // reset();
    // var count = 0;
    // var markBlue = setInterval(function(){
    //   if(count > 100){
    //     blue -= 2;
    //     red += 2;
    //     update();
    //     clearInterval(markBlue);
    //   }
    //   count++;
    // },10);
  });

  $$('.red').hold(function(){
    // reset();
    // var count = 0;
    // var markRed = setInterval(function(){
    //   if(count > 100){
    //     red -= 2;
    //     blue += 2;
    //     update();
    //     clearInterval(markRed);
    //   }
    //   count++;
    // },10);
  });

  function update(){
    $(".red").html(red + "%");
    $(".blue").html(blue + "%");
    $(".red").css("height",scale(red) + "px");
    $(".blue").css("height",scale(blue) + "px");
    checkWinner();
  }

  function checkWinner(){
    if(red == 100){
      alert("Red Win");
      reset();
    }
    if(blue == 100){
      alert("Blue Win");
      reset();
    }
  }

  function reset(){
    red = 50;
    blue = 50;
    update();
  }

  function scale(input){
    var max = 480;
    return ( input * max ) / 100;
  }
});