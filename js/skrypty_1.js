$(document).ready(function () {

    // Znaczniki i cięcie
    $('article.wzor_A .tresc').each(function () {
        $(this).before('<div class="znacz LG"><img src="../images/ciecie/ciecie1A.svg" alt="Znacznik cięcia" /></div>');
        $(this).before('<div class="paser G"><img src="../images/pasery/paser1A.svg" alt="Paser" /></div>');
        $(this).before('<div class="znacz PG"><img src="../images/ciecie/ciecie2A.svg" alt="Znacznik cięcia" /></div>');
        $(this).before('<div class="paser L"><img src="../images/pasery/paser4A.svg" alt="Paser" /></div>');
        $(this).after('<div class="znacz PD"><img src="../images/ciecie/ciecie3A.svg" alt="Znacznik cięcia" /></div>');
        $(this).after('<div class="paser D"><img src="../images/pasery/paser3AB.svg" alt="Paser" /></div>');
        $(this).after('<div class="znacz LD"><img src="../images/ciecie/ciecie4A.svg" alt="Znacznik cięcia" /></div>');
        $(this).after('<div class="paser P"><img src="../images/pasery/paser2A.svg" alt="Paser" /></div>');
    });
    $('article.wzor_B .tresc').each(function () {
        $(this).before('<div class="znacz LG"><img src="../images/ciecie/ciecie1A.svg" alt="Znacznik cięcia" /></div>');
        $(this).before('<div class="paser G"><img src="../images/pasery/paser1A.svg" alt="Paser" /></div>');
        $(this).before('<div class="znacz PG"><img src="../images/ciecie/ciecie2A.svg" alt="Znacznik cięcia" /></div>');
        $(this).before('<div class="paser L"><img src="../images/pasery/paser4A.svg" alt="Paser" /></div>');
        $(this).after('<div class="znacz PD"><img src="../images/ciecie/ciecie3A.svg" alt="Znacznik cięcia" /></div>');
        $(this).after('<div class="paser D"><img src="../images/pasery/paser3AB.svg" alt="Paser" /></div>');
        $(this).after('<div class="znacz LD"><img src="../images/ciecie/ciecie4A.svg" alt="Znacznik cięcia" /></div>');
        $(this).after('<div class="paser P"><img src="../images/pasery/paser2A.svg" alt="Paser" /></div>');
    });

    // Nagłowek
    $('section').each(function () {
        var miesiacRok = $(this).attr('id');
        values = miesiacRok.split('-');
        miesiac = values[0];
        rok = values[1];
        $(this).find('article.wzor_B .znacz.PG').after('<div class="naglowek"><p class="miesiac">' + miesiac + '</p><p class="rok">' + rok + '</p></div>');
    });

    // Obchody
    $('div.obchod').each(function () {
        var obchod = $(this).html();
        $(this).html(obchod.replace(/.wd.../g, '(wd)<br>'));
        $(this).find("br").remove();
        $(this).contents().filter(function () {
            return this.nodeType === 3;
        }).wrap('<p class="wspomnienie"></p>');
    });
    // Podziel dane ze zmiennej - nazwa Niedzielę i sigla
    $('.dzien.N p.sigla').each(function () {
        var niedziela = $(this).html();
        values = niedziela.split('|');
        niedzielaNazwa = values[0];
        niedzielaSigla = values[1];
        // Wstaw nazwę niedzieli
        $(this).html(niedzielaSigla);
        if ($(this).closest('.dzien').is(':first-child')) {
            $(this).closest('.dzien').before('<div class="dzien pierwszy"><div class="nr_dnia"></div><div class="nazwad"></div><div class="dane"><p class="niedziela">' + niedzielaNazwa + '</p></div></div>');
        } else {
            $(this).closest('.dzien').prev().find('.dane').append('<p class="odstep">&nbsp;</p>');
            $(this).closest('.dzien').prev().find('.dane').append('<p class="niedziela">' + niedzielaNazwa + '</p>');
        }
    });
    // Jeśli święto
    $('div.obchod p').each(function () {
        if ($(this).is(':contains("(ś)")')) {
            $(this).removeClass('wspomnienie');
            $(this).addClass('swieto');
            // usuń sigla z dnia
            if ($(this).closest('.dzien').hasClass('N')) {
                // Niedziela jest ważniejsza więc zostaw sigla z dnia
            } else {
                $(this).closest('.dane').find('p.sigla').empty();
            }

        }
    });
    // Jeśli święto Pańskie
    $('div.obchod p').each(function () {
        if ($(this).is(':contains("(święto Pańskie)")')) {
            // Popraw nazwę
            var nazwa = $(this).text();
            nazwa = nazwa.replace("(święto Pańskie)", "(ś)");
            $(this).text(nazwa);
            values = nazwa.split('|');
            nazwaNazwa = values[0];
            nazwaSigla = values[1];
            values = nazwaSigla.split('~');
            nazwaSigla1 = values[0];
            nazwaGczyt1 = values[1];
            // Jeśli święto Pańskie wypadnie w niedzielę
            if ($(this).closest('.dzien').hasClass('N')) {
                $(this).closest('.dzien').prev('.dzien').find('.dane .niedziela').text(nazwaNazwa);
                $(this).closest('.dzien').find('.sigla').text(nazwaSigla1);
                $(this).closest('.dzien').find('.g_czyt').text('gcz: ' + nazwaGczyt1);
                $(this).remove();
            }
        }
    });
    // Jeśli uroczystość
    $('div.obchod p').each(function () {
        if ($(this).is(':contains("(ś)")') || $(this).is(':contains("(u)")')) {
            $(this).removeClass('wspomnienie');
            $(this).addClass('swieto');
            // usuń sigla z dnia
            if ($(this).closest('.dzien').hasClass('N')) {
                // Niedziela jest ważniejsza więc zostaw sigla z dnia
            } else {
                $(this).closest('.dane').find('p.sigla').empty();
            }

        }
    });
    // Jeśli niedziala
    $('.dzien.N').each(function () {
        $(this).find('div.obchod p.wspomnienie').prepend('*');
        $(this).find('div.obchod p.swieto').prepend('*');
        $(this).find('div.obchod p.swieto').addClass('zniesione');
    });
    // Przenieś nad sigla
    $('.dzien').each(function () {
        if (!$(this).hasClass("N")) {
            $(this).find('.dane').prepend($(this).find('p.swieto'));
        }
    });
    // Podziel dane ze zmiennej - nazwa święto i sigla
    $('p.swieto').each(function () {
        var swieto = $(this).text();
        values = swieto.split('|');
        swietoNazwa = values[0];
        swietoSigla = values[1];
        // Wstaw nazwę święta
        $(this).text(swietoNazwa);
        $(this).next('p.sigla').text(swietoSigla);
        // Odziel sigla od godziny czytań
        var swieto1 = $(this).next('p.sigla').text();
        values = swieto1.split('~');
        swietoSigla1 = values[0];
        swietoGczyt1 = values[1];
        $(this).next('p.sigla').text(swietoSigla1);
        // usuń godzinę czytań z dnia i wstaw ze święta
        if ($(this).closest('.dzien').hasClass('N')) {
            // Niedziela jest ważniejsza więc zostaw sigla z dnia
        } else {
            $(this).closest('.dane').find('p.g_czyt').text('gcz: ' + swietoGczyt1);
        }
    });
    // Podziel dane ze zmiennej - prawa - oznaczenie i godzina czytań
    $('article .tresc .g_czyt').each(function () {
        if ($(this).is(':contains("|")')) {
            var oznaczenie = $(this).text();
            values = oznaczenie.split('|');
            oznaczenieOznacz = values[0];
            oznaczenieG_czyt = values[1];
            // Wstaw nazwę niedzieli
            $(this).text('gcz: ' + oznaczenieG_czyt);
            $(this).before('<p class="oznaczenie">' + oznaczenieOznacz.replace('gcz: ', '') + '</p>');
        }
    });
});