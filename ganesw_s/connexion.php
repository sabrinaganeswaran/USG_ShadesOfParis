<?php
function connect(){
$connect = mysql_connect('localhost','root','glorisa') or die ("erreur de connexion");
mysql_select_db('usg_ganesw_s',$connect) or die ("erreur de connexion");
}
?>