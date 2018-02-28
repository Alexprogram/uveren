setTimeout(function() {
  $('.formstyler, input[type="checkbox"], input[type="radio"], select').styler();
}, 100)

    jQuery(function($){
        $('input[type="tel"]').mask("+7(999) 999-99-99");
    });

    jQuery(function($){
        $('.seria').mask("****-******");
    });

    jQuery(function($){
        $('.date_mask').mask("99/99/9999");
    });

    jQuery(function($){
        $('.vin_mask').mask("*****************");
    });

     jQuery(function($){
        $('.gos_numb').mask("* *** **");
    });

     $(document).ready(function(){
  $('.new_btn').click(function(){
	$('.hidd_design').fadeToggle(400);
	$('.new_design').fadeToggle(400);   
	$(this).toggleClass('is_open');
   });
 });
 
$(document).ready(function(){
var item = '.driver'; //  товар
   var totalCount = $(item).length; // кол-во товаров всего
   var showWhenPress = 1; // сколько показывать при нажатии
   var showFromStart = 1; // кол-во элементов показано изначально
   var show = $('.itemsShown'); // класс элемента где выводится число показанных
   var total = $('.totalItems'); // класс элемента где кол-во всех товаров
   var i, k, j = 1;
   var showMore = $('.plus_driver');
   var shownNow = showFromStart;
   $(item).addClass('invise'); // удалить когда всем добавить invise
   $(item+':lt('+showFromStart+')').removeClass('invise');
   show.html(shownNow);
   total.text(totalCount);
   showMore.click(function(e){
    e.preventDefault();
     shownNow += showWhenPress;
    $(item+':lt('+shownNow+')').removeClass('invise');
     if (shownNow > totalCount){
      show.html(totalCount);
     } else {
      show.html(shownNow);
     }
    if (shownNow == totalCount){
      
    $('.plus_driver').addClass('invise');
     } 
    }); 
});   


$(document).ready(function(){
 $( ".yes" ).change(function() {
$(this).parents('.checkbox_items_wrap').find('.bank_name').fadeIn(400)
});
 });
