import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import "./BottomBoxes.scss"


export default function BottomBoxes() {
    return(
        <>
        <div className="large-screen">
        <div className="extraSection">
            <Row >
                <Col className="extraContent bg-color-red">
                <h1>Learn &#128218;</h1>
                <div className="specialExtra">
                    <p>New to competitive programming, but not sure where to start?</p>
                    <Button as="a" href="#learn">Read More</Button>
                </div>
                </Col>
                <Col className="extraContent bg-color-blue">
                <h1>Practice &#128187;</h1>
                <div className="specialExtra">
                    <p>Can’t get enough DSA and want a formal problem set to practice?</p>
                    <Button as="a" href="#practice">View Problems</Button>
                </div>
                </Col>
                <Col className="extraContent bg-color-green">
                <h1>Compete &#127942;</h1>
                <div className="specialExtra">
                    <p>Interested in competing in ICPC or IEEExtreme? Ready to take home worlds?</p>
                    <Button as="a" href="#compete">Read More</Button>
                </div>
                </Col>
                <Col className="extraContent bg-color-purple">
                <h1>Board &#128106;</h1>
                <div className="specialExtra">
                    <p>Curious about who’s behind ACM? Interested in applying for a board position yourself?</p>
                    <Button as="a" href="#board">View Staff</Button>
                </div>
                </Col>
            </Row>
        </div>
            
        </div>
        <div className="small-screen">
         <div className="extraSection">
            <Row className="justify-content-center">
                <Col xs={12}  className="extraContent bg-color-red">
                <h1>Learn &#128218;</h1>
                <div className="specialExtra">
                    <p>New to competitive programming, but not sure where to start?</p>
                    <Button as="a" href="#learn">Read More</Button>
                </div>
                </Col>
                <Col xs={12} className="extraContent bg-color-blue">
                <h1>Practice &#128187;</h1>
                <div className="specialExtra">
                    <p>Can’t get enough DSA and want a formal problem set to practice?</p>
                    <Button as="a" href="#practice">View Problems</Button>
                </div>
                </Col>
                <Col xs={12} className="extraContent bg-color-green">
                <h1>Compete &#127942;</h1>
                <div className="specialExtra">
                    <p>Interested in competing in ICPC or IEEExtreme? Ready to take home worlds?</p>
                    <Button as="a" href="#compete">Read More</Button>
                </div>
                </Col>
                <Col xs={12} className="extraContent bg-color-purple">
                <h1>Board &#128106;</h1>
                <div className="specialExtra">
                    <p>Curious about who’s behind ACM? Interested in applying for a board position yourself?</p>
                    <Button as="a" href="#board">View Staff</Button>
                </div>
                </Col>
            </Row>
        </div>
            
        </div>

        </>
        
    )
}