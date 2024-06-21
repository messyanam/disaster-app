import React from 'react';

// Inline styles
const styles = {
    body: {
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'rgb(6, 41, 53)',
        margin: 0,
        padding: '20px',
        color: '#fffefe',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
    },
    item: {
        textAlign: 'center',
    },
    img: {
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    button: {
        padding: '10px 20px',
        marginTop: '10px',
        color: 'white',
        textDecoration: 'none',
        display: 'inline-block',
        borderRadius: '5px',
        textAlign: 'center',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    floodButton: {
        backgroundColor: 'rgb(68, 68, 142)',
    },
    earthquakeButton: {
        backgroundColor: 'rgb(181, 104, 104)',
    },
    tsunamiButton: {
        backgroundColor: 'rgb(128, 61, 128)',
    },
    droughtButton: {
        backgroundColor: 'rgb(170, 145, 98)',
    },
    hurricaneButton: {
        backgroundColor: 'rgb(56, 161, 132)',
    },
    landslideButton: {
        backgroundColor: 'rgb(107, 59, 59)',
    },
    buttonHover: {
        backgroundColor: 'rgb(35, 83, 125)',
    },
};

const Help = () => {
    const items = [
        { imgSrc: "https://i.postimg.cc/7h7mYrvn/image.png", alt: "FLOOD", url: "https://youtu.be/rV1iqRD9EKY?si=NEOPkgVC_8TPDjX7/", buttonStyle: styles.floodButton, text: "FLOOD" },
        { imgSrc: "https://i.postimg.cc/tgw31vNS/image.png", alt: "EARTHQUAKE", url: "https://youtu.be/F3tUsSMaHJQ?si=9tJfHo22k-St4n8u/", buttonStyle: styles.earthquakeButton, text: "EARTHQUAKE" },
        { imgSrc: "https://i.postimg.cc/mgrCmWdp/image.png", alt: "TSUNAMI", url: "https://youtu.be/PSMXZPjJwAw?si=iXmz9Q9SHk1Q00bK/", buttonStyle: styles.tsunamiButton, text: "TSUNAMI" },
        { imgSrc: "https://i.postimg.cc/yd0ZD1dx/image.png", alt: "DROUGHT", url: "https://youtu.be/7CvUR_PissM?si=TDMBOB1U_uRbBNTI", buttonStyle: styles.droughtButton, text: "DROUGHT" },
        { imgSrc: "https://i.postimg.cc/YSJh1hyk/image.png", alt: "HURRICANE", url: "https://youtu.be/TqZ3M7xh8jM?si=X0qIXojRzLu-f0Yq/", buttonStyle: styles.hurricaneButton, text: "HURRICANE" },
        { imgSrc: "https://i.postimg.cc/FRh9xNp7/image.png", alt: "LANDSLIDE", url: "https://youtu.be/9j_StYqR_Pg?si=z4iuHU2CHnGdkqLo/", buttonStyle: styles.landslideButton, text: "LANDSLIDE" },
    ];

    return (
        <div style={styles.body}>
            <h1>HOW TO SURVIVE FROM NATURAL CALAMITIES!!</h1>
            <div style={styles.container}>
                {items.map((item, index) => (
                    <div key={index} style={styles.item}>
                        <img src={item.imgSrc} alt={item.alt} width="300" height="200" style={styles.img} />
                        <a href={item.url} target="_blank" rel="noopener noreferrer" style={{ ...styles.button, ...item.buttonStyle }}>
                            {item.text}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Help;
