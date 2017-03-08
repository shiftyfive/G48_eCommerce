
$().ready(function() {
  $('#purchase').validate({
    console.log('here now')
    rules: {
      shipping-first: {
        required: true
      },
      shipping-last: {
        required: true
      },
      shipping-address-1: {
        required: true
      },
      shipping-address-2: {
        required: true
      },
      shipping-zip: {
        required: true,
        minlength: 5
      },
      billing-first: {
        required: true
      },
      billing-last: {
        required: true
      },
      billing-address-1: {
        required: true
      },
      billing-address-2: {
        required: true
      },
      billing-zip: {
        required: true,
        minlength: 5
      }
    } // end rules
  }) // $('#purchase').validate
}) // end $().ready(function()


// billing-copy-id


// CC INFORMATION
// cc-number


// cc-expiry


// cc-cvc
$('cc.cvc').validate ({
  rules: {
    field: {
      required: true,
      maxlength: 3
    }
  }
}


// SUBMIT
