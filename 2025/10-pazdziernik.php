<section id="październik-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_10_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_10_nazwa_d]) . ' d_roku_' . $_10_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_10_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_10_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_10_nr_dnia_roku]) . '</p>';
                    if (!empty($pazdziernik[$_10_nr_dnia])) {
                        echo '<div class="obchod">' . ($pazdziernik[$_10_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_10_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">KK</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_10_nazwa_d++;
            $_10_nr_dnia++;
            $_10_nr_dnia_roku++;
            if ($_10_nr_dnia == $_10_przelam + 1) {
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