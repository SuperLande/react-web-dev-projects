import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import kxl from "../assets/img/kxl.JPG";
import zq from "../assets/img/zq.JPG";
import yb from "../assets/img/yb.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const teamMembers = [
  { name: "叶斌", avatar: yb },
  { name: "郐欣璐", avatar: kxl },
  { name: "周庆", avatar: zq }
];

function TeamMember({ member }) {
  return (
      <Col md={4} className="mb-4">
          <div className="team-member">
              <img src={member.avatar} alt={member.name} className="img-fluid" />
              <h3>{member.name}</h3>
          </div>
      </Col>
  );
}

export const Projects = () => {

  const projects = [
    {
      title: "形象克隆",
      description: "最优效果，最低成本",
      imgUrl: projImg1,
    },
    {
      title: "声音克隆",
      description: "你的口音，都不放过",
      imgUrl: projImg2,
    },
    {
      title: "数字客服",
      description: "成为你的嘴替（开发ing）",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>了解我们</h2>
                <p>把稻草卖出金价，绝对不是我们的价值观</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">效果展示</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">团队成员</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">其他项目</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <Row>
                            {teamMembers.map(member => (
                                <TeamMember key={member.name} member={member} />
                            ))}
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>私有化AI知识库 & 本地部署形象克隆 & 本地部署声音克隆 正在开发中.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
