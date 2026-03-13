import { useEffect, useRef, useState } from "react"

const Example = () => {
    const [count, setcount] = useState(0);
    const prevCount = useRef();

    useEffect(()=>{
        prevCount.current = count;
    },[count]);
    return (
        <div>
            <h1>Current Count: {count}</h1>
            <h1>Previous Count: {prevCount.current}</h1>
            <button onClick={()=>setcount(count+1)}>Increment</button>
        </div>
    )
}

export default Example;