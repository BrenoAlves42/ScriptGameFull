<?php

include(__DIR__ . '/../../control/config.php');

header('Content-Type: application/json');

$sql = "SELECT id, id_user, df1, df2, df3, df4, df5, df6, df7, df8, df9, df10, df11, df12, df13 FROM user_faseM1";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);

$conn->close();