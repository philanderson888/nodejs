# deploy to aws

## contents

- [deploy to aws](#deploy-to-aws)
  - [contents](#contents)
  - [introduction](#introduction)
  - [create express app](#create-express-app)
  - [test and run app locally](#test-and-run-app-locally)
  - [deploy app](#deploy-app)
    - [install aws cli](#install-aws-cli)
    - [install aws elastic beanstalk client](#install-aws-elastic-beanstalk-client)
      - [install dependencies](#install-dependencies)
    - [add python to path](#add-python-to-path)
    - [install the elastic beanstalk client](#install-the-elastic-beanstalk-client)
    - [initiate eb client](#initiate-eb-client)
    - [create and deploy eb environment](#create-and-deploy-eb-environment)
    - [open application](#open-application)
    - [add a configuration file to elastic beanstalk](#add-a-configuration-file-to-elastic-beanstalk)

## introduction

goal is to deploy app to aws

we can use express hello world app as a taster app to get this done

## create express app

.. 

## test and run app locally

..

## deploy app 

### install aws cli

..

### install aws elastic beanstalk client 

elastic beanstalk is a virtual environment into which we can push our app - aws takes care of underlying
- hardware
- os
- installing libraries
- exposing ports

#### install dependencies

- git
- python
- pipx
- virtualenv

```bash
pipx install virtualenv
virtualenv --help
```

### add python to path

problem with eb script not picking up python even though python version 3 is installed

just explicitly adding python to path 

```bash
export PATH="$(brew --prefix python)/libexec/bin:$PATH"
```

problems with updating PATH

so find location of PATH file at `/etc/paths` and edit the file directly

### install the elastic beanstalk client 

download the zip package 

path for example to the downloaded files 

```bash
cd /Users/phil/Downloads/temp/aws-elastic-beanstalk-cli-setup/scripts
```

make sure you can see the installer file

```bash
ebcli_installer.py
```

once you have located it, run the install using

```bash
python ebcli_installer.py 
```

on success you can now type 

```bash
eb
```

and elastic beanstalk client will start up

### initiate eb client

```bash
eb init
#  us-east-1
#  create ssh key pair ... not sure if necessary but created a new key pair anyway
```

### create and deploy eb environment

```bash
eb create express-env
```

### open application

```bash
eb open
```

opened a deployment url `http://express-env.eba-vhbpqbyh.us-east-1.elasticbeanstalk.com` but this failed to open ... `service error`

### add a configuration file to elastic beanstalk

create directory `.ebextensions` and file `launchtemplate.config`

```yml
Resources:
  AWSEBAutoScalingGroup:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      LaunchTemplate:
        LaunchTemplateName: !Ref AWSEBLaunchTemplate
      MinSize: 1
      MaxSize: 4
```