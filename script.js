function insert_Row() {
  // Get the table by its ID
  const table = document.getElementById("sampleTable");

  // Create a new row
  const newRow = table.insertRow(0); // Insert at the top (index 0)

  // Create two new cells
  const cell1 = newRow.insertCell(0); // Left cell
  const cell2 = newRow.insertCell(1); // Right cell

  // Set cell content
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
}
