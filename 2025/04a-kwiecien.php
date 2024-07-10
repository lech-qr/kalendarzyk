<?php 


    
?>

<section id="kwiecień-<?php echo $rok_kal?>">
    <article class="lewa wzor_B">
        <div class="tresc">
    <?php             
        for ($dzien = 0 ; $dzien < $_04a_ilosc_d; $dzien++){
            echo '<div class="dzien ' . ($tydzien[$_04a_nazwa_d]) . ' d_roku_' . $_04a_nr_dnia_roku . '">'
                . '<div class="nr_dnia"><p>' . ($_04a_nr_dnia) . '</p></div>'
                . '<div class="nazwad"><p>' . ($tydzien[$_04a_nazwa_d]) . '</p></div>'
                . '<div class="dane">'
                    . '<p class="sigla">' . ($$sigla[$_04a_nr_dnia_roku]) . '</p>';
                    if (!empty($kwiecien[$_04a_nr_dnia])) {
                        echo '<div class="obchod">' . ($kwiecien[$_04a_nr_dnia]) . '</div>';
                    }
                    echo '<div class="prawe">'
                        . '<p class="g_czyt">gcz: ' . ($$gcz[$_04a_nr_dnia_roku]) . '</p>'
                        . '<p class="kolor">???</p>'
                    . '</div>'
                . '</div>'
                . '</div>';
            $_04a_nazwa_d++;
            $_04a_nr_dnia++;
            $_04a_nr_dnia_roku++;
            if ($_04a_nr_dnia == $_04a_przelam + 1) {
                echo '</div>'
                . '</article>'
                . '<article class="prawa wzor_B">'
                . '<div class="tresc">'
//              Homilia
. '<div class="homilia">'
. '<h2>Słowo św. Jana Chryzostoma na Niedzielę Paschy</h2>'
. '<h3>Świętego ojca naszego Jana Chryzostoma, arcybiskupa Konstantynopola,<br>mowa katechetyczna na święty i pełen światłosci dzień<br>najchwalebniejszego i zbawczego Zmartwychwstania Chrystusa, Boga naszego.</h3>'
. '<p>Jeśli ktoś jest uczciwy i&nbsp;pobożny, niech znajdzie radość w&nbsp;tej dobrej i&nbsp;pełnej swiatłości uroczystości. Jeśli ktoś jest sługą roztropnym, niech wejdzie ciesząc się do radości Pana swego. Jeżeli ktoś dzwigał postu udręki, niechże otrzyma dziś słuszną zapłatę. Jesli niósł trudy od pierwszej godziny, niech sprawiedliwą otrzyma należność. Jeśli ktoś przyszedł po trzeciej godzinie, niech też świętuje z&nbsp;wdzięcznością. Jeżeli ktoś dopiero po szóstej godzinie się dołączył, niech nie ma żadnej wątpliwości, ponieważ niczego nie traci. Jeżeli zaś ktoś pozbawił się nawet dziewiątej godziny, niech także o&nbsp;niczym nie wątpi, niczego się nie boi. Jeśli ktoś dołączył się nawet o&nbsp;jedenastej godzinie, niech wcale nie boi się zwłoki, albowiem gościnny jest Pan. Przeto przyjmuje ostatniego jak i&nbsp;pierwszego, i&nbsp;daje odpocząć tym, co o&nbsp;jedenastej godzinie przyszli, podobnie jak tym, którzy pracowali od pierwszej godziny. i&nbsp;nad ostatnim się lituje i&nbsp;pierwszego wynagradza, i&nbsp;jednemu daje, i&nbsp;drugiego wspomaga. i&nbsp;uczynki przyjmuje i&nbsp;zamiary wita, i&nbsp;wysiłki szanuje i&nbsp;chęci pochwala. Przeto wejdźmy wszyscy do radości Pana swego: i&nbsp;pierwsi, i&nbsp;drudzy nagrodę przyjmijcie. Bogaci i&nbsp;ubodzy, wszyscy razem się cieszcie. Wstrzemięźliwi i&nbsp;leniwi, ten dzień uczcijcie. Ci, co pościli i&nbsp;co nie pościli, weselcie się dziś. Uczta przygotowana, rozkoszujcie się wszyscy. Baranek przygotowany, niech nikt nie wyjdzie głodny. Wszyscy nasyćcie się ucztą wiary, wszyscy przyjmijcie bogactwo miłosierdzia. Niech nikt nie opłakuje ubóstwa, objawiło się bowiem wspólne królestwo. Niech nikt nie opłakuje grzechów, przebaczenie bowiem z&nbsp;grobu zajaśniało. Niech nikt nie lęka się śmierci, wybawiła nas bowiem śmierć Zbawiciela. Wygasił ją Ten, który był przez nią trzymany. Ujarzmił piekło Ten, który zstąpił do piekła. Zgorzkniało piekło, skosztowawszy ciała Jego. i&nbsp;to właśnie przewidując, Izajasz tak wołał: „Piekło”, mówił, „zgorzkniało, spotkawszy Cię w&nbsp;otchłani”. Zgorzkniało, bo zostało puste. Zgorzkniało, bo zostało oszukane. Zgorzkniało, bo umarło. Zgorzkniało, bo zostało obalone. Zgorzkniało, bo zostało skrępowane. Przyjęło ciało, a&nbsp;natknęło się na Boga. Przyjęło ziemię, a&nbsp;spotkało samo niebo. Przyjęło to, co mogło widzieć, a&nbsp;wpadło w&nbsp;to, czego nie mogło widzieć. Gdzież więc, o&nbsp;śmierci, jest Twój oścień? Gdzie twe, piekło, zwycięstwo? Zmartwychwstał Chrystus – i&nbsp;tyś zostało zrzucone. Zmartwychwstał Chrystus – i&nbsp;upadły demony. Zmartwychwstał Chrystus – i&nbsp;weselą się aniołowie. Zmartwychwstał Chrystus – i&nbsp;życie świeci swą pełnią. Zmartwychwstał Chrystus – i&nbsp;nikt martwy nie pozostał w&nbsp;grobie. Chrystus bowiem powstawszy z&nbsp;martwych stał się pierworodnym posród umarłych. Jemu chwała i&nbsp;królestwo na wieki wieków. Amen.</p>'
. '<h4>Troparion, ton 8:</h4>'
. '<p>Jak jasność ognia, łaska z Twych ust promieniująca oświeciła całą ziemię, nie nabyła światu skarbu przez chciwość, i pokazała nam wzniosłość pokory. Słowami Twymi nauczając, ojcze Janie o złotych ustach (Chryzostom-Złotousty), proś Chrystusa Boga-Słowo, aby zbawił dusze nasze.</p>'
. '</div>';
//              Koniec homilii                
            }
            
        }
    ?>
        </div>
    </article>
</section>