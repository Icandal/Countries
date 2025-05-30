import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';
import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = () => {
    const { name } = useParams();
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();
    
    console.log(country)

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0])).catch(error => console.error('Error fetching country', error))
    }, [name])

    const handleGoBack = () => {
        navigate(-1);
    };
    

    return (
        <div>
        <Button onClick={handleGoBack}>
            <IoArrowBack /> Back
        </Button>
        {country && (
            <Info  {...country}/>
        )}
        </div>
    )
}