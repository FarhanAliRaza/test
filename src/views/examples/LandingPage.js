/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { ParallaxProvider } from 'react-scroll-parallax';

import video from "./trailer.mp4";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  UncontrolledTooltip,
  UncontrolledCarousel,
  Col,
} from "reactstrap";
import StarfieldAnimation from 'react-starfield-animation'
import ReactPlayer from 'react-player'
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import bigChartData from "variables/charts.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  const title = document.querySelector("h1");
  const CHAR_TIME = 30;
  
  let text, index;
  
  function requestCharAnimation(char, value) {
    setTimeout(function () {
      char.textContent = value;
      char.classList.add("fade-in");
    }, CHAR_TIME);
  }
  
  function addChar() {
    const char = document.createElement("span");
    char.classList.add("char");
    char.textContent = "▌";
    title.appendChild(char);
    requestCharAnimation(char, text.substr(index++, 1));
    if (index < text.length) {
      requestChar();
    }
  }
  
  function requestChar(delay = 0) {
    setTimeout(addChar, CHAR_TIME + delay);
  }
  
  function start() {
    index = 0;
    text = title.textContent.trim();
    title.textContent = "";
    requestChar(1000);
  }
  
  const carouselItems = [
    {
      src: "https://i.imgur.com/R9gbQHK.jpeg", 
      altText: 'Slide 1',
      caption: "F"

    },
    {
      src: "https://i.imgur.com/WRGwupV.png", 
      altText: 'Slide 2',
      caption: ""
      
    },
    {
      src: "https://i.imgur.com/N5rBNth.png",
      altText: 'Slide 3',
  
    },
    {
      src: "https://i.imgur.com/HWWmoU2.png",
      altText: 'Slide 3',
  
    },

    {
      src: "https://i.imgur.com/IPdJRvQ.png",
      altText: 'Slide 3',
  
    }

 
  ]

  const carouselItems2 = [
    {
      src: " https://i.imgur.com/XLzZNXB.jpg", 
      altText: 'Slide 1',
      caption: ""

    },
    {
      src: "https://i.imgur.com/KOihQQK.jpg", 
      altText: 'Slide 2',
      caption: ""
      
    },
    {
      src: "https://i.imgur.com/iX9LQyA.png",
      altText: 'Slide 3',
  
    },
    {
      src: "https://i.imgur.com/t3CuqBK.jpg",
      altText: 'Slide 3',
  
    },

    {
      src: "https://i.imgur.com/58ZGACS.png",
      altText: 'Slide 3',
  
    }

 
  ]
 
  console.clear();

