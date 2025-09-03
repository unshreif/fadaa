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
  selector: 'app-ux',
  templateUrl: './ux.html',
  imports: [
    NgIf,
    NgForOf,
    RouterLink
  ],
  styleUrls: ['../../app.css'],
})
export class Ux {
  coursesPerPage = 4;
  expanded = false;

  //add courses here

  courses: Course[] = [
    {
      platform: 'Udemy',
      rating: 4.8,
      title: 'UI/UX Design Bootcamp',
      description: 'A comprehensive course covering the entire UI/UX design process from research to final design handoff. Create a professional portfolio with real-world projects.',
      url: 'https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/',
      categories: 'comprehensive'
    },
    {
      platform: 'Udemy',
      rating: 4.7,
      title: 'Figma UI/UX Design Essentials',
      description: 'Master Figma from beginner to advanced. Create wireframes, prototypes, and design systems while learning professional workflows and techniques.',
      url: 'https://www.udemy.com/course/figma-ux-ui-design-fundamentals/',
      categories: 'figma'
    },
    {
      platform: 'Coursera - Google',
      rating: 4.8,
      title: 'Google UX Design Professional Certificate',
      description: "Google's comprehensive UX design program covering the design process, wireframing, prototyping, and research. Includes hands-on projects and portfolio building.",
      url: 'https://www.coursera.org/professional-certificates/google-ux-design',
      categories: 'certificate'
    },
    {
      platform: 'Interaction Design Foundation',
      rating: 4.6,
      title: "Design Thinking: The Beginner's Guide",
      description: 'Learn the design thinking methodology used by companies like Apple and Google to solve complex problems and create innovative solutions.',
      url: 'https://www.interaction-design.org/courses/design-thinking-the-beginner-s-guide',
      categories: 'design-thinking'
    },
    {
      platform: 'Interaction Design Foundation',
      rating: 4.7,
      title: 'User Research - Methods and Best Practices',
      description: 'Master user research techniques including interviews, surveys, usability testing, and analytics to inform your design decisions.',
      url: 'https://www.interaction-design.org/courses/user-research-methods-and-best-practices',
      categories: 'research'
    },
    {
      platform: 'Udemy',
      rating: 4.6,
      title: 'Adobe XD - UI/UX Design from Scratch',
      description: 'Learn Adobe XD from the basics to advanced prototyping. Design websites, mobile apps, and create interactive prototypes with animations.',
      url: 'https://www.udemy.com/course/adobe-xd-ui-ux-design/',
      categories: 'adobe'
    },
    {
      platform: 'DesignCourse',
      rating: 4.8,
      title: 'Designing User Interfaces',
      description: 'Master modern UI design with a focus on color theory, typography, visual hierarchy, and composition to create beautiful, functional interfaces.',
      url: 'https://designcourse.com/ui',
      categories: 'ui'
    },
    {
      platform: 'Interaction Design Foundation',
      rating: 4.7,
      title: 'Interaction Design for Usability',
      description: 'Learn the principles of creating effective interactions that help users accomplish their goals with minimal friction and maximum satisfaction.',
      url: 'https://www.interaction-design.org/courses/interaction-design-for-usability',
      categories: 'interaction'
    },
    {
      platform: 'LinkedIn Learning',
      rating: 4.6,
      title: 'Design Systems: Building a Scalable UI Kit',
      description: 'Learn how to create, document, and maintain a design system that ensures consistency across products and streamlines the design process.',
      url: 'https://www.linkedin.com/learning/design-systems-creating-design-principles',
      categories: 'design-systems'
    },
    {
      platform: 'Skillshare',
      rating: 4.8,
      title: 'UX Design Portfolio: Showcasing Your Work',
      description: 'Learn how to craft a compelling UX portfolio that demonstrates your process, highlights your skills, and impresses potential employers.',
      url: 'https://www.skillshare.com/classes/UX-Design-Portfolio-Case-Studies-Showcasing-Your-Design-Process/1974657779',
      categories: 'portfolio'
    },
    {
      platform: 'YouTube - Hussam Zidane',
      rating: 4.8,
      title: 'UI/UX Design Course in Arabic',
      description: 'A comprehensive Arabic course covering UI/UX design fundamentals, Figma, wireframing, prototyping, and design principles with practical examples.',
      url: 'https://www.youtube.com/playlist?list=PLV6Aq_pqxEFZYI3EBkYYnxCDc2JDnYpKB',
      categories: 'arabic'
    },
    {
      platform: 'Skillshare',
      rating: 4.7,
      title: 'Practical Color Theory for Digital Designers',
      description: 'Master the principles of color theory and learn how to create effective, harmonious color palettes for your digital design projects.',
      url: 'https://www.skillshare.com/classes/Color-for-Designers-Exploration-Theory-Application/1307154279',
      categories: 'color'
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