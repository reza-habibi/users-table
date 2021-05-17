$("form").submit(function (e) {
  e.preventDefault();
  var fname = $("input[name='name']").val();
  var lname = $("input[name='lastName']").val();
  var email = $("input[name='email']").val();
  var phone = $("input[name='phone']").val();

  $(".data-table tbody").append(
    `<tr data-name="${fname}+" data-lastName="${lname}+" data-email="${email}" data-phone="${phone}">
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td>
    </tr>`
  );

  $("input[name='name']").val("");
  $("input[name='lastName']").val("");
  $("input[name='email']").val("");
  $("input[name='phone']").val("");
});

$("body").on("click", ".btn-delete", function () {
  $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
  var fname = $(this).parents("tr").attr("data-name");
  var lname = $(this).parents("tr").attr("data-lastName");
  var email = $(this).parents("tr").attr("data-email");
  var phone = $(this).parents("tr").attr("data-phone");

  $(this)
    .parents("tr")
    .find("td:eq(0)")
    .html(`<input name="edit_name" value="${fname}">`);
  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .html(`<input name="edit_lastName" value="${lname}">`);
  $(this)
    .parents("tr")
    .find("td:eq(2)")
    .html(`<input name="edit_email" value="${email}">`);
  $(this)
    .parents("tr")
    .find("td:eq(3)")
    .html(`<input name="edit_phone" value="${phone}">`);

  $(this)
    .parents("tr")
    .find("td:eq(4)")
    .prepend(
      "<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>"
    );
  $(this).hide();
});

$("body").on("click", ".btn-cancel", function () {
  var fname = $(this).parents("tr").attr("data-name");
  var lname = $(this).parents("tr").attr("data-lastName");
  var email = $(this).parents("tr").attr("data-email");
  var phone = $(this).parents("tr").attr("data-phone");

  $(this).parents("tr").find("td:eq(0)").text(fname);
  $(this).parents("tr").find("td:eq(1)").text(lname);
  $(this).parents("tr").find("td:eq(2)").text(email);
  $(this).parents("tr").find("td:eq(3)").text(phone);

  $(this).parents("tr").find(".btn-edit").show();
  $(this).parents("tr").find(".btn-update").remove();
  $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function () {
  var fname = $(this).parents("tr").find("input[name='edit_name']").val();
  var lname = $(this).parents("tr").find("input[name='edit_lastName']").val();
  var email = $(this).parents("tr").find("input[name='edit_email']").val();
  var phone = $(this).parents("tr").find("input[name='edit_phone']").val();

  $(this).parents("tr").find("td:eq(0)").text(fname);
  $(this).parents("tr").find("td:eq(1)").text(lname);
  $(this).parents("tr").find("td:eq(2)").text(email);
  $(this).parents("tr").find("td:eq(3)").text(phone);

  $(this).parents("tr").attr("data-name", fname);
  $(this).parents("tr").attr("data-lastName", lname);
  $(this).parents("tr").attr("data-email", email);
  $(this).parents("tr").attr("data-phone", phone);

  $(this).parents("tr").find(".btn-edit").show();
  $(this).parents("tr").find(".btn-cancel").remove();
  $(this).parents("tr").find(".btn-update").remove();
});
