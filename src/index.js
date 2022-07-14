const data = document.body;
import logo from './assets/logo.svg';
import tabletImage from './assets/tablet/image-hero.png';
import desktopImageHero from './assets/desktop/image-hero-left.png';
import desktopImageHeroRight from './assets/desktop/image-hero-right.png'
import woman from './assets/desktop/image-woman-in-videocall.jpg';
import women from './assets//desktop/image-women-videochatting.jpg';
import men from './assets/desktop/image-men-in-meeting.jpg';
import man from './assets/desktop/image-man-texting.jpg';
const temp = document.createElement('template')

temp.innerHTML = `


<header>
    <nav>
      <div class="logo"><img src="${logo}" alt="logo"></div>
    </nav>
    <div class="faces">
      <img class="mobile-image" src="${tabletImage}" alt="">
      <img class="d-image-left" src="${desktopImageHero}" alt="many faces ">
      <img class="d-image-right" src="${desktopImageHeroRight}" alt="">
    </div>
    <div class="center hero-text">
      <div class="container">
        <h1>Group Chat
          for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
        </p>
        <div class="btns">
          <button class="download-btn">
            Download <span class="version">
              v1.3
            </span>
          </button>

          <button class="what-is-it-btn">
            What is it?
          </button>
        </div>

      </div>

    </div>
  </header>
  <section class="center  m-width">
    <div class="marker">
      <hr class="line">
      <span class="section-marker">
        01
      </span>
    </div>

    <div class="images">
      <img src="${woman}" alt="woman-in-videocall">
      <img src="${women}" alt="women-videochatting">
      <img src="${men}" alt="men-in-a-meeting">
      <img src="${man}" alt="image-man-texting">
    </div>
    <div class="center md-center">
      <h3>
        Built for modern use
      </h3>
      <h2>
        Smarter meetings, all in one place
      </h2>
      <p>
        Send messages, share files, show your screen, and record your meetings — all in one
        workspace. Control who can join with invite-only team access, data encryption, and data export.
      </p>

      <div class="marker">
        <hr class="line">
        <span class="section-marker footer-marker">
          02
        </span>
      </div>
    </div>
  </section>
  <footer>
    <div class="center footer-text container">
      <div>
      <h2>
        Experience more together
      </h2>
    </div>
    <div>
      <p>
        Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.
      </p>
    </div>
      <div>
        <button class="download-btn">
          Download <span class="version">
            v1.3
          </span>
        </button>
      </div>
    </div>
  </footer>
`

data.append(temp.content)