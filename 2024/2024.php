<?php
    $rok_kal = "2024";
    $gcz = 'gcz_II';
    $sigla = 'sigla_B_II';
    
    // Listopad / Grudzień - poprzedniego roku kalendarzowego
    $_00_nr_dnia_roku = 1;
    $_00_nr_dnia = 3;
    $_00_nazwa_d = 1;
    $_00_przelam = 17;
    $_00_ilosc_d = 29; 
    
    // Styczeń
    $_01_nr_dnia_roku = $_00_nr_dnia_roku + $_00_ilosc_d;
    $_01_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_01_nazwa_d = 2;
    $_01_przelam = 16;
    $_01_ilosc_d = 31; // Stała
    
    // Luty
    $_02_nr_dnia_roku = $_01_nr_dnia_roku + $_01_ilosc_d;
    $_02_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_02_nazwa_d = 5;
    $_02_przelam = 14;
    $_02_ilosc_d = 29;
    
    // Marzec
    $_03a_nr_dnia_roku = $_02_nr_dnia_roku + $_02_ilosc_d;
    $_03a_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_03a_nazwa_d = 6;
    $_03a_przelam = 17;
    $_03a_ilosc_d = 17; 
    
    $_03b_nr_dnia_roku = $_03a_nr_dnia_roku + $_03a_ilosc_d;
    $_03b_nr_dnia = $_03a_ilosc_d + 1;
    $_03b_nazwa_d = 2;
    $_03b_przelam = 28;
    $_03b_ilosc_d = 31 - $_03a_ilosc_d;

    // Kwiecień  
    $_04_nr_dnia_roku = $_03b_nr_dnia_roku + $_03b_ilosc_d;
    $_04_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_04_nazwa_d = 2;
    $_04_przelam = 16;
    $_04_ilosc_d = 30; // Stała  
    
    // Maj
    $_05_nr_dnia_roku = $_04_nr_dnia_roku + $_04_ilosc_d;
    $_05_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_05_nazwa_d = 4;
    $_05_przelam = 17;
    $_05_ilosc_d = 31; // Stała
    
    // Czerwiec
    $_06_nr_dnia_roku = $_05_nr_dnia_roku + $_05_ilosc_d;
    $_06_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_06_nazwa_d = 7;
    $_06_przelam = 15;
    $_06_ilosc_d = 30; // Stała
    
    // Lipiec
    $_07_nr_dnia_roku = $_06_nr_dnia_roku + $_06_ilosc_d;
    $_07_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_07_nazwa_d = 2;
    $_07_przelam = 16;
    $_07_ilosc_d = 31; // Stała
    
    // Sierpień
    $_08_nr_dnia_roku = $_07_nr_dnia_roku + $_07_ilosc_d;
    $_08_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_08_nazwa_d = 5;
    $_08_przelam = 16;
    $_08_ilosc_d = 31; // Stała
    
    // Wrzesień
    $_09_nr_dnia_roku = $_08_nr_dnia_roku + $_08_ilosc_d;
    $_09_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_09_nazwa_d = 1;
    $_09_przelam = 15;
    $_09_ilosc_d = 30; // Stała
    
    // Październik
    $_10_nr_dnia_roku = $_09_nr_dnia_roku + $_09_ilosc_d;
    $_10_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_10_nazwa_d = 3;
    $_10_przelam = 16;
    $_10_ilosc_d = 31; // Stała
    
    // Listopad
    $_11_nr_dnia_roku = $_10_nr_dnia_roku + $_10_ilosc_d;
    $_11_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_11_nazwa_d = 6;
    $_11_przelam = 15;
    $_11_ilosc_d = 30; // Stała
    
    // Grudzień
    $_12_nr_dnia_roku = $_11_nr_dnia_roku + $_11_ilosc_d;
    $_12_nr_dnia = 1; // Stała po za miesiącem wielkanocnym
    $_12_nazwa_d = 1;
    $_12_przelam = 16;
    $_12_ilosc_d = 31; // Stała
    

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
    include('03a-marzec.php');
    include('03b-marzec.php');
    include('04-kwiecien.php');
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