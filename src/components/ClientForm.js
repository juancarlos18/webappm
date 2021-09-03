import React, {useState} from "react";

const ClientForm = (props) => {
    const initialStateValues = {
        name: '',
        last_name: '',
        age: '',
        date: ''
    };

    const [values, setValues] = useState(initialStateValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addClient(values);
        setValues({...initialStateValues})
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">account_circle</i>
                </div>
                <input type="text" className="form-control" placeholder="Nombre" name="name" onChange={handleInputChange} value={values.name} />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">account_circle</i>
                </div>
                <input type="text" className="form-control" placeholder="Apellido" name="last_name" onChange={handleInputChange} value={values.last_name} />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">create</i>
                </div>
                <input type="text" className="form-control" placeholder="Edad" name="age" onChange={handleInputChange} value={values.age} />
            </div>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">date_range</i>
                </div>
                <input type="text" className="form-control" placeholder="Fecha de nac. Ej: 28/07/1990" name="date" onChange={handleInputChange} value={values.date} />
            </div>

            <button className="btn btn-primary btn-block">Registrar</button>
        </form>
    )
}

export default ClientForm;