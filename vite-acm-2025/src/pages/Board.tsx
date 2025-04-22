import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { client } from "../sanity/client";
import imageUrlBuilder from '@sanity/image-url';



import { useEffect, useState } from "react";

const builder = imageUrlBuilder(client);

export default function Board() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "boardMember" && isActive == true]{ ..., position->, name, "imageUrl": image.asset->url }`)
      .then((data) => setBoard(data))
      .catch(console.error);

  }, []);

  return(
    <>
                <Container fluid className="p-5">
                <h1> BOARD </h1>
                <Row className="justify-content-center">
                    {(board ?? []).map((member : any) => (
                        <Card
                            className="mx-5 mb-5 p-0"
                            style={{ width: "15rem" }}
                        >
                            <Card.Img variant="top" src={builder.image(member.image).url()} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Text>{member.position.positionName}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </Row>
            </Container>
    </>
  )
}
