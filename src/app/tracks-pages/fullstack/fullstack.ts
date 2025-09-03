import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
declare function particlesJS(tagId: string, params: object): void;

interface Course {
  platform: string;
  rating: number;
  title: string;
  description: string;
  url: string;
  categories: string;
}

@Component({
  selector: 'app-fullstack',
  templateUrl: './fullstack.html',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  styleUrls: ['../../app.css'],
  standalone: true
})
export class Fullstack {
  coursesPerPage = 4;
  expanded = false;

  //add courses here

  courses: Course[] = [
    {
      platform: 'Udemy',
      rating: 4.8,
      title: 'The Complete Web Developer in 2024',
      description: 'Learn to build full-stack web applications from scratch. Covers HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB with real-world projects.',
      url: 'https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/',
      categories: 'fullstack'
    },
    {
      platform: 'Udemy',
      rating: 4.7,
      title: 'MERN Stack Front To Back',
      description: 'Build a complete social network application with MongoDB, Express, React, and Node.js. Includes authentication, profiles, and post functionality.',
      url: 'https://www.udemy.com/course/mern-stack-front-to-back/',
      categories: 'mern'
    },
    {
      platform: 'University of Helsinki',
      rating: 4.9,
      title: 'Full Stack Open',
      description: 'Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This free course will teach you modern JavaScript-based web development.',
      url: 'https://fullstackopen.com/en/',
      categories: 'fullstack'
    },
    {
      platform: 'Frontend Masters',
      rating: 4.8,
      title: 'The JavaScript Bootcamp',
      description: 'Master JavaScript fundamentals through advanced topics. Essential for both frontend and backend development with real-world exercises.',
      url: 'https://frontendmasters.com/bootcamp/',
      categories: 'javascript'
    },
    {
      platform: 'Harvard (edX)',
      rating: 4.9,
      title: "CS50's Web Programming",
      description: "Harvard's introduction to web development with Python, JavaScript, and SQL. Learn database design, scalability, security, and user experience.",
      url: 'https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript',
      categories: 'cs'
    },
    {
      platform: 'Udemy',
      rating: 4.9,
      title: 'JavaScript: Understanding the Weird Parts',
      description: "Dive deep into JavaScript's underlying concepts and mechanisms. Learn how JavaScript works behind the scenes.",
      url: 'https://www.udemy.com/course/understand-javascript/',
      categories: 'javascript'
    },
    {
      platform: 'Udemy',
      rating: 4.7,
      title: 'Node.js, Express, MongoDB & More',
      description: 'Build a complete backend with Node.js. Learn to create RESTful APIs, handle authentication, and integrate with MongoDB databases.',
      url: 'https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/',
      categories: 'nodejs'
    },
    {
      platform: 'Udemy',
      rating: 4.8,
      title: 'Complete React Developer in 2024',
      description: 'Master modern React development with Hooks, Redux, GraphQL, Stripe, Firebase, and more. Build a massive e-commerce application.',
      url: 'https://www.udemy.com/course/complete-react-developer-zero-to-mastery/',
      categories: 'react'
    },
    {
      platform: 'Udemy',
      rating: 4.7,
      title: "MongoDB - The Complete Developer's Guide",
      description: 'Learn MongoDB from scratch. Master CRUD operations, indexing, aggregation framework, and Node.js integration.',
      url: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide/',
      categories: 'database'
    },
    {
      platform: 'Udemy',
      rating: 4.7,
      title: 'The Ultimate MySQL Bootcamp',
      description: 'Learn SQL from scratch. Master queries, joins, and database design. Build a complete web application with Node.js and MySQL.',
      url: 'https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/',
      categories: 'database'
    },
    {
      platform: 'YouTube - Coding Addict',
      rating: 4.8,
      title: 'MERN Stack Course in Arabic',
      description: 'A comprehensive full-stack development course in Arabic covering MongoDB, Express, React, and Node.js with practical projects.',
      url: 'https://www.youtube.com/playlist?list=PL_Eu4eWw36IMBrTx-F53-is8KdHcvGFcq',
      categories: 'arabic'
    },
    {
      platform: 'Udemy',
      rating: 4.7,
      title: 'Git & GitHub - The Complete Git Guide',
      description: 'Master version control with Git and GitHub. Essential for any full-stack developer working in teams or on personal projects.',
      url: 'https://www.udemy.com/course/git-expert-4-hours/',
      categories: 'tools'
    }
  ];

  get visibleCourses(): Course[] {
    return this.expanded ? this.courses : this.courses.slice(0, this.coursesPerPage);
  }

  get showMoreText(): string {
    return this.expanded ? 'Show Less' : 'Show More';
  }

  get showMoreIcon(): string {
    return this.expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  }

  toggleCourses() {
    this.expanded = !this.expanded;
  }
}


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
