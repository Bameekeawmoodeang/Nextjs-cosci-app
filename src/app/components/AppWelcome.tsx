'use client'

export default function Appwelcome(){
    const title = 'Welcome to cosci';
    const curentYear = <p>2025</p>;
    const isShow = true;
    const handleClick = () => {
        alert('Hello Typescript');
    }


    return (
    <> 
        <p>{title.toUpperCase()}</p>
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
