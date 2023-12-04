import React, { useState } from "react";

function PracticeAll(){

    const [addcart, setAddCart] = useState({
        firstItem: 'Beta vella',
        secItem: 'Yardley',
        thirdItem: 'Denver',
        fourItem: 'Colin',
      });
   


    return(
        <>
  
        <h3>Mist Mart</h3>
        <div style={{ backgroundColor: 'lightpink', border: '2px solid purple', width: '20%', padding: '20px' }}>
        <ul>
          <h6>Select item to add into cart</h6>
          <li>{addcart.firstItem}</li>
          <li>{addcart.secItem}</li>
          <li>{addcart.thirdItem}</li>
          <li>{addcart.fourItem}</li>
        </ul>
      </div>
              <br/>
        <button style={{display: 'flex', justifyItems: 'left'}} type="submit">Add to Card</button>
        <br/>
        <div style={{ backgroundColor: 'lightpink', border: '2px solid purple', width: '20%', padding: '20px'}}>
        <h6>Selected Items</h6>
        </div>
        <br/>
        <button type="submit" style={{display: 'flex', justifyItems: 'left'}}> Proceed to pay</button>
        <h6 style={{display: 'flex', justifyItems: 'left'}}>Select only one item to pay at a time</h6>
        <br/>
        <div style={{ backgroundColor: 'lightpink', border: '2px solid purple', width: '20%', padding: '20px'}}>
        <h6>One selected item</h6>
        </div>
        </>
    );

}
export default PracticeAll;