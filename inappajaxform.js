var $form = $('#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbz2GvOjQNDiyNjgkzNT93RnlR2aMROaRqOgV3aq1rjO97BMGcWB/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
  );
})
