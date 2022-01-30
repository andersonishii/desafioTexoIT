describe('Validação de JSON photos', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('Validar Objeto 6 do json photo', () => {
    cy.get('a[href="/guide"]').contains('Guide').click()
    cy.url().should('include', '/guide/')
    cy.get('a[href="/albums/1/photos"]').contains('/albums/1/photos').click()
    cy.url().should('include', '/albums/1/photos')
    cy.log('teste')
    cy.get('pre').invoke('text').then(jsonText => {
      var jsonData = JSON.parse(jsonText)
      cy.log(jsonData[5].id)
      expect(jsonData[5].id).to.not.be.null
      expect(jsonData[5]).property('id').to.not.be.oneOf([null, ""])
      expect(jsonData[5]).property('albumId').to.equal(1)
      expect(jsonData[5]).property('id').to.equal(6)
      expect(jsonData[5]).property('title').to.equal("accusamus ea aliquid et amet sequi nemo")
      expect(jsonData[5]).property('url').to.equal("https://via.placeholder.com/600/56a8c2")
      expect(jsonData[5]).property('thumbnailUrl').to.equal("https://via.placeholder.com/150/56a8c2")
    });

  })

})
