<section id="grudzień-<?php echo ($rok_kal - 1)?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_00_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_00_nazwa_d]) . ' d_roku_' . $_00_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_00_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_00_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_00_nr_dnia_roku]) . '</p>';
                    if (!empty($grudzien[$_00_nr_dnia])) {
                        echo '<div class="obchod">' . ($grudzien[$_00_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_00_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">???</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_00_nazwa_d++;
            $_00_nr_dnia++;
            $_00_nr_dnia_roku++;
            if ($_00_nr_dnia == $_00_przelam + 1) {
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