/// ALKU ///
// Linkki lainatilastoraporttiin tietueen pääsivulla
$(document).ready(function() {
  if (window.location.pathname == '/cgi-bin/koha/catalogue/detail.pl') { 

    // Tarkistaa onko osakohde
    if (document.getElementsByClassName('results_summary in').length < 1 || document.getElementById('components_tab') !== null) {

      // Kielivalinta
      var labelname = 'Lainatilasto';
      var linkname = 'Raportti';
      if (document.documentElement.lang.toLowerCase() === "en" ) {
        labelname = 'Circulation statistics';
        linkname = 'Report';
      } else if (document.documentElement.lang.toLowerCase() === "sv-se" ) {
        labelname = 'Utlåning statistik';
        linkname = 'Rapport';
      }

      // Linkin luonti
      $('#catalogue_detail_biblio div.page-section').append('<span class="results_summary"><span class="lainatiedot label">' + labelname + ': </span><a id="lainatiedot" href="#">' + linkname + '</a></span>');

    }
  }  
});

$('body').on('click', '#lainatiedot', function(e) {
  e.preventDefault();
    var reportnumber = REPLACE_BY_CONFIG_PARAM_A;
    var reporturl = '/cgi-bin/koha/reports/guided_reports.pl?id=' + reportnumber + '&param_name=biblionumber&sql_params=' + biblionumber +'&op=run';
    var newin = window.open(reporturl,'popup','width=1280,height=720,resizable=no,toolbar=false,scrollbars=yes,top');
});
/// LOPPU ///
