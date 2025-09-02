import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Track {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  iconClass: string;
}

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css'
})
export class TracksComponent implements OnInit {
  tracks: Track[] = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Master HTML, CSS, JavaScript and modern frameworks like React to build beautiful, interactive user interfaces.',
      icon: 'fa-code',
      route: '/frontend',
      iconClass: 'frontend'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Build robust server-side applications, APIs and database systems that power modern applications.',
      icon: 'fa-database',
      route: '/backend',
      iconClass: 'backend'
    },
    {
      id: 'fullstack',
      title: 'Full Stack Development',
      description: 'Master both frontend and backend technologies to build complete web applications from start to finish.',
      icon: 'fa-layer-group',
      route: '/fullstack',
      iconClass: 'fullstack'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      icon: 'fa-mobile-alt',
      route: '/mobile',
      iconClass: 'mobile'
    },
    {
      id: 'data-ml',
      title: 'Data Science & ML',
      description: 'Learn to analyze data and build machine learning models to derive meaningful insights and predictions.',
      icon: 'fa-chart-network',
      route: '/data-ml',
      iconClass: 'datascience'
    },
    {
      id: 'devops-cloud',
      title: 'DevOps & Cloud',
      description: 'Master tools and practices for deploying, managing, and scaling applications in the cloud.',
      icon: 'fa-server',
      route: '/devops-cloud',
      iconClass: 'devops'
    },
    {
      id: 'UI/UX',
      title: 'UI/UX',
      description: 'Learn user-centered design principles to create beautiful interfaces and seamless user experiences.',
      icon: 'fas fa-paint-brush',
      route: '/ux',
      iconClass: 'uiux'
    },
    {
      id: 'Cyber',
      title: 'Cybersecurity',
      description: 'Learn to identify vulnerabilities and protect systems from cyber threats and attacks.',
      icon: 'fas fa-shield-alt',
      route: '/cyber',
      iconClass: 'security'
    }
  ];

  ngOnInit() {
    if (typeof particlesJS === 'function') {
      particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 1000 } },
          color: { value: ["#0cffe1", "#7000ff", "#ffffff"] },
          shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
          opacity: { value: 0.4, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
          size: { value: 2, random: true }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
          }
        }
      });
    }
  }
}

declare function particlesJS(tagId: string, params: object): void;

document.addEventListener('DOMContentLoaded', function() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 1000
        }
      },
      "color": {
        "value": ["#0cffe1", "#7000ff", "#ffffff"]
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
      },
      "opacity": {
        "value": 0.4,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#0cffe1",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.6
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });

  const menuToggle = document.querySelector('.menu-toggle') as HTMLElement | null;
  const navLinks = document.querySelector('.nav-links') as HTMLElement | null;

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }

  document.addEventListener('mousemove', (e: MouseEvent) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;

    const particles = document.getElementById('particles-js') as HTMLElement | null;
    if (particles) {
      particles.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  });
});

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

class TextScramble {
  el: HTMLElement;
  chars: string;
  queue: QueueItem[];
  frameRequest: number;
  frame: number;
  resolve: (() => void) | undefined;

  constructor(el: HTMLElement) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
    this.queue = [];
    this.frameRequest = 0;
    this.frame = 0;
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => this.resolve = resolve);
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
      if (this.resolve) this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const repoCard = document.querySelector('.repo-card') as HTMLElement | null;

  if (repoCard) {
    const starCount = document.querySelector('.star-count') as HTMLElement | null;
    if (starCount) {
      starCount.addEventListener('mouseenter', () => {
        starCount.style.transform = 'scale(1.2)';
        starCount.style.transition = 'transform 0.3s ease';
      });

      starCount.addEventListener('mouseleave', () => {
        starCount.style.transform = 'scale(1)';
      });
    }

    let isDragging = false;
    let offsetX = 0, offsetY = 0;

    repoCard.addEventListener('mousedown', (e: MouseEvent) => {
      isDragging = true;
      offsetX = e.clientX - repoCard.getBoundingClientRect().left;
      offsetY = e.clientY - repoCard.getBoundingClientRect().top;

      repoCard.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDragging) return;

      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;

      const parentCard = repoCard.parentElement as HTMLElement | null;
      if (parentCard) {
        parentCard.style.position = 'absolute';
        parentCard.style.left = x + 'px';
        parentCard.style.top = y + 'px';
        parentCard.style.bottom = 'auto';
        parentCard.style.right = 'auto';
      }

      e.preventDefault();
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        repoCard.style.cursor = 'pointer';
      }
    });
  }
});

