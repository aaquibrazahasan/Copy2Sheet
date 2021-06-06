function Copy() {

 var sss = SpreadsheetApp.openById('1iLct74Z1r2agg944uafL5vnZzAipW87FX0ltsd_GCR0'); //replace with source ID
 var ss = sss.getSheetByName('TEST-Q1'); //replace with source Sheet tab name
 var range = ss.getRange('A5:L'); //assign the range you want to copy
 var data = range.getValues();

 var tss = SpreadsheetApp.openById('18FdrVOKwNOHDQbHyoE_ivr6R9byW1oF-TaD8oYjSwe4'); //replace with destination ID
 var ts = tss.getSheetByName('Copy_data');  //replace with destination Sheet tab name
 ts.getRange(1, 1, data.length, data[0].length).setValues(data);
 
 // @ts-ignore
 

}
