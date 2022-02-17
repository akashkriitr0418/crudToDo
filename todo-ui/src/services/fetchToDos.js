        
        
        
const apiUrl = process.env.REACT_APP_API_URL_ToDo;
 
export function fetchToDos (){  
      return  fetch(`${apiUrl}/todos`,{ 
            method: 'get', 
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem("token"), 
                'Content-Type': 'application/json'
            })
        })
    } 