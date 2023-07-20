// Funktion zum Überprüfen der Eingabe und Aktivieren des Buttons
function checkInput() {
  var numberInput = document.getElementById("numberInput");
  var buyButton = document.getElementById("testButton");

  if (numberInput.value >= 1) {
    buyButton.disabled = false;
  } else {
    buyButton.disabled = true;
  }
}

// Ereignislistener zum Überprüfen der Eingabe bei Eingabeänderungen
document.getElementById("numberInput").addEventListener("input", checkInput);

// Funktion zum Öffnen der IOTA Shimmer Wallet
function openShimmerWallet() {
  var amount = document.getElementById("numberInput").value;

  // Funktion zum Generieren einer neuen Zufallszahl und Hinzufügen in die Tabelle aufrufen
  var randomNumber = generateRandomNumber(); // Zufallszahl generieren
  createTableRow(randomNumber, amount); // Neue Zeile in der Tabelle erstellen

  // Deep Link generieren und öffnen
  var address = "smr1qpgp9va9xvu0rwskdsmvnvyz97gxctm7mdlq6v6fy896vchw4wt5jq73pla";
  var descriptionText = randomNumber.toString(); // Beschreibungstext für die Transaktion
  var deepLink = "firefly://wallet/sendConfirmation?address=" + address + "&amount=" + amount * 1000000 + "&unit=SMR&metadata=" + descriptionText + "&disableToggleGift=true&disableChangeExpiration=true&giftStorageDeposit=true";

  // Öffnen des Deep Links
  window.location.href = deepLink;

  // Transaktionsstatus überprüfen
  checkTransactionStatus(randomNumber);
}


// Ereignislistener zum Aufrufen der Funktion beim Klick auf den Button
document.getElementById("testButton").addEventListener("click", openShimmerWallet);

