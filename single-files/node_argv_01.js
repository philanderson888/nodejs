var x = 0;
for (index = 2; index < process.argv.length; ++index) {
  x += +process.argv[index];
  console.log(process.argv[index]);
}
console.log("Total sum of items is " + x);