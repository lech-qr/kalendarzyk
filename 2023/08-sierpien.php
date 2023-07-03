<section id="sierpień-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_08_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_08_nazwa_d]) . ' d_roku_' . $_08_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_08_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_08_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_08_nr_dnia_roku]) . '</p>';
                    if (!empty($sierpien[$_08_nr_dnia])) {
                        echo '<div class="obchod">' . ($sierpien[$_08_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_08_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">z</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_08_nazwa_d++;
            $_08_nr_dnia++;
            $_08_nr_dnia_roku++;
            if ($_08_nr_dnia == $_08_przelam + 1) {
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