<?php

include(__DIR__ . '/../../control/config.php');

$nome = $_POST['nome'];
$username = $_POST['username'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$faseAtual = 1;
$hpAtual = 4;
$vidaAtual = 3;

$checkQuery = "SELECT usrId FROM userData WHERE email = '$email'";
$result = $conn->query($checkQuery);

if ($result->num_rows > 0) {
    echo "<script>console.error('Error: Email already exists.');</script>";
    

    $message = "O usuário já existe";
    // Escape quotes for JavaScript
    $escapedMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    
    echo "<script>
        document.addEventListener('DOMContentLoaded', function() {
            alert('$escapedMessage');
            window.location.href = '../../view/cadastro.php';
        });
    </script>";

    
}
else {

    $sql = "INSERT INTO userData (nome, username, email, senha, faseAtual, hpAtual, vidaAtual) VALUES ('$nome', '$username', '$email', '$senha', '$faseAtual', '$hpAtual', '$vidaAtual' )";

    session_start();
    $_SESSION['mensagem'] = 'Usuário ' . $username . ' criado com sucesso, faça seu login.';
    
    if ($conn->query($sql) === TRUE) {
    
        $id_user = $conn->insert_id;
        
        $sql2 = "INSERT INTO user_faseM1 (id_user) VALUES ('$id_user')";
    
        if ($conn->query($sql2) === TRUE) {
            
            
            header("Location: ../../view/login.php");
        } else {
           
        }
    
    } else {
        
    }

}

$conn->close();
?>