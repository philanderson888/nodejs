# HTTPS

## Author

@philanderson888
November 2020

## Contents

- [HTTPS](#https)
  - [Author](#author)
  - [Contents](#contents)
  - [Introduction](#introduction)
  - [Generate a certificate](#generate-a-certificate)

## Introduction

This aims to show the basics of building an https node web server

## Generate a certificate

```powershell
choco install openssl -y
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```