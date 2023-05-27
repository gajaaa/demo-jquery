<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $number = intval($_POST['number']);
  $text = $_POST['text'];
  $dataArray = [];

  for ($i = 1; $i <= $number; $i++) {
    $dataArray[] = "$text ($i)";
  }

  header('Content-Type: application/json');
  echo json_encode($dataArray);
  exit();
}
