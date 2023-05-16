$(document).ready(function () {
  var qTemplate = $('.qTemp').html();
  $('.addQuestion').on('click', function () {
    $('.card-body .last-child').before(qTemplate);
    fieldItem();
  });
  fieldItem();
  $(".linked").click(function () {
    var linkedURL = $(this).attr("data-href");
    window.location.href = linkedURL;
  });

  $("[data-bs-toggle]").on("click", function () {
    if ($("body").hasClass("modal-open")) {
      $("html").css("overflow-y", "hidden");
    }
  });
  $(".modal").on("hidden.bs.modal", function () {
    $("html").css("overflow-y", "auto");
  });

  $(".dataTable").DataTable({
    responsive: true,
    searching: false
  });
  $('a[data-bs-toggle="pill"], a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
    $($.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();
  }
  );
});

function fieldItem() {
  $(".field.required input").blur(function () {
    if (!$(this).val()) {
      $(this).parent().removeClass("filled");
      $(this).parent().addClass("empty");
    } else {
      $(this).parent().removeClass("empty");
      $(this).parent().addClass("filled");
    }
  });
  $(".field.required input").focus(function () {
    $(this).parent().addClass("focused");
  });
  $(".field.required input").blur(function () {
    $(this).parent().removeClass("focused");
  });
}