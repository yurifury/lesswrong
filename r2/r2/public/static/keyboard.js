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
  
  comment_tree = {};
  $('.comment').each(function(index, comment) {
    var comment_id = get_comment_id(comment);
    comment_tree[comment_id] = {};
    
    var parent_comment = get_parent_comment(comment);
    if (is_comment(parent_comment)) {
      comment_tree[comment_id] = get_comment_id(parent_comment);
    }
  });
  console.log(comment_tree);
  // return parent_comment($('.comment')[2]);
})(jQuery);
