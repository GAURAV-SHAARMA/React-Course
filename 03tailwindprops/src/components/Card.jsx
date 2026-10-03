import React from 'react'
//rfc ->> shortcut for snippet

// export default function Card(props) {
    //react called it props not me
    // console.log(props.username);


export default function Card({username , btnText="Visit"}) {// we can write it directly 
    //Bydefault value of btnText if not passed in properties
    console.log(username);
  return (
    <div
        className="flex flex-col rounded-xl  p-4"
        style={{
          border: "0.88px solid",

          backdropFilter: "saturate(180%) blur(14px)",
          background: " #ffffff0d",
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="350"
            height="350"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{username}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{btnText || Visit}</p>
            {/* if not passed btnText then show visit */}
            <p>0.01</p>
          </div>
        </div>
      </div>
  )
}
