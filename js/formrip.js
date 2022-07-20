function enviarFormulario() {
  // modificar aqui
  var valkey = "0LsMqk0Bw-c";

  var nombre_form = $("#input_nombre").val();
  var mail_form = $("#input_mail").val();
  var mensaje_form = "Nuevo mensaje desde la web Bhuos";
  var cel_form = $("#input_cel").val();

  var data = new FormData();
  // Bloqueando boton
  $(".enviar").attr("value", "Enviando...").attr("disabled", true);
  // fin bloqueo
  data.append("key", valkey);
  data.append("message", mensaje_form);
  data.append("name_", nombre_form);
  data.append("email", mail_form);
  data.append("cel_number_", cel_form);
  data.append("v_card", "3.0");

  // CUSTOM FIELDS //
  //data.append("custom_fields", JSON.stringify({
  //}));

  // ATTACHMENTS //
  //data.append('attachment_[]', $('#file')[0].files[0]);

  $.ajax({
    url: "https://api.form.rip/send-email",
    method: "POST",
    contentType: false,
    processData: false,
    data: data,
  })
    .done(function () {
      location.href = "gracias.html";
      // $("input").attr("disabled", true).val("");
      // $("textarea").attr("disabled", true).val("");
      // $("#alert").addClass("mt-5").removeClass("d-none").addClass("show");
      // $('.enviar').attr('value', 'Enviado').attr('disabled', true).addClass("d-none");
    })
    .fail(function () {
      alert("Error al enviar");
    });
}
