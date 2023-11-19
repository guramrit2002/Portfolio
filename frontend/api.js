const url = `http://127.0.0.1:4000/api`

fetch(url,{
    method: 'GET',
    mode: 'cors',
  }).then(
    (response)=>{
        console.log(response.json())
    }
)