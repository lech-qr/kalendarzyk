<?php
    $rok_kal = "2023";
    $gcz = 'gcz_I';
    $sigla = 'sigla_A_I';
    
    // Listopad / Grudzień - poprzedniego roku kalendarzowego
    $_00_nr_dnia_roku = 1;
    $_00_nr_dnia = -3;
    $_00_nazwa_d = 1;
    $_00_przelam = 14;
    $_00_ilosc_d = 35; 
    
    // Styczeń
    $_01_nr_dnia_roku = 36;
    $_01_nr_dnia = 1;
    $_01_nazwa_d = 1;
    $_01_przelam = 16;
    $_01_ilosc_d = 31; 
    
    // Luty
    $_02_nr_dnia_roku = 67;
    $_02_nr_dnia = 1;
    $_02_nazwa_d = 4;
    $_02_przelam = 14;
    $_02_ilosc_d = 28;
    
    // Marzec
    $_03_nr_dnia_roku = 95;
    $_03_nr_dnia = 1;
    $_03_nazwa_d = 4;
    $_03_przelam = 16;
    $_03_ilosc_d = 31; 
    
    // Kwiecień
    $_04a_nr_dnia_roku = 126;
    $_04a_nr_dnia = 1;
    $_04a_nazwa_d = 7;
    $_04a_przelam = 8;
    $_04a_ilosc_d = 13;
    
    $_04b_nr_dnia_roku = 139;
    $_04b_nr_dnia = 14;
    $_04b_nazwa_d = 6;
    $_04b_przelam = 30;
    $_04b_ilosc_d = 17;
    
    // Maj
    $_05_nr_dnia_roku = 156;
    $_05_nr_dnia = 1;
    $_05_nazwa_d = 2;
    $_05_przelam = 16;
    $_05_ilosc_d = 31;
    
    // Czerwiec
    $_06_nr_dnia_roku = 187;
    $_06_nr_dnia = 1;
    $_06_nazwa_d = 5;
    $_06_przelam = 15;
    $_06_ilosc_d = 30; 
    
    // Lipiec
    $_07_nr_dnia_roku = 217;
    $_07_nr_dnia = 1;
    $_07_nazwa_d = 7;
    $_07_przelam = 16;
    $_07_ilosc_d = 31; 
    
    // Sierpień
    $_08_nr_dnia_roku = 248;
    $_08_nr_dnia = 1;
    $_08_nazwa_d = 3;
    $_08_przelam = 16;
    $_08_ilosc_d = 31; 
    
    // Wrzesień
    $_09_nr_dnia_roku = 279;
    $_09_nr_dnia = 1;
    $_09_nazwa_d = 6;
    $_09_przelam = 15;
    $_09_ilosc_d = 30; 
    
    // Październik
    $_10_nr_dnia_roku = 309;
    $_10_nr_dnia = 1;
    $_10_nazwa_d = 1;
    $_10_przelam = 16;
    $_10_ilosc_d = 31; 
    
    // Listopad
    $_11_nr_dnia_roku = 340;
    $_11_nr_dnia = 1;
    $_11_nazwa_d = 4;
    $_11_przelam = 15;
    $_11_ilosc_d = 30; 
    
    // Grudzień
    $_12_nr_dnia_roku = 370;
    $_12_nr_dnia = 1;
    $_12_nazwa_d = 6;
    $_12_przelam = 16;
    $_12_ilosc_d = 31; 
    

    include('../stale/head.php');
    include('../dane/obchod.php');
    include('../dane/' . $sigla . '.php');
    include('../dane/' . $gcz . '.php');
    
    include('00-wkladka_1.php');
    include('00-wkladka_2_lewa.php');
    include('00-wkladka_skrocony_A.php');
    
    include('00-zlistopad-grudzien.php');
    include('01-styczen.php');
    include('02-luty.php');
    include('03-marzec.php');
    include('04a-kwiecien.php');
    include('04b-kwiecien.php');
    include('05-maj.php');
    include('06-czerwiec.php');
    include('07-lipiec.php');
    include('08-sierpien.php');
    include('09-wrzesien.php');
    include('10-pazdziernik.php');
    include('11-listopad.php');
    include('12-grudzien.php');
    
    include('13-wkladka_skrocony_B.php');
?>

<?php include('../stale/' . $rok_kal . '/footer.php') ?>