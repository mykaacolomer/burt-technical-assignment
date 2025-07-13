class CalculatorPage {
    visit() {
      cy.visit('https://testpages.eviltester.com/styled/calculator');
    }

    getTitle() {
        return cy.get('h1');
    }
  
    getInputA() {
      return cy.get('#number1');
    }
  
    getInputB() {
      return cy.get('#number2');
    }
  
    getOperationDropdown() {
      return cy.get('#function');
    }
  
    getAnswer() {
      return cy.get('#answer');
    }
  
    clickCalculate() {
      cy.get('#calculate').click();
    }
  
    inputNumbers(inputA, inputB) {
      this.getInputA().clear().type(inputA);
      this.getInputB().clear().type(inputB);
    }
  
    selectOperation(op) {
      this.getOperationDropdown().select(op);
    }

    // Assertion method to check if the result matches the expected output
    assertAnswerIs(expected) {
      this.getAnswer().should('have.text', expected);
    }
    
    /* Method to perform calculation and assert by computing the expected 
    result based on the operation */ 
    calculateAndAssert(inputA, inputB, op) {
      this.inputNumbers(inputA, inputB);
      this.selectOperation(op);
      this.clickCalculate();

      let result;
      switch(op) {
        case "plus":
            result = inputA + inputB;
            break;
        case "minus":
            result = inputA - inputB;
            break;
        case "times":
            result = inputA * inputB;
            break;
        case "divide":
            result = inputA / inputB;
            break;
        default: 
            result = "ERR";
      }

      this.assertAnswerIs(result);
    }
  }
  
  export default new CalculatorPage();
  