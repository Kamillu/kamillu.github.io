<?php
$to = 'aguilera.tr@gmail.com';
$remite = $_POST['jcremite'];
$subject = 'Kamillu Store : Aviso de pedido';
$jcitems = $_POST['jcitems'];
$headers = 'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $jcitems, $headers);
mail($remite, $subject, $jcitems, $headers);
echo 'Su Suscripción ha sido solicitado con éxito.<br/> Nos pondremos en contacto para hacele llegar todas nuestras Ofertas, Promociones y Códigos de Descuento Exclusivos mediante el correo su facilitado: ';
echo $remite;
echo '<br/><br/><a href="javascript:history.go(-1)">Volver a Kamillu Store</a>';
?>
