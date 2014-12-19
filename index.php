<!doctype html>
<html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

<!-- Lisab kujundus.css-i-->
<link rel="stylesheet" type="text/css" href="kujundus.css">

<meta charset="utf-8">
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<script src="script.js"></script>

</head>

<body onload="trace()">
<img src="gaben.jpg"id="gabe1">
<!-- See alustab bootstrapi rea -->
<div class="row">
<!-- Teen tühja divi mille laius on 3 (bootstrap koosneb 12 osast, ehk siis algusest on 3/12 tühjust)-->
<div class="col-xs-0 col-sm-1 col-lg-3"></div>
<!-- 4/12 osa on map-->
<div class="col-xs-6 col-sm-5 col-lg-4">
<div class="row">
<div class="col-xs-4 col-sm-4 col-lg-4">
<p class="tekst2" style="display:none;">■ siseveeb.ee</p>
<p id="abc2" class="description">
Decrypted: No<br/>
IP: 183.45.634.22
</p>
</div>
<div class="col-xs-4 col-sm-4 col-lg-4">
<p class="tekst">■ tptlive.ee</p>
<p id="abc" class="description">
Decrypted: Yes<br/>
IP: 193.40.160.10
</p>
<p class="dosh">■ Swadbank</p>
<p id="dosh" class="description">
IP: 98.139.134.99
</p>
<p class="dreamhack">■ World Bank</p>
<p id="dreamhack" class="description">
Location: USA, Washington D.C <br/>
IP: 68.142.243.103
</p>
<p class="NASA">■ nasa.gov</p>
<p id="NASA" class="description">
Location: USA, Washington D.C <br/>
IP: 87.248.202.103<br>
Decryption Time: ~15s
</p>

<p class="tekst4">■ Valve</p>
<p id="abc4" class="description">
Location: USA<br/>
IP: 90.100.3.235
</p>

<p class="CIA">■ CIA</p>
<p id="CIA" class="description">
Location:Langley, Virginia,USA<br/>
IP: 241.12.195.101
</p>

<p class="NSA">■ NSA</p>
<p id="NSA" class="description">
Location: Fort Meade, Maryland, U.S. <br/>
IP: 147.209.68.161
</p>

<p class="SONY">■ Sony</p>
<p id="SONY" class="description">
Location: Tokyo, Japan <br/>
IP: 40.171.165.163
</p>

<p class="GRU">■ GRU</p>
<p id="GRU" class="description">
Location: Khoroshevskoye shosse 76, Khodinka, Moscow <br/>
IP: 154.56.27.8
</p>


</div>
<div class="col-xs-4 col-sm-4 col-lg-4"></div>
</div>

<!-- Mapi pilt, class "img-responsive" on sellepärast, et see automaatselt võtaks suuruse, mis talle bootstrapiga määratud on.-->
<div id="thumbnail">
<img id="map" src="mapp.jpeg" class="img-responsive"/></div>
</div>

<div class="col-xs-6 col-sm-5 col-lg-2">
<div id="level">
	Level: </div>
<div id="skoor">
	Sinu skoor: <div id="skoor"><span></span></div>
    <p>
Trace %
</p>
<div class="progress progress-striped">
  <div class="progress-bar progress-bar-danger" aria valuenow= "0" aria-valuemax="100" style="width: 0%">
    <div class="asd" ></div>
  </div>
</div>
</div>
</div>

<div class="col-xs-0 col-sm-1 col-lg-3">

</div>
</div>

<!-- Popupi kood -->
<div class="row">
<div class="col-xs-0 col-sm-1 col-lg-3">

</div>
<div class="col-xs-6 col-sm-5 col-lg-4">


<div id="placeholder"></div>
<form onsubmit="return false;">
<input type="text" size="50" autofocus id="command_line">

</form>

</div>

<div class="col-xs-6 col-sm-5 col-lg-2">

<div id="info">
	
</div>

<div class="col-xs-0 col-sm-1 col-lg-3"></div>
</div>



</div>
</body>
</html>
