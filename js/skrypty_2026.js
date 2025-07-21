$(document).ready(function () {

    var cykl = 'A, II';

    // var kolor = "#866e4b" // złoty Panton 873 C
    var kolor = "#d60057" // Czerwony
    // var kolor = "#40ae49" // Zielony
    // var kolor = "#e71294" // Fioletowy

    var narodzeniePanskie = 26; // który dzień roku
    var chrzestPanski = 43; // który dzień roku
    var popielec = 81; // który dzień roku
    var wielkanoc = 127; // który dzień roku

    // Długość roku. Przestępny, czy nie? 365 lub 366
    var dniRoku = 365;

    var narodzeniePanskie2 = narodzeniePanskie + dniRoku; // Drugie Boże Narodzenie

    // Oznaczenia cyklu
    cykl1 = cykl.split(', ');
    cykl_N = cykl1[0];
    cykl_p = cykl1[1];

    if (cykl == 'A, I') {
        var cykl_plus_1 = 'B, II';
    } else if (cykl == 'B, II') {
        var cykl_plus_1 = 'C, I';
    } else if (cykl == 'C, I') {
        var cykl_plus_1 = 'A, II';
    } else if (cykl == 'A, II') {
        var cykl_plus_1 = 'B, I';
    } else if (cykl == 'B, I') {
        var cykl_plus_1 = 'C, II';
    } else if (cykl == 'C, II') {
        var cykl_plus_1 = 'A, I';
    }
    console.log('Cykl bieżący to ' + cykl + '. W przyszłym roku będzie ' + cykl_plus_1);

    $('body section#okladka-1 article .kolor').css('background-color', kolor);
    $('body section#okladka-2 article .kolor').css('background-color', kolor);

    // Pierwsze dni roku kościelnego - listopad / grudzień poprzedniego roku kalendarzowego
    $('.d_roku_1').find('.nr_dnia p').html('30');
    // $('.d_roku_2').find('.nr_dnia p').html('28');
    // $('.d_roku_3').find('.nr_dnia p').html('29');
    // $('.d_roku_4').find('.nr_dnia p').html('30');

    // Konflikty 2025
    // $('.d_roku_7').find('.dane .niedziela').remove();
    // $('.d_roku_7').find('.dane').append('<p class="niedziela">Niepokalane Poczęcie Najśw Maryi Panny (u)</p>');
    // $('.d_roku_7').find('.dane .niedziela').css('letter-spacing', '0.07em');
    // $('.d_roku_8').find('.dane .sigla').html('Rdz 3,9-15.20; Ps 98; Flp 1,4-6.8-11; Łk 1,26-38')
    // $('.d_roku_8').find('.dane .obchod .swieto.zniesione').remove();
    // $('.d_roku_8').find('.dane .prawe .g_czyt').html('Rz 5,12-21');
    // $('.d_roku_8').find('.dane .prawe .oznaczenie').remove();
    // $('.d_roku_9').find('.dane .prawe .g_czyt').before('<p class="oznaczenie">2 A II</p>');

    // Ofiarowanie Pańskie (ś) - zawsze 2 lutego
    // $('.d_roku_65').find('.dane p.niedziela').remove();
    // $('.d_roku_63').find('.dane').append('<p class="niedziela">Ofiarowanie Pańskie (ś)</p>');
    // $('.d_roku_64 .dane .sigla').text('Ml 3,1-4; Ps 24; Hbr 2,14-18; Łk 2,22-40');
    // $('.d_roku_64 .dane .obchod').remove();
    $('.d_roku_64').find('.dane .prawe .g_czyt').before('<p class="oznaczenie">4 OZ</p>');
    $('.d_roku_64').find('.dane .prawe .g_czyt').html('gcz: Wj 13,1-3a.11-16');
    $('.d_roku_65').find('.dane .prawe .g_czyt').before('<p class="oznaczenie">IV ???</p>');
    // św Wojciecha bp m - głównego patrona Polski (u) - jeśli wypada w oktawie, trzeba je przenieść
    // $('.d_roku_144 .dane .swieto').remove();
    // $('.d_roku_144 .dane .sigla').text('Dz 3,1-10; Ps 105; Łk 24,13-35');
    // $('.d_roku_144 .dane .obchod').append('<p class="swieto zniesione">*św Wojciecha bp m - głównego patrona Polski (u)</p>');
    // $('.d_roku_144 .dane .prawe .g_czyt').html('gcz: 1 P 2,11-25');
    // $('.d_roku_149 .dane').prepend('<p class="swieto">św Wojciecha bp m - głównego patrona Polski (u)</p>');
    // $('.d_roku_149 .dane .obchod .wspomnienie').prepend('*');
    // $('.d_roku_149 .dane .sigla').text('Dz 1,3-8; Ps 126; Flp 1,20c-30; J 12,24-26');
    // $('.d_roku_149 .dane .prawe .oznaczenie').remove();
    // $('.d_roku_149 .dane .prawe .g_czyt').html('gcz: Dz 20,17-36');
    // $('.d_roku_151 .dane .prawe').prepend('<p class="oznaczenie">II</p>');
    // św Marka ew (ś) - jeśli wypada w oktawie to przepada
    // $('.d_roku_146 .dane .swieto').remove();
    // $('.d_roku_146 .dane .obchod').append('<p class="swieto zniesione">*św Marka ew (ś)</p>');
    // $('.d_roku_146 .dane .sigla').text('Dz 4,1-12; Ps 118; J 21,1-14');
    // $('.d_roku_146 .dane .prawe .g_czyt').html('gcz: 1 P 3,18-4,11');

    // św ap Piotra i Pawła (u)
    // $('.d_roku_210').find('.dane .niedziela').html('Świętych Apostołów Piotra i Pawła (u)');
    // $('.d_roku_211').find('.dane .sigla').html('msza wigilii: Dz 3,1-10; Ps 19;@Ga 1,11-20; J 21,15-19@msza w dzień: Dz 12,1-11; Ps 34;@2 Tm 4,6-9.16-18; Mt 16,13-19');
    // $('.d_roku_211').find('.dane .prawe .g_czyt').html('Ga 1,15-2,10');
    // $('.d_roku_211').find('.dane .obchod .swieto.zniesione').remove();
    // $('.d_roku_211 .dane .prawe .oznaczenie').remove();
    // $('.d_roku_212 .dane .obchod .wspomnienie').css('letter-spacing', '-0.02em');
    // $('.d_roku_212 .dane .prawe').prepend('<p class="oznaczenie">13 OZ I</p>');

    // Podwyższenie Krzyża Świętego (ś)
    // $('.d_roku_287').find('.dane .niedziela').html('Podwyższenie Krzyża Świętego (ś)');
    // $('.d_roku_288').find('.dane .sigla').html('Lb 21,4b-9; Ps 78; Flp 2,6-11; J 3,13-17');
    // $('.d_roku_288').find('.dane .prawe .g_czyt').html('Ga 2,19-3,7.13-14;6,14-16');
    // $('.d_roku_288').find('.dane .obchod .swieto.zniesione').remove();
    // $('.d_roku_288 .dane .prawe .oznaczenie').remove();
    // $('.d_roku_289 .dane .prawe').prepend('<p class="oznaczenie">24 OZ IV</p>');

    // Wspomnienie Wszystkich Wiernych Zmarłych
    // $('.d_roku_336').find('.dane .niedziela').html('Wspomnienie Wszystkich Wiernych Zmarłychh');
    // $('.d_roku_336').find('.dane .niedziela').css('letter-spacing', '0.1em');
    // $('.d_roku_337').find('.dane .sigla').html('I msza: Hi 19,1.23-27a; Ps 27;<br>1 Kor 15,20-24a.25-28;<br>Łk 23,44-46.50.52-53;24,1-6a<br>II msza: Dn 12,1-3; Ps 42-43; Rz 6,3-9; J 11,32-45<br>III msza: Mdr 3,1-9; Ps 103; 2 Kor 4,14-5,1; J 14,1-6');
    // $('.d_roku_337').find('.dane .prawe .g_czyt').html('gcz: 1 Kor 15,12-34<br>lub 1 Kor 15,35-57<br>lub 2 Kor 4,16-5,10');
    // $('.d_roku_337').find('.dane .obchod .swieto.zniesione').remove();
    // $('.d_roku_337 .dane .prawe .oznaczenie').remove();
    $('.d_roku_339 .dane .prawe').prepend('<p class="oznaczenie">31 OZ III</p>');

    // $('.d_roku_336 .dane > p.niedziela').css('background-color', 'transparent');
    // $('.d_roku_372').find('.dane .sigla').html('Rdz 3,9-15.20; Ps 98; Flp 1,4-6.8-11; Łk 1,26-38');
    // $('.d_roku_372').find('.dane .obchod').remove();
    // $('.d_roku_372').find('.dane .prawe .oznaczenie').remove();
    // $('.d_roku_372').find('.dane .prawe .g_czyt').html('Rz 5,12-21');
    // $('.d_roku_372').find('.dane .prawe .kolor').html('b');
    // $('.d_roku_373').find('.dane .prawe').prepend('<p class="oznaczenie">2 A II</p>');

    // Święta stałe
    // I Niedziela Adwentu
    $('.d_roku_1').find('.dane .sigla').before('<p class="opis">początek nowego roku liturgicznego - czytania: cykl ' + cykl + '<br>rozpoczyna się okres Adwentu</p>');
    $('.d_roku_1').find('.dane .oznaczenie').after('<p class="tom">I tom brew.</p>');
    // Narodzenie Pańskie
    $('.d_roku_' + (narodzeniePanskie - 1)).find('.dane .sigla').prepend('<span>msza rano: </span>');
    $('.d_roku_' + (narodzeniePanskie - 1)).find('.dane .sigla').after('<p class="opis">kończy się okres Adwentu<br>Wigilia</p>');
    $('.d_roku_' + (narodzeniePanskie - 1)).find('.dane').append('<p class="odstep">&nbsp;</p><p class="niedziela">Narodzenie Pańskie (u)</p>');
    $('.d_roku_' + (narodzeniePanskie)).addClass('nakaz');
    $('.d_roku_' + narodzeniePanskie).find('.dane .sigla').before('<p class="opis">rozpoczyna się okres Narodzenia Pańskiego<br><br></p>');
    $('.d_roku_' + narodzeniePanskie).find('.dane .sigla').html('<span>msza wigilii:</span> Iz 62,1-5; Ps 89; Dz 13,16-17.22-25; Mt 1,1-25<br><span>msza w nocy:</span> Iz 9,1-3.5-6; Ps 96; Tt 2,11-14; Łk 2,1-14<br><span>msza o świcie:</span> Iz 62,11-12; Ps 97; Tt 3,4-7; Łk 2,15-20<br><span>msza w dzień:</span> Iz 52,7-10; Ps 98; Hbr 1,1-6; J 1,1-18');
    $('.d_roku_' + narodzeniePanskie).find('.dane .prawe .g_czyt').html('gcz: Iz 11,1-10')
    $('.d_roku_' + (narodzeniePanskie + 1)).addClass('sw_Inne');
    // Narodzenie Pańskie #2
    $('.d_roku_' + (narodzeniePanskie + dniRoku - 1)).find('.dane .sigla').prepend('<span>msza rano: </span>');
    $('.d_roku_' + (narodzeniePanskie + dniRoku - 1)).find('.dane .sigla').after('<p class="opis">kończy się okres Adwentu<br>Wigilia</p><p>&nbsp;</p>');
    $('.d_roku_' + (narodzeniePanskie + dniRoku - 1)).find('.dane').append('<p class="niedziela">Narodzenie Pańskie (u)</p>');
    $('.d_roku_' + (narodzeniePanskie + dniRoku)).addClass('nakaz');
    $('.d_roku_' + (narodzeniePanskie + dniRoku)).find('.dane .sigla').before('<p class="opis">rozpoczyna się okres Narodzenia Pańskiego<br><br></p>');
    $('.d_roku_' + (narodzeniePanskie + dniRoku)).find('.dane .sigla').html('<span>msza wigilii:</span> Iz 62,1-5; Ps 89; Dz 13,16-17.22-25; Mt 1,1-25<br><span>msza w nocy:</span> Iz 9,1-3.5-6; Ps 96; Tt 2,11-14; Łk 2,1-14<br><span>msza o świcie:</span> Iz 62,11-12; Ps 97; Tt 3,4-7; Łk 2,15-20<br><span>msza w dzień:</span> Iz 52,7-10; Ps 98; Hbr 1,1-6; J 1,1-18');
    $('.d_roku_' + (narodzeniePanskie + dniRoku + 1)).addClass('sw_Inne');
    // Świętej Rodziny: Jezusa, Maryi i Józefa (ś) - w pierwszą niedzielę po Bożym Narodzeniu lub 30 stycznia, jeśli pierwszy dzień świąt przypada w niedzielę.
    $('.d_roku_' + narodzeniePanskie).nextAll('.dzien.N').find('.dane .prawe .g_czyt').html('gcz: Ef 5,21-6,4');
    $('.d_roku_' + narodzeniePanskie2).nextAll('.dzien.N').find('.dane .prawe .g_czyt').html('gcz: Ef 5,21-6,4');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + narodzeniePanskie).nextAll('.dzien.N').find('.dane .sigla').html('Syr 3,2-6.12-14 lub Kol 3,12-21; Ps 128;<br> Mt 2,13-15.19-23');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + narodzeniePanskie).nextAll('.dzien.N').find('.dane .sigla').html('Rdz 15,1-6;21,1-3; Ps 105;<br>Hbr 11,8.11-12.17-19; Łk 2,22-40');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + narodzeniePanskie).nextAll('.dzien.N').find('.dane .sigla').html('1 Sm 1,20-22.24-28; Ps 84;@1 J 3,1-2.21-24; Łk 2,41-52');
    }
    // Niedziela po Bożym Narodzeniu, ale z kolejnego roku - stąd przesunięcie o jeden rok
    if (cykl[0] === "A") {
        // Rok A - czytanie z B
        $('.d_roku_' + narodzeniePanskie2).nextAll('.dzien.N').find('.dane .sigla').html('Rdz 15,1-6;21,1-3; Ps 105;<br>Hbr 11,8.11-12.17-19; Łk 2,22-40');
    } else if (cykl[0] === "B") {
        // Rok B - czytanie z C
        $('.d_roku_' + narodzeniePanskie2).nextAll('.dzien.N').find('.dane .sigla').html('1 Sm 1,20-22.24-28; Ps 84;@1 J 3,1-2.21-24; Łk 2,41-52');
    } else if (cykl[0] === "C") {
        // Rok C - wycztanie z A
        $('.d_roku_' + narodzeniePanskie2).nextAll('.dzien.N').find('.dane .sigla').html('Syr 3,2-6.12-14; Ps 128; Kol 3,12-21;<br> Mt 2,13-15.19-23');
    }
    // 1 stycznia
    $('.d_roku_' + (narodzeniePanskie + 6)).find('.niedziela').html('Świętej Bożej Rodzicielki Maryi (u)');
    // $('.d_roku_' + (narodzeniePanskie + 8) + ' .obchod').empty();
    $('.d_roku_' + (narodzeniePanskie + 7)).prev('.dzien.pierwszy').find('.dane p.niedziela').html('Świętej Bożej Rodzicielki Maryi (u)');
    $('.d_roku_' + (narodzeniePanskie + 7)).find('.dane .sigla').html('Lb 6,22-27; Ps 67; Ga 4,4-7; Łk 2,16-21');
    $('.d_roku_' + (narodzeniePanskie + 7)).find('.dane .g_czyt').html('gcz: Hbr 2,9-17');
    // 6 stycznia - Objawienie Pańskie - Epifania (u)
    $('.d_roku_' + (narodzeniePanskie + 12) + ' .swieto').remove();
    $('.d_roku_' + (narodzeniePanskie + 12)).addClass('nakaz');
    $('.d_roku_' + (narodzeniePanskie + 11) + ' .dane').append('<p class="odstep">&nbsp;</p><p class="niedziela">Objawienie Pańskie - Epifania (u)</p>');

    // Święta ruchome
    // Chrzest Pański (pierwsza niedziela po Objawieniu Pańskim)
    $('.d_roku_' + (chrzestPanski - 1)).find('.dane .niedziela').html('Chrzest Pański (ś)');
    // $('.d_roku_' + (chrzestPanski - 1)).find('.dane .niedziela').css('background-color', 'transparent'); // Potrzebne gdy Objawienie Pańsie wypada w sobotę
    $('.d_roku_' + chrzestPanski).find('.dane .sigla').empty();
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + chrzestPanski).find('.dane').prepend('<p class="sigla">Iz 42,1-4.6-7; Ps 29; Dz 10,34-38; Mt 3,13-17</p>');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + chrzestPanski).find('.dane').prepend('<p class="sigla">Iz 55,1-11; PS: Iz 12,2-6; 1 J 5,1-9; Mk 1,7-11</p>');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + chrzestPanski).find('.dane').prepend('<p class="sigla">Iz 40,1-5.9-11; Ps 104; Tt 2,11-14;3,4-7;<br>Łk 3,15-16.21-22</p>');
    }
    $('.d_roku_' + chrzestPanski).find('.dane').append('<p class="opis">kończy się okres Narodzenia Pańskiego</p>');
    $('.d_roku_' + chrzestPanski).find('.dane .prawe').html('<p class="g_czyt">gcz: Iz 42,1-9;49,1-9</p><p class="kolor">b</p>');
    $('.d_roku_' + (chrzestPanski + 1)).find('.sigla').before('<p class="opis">rozpoczyna się okres zwykły - czytania: cykl ' + cykl + '</p>');
    $('.d_roku_' + (chrzestPanski + 1)).find('.g_czyt').before('<p class="oznaczenie">1 OZ I</p><p class="tom">III tom brew.</p>');
    // Środa Popielcowa
    $('.d_roku_' + popielec).find('.dane .swieto').removeClass('swieto').addClass('wspomnienie');
    $('.d_roku_' + popielec).find('.dane .wspomnienie').prepend('*');
    $('.d_roku_' + popielec).find('.dane .sigla').empty();
    $('.d_roku_' + popielec + ' .dane').prepend('<p class="opis">rozpoczyna się okres Wielkiego Postu</p><p class="swieto">Środa Popielcowa</p><p class="sigla">Jl 2,12-18; Ps 51; 2 Kor 5,20-6,2; Mt 6,1-6.16-18</p></div>');
    $('.d_roku_' + popielec).find('.dane .prawe').empty();
    $('.d_roku_' + popielec + ' .dane .prawe').prepend('<p class="tydzien_ps">IV</p><p class="tom">II tom brew.</p><p class="g_czyt">gcz: Iz 58,1-12</p><p class="kolor">f</p>');
    // Wielkanoc
    // Niedziela Palmowa
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + (wielkanoc - 7)).find('.dane .sigla').html('<span>procesja z palmami: </span>Mk 11,1-10 <span>lub </span>J 12,12-16<br><span>msza:</span> Iz 50,4-7; Ps 22; Flp 2,6-11;<br>Mk 14,1-15,47');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + (wielkanoc - 7)).find('.dane .sigla').html('<span>procesja z palmami: </span>Mk 11,1-10 <span>lub </span>J 12,12-16<br><span>msza:</span> Iz 50,4-7; Ps 22; Flp 2,6-11;<br>Mk 14,1-15,47');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + (wielkanoc - 7)).find('.dane .sigla').html('<span>procesja z palmami: </span>Łk 19,28-40<br><span>msza:</span> Iz 50,4-7; Ps 22; Flp 2,6-11;<br>Łk 22,14-23,56');
    }
    // Wielki Poniedziałek
    $('.d_roku_' + (wielkanoc - 6)).find('.dane .swieto').removeClass('swieto').addClass('wspomnienie');
    $('.d_roku_' + (wielkanoc - 6)).find('.dane .wspomnienie').prepend('*');
    $('.d_roku_' + (wielkanoc - 6)).find('.dane .sigla').remove();
    $('.d_roku_' + (wielkanoc - 6)).find('.dane').prepend('<p class="swieto">Wielki Poniedziałek</p><p class="sigla">Iz 42,1-7; Ps 27; J 12,1-11</p>');
    // $('.d_roku_' + (wielkanoc - 6)).find('.dane .prawe .g_czyt').html('gcz: Jr 26,1-15');
    $('.d_roku_' + (wielkanoc - 5)).find('.dane .sigla').before('<p class="swieto">Wielki Wtorek</p>');
    $('.d_roku_' + (wielkanoc - 4)).find('.dane .sigla').before('<p class="swieto">Wielka Środa</p>');
    // Wielki Czwartek
    $('.d_roku_' + (wielkanoc - 3)).find('.dane .sigla').before('<p class="swieto">Wielki Czwartek</p>');
    $('.d_roku_' + (wielkanoc - 3)).find('.dane .sigla').remove();
    $('.d_roku_' + (wielkanoc - 3)).find('.dane .swieto').after('<p class="opis">w katedrze msza z poświęceniem krzyżma:</p><p class="sigla">Iz 61,1-3a.6a.8b-9; Ps 89; Ap 1,4b.5-8; Łk 4,16-21</p><p class="opis">kończy się okres Wielkiego Postu:</p><p class="opis triduum">rozpoczyna się Święte Triduum Paschalne</p><p class="opis">msza Wieczerzy Pańskiej:</p><p class="sigla">Wj 12,1-8.11-14; Ps 116B; 1 Kor 11,23-26; J 13,1-15</p>');
    // Wielki Piątek
    $('.d_roku_' + (wielkanoc - 2)).find('.dane .sigla').before('<p class="swieto">Wielki Piątek</p>');
    // Wielka Sobota
    $('.d_roku_' + (wielkanoc - 1)).find('.dane .sigla').before('<p class="swieto">Wielka Sobota<br>&nbsp;</p>');
    $('.d_roku_' + (wielkanoc - 1)).find('.dane .sigla').empty();
    // Wielkanoc
    // Wstawienie ikony na tej samej karcie co Wielkanoc
    // W 2026 ikona musiała być na następnej stronie
    // $('.d_roku_' + wielkanoc).closest('article .tresc').addClass('wielkanoc');
    // więc
    $('.d_roku_' + wielkanoc).closest('.tresc').parent('article').next('article').find('.tresc').addClass('wielkanoc');
    $('.d_roku_' + wielkanoc).find('.dane .sigla').before('<p class="opis">rozpoczyna się okres wielkanocny<br><br>Wigilia Paschalna w Wielką Noc:</p>');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + wielkanoc).find('.dane .sigla').html('Rdz 1,1-2,2; Ps 104 <span>lub</span> Ps 33;<br>Rdz 22,1-18; Ps 16;<br>Wj 14,15-15,1a; PS: Wj 15,1b-6.17-18;<br>Iz 54,4a.5-14; Ps 30;<br>Iz 55,1-11; PS: Iz 12,2-6;<br>Ba 3,9-15.32-4,4; Ps 19;<br>Ez 36,16-17a.18-28; Ps 42-43<br><span>lub gdy będzie chrzest:</span> PS: Iz 12,2-6 <span>lub</span> Ps 51;<br>Rz 6,3-11; Ps 118; Mt 28,1-10<br><span>msza w dzień:</span><br>Dz 10,34a.37-43; Ps 118; Kol 3,1-4<br><span>lub</span> 1 Kor 5,6b-8; sekwencja; J 20,1-9<br><br><span>kończy się Święte Triduum Paschalne</span>');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + wielkanoc).find('.dane .sigla').html('Rdz 1,1-2,2; Ps 104 <span>lub</span> Ps 33;<br>Rdz 22,1-18; Ps 16;<br>Wj 14,15-15,1a; PS: Wj 15,1b-6.17-18;<br>Iz 54,4a.5-14; Ps 30;<br>Iz 55,1-11; PS: Iz 12,2-6;<br>Ba 3,9-15.32-4,4; Ps 19;<br>Ez 36,16-17a.18-28; Ps 42-43<br><span>lub gdy będzie chrzest:</span> PS: Iz 12,2-6 <span>lub</span> Ps 51;<br>Rz 6,3-11; Ps 118; Mk 16,1-7<br><span>msza w dzień:</span><br>Dz 10,34a.37-43; Ps 118; Kol 3,1-4<br><span>lub</span> 1 Kor 5,6b-8; sekwencja; J 20,1-9<br><br><span>kończy się Święte Triduum Paschalne</span>');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + wielkanoc).find('.dane .sigla').html('Rdz 1,1-2,2; Ps 104 <span>lub</span> Ps 33;<br>Rdz 22,1-18; Ps 16;<br>Wj 14,15-15,1a; PS: Wj 15,1b-6.17-18;<br>Iz 54,4a.5-14; Ps 30;<br>Iz 55,1-11; PS: Iz 12,2-6;<br>Ba 3,9-15.32-4,4; Ps 19;<br>Ez 36,16-17a.18-28; Ps 42-43<br><span>lub gdy będzie chrzest:</span> PS: Iz 12,2-6 <span>lub</span> Ps 51;<br>Rz 6,3-11; Ps 118; Łk 24,1-12<br><span>msza w dzień:</span><br>Dz 10,34a.37-43; Ps 118; Kol 3,1-4<br><span>lub</span> 1 Kor 5,6b-8; sekwencja; J 20,1-9<br><br><span>kończy się Święte Triduum Paschalne</span>');
    }
    // Poniedziałek Wielkanocny
    $('.d_roku_' + (wielkanoc + 1)).addClass('sw_Inne');
    $('.d_roku_' + (wielkanoc + 1)).find('.dane .sigla').before('<p class="swieto">Poniedziałek Wielkanocny</p>');
    // Wniebowstąpienie Pańskie (u) - najbliższa niedziela w 40 dni po Wielkanocy
    $('.d_roku_' + (wielkanoc + 41)).find('.niedziela').html('Wniebowstąpienie Pańskie (u)');
    // W 2025 Wniebowstąpienie Pańskie wypadło w niedzielę 1 czerwca stąd poniższy zapis
    $('#czerwiec-2025 .lewa .dzien.pierwszy').find('.niedziela').html('Wniebowstąpienie Pańskie(u)');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + (wielkanoc + 42)).find('.dane .sigla').html('Dz 1,1-11; Ps 47; Ef 1,17-23; Mt 28,16-20');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + (wielkanoc + 42)).find('.dane .sigla').html('Dz 1,1-11; Ps 47; Ef 4,1-13; Mk 16,15-20');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + (wielkanoc + 42)).find('.dane .sigla').html('Dz 1,1-11; Ps 47; Hbr 9,24-28;10,19-23; Łk 24,46-53');
    }
    $('.d_roku_' + (wielkanoc + 42)).find('.prawe .oznaczenie').html('7 W');
    $('.d_roku_' + (wielkanoc + 42)).find('.prawe .g_czyt').html('gcz: Ef 4,1-24');
    $('.d_roku_' + (wielkanoc + 42)).find('.prawe .oznaczenie').empty();
    $('.d_roku_' + (wielkanoc + 43)).find('.prawe .g_czyt').before('<p class="oznaczenie">7 W III</p>');
    // Zesłanie Ducha Świętego - kolejna niedziela po Wniebowstąpieniu
    $('.d_roku_' + (wielkanoc + 48)).find('.niedziela').html('Zesłanie Ducha Świętego - Pentekoste (u)');
    $('.d_roku_' + (wielkanoc + 48)).find('.sigla').html('<span>msza rano:</span> Dz 28,16-20.30-31; Ps 11; J 21,20-25');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + (wielkanoc + 49)).find('.sigla').html('<span>msza wigilii:</span> Rdz 11,1-9; Ps 33; Wj 19,3-8a.16-20b;@PS: Dn 3,52-56 <span>lub</span> Ps 19; Ez 37,1-14; Ps 107;@Jl 3,1-5; Ps 104; Rz 8,22-27; J 7,37-39<br><span>msza w dzień:</span> Dz 2,1-11; Ps 104; 1 Kor 12,3b-7.12-13;<br>sekwencja; J 20,19-23');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + (wielkanoc + 49)).find('.sigla').html('<span>msza wigilii:</span> Rdz 11,1-9; Ps 33; Wj 19,3-8a.16-20b;@PS: Dn 3,52-56 <span>lub</span> Ps 19; Ez 37,1-14; Ps 107;@Jl 3,1-5; Ps 104; Rz 8,22-27; J 7,37-39<br><span>msza w dzień:</span> Dz 2,1-11; Ps 104; Ga 5,16-25;<br>sekwencja; J 15,26-27;16,12-15');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + (wielkanoc + 49)).find('.sigla').html('<span>msza wigilii:</span> Rdz 11,1-9; Ps 33; Wj 19,3-8a.16-20b;@PS: Dn 3,52-56 <span>lub</span> Ps 19; Ez 37,1-14; Ps 107;@Jl 3,1-5; Ps 104; Rz 8,22-27; J 7,37-39<br><span>msza w dzień:</span> Dz 2,1-11; Ps 104; Rz 8,8-17;<br>sekwencja; J 14,15-16.23b-26');
    }
    $('.d_roku_' + (wielkanoc + 49)).find('.sigla').after('<p class="opis">kończy się okres wielkanocny</p>');
    $('.d_roku_' + (wielkanoc + 49)).find('.oznaczenie').empty();
    $('.d_roku_' + (wielkanoc + 49)).find('.g_czyt').html('gcz: Rz 8,5-27');
    $('.d_roku_' + (wielkanoc + 49)).find('.kolor').html('cz');
    // Najśw Maryi Panny Matki Kościoła (ś) - poniedziałek po Zesłaniu
    $('.d_roku_' + (wielkanoc + 50)).find('.sigla').before('<p class="opis">ciąg dalszy okresu zwykłego - czytania: cykl ' + cykl + '</p>');
    $('.d_roku_' + (wielkanoc + 50)).find('.sigla').before('<p class="swieto">Najśw Maryi Panny Matki Kościoła (ś)</p>');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + (wielkanoc + 50)).find('.sigla').html('Rdz 3,9-15.20 <span>lub</span> Dz 1,12-14; Ps 87; J 2,1-11 <span>lub</span> J 19,25-27 <span>lub</span> Łk 1,26-38');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + (wielkanoc + 50)).find('.sigla').html('Rdz 3,9-15.20 <span>lub</span> Dz 1,12-14; Ps 87; J 19,25-34');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + (wielkanoc + 50)).find('.sigla').html('Rdz 3,9-15.20 <span>lub</span> Dz 1,12-14; Ps 87; J 19,25-34');
    }
    $('.d_roku_' + (wielkanoc + 50)).find('.obchod .wspomnienie').prepend('*');
    $('.d_roku_' + (wielkanoc + 50)).find('.prawe').prepend('<p class="tom">III tom brew.</p>');
    $('.d_roku_' + (wielkanoc + 50)).find('.prawe .g_czyt').html('gcz: Ga 3,22-4,7');
    // Jezusa Chrystusa Najwyższego i Wiecznego Kapłana (ś) - czwartek po Zesłaniu Ducha Świętego
    $('.d_roku_' + (wielkanoc + 53)).find('.sigla').before('<p class="swieto">Jezusa Chrystusa Najwyższego i Wiecznego Kapłana (ś)</p>');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + (wielkanoc + 53)).find('.sigla').html('Rdz 22,9-18 lub Hbr 10,4-10;@Ps 40; Mt 26,36-42');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + (wielkanoc + 53)).find('.sigla').html('Jr 31,31-34 lub Hbr 10,11-18;@Ps 110; Mk 14,22-25');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + (wielkanoc + 53)).find('.sigla').html('Iz 6,1-4.8 lub Hbr 2,10-18;@Ps 23; J 17,1-2.9.14-26');
    }
    $('.d_roku_' + (wielkanoc + 53)).find('.obchod .wspomnienie').prepend('*');
    $('.d_roku_' + (wielkanoc + 53)).find('.prawe .g_czyt').html('<br>gcz: Hbr 4,14-16;5,1-10');
    $('.d_roku_' + (wielkanoc + 53)).find('.prawe .kolor').html('b');
    // Najświętszej Trójcy (u) - niedziela po Zesłaniu Ducha Świętego
    $('.d_roku_' + (wielkanoc + 55)).find('.niedziela').html('Najświętszej Trójcy (u)');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + (wielkanoc + 56)).find('.sigla').html('Wj 34,4b-6.8-9; PS: Dn 3,52-56;@2 Kor 13,11-13; J 3,16-18');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + (wielkanoc + 56)).find('.sigla').html('Pwt 4,32-34.39-40; Ps 33;@Rz 8,14-17; Mt 28,16-20');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + (wielkanoc + 56)).find('.sigla').html('Prz 8,22-31; Ps 8; Rz 5,1-5; J 16,12-15');
    }
    $('.d_roku_' + (wielkanoc + 56)).find('.oznaczenie').empty('');
    $('.d_roku_' + (wielkanoc + 56)).find('.dane .prawe .g_czyt').html('gcz: 1 Kor 2,1-16');
    $('.d_roku_' + (wielkanoc + 57)).find('.g_czyt').before('<p class="oznaczenie">9 OZ I</p>');
    // Najświętszego Ciała i Krwi Chrystusa (u) - czwartek po pierwszej niedzieli po Zesłaniu
    $('.d_roku_' + (wielkanoc + 59)).find('.dane').append('<p class="niedziela">Najświętszego Ciała i Krwi Chrystusa (u)</p>');
    $('.d_roku_' + (wielkanoc + 60)).addClass('nakaz');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + (wielkanoc + 60)).find('.dane .sigla').html('Pwt 8,2-3.14b-16a; Ps 147B; 1 Kor 10,16-17;@J 6,51-58');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + (wielkanoc + 60)).find('.dane .sigla').html('Wj 24,3-8; Ps 116B; Hbr 9,11-15;@Mk 14,12-16.22-26');
    }
    else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + (wielkanoc + 60)).find('.dane .sigla').html('Rdz 14,18-20; Ps 110; 1 Kor 11,23-26; Łk 9,11b-17');
    }
    $('.d_roku_' + (wielkanoc + 60)).find('.dane .obchod .wspomnienie').prepend('*');
    $('.d_roku_' + (wielkanoc + 60)).find('.dane .prawe .g_czyt').html('gcz: Wj 24,1-11');
    $('.d_roku_' + (wielkanoc + 60)).find('.dane .prawe .kolor').html('b');
    // Najśw Serca Pana Jezusa (u) - piątek po drugiej niedzieli po Zesłaniu
    $('.d_roku_' + (wielkanoc + 68)).find('.sigla').before('<p class="uroczystosc">Najśw Serca Pana Jezusa (u)</p>');
    $('.d_roku_' + (wielkanoc + 68)).find('.wspomnienie').prepend('*');
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + (wielkanoc + 68)).find('.sigla').html('Pwt 7,6-11; Ps 103; 1 J 4,7-16; Mt 11,25-30');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + (wielkanoc + 68)).find('.sigla').html('Oz 11,1.3-4.8c-9; PS: Iz 12,2-6;@Ef 3,8-12.14-19; J 19,31-37');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + (wielkanoc + 68)).find('.sigla').html('Ez 34,11-16; Ps 23; Rz 5,5b-11; Łk 15,3-7');
    }
    $('.d_roku_' + (wielkanoc + 68)).find('.g_czyt').html('gcz: Rz 8,28-39');
    // Niepokalanego Serca Najśw Maryi Panny (wo) - sobota po drugiej niedzieli po Zesłaniu
    $('.d_roku_' + (wielkanoc + 69)).find('.obchod .wspomnienie').prepend('Niepokalanego Serca Najśw Maryi Panny (wo)<br>*');

    // Wspólne dla wszystkich lat
    if (dniRoku === 365) {
        // Nie przestępny
        // Przemienienie Pańskie (ś) - 6 sierpnia
        var przemienieniePanskie = 249;
    } else {
        // Przestępny
        // Przemienienie Pańskie (ś) - 6 sierpnia
        var przemienieniePanskie = 250;
    }
    // 
    if (cykl[0] === "A") {
        // Rok A
        $('.d_roku_' + przemienieniePanskie).find('.sigla').append('Mt 17,1-9');
    } else if (cykl[0] === "B") {
        // Rok B
        $('.d_roku_' + przemienieniePanskie).find('.sigla').append('Mk 9,2-10');
    } else if (cykl[0] === "C") {
        // Rok C
        $('.d_roku_' + przemienieniePanskie).find('.sigla').append('Łk 9,28b-36');
    }
    // Oktawy 
    // Dodaj klasę oktawa do dni Bożego Narodzenia (obu) i od Wielkanocy
    for (var i = narodzeniePanskie; i <= (narodzeniePanskie + 7); i++) {
        $('.d_roku_' + i).find('.nazwad').addClass('oktawa');
    }
    for (var i = narodzeniePanskie2; i <= (narodzeniePanskie2 + 7); i++) {
        $('.d_roku_' + i).find('.nazwad').addClass('oktawa');
    }
    for (var i = wielkanoc; i <= (wielkanoc + 7); i++) { // Wielkanoc
        $('.d_roku_' + i).find('.nazwad').addClass('oktawa');
        // Znieś wspomnienia w oktawie Wielkanocy
        if ($('.d_roku_' + i).hasClass('N')) {
            // Jeśli niedziala - nie znoś bo już jest zniesione
        } else {
            $('.d_roku_' + i).find('.dane .obchod .wspomnienie').prepend('*');
        }
    }
    $('.oktawa').each(function () {
        $(this).append('<img src="../images/oktawa.svg" alt="Oktawa" title="Oktawa">');
    });
    // Wielki tydzień - pierwszeństwo
    // Dodaj klasę wlkTydz do elementów od Niedzieli Palmowej do Wielkanocy
    for (var i = (wielkanoc - 6); i <= (wielkanoc - 1); i++) {
        $('.d_roku_' + i).addClass('wlkTydz');
        $('.d_roku_' + i).find('div.obchod p').prepend('*');
        $('.d_roku_' + i).find('div.obchod p.swieto').addClass('zniesione');
    }


    // Kolory - ustawienia ogólne ze względu na okres liturgiczny
    // Ustal I Niedzielę Adwentu
    var biezacyRok = $('#wkladka-1 > article.prawa.wzor_A > div.tresc > h2').html();
    console.log('Bieżący rok to: ' + biezacyRok);
    // I Niedziela Adwentu to będzie zawsze 365 lub 366 dzień roku
    var INA = dniRoku;
    // JezChrKW_S = Number(values[0]);
    console.log('Który dzień roku to Pierwsza Niedziela Adwentu: ' + INA);
    // I Niedziela Adwentu #2
    $('.d_roku_' + (INA - 1)).find('.dane .sigla').after('<p class="opis">kończy się okres zwykły</p>');
    $('.d_roku_' + INA).find('.dane .sigla').before('<p class="opis">początek nowego roku liturgicznego - czytania: cykl ' + (cykl_plus_1) + '<br>rozpoczyna się okres Adwentu</p>');
    $('.d_roku_' + INA).find('.dane .oznaczenie').after('<p class="tom">I tom brew.</p>');

    // Dodaj klasę adwent do elementów od pierwszego dnia do Bożego Narodzenia - kolor FIOLETOWY
    for (var i = 1; i <= (narodzeniePanskie - 1); i++) {
        $('.d_roku_' + i).addClass('adwent');
        $('.adwent .dane .prawe p.kolor').text('f');
    }
    // i od drugiej I Niedzieli Adwentu
    for (var i = INA; i <= (narodzeniePanskie2 - 1); i++) {
        $('.d_roku_' + i).addClass('adwent');
        $('.adwent .dane .prawe p.kolor').text('f');
    }
    // Dodaj klasę narodzenieP do elementów od Bożego Narodzenia do Chrztu Pańskiego - kolor BIAŁY
    for (var i = narodzeniePanskie; i <= chrzestPanski; i++) {
        $('.d_roku_' + i).addClass('narodzenieP');
        $('.narodzenieP .dane .prawe p.kolor').text('b');
    }
    for (var i = narodzeniePanskie2; i <= 999; i++) {
        $('.d_roku_' + i).addClass('narodzenieP');
        $('.narodzenieP .dane .prawe p.kolor').text('b');
    }
    // Dodaj klasę okrZwykly do elementów od Chrztu Pańskiego do Środy Popielcowej - kolor ZELONY
    for (var i = (chrzestPanski + 1); i <= (popielec - 1); i++) {
        $('.d_roku_' + i).addClass('okrZwykly');
        $('.okrZwykly .dane .prawe p.kolor').text('z');
    }
    // i od Zesłania Ducha Świętego do I Niedzieli Adwentu
    for (var i = (wielkanoc + 50); i <= (INA - 1); i++) {
        $('.d_roku_' + i).addClass('okrZwykly');
        $('.okrZwykly .dane .prawe p.kolor').text('z');
    }
    // Dodaj klasę wlkPost do elementów od Środy popielcowej do Wielkanocy - kolor FIOLETOWY
    for (var i = popielec; i <= (wielkanoc - 1); i++) {
        $('.d_roku_' + i).addClass('wlkPost');
        $('.wlkPost .dane .prawe p.kolor').text('f');
        // W Wielkim Poście zamień wspomnienia obowiązkowe na dowolne
        if ($('.d_roku_' + i).find('.dane .obchod .wspomnienie').is(':contains("(wo)")') && (!$('.d_roku_' + i).hasClass("wlkTydz")) && (!$('.d_roku_' + i).hasClass("N"))) {
            var wspomnienie = $('.d_roku_' + i).find('.dane .obchod .wspomnienie').html();
            $('.d_roku_' + i).find('.dane .obchod .wspomnienie').html(wspomnienie.replace('(wo)', '(wd)'));
        }
    }
    // Dodaj klasę okrWielk do elementów od Wielkanocy do Zesłania Ducha Świętego - kolor BIAŁY
    for (var i = wielkanoc; i <= (wielkanoc + 48); i++) {
        $('.d_roku_' + i).addClass('okrWielk');
        $('.okrWielk .dane .prawe p.kolor').text('b');
    }

});