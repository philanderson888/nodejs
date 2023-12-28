# env

## contents

- [env](#env)
  - [contents](#contents)
  - [simple introduction](#simple-introduction)

## simple introduction

use .env file with entres like

```js
KEY_1=value1
KEY_2=value2
```

```js
import { Client } from "@notionhq/client"
import dotenv from 'dotenv';
dotenv.config()

/*
// config
*/

console.log(`.env has details ${process.env}`)

for (const key in process.env) {
  console.log(`key ${key} value ${process.env[key]}`)
}

console.log(`notion key ${process.env.KEY_1}`)
console.log(`notion database id ${process.env.KEY_2}`)
```

