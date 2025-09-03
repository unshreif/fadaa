import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

declare var particlesJS: any;

interface Course {
  platform: string;
  rating: number;
  title: string;
  description: string;
  url: string;
  categories: string;
}

@Component({
  selector: 'app-frontend',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './frontend.html',
  styleUrls: ['../../app.css']
})
export class Frontend implements OnInit {
   _expanded = false;
   _visibleCourses: Course[] = [];
   coursesPerPage = 3;

// add your courses here 

  courses: Course[] = [
    {
      platform: 'Udemy',
      rating: 4.7,
      title: 'The Complete Web Developer Course 3.0',
      description: 'Learn Web Development by building 25+ websites and mobile apps using HTML, CSS, Javascript, PHP, Python, MySQL & more!',
      url: 'https://www.udemy.com/course/the-complete-web-developer-course-2/',
      categories: 'HTML, CSS, JavaScript, PHP, Python, MySQL'
    },
    {
      platform: 'Coursera',
      rating: 4.8,
      title: 'HTML, CSS, and Javascript for Web Developers',
      description: 'Learn the basic tools that every web page coder needs to know. Start from the ground up by learning how to implement modern web pages with HTML and CSS.',
      url: 'https://www.coursera.org/learn/html-css-javascript-for-web-developers',
      categories: 'HTML, CSS, JavaScript'
    },
    {
      platform: 'edX',
      rating: 4.5,
      title: 'Front-End Web Developer',
      description: 'Learn front-end development from top-rated instructors. Find the best coding and programming courses for your level and needs.',
      url: 'https://www.edx.org/learn/front-end-web-development',
      categories: 'HTML, CSS, JavaScript, React'
    },
    {
      platform: 'Udacity',
      rating: 4.6,
      title: 'Front End Web Developer Nanodegree',
      description: 'Learn how to build high quality websites and dynamic applications to create stunning user experiences for the web.',
      url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011',
      categories: 'HTML, CSS, JavaScript, React, Web Accessibility'
    },
    {
      platform: 'Udemy',
      rating: 4.9,
      title: 'The Web Developer Bootcamp 2024',
      description: 'This all-in-one bootcamp covers HTML, CSS, JavaScript, and even some backend basics like Node.js. Build responsive websites and real-world projects.',
      url: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
      categories: 'fullstack'
    },
    {
      platform: 'YouTube - freeCodeCamp',
      rating: 4.8,
      title: 'HTML & CSS Crash Course',
      description: 'A beginner-friendly introduction to HTML and CSS, covering the basics of web page structure and styling with practical examples.',
      url: 'https://www.youtube.com/watch?v=mU6anWqZJcc',
      categories: 'html-css'
    },
    {
      platform: 'YouTube - The Net Ninja',
      rating: 4.7,
      title: 'JavaScript Fundamentals',
      description: 'A comprehensive series covering JavaScript basics including variables, functions, loops, and DOM manipulation with clear explanations.',
      url: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET',
      categories: 'javascript'
    },
    {
      platform: 'YouTube - Traversy Media',
      rating: 4.8,
      title: 'React JS Crash Course',
      description: 'A concise and practical introduction to React, covering components, state, props, and hooks with a mini-project included.',
      url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
      categories: 'react'
    },
    {
      platform: 'YouTube - Elzero Web School',
      rating: 4.9,
      title: 'HTML - CSS',
      description: 'A beginner-friendly course in Arabic that teaches HTML and CSS from scratch, focusing on building responsive web pages with practical examples.',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPiPLV',
      categories: 'html-css-arabic'
    },
    {
      platform: 'YouTube - Elzero Web School',
      rating: 4.7,
      title: 'JavaScript',
      description: 'A comprehensive JavaScript course in Arabic covering everything from basic syntax to advanced concepts like asynchronous programming and APIs.',
      url: 'https://www.youtube.com/playlist?list=PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv',
      categories: 'javascript-arabic'
    }
  ];

  get expanded(): boolean {
    return this._expanded;
  }

  get visibleCourses(): Course[] {
    return this._visibleCourses;
  }

  get showMoreText(): string {
    return this._expanded ? 'Show Less' : 'Show More';
  }

  get showMoreIcon(): string {
    return this._expanded ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  }

  constructor() {}

  ngOnInit(): void {
    this.updateVisibleCourses();

    if (typeof particlesJS !== 'undefined') {
      particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
    }
  }

  private updateVisibleCourses(): void {
    this._visibleCourses = this._expanded
      ? [...this.courses]
      : this.courses.slice(0, this.coursesPerPage);
  }

  toggleCourses(): void {
    this._expanded = !this._expanded;
    this.updateVisibleCourses();
  }
}
