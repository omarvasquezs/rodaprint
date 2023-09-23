<?php
require 'vendor/autoload.php'; // Include the Mailjet PHP library

// Replace with your Mailjet API credentials
$api_key = '59ca8a9d022970993dd3b76473414c41';
$api_secret = '98dcfc4c85797c0c4f8f09c5bd84dd07';

// Initialize the Mailjet client
$mj = new \Mailjet\Client($api_key, $api_secret);

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$telephone = $_POST['telephone'];
$message = $_POST['message'];

// Create an email message
$emailData = [
    'FromEmail' => 'notificaciones@rodaprint.com.pe',
    'FromName' => 'Notificaciones Rodaprint',
    'Subject' => $_POST['email'].' quiere contactarse',
    'Text-part' => "Name: $name\nEmail: $email\nTelephone: $telephone\nMessage: $message",
    'Recipients' => [['Email' => 'omarvs91@gmail.com']], // Your email address
];

// Send the email
$response = $mj->post(\Mailjet\Resources::$Email, ['body' => $emailData]);

if ($response->success()) {
    echo '<center><h1>Correo enviado con éxito!</h1><br><p>Sera redireccionado en breves momentos...</p></center>';
    header("Refresh: 2; url=/");
    exit;
} else {
    echo 'Email sending failed: ' . $response->getStatus() . ' - ' . $response->getBody();
    header("Refresh: 2; url=/");
    exit;
}