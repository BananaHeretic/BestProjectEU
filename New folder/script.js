			var tekst = function(input){
					$("#placeholder").append(input);
					var objDiv = document.getElementById("placeholder");
					objDiv.scrollTop = objDiv.scrollHeight;
					};
			$(document).ready(function() {
				
				//Funktsioonid
				

				//Muutujad level 1

				var nimi= "root@localhost:> ";
				var score = 0;
				var trace = 0;
				var level = 3;
				var decrypted = false;
				var cracked = false;
				var scanned = false;
				var cracked2 = false;
				var connected = false;
				var selected = false;
				var folderstuden = false;
				var hasalreadyconnected = false;
				var exploitran = false;
				var logout = false;
				
				//Muutujad level 2
				var decrypted2 = false;
				var cracked3 = false;
				var cracked4 = false;
				var logout2 = false;
				var scanned2 = false;
				var connected2 = false;
				var run2 = false;
				var selected2 = false;
				var empty2 = false;
    			
    			
				// level 3
				
				$("form").submit(function(){
					
					// input on võrdne cmd tekstiga
					inpu = $("#command_line").val();
					input = inpu.toLowerCase();
					// Switch mis määrab leveli
					
					
					//level 3
					
					aadress = input.replace(/decrypt/gi, "");
        aadress = aadress.replace(/crack/gi, "");
        aadress = aadress.replace(/scan/gi, "");
        aadress = aadress.replace(/connect/gi, "");
        aadress = aadress.replace(/select/gi, "");
        
        // Switch mis määrab leveli
        function decrypt(a, b) {
            $("#placeholder").append("Decrypting ", a, "<br>");
            setTimeout(function () {
                $("#placeholder").append("Decrypted ", a, "<br/>");
            }, b);
            return;
        }
        function crack(a, b, d, c) {
            if (c && !d) {
                setTimeout(function () {
                    $("#placeholder").append("You have cracked ", a, "<br/>");
                }, 1000);
                cracked = true;
            }
            else if (c) {
                $("#placeholder").append("You have already cracked ", a, "<br/>");
            }
            else if (!d) {
                $("#placeholder").append("Can't crack",a, "maybe try decrypting it first?<br/>");
            }

        }
					
					
					
					
					switch(level){
					
					case 3:
                switch (input) {
                    case "gaben":
                        $("#gaben").css({"top": "", "color": "white"});
                        break;

                    case "switch level":
                        $("body").css("background-image", "url('md.png')");
                        $("#volvo1").css("visibility", "visible");
                        $("#volvo2").css("visibility", "visible");
                        $("#volvo3").css("visibility", "visible");
                        $("#volvo4").css("visibility", "visible");
                        $("#gabe").css("visibility", "visible");
                        $("#gabe1").css("visibility", "visible");
                        $("#gabe2").css("visibility", "visible");
                        $("#gabe3").css("visibility", "visible");
                        $("#gabe4").css("visibility", "visible");
                        $("#info").html("FROM: <span id='md' style='font-weight:bold'>DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br> Tere, mina soovin 25,000,000 EUR doshi.Palun võta see swadbankist, sest seal pole minul ühtegi kontot.");
                    break;
					case "decrypt swadbank.dosh.ee":
                        $("#placeholder").append(input + "<br>");
                        if (!decrypted) {
                            decrypt(aadress, 2000);
                            decrypted = true;

                            score += 1;
                            $('#skoor span').html(score);
                            decrypted = true;
                        }
                        else {

                            $("#placeholder").append("See server on juba decryptitud<br>");
                        }
                        break;

                    case "crack swadbank.dosh.ee":
                        $("#placeholder").append(input + "<br>");
                        crack(aadress, 3000, $decrypt, $crack);

                        break;

                    case "connect swadbank.dosh.ee":
                        if (decrypted && cracked) {
                            $("#placeholder").append("You are now connected to ", aadress, "<br/>");
                            $("#placeholder").append("addresses.txt<br/>");
                            $("#placeholder").append("creditcardnr.txt<br/>");
                            $("#placeholder").append("email.txt<br/>");
                            $("#placeholder").append("hash2.db<br/>");
                            $("#placeholder").append("hash.db<br/>");
                            $("#placeholder").append("hash3.db<br/>");
                            $("#placeholder").append("passwords.txt<br/>");
                        }
                        else if (!cracked) {
                            $("#placeholder").append("You have already cracked ", aadress, "<br/>");
                        }
                        else if (!decrypted) {
                            $("#placeholder").append("Can't connect to", aadress, "maybe try decrypting it first?<br/>");
                        }
                        break;

                    case "download email.txt":
                        setTimeout(function () {
                            $("#placeholder").append("This file is encrypted!<br>File downloaded<br>");
                        }, 3000);
                        $("#placeholder").append("Downloading...<br>");
                        break;

                    case "decrypt email.txt":
                        setTimeout(function () {
                            $("#info").html("FROM:admin <br> SUBJECT: raha <br> <br> Koik raha on hash3.db failis. ")
                            $("#placeholder").append("File decrypted!<br>");
                        }, 1000);

                        break;

                    case "download hash3.db":


                        setTimeout(function () {

                            $("#placeholder").append("This file is encrypted!<br>File downloaded<br>");
                        }, 3000);
                        $("#placeholder").append("Downloading...<br>");

                        break;

 

                    case "scan dreamhack.edu.ee":
                        if (decrypted && cracked && !scanned) {
                            $("#placeholder").append("swadbank.dosh.ee appears on the map<br>")
                            $(".dosh").fadeIn(1000);
                            scanned = true;
                        }
                        else if (scanned) {
                            $("#placeholder").append("You have already scanned dreamhack.edu.ee.ee<br>")
                        }


                        else {
                            $("#placeholder").append("Can't scan dreamhack.edu.ee, have you decrypted and cracked it?<br>")
                        }
                        break;

                    case "help":
                        $("#placeholder").append(input + "<br>");
                        $("#placeholder").append("This is a list of available commands:<br><table><tr><td>CRACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> <td style='font-weight:bold'>Cracks the server</td></tr> <br> <tr><td>DECRYPT&nbsp;&nbsp;</td> <td style='font-weight:bold'>Decrypts the server</td></tr> <br> <tr><td>SCAN</td> <td style='font-weight:bold'>Scans for servers near you</td></tr> <tr><td>CONNECT</td> <td style='font-weight:bold'>Connects to server</td></tr><tr><td>SELECT</td> <td style='font-weight:bold'>Selects a folder</td></tr><br>");
                        break;

                    default:
				$("#placeholder").append(input + " is an unknown command<br/>")
                        
                }

                $("#command_line").val("");

                $('.progress-bar').css('width', trace + '%').attr('aria.valuenow', trace);
break;
        
		 
					// switch mis juhtub erinevatel
					case 2:
					switch(input){

						case "decrypt valve":
						$("body").css("background-image","url('gabe.jpg')");
                        $("#skoor").css("font-color","black");
						$("#info").css("font-color","black");
						tekst(input + "<br>");
						if(!decrypted2){
							
						setTimeout(function(){
    					tekst("Decrypted 95.100.3.235" + "<br/>");
						decrypted2 = true;
						}, 100);
						tekst("Decrypting: 95.100.3.235" + "<br/>");
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
							
							tekst("See server on juba decryptitud<br>");
							}
						break;
						
						
						case "crack valve":
						tekst(input + "<br>");
						if (decrypted2 && !cracked2){
							
						aadress2 = "valve";
						setTimeout(function(){
						tekst("You have cracked " + aadress2 + "<br/>")
						nimi = "root@tptlive.ee:> ";
						}, 1000);
						cracked3 = true;
						trace += 10;
						}
						else if(cracked2){
								tekst("You have already cracked " + aadress2 + "<br/>");
							}
						
						
						
						else if(!decrypted2){
							tekst("Can't crack 95.100.3.235, maybe try decrypting it first?<br/>")
							}
						break;
						
						
												
						

						
						
						/*Scannimine*/
						case "scan valve":
						if(decrypted2&&cracked3&&!scanned2){
							tekst("Steami pank appears on the map<br>")
							$(".tekst2").fadeIn(1000);
							scanned2 = true;
						}
						else if(scanned2){
							tekst("You have already scanned 95.100.3.235<br>")
							}
						
						
						else{
							tekst("Can't scan 95.100.3.235, have you decrypted and cracked it?<br>")
						}
						
						break;
			
						case "help":
						tekst(input + "<br>");
						tekst("This is a list of available commands:<br>CRACK - Cracks the server <br> DECRYPT - Decrypts the server <br> SCAN - Scans for servers near you<br>");
						break;
						
						case "crack pank":
						if (!cracked4 && scanned2 ){
							
						aadress2 = "pank";
						setTimeout(function(){
						tekst("You have cracked " + aadress2 + "<br/>")
						nimi = "root@tptlive.ee:> ";
						}, 1000);
						cracked4 = true;
						trace += 10;
						}
						else if(cracked4){
								tekst("You have already cracked " + aadress2 + "<br/>");
							}
						
						
						
						else if(!scanned2){
							tekst("Sa pead Valve scannima enne Panga crackimist!!<br/>")
							}
						break;
						case "connect pank":
						tekst(input + "<br>");
							if(cracked4){
								setTimeout(function(){
						tekst("Connecting...<br>")
						}, 1000);
								setTimeout(function(){
						tekst("<br> >>Monies <br> >>CS:GO Servers <br> >>TF2 Servers <br> >>Workers <br> >>Valve Games <br> <br> <br> <br>")
						}, 2000);
								connected2=true
								run2=true;
							}
						break;
				
						
						case "select monies":
						tekst(input + "<br>");
							if(connected2){
										setTimeout(function(){
						tekst("Selecting...<br>")}, 100);
								setTimeout(function(){
						tekst("<br> >>Steam Market: 1 000 000 000$ <br> >>Steam Store: 10 000 000$ <br>")
						}, 2000);
							}
								selected2=true;
						break;
						
						case "run empty.exe":
						tekst(input + "<br>");
							if(selected2){
						setTimeout(function(){
						tekst("Emptying.<br>")
						}, 100);
						setTimeout(function(){
						tekst("Emptying..<br>")
						}, 1000);
						setTimeout(function(){
						tekst("Emptying...<br>")
						}, 2000);
								setTimeout(function(){
						tekst("<br> >>Steam Market: 0$ <br> >>Steam Store: 0$ <br>")
						}, 5000);
								empty2 = true;
							}
						break;
						
						case "logout":
						tekst(input + "<br>");
							if(connected2 && empty2){
										setTimeout(function(){
						tekst("Logging out...<br>")
						}, 100);
						setTimeout(function(){
						tekst("Logged out!<br>")
						}, 1000);
								}
								
						logout2 = true;
						setTimeout(function(){
						
						if(logout2){
						alert("GGWP M80");
						}}, 2000);
						break;
					
						default:
						
						tekst(input + " is an unknown command<br/>")
					
					}

					$("#command_line").val("");

	$('.progress-bar').css('width', trace+'%').attr('aria.valuenow', trace);

					break;
					


					
					case 1: 	
					switch(input){
						
						case "decrypt tptlive.ee":
						tekst(input + "<br>");
						if(!decrypted){
						setTimeout(function(){
						tekst("Decrypted tptlive.ee <br>");
						decrypted = true;
						}, 1000);
						tekst("Decrypting tptlive.ee <br>");
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
							
							tekst("See server on juba decryptitud<br>");
							}
						break;
						
						
						case "crack tptlive.ee":
						tekst(input + "<br>");
						if (decrypted && !cracked){
							
						aadress = " tptlive.ee";
						setTimeout(function(){
						tekst("You have cracked " +  aadress +  "<br/>")
						nimi = "root@tptlive.ee:> ";
						}, 1000);
						cracked = true;
						}
						else if(cracked){
								tekst("You have already cracked " +  aadress + "<br/>");
							}
						
						
						
						else if(!decrypted){
							tekst("Can't crack tptlive.ee, maybe try decrypting it first?<br/>")
							}
						break;
						
						case "scan tptlive.ee":
						tekst(input + "<br>");
						if(decrypted&&cracked&&!scanned){
							tekst("siseveeb.ee appears on the map<br>")
							$(".tekst2").fadeIn(1000);
							scanned = true;
						}
						else if(scanned){
							tekst("You have already scanned tptlive.ee<br>")
							}
						
						
						else{
							tekst("Can't scan tptlive.ee, have you decrypted and cracked it?<br>")
						}
						
						break;


						case "crack siseveeb.ee":
						tekst(input + "<br>");
						if (scanned && !cracked2){
							
						aadress = " siseveeb.ee";
						setTimeout(function(){
						tekst("You have cracked " + aadress + ". You can now connect.<br/>")
						nimi = "root@siseveeb.ee:> ";
						}, 1000);
						cracked2 = true;
						}
						else if(cracked2){
								tekst("You have already cracked " + aadress + "<br/>");
							}
						
						
						
						else if(!scanned){
							tekst("You haven't scanned tptlive.ee")
							}
						break;


						case "connect siseveeb.ee":
						tekst(input + "<br>");
							if(cracked2){
								setTimeout(function(){
						tekst("Connecting<br>")
						}, 1000);
								setTimeout(function(){
						tekst("<br>Folders:<br><br>Hinded<br>Puudumised<br>Üritused<br><br>")
						}, 2000);
						if (!hasalreadyconnected){
							trace=0;
								}
								uih=setInterval(function(){
 								trace+=2;
 								
 								$('.progress-bar').css('width', trace+'%').attr('aria.valuenow', trace);
 								if(trace==100){
 								tekst("SA KAOTASID!!!");
 								}
								}, 1000);
								
								connected=true;
								hasalreadyconnected=true;
							}
						break;

						case "select folder hinded":
						tekst(input + "<br>");
							if(connected){
								
								setTimeout(function(){
						tekst("<br>Kursus:<br>XD-13<br>XD-14<br>SE-12<br>SE-13<br>VV-14<br>")
						}, 2000);
							}
						break;

						case "select xd-13":
						tekst(input + "<br>");
							if(connected){
								
								setTimeout(function(){
						tekst("<br>Õpilase nimi:<br>Ahti Ahtosson<br>Uku Meelis<br>Peeter Mets<br>Uku Võilill<br>")
						}, 2000);
							}
						break;	


						case "select peeter mets":
						tekst(input + "<br>");
							if(connected){
								folderstudent=true;
								setTimeout(function(){
						tekst("<br> Hinded: Peeter Mets<br>Eesti keel: 2 <br> Matemaatika: 2 <br> Praktika: 3 <br> Kehaline Kasvatus: 4 <br> Keemia: 2<br>")
						}, 2000);
							}
						break;

						case "run exploit":
						tekst(input + "<br>");
							if(folderstudent){
								
								setTimeout(function(){
						tekst("<br> Hinded: Peeter Mets<br>Eesti keel: 5 <br> Matemaatika: 5 <br> Praktika: 5 <br> Kehaline Kasvatus: 5 <br> Keemia: 5<br>")
						}, 2000);
						exploitran=true;
							}
						break;	

						case "logout":
						tekst(input + "<br>");
							if(connected){
								connected=false;
								clearInterval(uih);
							}
							logout = true;

						if(exploitran&&trace<100&&logout){
							level = 2;
							alert("Sa võitsid!");
							$( "#placeholder" ).empty();
												$("#info").html("FROM: <br> ElectronicArts@nohomo.com <br> SUBJECT: EA: <br> <br> Tervoi, me maksame sulle palju moni, et crackida Steami serveritesse sisse ja nende kontod tühjaks teha!");
							}

						break;	
						
						case "help":
						tekst(input + "<br>");
						tekst("This is a list of available commands:<br>CRACK - Cracks the server <br> DECRYPT - Decrypts the server <br> SCAN - Scans for servers near you<br>");
						break;
						
						

						
						default:
						
						tekst(input + " is an unknown command<br/>")
					}

					$("#command_line").val("");

	
					break;
					};//case 1 switch lõpeb
					
					
					}); //switch level lõpeb
					setTimeout(function(){
				switch(level){
					case 1:
					tekst('Type "help" to see a list of commands<br>');
					$("#info").html("FROM: root@decxe.com <br> SUBJECT: Hinded <br> <br> Tere, kukkusin koolis mitmed ained läbi ja kui mu vanemad teada saaks siis nad tapaks mu maha. Kas oleks kuidagi võimalik mu hindeid muuta? Mu nimi on Peeter Mets, õpin Tallinna Polütehnikumis kursusel XD-13");
					break;
					case 2:
					$("#info").html("FROM: root@xdesz.com <br> SUBJECT: Madis <br> <br> Tervä, kukkusin koolis mitmed ained läbi ja kui mu vanemad teada saaks siis nad tapaks mu maha. Kas oleks kuidagi võimalik mu hindeid muuta? Mu nimi on Peeter Mets, õpin Tallinna Polütehnikumis kursusel XD-13");
					break;
				// Kui form submititakse
				}
				}, 100);
			});//document.ready lõpeb
			;
