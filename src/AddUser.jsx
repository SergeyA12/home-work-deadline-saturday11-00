import {useState } from "react"

export const AddUser = ({onAdd,users})=>{
    const[user,setUser]= useState({id:"", name:"",surname:"", login:"",password:""})
    const [error,setError]=useState()
    const [ok,setOk] = useState()
    const handleSumbit = e=>{
        e.preventDefault()
        if(!user.name.trim()){
            return setError("Name must be declerete")
        }
        if(!user.surname.trim()){
            return setError("Surname must be declerete")
        }
        if(!user.login.trim()){
            return setError("login must be declerete")
        }else{
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(user.login)){
                return setError("Please enter a valid email address");
            }else if(users.some(e=>e.login==user.login)){
                return setError("login is already declerete")
            }
        }
        if(!user.password.trim()){
            return setError("Surname must be declerete")
        }else if(user.password.length < 6){
            return setError("password should be a little longer")
        }
        onAdd(user)
        setOk("You are registered")
        setError("")
        setTimeout(() => {
            setOk(""),setUser({name:"",surname:"", login:"",password:""})
        }, 3000);
    }

    return <div>
        <h3>Add User</h3>
        <form action="" onSubmit={handleSumbit}>
            {error && <p style={{color:"red"}}>{error}</p>}
            {ok && <p style={{color:"green"}}>{ok}</p>}
            <label>name</label>
            <input type="text" placeholder="Your name" value ={user.name} onChange={e=>(setUser({...user,name:e.target.value}))}/>
            <label>surname</label>
            <input type="text" placeholder="Your surname" value ={user.surname} onChange={e=>(setUser({...user,surname:e.target.value}))}/>
            <label>login</label>
            <input type="text" placeholder="enter Your email" value ={user.login} onChange={e=>(setUser({...user,login:e.target.value}))}/>
            <label>password</label>
            <input type="text" placeholder="create a password(must be min 6 item)" value ={user.password} onChange={e=>(setUser({...user,password:e.target.value}))}/>
            <button>save</button>
        </form>
    </div>
}