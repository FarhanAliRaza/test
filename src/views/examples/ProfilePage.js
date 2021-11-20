/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.sm)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import Fade from 'react-reveal/Fade';
import { fadeIn } from 'react-animations'
import classnames from 'classnames'
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar'
import StarfieldAnimation from 'react-starfield-animation'

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  FormText,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from 'reactstrap'

// css
import './style.css'

// core components
import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js'
import Footer from 'components/Footer/Footer.js'

const carouselItems = [
  {
    src: "https://i.imgur.com/pWap3Z1.png", 
    altText: 'Slide 1',
  },
  {
    src: "https://i.imgur.com/YoSa7Uh.png", 
    altText: 'Slide 2',
    
  },
  {
    src: "https://i.imgur.com/8V0fd9Z.jpg",
    altText: 'Slide 3',

  },
  {
    src: "https://i.imgur.com/j1uywDB.png"
    altText: 'Slide 3',

  }
]

let ps = null

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1)
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      document.documentElement.className += ' perfect-scrollbar-on'
      document.documentElement.classList.remove('perfect-scrollbar-off')
      let tables = document.querySelectorAll('.table-responsive')
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i])
      }
    }
    document.body.classList.toggle('profile-page')
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        //ps.destroy();
        document.documentElement.className += ' perfect-scrollbar-off'
        document.documentElement.classList.remove('perfect-scrollbar-on')
      }
      document.body.classList.toggle('profile-page')
    }
  }, [])
  return (
    <>
      <ExamplesNavbar />
      <div className='wrapper'>
        <div className='page-header'>
          <img
            alt='...'
            className='dots'
            src={require('assets/img/dots.png').default}
          />
          <img
            alt='...'
            className='path'
            src={require('assets/img/path4.png').default}
          />
          <Container className='align-items-center'>
            <StarfieldAnimation
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}
            />
            <Row>
              <Col lg='6 order-2 order-lg-0' md='6 order-2 order-lg-0'>
                <h1 className='profile-title text-left'>
                  Welcome to Kosmo Alien <span>Space Club</span>
                </h1>
                <h5 className='text-on-back'>01</h5>

              
                <p className='profile-description'>
               Kozmos Alien is a collection of 8,888 aliens equipped with advanced technology and ultrasonic weapons.
             . Each Alien NFT contains a clue to solving our weekly crypto puzzles
               hosted in our discord!!
               
                </p>

                <div className='btn-wrapper profile pt-3'>
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
                  >
                    <i className='fab fa-discord' />
                  </Button>
                  <UncontrolledTooltip delay={0} target='tooltip951161185'>
                    Join our Discord
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className='ml-auto mr-auto' lg='4' md='6'>
                <img
                  alt='...'
                  className='shapes circle'
                  src={require('assets/img/chester-wade.jpg').default}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div id='sections' style={{ backgroundcolor: 'red' }}>
          <Container>
            <Row className='justify-content-between'>
              <Col md='6'>
                <Row className='justify-content-between align-items-center'>
                  <UncontrolledCarousel items={carouselItems} />
                </Row>
              </Col>
              <Col md='5'>
                <h1 className='profile-title text-left'>Rarity</h1>
                <h5 className='text-on-back'>02</h5>
                <p className='profile-description text-left'>
                  All 8,888 <span>Kozmo</span> Aliens are unique, there is no
                  one like another. Each Alien is has its own special rank ,
                  stats and its own unique abilities that can be used to your advantage in space battles ! 
                  
                </p>
                <div className='btn-wrapper pt-3 d-inline-block'> <br/>
                  <Button
                    className='btn-simple'
                    color='info'
                    href='https://discord.gg/xRN4MtsfVN'
                    onClick={e => e.preventDefault()}
                  > 
                    <i className='fab fa-discord' /> Join The Communitiy 
                  </Button>
              
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className='section'>
          <Container>
            <Row>
           
              <Col lg='6' className='d-flex justify-content-center  text-left'>
                <div id="j" style={{marginleft:"10px"}}>
                  <div class='neon'>Join The</div> <br/><br/>
                  <div class='flux'>Kosmos</div>
                </div>
              </Col>
         

              <Col className='ml-auto mr-auto card-mint' lg='6'>
                <Card
                  className='card-coin card-plain '
                  style={{ background: '#9e7599' }}
                >
                  <CardHeader>
                    <h4 className='mint-head'>Count your Aliens</h4>
                    <h4 className='mint-title'>
                      Enter the Amount of Aliens You would like to buy
                    </h4>
                  </CardHeader>

                  {/* card body */}

                  <CardBody>
                    <div className='rf-card-desktop'>
                      <Row>
                        <Col md='4'>
                          <img
                            alt='...'
                            className='img-fluid m-4'
                            style={{ width: '100px' }}
                            src={require('assets/img/41.jpg').default}
                          />
                        </Col>
                        <Col md='8'>
                          <h6 class='price-h'>Price per alien</h6>
                          <h6 class='price-n'>
                            <span>0.06 </span>Eth Each
                          </h6>
                          <h6 class='price-h'>8,888 remaining</h6>
                        </Col>
                      </Row>
                    </div>
                    <div className='rf-card-mobile rf-card-row'>
                      <div className='rf-card-imgbx'>
                        <img
                          alt='...'
                          className='img-fluid m-4'
                          id="fw"
                          style={{ width: '100px' }}
                          src={require('assets/img/41.jpg').default}
                        />
                      </div>
                      <div>
                        <h6 class='price-h'>Price per alien</h6>
                        <h6 class='price-n'>
                          <span>0.06 </span>Eth Each
                        </h6>
                        <h6 class='price-h'>8,888 remaining</h6>
                      </div>
                    </div>
                    <div class='form-div'>
                      <input class='onum' defaultValue='1' type='text' />
                    </div>

                    <div class='hline'></div>

                    <div class='ta-div'>
                      <h6 class='totalh'>Total</h6>
                      <h6 class='totala'>0.06 ETH</h6>
                    </div>

                    <div class='hline'></div>

                    <Button
                      className='btn btn-mint mx-auto m-3'
                      color='primary'
                      type='submit'
                      style={{ width: '100%' }}
                      disabled
                    >
                      Coming Soon
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='section' id='crap-roadmap'>
          
          <Container>
            
            <Row>
              
           
              <Col md='7 order-2 order-lg-0'>
              
                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 1 </span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                    <span class='pointz-des'>
                    <strong>  5%  The Galaxy is created </strong> <br/><br/>
                    The private discord channel will be available exclusively for Kozmo Alien  owners. 
                    Over  <strong>5 ETH  </strong> to be won through our  <strong>weekly crypto puzzles  </strong>, 
                    available exclusively for Kozmo Alien  owners! <br/><br/> Each Alien will be ranked based on its traits!<br/><br/><br/><br/>
                  

                    <strong>  🌟  Dj $pace  🌟  </strong> <br/><br/><br/><br/>
             DJ $pace joins the kozmos. and transmits his music to earth. Live streamed sets every week. <br/><br/>

             <strong>    🚀 Terraforming 🚀</strong><br/><br/>
 Members can choose which galaxy they belong too. The 3 galaxies; Milky Way, Andromeda, and
  Triangulum galaxies are all rivals. Which side will you join? <br/><br/>

