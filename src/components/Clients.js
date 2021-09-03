import React, {useEffect, useState} from "react";
import ClientForm from "./ClientForm";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [countc, setCount] = useState(0);
    const [dec, setDEC] = useState(0);
    //const [edc, setEDC] = useState([]);

    const addClient = async (clientObject) => {
        await addDoc(collection(db, "clientes"), clientObject);
        toast('Nuevo cliente registrado', {
            type: 'success',
            autoClose: 1100,
        });
    };

    const getClients = async () => {
        onSnapshot(collection(db, "clientes"), (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id});
            });
            setClients(docs);
        });
    };

    var getProm = async() => {
        onSnapshot(collection(db, "clientes"), (querySnapshot) => {
            var acumulador = 0;
            var contador = 0;
            querySnapshot.forEach((doc) => {
                //console.log({...doc.data(),id:doc.age});
                var objD = {...doc.data()};
                acumulador += parseInt(objD.age);
                contador ++;
            });
            setCount(acumulador/contador);
        });
    }

    var getDE = async() => {
        onSnapshot(collection(db, "clientes"), (querySnapshot) => {
            var mediac = 0;
            var contador = 0;
            var de = 0; //desviación estandar
            querySnapshot.forEach((doc) => {
                var objDE = {...doc.data()};
                mediac += Math.pow(((parseInt(objDE.age)) - countc), 2);
                contador++;
                de = Math.sqrt(mediac/contador);
            });
            setDEC(de);
        });
    }
/*
    const getEDC = async () => {
        onSnapshot(collection(db, "clientes"), (querySnapshot) => {
            const docsED = [];
            var contador = 0;
            querySnapshot.forEach((doc) => {
                var objED = {...doc.data()};
                mediac += Math.pow(((parseInt(objED.age)) - countc), 2);
                contador++;
                de = Math.sqrt(mediac/contador);
            });
            setClients(docsED);
        });
    };*/

    useEffect(() => {
        getClients();
        getProm();
        getDE();
        //getEDC();
    }, []);

    return (
        <div>
            <h3>Creación de cliente</h3>
            <div><ClientForm addClient={addClient} /></div>
            <br /><br /><br />

            <h3>Lista de clientes</h3> <br />
            <div className="listClientsForm">
                {clients.map((client) => (
                    <div key={client.id}>
                        <p>{client.name + " " + client.last_name}</p>
                    </div>
                ))}
            </div><br /><br />
            <h5>Promedio de edades</h5>
            <div>
                { countc }
            </div> <br /><br />
            <h5>Desviación estándar</h5>
            <div>
                { dec }
            </div> <br /><br /><br />
            <h5>Datos del cliente</h5><br />
            <div className="listClientsForm2">
                {clients.map((client) => (
                    <div key={client.id}>
                        <p> <b>{"Cliente: "}</b> {client.name} {" "} {client.last_name}</p>
                        <p> <b>{"Edad: "}</b> {client.age}</p>
                        <p> <b>{"Fecha de nacimiento: "}</b> {client.date}</p>
                        <p> <b>{"Esperanza de vida: "}</b> </p>
                        <br />
                    </div>
                ))}
            </div><br /><br />
        </div>
    )
};

export default Clients;