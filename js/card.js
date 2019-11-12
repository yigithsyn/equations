ready(function() {
  let argTypes = ["consts", "iargs", "args", "exchanges"]
  equations.forEach(function (equation) {
    var el = $("<div />", { class: equation.category.replaceAll(",", "") });
    var popover = "\\begin{aligned}"
    argTypes.forEach(function(argType){
      if(equation[argType]){
        equation[argType].forEach(function(arg){
          popover += arg.sym + "&: " + arg.def + "\\\\"
        })
      }
    })
    popover += "\\end{aligned}"
    var el_div0 = $("<div />", {
      "data-content": katex.renderToString(popover),
      html: katex.renderToString(equation.formula, { displayMode: true, throwOnError: false })
    })
    var el_div1 = $("<div />")
    var el_div1_h0 = $("<h5 />", { html: equation.title })
    if (!!equation.definition) { var el_div1_p0 = $("<p />", { html: equation.definition }) }
    if (!!equation.calc) { var el_div1_button0 = $("<button />") }
    if (!!equation.ref) {
      var el_div1_a0 = $("<a />")
      var el_div1_a0_small0 = $("<small />", { text: equation.ref.name })
      if (equation.ref.url) {
        el_div1_a0.attr("href", equation.ref.url)
        el_div1_a0.attr("target", "_blank")
        el_div1_a0.attr("rel", "noopener noreferrer")
      }
    }
    el_div1.append(el_div1_h0)
    if (!!equation.definition) el_div1.append(el_div1_p0)
    if (!!equation.ref) { el_div1_a0.append(el_div1_a0_small0); el_div1.append(el_div1_a0); }
    if (!!equation.calc) el_div1.append(el_div1_button0)
    el.append(el_div0)
    el.append(el_div1)
    el.appendTo($(".card-columns"))
  })
  $(".card-columns > div").addClass("card mx-1 my-1 text-center")
  $(".card-columns > .card > div:even").attr("tabIndex", 0)
  $(".card-columns > .card > div:even").attr("data-toggle", "popover")
  $(".card-columns > .card > div:odd").addClass("card-body p-2")
  $(".katex-display").css("margin-bottom", "8px")
  $(".card-columns > .card > div > h5").addClass("card-title mt-0 mb-2")
  $(".card-columns > .card > div > p").addClass("mb-1")
  $(".card-columns > .card > div > a").addClass("mt-0")
  $(".card-columns > .card > div > a > small").addClass("form-text")
  $(".card-columns > .card > div > a > small").css("font-style", "italic")
  $(".card-columns > .card > div > button").addClass("btn btn-secondary mt-2")
  $(".card-columns > .card > div > button").attr("data-toggle", "modal")
  $(".card-columns > .card > div > button").attr("data-target", ".modal")
  $(".card-columns > .card > div > button").text("Calculate")
  renderMath()
})
