import * as requestUser from '../Request/userAPI.js'

describe('API User' , () => { 
    it('POST User', () => {
        requestUser.postUser().should((response) => {
            expect(response).property('status').to.equal(201)
            expect(response.body.id).to.equal(11);
        })
           
    })

    it('PUT User 5', () => {
        requestUser.putUser(5).should((response) => {
            expect(response).property('status').to.equal(200)
            })
        })
    })
