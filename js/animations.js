// Import GSAP (add the script tags in your HTML first)

document.addEventListener('DOMContentLoaded', () => {
  // Initial animations when page loads
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  // Navbar animation
  tl.to('nav', { 
    opacity: 1, 
    y: 0, 
    duration: 1 
  });
  
  // Hero section animations
  tl.to('.container', { 
    opacity: 1, 
    duration: 1 
  }, "-=0.5");
  
  tl.to('.left h1', { 
    opacity: 1, 
    y: 0, 
    duration: 1 
  }, "-=0.7");
  
  tl.to('.left p', { 
    opacity: 1, 
    y: 0, 
    duration: 1 
  }, "-=0.7");
  
  tl.to('.right', { 
    opacity: 1, 
    x: 0, 
    duration: 1 
  }, "-=0.7");
  
  // Scroll animations
  gsap.registerPlugin(ScrollTrigger);
  
  gsap.to('.section-header p', {
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 80%'
    },
    opacity: 1,
    duration: 0.8
  });
  
  gsap.to('.section-header h2', {
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 80%'
    },
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.2
  });
  
  // Animate resource cards
  const resourceCards = document.querySelectorAll('.resources > div');
  resourceCards.forEach((card, index) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1
    });
  });
  
  // Text scramble effect for page headings
  if (document.querySelector('.page-title')) {
    const fx = new TextScramble(document.querySelector('.page-title'));
    fx.setText(document.querySelector('.page-title').textContent);
  }
});

// Text scramble animation class
class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }
  
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => this.resolve = resolve);
    this.queue = [];
    
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  
  update() {
    let output = '';
    let complete = 0;
    
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    
    this.el.innerHTML = output;
    
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}