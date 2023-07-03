<section id="maj-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_05_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_05_nazwa_d]) . ' d_roku_' . $_05_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_05_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_05_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_05_nr_dnia_roku]) . '</p>';
                    if (!empty($maj[$_05_nr_dnia])) {
                        echo '<div class="obchod">' . ($maj[$_05_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_05_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">???</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_05_nazwa_d++;
            $_05_nr_dnia++;
            $_05_nr_dnia_roku++;
            if ($_05_nr_dnia == $_05_przelam + 1) {
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