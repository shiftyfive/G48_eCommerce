
$().ready(function() {

// this is from stack overflow
  $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
          console.log('arg', arguments)
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
);

  var validator = $("#purchase").validate({
    'shipping-first': {
      required: true
    },
    'shipping-last': {
      required: true
    },
    'shipping-address-1': {
      required: true
    },
    'shipping-address-2': {
      required: true
    },
    'shipping-state': {
      required: true
    },
    'shipping-zip': {
      required: true,
      regex: "^[0-9]{5}$"
    },
    'billing-first': {
      required: true
    },
    'billing-last': {
      required: true
    },
    'billing-address-1': {
      required: true
    },
    'billing-address-2': {
      required: true
    },
    'billing-zip': {
      required: true,
      regex: "^[0-9]{5}$"
    }
  })

  $('#purchase').on('submit', function (e) {
   e.preventDefault();
    if (validator.element("#shipping-first")) {
   }
  });

  $("#shipping-copy-id").click(function(e){
    var el = $(e.currentTarget);
    console.log("CHECKED?",el.is(":checked"))

    if(el.is(":checked")){
      $('#billing-first').val($('#shipping-first').val())
      $('#billing-last').val($('#shipping-last').val())
      $('#billing-company').val($('#shipping-company').val())
      $('#billing-address-1').val($('#shipping-address-1').val())
      $('#billing-address-2').val($('#shipping-address-2').val())
      $('#billing-state').val($('#shipping-state').val())
      $('#billing-zip').val($('#shipping-zip').val())
    }
  });
})

  // $("#submit-button").click(function() {
  //       if ($("#purchase").valid())
  //             console.console.log();("Valid!");
  //       else
  //             validator.focusInvalid();
  //
  //       return false;
  // });

  // $("#shipping-first").blur(function() {
  //   var value = $.trim($("#shipping-first").val());
  //   if (!value) {
  //     $('#shipping-first').addClass('invalid-data')
  //     $('#shipping-first').focus()
  //       console.log('????')
  //   }
  // });


  // this is how to remove a value on blur - it works but leave a blank, it seems
  // $('#shipping-state').blur(function() {
  //   console.log('fuck it all')
  //   $('.temporary').empty();
  // });
