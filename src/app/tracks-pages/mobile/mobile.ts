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
  selector: 'app-mobile',
  templateUrl: './mobile.html',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./mobile.css']
})
export class Mobile {
  coursesPerPage = 4;
  expanded = false;

  //add courses here 

  courses: Course[] = [
    {
      platform: 'Udemy',
      rating: 4.8,
      title: 'React Native - The Practical Guide',
      description: 'Build native mobile apps for iOS and Android using React Native. Master Hooks, Navigation, and Redux while creating real-world projects.',
      url: 'https://www.udemy.com/course/react-native-the-practical-guide/',
      categories: 'react-native'
    },
    {
      platform: 'Udemy',
      rating: 4.7,
      title: 'Flutter & Dart - The Complete Guide',
      description: 'Learn Flutter and Dart from scratch and build beautiful, responsive, cross-platform apps for Android and iOS.',
      url: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/',
      categories: 'flutter'
    },
    {
      platform: 'Udemy',
      rating: 4.8,
      title: 'iOS & Swift - The Complete iOS App Development Bootcamp',
      description: 'Become a professional iOS developer with Swift. Build over 15 apps including games, AR experiences, and clones of popular apps.',
      url: 'https://www.udemy.com/course/ios-13-app-development-bootcamp/',
      categories: 'ios'
    },
    {
      platform: 'Udemy',
      rating: 4.7,
      title: 'Android Kotlin Development Masterclass',
      description: 'Learn Android app development with Kotlin from zero to professional level. Build multiple real-world applications with modern techniques.',
      url: 'https://www.udemy.com/course/android-kotlin-developer/',
      categories: 'android'
    },
    {
      platform: 'Udemy',
      rating: 4.6,
      title: 'React Native: Advanced Concepts',
      description: 'Take your React Native skills to the next level with advanced animations, complex navigation patterns, state management, and app publishing.',
      url: 'https://www.udemy.com/course/react-native-advanced/',
      categories: 'react-native'
    },
    {
      platform: 'Pluralsight',
      rating: 4.7,
      title: 'Flutter State Management Solutions',
      description: 'Compare and implement different state management approaches in Flutter including Provider, Riverpod, BLoC, and Redux.',
      url: 'https://www.pluralsight.com/courses/flutter-state-management-solutions',
      categories: 'flutter'
    },
    {
      platform: 'Udemy',
      rating: 4.8,
      title: 'iOS & Swift - Data Persistence and Core Data',
      description: 'Learn how to store and retrieve data in iOS applications using various persistence methods including Core Data, Realm, and Firebase.',
      url: 'https://www.udemy.com/course/ios-swift-persistence/',
      categories: 'ios'
    },
    {
      platform: 'Pluralsight',
      rating: 4.7,
      title: 'Android Architecture Components',
      description: 'Master modern Android development with Jetpack components including ViewModel, LiveData, Room, and Navigation to build robust applications.',
      url: 'https://www.pluralsight.com/courses/android-architecture-components',
      categories: 'android'
    },
    {
      platform: 'Coursera',
      rating: 4.6,
      title: 'Mobile UI/UX Design Principles',
      description: 'Learn the fundamentals of designing effective and engaging mobile interfaces following platform guidelines and best practices.',
      url: 'https://www.coursera.org/learn/mobile-design',
      categories: 'design'
    },
    {
      platform: 'Udemy',
      rating: 4.8,
      title: 'Firebase for Mobile Development',
      description: 'Integrate Firebase services into your mobile apps for authentication, real-time databases, cloud storage, analytics, and more.',
      url: 'https://www.udemy.com/course/firebase-course/',
      categories: 'backend'
    },
    {
      platform: 'LinkedIn Learning',
      rating: 4.5,
      title: 'Testing Mobile Applications',
      description: 'Learn effective testing strategies for mobile apps including unit testing, integration testing, UI testing, and end-to-end testing frameworks.',
      url: 'https://www.linkedin.com/learning/testing-mobile-applications',
      categories: 'testing'
    },
    {
      platform: 'YouTube - Elzero Web School',
      rating: 4.8,
      title: 'React Native in Arabic',
      description: 'A comprehensive Arabic course on React Native covering components, navigation, styling, state management, and API integration.',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAxRKMnGZit9KqZPME8v3kzO',
      categories: 'arabic'
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