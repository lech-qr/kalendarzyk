<section id="listopad-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_11_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_11_nazwa_d]) . ' d_roku_' . $_11_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_11_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_11_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_11_nr_dnia_roku]) . '</p>';
                    if (!empty($listopad[$_11_nr_dnia])) {
                        echo '<div class="obchod">' . ($listopad[$_11_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_11_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">???</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_11_nazwa_d++;
            $_11_nr_dnia++;
            $_11_nr_dnia_roku++;
            if ($_11_nr_dnia == $_11_przelam + 1) {
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