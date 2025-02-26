# bun

## contents

- [bun](#bun)
  - [contents](#contents)
  - [introduction](#introduction)
  - [reference](#reference)
  - [installing](#installing)
  - [hello world](#hello-world)
  - [hello world vite + vue](#hello-world-vite--vue)

## introduction 

## reference

docs at 

https://bun.sh/

## installing

```
curl -fsSL https://bun.sh/install | bash
```

## hello world

hello-world-01.tsx

```jsx
const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response("Welcome to Bun!");
  },
});
console.log(`Listening on localhost:${server.port}`);
```

run it

```bash
bun hello-world-01.tsx 
```

## hello world vite + vue

to install an app quickly we can run

https://bun.sh/guides/ecosystem/vite

```jsx
bun create vite myApp
cd myApp
bun install
bunx --bun vite
```

see [bun01](../projects/bun/bun01) for code implementation


