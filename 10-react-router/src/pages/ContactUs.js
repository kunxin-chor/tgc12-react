import React, {useState} from 'react'
import { useHistory }from 'react-router-dom';

export default function ContactUs() {

    // create a history hook
    // DO NOT EVER PUT THIS LINE IN A if!!
    const history = useHistory();

    // add two state variables to this component

    const [formState, setFormState] = useState({
        "fullname":"",
        "email":""
    });

    const updateFormField = (e) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    function submitForm(){
        history.push('/form-submitted',{
            'formState':formState
        })
    }

    return <React.Fragment>
        <h1>Contact Us</h1>
        <div>
            <div>
                <label className="form-label">Full Name</label>
                <input type="text" name="fullname" value={formState.fullname} className="form-control" onChange={updateFormField}/>
            </div>
            <div>
                <label className="form-label">Email</label>
                <input type="text" name="email" className="form-control" value={formState.email} onChange={updateFormField}/>
            </div>
            <button className="btn btn-primary my-3" onClick={submitForm}>Submit</button>
        </div>

    </React.Fragment>
}