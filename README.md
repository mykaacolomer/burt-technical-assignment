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

## How to Run the Tests

### 1. Clone the Repository

### 2. Install Dependencies

Make sure Node.js and npm are installed. Then, install Cypress:
```npm install```

If Cypress is not yet installed:
```npm install cypress --save-dev```

### 3. Open Cypress Test Runner (GUI)
```npx cypress open```
Then select E2E Testing, choose your browser, and run simple_calculator.cy.js.

### 4. Run Tests in Headless Mode (CLI)
```npx cypress run --spec "cypress/e2e/simple_calculator.cy.js"```

This runs the test in headless mode using Electron (default), or you can specify a browser:
```npx cypress run --browser chrome```

---

## Test Suite and Bug Report
Test Suite: https://docs.google.com/spreadsheets/d/1u4JKN4Dn_ZAwtTnMKO-qO8tB14o8O_qRH9OUW0O6utU/edit?usp=sharing
Bug Report: https://docs.google.com/spreadsheets/d/14cNC2rEpfCJAKjSQhqI3mV1knAbBm_IBoBFGF0e9Dmk/edit?usp=sharing
