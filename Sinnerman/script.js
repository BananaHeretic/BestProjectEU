aadress = " swadbank.dosh.ee";
$(document).ready(function () {
    //Muutujad

    var nimi = "root@localhost:> ";
    var score = 0;
    var trace = 0;
    var level = 1;
    var decrypted = false;
    var cracked = false;
    var scanned = false;
    var cracked2 = false;
    switch (level) {
        case 1:
            $("#placeholder").append('Type "help" to see a list of commands <br>');
            $("#info").html("<span style='font-weight:bold'>FROM: root@decxe.com</span> <br> SUBJECT: Hinded <br> <br> Tere, kukkusin koolis mitmed ained läbi ja kui mu vanemad teada saaks siis nad tapaks mu maha. Kas oleks kuidagi võimalik mu hindeid muuta? Mu nimi on Peeter Mets, õpin Tallinna Polütehnikumis kursusel XD-13");
            break;
        case 2:
            $("#info").html("FROM: root@xdesz.com <br> SUBJECT: Madis <br> <br> Tervä, kukkusin koolis mitmed ained läbi ja kui mu vanemad teada saaks siis nad tapaks mu maha. Kas oleks kuidagi võimalik mu hindeid muuta? Mu nimi on Peeter Mets, õpin Tallinna Polütehnikumis kursusel XD-13");
            break;


            // Kui form submititakse
    }
    $("form").submit(function () {

        // input on võrdne cmd tekstiga
        inpu = $("#command_line").val();
        input = inpu.toLowerCase();
        // Switch mis määrab leveli
        switch (level) {

            // switch mis juhtub erinevatel



            case 1:
                switch (input) {
                    case "gaben":
                        $("#gaben").css({"top": "", "color": "white"});
                        break;
                    case "switch level":
                        $("body").css("background-color","yellow");
                        $("#info").html("<span id='md' style='font-weight:bold'>FROM: DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br> Tere, mina soovin 25,000,000 EUR doshi.Palun võta see swadbankist, sest seal pole minul ühtegi kontot. ok???????? ");
                    case "decrypt swadbank.dosh.ee":
                        $("#placeholder").append(input + "<br>");
                        if (!decrypted) {

                            setTimeout(function () {
                                $("#placeholder").append("Decrypted swadbank.dosh.ee", "<br/>");
                                decrypted = true;
                            }, 5000);
                            $("#placeholder").append("Decrypting: swadbank.dosh.ee ", "<br/>");
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
                        if (decrypted && !cracked) {
                            setTimeout(function () {
                                $("#placeholder").append("You have cracked ", aadress, "<br/>")
                            }, 1000);
                            cracked = true;
                        }
                        else if (cracked) {
                            $("#placeholder").append("You have already cracked ", aadress, "<br/>");
                        }
                        else if (!decrypted) {
                            $("#placeholder").append("Can't crack tptlive.ee, maybe try decrypting it first?<br/>");
                        }
                        break;
                    case "connect swadbank.dosh.ee":
                        if (decrypted&&cracked) {
                        $("#placeholder").append("You are now connected to ", aadress, "<br/>");
                        $("#placeholder").append("email.txt<br/>");
                        $("#placeholder").append("creditcardnr.txt<br/>");
                        $("#placeholder").append("passwords.txt<br/>");
                        $("#placeholder").append("addresses.txt<br/>");
                        $("#placeholder").append("hash2.db<br/>");
                        $("#placeholder").append("hash.db<br/>");
                        $("#placeholder").append("hash3.db<br/>"); }
                        else {
                        $("#placeholder").append("Sul pole decryptitud, poiss.");
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


                    case "crack siseveeb.ee":
                        $("#placeholder").append(input + "<br>");
                        if (scanned && !cracked2) {

                            aadress = " siseveeb.ee";
                            setTimeout(function () {
                                $("#placeholder").append("You have cracked ", aadress, "<br/>")
                                nimi = "root@siseveeb.ee:> ";
                            }, 1000);
                            cracked2 = true;
                            trace += 10;
                        }
                        else if (cracked2) {
                            $("#placeholder").append("You have already cracked ", aadress, "<br/>");
                        }



                        else if (!scanned) {
                            $("#placeholder").append("sak mi dik<br/>")
                        }
                        break;



                    case "scan tptlive.ee":
                        if (decrypted && cracked && !scanned) {
                            $("#placeholder").append("siseveeb.ee appears on the map<br>")
                            $(".tekst2").fadeIn(1000);
                            scanned = true;
                        }
                        else if (scanned) {
                            $("#placeholder").append("You have already scanned tptlive.ee<br>")
                        }


                        else {
                            $("#placeholder").append("Can't scan tptlive.ee, have you decrypted and cracked it?<br>")
                        }

                        break;



                    case "help":
                        $("#placeholder").append(input + "<br>");
                        $("#placeholder").append("This is a list of available commands:<br><table><tr><td>CRACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> <td style='font-weight:bold'>Cracks the server</td></tr> <br> <tr><td>DECRYPT&nbsp;&nbsp;</td> <td style='font-weight:bold'>Decrypts the server</td></tr> <br> <tr><td>SCAN</td> <td style='font-weight:bold'>Scans for servers near you</td></tr> <tr><td>CONNECT</td> <td style='font-weight:bold'>Connects to server</td></tr><tr><td>SELECT</td> <td style='font-weight:bold'>Selects a folder</td></tr><br>");
                        break;




                    default:

                        $("#placeholder").append(input, " is an unknown command<br/>")
                }

                $("#command_line").val("");

                $('.progress-bar').css('width', trace + '%').attr('aria.valuenow', trace);

            }
    });

});
;
