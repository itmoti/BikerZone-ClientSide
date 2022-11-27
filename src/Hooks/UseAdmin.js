import { useEffect, useState } from "react";

const UseAdmin = email => {
const [isAdmin , setIsSeller] = useState(false)
const [isAdminLoading , setIsAdminLoading] = useState(true)
console.log('dsssssssss' , isAdmin)

useEffect(() => {
    if(email) {
        fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
             setIsSeller(data.IsAdmin)
            
             setIsAdminLoading(false)
        })
    }
  } , [email])

  return [isAdmin , isAdminLoading]
}

export default UseAdmin;