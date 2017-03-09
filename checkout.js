
$().ready(function() {
  console.log('here now')

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
      // minlength: 5,
      // maxlength: 9,
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
      minlength: 5,
      maxlength: 9
    }
  })

  $('#purchase').on('submit', function (e) {
   e.preventDefault();
    if (validator.element("#shipping-first")) {
   }
  });

  $("#shipping-copy-id").click(function(evt){
    var el = $(evt.currentTarget);
    console.log("CHECKED?",el.is(":checked"))

    if(el.is(":checked")){
      $('#billing-first').val($('#shipping-first').val())
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
