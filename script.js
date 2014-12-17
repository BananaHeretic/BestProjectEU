			$(document).ready(function() {
				//Muutujad
				
				var nimi= "root@localhost:> ";
				var score = 0;
				var trace = 0;
				var level = 1;
				var decrypted = false;
				var cracked = false;
				var scanned = false;
				var cracked2 = false;
				var cracked3 = false;
				var run = false;
				var selected = false;
				var connected = false;
				var empty = false;
				var logout = false;
				
				switch(level){
					case 3:
					$("#placeholder").prepend('Type "help" to see a list of commands');
					$("#info").html("FROM: root@decxe.com <br> SUBJECT: Hinded <br> <br> Tere, kukkusin koolis mitmed ained läbi ja kui mu vanemad teada saaks siis nad tapaks mu maha. Kas oleks kuidagi võimalik mu hindeid muuta? Mu nimi on Peeter Mets, õpin Tallinna Polütehnikumis kursusel XD-13");
					break;
					case 2:
					$("#info").html("FROM: root@xdesz.com <br> SUBJECT: Madis <br> <br> Tervä, kukkusin koolis mitmed ained läbi ja kui mu vanemad teada saaks siis nad tapaks mu maha. Kas oleks kuidagi võimalik mu hindeid muuta? Mu nimi on Peeter Mets, õpin Tallinna Polütehnikumis kursusel XD-13");
					break;
					case 1:
					$("#info").html("FROM: <br> ElectronicArts@nohomo.com <br> SUBJECT: EA: <br> <br> Tervoi, me maksame sulle palju moni, et crackida Steami serveritesse sisse ja nende kontod tühjaks teha!");
					break;
				// Kui form submititakse
				}
				$("form").submit(function(){
					
					// input on võrdne cmd tekstiga
					inpu = $("#command_line").val();
					input = inpu.toLowerCase();
					// Switch mis määrab leveli
					switch(level){
						
					// switch mis juhtub erinevatel

		
					case 1:
					switch(input){

						case "decrypt valve":
						$("body").css("background-image","url('gabe.jpg')");
                        $("#skoor").css("font-color","black");
						$("#info").css("font-color","black");
						$("#placeholder").prepend(input + "<br>");
						if(!decrypted){
							
						setTimeout(function(){
    					$("#placeholder").prepend("Decrypted 95.100.3.235", "<br/>");
						decrypted = true;
						}, 100);
						$("#placeholder").prepend("Decrypting: 95.100.3.235", "<br/>");
						score+=1;
						$('#skoor span').html(score);/*		
							
							if(trace < 101){
							progress = setInterval(function () {
   							$asd = $('.asd');
							
    						$asd.text(trace+'%');
							}, 800);
							};*/
						}
						else{
							
							$("#placeholder").prepend("See server on juba decryptitud<br>");
							}
						break;
						
						
						case "crack valve":
						$("#placeholder").prepend(input + "<br>");
						if (decrypted && !cracked){
							
						aadress = "valve";
						setTimeout(function(){
						$("#placeholder").prepend("You have cracked ", aadress, "<br/>")
						nimi = "root@tptlive.ee:> ";
						}, 1000);
						cracked = true;
						trace += 10;
						}
						else if(cracked){
								$("#placeholder").prepend("You have already cracked ", aadress, "<br/>");
							}
						
						
						
						else if(!decrypted){
							$("#placeholder").prepend("Can't crack 95.100.3.235, maybe try decrypting it first?<br/>")
							}
						break;
						
						
												
						

						
						
						/*Scannimine*/
						case "scan valve":
						if(decrypted&&cracked&&!scanned){
							$("#placeholder").prepend("Steami pank appears on the map<br>")
							$(".tekst2").fadeIn(1000);
							scanned = true;
						}
						else if(scanned){
							$("#placeholder").prepend("You have already scanned 95.100.3.235<br>")
							}
						
						
						else{
							$("#placeholder").prepend("Can't scan 95.100.3.235, have you decrypted and cracked it?<br>")
						}
						
						break;
			
						case "help":
						$("#placeholder").prepend(input + "<br>");
						$("#placeholder").prepend("This is a list of available commands:<br>CRACK - Cracks the server <br> DECRYPT - Decrypts the server <br> SCAN - Scans for servers near you<br>");
						break;
						
						case "crack pank":
						if (!cracked3 && scanned ){
							
						aadress = "pank";
						setTimeout(function(){
						$("#placeholder").prepend("You have cracked ", aadress, "<br/>")
						nimi = "root@tptlive.ee:> ";
						}, 1000);
						cracked3 = true;
						trace += 10;
						}
						else if(cracked){
								$("#placeholder").prepend("You have already cracked ", aadress, "<br/>");
							}
						
						
						
						else if(!scanned){
							$("#placeholder").prepend("Sa pead Valve scannima enne Panga crackimist!!<br/>")
							}
						break;
						case "connect pank":
						$("#placeholder").prepend(input + "<br>");
							if(cracked3){
								setTimeout(function(){
						$("#placeholder").prepend("Connecting...<br>")
						}, 1000);
								setTimeout(function(){
						$("#placeholder").prepend("<br> >>Monies <br> >>CS:GO Servers <br> >>TF2 Servers <br> >>Workers <br> >>Valve Games <br> <br> <br> <br>")
						}, 2000);
								connected=true
								run=true;
							}
						break;
				
						
						case "select monies":
						$("#placeholder").prepend(input + "<br>");
							if(connected){
										setTimeout(function(){
						$("#placeholder").prepend("Selecting...<br>")}, 100);
								setTimeout(function(){
						$("#placeholder").prepend("<br> >>Steam Market: 1 000 000 000$ <br> >>Steam Store: 10 000 000$ <br>")
						}, 2000);
							}
								selected=true;
						break;
						
						case "run empty.exe":
						$("#placeholder").prepend(input + "<br>");
							if(selected){
						setTimeout(function(){
						$("#placeholder").prepend("Emptying.<br>")
						}, 100);
						setTimeout(function(){
						$("#placeholder").prepend("Emptying..<br>")
						}, 1000);
						setTimeout(function(){
						$("#placeholder").prepend("Emptying...<br>")
						}, 2000);
								setTimeout(function(){
						$("#placeholder").prepend("<br> >>Steam Market: 0$ <br> >>Steam Store: 0$ <br>")
						}, 5000);
								empty = true;
							}
						break;
						
						case "logout":
						$("#placeholder").prepend(input + "<br>");
							if(connected && empty){
										setTimeout(function(){
						$("#placeholder").prepend("Logging out...<br>")
						}, 100);
						setTimeout(function(){
						$("#placeholder").prepend("Logged out!<br>")
						}, 1000);
								}
								
						logout = true;
						setTimeout(function(){
						
						if(logout){
						alert("GGWP M80");
						}}, 2000);
						break;
					
						default:
						
						$("#placeholder").prepend(input, " is an unknown command<br/>")
					
					}

					$("#command_line").val("");

	$('.progress-bar').css('width', trace+'%').attr('aria.valuenow', trace);

					}});
					
			});
			;

