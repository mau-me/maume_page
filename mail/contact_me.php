<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = "mauriciosm95@gmail.com";
$subject = "FormulÃ¡rio de contato do site:  $name";
$body = "Recebida uma nova mensagem do formulário de contato do meu site.\n\n"."Esses são os detalhes:\n\nNome: $name\n\nE-mail: $email\n\nTelefone: $phone\n\nMensagem:\n$message";
$header = "Enviado por: maumenezes.ml\n";
$header .= "Responder a: $email";

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
