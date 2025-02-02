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

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase"></h2>
            <h3 class="section-subheading text-muted mb-5">
              
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
              <i class="fa-solid fa-fire fa-2xl"></i>
              </span>
              <h4 class="my-3">今ハマっていること</h4>
              <p class="text-muted">
                謎解きにハマっており、友人と一緒に色々な謎解き公演に参加しています。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
           
               <i class="fa-solid fa-basketball fa-2xl"></i>
              </span>
              <h4 class="my-3">趣味</h4>
              <p class="text-muted">
                小学校の時にバスケットボールをはじめ、中学、高校もバスケ部に所属していました。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
              <i class="fa-solid fa-bullseye fa-2xl"></i>
              </span>
              <h4 class="my-3">目標</h4>
              <p class="text-muted">
                インターンの中で実務経験を積み、より優れたエンジニアになることが目標です。
              </p>
            </div>
          </div>
        </div>
      </section>

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
