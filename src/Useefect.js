import React, {useState, useEffect,} from 'react'

function Useefect() {
    const [Count, setCount] = useState(0);


    useEffect(() => {
	    setCount((Count) => Count + 1)
    }, [])
    // we have specified a function in the dependency array

    return (
	<div>
            <p>value of count: {Count}</p>
            
	</div>
    )
}

export default Useefect