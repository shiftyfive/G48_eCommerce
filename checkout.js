
$().ready(function() {

// this is from stack overflow, to deal with the zip-code
  $.validator.addMethod("regex", function(value, element, regexp) {
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

  $("#shipping-copy-id").click(function(e) {
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
    console.log(Object.keys(validator), Object.values(validator))
  $('#purchase').on('submit', function (e) {
    e.preventDefault();
    console.log('before the loop')
    if (validator.element("#shipping-first")) {
      window.open(ordersummary.html)
   }
  });

})



// ADDING THIS IN CASE WE NEED TO SUBMIT THE DATA SOMEWHERE
// var url = 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles'
//
// $.getJSON(url, function (response) {
//  $.each(response, function (index, role) {
//    $('.select-role').append('<option value="' + role.title + '">' + role.title + '</option>')
//    $('.select-role').change(function () {
//      $('.role-preview').attr('src', role.img)
//    })
//  })
// })
//
// function postForm () {
//  var $xhr = $.ajax({
//    method: 'POST',
//    url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/users',
//    dataType: 'json',
//    data: {firstName:$('#first-name').val(), lastName:$('#last-name').val(), role:$('#select-role option:selected').val()}
//  }).then(function (result) {
//    $('.save-status').append(result.message).fadeIn(500).delay(2000).fadeOut(500)
//  })
//  }).catch(function (error) {
//    console.log('Error: ', error);
//  })
// }
//
// $('form').on('submit', function (e) {
//  e.preventDefault();
//  postForm();
// });
