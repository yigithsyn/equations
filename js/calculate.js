function calculate(event) {
  var title = event.relatedTarget.parentElement.childNodes[0].innerHTML
  var equation = equations.filter(function (item) { return item.title == title })[0]
  if (!("exchanges" in equation)) {
    equation.args.forEach(function (arg, index) {
      var el_div0 = $("<div />")
      var el_div0_label0 = $("<label />")
      var el_div0_div0 = $("<div />")
      var el_div0_div0_input0 = $("<input />")
      var el_div0_div0_small0 = $("<small />")
      el_div0_div0_input0.val(equation.calc.vars[arg.id])
      el_div0_div0_input0.attr("id", arg.id)
      el_div0_label0.html("$" + arg.sym + "$ :")
      el_div0_div0_small0.text("$" + arg.def + "$")
      el_div0_div0.append(el_div0_div0_input0)
      el_div0_div0.append(el_div0_div0_small0)
      el_div0.append(el_div0_label0)
      el_div0.append(el_div0_div0)
      $("form").append(el_div0)
    })
    equation.yields.forEach(function (yield, index) {
      var el_div0 = $("<div />")
      var el_div0_label0 = $("<label />")
      var el_div0_div0 = $("<div />")
      var el_div0_div0_input0 = $("<input />")
      var el_div0_div0_small0 = $("<small />")
      el_div0_div0_input0.attr("id", yield.id)
      el_div0_div0_input0.attr("readonly", "")
      el_div0_div0_input0.val(yield.format(math.eval(equation.calc.expr[index], equation.calc.vars)))
      el_div0_label0.html("$" + yield.sym + "$ :")
      el_div0_div0_small0.text("$" + yield.def + "$")

      el_div0_div0.append(el_div0_div0_input0)
      el_div0_div0.append(el_div0_div0_small0)
      el_div0.append(el_div0_label0)
      el_div0.append(el_div0_div0)
      $("form").append(el_div0)
    })
  }
  else {
    equation.exchanges.forEach(function (exchange, index) {
      var el_div0 = $("<div />")
      var el_div0_label0 = $("<label />")
      var el_div0_div0 = $("<div />")
      var el_div0_div0_input0 = $("<input />")
      var el_div0_div0_small0 = $("<small />")
      el_div0_div0_input0.attr("id", exchange.id)
      el_div0_div0_input0.val(equation.calc.vars[exchange.id])
      el_div0_label0.html("$" + exchange.sym + "$ :")
      el_div0_div0_small0.text("$" + exchange.def + "$")

      el_div0_div0.append(el_div0_div0_input0)
      el_div0_div0.append(el_div0_div0_small0)
      el_div0.append(el_div0_label0)
      el_div0.append(el_div0_div0)
      $("form").append(el_div0)
    })
  }
  $("form > div").addClass("form-group row")
  $("form > div > label").addClass("col-form-label col-form-label-sm text-right mr-2")
  $("form > div > label").css("width", equation.calc.labelWidth)
  $("form > div > div").addClass("flex-fill mr-1")
  $("form > div > div > input").addClass("form-control form-control-sm")
  $("form > div > div > input").attr("type", "number")
  $("form > div > div > input").on("keyup", function () {
    let changedDom = this
    equation.calc.vars[$(this).attr("id")] = $(this).val()
    if (!("exchanges" in equation)) {
      $("form > div > div > input[readonly]").each(function (index, item) {
        let value = math.eval(equation.calc.expr[index], equation.calc.vars)
        $(item).val(equation.yields[index].format(value))
      })
    }
    else {
      $("form > div > div > input").each(function (index, item) {
        if (equation.exchanges[index].id !== $(changedDom).attr("id")) {
          equation.exchanges.forEach(function (subItem, subIndex) {
            if (subItem.id === $(changedDom).attr("id")) {
              let value = math.eval(equation.calc.expr[subIndex][index], equation.calc.vars)
              $(item).val(equation.exchanges[index].format(value))
            }
          })
        }
      })
    }
  })
  $("form > div > div > small").addClass("form-text text-muted")
  renderMath();
}