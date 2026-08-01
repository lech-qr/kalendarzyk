<section id="czerwiec-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_06_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_06_nazwa_d]) . ' d_roku_' . $_06_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_06_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_06_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_06_nr_dnia_roku]) . '</p>';
                    if (!empty($czerwiec[$_06_nr_dnia])) {
                        echo '<div class="obchod">' . ($czerwiec[$_06_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_06_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">KK</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_06_nazwa_d++;
            $_06_nr_dnia++;
            $_06_nr_dnia_roku++;
            if ($_06_nr_dnia == $_06_przelam + 1) {
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