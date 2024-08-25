import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { FileInput, Button, Input } from "@mantine/core";
import { uploadImage } from "../../../firebase/imageController";
import { v4 } from "uuid";
import './inicio.css';
import { readPatient } from "../../../firebase/patientController";
import { validateMedicalCode } from "../../validators/validator";
import { set } from "firebase/database";

const Inicio = () => {
    const [file, setFile] = useState(null);
    const [namePatient, setNamePatient] = useState("");
    const [agePatient, setAgePatient] = useState("");
    const [genderPatient, setGenderPatient] = useState("");
    const [phonePatient, setPhonePatient] = useState("");
    const [emailPatient, setEmailPatient] = useState("");
    const [patientID, setPatientID] = useState("");
    const [error, setError] = useState("");
    const [searchImage, setSearchImage] = useState(false);

    const handleUpload = () => {
        if (file) {
            uploadImage(file, 'user', v4());
        } else {
            alert("Por favor, selecciona un archivo primero.");
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        try{
            const data = await readPatient(patientID);
            if(data){
                setNamePatient(data.firstName + " " + data.secondName + " " + data.firstLastName + " " + data.secondLastName);
                setAgePatient(data.age);
                setGenderPatient(data.gender);
                setPhonePatient(data.phone);
                setEmailPatient(data.email);
                setSearchImage(true);
            }
            else{
                setNamePatient("");
                setAgePatient("");
                setGenderPatient("");
                setPhonePatient("");
                setEmailPatient("");
                alert("Patient not found");
                setSearchImage(false);
            }
        }
        catch(error){
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const { value } = event.target;
        setPatientID(value);

        // Validar el campo cuando cambia
        if (!validateMedicalCode(value)) {
            setError('Código médico inválido');
        } else {
            setError('');
        }
    };

    return (
        <div className="home">
            <Header />
            <div className="home-container">
                <div className="home-header">
                    <h1>Breast Cancer Detection</h1>
                    <p>
                        This project aims to assist in the early detection of breast cancer
                        through the analysis of mammograms using machine learning algorithms.
                    </p>
                </div>
                <div className="home-content">
                    <div className="home-form">
                        <h2>Patient Information</h2>
                        <form className="home-form-dni" onSubmit={handleSearch}>
                            <Input.Wrapper label="Patient's ID" error={error} style={{marginBottom:'0.5rem'}}>
                                <Input placeholder="Enter ID" value={patientID} onChange={handleChange} />
                            </Input.Wrapper>
                            <Button type="submit" color="blue">Search</Button>
                        </form>
                        <form className="home-form-info">
                            <Input.Wrapper label="Patient's Details">
                                <Input placeholder="Full Name" disabled  className="form-input" value={namePatient} />
                                <Input placeholder="Age" disabled className="form-input" value={agePatient}/>
                                <Input placeholder="Gender" disabled className="form-input" value={genderPatient}/>
                                <Input placeholder="Phone" disabled className="form-input" value={phonePatient}/>
                                <Input placeholder="Email" disabled className="form-input" value={emailPatient}/>
                            </Input.Wrapper>
                        </form>
                        <div className="home-form-upload">
                            <FileInput
                                clearable
                                accept="image/png,image/jpeg,image/webp,image/jpg"
                                placeholder="Select file"
                                radius="md"
                                onChange={setFile}
                                disabled={!searchImage}
                            />
                        </div>
                    </div>
                    <div className="home-preview">
                        <h2>Image Preview</h2>
                        <div className="home-preview-image">
                            {file && (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Preview"
                                    className="preview-img"
                                />
                            )}
                            {!file && (
                                <p>No image selected</p>
                            )}
                        </div>
                    </div>
                    <div className="home-upload" style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center'}}>
                        <Button onClick={handleUpload} disabled={!searchImage} style={{width:'50%'}}>
                            Upload Image
                        </Button>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Inicio;