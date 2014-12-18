var tekst = function (input) {
    $("#placeholder").append(input);
    var objDiv = document.getElementById("placeholder");
    objDiv.scrollTop = objDiv.scrollHeight;
};
$(document).ready(function () {

    //Funktsioonid


    //Muutujad level 1

    var nimi = "root@localhost:> ";
    var score = 0;
    var trace = 0;
    //level = tptlive; level2=nasa;level3=valve;level4=dosh
    var level = 5;
    var decrypted = false;
    var cracked = false;
    var scanned = false;
    var cracked2 = false;
    var connected = false;
    var hasalreadyconnected = false;
    var exploitran = false;
    var logout = false;
    var injected = false;
    var run = false;
    var folderstudent = false;

    //Muutujad level 2
    var decrypted2 = false;
    var logout2 = false;
    var scanned2 = false;
    var connected2 = false;
    var selected2 = false;
    var empty2 = false;
    switch (level) {

        case 0:
            document.title = "Level 1 | Hacker Evolution";

            /*      $(".tekst5").hide();
             $(".tekst4").hide();
             $(".tekst3").hide();
             $(".tekst2").show();
             $(".tekst").show(); */
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: Ussipoiss@Ussonlahe.ee <br> SUBJECT: REVENGANCE <br><br> Tere, p?§rast seda kui ma TPT-st v?§lja kukkusin olen ma 101% rage ja tahan revengance");
            break;
        case 1:

            document.title = "Level 1 | Hacker Evolution";
            $(".dreamhack").hide();
             $(".dosh").hide();
             $(".tekst5").hide();
             $(".tekst4").hide();
             $(".tekst3").hide();
             $(".tekst2").hide();
             $(".tekst").show();
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: root@decxe.com <br> SUBJECT: Hinded <br> <br> Tere, kukkusin koolis mitmed ained l?§bi ja kui mu vanemad teada saaks siis nad tapaks mu maha. Kas oleks kuidagi v?µimalik mu hindeid muuta? Mu nimi on Peeter Mets, ?µpin Tallinna Pol?ºtehnikumis kursusel XD-13");
            break;

        case 2:

            document.title = "Level 2 | Hacker Evolution";

            $(".tekst5").hide();
            $(".tekst4").hide();
            $(".tekst3").show();
            $(".tekst2").hide();
            $(".tekst").hide();

            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: einstein4324@wrftdy.com <br> SUBJECT: NASA <br> <br> Hallo, ich habe ein paar wichtige dokumente f?ºr die Forschung von der NASA ben?∂tigt. K?∂nnen Sie helfen? <br><br> TRANSLATION: <br><br> Hello, I need a few important documents for research from NASA. Can you help ?");
            break;

        case 3:

            document.title = "Level 3 | Hacker Evolution";

            $(".tekst5").hide();
            $(".tekst4").show();
            $(".tekst3").hide();
            $(".tekst2").hide();
            $(".tekst").hide();

            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: <br> ElectronicArts@nohomo.com <br> SUBJECT: EA: <br> <br> Tervoi, me maksame sulle palju moni, et crackida Steami serveritesse sisse ja nende kontod t?ºhjaks teha!");
            break;
        case 4:

            document.title = "Level 4 | Hacker Evolution";
            $(".tekst5").hide();
            $(".tekst4").hide();
            $(".tekst3").hide();
            $(".dreamhack").show();
            $(".dosh").hide();
            $(".tekst").hide();
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: <span id='md' style='font-weight:bold'>DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br> Tere, mina soovin 25,000,000 EUR doshi.Palun v?µta see swadbankist, sest seal pole minul ?ºhtegi kontot.");
            break;
                    case 5:

            document.title = "Level 5 | Hacker Evolution";
            $(".tekst5").hide();
            $(".tekst4").hide();
            $(".tekst3").hide();
            $(".dreamhack").show();
            $(".dosh").hide();
            $(".tekst").hide();
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: <span id='md' style='font-weight:bold'>VladimirPutin@russiarules.ru</span> <br> SUBJECT: CIA <br> <br> Tere, mina soovin CIA-st kıik Obama-ga seotud dokumenid saada. ")
            break;
                    case 6:

            document.title = "Level 6 | Hacker Evolution";
            $(".tekst5").hide();
            $(".tekst4").hide();
            $(".tekst3").hide();
            $(".dreamhack").show();
            $(".dosh").hide();
            $(".tekst").hide();
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: <span id='md' style='font-weight:bold'>VladimirPutin@russiarules.ee</span> <br> SUBJECT: NSA <br> <br> Hello i would like all NSA documents.");
            break;
                    case 7:

            document.title = "Level 7 | Hacker Evolution";
            $(".tekst5").hide();
            $(".tekst4").hide();
            $(".tekst3").hide();
            $(".dreamhack").show();
            $(".dosh").hide();
            $(".tekst").hide();
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: <span id='md' style='font-weight:bold'>KimJongUn@BestKorea.kr</span> <br> SUBJECT: URGENT <br> <br> Hello, I glorious leader would like you to leak Sony's servers")
            break;
                    case 8:

            document.title = "Level 8 | Hacker Evolution";
            $(".tekst5").hide();
            $(".tekst4").hide();
            $(".tekst3").hide();
            $(".dreamhack").show();
            $(".dosh").hide();
            $(".tekst").hide();
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: <span id='md' style='font-weight:bold'>Amoba@HeSueOhWit.com</span> <br> SUBJECT: GRU <br> <br> Hello, i would like to get all documents relating to Vladimir Putin from the GRU servers.");
            break;
                    case 9:

            document.title = "Level 9 | Hacker Evolution";
            $(".tekst5").hide();
            $(".tekst4").hide();
            $(".tekst3").hide();
            $(".dreamhack").show();
            $(".dosh").hide();
            $(".tekst").hide();
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: <span id='md' style='font-weight:bold'>DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br>");
            break;
                    case 10:

            document.title = "Level 10 | Hacker Evolution";
            $(".tekst5").hide();
            $(".tekst4").hide();
            $(".tekst3").hide();
            $(".dreamhack").show();
            $(".dosh").hide();
            $(".tekst").hide();
            $("#placeholder").append('Type "help" to see a list of commands<br>');
            $("#info").html("FROM: <span id='md' style='font-weight:bold'>DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br> Tere, mina soovin 25,000,000 EUR.Palun v?µta see swadbankist, sest seal pole minul ?ºhtegi kontot.");
            break;
           
    }
    $("#level").append(level);
    // level 3



    // Kui form submititakse

    $("form").submit(function () {

        // input on v√µrdne cmd tekstiga
        inpu = $("#command_line").val();
        input = inpu.toLowerCase();
        // Switch mis m√§√§rab leveli

        // input on v√µrdne cmd tekstiga
        inpu = $("#command_line").val();
        input = inpu.toLowerCase();
        decryptstring = input.substr(input.indexOf("decrypt") + 7);
        crackstring = input.substr(input.indexOf("crack") + 5);
        scanstring = input.substr(input.indexOf("scan") + 4);
        connectstring = input.substr(input.indexOf("connect") + 7);
        selectstring = input.substr(input.indexOf("select") + 6);
        runstring = input.substr(input.indexOf("run") + 3);
        //level 3

        aadress = input.replace(/decrypt/gi, "");
        aadress = aadress.replace(/crack/gi, "");
        aadress = aadress.replace(/scan/gi, "");
        aadress = aadress.replace(/connect/gi, "");
        aadress = aadress.replace(/select/gi, "");

        // Switch mis m√§√§rab leveli
        function decrypt(a, b, c) {
            if(!c) { 
            tekst("Decrypting... "+ a+ "<br>");
            setTimeout(function () {
                tekst("Decrypted "+ a+ "<br/>");
                decrypted = true;
            }, b);
        }
        else if(c) {
            tekst("This server is already decrypted <br>");
        }
            
            return c = true;
        }

        function crack(a, b, d, c) {
            if (!c && d) {
                setTimeout(function () {
                    tekst("You have cracked "+ a + "<br/>");
                }, b);
                cracked = true;
            }
            else if (c) {
                tekst("You have already cracked "+ a + "<br/>");
            }
            else if (!d) {
                tekst("Can't crack"+ a + " maybe try decrypting it first?<br/>");
            }
            $("#command_line").val("");
        }
        function reset() {
decrypted = false; // Level 1
cracked = false; // Level 1
scanned = false; //
cracked2 = false; //Level 1
connected = false; //
folderstudent = false; //Level 1
hasalreadyconnected = false; //
exploitran = false; //
logout = false; //
injected = false; //
run = false; //
decrypted2 = false; //
logout2 = false; //
scanned2 = false; //
selected2 = false; //
empty2 = false; //
        }







        switch (level) {
            case 1:
switch (input) {
                    case "decrypt tptlive.ee":
                        tekst(input + "<br>");
                        decrypt(aadress,2000,decrypted);
                            score += 1;
                            $('#skoor span').html(score);/*
                             if(trace < 101){
                             progress = setInterval(function () {
                             $asd = $('.asd');
                             
                             $asd.text(trace+'%');
                             }, 800);
                             };*/
                        break;


                    case "crack tptlive.ee":
                        tekst(input + "<br>");
                        if (decrypted && !cracked) {

                            aadress = " tptlive.ee";
                            setTimeout(function () {
                                tekst("You have cracked " + aadress + "<br/>");
                                nimi = "root@tptlive.ee:> ";
                            }, 1000);
                            cracked = true;
                        }
                        else if (cracked) {
                            tekst("You have already cracked " + aadress + "<br/>");
                        }



                        else if (!decrypted) {
                            tekst("Can't crack tptlive.ee, maybe try decrypting it first?<br/>");
                        }
                        $("#command_line").val("");
                        break;

                    case "scan tptlive.ee":
                        tekst(input + "<br>");
                        if (decrypted && cracked && !scanned) {
                            tekst("siseveeb.ee appears on the map<br>");
                            $(".tekst2").fadeIn(1000);
                            scanned = true;
                        }
                        else if (scanned) {
                            tekst("You have already scanned tptlive.ee<br>");
                        }


                        else {
                            tekst("Can't scan tptlive.ee, have you decrypted and cracked it?<br>");
                        }
                        break;


                    case "crack siseveeb.ee":
                        tekst(input + "<br>");
                        if (scanned && !cracked2) {

                            aadress = " siseveeb.ee";
                            setTimeout(function () {
                                tekst("You have cracked " + aadress + ". You can now connect.<br/>");
                                nimi = "root@siseveeb.ee:> ";
                            }, 1000);
                            cracked2 = true;
                        }
                        else if (cracked2) {
                            tekst("You have already cracked " + aadress + "<br/>");
                        }



                        else if (!scanned) {
                            tekst("You haven't scanned tptlive.ee");
                        }
                        break;


                    case "connect siseveeb.ee":
                        tekst(input + "<br>");
                        if (cracked2) {
                            setTimeout(function () {
                                tekst("Connecting<br>");
                            }, 1000);
                            setTimeout(function () {
                                tekst("<br>Folders:<br><br>Hinded<br>Puudumised<br>√?ritused<br><br>");
                            }, 2000);
                            if (!hasalreadyconnected) {
                                trace = 0;
                            }
                            uih = setInterval(function () {
                                trace += 2;

                                $('.progress-bar').css('width', trace + '%').attr('aria.valuenow', trace);
                                if (trace == 100) {
                                    tekst("SA KAOTASID!!!");
                                }
                            }, 1000);

                            connected = true;
                            hasalreadyconnected = true;
                        }
                        else if (!cracked2) {
                            tekst("Please crack the server first.<br>");
                        }
                        $("#command_line").val("");
                        break;

                    case "select folder hinded":
                        tekst(input + "<br>");
                        if (connected) {

                            setTimeout(function () {
                                tekst("<br>Kursus:<br>XD-13<br>XD-14<br>SE-12<br>SE-13<br>VV-14<br>")
                            }, 2000);
                        }
                        break;

                    case "select xd-13":
                        tekst(input + "<br>");
                        if (connected) {

                            setTimeout(function () {
                                tekst("<br>√ïpilase nimi:<br>Ahti Ahtosson<br>Uku Meelis<br>Peeter Mets<br>Uku V√µilill<br>");
                            }, 2000);
                        }
                        break;


                    case "select peeter mets":
                        tekst(input + "<br>");
                        if (connected) {
                            folderstudent = true;
                            setTimeout(function () {
                                tekst("<br> Hinded: Peeter Mets<br>Eesti keel: 2 <br> Matemaatika: 2 <br> Praktika: 3 <br> Kehaline Kasvatus: 4 <br> Keemia: 2<br>");
                            }, 2000);
                        }
                        break;

                    case "run exploit":
                        tekst(input + "<br>");
                        if (folderstudent) {

                            setTimeout(function () {
                                tekst("<br> Hinded: Peeter Mets<br>Eesti keel: 5 <br> Matemaatika: 5 <br> Praktika: 5 <br> Kehaline Kasvatus: 5 <br> Keemia: 5<br>");
                            }, 2000);
                            exploitran = true;
                        }
                        break;

                    case "logout":
                        tekst(input + "<br>");
                        if (connected) {
                            connected = false;
                            clearInterval(uih);
                        }
                        logout = true;

                        if (exploitran && trace < 100 && logout) {
                            $("#command_line").val("");
                            level += 1;
                            reset();
                            alert("Sa v√µitsid!");
                            $("#info").html("FROM: einstein4324@wrftdy.com <br> SUBJECT: NASA <br> <br> Hallo, ich habe ein paar wichtige dokumente f√ºr die Forschung von der NASA ben√∂tigt. K√∂nnen Sie helfen? <br><br> TRANSLATION: <br><br> Hello, I need a few important documents for research from NASA. Can you help ?");
                            $("#placeholder").empty();
                        }

                        break;

                    case "help":
                        tekst(input + "<br>");
                        tekst("This is a list of available commands:<br>CRACK - Cracks the server <br> DECRYPT - Decrypts the server <br> SCAN - Scans for servers near you<br>");
                        break;

                    case "help":
                        tekst(input + "<br>");
                        tekst("This is a list of available commands:<br>CRACK - Cracks the server <br> DECRYPT - Decrypts the server <br> SCAN - Scans for servers near you<br>");
                        break;
                    default:
                        $("#command_line").val("");
                        $("#placeholder").append(input + " is an unknown command<br>");
                        break;
                }
                $("#command_line").val("");

                break;
            case 2:
                switch (input) {
                    case "decrypt" + decryptstring:
                        if (decryptstring == " nasa.gov") {

                            tekst(nimi + input + "<br>");
                            $("#command_line").val("");
                            if (!decrypted) {

                                setTimeout(function () {
                                    $("#placeholder").append("Decrypted nasa.gov" + "<br/>");
                                    decrypted = true;
                                }, 1000);
                                $("#placeholder").append("Decrypting: nasa.gov " + "<br/>");
                                score = 1;
                                $('#skoor span').html(score);
                            }
                            else {
                                $("#placeholder").append(nimi + input + "<br>");
                                $("#placeholder").append("This server has already been decrypted<br>");
                            }
                        }
                        else if ((decryptstring.trim(input)).length == 0) {
                            $("#command_line").val("");
                            tekst(nimi + input + "<br>");
                            tekst("You didn't enter anything <br>");
                        }
                        else {
                            $("#command_line").val("");
                            tekst(nimi + input + "<br>");
                            tekst("Can't decrypt " + decryptstring + "<br>");
                        }
                        break;


                    case "crack" + crackstring:
                        if (crackstring == " nasa.gov") {
                            $("#command_line").val("");
                            tekst(nimi + input + "<br>");
                            if (decrypted && !cracked) {

                                aadress = " nasa.gov";
                                setTimeout(function () {
                                    tekst("You have cracked " + aadress + "<br/>");

                                    nimi = "root@nasa.gov:> ";
                                }, 1000);
                                cracked = true;
                            }
                            else if (cracked) {
                                tekst("You have already cracked " + aadress + "<br/>");
                            }
                            else if (!decrypted) {
                                tekst("Can't crack nasa.gov, maybe try decrypting it first?<br/>");
                            }
                        }
                        else if ((crackstring.trim(input)).length == 0) {
                            $("#command_line").val("");
                            tekst("You didn't enter anything <br>");
                        }
                        else {
                            $("#command_line").val("");
                            tekst("Can't crack " + crackstring + "<br>");
                        }
                        break;

                    case "inject docs.exe":
                        $("#command_line").val("");
                        tekst(nimi + input + "<br>");
                        if (decrypted && cracked && !injected) {

                            setTimeout(function () {
                                $("#placeholder").append("You successfully injected docs.exe<br>");
                            }, 1000);
                            injected = true;
                        }
                        else if (injected) {
                            $("#placeholder").append("You have already injected to nasa.gov<br>");
                        }


                        else {
                            $("#placeholder").append("Can't inject file to nasa.gov, have you decrypted and cracked it?<br>");
                        }

                        break;

                    case "run docs.exe":
                        $("#command_line").val("");
                        tekst(nimi + input + "<br>");
                        if (decrypted && cracked && injected && !run) {

                            setTimeout(function () {
                                $("#placeholder").append("You ran docs.exe<br>");
                                decrypted = false;
                                cracked = false;
                            }, 1000);
                            run = true;
                        }
                        else if (run) {
                            tekst("You have already ran the file<br>");
                        }


                        else {
                            tekst("Can't run the file, have you injected it?<br>");
                        }

                        break;
                    case "logout":
                        tekst(input + "<br>");
                        $("#command_line").val("");
                        if (connected2 && empty2) {
                            setTimeout(function () {
                                tekst("Logging out...<br>");
                            }, 100);
                            setTimeout(function () {
                                tekst("Logged out!<br>");
                            }, 1000);
                        }

                        logout2 = true;
                        setTimeout(function () {

                            if (logout2) {
                                alert("GGWP M80");
                                reset();
                                level += 1;
                                $("#info").html("FROM: <br> ElectronicArts@nohomo.com <br> SUBJECT: EA: <br> <br> Tervoi, me maksame sulle palju moni, et crackida Steami serveritesse sisse ja nende kontod t√ºhjaks teha!");
                                $("body").css("background-image", "url('gabe.jpg')");
                                $("#placeholder").empty();
                                

                            }
                        }, 2000);

                        break;
                    case "help":
                        tekst(nimi + input + "<br>");
                        tekst("This is a list of available commands:<br>CRACK - Cracks the server <br> DECRYPT - Decrypts the server <br> SCAN - Scans for servers near you <br> INJECT - Injects the specified file to the server <br> RUN - Runs the specified file<br>");
                        $("#command_line").val("");
                        break;

                    case "help":
                        tekst(nimi + input + "<br>");
                        tekst("This is a list of available commands:<br>CRACK - Cracks the server <br> DECRYPT - Decrypts the server <br> SCAN - Scans for servers near you <br> INJECT - Injects the specified file to the server <br> RUN - Runs the specified file<br> SELECT - Selects a specified item<br>LOGOUT - Ends the current session<br>");
                        $("#command_line").val("");
                        break;

                    default:
                        $("#command_line").val("");
                        tekst(input + " is an unknown command<br>");
                        break;
                }

                break;

                $("#command_line").val("");
                $('.progress-bar').css('width' + trace + '%').attr('aria.valuenow' + trace);


            case 3:
                switch (input) {

                    case "decrypt valve":
                        $("#skoor").css("font-color", "black");
                        $("#info").css("font-color", "black");
                        tekst(input + "<br>");
                        if (!decrypted) {

                            setTimeout(function () {
                                tekst("Decrypted 95.100.3.235" + "<br/>");
                                decrypted = true;
                            }, 100);
                            tekst("Decrypting: 95.100.3.235" + "<br/>");
                            score += 1;
                            $('#skoor span').html(score);/*		
                             
                             if(trace < 101){
                             progress = setInterval(function () {
                             $asd = $('.asd');
                             
                             $asd.text(trace+'%');
                             }, 800);
                             };*/
                        }
                        else {

                            tekst("See server on juba decryptitud<br>");
                        }
                        break;


                    case "crack valve":
                        tekst(input + "<br>");
                        if (decrypted && !cracked) {

                            aadress2 = "valve";
                            setTimeout(function () {
                                tekst("You have cracked " + aadress2 + "<br/>");
                                nimi = "root@tptlive.ee:> ";
                            }, 1000);
                            cracked = true;
                            trace += 10;
                        }
                        else if (cracked) {
                            tekst("You have already cracked " + aadress2 + "<br/>");
                        }



                        else if (!decrypted) {
                            tekst("Can't crack 95.100.3.235, maybe try decrypting it first?<br/>");
                        }
                        break;

                        /*Scannimine*/
                    case "scan valve":
                        if (decrypted && cracked && !scanned) {
                            tekst("Steami pank appears on the map<br>");
                            $(".tekst2").fadeIn(1000);
                            scanned2 = true;
                        }
                        else if (scanned) {
                            tekst("You have already scanned 95.100.3.235<br>");
                        }


                        else {
                            tekst("Can't scan 95.100.3.235, have you decrypted and cracked it?<br>");
                        }

                        break;

                    case "help":
                        tekst(input + "<br>");
                        tekst("This is a list of available commands:<br>CRACK - Cracks the server <br> DECRYPT - Decrypts the server <br> SCAN - Scans for servers near you<br>");
                        break;

                    case "crack pank":
                        if (!cracked2 && scanned) {

                            aadress2 = "pank";
                            setTimeout(function () {
                                tekst("You have cracked " + aadress2 + "<br/>");
                                nimi = "root@tptlive.ee:> ";
                            }, 1000);
                            cracked2 = true;
                            trace += 10;
                        }
                        else if (cracked2) {
                            tekst("You have already cracked " + aadress2 + "<br/>");
                        }



                        else if (!scanned2) {
                            tekst("Sa pead Valve scannima enne Panga crackimist!!<br/>");
                        }
                        break;
                    case "connect pank":
                        tekst(input + "<br>");
                        if (cracked2) {
                            setTimeout(function () {
                                tekst("Connecting...<br>");
                            }, 1000);
                            setTimeout(function () {
                                tekst("<br> >>Monies <br> >>CS:GO Servers <br> >>TF2 Servers <br> >>Workers <br> >>Valve Games <br> <br> <br> <br>");
                            }, 2000);
                            connected = true;
                            run2 = true;
                        }
                        break;


                    case "select monies":
                        tekst(input + "<br>");
                        if (connected) {
                            setTimeout(function () {
                                tekst("Selecting...<br>");
                            }, 100);
                            setTimeout(function () {
                                tekst("<br> >>Steam Market: 1 000 000 000$ <br> >>Steam Store: 10 000 000$ <br>");
                            }, 2000);
                        }
                        selected2 = true;
                        break;

                    case "run empty.exe":
                        tekst(input + "<br>");
                        if (selected2) {
                            setTimeout(function () {
                                tekst("Emptying.<br>");
                            }, 100);
                            setTimeout(function () {
                                tekst("Emptying..<br>");
                            }, 1000);
                            setTimeout(function () {
                                tekst("Emptying...<br>");
                            }, 2000);
                            setTimeout(function () {
                                tekst("<br> >>Steam Market: 0$ <br> >>Steam Store: 0$ <br>");
                            }, 5000);
                            empty2 = true;
                        }
                        break;

                    case "logout":
                        tekst(input + "<br>");
                        if (connected && empty2) {
                            setTimeout(function () {
                                tekst("Logging out...<br>");
                            }, 100);
                            setTimeout(function () {
                                tekst("Logged out!<br>");
                            }, 1000);
                        }

                        logout2 = true;
                        setTimeout(function () {

                            if (logout2) {
                                alert("GGWP M80");
                                reset();
                                level += 1;
                                $("#info").html("FROM: <span id='md' style='font-weight:bold'>DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br> Tere, mina soovin 25,000,000 EUR doshi.Palun v√µta see swadbankist, sest seal pole minul √ºhtegi kontot.");
                                $("#placeholder").empty();
                            }
                        }, 2000);

                        break;
                    default:
                        tekst(input + " is an unknown command<br>");

                        $('.progress-bar').css('width', trace + '%').attr('aria.valuenow', trace);

                        break;

                }
                $("#command_line").val("");
                break;
            case 4:
                $("#info").html("FROM: <span id='md' style='font-weight:bold'>DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br> Tere, mina soovin 25,000,000 EUR doshi.Palun v√µta see swadbankist, sest seal pole minul √ºhtegi kontot.");
                switch (input) {
                    case "decrypt dreamhack":
                        $("#placeholder").append(input + "<br>");
                            decrypt(aadress,2000,decrypted);
                            score += 1;
                            $('#skoor span').html(score);
                        

                        break;
                    case "crack dreamhack":
                        $("#placeholder").append(input + "<br>");
                        crack(aadress, 3000, decrypted, cracked);
                        break;
                    case "decrypt swadbank":
                        tekst(input + "<br>");
                        if (!decrypted2) {
                            decrypt(aadress, 2000);
                            decrypted2 = true;

                            score += 1;
                            $('#skoor span').html(score);
                        }
                        else {
                            tekst("See server on juba decryptitud<br>");
                        }

                        break;

                    case "crack swadbank":
                        $("#placeholder").append(input + "<br>");
                        crack(aadress, 3000, decrypted2, cracked2);

                        break;

                    case "connect swadbank":
                        if (decrypted2 && cracked2) {
                            tekst("You are now connected to ", aadress, "<br/>");
                            tekst("addresses.txt<br/>");
                            tekst("creditcardnr.txt<br/>");
                            tekst("email.txt<br/>");
                            tekst("hash2.db<br/>");
                            tekst("hash.db<br/>");
                            tekst("hash3.db<br/>");
                            tekst("passwords.txt<br/>");
                        }
                        else if (!cracked) {
                            tekst("You have already cracked ", aadress, "<br/>");
                        }
                        else if (!decrypted) {
                            tekst("Can't connect to", aadress, "maybe try decrypting it first?<br/>");
                        }
                        break;

                    case "download email.txt":
                        setTimeout(function () {
                            tekst("This file is encrypted!<br>File downloaded<br>");
                        }, 3000);
                        tekst("Downloading...<br>");
                        break;

                    case "decrypt email.txt":
                        setTimeout(function () {
                            $("#info").html("FROM:admin <br> SUBJECT: raha <br> <br> Koik raha on hash3.db failis. ");
                            tekst("File decrypted!<br>");
                        }, 1000);

                        break;

                    case "download hash3.db":


                        setTimeout(function () {

                            tekst("This file is encrypted!<br>File downloaded<br>");
                        }, 3000);
                        tekst("Downloading...<br>");

                        break;



                    case "scan dreamhack":
                        if (decrypted && cracked && !scanned) {
                            tekst("swadbank appears on the map<br>");
                            $(".dosh").fadeIn(1000);
                            scanned = true;
                        }
                        else if (scanned) {
                            tekst("You have already scanned dreamhack<br>");
                        }


                        else {
                            tekst("Can't scan , have you decrypted and cracked it?<br>");
                        }
                        break;
                    case "logout":
                        tekst(input + "<br>");
                        if (connected2 && empty2) {
                            setTimeout(function () {
                                tekst("Logging out...<br>");
                            }, 100);
                            setTimeout(function () {
                                tekst("Logged out!<br>");
                            }, 1000);
                        }

                        logout2 = true;
                        setTimeout(function () {

                            if (logout2) {
                                alert("GGWP M80");
                                reset();

                                level += 1;
                                $("#info").html("FROM: <span id='md' style='font-weight:bold'>DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br> You have completed this game.");
                                $("#placeholder").empty();
                            }
                        }, 2000);

                        break;
                    case "help":
                        tekst(input + "<br>");
                        tekst("This is a list of available commands:<br><table><tr><td>CRACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> <td style='font-weight:bold'>Cracks the server</td></tr> <br> <tr><td>DECRYPT&nbsp;&nbsp;</td> <td style='font-weight:bold'>Decrypts the server</td></tr> <br> <tr><td>SCAN</td> <td style='font-weight:bold'>Scans for servers near you</td></tr> <tr><td>CONNECT</td> <td style='font-weight:bold'>Connects to server</td></tr><tr><td>SELECT</td> <td style='font-weight:bold'>Selects a folder</td></tr><br>");
                        break;
                    default:
                        $("#command_line").val("");
                        tekst(input + " is an unknown command<br>");
                        break;
                        $("#command_line").val("");
                }
                    case 5:
                    switch (input) {
                    case "decrypt cia":
                        var cia = aadress.toUpperCase()
                        decrypt(cia,3000,decrypted);
                        break;
                    case "crack cia":
                        var cia = aadress.toUpperCase()
                        crack(cia,3000,decrypted,cracked);
                        break;
                    case "connect cia":
                        tekst("Al Qaeda.db<br>G.W.B<br>Obama.db<br>agents.db<br>money.db<br>Easy Bake Oven Manual.pdf<br> ");
                        break;
                    case "download obama.db":
                        setTimeout(function () {
                            tekst("File Downloaded<br>This file is encrypted.<br>");
                        }, 3000);
                        tekst("Downloading...<br>");
                        break;
                    case "decrypt obama.db":
                        decrypt(aadress,2000,false);
                        break;
                    case "send file":
                                                setTimeout(function () {
                            tekst("File sent!<br>");
                        }, 1000);
                        tekst("Sending file..<br>");
                        break;
                        case "logout":
                        tekst(input + "<br>");
                            setTimeout(function () {
                                tekst("Logging out...<br>");
                            }, 100);
                            setTimeout(function () {
                                tekst("Logged out!<br>");
                            }, 1000);

                        logout2 = true;
                        setTimeout(function () {

                            if (logout2) {
                                alert("GGWP M80");
                                reset();
                                level += 1;
                                $("#info").html("FROM: <span id='md' style='font-weight:bold'>DoshMaster@Dosh.ee</span> <br> SUBJECT: Loadsa money <br> <br> Tere, mina soovin 25,000,000 EUR doshi.Palun v√µta see swadbankist, sest seal pole minul √ºhtegi kontot.");
                                $("#placeholder").empty();
                            }
                        }, 2000);

                        break;
                        
                                            case "help":
                        tekst(input + "<br>");
                        tekst("This is a list of available commands:<br><table><tr><td>CRACK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td> <td style='font-weight:bold'>Cracks the server</td></tr> <br> <tr><td>DECRYPT&nbsp;&nbsp;</td> <td style='font-weight:bold'>Decrypts the server</td></tr> <br> <tr><td>SCAN</td> <td style='font-weight:bold'>Scans for servers near you</td></tr> <tr><td>CONNECT</td> <td style='font-weight:bold'>Connects to server</td></tr><tr><td>SELECT</td> <td style='font-weight:bold'>Selects a folder</td></tr><br>");
                        break;
                    default:
                        $("#command_line").val("");
                        tekst(input + " is an unknown command<br>");
                        break;
                        $("#command_line").val("");
                        
                }

                $("#command_line").val("");

                $('.progress-bar').css('width', trace + '%').attr('aria.valuenow', trace);
        }
    });

});
;
