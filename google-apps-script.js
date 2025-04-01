// This code should be deployed as a Google Apps Script Web App
// Instructions for deployment:
// 1. Create a new Google Apps Script project at https://script.google.com/
// 2. Copy this code into the script editor
// 3. Update the SHEET_ID with your Google Sheet ID from the URL
// 4. Deploy as a web app:
//    - Click on Deploy > New deployment
//    - Select type "Web app"
//    - Set "Execute as" to "Me"
//    - Set "Who has access" to "Anyone"
//    - Click "Deploy" and copy the web app URL
//    - Use this URL in your WaitlistForm.tsx

const SHEET_ID = '1lzwaLJu24zTZiqeQuiRJGkzu3JwqxUtkAqO3_o0bAHs';
const SHEET_NAME = 'Sheet1';

function doPost(e) {
  // Log the entire event object
  console.log("Full event object:", JSON.stringify(e));
  
  try {
    let name, email;
    
    // Try to get data from different possible sources
    if (e.postData && e.postData.contents) {
      try {
        // Try parsing as JSON
        const jsonData = JSON.parse(e.postData.contents);
        name = jsonData.name;
        email = jsonData.email;
        console.log("Data extracted from JSON:", { name, email });
      } catch (parseError) {
        console.log("Not JSON data, trying form data");
        // If not JSON, try getting from form data
        name = e.parameter.name;
        email = e.parameter.email;
        console.log("Data extracted from form parameters:", { name, email });
      }
    } else if (e.parameter) {
      // Try getting directly from parameters
      name = e.parameter.name;
      email = e.parameter.email;
      console.log("Data extracted from direct parameters:", { name, email });
    }
    
    // Log the final extracted data
    console.log("Final extracted data:", { name, email });
    
    // Validate the data
    if (!name || !email) {
      throw new Error('Missing required fields. Name: ' + name + ', Email: ' + email);
    }
    
    // Open the spreadsheet and get the active sheet
    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    console.log("Opened spreadsheet:", spreadsheet.getName());
    
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    console.log("Accessed sheet:", SHEET_NAME);
    
    // Get the last row number
    const lastRow = sheet.getLastRow();
    console.log("Last row:", lastRow);
    
    // If this is the first entry, add headers
    if (lastRow === 0) {
      sheet.appendRow(['Name', 'Email', 'Timestamp']);
      console.log("Added headers");
    }
    
    // Add the new row
    const timestamp = new Date();
    sheet.appendRow([name, email, timestamp]);
    console.log("Added new row with data:", { name, email, timestamp });
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'success', 
        'data': { name, email },
        'timestamp': timestamp
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error with full details
    console.error("Error in doPost:", error.toString());
    console.error("Error stack:", error.stack);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'result': 'error', 
        'error': error.toString(),
        'stack': error.stack
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      'status': 'online',
      'sheet_id': SHEET_ID,
      'sheet_name': SHEET_NAME
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
