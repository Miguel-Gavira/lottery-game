describe('Prove that the balls are selected', () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit('/');
  });

  it('If there is none selected and I click on 5 => 5 appears in the summary', () => {
    cy.get('button').contains('5').click();
    cy.get('section > .balls > :nth-child(5) > button').contains('5');
  });

  it('I select all balls, bet €10, select ok and start the game => A winner message should appear', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('6').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('9').click();
    cy.get('button').contains('10').click();

    cy.get('.amount > .input-box > input').type('10');
    cy.get('button').contains('Ok').click();
    cy.get('button').contains('Place bet').click();

    cy.get('.won').contains('YOU WON');
  });

  it('If I select a ball and bet €3 => a message should appear warning that the minimum bet is €5', () => {
    cy.get('button').contains('1').click();
    cy.get('.amount > .input-box > input').type('3');
    cy.get('button').contains('Ok').click();
    cy.get('p').contains('The minimum bet is €5');
  })
});
