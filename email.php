<?php

if (isset($_POST['email']) &&!empty($_POST['email'])){

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mensagem']);


$to = "vinielabore@gmail.com";
$subject = "Contato - Audiovisual";
$body = "Nome: " . $nome . "\n" .
        "Email: " . $email . "\n" .
        "Mensagem: " . $mensagem;

$header = "From: vinielabore@gmail.com" . "\r\n" .
        "Reply-To: " . $email . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

if(mail($to,$subject,$body,$header)){
    echo("Email enviado com sucesso!");


} else { echo "O email não pode ser enviado"; }

}


?>