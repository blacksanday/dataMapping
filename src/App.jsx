import React, {useState} from 'react';

export default function App() {
    const images = [
        <img
            key="images/pic1.jpg"
            className="displayed-img"
            src="images/pic1.jpg"
            alt="Closeup of a human eye"
        />
        ,
        <img
            key="images/pic2.jpg"
            className="displayed-img"
            src="images/pic2.jpg"
            alt="Rock that looks like a wave"
        />
        ,
        <img
            key="images/pic3.jpg"
            className="displayed-img"
            src="images/pic3.jpg"
            alt="Purple and white pansies"
        />
        ,
        <img
            key="images/pic4.jpg"
            className="displayed-img"
            src="images/pic4.jpg"
            alt="Section of wall from a pharoah's tomb"
        />
        ,
        <img
            key="images/pic5.jpg"
            className="displayed-img"
            src="images/pic5.jpg"
            alt="Large moth on a leaf"
        />
    ];
    const thumbBars = images.map(generateNewArray);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isDarken, setIsDarken] = useState(false);
    function generateNewArray(currentValue, index, array) {
        return (
            <img
                key={currentValue.index}
                className="displayed-img"
                src={currentValue.props.src}
                alt={currentValue.props.alt}
                onClick={function() {handleThumbnailClick(currentValue); }}
            />
        );
    }

    function handleThumbnailClick(image) {
        setSelectedImage(image);
    }

    function handleDarkenButton(){
        setIsDarken(!isDarken);
    }
    const overlayStyle ={
        backgroundColor: isDarken ? 'rgba(0, 0, 0, 0.5)' : 'transparent'
    };

    return (
        <>
            <h1>Image gallery example</h1>
            <div className="full-img">
                <img
                    className="displayed-img"
                    src={selectedImage.props.src}
                    alt={selectedImage.props.alt}
                />
                <div className="overlay" style= {overlayStyle}></div>
                <button className="dark" onClick={handleDarkenButton}>{isDarken ? 'Lighten' : 'Darken'} </button>
            </div>
            <div className="thumb-bar">
                {thumbBars}
            </div>
        </>
    );
}