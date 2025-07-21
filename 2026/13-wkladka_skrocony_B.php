<script>
$(document).ready(function(){
    // Pierwszy skrócony kalendarzyk - wstaw tabele
    $('.skrot_II h5').each(function() {
        $(this).after('<table><tr><th>N</th><th>P</th><th>W</th><th>Ś</th><th>Cz</th><th>Pt</th><th>S</th></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>');
    });

    // Obszar do edycji - START
    styczen_B       = 5;    
    luty_B_dlugosc  = 28;
    cykl_N_B        = 'B';
    cykl_p_B        = 'I';
    popielec_B      = ['10 luty', 'lut-10'];
    Wielkanoc_B     = ['28 marca', 'mar-28'];
    Wielkanoc_I_B   = ['29 marca', 'mar-29'];
    Wniebowst_B     = ['9 maja', 'maj-9'];
    ZDS_B           = ['16\xa0maja', 'maj-16'];
    BC_B            = ['27 maja', 'maj-27'];
    INA_B           = ['28 listopada', 'lis-28'];
     // Obszar do edycji - STOP
    
    // Styczen
    for (var styczen_B_pusty = 1; styczen_B_pusty <= styczen_B; styczen_B_pusty++) {
        $('.skrot_II .styczen table tr td:empty').addClass('pusty');
        $('.skrot_II .styczen table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .styczen table tr td.pusty').removeClass('pusty');
    for (var styczen_B = 1; styczen_B <= 31; styczen_B++) {
        $('.skrot_II .styczen table tr td:empty').addClass('numer');
        $('.skrot_II .styczen table tr td.numer').first().removeClass('numer').addClass('sty-' + styczen_B).text(styczen_B);
        $('.skrot_II .styczen table tr td.numer').html('&nbsp;');
    }
    // Luty
    var luty_B = $('.skrot_II .styczen table tr td.numer').length;
    if (luty_B === 12) {luty_B = 2;} else if (luty_B === 11) {luty_B = 3;} else if (luty_B === 10) {luty_B = 4;} else if (luty_B === 9) {luty_B = 5;} else if ( luty_B === 8 ) {luty_B = 6;} else if (luty_B === 7) {luty_B = 0;} else if (luty_B === 6) {luty_B = 1;} else if (luty_B === 5) {luty_B = 2;}
    for (var luty_B_pusty = 1; luty_B_pusty <= luty_B; luty_B_pusty++) {
        $('.skrot_II .luty table tr td:empty').addClass('pusty');
        $('.skrot_II .luty table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .luty table tr td.pusty').removeClass('pusty');
    for (var luty_B = 1; luty_B <= luty_B_dlugosc; luty_B++) {
        $('.skrot_II .luty table tr td:empty').addClass('numer');
        $('.skrot_II .luty table tr td.numer').first().removeClass('numer').addClass('lut-' + luty_B).text(luty_B);
        $('.skrot_II .luty table tr td.numer').html('&nbsp;');
    }   
    // Marzec
    var marzec_B = $('.skrot_II .luty table tr td.numer').length;
    if (marzec_B === 14) {marzec_B = 00;} else if (marzec_B === 13) {marzec_B = 1;} else if (marzec_B === 12) {marzec_B = 2;} else if (marzec_B === 11) {marzec_B = 3;} else if (marzec_B === 10) {marzec_B = 4;} else if (marzec_B === 9) {marzec_B = 5;} else if ( marzec_B === 8 ) {marzec_B = 6;} else if (marzec_B === 7) {marzec_B = 0;} else if (marzec_B === 6) {marzec_B = 1;} else if (marzec_B === 5) {marzec_B = 2;}
    for (var marzec_B_pusty = 1; marzec_B_pusty <= marzec_B; marzec_B_pusty++) {
        $('.skrot_II .marzec table tr td:empty').addClass('pusty');
        $('.skrot_II .marzec table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .marzec table tr td.pusty').removeClass('pusty');
    for (var marzec_B = 1; marzec_B <= 31; marzec_B++) {
        $('.skrot_II .marzec table tr td:empty').addClass('numer');
        $('.skrot_II .marzec table tr td.numer').first().removeClass('numer').addClass('mar-' + marzec_B).text(marzec_B);
        $('.skrot_II .marzec table tr td.numer').html('&nbsp;');
    }
    // Kwiecien
    var kwiecien_B = $('.skrot_II .marzec table tr td.numer').length;
    if (kwiecien_B === 12) {kwiecien_B = 2;} else if (kwiecien_B === 11) {kwiecien_B = 3;} else if (kwiecien_B === 10) {kwiecien_B = 4;} else if (kwiecien_B === 9) {kwiecien_B = 5;} else if ( kwiecien_B === 8 ) {kwiecien_B = 6;} else if (kwiecien_B === 7) {kwiecien_B = 0;} else if (kwiecien_B === 6) {kwiecien_B = 1;} else if (kwiecien_B === 5) {kwiecien_B = 2;}
    for (var kwiecien_B_pusty = 1; kwiecien_B_pusty <= kwiecien_B; kwiecien_B_pusty++) {
        $('.skrot_II .kwiecien table tr td:empty').addClass('pusty');
        $('.skrot_II .kwiecien table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .kwiecien table tr td.pusty').removeClass('pusty');
    for (var kwiecien_B = 1; kwiecien_B <= 30; kwiecien_B++) {
        $('.skrot_II .kwiecien table tr td:empty').addClass('numer');
        $('.skrot_II .kwiecien table tr td.numer').first().removeClass('numer').addClass('kwi-' + kwiecien_B).text(kwiecien_B);
        $('.skrot_II .kwiecien table tr td.numer').html('&nbsp;');
    }
    // Maj
    var maj_B = $('.skrot_II .kwiecien table tr td.numer').length;
    if (maj_B === 12) {maj_B = 2;} else if (maj_B === 11) {maj_B = 3;} else if (maj_B === 10) {maj_B = 4;} else if (maj_B === 9) {maj_B = 5;} else if ( maj_B === 8 ) {maj_B = 6;} else if (maj_B === 7) {maj_B = 0;} else if (maj_B === 6) {maj_B = 1;} else if (maj_B === 5) {maj_B = 2;}
    for (var maj_B_pusty = 1; maj_B_pusty <= maj_B; maj_B_pusty++) {
        $('.skrot_II .maj table tr td:empty').addClass('pusty');
        $('.skrot_II .maj table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .maj table tr td.pusty').removeClass('pusty');
    for (var maj_B = 1; maj_B <= 31; maj_B++) {
        $('.skrot_II .maj table tr td:empty').addClass('numer');
        $('.skrot_II .maj table tr td.numer').first().removeClass('numer').addClass('maj-' + maj_B).text(maj_B);
        $('.skrot_II .maj table tr td.numer').html('&nbsp;');
    }
    // Czerwiec
    var czerwiec_B = $('.skrot_II .maj table tr td.numer').length;
    if (czerwiec_B === 12) {czerwiec_B = 2;} else if (czerwiec_B === 11) {czerwiec_B = 3;} else if (czerwiec_B === 10) {czerwiec_B = 4;} else if (czerwiec_B === 9) {czerwiec_B = 5;} else if ( czerwiec_B === 8 ) {czerwiec_B = 6;} else if (czerwiec_B === 7) {czerwiec_B = 0;} else if (czerwiec_B === 6) {czerwiec_B = 1;} else if (czerwiec_B === 5) {czerwiec_B = 2;}
    for (var czerwiec_B_pusty = 1; czerwiec_B_pusty <= czerwiec_B; czerwiec_B_pusty++) {
        $('.skrot_II .czerwiec table tr td:empty').addClass('pusty');
        $('.skrot_II .czerwiec table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .czerwiec table tr td.pusty').removeClass('pusty');
    for (var czerwiec_B = 1; czerwiec_B <= 30; czerwiec_B++) {
        $('.skrot_II .czerwiec table tr td:empty').addClass('numer');
        $('.skrot_II .czerwiec table tr td.numer').first().removeClass('numer').addClass('cze-' + czerwiec_B).text(czerwiec_B);
        $('.skrot_II .czerwiec table tr td.numer').html('&nbsp;');
    }    
    // Lipiec
    var lipiec_B = $('.skrot_II .czerwiec table tr td.numer').length;
    if (lipiec_B === 12) {lipiec_B = 2;} else if (lipiec_B === 11) {lipiec_B = 3;} else if (lipiec_B === 10) {lipiec_B = 4;} else if (lipiec_B === 9) {lipiec_B = 5;} else if ( lipiec_B === 8 ) {lipiec_B = 6;} else if (lipiec_B === 7) {lipiec_B = 0;} else if (lipiec_B === 6) {lipiec_B = 1;} else if (lipiec_B === 5) {lipiec_B = 2;}
    for (var lipiec_B_pusty = 1; lipiec_B_pusty <= lipiec_B; lipiec_B_pusty++) {
        $('.skrot_II .lipiec table tr td:empty').addClass('pusty');
        $('.skrot_II .lipiec table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .lipiec table tr td.pusty').removeClass('pusty');
    for (var lipiec_B = 1; lipiec_B <= 31; lipiec_B++) {
        $('.skrot_II .lipiec table tr td:empty').addClass('numer');
        $('.skrot_II .lipiec table tr td.numer').first().removeClass('numer').addClass('lip-' + lipiec_B).text(lipiec_B);
        $('.skrot_II .lipiec table tr td.numer').html('&nbsp;');
    }    
    // Sierpień
    var sierpien_B = $('.skrot_II .lipiec table tr td.numer').length;
    if (sierpien_B === 12) {sierpien_B = 2;} else if (sierpien_B === 11) {sierpien_B = 3;} else if (sierpien_B === 10) {sierpien_B = 4;} else if (sierpien_B === 9) {sierpien_B = 5;} else if ( sierpien_B === 8 ) {sierpien_B = 6;} else if (sierpien_B === 7) {sierpien_B = 0;} else if (sierpien_B === 6) {sierpien_B = 1;} else if (sierpien_B === 5) {sierpien_B = 2;}
    for (var sierpien_B_pusty = 1; sierpien_B_pusty <= sierpien_B; sierpien_B_pusty++) {
        $('.skrot_II .sierpien table tr td:empty').addClass('pusty');
        $('.skrot_II .sierpien table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .sierpien table tr td.pusty').removeClass('pusty');
    for (var sierpien_B = 1; sierpien_B <= 31; sierpien_B++) {
        $('.skrot_II .sierpien table tr td:empty').addClass('numer');
        $('.skrot_II .sierpien table tr td.numer').first().removeClass('numer').addClass('sie-' + sierpien_B).text(sierpien_B);
        $('.skrot_II .sierpien table tr td.numer').html('&nbsp;');
    } 
    // Wrzesień
    var wrzesien_B = $('.skrot_II .sierpien table tr td.numer').length;
    if (wrzesien_B === 12) {wrzesien_B = 2;} else if (wrzesien_B === 11) {wrzesien_B = 3;} else if (wrzesien_B === 10) {wrzesien_B = 4;} else if (wrzesien_B === 9) {wrzesien_B = 5;} else if ( wrzesien_B === 8 ) {wrzesien_B = 6;} else if (wrzesien_B === 7) {wrzesien_B = 0;} else if (wrzesien_B === 6) {wrzesien_B = 1;} else if (wrzesien_B === 5) {wrzesien_B = 2;}
    for (var wrzesien_B_pusty = 1; wrzesien_B_pusty <= wrzesien_B; wrzesien_B_pusty++) {
        $('.skrot_II .wrzesien table tr td:empty').addClass('pusty');
        $('.skrot_II .wrzesien table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .wrzesien table tr td.pusty').removeClass('pusty');
    for (var wrzesien_B = 1; wrzesien_B <= 30; wrzesien_B++) {
        $('.skrot_II .wrzesien table tr td:empty').addClass('numer');
        $('.skrot_II .wrzesien table tr td.numer').first().removeClass('numer').addClass('wrz-' + wrzesien_B).text(wrzesien_B);
        $('.skrot_II .wrzesien table tr td.numer').html('&nbsp;');
    } 
    // Październik
    var pazdziernik_B = $('.skrot_II .wrzesien table tr td.numer').length;
    if (pazdziernik_B === 12) {pazdziernik_B = 2;} else if (pazdziernik_B === 11) {pazdziernik_B = 3;} else if (pazdziernik_B === 10) {pazdziernik_B = 4;} else if (pazdziernik_B === 9) {pazdziernik_B = 5;} else if ( pazdziernik_B === 8 ) {pazdziernik_B = 6;} else if (pazdziernik_B === 7) {pazdziernik_B = 0;} else if (pazdziernik_B === 6) {pazdziernik_B = 1;} else if (pazdziernik_B === 5) {pazdziernik_B = 2;}
    for (var pazdziernik_B_pusty = 1; pazdziernik_B_pusty <= pazdziernik_B; pazdziernik_B_pusty++) {
        $('.skrot_II .pazdziernik table tr td:empty').addClass('pusty');
        $('.skrot_II .pazdziernik table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .pazdziernik table tr td.pusty').removeClass('pusty');
    for (var pazdziernik_B = 1; pazdziernik_B <= 31; pazdziernik_B++) {
        $('.skrot_II .pazdziernik table tr td:empty').addClass('numer');
        $('.skrot_II .pazdziernik table tr td.numer').first().removeClass('numer').addClass('paz-' + pazdziernik_B).text(pazdziernik_B);
        $('.skrot_II .pazdziernik table tr td.numer').html('&nbsp;');
    } 
    // Listopad
    var listopad_B = $('.skrot_II .pazdziernik table tr td.numer').length;
    if (listopad_B === 11) {listopad_B = 3;} else if (listopad_B === 10) {listopad_B = 4;} else if (listopad_B === 9) {listopad_B = 5;} else if ( listopad_B === 8 ) {listopad_B = 6;} else if (listopad_B === 7) {listopad_B = 0;} else if (listopad_B === 6) {listopad_B = 1;} else if (listopad_B === 5) {listopad_B = 2;}
    if (listopad_B === 12) {listopad_B = 2;} else for (var listopad_B_pusty = 1; listopad_B_pusty <= listopad_B; listopad_B_pusty++) {
        $('.skrot_II .listopad table tr td:empty').addClass('pusty');
        $('.skrot_II .listopad table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .listopad table tr td.pusty').removeClass('pusty');
    for (var listopad_B = 1; listopad_B <= 30; listopad_B++) {
        $('.skrot_II .listopad table tr td:empty').addClass('numer');
        $('.skrot_II .listopad table tr td.numer').first().removeClass('numer').addClass('lis-' + listopad_B).text(listopad_B);
        $('.skrot_II .listopad table tr td.numer').html('&nbsp;');
    } 
    // Grudzień
    var grudzien_B = $('.skrot_II .listopad table tr td.numer').length;
    if (grudzien_B === 12) {grudzien_B = 2;} else if (grudzien_B === 11) {grudzien_B = 3;} else if (grudzien_B === 10) {grudzien_B = 4;} else if (grudzien_B === 9) {grudzien_B = 5;} else if ( grudzien_B === 8 ) {grudzien_B = 6;} else if (grudzien_B === 7) {grudzien_B = 0;} else if (grudzien_B === 6) {grudzien_B = 1;} else if (grudzien_B === 5) {grudzien_B = 2;}
    for (var grudzien_B_pusty = 1; grudzien_B_pusty <= grudzien_B; grudzien_B_pusty++) {
        $('.skrot_II .grudzien table tr td:empty').addClass('pusty');
        $('.skrot_II .grudzien table tr td.pusty').first().removeClass('pusty').addClass('poczatek').html('&nbsp;');
    }
    $('.skrot_II .grudzien table tr td.pusty').removeClass('pusty');
    for (var grudzien_B = 1; grudzien_B <= 31; grudzien_B++) {
        $('.skrot_II .grudzien table tr td:empty').addClass('numer');
        $('.skrot_II .grudzien table tr td.numer').first().removeClass('numer').addClass('gru-' + grudzien_B).text(grudzien_B);
        $('.skrot_II .grudzien table tr td.numer').html('&nbsp;');
    }
    // Pokoloruj
    $('.skrot_II table tr td.' + Wielkanoc_I_B[1]).addClass('czerwony');
    $('.skrot_II table tr td.' + BC_B[1]).addClass('czerwony');
    // Uzupełnij
    $('#cykl_N_B').text(cykl_N_B);
    $('#cykl_p_B').text(cykl_p_B);
    $('#popielec_B').text(popielec_B[0]);
    $('#Wielkanoc_B').text(Wielkanoc_B[0]);
    $('#Wniebowst_B').text(Wniebowst_B[0]);
    $('#ZDS_B').text(ZDS_B[0]);
    $('#BC_B').text(BC_B[0]);
    $('#INA_B').text(INA_B[0]);
});
</script>
<section id="wkladka-3">   
    <article class="lewa wzor_A">
        <div class="tresc skrocony">
            <h4>Kalendarzyk skrócony <span><?php echo ($rok_kal + 1) ?></span></h4>
            <div class="zawartosc skrot_II">
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
                <h6>Cykl&nbsp;niedzielny&nbsp;czytań&nbsp;-&nbsp;<span id="cykl_N_B"></span>; cykl&nbsp;powszedni&nbsp;czytań&nbsp;-&nbsp;<span id="cykl_p_B"></span>; Popielec&nbsp;-&nbsp;<span id="popielec_B"></span>; Wielkanoc&nbsp;-&nbsp;<span id="Wielkanoc_B"></span>;<br>Wniebowstąpienie&nbsp;-&nbsp;<span id="Wniebowst_B"></span>;<br>Zesłanie&nbsp;Ducha&nbsp;Świętego&nbsp;-&nbsp;<span id="ZDS_B"></span>;&nbsp;Boże&nbsp;Ciało&nbsp;-&nbsp;<span id="BC_B"></span>;<br>1&nbsp;niedziela&nbsp;Adwentu&nbsp;-&nbsp;<span id="INA_B"></span></h6>
            </div>            
        </div>
    </article>
    <!-- Ukryty artykuł jest po to żeby poprawnie liczyła się parzysta i nieparzysta strona -->
    <article style="display: none;"></article>     
</section>