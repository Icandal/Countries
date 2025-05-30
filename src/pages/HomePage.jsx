import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { ALL_COUNTRIES } from '../config';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

export const HomePage = ({countries, setCountries}) => {
    const navigate = useNavigate();
    const [filtredCountries, setFiltredCountries] = useState(countries);
    
    useEffect(() => {
        if (!countries?.length) {
            axios.get(ALL_COUNTRIES)
                .then(({data}) => {
                    setCountries(data);
                    setFiltredCountries(data);
                })
                .catch(err => console.error('Error fetching countries:', err));
        }
    }, [countries, setCountries]);

    useEffect(() => {
        setFiltredCountries(countries);
    }, [countries]);

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region));
        }

        if (search) {
            data = data.filter(c => {
                const countryName = c.name?.common || '';
                return countryName.toLowerCase().includes(search.toLowerCase());
            });
        }

        setFiltredCountries(data);
    };

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filtredCountries?.map((c) => {
                    const countryInfo = {
                        img: c.flags.svg,
                        name: c.name.common,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: c.region
                            },
                            {
                                title: 'Capital',
                                description: c.capital?.[0] || 'None'
                            }
                        ]
                    };

                    return (
                        <Card 
                            key={c.name.common} 
                            onClick={() => navigate(`/country/${c.name.common}`)} 
                            {...countryInfo}
                        />
                    );
                })}
            </List>
        </>
    );
};