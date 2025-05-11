import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import icpcLogo from "/icpc-logo.png";
import ieeextremeLogo from "/ieeextreme-logo.png";
import HighlightBox from "../components/HighlightBox";

export default function Compete() {
    return (
      <div className="compete-background d-flex flex-column align-items-center justify-content-center w-100" style={{ minHeight: '100vh', background: `linear-gradient(180deg, #81c784 0%, #16447e 100%)` }}>
        <Container className="py-5">
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={10} lg={8} className="d-flex flex-column align-items-center">
              <HighlightBox className="text-center mb-4">
                <h2 style={{ fontWeight: 700, letterSpacing: '1px' }}>Competitions</h2>
                <p>
                  Each year, <b>ACM@UCI</b> competes in several <b>competitive programming contests</b>.<br />
                  Keep an eye out for <b>announcements</b> on how to participate!
                </p>
              </HighlightBox>
              <img src="ICPC_NAT.jpeg" alt="ICPC Nationals" style={{ maxWidth: '350px', borderRadius: '12px', boxShadow: '0 2px 16px #b0b8c9', marginBottom: '2rem' }} />
            </Col>
          </Row>
          <Row className="justify-content-center text-center align-items-center">
            <Col xs={12} md={6} className="mb-4 d-flex flex-column align-items-center">
              <img
                src={icpcLogo}
                alt="International Competitive Programming Contest logo"
                width="300"
                style={{ boxShadow: '0 2px 16px #b0b8c9', borderRadius: '8px', background: 'white', padding: '1rem' }}
              />
              <HighlightBox className="mt-3 w-100">
                <h5 style={{ fontWeight: 600 }}>International Competitive Programming Contest (ICPC)</h5>
                <p>
                  <b>ICPC</b> is an <b>algorithmic programming contest</b> for college students all around the world.<br />
                  With access to only <b>one computer</b>, teams of three race to solve problems as fast as possible to advance to the next rounds.
                </p>
              </HighlightBox>
            </Col>
            <Col xs={12} md={6} className="mb-4 d-flex flex-column align-items-center">
              <img
                src={ieeextremeLogo}
                alt="IEEExtreme logo"
                width="180"
                style={{ boxShadow: '0 2px 16px #b0b8c9', borderRadius: '8px', background: "white", padding: '1rem' }}
              />
              <HighlightBox className="mt-3 w-100">
                <h5 style={{ fontWeight: 600 }}>IEEExtreme</h5>
                <p>
                  <b>IEEExtreme</b> is another <b>international competition</b> in which teams compete against each other to solve algorithmic problems within a <b>24 hour time span</b>.
                </p>
              </HighlightBox>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
