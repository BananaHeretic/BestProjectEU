<!doctype html>
<html>
<head>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">

<!-- Lisab kujundus.css-i-->
<link rel="stylesheet" type="text/css" href="kujundus.css">

<meta charset="utf-8">
<title>mäng</title>
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<script src="script.js"></script>

</head>

<body>
<!-- See alustab bootstrapi rea -->
<div class="row">
<!-- Teen tühja divi mille laius on 3 (bootstrap koosneb 12 osast, ehk siis algusest on 3/12 tühjust)-->
<div class="col-xs-0 col-sm-1 col-lg-3"></div>
<!-- 4/12 osa on map-->
<div class="col-xs-6 col-sm-5 col-lg-4">

<p class="tekst2" style="display:none;">■ Pank</p>
<p id="abc2" class="description">
Location: Benin <br/>
IP: 82.21.4.400
</p>


<p class="tekst">■ Valve</p>
<p id="abc" class="description">
Location: USA <br/>
IP: 90.100.3.235
</p>


<!-- Mapi pilt, class "img-responsive" on sellepärast, et see automaatselt võtaks suuruse, mis talle bootstrapiga määratud on.-->
<div id="thumbnail">
<img id="map" src="mapp.jpeg" class="img-responsive"/></div>
</div>

<div class="col-xs-6 col-sm-5 col-lg-2">

<div id="skoor">
	Sinu skoor: <div id="skoor"><span></span></div>
    <p>
Trace %:
</p>
<div class="progress">
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
