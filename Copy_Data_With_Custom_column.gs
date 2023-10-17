function PD1() {
SpreadsheetApp.flush();
var sss = SpreadsheetApp.openById('17YxWZ9UpW1RavTwrxjQm_c8MuJpbQ5Xp2QLR691blk8');
var ss = sss.getSheetByName('Pipedrive Data');
var lrw = ss.getLastRow();
var data = ss.getRange(1,1,lrw,111).getValues();
data1 = data.filter(isColAAAWS);
var ess =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108]

data1= data1.map(e => ess.map((x) => e[x-1])) 

Logger.log(data1[0])
var dest = SpreadsheetApp.openById("1NH8S69tF_LDUXnjqyG9ssXwj8dP4x4lgHKdAVI9S3Fo").getSheetByName("OBV PD Live");
   var lrw1 = dest.getLastRow();
  dest.getRange(2,1,lrw1,108).clearContent();

  dest.getRange(2,1,data1.length,data1[0].length).setValues(data1);


function isColAAAWS(arr) {

return  arr[30] !="deleted" && arr[3] >= 0 &&  arr[63] =="GCP" && arr[5] =="AAI" && arr[59] == "Opportunities" && (arr[12] == "Conversational AI" || arr[12] == "OBTX" || arr[12] == "CCaaS" || arr[12] == "CCAI Advisory" || arr[12] == "Speech Interfaces" || arr[12] == "Gesture Interfaces" || arr[12] == "Digital Avatars" || arr[12] == "UX Design" ) || arr[110] == "CCAI";


};

};

