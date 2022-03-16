describe('Counter', () => {

	it('click + then -', () => {
		cy.visit('http://localhost:3000')

		cy.get('button')
			.contains('+').click()

		cy.get('p')
			.should('contain', "1")

		cy.get('button')
			.contains('-').click()

		cy.get('p')
			.should('contain', "0")
	})

})
