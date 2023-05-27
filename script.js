$(document).ready(function () {
  $("#form_id").submit(function (addData) {
    addData.preventDefault();

    $.ajax({
      method: "POST",
      url: "b.php",
      data: $(this).serialize(),
      dataType: "json",
      success: function (input) {
        console.log(input);
        let tableBody = "";
        $.each(input, function (no, kata) {
          tableBody += "<tr><td>" + (no + 1) + "</td><td>" + kata + "</td></tr>";
        });
        $("#table-data tbody").html(tableBody).hide().fadeIn("slow");
      },
    });
  });
});
