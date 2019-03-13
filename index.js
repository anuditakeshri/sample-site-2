window.onload = function() {
  document.getElementById("date").innerHTML = new Date().toDateString;
};

function goBack() {
  window.history.back();
}
