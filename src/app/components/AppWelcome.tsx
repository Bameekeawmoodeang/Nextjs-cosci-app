export default function Appwelcome(){
    const title = 'Welcome to cosci';
    const curentYear = <p>2025</p>;
    const isShow = true;


    return (
    <> 
        <p>{title.toUpperCase()}</p>
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