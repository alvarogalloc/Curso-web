<?php include 'includes/header.php';

$numero1 = 20;
$numero2 = 30;
$numero3 = 30;
$numero4 = '30';

var_dump($numero1 > $numero2);
echo '<br>';

var_dump($numero1 < $numero2);
echo '<br>';

var_dump($numero3 >= $numero2);
echo '<br>';

var_dump($numero3 <= $numero1);
echo '<br>';

var_dump($numero1 == $numero3);
echo '<br>';

var_dump($numero4 == $numero3);
echo '<br>';

var_dump($numero4 === $numero3);
echo '<br>';

var_dump($numero4 <=> $numero3);
echo '<br>';

include 'includes/footer.php';
