# Hello World Alexa Skill

The Hello World Alexa Skill is a codebase that enables you to quickly get started with an Alexa Skill in AWS Lambda.

## Prerequisites
* Node.js – v4.3.2 or 6.10.3

## Creating a deployement package for AWS Lambda

1. Install the node dependencies.

```
$ npm install
```

2. Package the index.js, node_modules, and other relevant files into a zip.

```
$ zip -r MySkill.zip index.js node_modules
```
