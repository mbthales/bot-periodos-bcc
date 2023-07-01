# College Semester Discord Bot

## Content Table

- [College Semester Discord Bot](#college-semester-discord-bot)
	- [Content Table](#content-table)
	- [About ](#about-)
	- [Getting Started ](#getting-started-)
		- [Installation ](#installation-)
		- [Running ](#running-)
		- [How it Works ](#how-it-works-)
	- [Build With ](#build-with-)
	- [Contributing ](#contributing-)

## About <a name="about"></a>

A Discord bot to assign roles to users based on their college semester.

## Getting Started <a name="getting_started"></a>

### Installation <a name="installation"></a>

-  You need to have Node JS >= 18.16.1 in your machine.
-  Clone this repository.
-  Run `yarn install` or `npm install`

### Running <a name="running"></a>

-  Run `yarn dev` or `npm run dev`

### How it Works <a name="how-it-works"></a>

-  You need to create a `.env` file in the root of the project with the following content:
   -  BOT_TOKEN: Your discord bot token
   -  CHANNEL_ID: The channel id where the bot will listen to messages
-  The bot will only assign a role to a user if the message is a valid semester, such as:
   -  22.1
   -  22.2

## Build With <a name="build_with"></a>

-  Typescript
-  Discord.js

## Contributing <a name="contributing"></a>

If you're interested in contributing, please follow these steps:

1. Fork this repository and clone it to your local machine.
2. Create a new branch for your contribution.
3. Make your desired changes and improvements.
4. Test your changes to ensure they work correctly.
5. Commit your changes with a descriptive message.
6. Push your changes to your forked repository.
7. Open a pull request in this repository to submit your changes.
