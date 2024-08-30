import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Text, Button, Pagination, Loader } from '@mantine/core';
import { readCasesByDoctor } from '../../firebase/casesController'; // Asegúrate de que la ruta sea correcta
import Header from '../../components/header';
import Footer from '../../components/footer';
import './attentions.css'; // Asegúrate de crear este archivo CSS

const Attentions = () => {
    const { doctorID } = useParams();
    const [attentions, setAttentions] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    const ITEMS_PER_PAGE = 5;

    const searchAttentions = async () => {
        setIsLoading(true);
        try {
            const cases = await readCasesByDoctor(doctorID);
            setAttentions(cases);
            console.log(cases);
        } catch (error) {
            console.error("Error fetching doctor attentions:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        searchAttentions();
    }, [doctorID]); // Dependencia añadida para que se actualice si cambia el doctorID

    const paginatedCases = Object.entries(attentions).slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleViewDetails = (caseId) => {
        navigate(`/case/${caseId}`);
    };

    return (
        <div className="doctorAttentionsPage">
            <Header />
            <div className='attention-page' >
                <h1>Atenciones del Doctor</h1>
                <Text size="lg" mb="md">ID del Doctor: {doctorID}</Text>
                {isLoading ? (
                    <Loader size="xl" className="centered-loader" />
                ) : (
                    <div className="attentionsContent">
                        {paginatedCases.length > 0 ? (
                            <>
                                {paginatedCases.map(([caseId, caseData]) => (
                                    <Card key={caseId} shadow="sm" padding="lg" radius="md" withBorder className="attention-card">
                                        <Card.Section withBorder inheritPadding py="xs">
                                            <Text weight={500}>Caso: {caseId}</Text>
                                        </Card.Section>
                                        <Text size="sm" mt="sm"><b>Fecha:</b> {caseData.date}</Text>
                                        <Text size="sm"><b>Hora:</b> {caseData.time}</Text>
                                        <Text size="sm"><b>ID del Paciente:</b> {caseData.patientID}</Text>
                                        <Text size="sm"><b>Imagen:</b> {caseData.nameImage}</Text>
                                        <Button 
                                            variant="light" 
                                            color="blue" 
                                            fullWidth 
                                            mt="md" 
                                            radius="md"
                                            onClick={() => handleViewDetails(caseId)}
                                        >
                                            Ver Detalles
                                        </Button>
                                    </Card>
                                ))}
                                <Pagination
                                    total={Math.ceil(Object.keys(attentions).length / ITEMS_PER_PAGE)}
                                    page={currentPage}
                                    onChange={setCurrentPage}
                                    mt="xl"
                                />
                            </>
                        ) : (
                            <Text>No se encontraron atenciones para este doctor.</Text>
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Attentions;