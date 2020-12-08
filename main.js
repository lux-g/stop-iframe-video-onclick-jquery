$(document).ready(function() {
    $(".btn1").click(function() {
      $('.trailer').each(function(index) {
        $(this).attr('src', $(this).attr('src'));
        return false;
      });
    });
})
