// namespace jQuery
(function($) {

  describe("Comment keyboard shortcuts", function() {
    jasmine.getFixtures().fixturesPath = 'fixtures';

    beforeEach(function() {
      loadFixtures('comment_thread.html');
    });

    it("actually loads the comment thread fixture", function() {
      expect($('.comment')).not.toBeEmpty();
    });

  });

})(jQuery);