const slides = [
  {
    title: "Machu Picchu",
    subtitle: "Peru",
    description: "Adventure is never far away",
    image:
      "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Chamonix",
    subtitle: "France",
    description: "Let your dreams come true",
    image:
      "https://images.unsplash.com/photo-1581836499506-4a660b39478a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Mimisa Rocks",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1566522650166-bd8b3e3a2b4b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Four",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/flagged/photo-1564918031455-72f4e35ba7a6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  },
  {
    title: "Five",
    subtitle: "Australia",
    description: "A piece of heaven",
    image:
      "https://images.unsplash.com/photo-1579130781921-76e18892b57b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
  }
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <div className="slides">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
}


  return (
    <>
      <ExamplesNavbar />
      
      <div className="wrappers"  id="wrp" style={{ backgroundImage: `url("https://wallup.net/wp-content/uploads/2019/09/1007183-star-citizen-game-action-fighting-fps-futuristic-sci-fi-shooter-simulator-space-spaceship-startegy-tactical-space-science-fiction-technics-ship.jpg")`, margintop: "-10px",  backgroundsize: "contain"}}
    >     
          <div id="foglayer_01" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<div id="foglayer_02" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<div id="foglayer_03" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
        <div className="page-header">
       
          <div className="content-center"> <br></br>
          <Container className='align-items-center'>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}
            />       </Container><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <h1 id="f"><br></br>
               <span> Welcome to the Kozmo Aliens Universe!  </span>
                </h1><br></br><br></br>
                <p>Embrace the life of a seafaring civilization as you sail the open expanses of the galaxy with Stellaris' most immersive pack yet. Let a wave of new customizable options for your empire crash into Stellaris, with a treasure trove of new species portraits, ship set, origins and more.</p>
            <Row className=""> <br></br><br></br>
              <Col classname="col-md-5">
               
                <div className="btn-wrapper pt-3">
                <br></br><br></br>  <br></br><br></br> 
            
                <button class="kave-btn2">
    <span class="kave-line"></span>
  Watch Trailer
</button>
                  
                  
                  <button class="kave-btn">
    <span class="kave-line"></span>
    Mint Now !
</button>

                  </div> 
                  
                  <div className='btn-wrapper profile pt-3'> <br></br><br></br>  <br></br><br></br>  <br></br><br></br> <br></br><br></br>  <br></br><br></br>  <br></br><br></br>
                  <Button
                    className='btn-icon btn-round'
                    color='twitter'
                    href='https://twitter.com/KozmoAliens'
                    id='tooltip639225725'
                    target='_blank'
                  >
                    <i className='fab fa-twitter' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip639225725'>
                    Follow us
                  </UncontrolledTooltip>
                  <Button
                    className='btn-icon btn-round'
                    color='facebook'
                    href='https://www.instagram.com/kozmoaliens/'
                    id='tooltip982846143'
                    target='_blank'
                  >
                    <i className='fab fa-instagram' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip982846143'>
                    Like us
                  </UncontrolledTooltip>
                  <Button
                    className='btn-icon btn-round'
                    color='dribbble'
                    href='https://discord.gg/xRN4MtsfVN'
                    id='tooltip951161185'
                    target='_blank'
                    style={{marginleft: '80px'}}
                  >
                    <i className='fab fa-discord' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip951161185'>
                    Join our Discord
                  </UncontrolledTooltip>
                </div>

                  </Col>
             
                
           
              
            </Row>
          </div>
        </div>      
        <ParallaxProvider>
                    
                
        
    
        <section id="about" className="section-about --pc" 
         style={{ backgroundImage: `url("https://i.imgur.com/VlIPGC3.png")`, margintop: "-10px",  backgroundsize: "contain"}}
       >

  


  <article class="section-about-wrapper">
    <div class="-label">A Grand Strategy 4x science-fiction game</div>

    <h2 class="-heading">Explore a galaxy full of wonder</h2>

    <div class="-description">
      <p>
        Discover a spectacular and ever-changing universe! Explore, discover and interact with a multitude of species as you journey among the stars. Forge a galactic empire as you delve into newly discovered planets, unearth treasures and establish a direction for your society. Uncover a grand strategy game that reaches the very edges of the universe.
      </p>
    </div>


    <div class="-cta">
      
<a class="
    button
    button--color-terracota button--xlarge
    do-display-video-modal js--pdxdol-exclude
  " href="https://drive.google.com/file/d/1VuXz7eUAt8NGFleIol5XyR5aScU1fS6P/view?usp=sharing">
  
  
        Read Our Whitepaper


  <span class="button__corners"><span></span></span>
</a>
    </div>
  </article>
  
</section>
</ParallaxProvider>
                    
        <section className="section section-lg" style={{ backgroundImage: `url("https://images2.alphacoders.com/794/thumb-1920-794397.png")`}}>
         
        <div id='sections' style={{ backgroundcolor: 'red' }}>
          <div id="foglayer_01" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<div id="foglayer_02" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<div id="foglayer_03" class="fog">
  <div class="image01"></div>
  <div class="image02"></div>
</div>
<br/>  
          <Container>
          <br/>  
            <Row className='justify-content-between'>
              <Col md='6'>
                <Row className='justify-content-between align-items-center'>
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
       
              <Col md='5'>
              <div className="px-md-5">
              <Fade left>
                <h1 className='profile-title text-left'>Deep and Varied Exploration  !  </h1>
         </Fade>
         <Fade left>
                <p className='profile-description text-left'>
                Every game begins with a civilization that has just discovered the means to travel between stars and is ready to explore the galaxy. Have your science ships survey and explore anomalies, leading you into a myriad of quests, introducing strange worlds with even stranger stories and discoveries that may completely change your outcome.
                </p>
                </Fade>
                <Fade left>
                <div className='btn-wrapper pt-3 d-inline-block'> <br/>
                  <Button
                    className='btn-simple'
                    color='info'
                    href='https://discord.gg/xRN4MtsfVN'
                    onClick={e => e.preventDefault()}
                    style={{marginleft: "61px"}}
                  > 
                    <i className='fab fa-discord' /> Join Our Discord 
                  </Button>
                  
                  </div>
                  </Fade>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
              
        </section>
        <section className="section section-lg section-safe">
       
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="6"><br/>
              <img
              id="trash"
                  alt="..."
                  className="img-fluid"
                  src="https://i.ibb.co/q5QcS39/k.webp"
                />
              </Col>
              <Col md="5">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <Fade left>
                  <h1>Stunning Space Visuals</h1>
                  </Fade>
                  <Fade left>
                  <p>
                
                  With characteristically complex unique planets and celestial bodies, you will enter a whirlwind of spectacles in a highly detailed universe.
                  </p>
                  
                  </Fade>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        
                        <div className="ml-3">
                          <h6>Carefully crafted 3D Models</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Amazing Cinematic Space battles </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Experienced and professional Team with  4+  years  of experience in motion design and 3D arts!</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png").default}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
              <hr className="line-success" />
              <Fade left>
                  <h1>Interstellar Warfare! </h1>
                  </Fade>
                  <Fade left>
                  <p>
                  An eternal cycle of war, diplomacy, political tensions , suspicions and alliances await you.
                   Defend or attack  with fully customizable war fleets & alien troopers.Strategy and  adaptation is the key to victory. 
                   Choose from an array of complex technologies from the technology reserach menu and select your Alien heroes to aid
                   you in battle.  
                  You have a multitude of capabilities to choose from to meet the unknown quests that await.
                  </p>
                  </Fade>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Over 100 Alien Commanders to choose from !</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>prepare and defend your fleet for battle ! </h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Choose the correct strategies and Lead your galaxy and emprie to victory ! </h6>
                        </div>
                      </div>
                    </li>
                  </ul>
              </Col>
              <Col md="6">
                <div className="md-7">
                  <hr className="line-success" />
                  <UncontrolledCarousel items={carouselItems2} />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
       
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path3.png").default}
          />
          <Container>
            <Row>
              <Col md="10">
                <hr className="line-info" />
                <h1>
                Explore the limitless wonders of the Kozmo Aliens universe ! <br/><br/><br/><br/>
                 <span className="text-info">Let the stars guide you on your epic journey through the galaxy. </span>
                </h1>
           
              </Col>
              
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/bitcoin.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase"> Play to Earn </h4>
                        <span>Earn $SPACE</span>
                        <hr className="line-primary" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Upgrade Your Alien </ListGroupItem>
                        <ListGroupItem> Win battles </ListGroupItem>
                        <ListGroupItem>Trade Aliens on Marketplace</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="primary">
                    Join Discord
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/etherum.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase"> Marketplace</h4>
                        <span>Marketplace</span>
                        <hr className="line-success" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Sell Aliens</ListGroupItem>
                        <ListGroupItem>Buy spaceships</ListGroupItem>
                        <ListGroupItem>Sell Planet Data</ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="success">
                    Join Discord
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ripp.png").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col className="text-center" md="12">
                        <h4 className="text-uppercase"> Land </h4>
                        <span>Land</span>
                        <hr className="line-info" />
                      </Col>
                    </Row>
                    <Row>
                      <ListGroup>
                        <ListGroupItem>Build Buildings</ListGroupItem>
                        <ListGroupItem>Terraform Planets</ListGroupItem>
                        <ListGroupItem>Explore Stars </ListGroupItem>
                      </ListGroup>
                    </Row>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button className="btn-simple" color="info">
                      Join Discord
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
