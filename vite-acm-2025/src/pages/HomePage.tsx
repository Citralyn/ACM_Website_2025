/* TESTING */
import { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button"
import Plot from 'react-plotly.js';

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
              font: { size: 24, family: "Cutive Mono", color: "white" },  
            },
            xaxis: {
              title: {
                text: 'Time Spent at ACM (seconds)', 
                font: { size: 18, family: "Cutive Mono", color: 'white' }, 
            },
            },
            yaxis: {
              title: {
                text: 'Overall Happiness (ng/mL)',  
                font: { size: 18, family: "Cutive Mono", color: 'white' },  
              }} }}
      />
                </Col>
            </div>
    )
}

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
      <div className='FRONT_PAGE'>
            <div className='ACM_LOGO w-50'>
              <Image src="acm_logo.svg"></Image>
            </div>
            <div className='ACM_DESC'>
              <h1>ACM @ UCI</h1>
              <h3>Learn about algorithms and improve your interview skills</h3>
              <h3>Meetings are on Wednesdays from 6pm to 8pm</h3>
            </div>
            <div className='ACM_PHOTOS'>
                <Row>
                    <Col>
                    <Image fluid src="acm_group_photo.JPG"></Image>
                    </Col>
                </Row>
            
            </div>
            <div className='ACM_ABOUT'>
              <h1>What is ACM @ UCI?</h1>
              <p>
              ACM@UCI is UCI's official competitive programming club, 
              where coders of all kinds — 
              those passionate about competitive programming,
              trying to get through technical interviews, 
              or hoping to apply what they learn in their algorithms class — 
              come together and solve problems! 
              Each week, we host informative presentations 
              on various topics in data structures and algorithms, 
              including the divide and conquer paradigm, 
              dynamic programming, and greedy algorithms. 
              We also hold practice sessions on another day of the week 
              after the session so members can internalize the concepts we cover. 
              Sometimes, we host friendly programming contests for our members as well!
              </p>
            </div>
            <ACMPlot></ACMPlot>
            <div className='ACM_LINKS'>
              <h6>links go here</h6>
            </div>
      </div>

  );
}


/*

    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <Button>aslfjd</Button>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post: any) => (
          <li className="hover:underline" key={post._id}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </main>

  */