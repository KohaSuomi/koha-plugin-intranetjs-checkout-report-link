/// ALKU ///
// Linkki lainatilastoraporttiin tietueen pääsivulla
$(document).ready(function() {
    if (window.location.pathname == '/cgi-bin/koha/catalogue/detail.pl') { 
      $('#catalogue_detail_biblio div').append('<span class="results_summary"><span class="lainatiedot label">Lainaustilastot: </span><a id="lainatiedot" href="#">Raportti</a></span>');
    }  
  });
  
  $('body').on('click', '#lainatiedot', function(e) {
    e.preventDefault();
      var reportnumber = REPLACE_BY_CONFIG_PARAM_A;   
      var params = new URLSearchParams(window.location.search);
      var biblionumber = params.get('biblionumber');
      var reporturl = '/cgi-bin/koha/reports/guided_reports.pl?reports=' + reportnumber + '&phase=Run+this+report&param_name=biblionumber&sql_params=' + biblionumber;
      var newin = window.open(reporturl,'popup','width=1024,height=768,resizable=no,toolbar=false,scrollbars=yes,top');
  });
  /// LOPPU ///