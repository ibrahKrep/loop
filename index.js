var symbol = window.prompt("Masukkan Simbol :");
var rows = window.prompt("Jumlah Baris");
var columns = window.prompt("Jumlah Kolom :");

while (symbol == "") {
  var symbol = window.prompt("Masukkan Simbol :");
}
while (rows == "") {
  var rows = window.prompt("Jumlah Baris");
}
while (columns == "") {
  var columns = window.prompt("Jumlah Kolom :");
}

for(let i = 0; i < rows; i++){
  for(let j = 0; j < columns; j++){
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}