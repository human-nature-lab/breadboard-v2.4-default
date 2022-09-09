# breadbord-v2.4-default
This is a Vue started template designed to make it easy to get started with [breadboard].

## Prerequisites
- [breadboard] - Install the Breadboard software
- [nodejs/npm] - Install NodeJS and the package manager NPM (usually this is automatically installed with NodeJS)

## Installation
- Make sure all prerequisites are installed

### Configure breadboard
1. Follow the steps in [breadboard] to setup and start your server
2. Create a new experiment using the "+" button in breadboard
3. Give that process a few seconds to complete, then switch to "File Mode" using the button near the experiment name in breadboard
   - A directory will be created inside the `dev` directory of your breadboard server. Take note of the name of this directory later use.

### Using this template
- Download this repository
  - With GIT: `git clone https://github.com/human-nature-lab/breadboard-v2.4-default.git`
  - Alternatively use the **Code -> Download ZIP** button in Github
- Install dependencies: `npm install`
- Configure the environment
  - Copy `.env.default` to a file called `.env` in the same directory: `cp .env.default .env`
  - Change the variables in `.env` for your environment
    - `BREADBOARD_ROOT` is the relative or absolute path to the location of your breadboard server
    - `EXPERIMENT_ROOT` is the relative path from your breadboard server to the experiment directory created in step 3 of "Configure Breadboard". Usually this is looks like `dev/{experiment name_2345}`
    - `PUBLIC_ROOT` the name of the folder to store generated client files. It's your decision what to call this directory, but it must start with `generated`. Usually it would be something like `generated/{experiment name}`
- Start the dev server: `npm run serve`
  - Now all changes made to this directory will show up in breadboard and changes in the "backend" directory will be synced with your breadboard experiment
- Create a new "Experiment Instance" in your breadboard server
- Open the client login page from the "Experiment Instances" module in breadboard
  - Now changes made to code in this directory will automatically update in your web browser

# NOTE!!
Deleting/renaming files in the backend directory will **NOT** delete or rename files in the `dev/{experiment}` directory within your breadboard server. They will need to be deleted/renamed manually. However, new files and changes to the code are handled automatically.

[breadboard]: https://breadboard.yale.edu
[nodejs/npm]: https://nodejs.org/