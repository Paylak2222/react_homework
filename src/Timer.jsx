import { useEffect, useState } from "react";

export default function (props) {
    const [number, setNumber] = useState(props.start);
    const [stop, setStop] = useState(false);
    useEffect(() => {
        if (!stop) {
            let int = setInterval(() => {
                setNumber(prev => prev - 1)
            }, 1000);
            return () => {
                if (number === 1) {
                    setStop(true);
                }
                clearInterval(int);
            }
        }
    }, [stop, number]);
    return (
        <>
            <h1>Timer:{number}</h1>
            {stop ? <h1>Timer Limited</h1> : null}
        </>
    )
}