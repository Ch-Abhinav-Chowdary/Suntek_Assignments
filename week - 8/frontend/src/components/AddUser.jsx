import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";
import { useState } from "react";
import userService from "../services/userService";

function AddUser() {
    const {register,
        handleSubmit ,
        formState:{errors},
    } = useForm();


    let [error,setError]=useState(null);
    let [loading,setLoading]=useState(false);
    let navigate=useNavigate();
    //form submit
    const onUserCreate=(newUser)=>{
        //console.log(newUser);
        setLoading(true)
        //create user in local storage
        try{
            const result = userService.createUser(newUser);

            if(result.success){
                //user created navigate to user list page
                navigate("/userslist")
            }
            //if error in creating user show error message
            else{
                throw new Error(result.error || "Error in creating user")
            }
        }
        catch (err) {
      console.log(err)
      setError(err);
    } finally {
      setLoading(false);
    }
    };
    if (loading) {
    return <p className="text-center text-orange-400 text-3xl"> Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-400 text-3xl"> {error.message}</p>;
  }
  return (
    <div className="text-center">
        <h1 className="text-5xl text-gray-600">Add New User</h1>
        {/**create user form */}
        
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onUserCreate)}>
            <input type="text" placeholder="name" className="border-2 border-gray-400 p-2 w-2xl rounded-md" {...register("name",{required:true})}/>
            {errors.name && <span className="text-red-500">This field is required</span>}
            <input type="email" placeholder="email" className="border-2 border-gray-400 p-2 w-2xl rounded-md" {...register("email",{required:true})}/>
            {errors.email && <span className="text-red-500">This field is required</span>}
            <input type="date" placeholder="date of birth" className="border-2 border-gray-400 p-2 w-2xl  rounded-md" {...register("dateOfBirth",{required:true})}/>
            {errors.dateOfBirth && <span className="text-red-500">This field is required</span>}
            <input type="number" placeholder="mobile number" className="border-2 border-gray-400 p-2  w-2xl rounded-md" {...register("mobileNumber",{required:true})}/>
            {errors.mobileNumber && <span className="text-red-500">This field is required</span>}
            <button type="submit" className="bg-blue-500 text-white p-2 w-2xl rounded-md" disabled={loading}>Submit</button>
        </form>
    </div>
  )
}

export default AddUser