export default class Authservice{
  async login(userId,password){
    return customFetch(
      '/login',
      {method : "POST",
       body :JSON.stringify({userId,password}),
      })        
    }
  async signup(userId,password,name,email){
    return customFetch(
      '/signup',
      {method : "POST",
       body :JSON.stringify({userId,password,name,email}),
      })        
    }
  async me(token){
    return customFetch(
      '/me',
      {method : "GET",
      headers: {"Authorization":`Bearer ${token}`},
      })
    }
  async logout(){
    localStorage.clear()
    }
  }

async function customFetch(url,options){
  const res = await fetch(`http://localhost:8080/auth${url}`, {
    ...options,
    headers: {...options.headers,"Content-Type":"application/json"}, 
    redirect:"follow"})
  
  let data = await res.json();
  if (res.status>299) {
    const error = new Error(res.message);
    data = undefined;
    throw error;    
  };
  localStorage.setItem('token',data.token)
  console.log('fetch결과',data)
  return data
}
  

