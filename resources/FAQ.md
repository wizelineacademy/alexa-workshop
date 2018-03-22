# Frequently Asked Questions

The following are frequently asked questions about building an Alexa skill with AWS Lambda and Alexa SDK.

* [What are the Alexa available languages?](#What-are-the-Alexa-available-languages)
* [What are the supported execution environments and libraries for AWS Lambda?](#What-are-the-supported-execution-environments-and-libraries-for-AWS-Lambda)
* [How long does it take to certify and publish my alexa skill?](#How-long-does-it-take-to-certify-and-publish-my-alexa-skill)
* [Can I use a different infrastructure / server (not AWS)?](#can-I-use-a-different-infrastructure-server-not-AWS)
* [Can I connect my skill to any API or does Amazon has any limitations?](#can-I-connect-my-skill-to-any-API-or-does-amazon-has-any-limitations)
* [Can I develop my skill in a different programming language?](#Can-I-develop-my-skill-in-a-different-programming-language)
* [Do I need a device to develop and test an alexa skill?](#do-I-need-a-device-to-develop-and-test-an-alexa-skill)
* [How can I debug my Alexa skill?](#how-can-i-debug-my-alexa-skill)

## What are the Alexa available languages?
You can use the Alexa Skills Kit to create skills in multiple languages. A skill can support a single language, or any combination of the available languages:   

* English (Australia)
* English (Canada)
* English (India)
* English (UK)
* English (US)
* French
* German
* Japanese

## What are the supported execution environments and libraries for AWS Lambda?
AWS Lambda supports the following runtime versions:

* Node.js – v4.3.2 and 6.10.3
* Java – Java 8
* Python – Python 3.6 and 2.7
* .NET Core – .NET Core 1.0.1 and .NET Core 2.0
* Go – Go 1.x

## How long does it take to certify and publish my alexa skill?
It usually takes 2-3 Weeks, but be aware of the process given that after the testing from Amazon, they will most likely reply with change requests and improvements for the skill.

[Click here to learn more about how to submit a custom Alexa skill for certification](https://developer.amazon.com/docs/custom-skills/submit-an-alexa-skill-for-certification.html).

## Can I push notifications to through my Alexa Skill?
Not natively, only using your custom made hardware and the the [Alexa Voice Services (AVS)](https://developer.amazon.com/alexa-voice-service). For more information, read the official documentation here.

## Can I use non AWS infrastructure?
Yes, you can host and manage your web service in any way you want, as long as it’s complaint with the Alexa's requirements. However, Amazon recommends using their Lambda service and most likely save you a lot of time during the approval and publication process.

[Click here to learn more about hosting hosting a custom skill as a web service](https://developer.amazon.com/docs/custom-skills/host-a-custom-skill-as-a-web-service.html).

## Can I connect my skill to any API or does Amazon has any limitations?
There are no limitations, an Alexa skill is a regular web service and can be developed as such. The only limitations are provided by your infrastructure.

## Can I develop my skill in a different programming language?
Yes, Alexa skills can be developed in any programming languages that allows building web applications. However, Amazon official SDK’s only support Java and Node.js.

[Click to learn more about the SDK for Java]().
[To learn more about the SDK for NodeJS]().

## Do I need a device to develop and test an alexa skill?
No, you can use the Test module from the Amazon Developer Dashboard, or emulators such as [echosim.io](https://echosim.io).

## How can I debug my Alexa skill?
If you're using AWS Lambda, it's recommended to use the [CloudWatch Logs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html) provided by the Lambda function.

If you're not using AWS Lambda, you can use the tools as provided by your web service technology.