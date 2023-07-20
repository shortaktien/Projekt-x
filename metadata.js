// Funktion zum Überprüfen des Transaktionsstatus
function checkTransactionStatus(number) {
    // REST-API-Aufruf zur Überprüfung des Transaktionsstatus
    fetch('https://api.shimmer.network/api/core/v2/transactions/' + number + '/included-block/metadata', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Verarbeiten der API-Antwort und Aktualisieren des Transaktionsstatus
      var table = document.getElementById('controlInvoice');
      var tbody = table.querySelector('tbody');
      var rows = tbody.getElementsByTagName('tr');
  
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var numberCell = row.cells[0];
        var statusCell = row.cells[2];
        var numberText = numberCell.textContent;
  
        if (numberText === number.toString()) {
          if (data.status === 'accepted') {
            statusCell.textContent = 'Akzeptiert';
          } else if (data.status === 'pending') {
            statusCell.textContent = 'Ausstehend';
          } else {
            statusCell.textContent = 'Abgelehnt';
          }
          break;
        }
      }
    })
    .catch(error => {
      console.error(error);
      // Aktualisieren des Status, falls es einen Fehler bei der Überprüfung gibt
      var table = document.getElementById('controlInvoice');
      var tbody = table.querySelector('tbody');
      var rows = tbody.getElementsByTagName('tr');
  
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var numberCell = row.cells[0];
        var statusCell = row.cells[2];
        var numberText = numberCell.textContent;
  
        if (numberText === number.toString()) {
          statusCell.textContent = 'Fehler';
          break;
        }
      }
    });
  }
  