<?php
    include(__DIR__ . '/../../control/config.php');


    $data = json_decode(file_get_contents("php://input"), true);
    
    header('Content-Type: application/json');

    $response = array();

    if ($data) {
 
        $usrId = $data['usrId'];
        $nome = $data['nome'];
        $username = $data['username'];
        $email = $data['email'];
        $senha = $data['senha'];
        $faseAtual = $data['faseAtual'];
        $hpAtual = $data['hpAtual'];
        $vidaAtual = $data['vidaAtual'];
        $checkpoint = $data['checkpoint'];

        // Prepare the SQL query
        $sql = "UPDATE userData SET 
                nome = ?, 
                username = ?, 
                email = ?, 
                senha = ?, 
                faseAtual = ?,
                hpAtual = ?, 
                vidaAtual = ?, 
                checkpoint = ? 
                WHERE usrId = ?";

        // Prepare the statement
        if ($stmt = $conn->prepare($sql)) {
            // Bind the parameters
            $stmt->bind_param("ssssiiiii", $nome, $username, $email, $senha, $faseAtual, $hpAtual, $vidaAtual, $checkpoint, $usrId);
            
            $stmt->execute();
     
            $stmt->close();
        } 
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid JSON data.';
    }

    // Send the JSON response
    echo json_encode($response);

    // Close the database connection
    $conn->close();