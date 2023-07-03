<section id="styczeń-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_01_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_01_nazwa_d]) . ' d_roku_' . $_01_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_01_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_01_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_01_nr_dnia_roku]) . '</p>';
                    if (!empty($styczen[$_01_nr_dnia])) {
                        echo '<div class="obchod">' . ($styczen[$_01_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_01_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">???</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_01_nazwa_d++;
            $_01_nr_dnia++;
            $_01_nr_dnia_roku++;
            if ($_01_nr_dnia == $_01_przelam + 1) {
                echo '</div>'
                . '</article>'
                . '<article class="prawa wzor_B">'
                . '<div class="tresc">';
            }
            
        }
    ?>
        </div>
    </article>
</section>