function myFunc() {
    
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("exercise");
  var entireSheet = sheet.getDataRange();
  var contents = entireSheet.getValues();  // array of whole sheet values
  
  //Logger.log(contents);
  var tryit = Date(contents[0,1]);
  Logger.log(contents[0,1]);
  Logger.log(tryit);
  //var year = Date(contents[0,1]).getFullYear();
  //var mon = Date(contents[0,1]).getMonth();
  //Logger.log(mon + " " + year);
  
  var d = new Date();
/*var todayYear = d.
  var todayMonth = d.*/
  
}
