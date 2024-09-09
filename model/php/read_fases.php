<?php

include(__DIR__ . '/../../control/config.php');

header('Content-Type: application/json');

$sql = "SELECT id, mundo, fase, likes, dislikes, dificuldade FROM faseData";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$conn->close();