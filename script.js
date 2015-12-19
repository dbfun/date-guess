$( document ).ready(function() {

  var dateguesser = {}
  DateGuess(dateguesser);

  $('.js-text').each(function(){
    var guessedDate = dateguesser.jsParseDate($(this).text()).date;
    var $dateDiv = $(this).find('.js-guessed');
    $dateDiv.html(guessedDate);
  });
});