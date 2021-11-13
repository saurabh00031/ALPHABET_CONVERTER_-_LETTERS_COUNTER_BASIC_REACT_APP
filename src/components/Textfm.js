
// Type rfc => for react function based component //


import React,{useState}  from 'react'



// const [count,setCount]=useState(0);      //react hooks 

export default function Textfm(props) {


    const clickspUp=()=>
    {
          console.log("Uppercase here\n" + text);
          setText("you have clicked on function upper\n")
          let newT=text.toUpperCase();
          setText(newT);
    }


    const clickspLw=()=>
    {
          console.log("Uppercase here\n" + text);
          setText("you have clicked on function upper\n")
          let newT=text.toLowerCase();
          setText(newT);
    }

    const handleOnChange=(event)=>
    {
        console.log("Changed") ;
        setText(event.target.value)
    }
    const [text,setText]=useState('Enter the text');

    return (

        <div>

 <div className="container mt-5">
     {/*
    <h1>{props.heading}</h1>
    <div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name"/>
</div>
 <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>  */}

<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1"  className="form-label"><h1>ALPHABER_CONVERTERS</h1></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>


<button className="btn btn-primary" onClick={clickspUp}>
Convert Upper to lower
</button>

<button className="btn btn-secondary" onClick={clickspLw}>
Convert Lower To Upper
</button>


</div>

        </div>
    )
}

