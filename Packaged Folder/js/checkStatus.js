function checkStatus() {
  if (enabled === true) {
    $(".status").html("Enabled");
    $(".statusContainer").css("background-color", "rgb(24, 150, 71)");
    $(".powerButton").attr("src", "images/enabled.png");
    $(".question").html("On " + window.domain + ", have DRC");
    $(".questionContainer").show("fast");
  }
  else if (enabled === false){
    $(".status").html("Disabled");
    $(".statusContainer").css("background-color", "rgb(102, 102, 102)");
    $(".powerButton").attr("src", "images/disabled.png");
    $(".questionContainer").hide("fast");
  }
}
