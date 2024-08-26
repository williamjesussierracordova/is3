import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { FileInput, Button, Input } from "@mantine/core";
import { uploadImage } from "../../../firebase/imageController";
import { v4 } from "uuid";
import './inicio.css';
import { readPatient } from "../../../firebase/patientController";
import { validateMedicalCode } from "../../validators/validator";
import { Loader } from "@mantine/core";
import { writeCases } from "../../../firebase/casesController";

const Inicio = () => {
    const [file, setFile] = useState(null);
    const [namePatient, setNamePatient] = useState("");
    const [agePatient, setAgePatient] = useState("");
    const [genderPatient, setGenderPatient] = useState("");
    const [phonePatient, setPhonePatient] = useState("");
    const [emailPatient, setEmailPatient] = useState("");
    const [patientID, setPatientID] = useState("");
    const [patientID2, setPatientID2] = useState("");
    const [error, setError] = useState("");
    const [searchImage, setSearchImage] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const now = new Date();
    const date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    const handleUpload = () => {
        setIsUploading(true);
        try{
            if (file) {
                uploadImage(file, patientID2, file.name);
                writeCases(v4(), patientID2, "11111111", date,time, file.name);
                setIsUploading(false);
                alert("Imagen subida correctamente.");
            } else {
                setIsUploading(false);
                alert("Por favor, selecciona un archivo primero.");
            }
        }
        catch(error){
            setIsUploading(false);
            console.error(error);
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFile(null);
        try{
            const data = await readPatient(patientID);
            if(data){
                setIsLoading(false);
                setNamePatient(data.firstName + " " + data.secondName + " " + data.firstLastName + " " + data.secondLastName);
                setAgePatient(data.age);
                setGenderPatient(data.gender);
                setPhonePatient(data.phone);
                setEmailPatient(data.email);
                setPatientID2(data.patientID);
                setSearchImage(true);
            }
            else{
                setIsLoading(false);
                setNamePatient("");
                setAgePatient("");
                setGenderPatient("");
                setPhonePatient("");
                setEmailPatient("");
                setPatientID2("");
                alert("Patient not found");
                setSearchImage(false);
            }
        }
        catch(error){
            setIsLoading(false);
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const { value } = event.target;
        setPatientID(value);

        // Validar el campo cuando cambia
        if (!validateMedicalCode(value)) {
            setError('Patient ID not valid');
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
                            <Button type="submit" color="blue">
                                {isLoading ? <Loader color="white" size="lg" type="dots" /> : "Search"}
                            </Button>
                        </form>
                        <form className="home-form-info">
                            <Input.Wrapper label="Patient's Details">
                                <Input placeholder="Full Name" disabled  className="form-input" value={namePatient} />
                                <Input placeholder="Age" disabled className="form-input" value={agePatient}/>
                                <Input placeholder="Gender" disabled className="form-input" value={genderPatient}/>
                                <Input placeholder="Phone" disabled className="form-input" value={phonePatient}/>
                                <Input placeholder="Email" disabled className="form-input" value={emailPatient}/>
                                <Input placeholder="patient's ID" disabled className="form-input" value={patientID2}/>
                            </Input.Wrapper>
                        </form>
                        <div className="home-form-upload">
                            <FileInput
                                clearable
                                accept="image/png,image/jpeg,image/webp,image/jpg"
                                placeholder="Select file"
                                radius="md"
                                onChange={setFile}
                                value={file}
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
                        <div className="home-upload" style={{display:'flex',width:'100%',alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
                            <Button onClick={handleUpload} disabled={!file || !searchImage} style={{width:'100%'}}>
                                {isUploading ? <Loader color="white" size="lg" type="dots" /> : "Upload"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Inicio;