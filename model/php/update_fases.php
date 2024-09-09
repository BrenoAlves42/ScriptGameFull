<?php
    include(__DIR__ . '/../../control/config.php');


    $data = json_decode(file_get_contents("php://input"), true);
    
    header('Content-Type: application/json');

    $response = array();

    if ($data) {
 
        $id = $data['id'];
        $mundo = $data['mundo'];
        $fase = $data['fase'];
        $likes = $data['likes'];
        $dislikes = $data['dislikes'];
        $dificuldade = $data['dificuldade'];

        // Prepare the SQL query
        $sql = "UPDATE faseData SET 
                mundo = ?, 
                fase = ?, 
                likes = ?, 
                dislikes = ?, 
                dificuldade = ?
                WHERE id = ?";

        // Prepare the statement
        if ($stmt = $conn->prepare($sql)) {
            // Bind the parameters
            $stmt->bind_param("iiiiii", $mundo, $fase, $likes, $dislikes, $dificuldade, $id);
            
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