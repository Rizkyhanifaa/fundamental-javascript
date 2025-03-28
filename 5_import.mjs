// 1. Impor fungsi unique dari utils.mjs secara default
import unique from "./5_export.mjs";
unique();

// 2. Impor fungsi splitString dari utils.mjs secara named
import { splitString } from "./5_export.mjs";
splitString();

const string = 'saippuakivikauppias';
const array = splitString(string);
const uniqueArray = unique(array);

console.log(string);
console.log(array);
console.log(uniqueArray);
