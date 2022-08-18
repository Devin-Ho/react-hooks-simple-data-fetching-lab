// create your App component here

import { useEffect, useState } from "react";

function App () {
  const [image, setImage] = useState (null)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((resp) => resp.json())
    .then((data) => {
      setImage(data.message)
    })
  }, []);
  //use an empty dependencies array, so we can only run the fetch request once 
  
  if (!image) return <h3>Loading...</h3>;

  return <img src = {image} alt = "A Random Dog" />;
}

export default App;