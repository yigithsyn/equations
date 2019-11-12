let categories = [
  { id: "all", name: "All" },
  { id: "antenna", name: "Antenna" },
  { id: "propagation", name: "Propagation" },
  { id: "conversion", name: "Conversion" },
]

ready(function () {
  categories.forEach(function (category) {
    $("#filter").append(
      $("<button />", {
        class: (category.id == "all") ? "active" : "",
        "data-filter": category.id,
        text: category.name
      })
    )
  })
  $("#filter > button").addClass("btn btn-outline-success m-1")
  $("#filter > button").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.card').show('1000');
    }
    else {
      $(".card").not('.' + value).hide('3000');
      $('.card').filter('.' + value).show('3000');
    }

    $("#filter > button").removeClass("active")
    $(this).addClass("active");
  });
})