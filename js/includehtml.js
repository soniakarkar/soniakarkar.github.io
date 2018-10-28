// alert("running includehtml");
$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = $(this).data('include') + '.html';
    // alert("loading from "+file);
    $(this).load(file);
  });
});
