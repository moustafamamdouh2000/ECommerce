import './About.css';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
function About() {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return <div>
    <div id="navbar" className="hero">
      <h1 className="py-2 px-5 pt-5 ms-5" style={{ "font-size": "3rem", "color": "white" }}>
        Moustafa Mamdouh
      </h1>
      <h2 style={{ "color": "white", "font-size": "1.5rem", "padding-left": "10rem" }}>
        Web Developer & Designer
      </h2>
      <div className="work-links">
        <a className='lnked-link' href="https://www.linkedin.com/in/moustafa-sabry/" target={'_blank'}>Linked In         <AiFillLinkedin className='lnked-icon' /></a>
        <a className='github-link' href="https://github.com/moustafamamdouh2000" target={'_blank'}>GitHub         <AiFillGithub className='github-icon' /></a>
      </div>
    </div>
    <div>
      <h1 className='abt-me'>About me</h1>
      <p className="text-sm-start text-md-start text-lg-start text-wrap lorem-1">
        Studied at AAST , expereince in HTML & CSS ,javascript. currently learning
        angular,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, molestias.
      </p>
    </div>
    <div className="skills" style={{ "background-color": "#3d3d3d" }}>
      <h1 className="text-center pt-4 pb-4" style={{ "color": "white" }}>Skills</h1>
      <p className="text-center pb-5" style={{ "color": "white" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo, id
        dolorem distinctio odit ea? Molestiae numquam eum perferendis soluta et
      </p>
      <div className="container text-center">
        <div className="row">
          <div className="col-6 g">
            <h3>FrameWorks i used</h3>
            <h4>---------------------</h4>
            <h5 className="pb-2">Angular</h5>
            <h5 className="pb-2">Bootstrap</h5>
          </div>
          <div className="col-6">
            <ul>
              <li>
                <div className="progress" style={{ "height": "2rem", "margin-top": "1.5rem" }}>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "20%", "background-color": "grey" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    HTML
                  </div>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "20%", "background-color": "rgb(160, 153, 153)" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </li>
              <li>
                <div className="progress" style={{ "height": "2rem", "margin-top": "1.5rem" }}>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "20%", "background-color": "grey" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    CSS
                  </div>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "10%", "background-color": "rgb(160, 153, 153)" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </li>
              <li>
                <div className="progress" style={{ "height": "2rem", "margin-top": "1.5rem" }}>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "20%", "background-color": "grey" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    JavaScript
                  </div>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "50%", "background-color": "rgb(160, 153, 153)" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </li>
              <li>
                <div className="progress" style={{ "height": "2rem", "margin-top": "1.5rem" }}>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "20%", "background-color": "grey" }}
                    aria-valuenow={60}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    Typescript
                  </div>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "50%", "background-color": "rgb(160, 153, 153)" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </li>
              <li>
                <div className="progress" style={{ "height": "2rem", "margin-top": "1.5rem" }}>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "20%", "background-color": "grey" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    Bootstrap
                  </div>
                  <div
                    className="progress-bar"
                    role={"progressbar"}
                    aria-label={"Example 20px high"}
                    style={{ "width": "20%", "background-color": "rgb(160, 153, 153)" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container-flex overflow-hidden text-center">
      <h1 class="ps-5 pt-5 pb-5 text-start">Some of my works</h1>
      <div class="row justify-content-center">
        <div class="col-3 grey m-3">
          <h4>Header4</h4>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
        <div class="col-3 black m-3">
          <h4>Header4</h4>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
        <div class="col-3 grey m-3">
          <h4>Header4</h4>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-3 black m-3">
          <h4>Header4</h4>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
        <div class="col-3 grey m-3">
          <h4>Header4</h4>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
        <div class="col-3 black m-3">
          <h4>Header4</h4>
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
      </div>
    </div>
    <div class="container-flex bg-dark justify-content-center footer" style={{ "color": "white" }}>
      <button class="btn-top" onClick={scrollToTop}>
        <a className='link-top'>To Top</a>
      </button>
    </div>
  </div>;
}

export default About;
