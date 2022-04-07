<?php include 'includes/header.php';

$nombre = 'Alvaro';
var_dump('Hola ' . $nombre);

// Declarar constantes
define('constante', 'valor de la constante');
var_dump(constante);

// Otro tipo de constantes
const constante2 = 'valor de la constante 2';
var_dump(constante2);

include 'includes/footer.php';

