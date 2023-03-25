document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  var grade = "";
  var attachmentLoss = document.getElementById("attachmentLossSelect").value;
  var boneLossRatio = document.getElementById("boneLossRatioSelect").value;
  var plaqueTartar = document.getElementById("plaqueTartarSelect").value;
  var cigarettesPerDay = document.getElementById("cigarettesPerDaySelect").value;
  var hba1c = document.getElementById("hba1cSelect").value;
  if (attachmentLoss === "low" && boneLossRatio === "low" && plaqueTartar === "low" && cigarettesPerDay === "low" && hba1c === "low") {
    grade = "Grad A";
} else if ((attachmentLoss === "medium" || boneLossRatio === "medium" || plaqueTartar === "medium" || cigarettesPerDay === "medium" || hba1c === "medium") && !(attachmentLoss === "high" || boneLossRatio === "high" || plaqueTartar === "high" || cigarettesPerDay === "high" || hba1c === "high")) {
    grade = "Grad B";
} else {
    grade = "Grad C";
}

  document.getElementById("result").innerHTML = grade;
});