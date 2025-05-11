import { useState, useEffect, useRef } from "react";
import Image from "react-bootstrap/Image";
import Typed from "typed.js";
import { Link } from "react-router";
import { CodeBlock, a11yDark } from "react-code-blocks";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import vscodeLogo from "/vscode.svg";
import vimLogo from "/vim-logo.svg";
import neovimLogo from "/neovim-logo.svg";
import emacsLogo from "/emacs-logo.svg";

import "../styles/NewMembers.scss";
import HighlightBox from "../components/HighlightBox";

enum Language {
    Python = "python",
    Cpp = "cpp",
}

const stdinCode = {
    [Language.Python]: `import sys

input = sys.stdin.readline

# Read a space-separated sequence of integers into input
array = list(map(int, input().split()))

# Read in a string as input, making sure to clear any surrounding whitespace
string = input().strip()

`,
    [Language.Cpp]: `#include <bits/stdc++.h>
using namespace std;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int n;
  string s;
  cin >> n >> s;
}
    `,
};

export default function NewMembers() {
    const [language, setLanguage] = useState<Language>(Language.Python);

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "from acm_uci import binary_search, segtree, dijkstra<br><br>array = map(int, input().split())<br>binary_search(array, 3)",
            ],
            typeSpeed: 50,
        });
        return () => {
            typed.destroy();
        };
    });

    return (
      <div className="new-members-background d-flex flex-column align-items-center justify-content-center w-100" style={{ minHeight: '100vh', background: `linear-gradient(180deg, #e57373 0%, #16447e 100%)`}}>
        <Container className="py-5">
          <Row className="gx-5 justify-content-center mb-4">
            <Col xs={12} md={10} lg={8} className="d-flex flex-column align-items-center">
              <HighlightBox className="text-center mb-4">
                <h2 style={{ fontWeight: 700, letterSpacing: '1px' }}>What Is <span style={{ color: '#007bff' }}>Competitive Programming?</span></h2>
                <div className="window my-3">
                  <div className="top">
                    <span className="dot" style={{ background: "#ED594A" }} />
                    <span className="dot" style={{ background: "#FDD800" }} />
                    <span className="dot" style={{ background: "#5AC05A" }} />
                  </div>
                  <code ref={el} />
                </div>
                <p>
                  <b>Competitive programming</b> is an activity where participants compete to solve problems using <b>algorithmic techniques</b> within a given time limit.
                </p>
              </HighlightBox>
            </Col>
          </Row>
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={10} lg={11} className="d-flex flex-column align-items-center" style={{ maxWidth: '950px' }}>
              <HighlightBox className="text-center mb-4">
                <h2 style={{ fontWeight: 700 }}>Getting Started</h2>
                <h5><strong>Choosing the Right Editor</strong></h5>
                <p>
                  <b>Competitive programming</b> is about quickly programming an efficient, correct solution to a problem.<br />
                  In your computer science career, you&apos;ll need to choose a text editor or integrated development environment to work on.
                </p>
                <p>
                  While there are a lot of text editors available for use, some are highly recommended by <b>ACM @ UCI</b> users:
                </p>
                <Row className="text-center my-4">
                  <Col>
                    <Link to="https://code.visualstudio.com">
                      <Image src={vscodeLogo} alt="Visual Studio Code logo" className="editorLogo" />
                    </Link>
                  </Col>
                  <Col>
                    <Link to="https://www.vim.org/">
                      <Image src={vimLogo} alt="Vim logo" className="editorLogo" />
                    </Link>
                  </Col>
                  <Col>
                    <Link to="https://neovim.io/">
                      <Image src={neovimLogo} alt="Neovim logo" className="editorLogo" />
                    </Link>
                  </Col>
                  <Col>
                    <Link to="https://www.gnu.org/software/emacs/">
                      <Image src={emacsLogo} alt="Emacs logo" className="editorLogo" />
                    </Link>
                  </Col>
                </Row>
              </HighlightBox>
            </Col>
          </Row>
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={10} lg={12} className="d-flex flex-column align-items-center" style={{ maxWidth: '1050px' }}>
              <HighlightBox className="text-center mb-4">
                <h5><strong>Reading Input</strong></h5>
                <p>
                  Most, if not all, problems require reading in some form of <b>input</b> and outputting an answer based on that input.<br />
                  Being able to quickly and efficiently read input is <b>critical</b> to succeeding in competitive programming.
                </p>
                <p>
                  Most programming languages have functions that read in input, including <b>Python</b> and <b>C++</b>.
                </p>
                <div className="chooseLanguage text-start">
                    <Button
                        type="button"
                        variant="dark"
                        onClick={(_) => setLanguage(Language.Python)}
                    >
                        Python
                    </Button>
                    <Button
                        type="button"
                        variant="dark"
                        onClick={(_) => setLanguage(Language.Cpp)}
                    >
                        C++
                    </Button>
                </div>
                <div className="p-0 codeBlock text-start">
                    <CodeBlock
                        text={stdinCode[language]}
                        language={language}
                        showLineNumbers
                        theme={a11yDark}
                    />
                </div>
                <p className="mt-3">
                  That&apos;s it! While this may seem easy, many more coding paradigms and methods are often tied together in order for a problem to be solved. With enough practice and time, you can intuitively determine which of these methods to use when solving a problem.
                </p>
              </HighlightBox>
            </Col>
          </Row>
          <Row>
            <h2 className="mt-4 text-center fw-bold" style={{ fontSize: '2.4rem', letterSpacing: '1px', color: '#16447e', position: 'relative' }}>
  Resources
  <span style={{
    display: 'block',
    margin: '0 auto',
    marginTop: '0.5rem',
    width: '80px',
    height: '6px',
    background: 'linear-gradient(90deg, #007bff 0%, #00c6ff 100%)',
    borderRadius: '4px',
  }}></span>
</h2>
            <Row className="justify-content-center align-items-center">
              <Col xs={12} md={4} className="mb-4">
                <Card className="card">
                  <Card.Header>Books</Card.Header>
                  <Card.Body>
                    <p>
                      If you&apos;re looking for a place to start or are looking to enhance your knowledge of data structures and algorithms, there&apos;s nothing better than reading through a guide that contains all the information you need!
                    </p>
                    <ul>
                      <li>
                        <Link to="https://cses.fi/book/book.pdf">
                          Competitive Programmer&apos;s Handbook
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.amazon.com/Introduction-Algorithms-fourth-Thomas-Cormen/dp/026204630X/">
                          Introduction to Algorithms (CLRS)
                        </Link>
                      </li>
                      <li>
                        <Link to="https://cpbook.net/#CP3details">
                          Competitive Programming, 3rd Edition
                        </Link>
                      </li>
                    </ul>
                    <p>
                      Some universities also publish free PDFs containing very useful information on data structures and algorithms.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} className="mb-4">
                <Card className="card">
                  <Card.Header>YouTube</Card.Header>
                  <Card.Body>
                    <p>
                      If watching videos helps you learn better, there are a lot of competitive programming resources available on YouTube as well!
                    </p>
                    <ul>
                      <li>
                        <Link to="https://www.youtube.com/@NeetCode">
                          Neetcode
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.youtube.com/@abdul_bari">
                          Abdul Bari
                        </Link>
                      </li>
                    </ul>
                    <p>
                      If you prefer a more academic path, many universities post recordings of past lectures on data structures and algorithms.
                    </p>
                    <ul>
                      <li>
                        <Link to="https://www.youtube.com/watch?v=ZA-tUyM_y7s&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY">
                          MIT 6.006:
                        </Link>{" "}
                        Introduction to Algorithms
                      </li>
                      <li>
                        <Link to="https://www.youtube.com/watch?v=wIq4CssPoO0&list=PLUl4u3cNGP60UlabZBeeqOuoLuj_KNphQ">
                          MIT 6.042J:
                        </Link>{" "}
                        Mathematics for Computer Science
                      </li>
                      <li>
                        <Link to="https://www.youtube.com/watch?v=0JUN9aDxVmI&list=PL2SOU6wwxB0uP4rJgf5ayhHWgw7akUWSf">
                          Harvard CS 224:
                        </Link>{" "}
                        Advanced Algorithms
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} md={4} className="mb-4">
                <Card className="card">
                  <Card.Header>Websites</Card.Header>
                  <Card.Body>
                    <p>
                      The best way to get better at competitive programming is to practice! ACM @ UCI often uses these websites for meetings, presentations, and contests.
                    </p>
                    <ul>
                      <li>
                        <Link to="https://leetcode.com">
                          Leetcode
                        </Link>
                      </li>
                      <li>
                        <Link to="https://codeforces.com">
                          Codeforces
                        </Link>
                      </li>
                      <li>
                        <Link to="https://open.kattis.com">
                          Kattis
                        </Link>
                      </li>
                      <li>
                        <Link to="https://hackerrank.com">
                          Hackerrank
                        </Link>
                      </li>
                    </ul>
                    <p>
                      There are also other websites where you can focus solely on improving your knowledge of competitive programming.
                    </p>
                    <ul>
                      <li>
                        <Link to="https://cp-algorithms.com">
                          Algorithms for Competitive Programming
                        </Link>
                      </li>
                      <li>
                        <Link to="https://techdevguide.withgoogle.com/paths/data-structures-and-algorithms/">
                          Data Structures & Algorithms with Google
                        </Link>
                      </li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>
          <Row className="justify-content-center mt-4">
            <Col xs={12} md={10} lg={8} className="d-flex flex-column align-items-center">
              <HighlightBox className="text-center mb-4">
                <p>
                  Lastly, and perhaps most importantly, is to have a good understanding of the language you are programming in.{' '}
                  <Link to="https://docs.python.org/3/index.html">Python</Link> and{' '}
                  <Link to="https://cplusplus.com/reference/">C++</Link> have extensive documentation that you should definitely look through!
                </p>
              </HighlightBox>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
     