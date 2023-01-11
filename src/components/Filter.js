import { useState, useEffect } from 'react';



const Filter = ({ filterData }) => {
    const [searchTerm, setSearchTerm] = useState('');
    

    const handleInputChanged = (event) => {
        setSearchTerm(event.target.value);

    }

    useEffect(() => {
        filterData(searchTerm);
    }, [searchTerm])

    return (
        <div>
            <input type='text' value={searchTerm} onChange={handleInputChanged}/>
        </div>
    )

}

export default Filter