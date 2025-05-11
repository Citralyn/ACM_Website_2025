import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { client } from "../sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import HighlightBox from "../components/HighlightBox";



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
    <div className="board-background d-flex flex-column align-items-center justify-content-center w-100" style={{ minHeight: '100vh', background: `linear-gradient(180deg, #b39ddb 0%, #16447e 100%)` }}>
      <Container fluid className="py-5">
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={10} lg={8} className="d-flex flex-column align-items-center">
            <HighlightBox className="text-center mb-4">
              <h1 style={{ fontWeight: 700, letterSpacing: '1px' }}>Meet the <span style={{ color: '#007bff' }}>ACM Board</span></h1>
              <p>
                <b>Our dedicated board members</b> help make ACM@UCI an amazing community for <b>growth, learning, and collaboration</b>.<br />
                Get to know the people who make it all possible!
              </p>
            </HighlightBox>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {(board ?? []).map((member : any) => (
            <Card
              className="mx-4 mb-5 p-0 shadow-lg d-flex flex-column align-items-center"
              style={{ width: "16rem", borderRadius: '14px', background: 'rgba(255,255,255,0.97)' }}
              key={member.name}
            >
              <Card.Img variant="top" src={builder.image(member.image).url()} style={{ borderTopLeftRadius: '14px', borderTopRightRadius: '14px', height: '260px', objectFit: 'cover' }} />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title style={{ fontWeight: 600 }}>{member.name}</Card.Title>
                <HighlightBox className="w-100 text-center p-2 mt-2" style={{ background: 'linear-gradient(90deg, #e0e7ef 0%, #f8fafc 100%)', borderLeft: '4px solid #007bff' }}>
                  <Card.Text style={{ fontWeight: 500 }}>{member.position.positionName}</Card.Text>
                </HighlightBox>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </div>
  )
}
