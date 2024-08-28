import { useParams } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { readCases } from "../../firebase/casesController";
import { useEffect, useState} from "react";
import Loader from "../loader/loader";
import { downloadImage } from "../../firebase/imageController";

const Cases = () => {
    const { idCase } = useParams();
    const [caseData, setCaseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [doctorID, setDoctorID] = useState("");
    const [patientID, setPatientID] = useState("");
    const [nameImage, setNameImage] = useState("");
    const [url, setUrl] = useState("");
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await readCases(idCase);
                setCaseData(data);
                setDate(data.date);
                setTime(data.time);
                setDoctorID(data.doctorID);
                setPatientID(data.patientID);
                setNameImage(data.nameImage);
                setUrl(await downloadImage(data.patientID, data.nameImage));
            } catch (error) {
                console.error("Error loading case data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [idCase]);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="cases-page">
            <Header />
            <h1>Cases</h1>
            <p>Case ID: {idCase}</p>
            {caseData ? (
                <div>
                    <p>Date: {date}</p>
                    <p>Time: {time}</p>
                    <p>Doctor ID: {doctorID}</p>
                    <p>Patient ID: {patientID}</p>
                    <p>Name Image: {nameImage}</p>
                    <img src={url} alt="Case" style={{maxWidth:'200px'}}/>
                </div>
            ) : (
                <p>No data available for this case.</p>
            )}
            <Footer />
        </div>
    );
}

export default Cases;