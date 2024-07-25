import React from "react";
import { PiUserCircle } from "react-icons/pi";
import { useSelector } from "react-redux";

const Avatar=({userId,name,imageUrl,width,height})=>{
   const onlineUser=useSelector(state=>state?.user?.onlineUser)
    let avatarName=""

    if(name){
        const splitName=name.split(" ")
        if(splitName.length>1)
            {
                avatarName=splitName[0][0] + splitName[1][0]
            }
            else{
                avatarName=splitName[0][0] 
            }
    }
    const bgColor=[
        'bg-teal-400',
        'bg-sky-500',
        'bg-fuchsia-500',
        'bg-rose-700',
        'bg-green-500',
        'bg-red-300',
        'bg-yellow-300',
        'bg-lime-500',
        'bg-amber-100',
        'bg-pink-500'
    ]
    const randomNumber=Math.floor(Math.random()*10)

    const isOnline=onlineUser.includes(userId)
   return(
    <div className={`text-slate-800  rounded-full font-bold relative`} style={{width:width+ "px",height:height +"px"}}>
        {
            imageUrl?(
                <img 
                src={imageUrl}
                width={width}
                height={height}
                alt={name}
                />
            ):(
                name?(
                    <div style={{width:width+ "px",height:height +"px"}} className={`overflow-hidden rounded-full flex justify-center items-center text-lg ${bgColor[randomNumber]}`}>
                         {avatarName}
                        </div>
                ):(
                    <PiUserCircle  
                    size={width}/>
                )
            )
        }
            {
                isOnline && (     
                <div className="bg-green-600 p-1 absolute bottom-2 -right-1 z-10 rounded-full"></div>
            )
            }
   
    </div>
   ) 
}
export default Avatar