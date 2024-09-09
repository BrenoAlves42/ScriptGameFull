<?php
    include(__DIR__ . '/../../control/config.php');


    $data = json_decode(file_get_contents("php://input"), true);
    
    header('Content-Type: application/json');

    $response = array();

    if ($data) {
 
        $id = $data['id'];
        $id_user = $data['id_user'];
        $df1 = $data['df1'];
        $df2 = $data['df2'];
        $df3 = $data['df3'];
        $df4 = $data['df4'];
        $df5 = $data['df5'];
        $df6 = $data['df6'];
        $df7 = $data['df7'];
        $df8 = $data['df8'];
        $df9 = $data['df9'];
        $df10 = $data['df10'];
        $df11 = $data['df11'];
        $df12 = $data['df12'];
        $df13 = $data['df13'];

        $sql = "UPDATE user_faseM1 SET 
            id_user = ?, 
            df1 = ?, 
            df2 = ?, 
            df3 = ?, 
            df4 = ?, 
            df5 = ?, 
            df6 = ?, 
            df7 = ?, 
            df8 = ?, 
            df9 = ?, 
            df10 = ?, 
            df11 = ?, 
            df12 = ?, 
            df13 = ?
            WHERE id = ?";

    // Prepare the statement
        if ($stmt = $conn->prepare($sql)) {
            // Bind the parameters
            $stmt->bind_param("iiiiiiiiiiiiiii", 
                $id_user, $df1, $df2, $df3, $df4, $df5, $df6, 
                $df7, $df8, $df9, $df10, $df11, $df12, $df13, $id);
            
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