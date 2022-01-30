import * as requestComment from '../Request/commentsAPI.js'

describe('API Comment' , () => {
    it('Retornar todos atributos nome = alias odio sit ', () => {
    requestComment.getSpecifComment('name','alias+oiddio+sit').should((response) => {
            expect(response).property('status').to.equal(200)
            expect(response.body[0].email).to.equal('Eliseo@gardner.biz');
        })
    })
})
