import calculatorPage from '../support/pageObjects/CalculatorPage';

describe('Simple Calculator Page Tests', () => {
    beforeEach(() => {
        calculatorPage.visit();
    });

    it('navigates to the page', () => {
        cy.url().should('include', 'calculator');
        calculatorPage.getTitle().should('contain','Simple Calculator');
    });

    it('contains input fields, operation, and answer', () => {
        calculatorPage.getInputA().should('be.visible');
        calculatorPage.getInputB().should('be.visible');
        calculatorPage.getOperationDropdown().should('be.visible');
        calculatorPage.getAnswer().should('be.visible');
    });

    it('adds two positive integers correctly', () => {
        calculatorPage.calculateAndAssert(5,3,"plus");
    })

    it('subtracts two positive integers correctly', () => {
        calculatorPage.calculateAndAssert(5,3,"minus");
    })

    it('multiplies two positive integers correctly', () => {
        calculatorPage.calculateAndAssert(5,3,"times");
    })

    it('divides two positive integers correctly', () => {
        calculatorPage.calculateAndAssert(6,3,"divide");
    })
});