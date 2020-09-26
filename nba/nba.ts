// --allow-run
import { readCSVObjects } from "https://deno.land/x/csv/mod.ts";

const f = await Deno.open("./player_data.csv");

for await (const rowData of readCSVObjects(f, { lineSeparator: "\r\n" })) {
  console.log(rowData);
}

f.close();
