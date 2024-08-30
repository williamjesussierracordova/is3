import './search.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import { Button, Input, Loader, Card, Text, Pagination, Container } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateMedicalCode } from '../validators/validator'
import { readPatient } from '../../firebase/patientController'
import { readCasesByPatient } from '../../firebase/casesController'

const Search = () => {
    const { t } = useTranslation();
    const [patientID, setPatientID] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isIDValid, setIsIDValid] = useState(false);
    const [casesPatient, setCasesPatient] = useState({});
    const [searchPerformed, setSearchPerformed] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const ITEMS_PER_PAGE = 5;

    const handleChange = (event) => {
        const { value } = event.target;
        setPatientID(value);

        if (!validateMedicalCode(value)) {
            setIsIDValid(false);
            setError('Patient ID not valid');
        } else {
            setIsIDValid(true);
            setError('');
        }
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSearchPerformed(true);
        setCurrentPage(1);
        try {
            const data = await readPatient(patientID);
            if (data) {
                const cases = await readCasesByPatient(patientID);
                setCasesPatient(cases);
                console.log(cases);
            } else {
                alert("Patient not found");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleViewDetails = (caseId) => {
        navigate(`/case/${caseId}`);
    }

    const paginatedCases = Object.entries(casesPatient).slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <div className="searchPage">
            <Header />
                <div className='searchForm'>
                    <form className="home-form-dni" onSubmit={handleSearch}>
                        <Input.Wrapper label={t('home:form:label')} error={error} style={{marginBottom:'0.5rem'}}>
                            <Input placeholder={t('home:form:placeholder')} value={patientID} onChange={handleChange} />
                        </Input.Wrapper>
                        <Button type="submit" color="blue" disabled={!isIDValid || isLoading}>
                            {isLoading ? <Loader color="white" size="sm" /> : t('home:form:button')}
                        </Button>
                    </form>
                </div>
                <div className='searchResults'>
                    <h1>Search Results</h1>
                    <div className='searchResultsContent'>
                        {searchPerformed && (
                            paginatedCases.length > 0 ? (
                                <>
                                    {paginatedCases.map(([caseId, caseData]) => (
                                        <Card key={caseId} shadow="sm" padding="lg" radius="md" withBorder className="case-card">
                                            <Card.Section withBorder inheritPadding py="xs">
                                                <Text weight={500}>Caso: {caseId}</Text>
                                            </Card.Section>
                                            <Text size="sm" mt="sm"><b>Fecha:</b> {caseData.date}</Text>
                                            <Text size="sm"><b>Hora:</b> {caseData.time}</Text>
                                            <Text size="sm"><b>ID del Doctor:</b> {caseData.doctorID}</Text>
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
                                        total={Math.ceil(Object.keys(casesPatient).length / ITEMS_PER_PAGE)}
                                        page={currentPage}
                                        onChange={setCurrentPage}
                                        mt="xl"
                                    />
                                </>
                            ) : (
                                <Text>No se encontraron casos para este paciente.</Text>
                            )
                        )}
                    </div>        
                </div>
            
            <Footer />
        </div>
    )
}

export default Search;