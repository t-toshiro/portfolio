import React from 'react'
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import profileImage from "../Images/IMG_2658.jpg";
import pythonImage from "../Images/python_18894.png"



const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>TOSHIRO TSUGARU</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        津軽寿史郎です。現在、私は筑波大学の一年生で大学での勉強と両立しながらプログラミングをしています。プログラミングは2024年の夏から始めて、Python,HTML/CSS,Reactなどをこれまで学習してきました。
      </p>

      
      

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={pythonImage} />
              <h4>Python</h4>
              <p>Pythonがつかえます</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
