const url = `https://guramrits-portfolio.onrender.com/api`

fetch(url,{
    method: 'GET',
    mode: 'cors',
  }).then(
    (response)=>{
        console.log(response.json())
    }
)