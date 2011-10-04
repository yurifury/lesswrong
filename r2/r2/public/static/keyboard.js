(function($) {
  var get_parent_comment = function(comment_el) {
      return $(comment_el).parent().parent().parent()[0];
  };
  
  var is_comment = function(comment_el) {
    return $(comment_el).hasClass('comment');
  };
  
  var get_comment_id = function(comment_el) {
    return $(comment_el).children('.parent').children('a').attr('name');
  };
  
  var get_child = function(comment_el) {
    return $(comment_el).children('.child').children('.sitetable').children('.comment')[0];
  };
  
  var get_next_sibling = function(comment_el) {
    return $(comment_el).siblings('.comment').first()[0];
  };
  
  // console.log(get_next_sibling($('#thingrow_t1_3238')[0]));
})(jQuery);
