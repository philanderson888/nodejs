console.log(` `);
console.log(`====================================================`);
console.log(`====================================================`);
console.log(`====================================================`);
console.log(`===             learning javascript              ===`);
console.log(`====================================================`);
console.log(`====================================================`);
console.log(`====================================================`);
console.log(` `);


console.log(` `);
console.log(`====================================================`);
console.log(`===              getting started                 ===`);
console.log(`====================================================`);
console.log(` `);

console.log(` `);
console.log(`to get started, create a new directory and run 'pnpm init'`);
console.log(` `);
console.log(`then install the 'jest' package`);
console.log(` `);
console.log(`then create a new file called 'index.js'`);
console.log(` `);
console.log(`then add the following code to 'index.js'`);
console.log(` `);
console.log(`import { expect } from 'jest'`);
console.log(` `);
console.log(`then run 'pnpm test'`);
console.log(` `);
console.log(`you should see the following output`);
console.log(` `);
console.log(`PASS  ./index.test.js`);
console.log(` `);

console.log(` `);
console.log(`also to list files using glob, install the 'glob' package`);
console.log(` `);
console.log(`then add the following code to 'index.js'`);
console.log(` `);
console.log(`import { glob } from 'glob'`);
console.log(` `);
console.log(`then run 'pnpm test'`);




console.log(` `);
console.log(`====================================================`);
console.log(`===                   glob                       ===`);
console.log(`====================================================`);
console.log(` `);

console.log(` `);
console.log(`glob is a module that provides a way to get a list of test files in a project.`);
console.log(` `);

/*
```bash
mkdir tests-01
cd tests-01
pnpm init
mkdir tests
echo "expect(1).toBe(2);" > tests/01.test.js
echo "expect(2).toBe(2);" > tests/02.test.js
echo "expect(3).toBe(4);" > tests/03.test.js
echo "expect(4).toBe(4);" > tests/04.test.js
echo "expect(5).toBe(6);" > tests/05.test.js
echo "expect(6).toBe(6);" > tests/06.test.js
touch index.js
pnpm install glob jest-haste-map
```
*/



import { glob , globSync, globStream, globStreamSync, Glob } from 'glob'

const testFiles1 = glob.sync('**/*.test.js');

console.log(testFiles1); // ['tests/01.test.js', 'tests/02.test.js', …]

// all js files, but don't look in node_modules
const jsfiles = await glob('**/*.js', { ignore: 'node_modules/**' });

console.log(jsfiles); // ['index.js', 'lib/01.js', …]




console.log(` `);
console.log(`====================================================`);
console.log(`===               jest haste map                 ===`);
console.log(`====================================================`);
console.log(` `);

console.log(` `);
console.log(`jest haste map is a module that provides a way to get a list of test files in a project.`);
console.log(`it's used by Jest to find test files in a project.`);
console.log(`it is used in larger projects than the one in the previous example which is using glob.`); 
console.log(`once the initial cache is built, it is faster than using glob.`);
console.log(`it can also be used with facebook 'watchman' to watch for changes in the file system.`);
console.log(`... see https://facebook.github.io/watchman/`)
console.log(` `);

import JestHasteMap from 'jest-haste-map';
import { cpus } from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Get the root path to our project (Like `__dirname`).
const root = dirname(fileURLToPath(import.meta.url));
const hasteMapOptions = {
  extensions: ['js'],
  maxWorkers: cpus().length,
  name: 'best-test-framework',
  platforms: [],
  rootDir: root,
  roots: [root],
};
// Need to use `.default` as of Jest 27.
const hasteMap = new JestHasteMap.default(hasteMapOptions);

console.log(` `);
console.log(`hasteMapOptions: ${JSON.stringify(hasteMapOptions)}`);

// This line is only necessary in `jest-haste-map` version 28 or later.
await hasteMap.setupCachePath(hasteMapOptions);

const { hasteFS } = await hasteMap.build();
const testFiles = hasteFS.getAllFiles();

console.log(` `);
console.log(testFiles);
// ['/path/to/tests/01.test.js', '/path/to/tests/02.test.js', …]




console.log(` `);
console.log(`====================================================`);
console.log(`====================================================`);
console.log(`===                   a - z                      ===`);
console.log(`====================================================`);
console.log(`====================================================`);
console.log(` `);



console.log(` `);
console.log(`====================================================`);
console.log(`===                 chalk                       ===`);
console.log(`====================================================`);
console.log(` `);

console.log(` `);
console.log(`chalk is a module that provides a way to colorize text in the console.`);
console.log(` `);
console.log(`to install chalk, run 'pnpm install chalk'`);
console.log(` `);
console.log(`then add the following code to 'index.js'`);
console.log(` `);
console.log(`import chalk from 'chalk'`);
import chalk from 'chalk'
console.log(` `);
console.log(`then run 'pnpm test'`);
console.log(` `);
console.log(`you should see the following output`);
console.log(` `);
console.log(chalk.red('this text is red'));
console.log(chalk.green('this text is green'));
console.log(chalk.green.inverse('this text is green and inverse'));
console.log(chalk.blue('this text is blue'));
console.log(chalk.yellow('this text is yellow'));
console.log(chalk.white('this text is white'));
console.log(chalk.black('this text is black'));
console.log(chalk.gray('this text is gray'));
console.log(chalk.dim('this text is dim'));
console.log(chalk.bold('this text is bold'));
console.log(chalk.italic('this text is italic'));
console.log(chalk.underline('this text is underline'));
console.log(chalk.inverse('this text is inverse'));
console.log(chalk.hidden('this text is hidden'));
console.log(chalk.strikethrough('this text is strikethrough'));
console.log(chalk.bgRed('this text has a red background'));





