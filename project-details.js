
var projName = $('td.header_title2').html();
var projNameInDOM = projName.replace(" ", "");
var desc = "some description";
var idPrefix = "procedurePageSearch" + projNameInDOM;
var projProcsTable = $('#' + idPrefix);

if(projProcsTable.html() != undefined) {
  var procName = $('#' + idPrefix + '_row1 td:nth-child(1) a').html()

  console.log("Procedure Name : " + procName);

  var recentJobsLink = "<a href=\"/commander/link/searchBuilder?formId=editSearch&objectType=job&maxIds=50&maxResults=50&filtersJob1_custom_name=liveProcedure&"
                        + "filtersJob1_custom_operator=equals&filtersJob1_custom_operand1=" + procName + "&"
                        + "filtersJob2_custom_name=projectName&filtersJob2_custom_operator=equals&filtersJob2_custom_operand1=" + projName + "&"
                        + "sort1_name=start&sort1_order=descending&filtersJob_custom_last=3&sort_last=2\">Recent Jobs</a><br/><br/> " + desc;

  var col = $('#' + idPrefix + '_row1 td:nth-child(2)');

  console.log("recentJobsLink : " + recentJobsLink );

  col.html(recentJobsLink);
}
