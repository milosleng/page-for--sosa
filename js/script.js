const headerText = document.getElementById('header-text');
const headerImage = document.getElementById('header-image');
const header = document.getElementById('header');
const headerContainer = document.getElementById('header-container');
const body = document.querySelector('body');
const paws = document.querySelectorAll('.paw');
// const bigHead = document.getElementById('big-head');
const tokemonics = document.getElementById('tokemonics');
const headDogSmall = document.getElementById('head-dog-small');
const tokemonicsText = document.querySelector('.tokemonics-text');
const tokemonicsImage = document.querySelector('.tokemonics-image');
const buySection = document.getElementById('buy-section');
const bitcoinSvg1 = document.querySelector('.bitcoin-svg-1');
const flashyBitcoin = document.getElementById('flashy-bitcoin');
const buyNowText = document.getElementById('buy-now');

gsap.registerPlugin(ScrollTrigger);

gsap.to(bitcoinSvg1, {
  x: 400,
  // duration: 3,
  scrollTrigger: {
    trigger: bitcoinSvg1,
    start: 'bottom 10%',
    end: 'center 30%',
    scrub: 3,
    toggleActions: 'play play play play',
    markers: {
      startColor: 'black',
      endColor: 'black',
      fontSize: '1rem',
      indent: 100,
    },
  },
});

gsap.to(flashyBitcoin, {
  x: -400,
  scrollTrigger: {
    trigger: bitcoinSvg1,
    start: 'bottom 10%',
    end: 'center 30%',
    scrub: 3,
    toggleActions: 'play complete none none',
  },
});

gsap.to(buyNowText, {
  opacity: 1,
  scrollTrigger: {
    trigger: bitcoinSvg1,
    start: bitcoinSvg1,
    start: 'bottom 10%',
    end: 'center 30%',
    scrub: 3,
    toggleActions: 'play complete none none',
  },
});

//paws animation
gsap
  .timeline()
  .to(headDogSmall, {
    duration: 2,
    ease: 'steps(6)',
    x: 2500,
  })
  .from(paws, { stagger: 0.2, duration: 0.1, opacity: 0, delay: 0.5 });

setTimeout(function () {
  headDogSmall.style.display = 'none';
}, 1400);
//collapsible navbar
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

//render after 3 sec

const myHtml = `<div class="container header-container" id="header-container">
<div class="header-text" id="header-text">
  <h2>
    another breed has been born, <br />
    this time it's <br />
    <span id="bangkaew">Bangkaew</span> <br />
    <em>a thai puppy</em>
  </h2>
  <a href="#buy-section"><button id="header-button">Buy Now</button><a/>
</div>
<div class="header-image" id="header-image">
  <img
    class="logo-large"
    id="logo-large"
    src="/img/logo_primary.jpg"
    alt="dog"
  />
</div>
</div>`;

setTimeout(function () {
  header.insertAdjacentHTML('afterend', myHtml);
}, 2000);
