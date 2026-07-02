function doPost(e) {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID';
  const sheetName = 'Responses';

  const sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);

  const row = [
    new Date(),
    e.parameter.answer || '',
    e.parameter.date || '',
    e.parameter.time || '',
    e.parameter.food || ''
  ];

  sheet.appendRow(row);

  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService.createTextOutput('Google Apps Script is running.');
}
