import { useEffect, useState } from "react";
import { client } from "../sanity/client";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Problem from "../components/Problem/Problem";
import Presentation from "../components/Presentation/Presentation";
import HighlightBox from "../components/HighlightBox";

type ProblemType = {
  _id: string;
  name: string;
  url: string;
  difficulty: string;
  solutionURL: string;
};

type PresentationType = {
  _id: string;
  title: string;
  url: string;
  week: number;
};

type ProblemsData = {
  [key: string]: ProblemType[];
};

export default function Problems() {
  const [problems, setProblems] = useState<ProblemsData>({});
  const [presentations, setPresentations] = useState<PresentationType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      let quarter: number;

      if (month >= 9 && month <= 12) quarter = 0;
      else if (month >= 1 && month <= 3) quarter = 1;
      else quarter = 2;

      let joinStr = "";
      for (let i = 1; i <= 9; ++i) {
        joinStr += `week${i}[]->{ ..., "solutionURL": solution.asset->url }, `;
      }

      const quarters = await client.fetch(
        `*[_type == "weeklyProblem" && year == ${year} && quarter == '${quarter}']
         { ..., ${joinStr} }`
      );

      const presentationsData = await client.fetch(
        `*[_type == "presentation" && quarter == '${quarter}']`
      );

      setProblems(quarters[0] ?? {});
      setPresentations(presentationsData ?? []);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center mt-5">Loading problems...</p>;
  }

  return (
    <div className="practice-background d-flex flex-column align-items-center justify-content-center w-100" style={{ minHeight: '100vh', background: `linear-gradient(180deg, #64b5f6 0%, #16447e 100%)` }}>
      <Container className="py-5">
        <Row className="justify-content-center mb-4">
          <HighlightBox className="text-center mb-4">
            <h2 style={{ fontWeight: 700, letterSpacing: '1px' }}>Practice Problems & Presentations</h2>
            <p>
              <b>Sharpen your skills</b> with our weekly <b>problems</b> and <b>presentations</b>!<br />
              Click on a week to view its content.
            </p>
          </HighlightBox>
        </Row>
        {Object.keys(problems).length !== 0 || presentations.length !== 0 ? (
          <Accordion>
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((num) => {
              const week = problems[`week${num}`];
              const pres = presentations.filter((p) => p.week === num);
              if (!week && pres.length === 0) return null;
              return (
                <Accordion.Item eventKey={`${num}`} key={num}>
                  <Accordion.Header>
                    <h3 style={{ fontWeight: 600 }}>{`Week ${num}`}</h3>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row className="justify-content-center align-items-center">
                      {pres.map((p) => (
                        <Presentation key={p._id} title={p.title} url={p.url} />
                      ))}
                      {week
                        ? week.map((problem) => (
                            <Problem
                              key={problem._id}
                              name={problem.name}
                              url={problem.url}
                              difficulty={problem.difficulty}
                              solutionURL={problem.solutionURL}
                            />
                          ))
                        : null}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        ) : (
          <HighlightBox className="text-center mt-5">
            <p>
              <b>No problems are currently available!</b><br />
              Please check back later.
            </p>
          </HighlightBox>
        )}
      </Container>
    </div>
  );
}
