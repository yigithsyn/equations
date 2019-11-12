ready(function(){
  $('.modal').on('shown.bs.modal', function (e) {
    var el = document.querySelector("form");
    while (el.firstChild) el.removeChild(el.firstChild);
    var eventDom = e.relatedTarget.text
    if (eventDom == "Feedback") feedback();
    else calculate(e);
  })
})