//expand the next div + -
$('.toggle').on('click', function(){
    $(this).next().slideToggle('fast');
    
    let toggleTxt = $(this).text();
    
    if(toggleTxt === 'add_circle'){
      $(this).text('remove_circle');
    }else{
      $(this).text('add_circle');
    }
});
  
  //checkbox controls - 
  //first check for defaulted "required"
  let inCart = $(":checkbox:checked").length;
  
    $(document).ready(function() {
      $('.totalNum').text(inCart);
    });
  
  $('.check').on('click', function(){
    let method = $(this).val();
    let time = parseInt($(this).data('time'));
    let totalTime = parseInt($('#time').val());
    let noSpace = method.replace(/ /g,'');
    let pill = '<div class="pill '+noSpace+'" data-time="'+time+'">'+method+'<span class="remove material-icons md-48" id="'+method+'">close</span></div>';
    let cata = $(this).data("cata");
  
    if($(this).prop('checked')){
      $('.'+cata).prepend(pill);
      $('#time').val(totalTime+time);
    }else{
      $('div').remove('.'+noSpace);
      $('#time').val(totalTime-time);
    }

  //remove or show "nothing selected"
  let hasSomething = $('.'+cata).children().length;
    if(hasSomething > 1 ){
      $('.'+cata + "> .nothing").text('');
    } else{
      $('.'+cata + "> .nothing").text('Nothing Selected');
    }
    
    //trying to do something with a diabled chekbox
    let defaultD = $(this).attr('data-default');
    // if(defaultD){
    //   alert('whaaaa?');
    // }
    
    let inCart = $(":checkbox:checked").length;
    $('.totalNum').text(inCart);
    let inDisc = $(".discChecks:checkbox:checked").length;
    $('.discNum').text(inDisc);
    let inDefi = $(".defChecks:checkbox:checked").length;
    $('.defNum').text(inDefi);
    let inIdea = $(".ideaChecks:checkbox:checked").length;
    $('.ideaNum').text(inIdea);
    let inTest = $(".testChecks:checkbox:checked").length;
    $('.testNum').text(inTest);
    
  });
  
  //TODO if checked by default (required) add to items - without (x) button ///////
  
  //Remove Pill --- 
  //.delegate is used for items that do not exist in DOM on render
  $(".review").delegate(".remove", "click", function(){
    let remove = $(this).attr('id');
  //uncheck the appropriate box
    $('input[value="' + remove + '"]').prop('checked', false);
    
    //show text "nothing selected"
    let hasPill = $(this).parents('.review').children().length;
      if(hasPill < 3){
        $(this).parents('.review').find('.nothing').text('Nothing Selected');
      }

    //remove it
    $(this).parent().remove();
    //reduce total in cart
    let inCart = $(":checkbox:checked").length;
    $('.totalNum').text(inCart);

    //Subtract time from total
    let totalTime = parseInt($('#time').val());
    let time = parseInt($(this).parent().data('time'));
    $('#time').val(totalTime-time);

    //
    
  });
  
  //NAVIGATION
  $('#start').on('click', function(){
    $('#USA').slideUp(800);
    $('.active').slideDown(800); //which adds "display block"
  });
  
  $('#home').on('click', function(){
    $('.active').css('display','none'); //hides content but preserves spot
    $('#USA').slideDown(800);
  });
  
  $('#cartButton').on('click', function(){
    $('.active').removeClass('active');
    $('.rev').addClass('active');
    navConditional();
  });

  function navConditional(){
    // hide/show back button
    if($("section:first").hasClass('active')){
        $('#back').hide();
      }else{
        $('#back').show();
      }
    //same button logic but for continue
      if($("section:last").hasClass('active')){
        $('#continue').hide();
        $('#submit').show();
      }else{
        $('#continue').show();
        $('#submit').hide();
      }
  }
  
  $('#back').on('click', function(){    
    $('.active').prev('section').addClass('active');
    $('.active:last').removeClass('active');

    navConditional();
  });
  
  $('#continue').on('click', function(){
     $('.active').next('section').addClass('active');  
     $('.active:last').prev('section').removeClass('active');

     navConditional();
  });
  
  $( document ).ready(function() {
      if($("section:first").hasClass('active')){
        $('#back').hide();
      }

    //Nothing selected - Null state
    //TODO make this work
    let hasSomething = $(".review").children().hasClass('pill');

      if(hasSomething){
        $(".review > .nothing").text('');
      } else {
        $(".review > .nothing").text('Nothing Selected');
      }

  });
  
//.discoveries .defines .ideas .tests
