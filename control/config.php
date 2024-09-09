<?php

define('HOST', 'sql10.freemysqlhosting.net');
define('USER', 'sql10723151');
define('PASS', 'gAQRwWWCpQ');
define('NAME', 'sql10723151');


$conn = new mysqli(HOST, USER, PASS, NAME);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
