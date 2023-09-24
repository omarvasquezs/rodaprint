<?php
require 'vendor/autoload.php'; // Include the Mailjet PHP library

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // This block will only execute if the request is a POST request, meaning it's from a form submission.

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
        'Text-part' => "Nombres: $name\nCorreo: $email\nTelefono: $telephone\nMensaje: $message",
        'Recipients' => [['Email' => 'gerencia@rodaprint.com.pe']], // Your email address
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
} else {
    // If the request is not a POST request (e.g., accessed via URL), you can handle it accordingly.
    echo 'Invalid request.';
}