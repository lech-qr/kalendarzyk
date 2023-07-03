$(document).ready(function(){
        
// Poprawki w siglach
    $('.dane p').each(function () {
        // Lub Romanem
        if ( $(this).hasClass('sigla') && $(this).is(':contains("lub")') ) {
            var text = $(this).html();
            $(this).html(text.replace('lub', '<span>lub</span>'));             
        }
        // msza wigilii: Romanem
        if ( $(this).hasClass('sigla') && $(this).is(':contains("msza wigilii:")') ) {
            var text = $(this).html();
            $(this).html(text.replace('msza wigilii:', '<span>msza wigilii:</span>'));             
        }
        // msza w dzień: Romanem
        if ( $(this).hasClass('sigla') && $(this).is(':contains("msza w dzień:")') ) {
            var text = $(this).html();
            $(this).html(text.replace('msza w dzień:', '<span>msza w dzień:</span>'));             
        }
        // I msza: Romanem
        if ( $(this).hasClass('sigla') && $(this).is(':contains("I msza:")') ) {
            var text = $(this).html();
            $(this).html(text.replace('I msza:', '<span>I msza:</span>'));             
        }
        // II msza: Romanem
        if ( $(this).hasClass('sigla') && $(this).is(':contains("II msza:")') ) {
            var text = $(this).html();
            $(this).html(text.replace('II msza:', '<span>II msza:</span>'));             
        }
        // III msza: Romanem
        if ( $(this).hasClass('sigla') && $(this).is(':contains("III msza:")') ) {
            var text = $(this).html();
            $(this).html(text.replace('III msza:', '<span>III msza:</span>'));             
        }
        // Uniwersalne złamanie tekstu 
        if ( $(this).is(':contains("@")') ) {
            var zlam = $(this).html();
            zlam = zlam.replace(/@/g, "<br>");;
            $(this).html(zlam);
        }
        // Jeśli złamanie będzie od razu przed Godziną czytań
        if ( $(this).is(':contains("gcz: ")') ) {
            var zlam1 = $(this).html();
            zlam1 = zlam1.replace(/gcz: <br>/g, "<br>gcz: ");;
            $(this).html(zlam1);
            console.log('XXX: ' + zlam1);
        }        
    });

// Jeśli niedziela lub uroczystość
    $('article > div.tresc > div.dzien.pierwszy').css({
        'padding': '0',
        'height': '3mm'       
    });
    
// Kolory - ustawienia dla świąt i wspomnień
    $('.dzien').each(function () {
        if ( $(this).hasClass('N') || $(this).hasClass('nakaz') ) {
            // Nie zmieniaj koloru, bo niedziela lub święto nakazane chyba że Palmowa
            // Niedziela Palmowa
            if ( $(this).is(':contains("procesja z palmami")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }            
        } else {
            // Wspomnienia
            // Męczennicy - czrwony
            if ( $(this).is(':contains("(wo)")') && $(this).is(':contains(" m ")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }
            // Święty nieMęczennicy - biały
            if ( $(this).is(':contains("(wo)")') && $(this).is(':not(:contains(" m "))') ) {
                $(this).find('.dane .prawe p.kolor').text('b');
            } 
            
            // Uroczystości i święta
            // Przeważnie biały
            if ( $(this).find('.uroczystosc').is(':contains("(u)")') && $(this).is(':not(:contains(*))') ) {
                $(this).find('.dane .prawe p.kolor').text('b');
            }                        
            if ( $(this).find('.swieto').is(':contains("(u)")') && $(this).is(':not(:contains(*))') ) {
                $(this).find('.dane .prawe p.kolor').text('b');
            }                        
            if ( $(this).find('.swieto').is(':contains("(ś)")') && $(this).is(':not(:contains(*))') ) {
                $(this).find('.dane .prawe p.kolor').text('b');
            }                        
            // Święto Męczennik - czerwony
            if ( $(this).is(':contains(" m (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }            
            // Święto Męczennik - czerwony [inny zapis]
            if ( $(this).is(':contains("(ś)")') && $(this).is(':contains(" m ")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }            
            // Święto Apostoła - różnie
            if ( $(this).is(':contains("św Andrzeja ap (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            } 
            // Święto Wojciecha - czerwony
            if ( $(this).is(':contains("św Wojciecha bp m - głównego patrona Polski (u)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }             
            // Święto Ewangelisty - czerwony
            if ( $(this).is(':contains(" ew (ś)")') && $(this).is(':not(:contains("Jana"))') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }
            // Święto św ap Filipa i Jakuba (ś) - czerwony
            if ( $(this).is(':contains("św ap Filipa i Jakuba (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            } 
            // Jezusa Chrystusa Najwyższego i Wiecznego Kapłana (ś) - biały
            if ( $(this).is(':contains("Jezusa Chrystusa Najwyższego i Wiecznego Kapłana (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('b');
            } 
            // Najświętszej Trójcy (u) - biały
            if ( $(this).is(':contains("Najświętszej Trójcy (u)")') ) {
                $(this).next('.dzien').find('.dane .prawe p.kolor').text('b');
            } 
            // Przemienienie Pańskie (ś) - biały
            if ( $(this).is(':contains("Przemienienie Pańskie (ś)")') ) {
                $(this).next('.dzien').find('.dane .prawe p.kolor').text('b');
            } 
            // Najświętszego Ciała i Krwi Chrystusa (u) - biały
            if ( $(this).is(':contains("Najświętszego Ciała i Krwi Chrystusa (u)")') ) {
                $(this).next('.dzien').find('.dane .prawe p.kolor').text('b');
            } 
            // Święto św Stanisława bp m - głównego patrona Polski (u) - czerwony
            if ( $(this).is(':contains("św Stanisława bp m - głównego patrona Polski (u)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            } 
            // św ap Piotra i Pawła (u) - czerwony
            if ( $(this).is(':contains("św ap Piotra i Pawła (u)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            } 
            // św Tomasza ap (ś) - czerwony
            if ( $(this).is(':contains("św Tomasza ap (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            } 
            // św Bartłomieja ap (ś) - czerwony
            if ( $(this).is(':contains("św Bartłomieja ap (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            } 
            // męczeństwo św Jana Chrzciciela (wo) - czerwony
            if ( $(this).is(':contains("męczeństwo św Jana Chrzciciela (wo)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            } 
            // św Jakuba ap (ś) - czerwony
            if ( $(this).is(':contains("św Jakuba ap (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            } 
            // Podwyższenie Krzyża Świętego (ś) - czerwony
            if ( $(this).is(':contains("Podwyższenie Krzyża Świętego (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }
            // św ap Szymona i Judy Tadeusza (ś) - czerwony
            if ( $(this).is(':contains("św ap Szymona i Judy Tadeusza (ś)")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }
            // Wspomnienie Wszystkich Wiernych Zmarłych - fioletowy
            if ( $(this).is(':contains("Wspomnienie Wszystkich Wiernych Zmarłych")') ) {
                $(this).find('.dane .prawe p.kolor').text('f');
            }
            
            // Inne
            // Wielki Czwartek
            if ( $(this).is(':contains("Wielki Czwartek")') ) {
                $(this).find('.dane .prawe p.kolor').text('b');
            }          
            // Wielki Piatek
            if ( $(this).is(':contains("Wielki Piątek")') ) {
                $(this).find('.dane .prawe p.kolor').text('cz');
            }          
            // Wielki Sobota
            if ( $(this).is(':contains("Wielka Sobota")') ) {
                $(this).find('.dane .prawe p.kolor').text(' ');
            }          
        }
    });
    
//// Poprawki - wspólne dla wszystkich lat
    $('article div.dane p.niedziela:contains("Niedziela Wielkanocna Zmartwychwstania Pańskiego")').css('letter-spacing', '-0.03em');
    $('article div.dane p.niedziela:contains("II Niedziela Wielkanocna - Miłosierdzia Bożego (u)")').css('letter-spacing', '0em');
    $('article div.dane p.niedziela:contains("Zesłanie Ducha Świętego - Pentekoste (u)")').css('letter-spacing', '0.04em');
    $('article div.dane p.niedziela:contains("Świętej Rodziny: Jezusa, Maryi i Józefa (ś)")').css('letter-spacing', '0.04em');
    $('article div.dane p.swieto:contains("Najśw Maryi Panny Królowej Polski - głównej patronki Polski (u)")').parent('.dane').find('.prawe .g_czyt').prepend('<br>');
    $('article div.dane p.wspomnienie:contains("św Marty, Mari i Łazarza (wo)")').closest('.dane').find('.sigla').append('<br><span>lub czyt. własne:</span><br>1 J 4,7-16; Ps 34; J 11,19-27 <span>lub</span> Łk 10,38-42');
    $('article div.dane p.swieto:contains("św Teresy Benedykty od Krzyża dz m - patronki Europy (ś)")').closest('.dane').find('.prawe').prepend('<p>&nbsp;</p>');
    $('article div.dane p.swieto:contains("Wniebowzięcie Najśw Maryi Panny (u)")').closest('.dzien').prev('.dzien').find('.dane').append('<p class="niedziela">Wniebowzięcie Najśw Maryi Panny (u)</p>');
    $('article div.dane p.swieto:contains("Wniebowzięcie Najśw Maryi Panny (u)")').closest('.dzien').addClass('nakaz');
    $('article div.dane p.swieto:contains("Wniebowzięcie Najśw Maryi Panny (u)")').closest('.dzien').find('.dane p.swieto').empty(); 
    $('article div.dane p.wspomnienie:contains("męczeństwo św Jana Chrzciciela (wo)")').closest('.dane').find('.sigla').append('<br><span>lub czyt. własne:</span><br>Jr 1,17-19; Ps 71; Mk 6,17-29');
    $('article div.dane p.wspomnienie:contains("św Aniołów Stróżów (wo)")').closest('.dane').find('.sigla').append('<br><span>lub czyt. własne:</span><br>Wj 23,20-23; Ps 91; Mt 18,1-5.10');
    // Znajdź dokładne dopadowanie - inaczej regułą działałby dla XVIII Niedzieli Zwykłej, ale także dla XXVIII Niedzieli Zwykłej czy VIII…
    $('article div.dane p.niedziela').filter(function() {
        return $(this).text() === "XVIII Niedziela Zwykła";
    }).closest('.dzien').next('.dzien').find('.g_czyt').before('<p class="tom">III tom brew.</p>');
    $('article div.dane p.swieto:contains("Wszystkich Świętych (u)")').closest('.dzien').addClass('nakaz');
    $('article div.dane p.swieto:contains("Wszystkich Świętych (u)")').closest('.dzien').before('<div class="dzien pierwszy" style="padding: 0px; height: 3mm;"><div class="nr_dnia"></div><div class="nazwad"></div><div class="dane"><p class="niedziela">Wszystkich Świętych (u)</p></div></div>');
    $('article div.dane p.swieto:contains("Wszystkich Świętych (u)")').remove();
    $('article div.dane p.swieto:contains("Wspomnienie Wszystkich Wiernych Zmarłych (ś)")').text('Wspomnienie Wszystkich Wiernych Zmarłych');
    // Święta państwowe
    $('section[id^="maj"] .nr_dnia p').filter(function() {
        return $(this).text() === "1";
    }).closest('.dzien').addClass('panstwowe');
    $('section[id^="maj"] .nr_dnia p').filter(function() {
        return $(this).text() === "3";
    }).closest('.dzien').addClass('panstwowe');
    $('section[id^="listopad"] .nr_dnia p:contains("11")').closest('.dzien').addClass('panstwowe');
    // Pczątek czasu letniego - ostatnia niedziela marca
    $('section[id^="marzec"] article.prawa.wzor_B > div.tresc .dzien.N:last .sigla').after('<p class="opis">początek czasu letniego</p>');
    // Rocznica poświęcenia własnego kościoła (u) - ostatnia niedziala października
    $('section[id^="pa"] article.prawa.wzor_B > div.tresc .dzien.N:last .sigla').before('<p class="swieto">Rocznica poświęcenia własnego kościoła (u)</p>');
    $('section[id^="pa"] article.prawa.wzor_B > div.tresc .dzien.N:last .sigla').prepend('<span>(w kościołach poświęconych, w których data poświęcenia<br> jest nieznana - czytania wspólne do wyboru z Lekcjonarza, t. VI) czytania niedzieli:</span> ');
    $('section[id^="pa"] article.prawa.wzor_B > div.tresc .dzien.N:last .sigla').after('<p class="opis">początek czasu zimowego</p>');
    $('section[id^="pa"] article.prawa.wzor_B > div.tresc .dzien.N:last .prawe .kolor').html('b, z');
    // Jezusa Chrystusa Króla Wszechświata (u) - ostatnia niedziela roku liturgicznego (między 20 a 26 listopada).
    $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.S').eq(2).find('.niedziela').html('Jezusa Chrystusa Króla Wszechświata (u)');
    $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.S').eq(2).find('.niedziela').css('letter-spacing', '0.1em');
    $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.N').eq(1).attr('id', 'JezChrKW');
    $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.N').eq(1).find('.sigla').html('Ez 34,11-12.15-17; Ps 23;<br>1 Kor 15,20-26.28; Mt 25,31-46');
    $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.N').eq(1).find('.g_czyt').html('gcz: Dn 7,1-27 lub Ap 1,4-6.10.12-18;<br>2,26-28;3,5.12.20-21');    
    $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.N').eq(1).find('.prawe .kolor').html('b');
    var JezChrKW = $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.N').eq(1).find('.oznaczenie').text();
    $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.N').eq(1).find('.oznaczenie').remove();
    $('section[id^="listopad"] article.wzor_B > div.tresc .dzien .nr_dnia p:contains("19")').closest('.dzien').nextAll('.N').eq(1).next('.dzien').find('.g_czyt').before('<p class="oznaczenie">' + JezChrKW + '</p>');
    // Dodaj klasę przed nakazanym
    $('.dzien.nakaz').prev('.dzien').addClass('d_przed_nakaz');
    
// Linie
    // Nad trescią - lewa i prawa
    $('body section article.wzor_B div.tresc').prepend('<img class="linia" src="../images/linie/poziom_gorna.svg" alt="Linia pozioma 75mm" />');
    // Pod dniem - lewa i prawa - chyba że to linia między sobotą a niedzielą (za sobotą)
    $('body section article.wzor_B div.dzien:not(.S, .pierwszy)').after('<img class="linia" src="../images/linie/poziom_gorna.svg" alt="Linia pozioma 75mm" />');
    // Jeśli niedziala po lewej
    $('body section article.lewa.wzor_B div.dzien.S').after('<img class="linia" src="../images/linie/poziom_lewa_75.svg" alt="Linia pozioma 75mm" />');
    $('body section article.lewa.wzor_B div.dzien.pierwszy').after('<img class="linia" src="../images/linie/poziom_lewa_75.svg" alt="Linia pozioma 75mm" />');
    // Jeśli nakazane po lewej
    $('body section article.lewa.wzor_B div.dzien.d_przed_nakaz').next('.linia').remove();
    $('body section article.lewa.wzor_B div.dzien.d_przed_nakaz').after('<img class="linia" src="../images/linie/poziom_lewa_75.svg" alt="Linia pozioma 75mm" />');
    // Jeśli niedziala po prawej
    $('body section article.prawa.wzor_B div.dzien.S').after('<img class="linia" src="../images/linie/poziom_prawa_75.svg" alt="Linia pozioma 75mm" />');
    $('body section article.prawa.wzor_B div.dzien.pierwszy').after('<img class="linia" src="../images/linie/poziom_prawa_75.svg" alt="Linia pozioma 75mm" />');
    // Jeśli nakazane po prawej
    $('body section article.prawa.wzor_B div.dzien.d_przed_nakaz').next('.linia').remove();
    $('body section article.prawa.wzor_B div.dzien.d_przed_nakaz').after('<img class="linia" src="../images/linie/poziom_prawa_75.svg" alt="Linia pozioma 75mm" />');
    // Jeśli sobota jest ostatnim dniem miesiąca
    $('body section article.wzor_B div.dzien.S').each(function () {
        if ($(this).is(':last-of-type')) {
            $(this).next('.linia').remove();
            $(this).after('<img class="linia" src="../images/linie/poziom_gorna.svg" alt="Linia pozioma 75mm" />');
        }        
    });
    // Skrócony
        // Poziome
        $('article.wzor_A > div.tresc.skrocony > div > div.marzec').after('<img class="linia pozioma" src="../images/linie/skrocony_poziom.svg" alt="Linia pozioma 78mm" />');
        $('article.wzor_A > div.tresc.skrocony > div > div.czerwiec').after('<img class="linia pozioma" src="../images/linie/skrocony_poziom.svg" alt="Linia pozioma 78mm" />');
        $('article.wzor_A > div.tresc.skrocony > div > div.wrzesien').after('<img class="linia pozioma" src="../images/linie/skrocony_poziom.svg" alt="Linia pozioma 78mm" />');
        // Pion
        $('article.wzor_A > div.tresc.skrocony .zawartosc').append('<img class="linia pionowa" src="../images/linie/skrocony_pion.svg" alt="Linia pionowa" />');
        
////Ustalanie wysokości    
    // Policz wysokość - porównaj lewą i prawą i ustaw wysokość dnia na większą z tych dwóch
    $('article .tresc .dzien').each(function () {
        var h_lewe = $(this).children('.dane').outerHeight();
        var h_prawe = $(this).find('.dane .prawe').outerHeight();
        var h_dnia = Math.max(h_lewe, h_prawe);
//        console.log('Wysokość dnia: ' + h_dnia);
        $(this).find('.dane').css('height', h_dnia + 'px');
        $(this).find('.prawe').css('height', h_dnia + 'px');
        $(this).find('.kolor').addClass('pozycja');
    });
    // Policz wysokość - 140mm minus suma wysokości dni
    $('article .tresc:not(.wielkanoc)').each(function () {
        var wysokosc = 0;
        var ilosc = $(this).children('.dzien').length;
        var wysok = 0;
        $(this).children('.dzien').each(function () {
            wysokosc = wysokosc + $(this).outerHeight();
//            console.log('Wysokość to: ' + wysokosc);
//            console.log('Ilość to: ' + ilosc);
        });
        wysok = ((525 - wysokosc) / ilosc) / 2;
        $(this).children('.dzien:not(.pierwszy)').find('.niedziela').css('bottom', wysok * -1 + 'px');
        $(this).children('.dzien:not(.pierwszy)').css('padding', wysok + 'px 0');       
//        console.log('Obliczenia: ' + wysok);              
    });
    // Policz wysokość dla Wielkanocy
    $('article .tresc.wielkanoc').each(function () {
        var wysokosc = 0;
        var ilosc = $(this).children('.dzien').length;
        var wysok = 0;
        $(this).children('.dzien').each(function () {
            wysokosc = wysokosc + $(this).outerHeight();          
        });
        wysok = ((290 - wysokosc) / ilosc) / 2;
        $(this).children('.dzien:not(.pierwszy)').find('.niedziela').css('bottom', wysok * -1 + 'px');
        $(this).children('.dzien:not(.pierwszy)').css('padding', wysok + 'px 0');               
    });
    $('article .tresc.wielkanoc').after('<img class="wielkanoc" src="../images/easter.jpg" alt="Wielkanoc" title="Wielkanoc">');

});