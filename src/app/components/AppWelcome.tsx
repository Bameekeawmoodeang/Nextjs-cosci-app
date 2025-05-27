'use client'

import { Button } from "@/components/ui/button";
import { useState } from "react";

type AppWelcomeProps = {
    headTitle: string;
    isShow: boolean;
}

export default function Appwelcome({headTitle, isShow}: AppWelcomeProps){
    // let title = 'Welcome to cosci';
    const [title,setTitle] = useState('Welcome to cosci');
    const curentYear = <p>2025</p>;
    const handleClick = () => {
        // title = 'Welcome to SWU';
        setTitle('Welcome to SWU');
        // alert('Hello Typescript');
    }


    return (
    <> 
        <h1>{headTitle}</h1>
        <p>{process.env.NEXT_PUBLIC_APP_NAME}</p>
        <p>{title.toUpperCase()}</p>
        <Button onClick={handleClick}>Click me</Button>
        <button className="bg-blue-700 p-3 m-3 text-white rounded-lg" onClick={handleClick}>กดได้เลย!</button>
        {curentYear}
        {
            isShow && <p>Date: 10/10/1998</p>
        }
        {
            isShow ? <p>Hello Next.js</p> : <p>Hello JavaScript</p>
        }
    </>
    );
}
