import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

declare function particlesJS(tagId: string, params: object): void;

@Component({
  selector: 'app-backend',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './backend.html',
  standalone: true,
  styleUrls: ['../../app.css']
})
export class Backend {
  trackData = {
    title: 'Backend Development',
    tagline: 'Master server-side programming and build robust, scalable applications',
    meta: [
      { icon: 'fas fa-clock', text: '16 Weeks' },
      { icon: 'fas fa-laptop-code', text: '20 Projects' },
      { icon: 'fas fa-certificate', text: 'Certificate' },
      { icon: 'fas fa-users', text: '24/7 Support' }
    ],
    overview: [
      'Backend development is the foundation of web applications, handling data storage, business logic, and server-side operations. This track will take you from the basics of server-side programming to building complex, scalable applications using Node.js, databases, and modern backend technologies.',
      "You'll learn how to design and implement RESTful APIs, work with databases, handle authentication and authorization, and deploy applications to the cloud. By the end of this track, you'll be able to build robust backend systems that power modern web applications."
    ],
    skills: [
      'Node.js', 'Express.js', 'MongoDB', 'SQL', 'REST APIs', 'Authentication', 'Docker', 'Cloud Deployment'
    ],
    stats: [
      { value: '22%', label: 'Job Growth' },
      { value: '$85K', label: 'Avg. Salary' },
      { value: '80+', label: 'Difficulty Level' }
    ],
    roadmapIntro: 'Your step-by-step journey to becoming a backend developer',
    roadmap: [
      {
        number: '01',
        title: 'Backend Fundamentals',
        description: 'Learn the core concepts of backend development, including server-side programming, HTTP protocols, and basic database operations.',
        topics: [
          'Node.js Basics', 'Express.js Framework', 'HTTP & REST APIs', 'Database Fundamentals', 'Authentication Basics'
        ]
      },
      {
        number: '02',
        title: 'Database Mastery',
        description: 'Master both SQL and NoSQL databases, learning how to design efficient database schemas and optimize queries.',
        topics: [
          'MongoDB & Mongoose', 'SQL & PostgreSQL', 'Database Design', 'Query Optimization', 'Data Modeling'
        ]
      },
      {
        number: '03',
        title: 'Advanced Backend',
        description: 'Dive into advanced backend concepts like microservices, real-time applications, and security best practices.',
        topics: [
          'Microservices Architecture', 'WebSockets & Real-time', 'API Security', 'GraphQL', 'Testing & Debugging'
        ]
      },
      {
        number: '04',
        title: 'DevOps & Deployment',
        description: 'Learn how to deploy and maintain backend applications using modern DevOps practices and cloud platforms.',
        topics: [
          'Docker & Containers', 'CI/CD Pipelines', 'Cloud Platforms (AWS/Azure)', 'Monitoring & Logging', 'Performance Optimization'
        ]
      }
    ],
    coursesIntro: 'Learn from industry-leading instructors and platforms',
    
    ///add your course here !
    
    courses: [
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'Node.js - The Complete Guide',
        description: 'Master Node.js from scratch, building REST APIs, GraphQL APIs, authentication, file uploads, and more with Node.js, Express, and MongoDB.',
        link: 'https://www.udemy.com/course/nodejs-the-complete-guide/',
        category: 'nodejs'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: "MongoDB - The Complete Developer's Guide",
        description: 'Learn MongoDB from scratch, including CRUD operations, indexing, aggregation, and building a complete application with Node.js and Express.',
        link: 'https://www.udemy.com/course/mongodb-the-complete-developers-guide/',
        category: 'mongodb'
      },
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'SQL & Database Design',
        description: 'Master SQL and database design principles, from basic queries to complex joins, stored procedures, and database optimization.',
        link: 'https://www.udemy.com/course/sql-and-database-design/',
        category: 'sql'
      },
      {
        platform: 'Frontend Masters',
        rating: '4.9',
        title: 'JavaScript: The Hard Parts',
        description: 'Master advanced JavaScript concepts like closures, prototypes, and asynchronous programming with live coding and expert guidance.',
        link: 'https://frontendmasters.com/courses/javascript-hard-parts/',
        category: 'javascript'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'GraphQL Complete Guide',
        description: 'Learn GraphQL from scratch, building APIs with Node.js, Express, and Apollo Server, including authentication and real-time subscriptions.',
        link: 'https://www.udemy.com/course/graphql-complete-guide/',
        category: 'graphql'
      },
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'Advanced Node.js',
        description: 'Take your Node.js skills to the next level with advanced topics like streams, clustering, performance optimization, and security.',
        link: 'https://www.udemy.com/course/advanced-nodejs/',
        category: 'nodejs'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'Docker & Kubernetes',
        description: 'Master containerization with Docker and orchestration with Kubernetes, including deployment, scaling, and monitoring.',
        link: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/',
        category: 'devops'
      },
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'API Security',
        description: 'Learn how to secure your APIs with authentication, authorization, rate limiting, and other security best practices.',
        link: 'https://www.udemy.com/course/api-security/',
        category: 'security'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'PostgreSQL for Developers',
        description: 'Master PostgreSQL, from basic queries to advanced features like stored procedures, triggers, and performance optimization.',
        link: 'https://www.udemy.com/course/postgresql-for-developers/',
        category: 'sql'
      },
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'Node.js Microservices',
        description: 'Learn how to build and deploy microservices with Node.js, including service discovery, load balancing, and monitoring.',
        link: 'https://www.udemy.com/course/nodejs-microservices/',
        category: 'microservices'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'Testing Node.js Applications',
        description: 'Master testing Node.js applications with Jest, including unit testing, integration testing, and end-to-end testing.',
        link: 'https://www.udemy.com/course/testing-nodejs-applications/',
        category: 'testing'
      },
      {
        platform: 'YouTube - Traversy Media',
        rating: '4.8',
        title: 'Node.js Crash Course',
        description: 'A concise introduction to Node.js, covering the basics of server-side JavaScript, Express, and building REST APIs.',
        link: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4',
        category: 'nodejs'
      }
    ],
    careerIntro: 'Where this skillset can take your career',
    careers: [
      {
        icon: 'fas fa-server',
        title: 'Backend Developer',
        description: 'Build and maintain server-side applications, APIs, and databases for web and mobile applications.',
        salary: '$75,000 - $120,000'
      },
      {
        icon: 'fas fa-database',
        title: 'Database Developer',
        description: 'Design and optimize database systems, write complex queries, and ensure data integrity.',
        salary: '$80,000 - $125,000'
      },
      {
        icon: 'fas fa-cloud',
        title: 'DevOps Engineer',
        description: 'Manage deployment pipelines, cloud infrastructure, and ensure application reliability.',
        salary: '$90,000 - $140,000'
      }
    ],
    ctaText: 'Join thousands of students who have successfully transformed their careers through our backend development track.'
  };

  coursesPerPage = 4;
  expanded = false;

  get visibleCourses() {
    return this.expanded ? this.trackData.courses : this.trackData.courses.slice(0, this.coursesPerPage);
  }

  get showMoreText() {
    return this.expanded ? 'Show Less' : 'Show More';
  }

  get showMoreIcon() {
    return this.expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  }

  toggleCourses() {
    this.expanded = !this.expanded;
  }

}


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

