# loop

**JavaScript nested loop code**
[`Preview`](https://ibrahkrep.github.io/loop/)

**Cocok Buat nyepam ae sih**

**Salin Aja Nih Kode**

# HTML

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>loop</title>
</head>
<body>
	<h1 id="myRectangle"></h1>
	<script src="index.js"></script>
</body>
</html>
```
[`View Raw`](https://raw.githubusercontent.com/ibrahKrep/loop/main/index.html)

# Javascript

```js
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
```
[`View Raw`](https://raw.githubusercontent.com/ibrahKrep/loop/main/index.js)

