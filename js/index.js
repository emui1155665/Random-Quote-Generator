function quote() {
  var cb = Math.round(new Date().getTime());
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + cb, function(a) {
    $(".text").html(a[0].content + "<p>— " + a[0].title + "</p>");
  });
}

$("button").on("click", function() {
  quote();
});