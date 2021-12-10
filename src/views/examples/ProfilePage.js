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
    src: "https://i.imgur.com/SnY3VsQ.png", 
    altText: 'Choose Your Fraction',
    
  },
  {
    src: "https://i.imgur.com/B1YrC3L.jpg",
    altText: 'My Galaxy ',

  },
  {
    src: "https://i.imgur.com/j1uywDB.png",
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
                <h1 className='profile-title text-left' id="dyk" style={{fontsize: "3.4em",
    wordspacing: "10px",
    letterspacing:" 10px"}}>
                 Kosmo  <span>Aliens </span>
                </h1>
                <h5 className='text-on-back'>01</h5>

              
                <p className='profile-description'>
               Kozmo Aliens is a collection of 8,888 aliens equipped with advanced technology , ultrasonic weapons and
               with a space strategy  Play to Earn game on ETH ,  launching early  2022!! 
               
                </p>
<br/>
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
                <h1 className='profile-title text-left'>Introducing Kozmo Aliens  Play to earn Game  </h1>
                <h5 className='text-on-back'>02</h5> <br/>
                <p className='profile-description text-left'>
                 <span> Fight For Resources and ETH ! </span> Dive into the <span> Kozmo Aliens Universe </span> through a grand strategy game of space exploration, territorial conquest, political domination,  and more!
                  
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
              <br/>
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
                    <span class='pointz-num'>Phase 1   </span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                    <span class='pointz-des'>
                    <strong> Initial minting launch (1,000 NFTs) </strong><br/><br/>
                    <strong>  December 2021   </strong> <br/><br/>
                    The private discord channel will be available exclusively for Kozmo Alien  owners. 
                    Over  <strong>5 ETH  </strong> to be won through our  <strong>weekly crypto puzzles  </strong>, 
                    available exclusively for Kozmo Alien  owners! <br/><br/> Each Alien will be ranked based on its traits  ! Each Kozmo Alien 
                    will give advantages in the Space Atlas game ! <br/><br/><br/><br/>
                  


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
                    <span class='pointz-num'>Phase 2   </span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                 
                    <span class='pointz-des'>
                  <strong> January  2022 <br/><br/>   $Space Token </strong>
                    An ERC20 utility token will be launched that will be freely tradable on Uniswap & These tokens allow you to rename and upgrade
                  your
                   Aliens and write their own backstory, stored in the metadata on the blockchain.<br/><br/>
In the future you will be able to use these tokens to invade other galaxies and upgrade your spaceship , planet and  Kozmo alien.
Every Kozmo Alien gains 10 $Space per day, which can be claimable by paying gas. 

                    </span>
                   
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 3   </span>
                  </Col>
                <Fade left>

                  <Col sm='10'>
                    <span class='pointz-des'><strong> Q1 2022  <br></br> Release of Space Atlas Alpha </strong> <br/><br/>
               Expected launch date of the Kozmo Aliens gaming platform - Space Atlas.
               You can expect to evolve your Kozmo Aliens and SpaceShips, engage in PvP battles and begin building your own galactic empire! 
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
                    <strong> Q2 2022  <br></br> SpaceShip Airdrops + Second Update </strong> <br/><br/>

                    Kozmo space holders will be able to mint their exclusive 1/1 spaceship. 
                   Second Update of the space atlas game will be released , which will include 
                   improved battles , graphics , planets to explore and more units to build
                    </span>
                  </Col>
                  </Fade>
                </Row>

                <div class='vline'></div>

                <Row>
                  <Col sm='2'>
                    <span class='pointz-num'>Phase 5  </span>
                  </Col>
                  <Fade left>
                  <Col sm='10'>
                    <span class='pointz-des'>
                    <strong>Q3 2022  <br></br> Release of Space Atlas Community and Third Update</strong><br/><br/>
                  Launch of the third update of the Space Atlas game, 
                  which will include PvE single player mode , a mini game , the Space Atlas marketplace, farming, and occupations. <br/>
                    </span><br/><br/>
                  </Col>
                  </Fade>
                </Row>
             
              </Col>
            
              <Col md='5'>
                
                <h1 className='roadmap-text'>Roadmap Activations</h1>
                <br/>
              </Col>
             
            </Row>
          </Container>
        </section>
        <section className="section"> <br/> <br/> <br/>
        <Fade left>
          <h1 className="fwa" style={{textAlign:"center", fontSize:"50px"}}> Partners and backers </h1><br/><br/><br/>
          </Fade>
          
        <div class="row"><br/>
  <div class="col-6 col-sm-4"><img id="k"src="https://www.solchicks.io/wp-content/uploads/2021/11/VC-MASTER-VENTURES.png" style={{marginleft: "-50px"}}/></div> <br/>
  <div class="col-6 col-sm-4"><img id="g" src="https://www.solchicks.io/wp-content/uploads/2021/11/II-GTS.png"/></div><br/>
  <div class="col-6 col-sm-4"><img id="what" src="https://www.solchicks.io/wp-content/uploads/2021/11/II-whatoplay.png"/></div><br/>
  <div class="col-6 col-sm-4"><img id="b" src="https://www.solchicks.io/wp-content/uploads/2021/10/Blockchain.News-logo_black_bbg.png" style={{height: " 70px" , 
    margintop: "17px" }}/></div><br/>
  


  <div class="col-6 col-sm-4"><img id="fff" src="https://www.solchicks.io/wp-content/uploads/2021/11/CM-FFventures.png"/></div><br/>
  <div class="col-6 col-sm-4"><img id= "c" src="https://www.solchicks.io/wp-content/uploads/2021/10/coindesk-logo.svg"/></div><br/>
  <div class="col-6 col-sm-4"><img id="cu" src="https://www.solchicks.io/wp-content/uploads/2021/11/curate_full_logo_280x66.png"/></div>
  <div class="col-6 col-sm-4"><img id="m" src="https://metaverse.properties/wp-content/uploads/2020/09/Decentraland-1024x374.png"/></div><br/>
  <div class="col-6 col-sm-4"><img id="fd" src=" https://www.solchicks.io/wp-content/uploads/2021/09/altura.png"/> </div><br/>
  </div>
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
                            <span class="designation">CEO  <br></br> B.S. business management @NYU Stern School of Business   </span>
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
                            <span class="designation">Head of 3D & Motion  Department . <br></br> Former graphics designer at Leauge of Legends. </span>
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
                            <h4 class="name"><a href="https://www.linkedin.com/in/3dhome/">Maxwell Rose</a></h4>
                            <span class="designation">Lead Blockchain Developer <br></br>  </span>
                        </div>
                    </div>
                </div>
                
                <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img    src= "https://i.imgur.com/F7eJkXm.png" />
                               
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="https://www.linkedin.com/in/aruncherny/">Arun Cherny</a></h4>
                            <span class="designation">SMM Manager   </span>
                        </div>
                    </div>
                </div>
                     <div class="speaker-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
                    <div class="inner-box">
                        <div class="image-box">
                            <figure class="image"><img    src= "https://i.imgur.com/l8bThW2.png" />
                               
                            </figure>
                        </div>
                        <div class="caption-box">
                            <h4 class="name"><a href="https://i.imgur.com/2LlZEOy.jpg/">John Shirman </a></h4>
                            <span class="designation">Content Director   </span>
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
                            <h4 class="name"><a href="https://twitter.com/Nnamokooh"> Maximillian Gacek  </a></h4>
                            <span class="designation">Head of Game Development. <br></br> B.S Computer Science Yale University </span>
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
