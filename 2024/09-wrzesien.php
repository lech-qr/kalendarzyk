<section id="wrzesień-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_09_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_09_nazwa_d]) . ' d_roku_' . $_09_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_09_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_09_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_09_nr_dnia_roku]) . '</p>';
                    if (!empty($wrzesien[$_09_nr_dnia])) {
                        echo '<div class="obchod">' . ($wrzesien[$_09_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_09_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">KK</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_09_nazwa_d++;
            $_09_nr_dnia++;
            $_09_nr_dnia_roku++;
            if ($_09_nr_dnia == $_09_przelam + 1) {
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