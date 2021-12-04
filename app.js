(function () {
  $(".btnRigh").click(function (e) {
    console.log('hi');
   let selectedOpts = $(".lstBox1 li input:checked");
    $(".lstBox2").append($(selectedOpts.parent()).clone());
    $(selectedOpts.parent()).remove();
    $(".lstBox2 li input").prop('checked', false);
    e.preventDefault();
  });
  $(".btnAllRight").click(function (e) {
   let selectedOpts = $(".lstBox1 li");
    $(".lstBox2").append($(selectedOpts).clone());
    $(selectedOpts).remove();
    e.preventDefault();
  });
  $(".btnLeft").click(function (e) {
   let selectedOpts = $(".lstBox2 li input:checked");
    $(".lstBox1").append($(selectedOpts.parent()).clone());
    $(selectedOpts.parent()).remove();
    console.log($(".lstBox2 li input:checked"));
    $(".lstBox1 li input").prop('checked', false);
    e.preventDefault();
  });
  $(".btnAllLeft").click(function (e) {
   let selectedOpts = $(".lstBox2 li");
    $(".lstBox1").append($(selectedOpts).clone());
    $(selectedOpts).remove();
    e.preventDefault();
  });
})(jQuery);