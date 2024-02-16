import React,{useState} from 'react'

function ShowContact() {
     return (
          <div>
               <div
                    style={{
                         marginTop: "15px",
                         backgroundColor: "rebeccapurple",
                         height: "10rem",
                         width: "27em",
                    }}
               >
                    <div
                         style={{
                              display: "flex",
                              justifyContent: "space-between",
                              paddingLeft: "10px",
                              paddingRight: "10px",
                         }}
                    >
                         <p style={{ fontSize: "15px", color: "white" }}></p>

                         <div>
                              <p style={{ fontSize: "15px", color: "white" }}></p>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default ShowContact
