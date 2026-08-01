<section id="grudzień-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_12_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_12_nazwa_d]) . ' d_roku_' . $_12_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_12_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_12_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_12_nr_dnia_roku]) . '</p>';
                    if (!empty($grudzien[$_12_nr_dnia])) {
                        echo '<div class="obchod">' . ($grudzien[$_12_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_12_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">KK</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_12_nazwa_d++;
            $_12_nr_dnia++;
            $_12_nr_dnia_roku++;
            if ($_12_nr_dnia == $_12_przelam + 1) {
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