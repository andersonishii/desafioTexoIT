

function getCommentByID(commentID){
return cy.request({
    method: 'GET' ,
    url: `https://jsonplaceholder.typicode.com/comments/${commentID}`,
    })
}

function getSpecifComment(atribute,text){
    const concatString=`?+${atribute}=${text}`;
    return cy.request({
        method: 'GET' ,
        url: `https://jsonplaceholder.typicode.com/comments/?${concatString}`,
  
    })
}


function getAllComment(){
    return cy.request({
        method: 'GET' ,
        url: `https://jsonplaceholder.typicode.com/comments/`,
    })
}

 


export {getCommentByID,getAllComment,getSpecifComment};
