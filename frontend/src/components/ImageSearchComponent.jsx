import React, { useState } from 'react';
import axios from 'axios';

function ImageSearchComponent() {
    const [query, setQuery] = useState('');
    const [image, setImage] = useState(null); // Changed to store a single image object

    const handleSearch = () => {
        axios.get(`http://localhost:5000/images?query=${query}`)
            .then((res) => {
                // Assuming the response structure is similar to the previous example
                // and that images_results is an array of image objects
                if (res.data.images_results && res.data.images_results.length > 0) {
                    setImage(res.data.images_results[0]); // Set the first image
                }
            })
            .catch((e) => {
                console.error(e);
            });
    };

    return (
        <div>
            <input type="text" placeholder="Search Images" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            {image && <img src={image.original} alt={image.title} width={"100px"}/>} {/* Display the first image */}
        </div>
    );
}

export default ImageSearchComponent;
