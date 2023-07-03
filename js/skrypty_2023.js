$(document).ready(function(){
    
    var narodzeniePanskie = 29; // który dzień roku
    var pierSty = 36; // który dzień roku
    var chrzestPanski = 43; // który dzień roku
    var popielec = 88; // który dzień roku
    var wielkanoc = 134; // który dzień roku
    
    // Długość roku. Przestpnym, czy nie? 365 lub 366
    var dniRoku = 365;
    
// Pierwsze dni roku kościelnego - listopad / grudzień poprzedniego roku kalendarzowego
    $('.d_roku_1').find('.nr_dnia p').html('27');
    $('.d_roku_2').find('.nr_dnia p').html('28');
    $('.d_roku_3').find('.nr_dnia p').html('29');
    $('.d_roku_4').find('.nr_dnia p').html('30');
    // św. Andrzeja ap (ś)
    $('.d_roku_4').find('.sigla').html('Rz 10,9-18; Ps 19; Mt 4,18-22');
    $('.d_roku_4').find('.sigla').before('<p class="swieto">św Andrzeja ap (ś)</p>');
    $('.d_roku_4').find('.g_czyt').html('gcz: 1 Kor 1,18-2,5');
    
//// Święta stałe
    // I Niedziela Adwentu
    $('.d_roku_1').find('.dane .sigla').before('<p class="opis">początek nowego roku liturgicznego - czytania: cykl A, I<br>rozpoczyna się okres Adwentu</p>');
    $('.d_roku_1').find('.dane .oznaczenie').after('<p class="tom">I tom brew.</p>');
    // Narodzenie Pańskie
    $('.d_roku_' + (narodzeniePanskie-1)).find('.dane .sigla').html('<span>msza rano:</span> 2 Sm 7,1-5.8b-12.14a.16; Ps 89; Łk 1,67-79');
    $('.d_roku_' + (narodzeniePanskie-1)).find('.dane .sigla').after('<p class="opis">kończy się okres Adwentu<br>Wigilia</p>');
    $('.d_roku_' + (narodzeniePanskie-1)).find('.dane .g_czyt').prepend('<br>');
    $('.d_roku_' + (narodzeniePanskie-1)).find('.dane .niedziela').html('Narodzenie Pańskie (u)');
    $('.d_roku_' + narodzeniePanskie).find('.dane .sigla').before('<p class="opis">rozpoczyna się okres Narodzenia Pańskiego<br><br></p>');
    $('.d_roku_' + narodzeniePanskie).find('.dane .sigla').html('<span>msza wigilii:</span> Iz 62,1-5; Ps 89; Dz 13,16-17.22-25; Mt 1,1-25<br><span>msza w nocy:</span> Iz 9,1-3.5-6; Ps 96; Tt 2,11-14; Łk 2,1-14<br><span>msza o świcie:</span> Iz 62,11-12; Ps 97; Tt 3,4-7; Łk 2,15-20<br><span>msza w dzień:</span> Iz 52,7-10; Ps 98; Hbr 1,1-6; J 1,1-18');
    $('.d_roku_' + (narodzeniePanskie+1)).addClass('sw_Inne');
    // I Niedziela Adwentu #2
    $('.d_roku_371').find('.dane .sigla').after('<p class="opis">kończy się okres zwykły</p>');
    $('.d_roku_372').find('.dane .sigla').before('<p class="opis">początek nowego roku liturgicznego - czytania: cykl B, II<br>rozpoczyna się okres Adwentu</p>');
    $('.d_roku_372').find('.dane .oznaczenie').after('<p class="tom">I tom brew.</p>');
    // Narodzenie Pańskie #2
    $('.d_roku_' + (narodzeniePanskie+dniRoku-1)).find('.dane .sigla').after('<p class="opis">kończy się okres Adwentu<br>Wigilia</p><p>&nbsp;</p>');
    $('.d_roku_' + (narodzeniePanskie+dniRoku-1)).find('.dane').append('<p class="niedziela" style="background-color: transparent;">Narodzenie Pańskie (u)</p>');
    $('.d_roku_' + (narodzeniePanskie+dniRoku)).addClass('nakaz');
    $('.d_roku_' + (narodzeniePanskie+dniRoku)).find('.dane .sigla').before('<p class="opis">rozpoczyna się okres Narodzenia Pańskiego<br><br></p>');
    $('.d_roku_' + (narodzeniePanskie+dniRoku)).find('.dane .sigla').html('<span>msza wigilii:</span> Iz 62,1-5; Ps 89; Dz 13,16-17.22-25; Mt 1,1-25<br><span>msza w nocy:</span> Iz 9,1-3.5-6; Ps 96; Tt 2,11-14; Łk 2,1-14<br><span>msza o świcie:</span> Iz 62,11-12; Ps 97; Tt 3,4-7; Łk 2,15-20<br><span>msza w dzień:</span> Iz 52,7-10; Ps 98; Hbr 1,1-6; J 1,1-18');
    $('.d_roku_' + (narodzeniePanskie+dniRoku+1)).addClass('sw_Inne');
    // Świętej Rodziny: Jezusa, Maryi i Józefa (ś) - w niedzielę po Bożym Narodzeniu lub 30 stycznia, jeśli pierwszy dzień świąt przypada w niedzielę.
    $('.d_roku_34').find('.dane .sigla').before('<p class="swieto">Świętej Rodziny: Jezusa, Maryi i Józefa (ś)</p>');
    $('.d_roku_34').find('.dane .sigla').html('Syr 3,2-6.12-14 lub Kol 3,12-21; Ps 128; Mt 2,13-15.19-23');
    $('.d_roku_34').find('.dane .prawe .g_czyt').html('gcz: Ef 5,21-6,4');
    // 1 stycznia
    $('.d_roku_' + pierSty + ' .obchod').empty();
    $('.d_roku_' + pierSty).prev('.dzien.pierwszy').find('.dane p.niedziela').html('Świętej Bożej Rodzicielki Maryi (u)');
    $('.d_roku_' + pierSty).find('.dane .sigla').html('Lb 6,22-27; Ps 67; Ga 4,4-7; Łk 2,16-21');
    $('.d_roku_' + pierSty).find('.dane .g_czyt').html('gcz: Hbr 2,9-17');
    // 6 stycznia - Objawienie Pańskie - Epifania (u)
    $('.d_roku_' + (pierSty + 5) + ' .swieto').remove();
    $('.d_roku_' + (pierSty + 5)).addClass('nakaz');
    $('.d_roku_' + (pierSty + 4) + ' .dane').append('<p class="odstep">&nbsp;</p><p class="niedziela">Objawienie Pańskie - Epifania (u)</p>');
    
//// Święta ruchome
    // Chrzest Pański (pierwsza niedziela po Objawieniu Pańskim)
    $('.d_roku_' + chrzestPanski).find('.dane').empty();
    $('.d_roku_' + (chrzestPanski-1)).find('.dane .niedziela').html('Chrzest Pański (ś)');
    $('.d_roku_' + chrzestPanski).find('.dane').html('<p class="sigla">Iz 42,1-4.6-7; Ps 29; Dz 10,34-38; Mt 3,13-17</p><p>&nbsp;</p><p class="opis">kończy się okres Narodzenia Pańskiego</p>');
    $('.d_roku_' + chrzestPanski).find('.dane').append('<div class="prawe"><p class="g_czyt">gcz: Iz 42,1-9;49,1-9</p><p class="kolor">b</p></div>');
    $('.d_roku_' + (chrzestPanski+1)).find('.sigla').before('<p class="opis">rozpoczyna się okres zwykły - czytania: cykl A, I</p>');
    $('.d_roku_' + (chrzestPanski+1)).find('.g_czyt').before('<p class="oznaczenie">1 OZ I</p><p class="tom">III tom brew.</p>');
    // Środa Popielcowa
    $('.d_roku_' + popielec).find('.dane').empty();
    $('.d_roku_' + popielec + ' .dane').html('<p class="opis">rozpoczyna się okres Wielkiego Postu</p><p class="swieto">Środa Popielcowa</p><p class="sigla">Jl 2,12-18; Ps 51; 2 Kor 5,20-6,2; Mt 6,1-6.16-18</p><div class="obchod"><p class="wspomnienie">*Katedry św Piotra ap (ś)</p></div><div class="prawe"><p class="tydzien_ps">IV</p><p class="tom">II tom brew.</p><p class="g_czyt">gcz: Iz 58,1-12</p><p class="kolor">f</p></div>');    
    // Wielkanoc
    // Wielki Poniedziałek
    $('.d_roku_' + (wielkanoc-6)).find('.dane .sigla').before('<p class="swieto">Wielki Poniedziałek</p>');
    $('.d_roku_' + (wielkanoc-5)).find('.dane .sigla').before('<p class="swieto">Wielki Wtorek</p>');
    $('.d_roku_' + (wielkanoc-4)).find('.dane .sigla').before('<p class="swieto">Wielka Środa</p>');
    // Wielki Czwartek
    $('.d_roku_' + (wielkanoc-3)).find('.dane .sigla').before('<p class="swieto">Wielki Czwartek</p>');
    $('.d_roku_' + (wielkanoc-3)).find('.dane .sigla').remove();
    $('.d_roku_' + (wielkanoc-3)).find('.dane .swieto').after('<p class="opis">w katedrze msza z poświęceniem krzyżma:</p><p class="sigla">Iz 61,1-3a.6a.8b-9; Ps 89; Ap 1,4b.5-8; Łk 4,16-21</p><p class="opis">kończy się okres Wielkiego Postu:</p><p class="opis triduum">rozpoczyna się Święte Triduum Paschalne</p><p class="opis">msza Wieczerzy Pańskiej:</p><p class="sigla">Wj 12,1-8.11-14; Ps 116B; 1 Kor 11,23-26; J 13,1-15</p>');
    // Wielki Piątek
    $('.d_roku_' + (wielkanoc-2)).find('.dane .sigla').before('<p class="swieto">Wielki Piątek</p>');
    // Wielka Sobota
    $('.d_roku_' + (wielkanoc-1)).find('.dane .sigla').before('<p class="swieto">Wielka Sobota</p>');
    $('.d_roku_' + (wielkanoc-1)).find('.dane .sigla').empty();
    // Wielkanoc
    $('.d_roku_' + wielkanoc).closest('article .tresc').addClass('wielkanoc');
    // Poniedziałek Wielkanocny
    $('.d_roku_' + (wielkanoc+1)).addClass('sw_Inne');
    $('.d_roku_' + (wielkanoc+1)).find('.dane .sigla').before('<p class="swieto">Poniedziałek Wielkanocny</p>');
    // Wniebowstąpienie Pańskie (u) - najbliższa niedziela w 40 dni po Wielkanocy
    $('.d_roku_' + (wielkanoc+41)).find('.niedziela').html('Wniebowstąpienie Pańskie (u)');
    $('.d_roku_' + (wielkanoc+42)).find('.dane .sigla').html('Dz 1,1-11; Ps 47; Ef 1,17-23; Mt 28,16-20');
    $('.d_roku_' + (wielkanoc+42)).find('.prawe .oznaczenie').html('7 W');
    $('.d_roku_' + (wielkanoc+42)).find('.prawe .g_czyt').html('gcz: Ef 4,1-24');
    $('.d_roku_' + (wielkanoc+42)).find('.prawe .oznaczenie').empty();
    $('.d_roku_' + (wielkanoc+43)).find('.prawe .g_czyt').before('<p class="oznaczenie">7 W III</p>');
    // Zesłanie Ducha Świętego - kolejna niedziela po Wniebowstąpieniu
    $('.d_roku_' + (wielkanoc+48)).find('.niedziela').html('Zesłanie Ducha Świętego - Pentekoste (u)');
    $('.d_roku_' + (wielkanoc+48)).find('.sigla').html('<span>msza rano:</span> Dz 28,16-20.30-31; Ps 11; J 21,20-25');
    $('.d_roku_' + (wielkanoc+49)).find('.sigla').html('<span>msza wigilii:</span> Rdz 11,1-9; Ps 33; Wj 19,3-8a.16-20b;@PS: Dn 3,52-56 <span>lub</span> Ps 19; Ez 37,1-14; Ps 107;@Jl 3,1-5; Ps 104; Rz 8,22-27; J 7,37-39<br><span>msza w dzień:</span> Dz 2,1-11; Ps 104; 1 Kor 12,3b-7.12-13;<br>sekwencja; J 20,19-23');
    $('.d_roku_' + (wielkanoc+49)).find('.sigla').after('<p class="opis">kończy się okres wielkanocny</p>');
    $('.d_roku_' + (wielkanoc+49)).find('.oznaczenie').empty();
    $('.d_roku_' + (wielkanoc+49)).find('.g_czyt').html('gcz: Rz 8,5-27');
    $('.d_roku_' + (wielkanoc+49)).find('.kolor').html('cz');
    // Jezusa Chrystusa Najwyższego i Wiecznego Kapłana (ś) - czwartek po Zesłaniu Ducha Świętego
    $('.d_roku_' + (wielkanoc+53)).find('.sigla').before('<p class="swieto">Jezusa Chrystusa Najwyższego i Wiecznego Kapłana (ś)</p>');
    $('.d_roku_' + (wielkanoc+53)).find('.sigla').html('Rdz 22,9-18 lub Hbr 10,4-10;@Ps 40; Mt 26,36-42');
    $('.d_roku_' + (wielkanoc+53)).find('.obchod .wspomnienie').prepend('*');
    $('.d_roku_' + (wielkanoc+53)).find('.prawe .g_czyt').html('<br>gcz: Hbr 4,14-16;5,1-10');
    $('.d_roku_' + (wielkanoc+53)).find('.prawe .kolor').html('b');
    // Najśw Maryi Panny Matki Kościoła (ś) - poniedziałek po Zesłaniu
    $('.d_roku_' + (wielkanoc+50)).find('.sigla').before('<p class="opis">ciąg dalszy okresu zwykłego - czytania: cykl A I</p>');
    $('.d_roku_' + (wielkanoc+50)).find('.sigla').before('<p class="swieto">Najśw Maryi Panny Matki Kościoła (ś)</p>');
    $('.d_roku_' + (wielkanoc+50)).find('.sigla').html('Rdz 3,9-15.20 <span>lub</span> Dz 1,12-14; Ps 87; J 19,25-34');
    $('.d_roku_' + (wielkanoc+50)).find('.obchod .wspomnienie').prepend('*');
    $('.d_roku_' + (wielkanoc+50)).find('.prawe').prepend('<p class="tom">III tom brew.</p>');
    $('.d_roku_' + (wielkanoc+50)).find('.prawe .g_czyt').html('gcz: Ga 3,22-4,7');
    // Najświętszej Trójcy (u) - niedziela po Zesłaniu Ducha Świętego
    $('.d_roku_' + (wielkanoc+55)).find('.niedziela').html('Najświętszej Trójcy (u)');
    $('.d_roku_' + (wielkanoc+56)).find('.sigla').html('Wj 34,4b-6.8-9; PS: Dn 3,52-56;@2 Kor 13,11-13; J 3,16-18');
    $('.d_roku_' + (wielkanoc+56)).find('.oznaczenie').empty('');
    $('.d_roku_' + (wielkanoc+57)).find('.g_czyt').before('<p class="oznaczenie">9 OZ I</p>');
    // Najświętszego Ciała i Krwi Chrystusa (u) - czwartek po pierwszej niedzieli po Zesłaniu
    $('.d_roku_' + (wielkanoc+59)).find('.dane').append('<p class="niedziela">Najświętszego Ciała i Krwi Chrystusa (u)</p>');
    $('.d_roku_' + (wielkanoc+60)).addClass('nakaz');
    $('.d_roku_' + (wielkanoc+60)).find('.dane .sigla').html('Pwt 8,2-3.14b-16a; Ps 147B; 1 Kor 10,16-17;@J 6,51-58');
    $('.d_roku_' + (wielkanoc+60)).find('.dane .obchod .wspomnienie').prepend('*');
    $('.d_roku_' + (wielkanoc+60)).find('.dane .prawe .g_czyt').html('gcz: Wj 24,1-11');
    $('.d_roku_' + (wielkanoc+60)).find('.dane .prawe .kolor').html('b');   
    // Najśw Serca Pana Jezusa (u) - piątek po drugiej niedzieli po Zesłaniu
    $('.d_roku_' + (wielkanoc+68)).find('.sigla').before('<p class="uroczystosc">Najśw Serca Pana Jezusa (u)</p>');
    $('.d_roku_' + (wielkanoc+68)).find('.sigla').html('Pwt 7,6-11; Ps 103; 1 J 4,7-16; Mt 11,25-30');
    $('.d_roku_' + (wielkanoc+68)).find('.g_czyt').html('gcz: Rz 8,28-39');
    // Niepokalanego Serca Najśw Maryi Panny (wo) - sobota po drugiej niedzieli po Zesłaniu
    $('.d_roku_' + (wielkanoc+69)).find('.obchod .wspomnienie').prepend('Niepokalanego Serca Najśw Maryi Panny (wo)<br>*');

    
//// Konflikty
    // św Józefa Oblubieńca Najśw Maryi Panny (u) - Przypadło w niedzielę więc przenosimy na poniedziałek
        $('.d_roku_112').find('.dane .niedziela').html('IV Niedziela Wielkiego Postu');
        $('.d_roku_113').find('.dane .g_czyt').html('gcz: Hbr 7,1-11');
        $('.d_roku_114').find('.dane .sigla').html('2 Sm 7,4-5a.12-14a.16; Ps 89; Rz 4,13.16-18.22;<br>Mt 1,16.18-21.24a lub Łk 2,41-51a');
        $('.d_roku_114').find('.dane .sigla').before('<p class="uroczystosc">św Józefa Oblubieńca Najśw Maryi Panny (u)</p>');
        $('.d_roku_114').find('.dane .prawe .g_czyt').html('gcz: Hbr 11,1-16');
    //św Wojciecha bp m - głównego patrona Polski (u) - Przypadło w niedzielę więc przenosimy na poniedziałek
        $('.d_roku_149').find('.dane .sigla').html('Dz 1,3-8; Ps 126; Flp 1,20c-30; J 12,24-26');
        $('.d_roku_149').find('.dane .sigla').before('<p class="uroczystosc">św Wojciecha bp m - głównego patrona Polski (u)</p>');
        $('.d_roku_149').find('.dane .wspomnienie').prepend('*');
        $('.d_roku_149').find('.dane .prawe .g_czyt').html('gcz: Dz 20,17-36');
    //Przemienienie Pańskie (ś)
        $('article div.dane p.niedziela:contains("Przemienienie Pańskie (ś)")').closest('.dzien').next('.dzien').find('.g_czyt').before('<p class="tom">IV tom brew.</p>');
        $('article div.dane p.niedziela:contains("Przemienienie Pańskie (ś)")').closest('.dzien').next('.dzien').next('.dzien').find('.g_czyt').before('<p class="oznaczenie">18 OZ II</p>');
    
    
//// Wspólne dla wszystkich lat
// 
// Oktawy 
    // Dodaj klasę oktawa do dni Bożego Narodzenia (obu) i od Wielkanocy
    for (var i = narodzeniePanskie; i <= (narodzeniePanskie + 7); i++) {
        $('.d_roku_'+ i).find('.nazwad').addClass('oktawa');
    }
    var narodzeniePanskie2 = narodzeniePanskie + dniRoku; // Drugie Boże Narodzenie
    for (var i = narodzeniePanskie2; i <= (narodzeniePanskie2 + 7); i++) {
        $('.d_roku_'+ i).find('.nazwad').addClass('oktawa');
    }
    for (var i = wielkanoc; i <= (wielkanoc + 7); i++) { // Wielkanoc
        $('.d_roku_'+ i).find('.nazwad').addClass('oktawa');
        // Znieś wspomnienia w oktawie Wielkanocy
        $('.d_roku_'+ i).find('.dane .obchod .wspomnienie').prepend('*');
    }
    $('.oktawa').each(function () {
        $(this).append('<img src="../images/oktawa.svg" alt="Oktawa" title="Oktawa">');
    });
// Wielki tydzień - pierwszeństwo
// Dodaj klasę wlkTydz do elementów od Niedzieli Palmowej do Wielkanocy
    for (var i = (wielkanoc-6); i <= (wielkanoc-1); i++) {
        $('.d_roku_'+ i).addClass('wlkTydz');
        $('.d_roku_'+ i).find('div.obchod p').prepend('*');
        $('.d_roku_'+ i).find('div.obchod p.swieto').addClass('zniesione');        
    }    

    
// Kolory - ustawienia ogólne ze względu na okres liturgiczny
    // Ustal I Niedzielę Adwentu
    var INA = $('article div.dane p.niedziela:contains("I Niedziela Adwentu")').closest('.dzien').attr('class');
    var INA1 = INA.substr(INA.indexOf("_") + 1);
    var INA2 = INA1.substr(INA1.indexOf("_") + 1);    
    // Dodaj klasę adwent do elementów od pierwszego dnia do Bożego Narodzenia - kolor FIOLETOWY
    for (var i = 1; i <= (narodzeniePanskie-1); i++) {
        $('.d_roku_'+ i).addClass('adwent');
        $('.adwent .dane .prawe p.kolor').text('f');
    }
    // i od drugiej I Niedzieli Adwentu
    for (var i = INA2; i <= (narodzeniePanskie2 - 1); i++) {
        $('.d_roku_'+ i).addClass('adwent');
        $('.adwent .dane .prawe p.kolor').text('f');
    }    
    // Dodaj klasę narodzenieP do elementów od Bożego Narodzenia do Chrztu Pańskiego - kolor BIAŁY
    for (var i = narodzeniePanskie; i <= chrzestPanski; i++) {
        $('.d_roku_'+ i).addClass('narodzenieP');
        $('.narodzenieP .dane .prawe p.kolor').text('b');
    }
    for (var i = narodzeniePanskie2; i <= 999; i++) {
        $('.d_roku_'+ i).addClass('narodzenieP');
        $('.narodzenieP .dane .prawe p.kolor').text('b');
    }
    // Dodaj klasę okrZwykly do elementów od Chrztu Pańskiego do Środy Popielcowej - kolor ZELONY
    for (var i = (chrzestPanski + 1); i <= (popielec - 1); i++) {
        $('.d_roku_'+ i).addClass('okrZwykly');
        $('.okrZwykly .dane .prawe p.kolor').text('z');
    }
    // i od Zesłania Ducha Świętego do I Niedzieli Adwentu
    for (var i = (wielkanoc + 50); i <= INA2; i++) {
        $('.d_roku_'+ i).addClass('okrZwykly');
        $('.okrZwykly .dane .prawe p.kolor').text('z');
    }
    // Dodaj klasę wlkPost do elementów od Środy popielcowej do Wielkanocy - kolor FIOLETOWY
    for (var i = popielec; i <= (wielkanoc-1); i++) {
        $('.d_roku_'+ i).addClass('wlkPost');
        $('.wlkPost .dane .prawe p.kolor').text('f');
        // W Wielkim Poście zamień wspomnienia obowiązkowe na dowolne
        if ( $('.d_roku_'+ i).find('.dane .obchod .wspomnienie').is(':contains("(wo)")') && (!$('.d_roku_'+ i).hasClass("wlkTydz")) && (!$('.d_roku_'+ i).hasClass("N")) ) {
            var wspomnienie = $('.d_roku_'+ i).find('.dane .obchod .wspomnienie').html();
            $('.d_roku_'+ i).find('.dane .obchod .wspomnienie').html(wspomnienie.replace('(wo)', '(wd)'));
        }        
    }
    // Dodaj klasę okrWielk do elementów od Wielkanocy do Zesłania Ducha Świętego - kolor BIAŁY
    for (var i = wielkanoc; i <= (wielkanoc + 48); i++) {
        $('.d_roku_'+ i).addClass('okrWielk');
        $('.okrWielk .dane .prawe p.kolor').text('b');
    }

});