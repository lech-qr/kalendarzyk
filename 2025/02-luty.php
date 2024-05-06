<section id="luty-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_02_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_02_nazwa_d]) . ' d_roku_' . $_02_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_02_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_02_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_02_nr_dnia_roku]) . '</p>';
                    if (!empty($luty[$_02_nr_dnia])) {
                        echo '<div class="obchod">' . ($luty[$_02_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_02_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">KK</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_02_nazwa_d++;
            $_02_nr_dnia++;
            $_02_nr_dnia_roku++;
            if ($_02_nr_dnia == $_02_przelam + 1) {
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