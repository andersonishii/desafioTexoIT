

    function postUser(){
        return cy.request(
            'POST', 'https://jsonplaceholder.typicode.com/users', { name: 'body qualquer' }
        )
    }
   
    
    function putUser(id){
        return cy.request({
            method: 'PUT' ,
            url: `https://jsonplaceholder.typicode.com/users/${id}`,
            body: { 
                'email,': 'teste@teste.com,br',
                'lat': '-33.333' ,
                'lng':'22.222'       }
            })
    }    


export {postUser,putUser};
