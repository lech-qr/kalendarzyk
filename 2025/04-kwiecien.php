<section id="kwiecień-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_04_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_04_nazwa_d]) . ' d_roku_' . $_04_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_04_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_04_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_04_nr_dnia_roku]) . '</p>';
                    if (!empty($kwiecien[$_04_nr_dnia])) {
                        echo '<div class="obchod">' . ($kwiecien[$_04_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_04_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">KK</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_04_nazwa_d++;
            $_04_nr_dnia++;
            $_04_nr_dnia_roku++;
            if ($_04_nr_dnia == $_04_przelam + 1) {
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