Members may access 1 galaxy via the #galaxies_2000 terminal in Discord.            
     Members of Galaxies will be able to participate in games, giveaways and quizzes ! <br/><br/><br/><br/>
     
     Each Galaxiy will fight to control resources , land and weapons!
     Compete against other Galaxies on the Player Galaxy  Ranked Leaderboard! 

                    </span>
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 2  </span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                 
                    <span class='pointz-des'>
                  <strong> 15%  $Space Token </strong>
                    <strong> Two weeks later   </strong>  An ERC20 utility token will be launched that will be freely tradable on Uniswap & These tokens allow you to rename and upgrade
                  your
                   Aliens and write their own backstory, stored in the metadata on the blockchain.<br/><br/>
In the future you will be able to use these tokens to invade other galaxies and upgrade your spaceship , planet and  Kozmo alien.
Every Kozmo gains 10 $Space per day, which can be claimable by paying gas. 

                    </span>
                   
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 3 </span>
                  </Col>
                <Fade left>

                  <Col sm='10'>
                    <span class='pointz-des'><strong>25%   Merch drop</strong> <br/><br/>
                    The Shoppy Planet  is now open.
Get decked out in an exclusive selection  of Kozmo Alien  merch.
Get a unique gift from the universe.
Kozmo  owners with a selected trait (to be revealed) will receive free merch!     
                    
                    </span>
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 4  </span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                    <span class='pointz-des'>
                    <strong> 50 % Kosmo SpaceShip </strong> <br/><br/>

                    Kozmo space holders will be able to mint their exclusive 1/1 spaceship. 
                    Later you will be able to use this ship to invade other galaxies 
                    in an exclusive PVP play to earn game with community prizes.   
                    </span>
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 5 </span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                    <span class='pointz-des'>
                    <strong>75% - 100%  Space Wars Begin</strong><br/><br/>
                    An exclusive play to earn PVP game will be launched allowing Kozmo Alien
                     holders to battle and invade other galaxies and earn more space token. 
                    </span>
                  </Col>
                  </Fade>
                </Row>
             
              </Col>
            
              <Col md='5'>
                
                <h1 className='roadmap-text'>Roadmap Activations</h1>
              </Col>
             
            </Row>
          </Container>
        </section>
        <section id="n">
        <section id="n" class="speakers-section" style= {{backgroundImage: `url("https://i.ibb.co/92HJxz2/team-bg.jpg")`}}>
        <div class="parallax-scene parallax-scene-2 anim-icons">
            <span data-depth="0.40" class="parallax-layer icon icon-circle-5"></span>
            <span data-depth="0.99" class="parallax-layer icon icon-circle-5"></span>
        </div>

        <div class="container">
            <div class="sec-title light text-center">
               <h1> <span class="title">Our Team</span> </h1>
                <h6>Meet the Team</h6>
            </div>

            <div class="row">
          
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                    <div class="inner-box">
                        <div class="image-box">
                       
                            <figure class="image"><img    src={require('assets/img/90.jpg').default}
/>                              
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href=" https://www.instagram.com/leonb_official/">Leon  </a></h4>
                            <span class="designation">Supreme Commander </span>
                        </div>
                    </div>
                </div>

           
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img    src= "https://i.imgur.com/0a6p197.jpeg" />
                               
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="https://www.linkedin.com/in/3dhome/">Shahidaasy</a></h4>
                            <span class="designation">Graphic Designer </span>
                        </div>
                    </div>
                </div>
                
                

         
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img    src="https://i.imgur.com/UgC9b7t.jpg" />
                              
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="https://twitter.com/Nnamokooh"> Kaycee  </a></h4>
                            <span class="designation">Project Manager </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </section>
        <Footer />
      </div>
    </>
  )
}
