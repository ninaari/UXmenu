//expand the next div
$('.toggle').on('click', function(){
    $(this).next().slideToggle('fast');
    
   let toggleTxt = $(this).text();
    
    if(toggleTxt === 'add_circle'){
      $(this).text('remove_circle');
    }else{
      $(this).text('add_circle');
    }
    
  });
  
  //checkbox controls - first check for defaulted "required"
  let inCart = $(":checkbox:checked").length;
  
    $(document).ready(function() {
      $('.totalNum').text(inCart);
    });
  
  $('.check').on('click', function(){
    let method = $(this).val();
    let time = parseInt($(this).data('time'));
    let totalTime = parseInt($('#time').val());
    let noSpace = method.replace(/ /g,'');
    let pill = '<div class="pill '+noSpace+'">'+method+'<span class="remove material-icons md-48" id="'+method+'">close</span></div>';
    let cata = $(this).data("cata");
  
    if($(this).prop('checked')){
      $('.'+cata).append(pill);
      $('#time').val(totalTime+time);
    }else{
      $('div').remove('.'+noSpace);
      $('#time').val(totalTime-time);
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
  
  //TODO if checked by default (required) add to items - without x
  
  //remove pill - .delegate is used for items that do not exist in DOM on render
  $("body").delegate(".remove", "click", function(){
    let remove = $(this).attr('id');
  
    $('input[value="' + remove + '"]').prop('checked', false);
    //TODO subtract time from total
    $(this).parent().remove();
    
    let inCart = $(":checkbox:checked").length;
    $('.totalNum').text(inCart);
    
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
      //hide show button
    if($("section:first").hasClass('active')){
        $('#back').hide();
      }else{
        $('#back').show();
      }
  //same button logic
      if($("section:last").hasClass('active')){
        $('#continue').hide();
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
      let nothingS = $(".review").text();
      if(nothingS){
        //do nothing
      } else {
        $(".review").text('nothing selected');
      }

  });
  
//.discChecks .defChecks .ideaChecks .testChecks  
