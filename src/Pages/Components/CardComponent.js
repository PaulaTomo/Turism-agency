import React from 'react';
import {Card, Button, Col, Row} from 'react-bootstrap';
import "../../Styles/destination.css"
import {Link} from "react-router-dom";

const CardComponent = () => {

    const cardData = [
        {
            id: 1,
            title: "Parigi",
            image: "https://www.consigliamidove.it/wp-content/uploads/2018/04/parigi-la-torre-eiffel.jpg",
            description: "La capitale francese affascina con la sua eleganza senza tempo.",
            price:"280 Euro",

        },
        {
            id: 2,
            title: "Londra",
            image: "https://i2-prod.mirror.co.uk/incoming/article28871026.ece/ALTERNATES/s1200d/0_London-at-sunset.jpg",
            description: "La città britannica regala emozioni sempre nuove e sorprendenti.",
            price:"350 Euro",

        },
        {
            id: 3,
            title: "Malta",
            image: "https://imageio.forbes.com/specials-images/imageserve/607de6a1d66202e00be0b999/The-medieval-walls-around-Malta-s-capital-city--Valletta-/960x0.jpg?format=jpg&width=960",
            description: "L'isola mediterranea ti conquista con il suo clima e il suo mare cristallino.",
            price:"420 Euro",

        },
        {
            id: 4,
            title: "Barcelona",
            image: "https://uceap.universityofcalifornia.edu/sites/default/files/2020-09/21s-century-barcelona-m2.jpg",
            description:"La città spagnola vanta una storia millenaria e un'arte senza confini.",
            price:"300 Euro",


        },
        {
            id: 5,
            title: "Roma",
            image: "https://www.roma.com/wp-content/uploads/2021/01/Roma-Roma-com.jpg",
            description: "La città eterna ti sorprende con i suoi tesori nascosti e le sue strade antiche.",
            price:"280 Euro",

        },
        {
            id: 6,
            title: "Helsinki",
            image: "https://siviaggia.it/wp-content/uploads/sites/2/2022/09/Helsinki.jpg?w=687&h=386&quality=90&strip=all&crop=1",
            description: "La capitale finlandese ti accoglie con il suo stile nordico e il suo design moderno.",
            price:"560 Euro",

        },
        {
            id: 7,
            title: "Dubai",
            image: "https://inviaggiodasola.com/wp-content/uploads/2017/01/Dubai-Marina-1000x675.jpg",
            description: "La città degli Emirati Arabi è sinonimo di lusso e di innovazione futuristica.",
            price:"722 Euro",

        },
        {
            id: 8,
            title: "Istanbul",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Istanbul_panorama_%2816293921746%29.jpg/900px-Istanbul_panorama_%2816293921746%29.jpg",
            description:"La città turca racchiude in sé una cultura ricca di influenze e di contrasti.",
            price:"450 Euro",

        },
        {
            id: 9,
            title: "Amsterdam",
            image: "https://siviaggia.it/wp-content/uploads/sites/2/2022/09/Amsterdam-1.jpg?w=687&h=386&quality=90&strip=all&crop=1",
            description: "La città olandese incanta con i suoi canali romantici e le sue opere d'arte senza tempo.",
            price:"360 Euro",

        },
        {
            id: 10,
            title: "Lisbona",
            image: "https://www.anyworkanywhere.com/wp-content/uploads/elementor/thumbs/Vivere-a-Lisbona-o-vivere-a-Porto-powcywxkkh6nggif37tljiavnjgiynw0g1smamythk.jpg",
            description: "La città portoghese è un incanto di colori, di sapori e di musica.",
            price:"190 Euro",

        }
    ];

    return (
        <Row xs={1} md={4} className="g-10">
            {cardData.map((card, index) => (
            <Col>
                <Card key={index}>
                    <Card.Img variant="top" src={card.image} width={200} height={200} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                        <Card.Text>{card.description}</Card.Text>
                        <Card.Text className="price">Da {card.price}/Persona</Card.Text>
                        <Link to="/form">
                            <Button variant="primary">Preventivo</Button>
                        </Link>
                    </Card.Body>
                </Card>
        </Col>
            ))}

        </Row>
    );
}

export default CardComponent;
