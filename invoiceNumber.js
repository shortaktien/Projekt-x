// Funktion zum Generieren einer zufälligen 6-stelligen Zahl
function generateRandomNumber() {
    return Math.floor(100000 + Math.random() * 900000);
  }
  
// Funktion zum Erstellen einer neuen Zeile in der Tabelle
function createTableRow(number, amount) {
    var table = document.getElementById('controlInvoice');
    var tbody = table.querySelector('tbody');
    var row = tbody.insertRow(-1);
    var numberCell = row.insertCell(0);
    var amountCell = row.insertCell(1);
    var statusCell = row.insertCell(2);
  
    numberCell.textContent = number;
    amountCell.textContent = amount;
    statusCell.textContent = "Pending";
  
    // Aktualisieren der globalen Variable invoiceNumber mit der generierten Zufallszahl
    window.invoiceNumber = number;
  
    // Überprüfen des Transaktionsstatus
    checkTransactionStatus(number, statusCell);
  }
  
  // Die Funktion zum Generieren der Zufallszahl und Erstellen der Tabelle manuell aufrufen
  createTableRow(generateRandomNumber(), document.getElementById('numberInput').value);
  