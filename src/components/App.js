// create your App component here
import React, {useEffect, useState} from "react";

function App(){
    const [dogImage, setImage] = useState(null);

    useEffect( ()=>{
        fetch("https://dog.ceo/api/breeds/image/random").then(
            (r)=>r.json()
            ).then(
                (data)=>{
                    setImage(data.message);
            }
        )
    }, [])
    
    if(dogImage === null) return <p>Loading...</p>
    return(
        <img src={dogImage} alt={'A Random Dog'} />
    )
}

export default App;