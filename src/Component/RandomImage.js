import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function RandomImage() {
  const [images, setImages] = useState('');

  useEffect(() => {
    fetch('https://picsum.photos/500')
      .then((response) => {
        setImages(response.url);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
        alert("Unable to fetch API");
      });
  }, []);

  return (
    <div>
      {images && (
        <div>
          <img style={{width: '20%'}} src={images} alt="Random" />
        </div>
      )}

      <Button >WhatsApp</Button>
      <Button> Facebook</Button>
      <Button >Twitter</Button>
    </div>
  );
}

export default RandomImage;
