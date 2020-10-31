import './App.scss';
import Header from './components/elements/Header';
import { Container, Row, Col } from 'react-bootstrap';
import TextSection from './components/elements/TextSection';
import ProjectScroller from './components/elements/ProjectScroller';

const activeProjects = [
  { projectId: 1, title: "Project One", description: "Lorem Ipsum dolor sit amet", badges: ["Video Game", "Godot", "GDScript"], src: "https://via.placeholder.com/350x200" },
  { projectId: 2, title: "Project Two", description: "Lorem Ipsum dolor sit amet", badges: ["Desktop App", "Java"], src: "https://via.placeholder.com/350x200" },
  { projectId: 3, title: "Project Three", description: "Lorem Ipsum dolor sit amet", badges: ["Web App", "ReactJs", "NodeJs"], src: "https://via.placeholder.com/350x200" },
]

function App() {
  return (
    <div className="App">
      <Header />

      <div className="cs_brand" href="#">Sriniwas<b>Jha</b></div>
      <div className="cs_subhead">Coder | Gamer | Geek</div>

      <br/>

      <Container>
        <Row>
          <Col sm={12}>
            <TextSection heading="About Me" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <TextSection variant="dark" heading="Active Projects" render={(<ProjectScroller projects={activeProjects} />)} />
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
