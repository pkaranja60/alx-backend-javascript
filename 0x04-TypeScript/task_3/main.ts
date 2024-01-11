import { RowID, RowElement } from "./js/interface";
import * as CRUD from "./js/crud";

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`// Insert row ${JSON.stringify(row)}`);

// Create a const variable named updatedRow with the type RowElement
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

CRUD.updateRow(newRowID, updatedRow);
console.log(`// Update row ${newRowID} ${JSON.stringify(updatedRow)}`);

CRUD.deleteRow(newRowID);
console.log(`// Delete row id ${newRowID}`);
