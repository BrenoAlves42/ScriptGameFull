<?php
session_start();
$mensagem = isset($_SESSION['mensagem']) ? $_SESSION['mensagem'] : 'Default';
echo json_encode(array('mensagem' => $mensagem));
unset($_SESSION['mensagem']);
?>