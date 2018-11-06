import React from 'react';
import {render} from 'react-dom';

const Info =({name})=>{
    return(
        <div style={{direction:'rtl',textAlign:'center'}}>
            <h1>اطلاعات</h1>
            <p> نام کاربری شما : {name}</p>
        </div>
    )
}

const authenticatingHOC=(Comp)=>{
    return (props)=>(
        <div style={{direction:'rtl',textAlign:'center'}}>
            {props.isLoggedIn ?(
                <Comp {...props}/>
            ):(
                <p>برای وارد شدن باید لاگین کنید</p>
            )}
        </div>
        
    )
}

const AuthInfo = authenticatingHOC(Info)

render(
    <AuthInfo isLoggedIn={false} name='mojtaba'/>,
    document.getElementById('root')
)