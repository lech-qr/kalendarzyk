<script>
$(document).ready(function(){
    // Pierwszy skrócony kalendarzyk - wstaw tabele
    $('.skrot_I h5').each(function() {
        $(this).after('<table><tr><th>N</th><th>P</th><th>W</th><th>Ś</th><th>Cz</th><th>Pt</th><th>S</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>');
    });
    styczen_A       = 0; // Który dzień tygodnia to pierwszy stycznia
    luty_A_dlugosc  = 28;
    cykl_N_A        = 'A';
    cykl_p_A        = 'I';
    popielec_A      = ['22 lutego', 'lut-22'];
    Wielkanoc_A     = ['9 kwietnia', 'kwi-9'];
    Wielkanoc_I_A   = ['10 kwietnia', 'kwi-10'];
    Wniebowst_A     = ['21 maja', 'maj-21'];
    ZDS_A           = ['28 maja', 'maj-28'];
    BC_A            = ['8 czerwca', 'cze-8'];
    INA_A           = ['3 grudnia', 'gru-3'];
    
    // Styczen
    // Wstaw puste komórki przed pierwszym stycznia
    for (var styczen_A_pusty = 1; styczen_A_pusty <= styczen_A; styczen_A_pusty++) {
        $('.skrot_I .styczen table tr td:empty').addClass('pusty');
        $('.skrot_I .styczen table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .styczen table tr td.pusty').removeClass('pusty');
    for (var styczen_A = 1; styczen_A <= 31; styczen_A++) {
        $('.skrot_I .styczen table tr td:empty').addClass('numer');
        $('.skrot_I .styczen table tr td.numer').first().removeClass('numer').addClass('sty-' + styczen_A).text(styczen_A);
        $('.skrot_I .styczen table tr td.numer').html('&nbsp;');
    }
    // Luty
    var luty_A = $('.skrot_I .styczen table tr td.numer').length;
    if (luty_A === 12) {luty_A = 2;} else if (luty_A === 11) {luty_A = 3;} else if (luty_A === 10) {luty_A = 4;} else if (luty_A === 9) {luty_A = 5;} else if ( luty_A === 8 ) {luty_A = 6;} else if (luty_A === 7) {luty_A = 0;} else if (luty_A === 6) {luty_A = 1;} else if (luty_A === 5) {luty_A = 2;}
    for (var luty_A_pusty = 1; luty_A_pusty <= luty_A; luty_A_pusty++) {
        $('.skrot_I .luty table tr td:empty').addClass('pusty');
        $('.skrot_I .luty table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .luty table tr td.pusty').removeClass('pusty');
    for (var luty_A = 1; luty_A <= luty_A_dlugosc; luty_A++) {
        $('.skrot_I .luty table tr td:empty').addClass('numer');
        $('.skrot_I .luty table tr td.numer').first().removeClass('numer').addClass('lut-' + luty_A).text(luty_A);
        $('.skrot_I .luty table tr td.numer').html('&nbsp;');
    }   
    // Marzec
    var marzec_A = $('.skrot_I .luty table tr td.numer').length;
    if (marzec_A === 12) {marzec_A = 2;} else if (marzec_A === 11) {marzec_A = 3;} else if (marzec_A === 10) {marzec_A = 4;} else if (marzec_A === 9) {marzec_A = 5;} else if ( marzec_A === 8 ) {marzec_A = 6;} else if (marzec_A === 7) {marzec_A = 0;} else if (marzec_A === 6) {marzec_A = 1;} else if (marzec_A === 5) {marzec_A = 2;}
    for (var marzec_A_pusty = 1; marzec_A_pusty <= marzec_A; marzec_A_pusty++) {
        $('.skrot_I .marzec table tr td:empty').addClass('pusty');
        $('.skrot_I .marzec table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .marzec table tr td.pusty').removeClass('pusty');
    for (var marzec_A = 1; marzec_A <= 31; marzec_A++) {
        $('.skrot_I .marzec table tr td:empty').addClass('numer');
        $('.skrot_I .marzec table tr td.numer').first().removeClass('numer').addClass('mar-' + marzec_A).text(marzec_A);
        $('.skrot_I .marzec table tr td.numer').html('&nbsp;');
    }
    // Kwiecien
    var kwiecien_A = $('.skrot_I .marzec table tr td.numer').length;
    if (kwiecien_A === 12) {kwiecien_A = 2;} else if (kwiecien_A === 11) {kwiecien_A = 3;} else if (kwiecien_A === 10) {kwiecien_A = 4;} else if (kwiecien_A === 9) {kwiecien_A = 5;} else if ( kwiecien_A === 8 ) {kwiecien_A = 6;} else if (kwiecien_A === 7) {kwiecien_A = 0;} else if (kwiecien_A === 6) {kwiecien_A = 1;} else if (kwiecien_A === 5) {kwiecien_A = 2;}
    for (var kwiecien_A_pusty = 1; kwiecien_A_pusty <= kwiecien_A; kwiecien_A_pusty++) {
        $('.skrot_I .kwiecien table tr td:empty').addClass('pusty');
        $('.skrot_I .kwiecien table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .kwiecien table tr td.pusty').removeClass('pusty');
    for (var kwiecien_A = 1; kwiecien_A <= 30; kwiecien_A++) {
        $('.skrot_I .kwiecien table tr td:empty').addClass('numer');
        $('.skrot_I .kwiecien table tr td.numer').first().removeClass('numer').addClass('kwi-' + kwiecien_A).text(kwiecien_A);
        $('.skrot_I .kwiecien table tr td.numer').html('&nbsp;');
    }
    // Maj
    var maj_A = $('.skrot_I .kwiecien table tr td.numer').length;
    if (maj_A === 12) {maj_A = 2;} else if (maj_A === 11) {maj_A = 3;} else if (maj_A === 10) {maj_A = 4;} else if (maj_A === 9) {maj_A = 5;} else if ( maj_A === 8 ) {maj_A = 6;} else if (maj_A === 7) {maj_A = 0;} else if (maj_A === 6) {maj_A = 1;} else if (maj_A === 5) {maj_A = 2;}
    for (var maj_A_pusty = 1; maj_A_pusty <= maj_A; maj_A_pusty++) {
        $('.skrot_I .maj table tr td:empty').addClass('pusty');
        $('.skrot_I .maj table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .maj table tr td.pusty').removeClass('pusty');
    for (var maj_A = 1; maj_A <= 31; maj_A++) {
        $('.skrot_I .maj table tr td:empty').addClass('numer');
        $('.skrot_I .maj table tr td.numer').first().removeClass('numer').addClass('maj-' + maj_A).text(maj_A);
        $('.skrot_I .maj table tr td.numer').html('&nbsp;');
    }
    // Czerwiec
    var czerwiec_A = $('.skrot_I .maj table tr td.numer').length;
    if (czerwiec_A === 12) {czerwiec_A = 2;} else if (czerwiec_A === 11) {czerwiec_A = 3;} else if (czerwiec_A === 10) {czerwiec_A = 4;} else if (czerwiec_A === 9) {czerwiec_A = 5;} else if ( czerwiec_A === 8 ) {czerwiec_A = 6;} else if (czerwiec_A === 7) {czerwiec_A = 0;} else if (czerwiec_A === 6) {czerwiec_A = 1;} else if (czerwiec_A === 5) {czerwiec_A = 2;}
    for (var czerwiec_A_pusty = 1; czerwiec_A_pusty <= czerwiec_A; czerwiec_A_pusty++) {
        $('.skrot_I .czerwiec table tr td:empty').addClass('pusty');
        $('.skrot_I .czerwiec table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .czerwiec table tr td.pusty').removeClass('pusty');
    for (var czerwiec_A = 1; czerwiec_A <= 30; czerwiec_A++) {
        $('.skrot_I .czerwiec table tr td:empty').addClass('numer');
        $('.skrot_I .czerwiec table tr td.numer').first().removeClass('numer').addClass('cze-' + czerwiec_A).text(czerwiec_A);
        $('.skrot_I .czerwiec table tr td.numer').html('&nbsp;');
    }    
    // Lipiec
    var lipiec_A = $('.skrot_I .czerwiec table tr td.numer').length;
    if (lipiec_A === 11) {lipiec_A = 3;} else if (lipiec_A === 10) {lipiec_A = 4;} else if (lipiec_A === 9) {lipiec_A = 5;} else if ( lipiec_A === 8 ) {lipiec_A = 6;} else if (lipiec_A === 7) {lipiec_A = 0;} else if (lipiec_A === 6) {lipiec_A = 1;} else if (lipiec_A === 5) {lipiec_A = 2;}
    for (var lipiec_A_pusty = 1; lipiec_A_pusty <= lipiec_A; lipiec_A_pusty++) {
        $('.skrot_I .lipiec table tr td:empty').addClass('pusty');
        $('.skrot_I .lipiec table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .lipiec table tr td.pusty').removeClass('pusty');
    for (var lipiec_A = 1; lipiec_A <= 31; lipiec_A++) {
        $('.skrot_I .lipiec table tr td:empty').addClass('numer');
        $('.skrot_I .lipiec table tr td.numer').first().removeClass('numer').addClass('lip-' + lipiec_A).text(lipiec_A);
        $('.skrot_I .lipiec table tr td.numer').html('&nbsp;');
    }    
    // Sierpień
    var sierpien_A = $('.skrot_I .lipiec table tr td.numer').length;
    if (sierpien_A === 12) {sierpien_A = 2;} else if (sierpien_A === 11) {sierpien_A = 3;} else if (sierpien_A === 10) {sierpien_A = 4;} else if (sierpien_A === 9) {sierpien_A = 5;} else if ( sierpien_A === 8 ) {sierpien_A = 6;} else if (sierpien_A === 7) {sierpien_A = 0;} else if (sierpien_A === 6) {sierpien_A = 1;} else if (sierpien_A === 5) {sierpien_A = 2;}
    for (var sierpien_A_pusty = 1; sierpien_A_pusty <= sierpien_A; sierpien_A_pusty++) {
        $('.skrot_I .sierpien table tr td:empty').addClass('pusty');
        $('.skrot_I .sierpien table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .sierpien table tr td.pusty').removeClass('pusty');
    for (var sierpien_A = 1; sierpien_A <= 31; sierpien_A++) {
        $('.skrot_I .sierpien table tr td:empty').addClass('numer');
        $('.skrot_I .sierpien table tr td.numer').first().removeClass('numer').addClass('sie-' + sierpien_A).text(sierpien_A);
        $('.skrot_I .sierpien table tr td.numer').html('&nbsp;');
    } 
    // Wrzesień
    var wrzesien_A = $('.skrot_I .sierpien table tr td.numer').length;
    if (wrzesien_A === 12) {wrzesien_A = 2;} else if (wrzesien_A === 11) {wrzesien_A = 3;} else if (wrzesien_A === 10) {wrzesien_A = 4;} else if (wrzesien_A === 9) {wrzesien_A = 5;} else if ( wrzesien_A === 8 ) {wrzesien_A = 6;} else if (wrzesien_A === 7) {wrzesien_A = 0;} else if (wrzesien_A === 6) {wrzesien_A = 1;} else if (wrzesien_A === 5) {wrzesien_A = 2;}
    for (var wrzesien_A_pusty = 1; wrzesien_A_pusty <= wrzesien_A; wrzesien_A_pusty++) {
        $('.skrot_I .wrzesien table tr td:empty').addClass('pusty');
        $('.skrot_I .wrzesien table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .wrzesien table tr td.pusty').removeClass('pusty');
    for (var wrzesien_A = 1; wrzesien_A <= 30; wrzesien_A++) {
        $('.skrot_I .wrzesien table tr td:empty').addClass('numer');
        $('.skrot_I .wrzesien table tr td.numer').first().removeClass('numer').addClass('wrz-' + wrzesien_A).text(wrzesien_A);
        $('.skrot_I .wrzesien table tr td.numer').html('&nbsp;');
    } 
    // Październik
    var pazdziernik_A = $('.skrot_I .wrzesien table tr td.numer').length;
    if (pazdziernik_A === 12) {pazdziernik_A = 2;} else if (pazdziernik_A === 11) {pazdziernik_A = 3;} else if (pazdziernik_A === 10) {pazdziernik_A = 4;} else if (pazdziernik_A === 9) {pazdziernik_A = 5;} else if ( pazdziernik_A === 8 ) {pazdziernik_A = 6;} else if (pazdziernik_A === 7) {pazdziernik_A = 0;} else if (pazdziernik_A === 6) {pazdziernik_A = 1;} else if (pazdziernik_A === 5) {pazdziernik_A = 2;}
    for (var pazdziernik_A_pusty = 1; pazdziernik_A_pusty <= pazdziernik_A; pazdziernik_A_pusty++) {
        $('.skrot_I .pazdziernik table tr td:empty').addClass('pusty');
        $('.skrot_I .pazdziernik table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .pazdziernik table tr td.pusty').removeClass('pusty');
    for (var pazdziernik_A = 1; pazdziernik_A <= 31; pazdziernik_A++) {
        $('.skrot_I .pazdziernik table tr td:empty').addClass('numer');
        $('.skrot_I .pazdziernik table tr td.numer').first().removeClass('numer').addClass('paz-' + pazdziernik_A).text(pazdziernik_A);
        $('.skrot_I .pazdziernik table tr td.numer').html('&nbsp;');
    } 
    // Listopad
    var listopad_A = $('.skrot_I .pazdziernik table tr td.numer').length;
    if (listopad_A === 12) {listopad_A = 2;} else if (listopad_A === 11) {listopad_A = 3;} else if (listopad_A === 10) {listopad_A = 4;} else if (listopad_A === 9) {listopad_A = 5;} else if ( listopad_A === 8 ) {listopad_A = 6;} else if (listopad_A === 7) {listopad_A = 0;} else if (listopad_A === 6) {listopad_A = 1;} else if (listopad_A === 5) {listopad_A = 2;}
    for (var listopad_A_pusty = 1; listopad_A_pusty <= listopad_A; listopad_A_pusty++) {
        $('.skrot_I .listopad table tr td:empty').addClass('pusty');
        $('.skrot_I .listopad table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .listopad table tr td.pusty').removeClass('pusty');
    for (var listopad_A = 1; listopad_A <= 30; listopad_A++) {
        $('.skrot_I .listopad table tr td:empty').addClass('numer');
        $('.skrot_I .listopad table tr td.numer').first().removeClass('numer').addClass('lis-' + listopad_A).text(listopad_A);
        $('.skrot_I .listopad table tr td.numer').html('&nbsp;');
    } 
    // Grudzień
    var grudzien_A = $('.skrot_I .listopad table tr td.numer').length;
    if (grudzien_A === 12) {grudzien_A = 2;} else if (grudzien_A === 11) {grudzien_A = 3;} else if (grudzien_A === 10) {grudzien_A = 4;} else if (grudzien_A === 9) {grudzien_A = 5;} else if ( grudzien_A === 8 ) {grudzien_A = 6;} else if (grudzien_A === 7) {grudzien_A = 0;} else if (grudzien_A === 6) {grudzien_A = 1;} else if (grudzien_A === 5) {grudzien_A = 2;}
    for (var grudzien_A_pusty = 1; grudzien_A_pusty <= grudzien_A; grudzien_A_pusty++) {
        $('.skrot_I .grudzien table tr td:empty').addClass('pusty');
        $('.skrot_I .grudzien table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_I .grudzien table tr td.pusty').removeClass('pusty');
    for (var grudzien_A = 1; grudzien_A <= 31; grudzien_A++) {
        $('.skrot_I .grudzien table tr td:empty').addClass('numer');
        $('.skrot_I .grudzien table tr td.numer').first().removeClass('numer').addClass('gru-' + grudzien_A).text(grudzien_A);
        $('.skrot_I .grudzien table tr td.numer').html('&nbsp;');
    }
    // Pokoloruj
    $('.skrot_I table tr td.' + Wielkanoc_I_A[1]).addClass('czerwony');
    $('.skrot_I table tr td.' + BC_A[1]).addClass('czerwony');
    // Uzupełnij
    $('#cykl_N_A').text(cykl_N_A);
    $('#cykl_p_A').text(cykl_p_A);
    $('#popielec_A').text(popielec_A[0]);
    $('#Wielkanoc_A').text(Wielkanoc_A[0]);
    $('#Wniebowst_A').text(Wniebowst_A[0]);
    $('#ZDS_A').text(ZDS_A[0]);
    $('#BC_A').text(BC_A[0]);
    $('#INA_A').text(INA_A[0]);
});
</script>
    <article class="prawa wzor_A">
        <div class="tresc skrocony">
            <h4>Kalendarzyk skrócony <span><?php echo $rok_kal?></span></h4>
            <div class="zawartosc skrot_I">
                <div class="styczen">
                    <h5>Styczeń</h5>
                </div>
                <div class="luty">
                    <h5>Luty</h5>
                </div>              
                <div class="marzec">
                    <h5>Marzec</h5>
                </div>              
                <div class="kwiecien">
                    <h5>Kwiecień</h5>
                </div>              
                <div class="maj">
                    <h5>Maj</h5>
                </div>              
                <div class="czerwiec">
                    <h5>Czerwiec</h5>
                </div>              
                <div class="lipiec">
                    <h5>Lipiec</h5>
                </div>              
                <div class="sierpien">
                    <h5>Sierpień</h5>
                </div>              
                <div class="wrzesien">
                    <h5>Wrzesień</h5>
                </div>              
                <div class="pazdziernik">
                    <h5>Październik</h5>
                </div>              
                <div class="listopad">
                    <h5>Listopad</h5>
                </div>              
                <div class="grudzien">
                    <h5>Grudzień</h5>
                </div>
                <h6>Cykl&nbsp;niedzielny&nbsp;czytań&nbsp;-&nbsp;<span id="cykl_N_A"></span>; cykl&nbsp;powszedni&nbsp;czytań&nbsp;-&nbsp;<span id="cykl_p_A"></span>; Popielec&nbsp;-&nbsp;<span id="popielec_A"></span>; Wielkanoc&nbsp;-&nbsp;<span id="Wielkanoc_A"></span>; Wniebowstąpienie&nbsp;-&nbsp;<span id="Wniebowst_A"></span>; Zesłanie&nbsp;Ducha&nbsp;Świętego&nbsp;-&nbsp;<span id="ZDS_A"></span>; Boże&nbsp;Ciało&nbsp;-&nbsp;<span id="BC_A"></span>; 1&nbsp;niedziela&nbsp;Adwentu&nbsp;-&nbsp;<span id="INA_A"></span></h6>
            </div>            
        </div>
    </article>
</section>