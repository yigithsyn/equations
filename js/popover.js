ready(function(){
  $('[data-toggle="popover"]').popover(
    {
      html: true,
      trigger: "focus",
      placement: "bottom",
    }
  )

  $('.popover-dismiss').popover({
    trigger: 'focus',
  })
  
})
