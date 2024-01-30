# Frontend Boilerplate

This is the frontend Boilerplate.

## Table of Contents

- [Introduction](#introduction)
- [Built With](#built-with)
- [Project Structure](#project-structure)
- [Code Styling and Linting](#code-styling-and-linting)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)
- [Credits](#credits)

## Introduction

This is react frontend boilerplate.

## Built With

- React: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs.

@TODO complete the list later

## Project Structure

The project follows a modular structure to organize code efficiently. Below is an overview of the key directories:

```plaintext
Frontend/
|-- sec/
|   |-- components/
|   |   |-- (shared UI components)
|   |
|   |-- modules/
|       |-- auth/
|           |-- components/
|           |   |-- (auth-specific components)
|           |
|           |-- screens/
|           |   |-- (auth-specific screens)
|           |
|           |-- services/
|           |   |-- api.js
|           |
|           |-- utils/
|               |-- errors-handler.js
|
|-- services/
|   |-- api.js
|
|-- utils/
|   |-- form-validation.js
|
|-- App.js
|-- package.json
|-- (other project files)
```

- sec/components/: This directory houses shared components used across different modules. These components may include commonly used UI elements, such as buttons, headers, etc.

- modules/: The modules directory contains individual feature modules. Each module represents a specific functionality or domain in the application.

  - auth/ The `auth` module focuses on authentication-related features. It includes components, screens, services, and utilities specific to user authentication.

    - components/: The `components` directory within the `auth` module holds React components related to authentication, such as login forms, registration forms, etc.
    - screens/: Screens represent higher-level UI components or pages in the authentication flow. This directory contains components specific to different authentication screens.
    - services/: The `services` directory contains logic related to API communication, authentication services, etc., specific to the `auth` module.
    - utils/: The `utils` directory includes utility functions that support the authentication module. These could be functions for form validation, data formatting, etc.

- services/: This directory typically houses shared services or API-related functionalities that are utilized across different modules or components.

  - **api.js**: The `api.js` file inside the `services` directory is a module-specific API service. It defines functions for interacting with the backend related to the `sec` module.

- utils/: directory holds utility functions or helper modules that can be used across various parts of the application.

  - **form-validation.js**: The `form-validation.js` file inside the `utils` directory contains utility functions related to form validation, applicable across the entire application.

- App.js: The `App.js` file is the main entry point for the React application. It serves as the root component, orchestrating the overall structure and layout.

- package.json: The `package.json` file includes metadata about the project and its dependencies. It also specifies various scripts for tasks such as starting the development server, building the project, etc.

- ... (Other project files and directories): Additional project-specific files and configuration.

This structured approach enhances maintainability, scalability, and collaboration within the codebase.

## Code Styling and Linting

This project follows a set of coding standards and uses various tools to ensure consistent code quality. Below are the key libraries and tools employed:

- **ESLint**: ESLint is a static code analysis tool that helps identify and fix common programming errors and style issues. The project follows the Airbnb style guide to maintain a consistent and clean codebase.

- **Prettier**: Prettier is an opinionated code formatter that enforces consistent code styling. It works seamlessly with ESLint to ensure code is not only correct but also consistently formatted.

- **Husky**: Husky is a Git hook manager that allows you to run scripts before commits and pushes. In this project, Husky is configured to run lint-staged before each commit.

- **Lint-Staged**: Lint-Staged runs linters on pre-committed files. It ensures that only files with staged changes are linted, saving time and focusing on the relevant parts of the codebase.

- **Commitlint**: Commitlint checks if the commit messages meet the conventional commit format. It helps maintain a standardized commit history and facilitates automatic versioning.

- **Conventional Commit**: Conventional Commit is a set of conventional commits for projects. It simplifies the process of writing standardized commit messages following a conventional format.

These tools collectively contribute to the project's maintainability, readability, and collaborative development process.

## Getting Started

### Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) installed on your machine. For optimal compatibility, it's recommended to install Node.js version 18. You can conveniently manage different Node.js versions for various projects using tools like [NVM](https://github.com/nvm-sh/nvm) (Node Version Manager).

### Installation

Clone the repository and install dependencies:

```bash
# Clone the repository or jus unzip the file
git clone https://github.com/DinaTaklit/Frontend.git

# Navigate to the project folder
cd Frontend

# Install dependencies
npm install
```

## Running the App

To run the development server, use the following command:

```bash
npm start
```

Visit http://localhost:3000 in your browser to see the app.

## Testing

The app is tested using Jest for unit testing and React Testing Library for component testing.

To run tests, use the following command:

```bash
npm test
```

@TODO:Provide more details later

## Deployment

The app is deployed on vercel and the live deployment of the app can be found at https://sila-frontend-test.vercel.app/.

@TODO:Provide more details later

## License

@TODO:

This project is licensed under the GNU License.

## Credits
