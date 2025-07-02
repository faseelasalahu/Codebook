function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"))
        const cbid = JSON.parse(sessionStorage.getItem("cbid"))

        return {token, cbid}
}



export async function getUser(){
        const browseData = getSession()
        const requestOption = {
             method : "GET",
            headers : {"Content-Type":"application/json",Authorization:`Bearer ${browseData.token}`}
        }

        const response = await fetch(`http://localhost:8000/600/users/${browseData.cbid}`,  requestOption)
          if(!response.ok){
            throw {message: response.statusText, status:response.status}
      }
        const data = await response.json()
          return data;
           
        
    
}

export async function getUserOrder(){
     const browseData = getSession()
    const requestOption= {
              method : "GET",
            headers : {"Content-Type":"application/json",Authorization:`Bearer ${browseData.token}`}
    }
    const response = await fetch(`http://localhost:8000/660/orders?user.id=${browseData.cbid}`,requestOption )
        if(!response.ok){
            throw {message: response.statusText, status:response.status}
      }
        const data = await response.json()
        return data;
    
}

export async function createOrder(cartList, total, user){
     const browseData = getSession()
    
     const order ={
        cartList : cartList,
        amount_paid : total,
        quantity : cartList.length,
        user:{
            name: user.name,
            email: user.email,
            id:user.id
            
        }
    }
        const requestOption = {
             method :"POST",
        headers :{"Content-Type": "application/json", Authorization: `Bearer ${ browseData.token}`},
        body :JSON.stringify(order)
        }
    
       const response = await fetch("http://localhost:8000/660/orders", requestOption)
       if(!response.ok){
            throw {message: response.statusText, status:response.status}
      }
       const data = await response.json()
       return data; 
    }
