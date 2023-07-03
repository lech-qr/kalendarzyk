<section id="lipiec-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_07_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_07_nazwa_d]) . ' d_roku_' . $_07_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_07_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_07_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_07_nr_dnia_roku]) . '</p>';
                    if (!empty($lipiec[$_07_nr_dnia])) {
                        echo '<div class="obchod">' . ($lipiec[$_07_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_07_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">???</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_07_nazwa_d++;
            $_07_nr_dnia++;
            $_07_nr_dnia_roku++;
            if ($_07_nr_dnia == $_07_przelam + 1) {
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