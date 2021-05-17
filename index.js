function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";
  
    var firstName = document.getElementById("firstName_row" + no);
    var lastName = document.getElementById("lastName_row" + no);
    var email = document.getElementById("email_row" + no);
    var phone = document.getElementById("phone_row" + no);
  
    var firstName_data = firstName.innerHTML;
    var lastName_data = lastName.innerHTML;
    var email_data = email.innerHTML;
    var phone_data = phone.innerHTML;
  
    firstName.innerHTML =
      "<input type='text' id='firstName_text" +
      no +
      "' value='" +
      firstName_data +
      "'>";
    lastName.innerHTML =
      "<input type='text' id='lastName_text" +
      no +
      "' value='" +
      lastName_data +
      "'>";
    email.innerHTML =
      "<input type='email' id='email_text" + no + "' value='" + email_data + "'>";
    phone.innerHTML =
      "<input type='phone' id='phone_text" + no + "' value='" + phone_data + "'>";
  }
  
  function save_row(no) {
    var firstName_val = document.getElementById("firstName_text" + no).value;
    var lastName_val = document.getElementById("lastName_text" + no).value;
    var email_val = document.getElementById("email_text" + no).value;
    var phone_val = document.getElementById("phone_text" + no).value;
  
    document.getElementById("firstName_row" + no).innerHTML = firstName_val;
    document.getElementById("lastName_row" + no).innerHTML = lastName_val;
    document.getElementById("email_row" + no).innerHTML = email_val;
    document.getElementById("phone_row" + no).innerHTML = phone_val;
  
    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
  }
  
  function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
  }
  
  function add_row() {
    var new_firstName = document.getElementById("new_firstName").value;
    var new_lastName = document.getElementById("new_lastName").value;
    var new_email = document.getElementById("new_email").value;
    var new_phone = document.getElementById("new_phone").value;
  
    var table = document.getElementById("tableID");
    var table_len = table.rows.length - 1;
    var row = (table.insertRow(table_len).outerHTML =
      `<tr id="row${table_len}">
        <td id="firstName_row${table_len}">${new_firstName}</td>
        <td id="lastName_row${table_len}">${new_lastName}</td>
        <td id="email_row${table_len}">
        ${new_email}</td>
        <td id="phone_row${table_len}">${new_phone}</td>
        <td><input type="button" id="edit_button${table_len}" value="Edit" class="edit btn btn-warning" onclick="edit_row(${table_len})">
        <input type="button" id="save_button${table_len}" value="Save" class="save btn btn-primary" onclick="save_row(${table_len})">
        <input type="button" value="Delete" class="delete btn btn-danger" onclick="delete_row(${table_len})"></td>
      </tr>`);
  
    document.getElementById("new_firstName").value = "";
    document.getElementById("new_lastName").value = "";
    document.getElementById("new_email").value = "";
    document.getElementById("new_phone").value = "";
  }
  