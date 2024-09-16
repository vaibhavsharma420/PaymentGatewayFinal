import { useState } from "react";
import "./form.css";

const Form = () =>{
    const [values, setValues] = useState(
        {   school:"",
            address:"",
            name:"",
            email:"",
            namecordi:"",
            numbercordi:"",
            nameescort:"",
            numberescort:"",
            state:"",
            city:""
        });
    
    const change = (e) => {
        const {name, value} = e.target;
        setValues({...values,[name]:value});
    };
    const submit=()=>{
        
    }
    return(
        <>
            <div className="main d-flex justify-content-center align-items-center">
                <div className="card-contact px-3 py-2">
                    <h1>Registration Form</h1>
                    <hr/>
                    <div className="cont-form d-flex flex-column justify-content-between">
                        <div>
                            <h5>Name of the School/College</h5>
                            <input 
                            type="text" 
                            placeholder="Enter The Name" 
                            name="school" 
                            value={values.school}
                            onChange={change}
                            />
                        </div>
                        <div>
                            <h5>Address</h5>
                            <textarea 
                            placeholder="Enter The Address" 
                            name="address" 
                            value={values.address}
                            onChange={change}
                            />
                        </div>
                        <div>
                            <h5>Name of the Principal</h5>
                            <input 
                            type="text" 
                            placeholder="Enter The Name of the Principal" 
                            name="name" 
                            value={values.name}
                            onChange={change}
                            />
                        </div>
                        <div>
                            <h5>Email ID</h5>
                            <input 
                            type="text" 
                            placeholder="Enter Your Email ID" 
                            name="email" 
                            value={values.email}
                            onChange={change}
                            />
                        </div>
                        <div>
                            <h5>Name of the Co-Ordinator</h5>
                            <input 
                            type="text" 
                            placeholder="Enter The Name" 
                            name="namecordi" 
                            value={values.namecordi}
                            onChange={change}
                            />
                        </div>
                        <div>
                            <h5>Contact Number of the Co-Ordinator</h5>
                            <input 
                            type="text" 
                            placeholder="Contact Number" 
                            name="numbercordi" 
                            value={values.numbercordi}
                            onChange={change}
                            />
                        </div>
                        <div>
                            <h5>Name of the Escort Teacher</h5>
                            <input 
                            type="text" 
                            placeholder="Enter The Name" 
                            name="nameescort" 
                            value={values.nameescort}
                            onChange={change}
                            />
                        </div>
                        <div>
                            <h5>Contact Number of the Escort Teacher</h5>
                            <input 
                            type="text" 
                            placeholder="Enter The Contact Number" 
                            name="numberescort" 
                            value={values.numberescort}
                            onChange={change}
                            />
                        </div>
                    </div>
                <div className="imp-data d-flex justify-content-between">
                    <div>
                        <h5>State</h5>
                        <input 
                        id="imp" 
                        type="text" 
                        placeholder="Enter The State" 
                        name="state" 
                        value={values.state}
                        onChange={change}
                        />
                    </div>
                    <div>
                        <h5>City</h5>
                        <input 
                        id="imp" 
                        type="text" 
                        placeholder="Enter The City" 
                        name="city" 
                        value={values.city}
                        onChange={change}
                        />
                    </div>  
                </div>
                <button className="btn btn-primary" onClick={submit}>Submit</button> 
                </div>
            </div>
        </>
    )
}

export default Form; 