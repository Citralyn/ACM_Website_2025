/* TESTING */
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row";
import Plot from 'react-plotly.js';
import BottomBoxes from "../components/BottomBoxes/BottomBoxes.tsx";
import HighlightBox from "../components/HighlightBox";

import { client } from "../sanity/client";

function ACMPlot() {
    return(
        <div className="d-flex justify-content-evenly align-items-center">
                <Col>
                <Plot
        data={[
          {
            x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            y: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'orange'},
          }
        ]}
        layout={ {  
            plot_bgcolor: "black",
            paper_bgcolor: "black",  
            width: 640,
            height: 480,
            title: {
              text: 'Time Complexity: O(N^2)',  
              font: { size: 24, family: "Inter, system-ui, Arial, Helvetica, sans-serif", color: "white" },  
            },
            xaxis: {
              title: {
                text: 'Time Spent at ACM (seconds)', 
                font: { size: 18, family: "Inter, system-ui, Arial, Helvetica, sans-serif", color: 'white' }, 
            },
            },
            yaxis: {
              title: {
                text: 'Overall Happiness (ng/mL)',  
                font: { size: 18, family: "Inter, system-ui, Arial, Helvetica, sans-serif", color: 'white' },  
              }} }}
      />
                </Col>
            </div>
    )
}

import "../styles/HomePage.scss";

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "post"]`)
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  console.log(posts); 


  return (
    <div className="FRONT_PAGE d-flex flex-column align-items-center justify-content-center w-100" style={{ minHeight: '100vh', background: `linear-gradient(180deg, #fff176 0%, #16447e 100%)`, width: '100%', position: 'relative' }}>
      <div className="ACM_LOGO w-50 d-flex justify-content-center mb-4">
        <Image src="acm_logo.svg" style={{ maxWidth: '300px', width: '100%' }} />
      </div>
      <HighlightBox className="ACM_DESC text-center mb-3">
        <h1 style={{ fontWeight: 700, letterSpacing: '1px' }}>ACM <span style={{ color: '#007bff' }}>@ UCI</span></h1>
        <h3><b>Learn about algorithms</b> and improve your <b>interview skills</b></h3>
        <h3><b>Meetings</b> are on <b>Wednesdays from 6pm to 8pm</b></h3>
      </HighlightBox>
      <div className="ACM_PHOTOS w-100 d-flex justify-content-center mb-4">
        <Row className="justify-content-center w-100">
          <Col xs={12} md={8} lg={6} className="d-flex justify-content-center">
            <Image fluid src="acm_group_photo.JPG" style={{ borderRadius: '12px', boxShadow: '0 2px 16px #b0b8c9' }} />
          </Col>
        </Row>
      </div>
      <HighlightBox className="ACM_ABOUT text-center mb-4">
        <h1 style={{ fontWeight: 600, marginBottom: '1rem' }}>What is <span style={{ color: '#007bff' }}>ACM @ UCI</span>?</h1>
        <p style={{ fontSize: '1.08rem', lineHeight: 1.6 }}>
          <b>ACM@UCI</b> is UCI's official <b>competitive programming club</b>, where coders of all kinds —
          those <b>passionate about competitive programming</b>, trying to <b>get through technical interviews</b>,
          or hoping to <b>apply what they learn in their algorithms class</b> — come together and solve problems!
          <br /><br />
          Each week, we host <b>informative presentations</b> on various topics in <b>data structures and algorithms</b>,
          including the <b>divide and conquer paradigm</b>, <b>dynamic programming</b>, and <b>greedy algorithms</b>.
          We also hold <b>practice sessions</b> on another day of the week after the session so members can internalize the concepts we cover.
          Sometimes, we host <b>friendly programming contests</b> for our members as well!
        </p>
      </HighlightBox>
      <div className="w-100 d-flex justify-content-center mb-4">
        <ACMPlot />
      </div>
      <div className="w-100 d-flex justify-content-center">
        <BottomBoxes />
      </div>
    </div>
  );
}

