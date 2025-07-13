# Cypress Calculator Testing Project

This project uses **Cypress** with the **Page Object Model (POM)** pattern to test a sample web-based calculator:
🔗 https://testpages.eviltester.com/styled/calculator

---

## Tools & Libraries Used

| Tool        | Purpose                                    |
|-------------|--------------------------------------------|
| [Cypress](https://www.cypress.io/) | End-to-end testing framework |
| JavaScript  | Scripting language for Cypress tests       |
| Mocha       | Test runner (bundled with Cypress)         |
| Chai        | Assertion library (bundled with Cypress)   |

---

## Project Structure

cypress/
├── e2e/
│ └── simple_calculator.cy.js # Test cases
├── support/
│ └── pageObjects/
│ └──── CalculatorPage.js # Page Object class
│ └── commands.js
cypress.config.js # Cypress config

---

## How to Run the Tests

### 1. Install Dependencies

Make sure Node.js and npm are installed. Then, install Cypress:
```npm install

If Cypress is not yet installed:
```npm install cypress

### 2. Open Cypress Test Runner (GUI)
```npx cypress open
Then select E2E Testing, choose your browser, and run simple_calculator.cy.js.

### 3. Run Tests in Headless Mode (CLI)
```npx cypress run --spec "cypress/e2e/simple_calculator.cy.js"

This runs the test in headless mode using Electron (default), or you can specify a browser:
```npx cypress run --browser chrome