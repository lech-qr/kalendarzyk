<section id="marzec-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_03b_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_03b_nazwa_d]) . ' d_roku_' . $_03b_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_03b_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_03b_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_03b_nr_dnia_roku]) . '</p>';
                    if (!empty($marzec[$_03b_nr_dnia])) {
                        echo '<div class="obchod">' . ($marzec[$_03b_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_03b_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">???</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_03b_nazwa_d++;
            $_03b_nr_dnia++;
            $_03b_nr_dnia_roku++;
            if ($_03b_nr_dnia == $_03b_przelam + 1) {
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