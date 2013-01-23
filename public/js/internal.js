(function() {
  var Menu, Page;

  Page = (function() {

    Page.prototype.container = '#content';

    function Page(url) {
      this.url = url;
      this.url = "" + this.url + ".html";
      this.$container = $(this.container);
      this.load();
    }

    Page.prototype.load = function() {
      return this.$container.load(this.url);
    };

    return Page;

  })();

  Menu = (function() {

    function Menu(selector) {
      var $menu;
      this.selector = selector;
      $menu = $("" + this.selector);
      $menu.on('click', 'a', function(event) {
        event.preventDefault();
        return new Page(this.href);
      });
    }

    return Menu;

  })();

  $(function() {
    var menu;
    return menu = new Menu('#menu');
  });

}).call(this);
