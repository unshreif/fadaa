import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cyber',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './cyber.html',
  styleUrl: './cyber.css'
})
export class Cyber {
  trackData = {
    title: 'Cyber Security',
    tagline: 'Master the art of protecting digital assets and defending against cyber threats',
    meta: [
      { icon: 'fas fa-clock', text: '15 Weeks' },
      { icon: 'fas fa-laptop-code', text: '22 Projects' },
      { icon: 'fas fa-certificate', text: 'Certificate' },
      { icon: 'fas fa-users', text: '24/7 Support' }
    ],
    overview: [
      'Cyber Security is the practice of protecting systems, networks, and programs from digital attacks. This comprehensive track covers both offensive and defensive security techniques, from identifying vulnerabilities to implementing robust protection measures.',
      "You'll learn network security, ethical hacking, cryptography, incident response, and security architecture principles. By the end of this track, you'll have the skills to identify threats, conduct security assessments, and implement effective safeguards to protect organizations from cyber attacks."
    ],
    skills: [
      'Network Security', 'Ethical Hacking', 'Penetration Testing', 'Cryptography', 'Security Analysis', 'Incident Response', 'Threat Detection', 'Digital Forensics'
    ],
    stats: [
      { value: '33%', label: 'Job Growth' },
      { value: '$105K', label: 'Avg. Salary' },
      { value: '90+', label: 'Difficulty Level' }
    ],
    roadmapIntro: 'Your step-by-step journey to becoming a cyber security professional',
    roadmap: [
      {
        number: '01',
        title: 'Security Fundamentals',
        description: 'Master the core concepts of networking, operating systems, and security principles that form the foundation of cyber security.',
        topics: [
          'Networking Fundamentals', 'Linux & Windows Security', 'Security Principles & Models', 'Cryptography Basics', 'Web Application Security'
        ]
      },
      {
        number: '02',
        title: 'Offensive Security',
        description: 'Learn how to identify and exploit vulnerabilities through ethical hacking techniques and penetration testing methodologies.',
        topics: [
          'Ethical Hacking Methodology', 'Vulnerability Assessment', 'Penetration Testing', 'Social Engineering', 'Exploitation Techniques'
        ]
      },
      {
        number: '03',
        title: 'Defensive Security',
        description: 'Master the tools and techniques for defending networks, detecting intrusions, and responding to security incidents.',
        topics: [
          'Security Operations', 'Network Defense', 'SIEM Implementation', 'Threat Detection & Analysis', 'Incident Response'
        ]
      },
      {
        number: '04',
        title: 'Advanced Security & Specialization',
        description: 'Deepen your expertise with advanced topics and specialized areas of cyber security.',
        topics: [
          'Digital Forensics', 'Malware Analysis', 'Cloud Security', 'Security Architecture', 'Security Compliance & Frameworks'
        ]
      }
    ],
    coursesIntro: 'Learn from industry-leading instructors and platforms',
   
    // add your course here!
   
    courses: [
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'Complete Ethical Hacking Bootcamp',
        description: 'Learn ethical hacking, penetration testing, network security, and risk assessment. Prepare for the CEH certification with hands-on labs.',
        link: 'https://www.udemy.com/course/complete-ethical-hacking-bootcamp-zero-to-mastery/',
        category: 'ethical-hacking'
      },
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'CompTIA Security+ Certification (SY0-601)',
        description: 'Comprehensive preparation for the Security+ exam, covering threats, attacks, vulnerabilities, architecture, operations, and cryptography.',
        link: 'https://www.udemy.com/course/securityplus/',
        category: 'certification'
      },
      {
        platform: 'Pluralsight',
        rating: '4.6',
        title: 'Practical Malware Analysis & Triage',
        description: 'Learn how to analyze and reverse engineer malware to understand attack vectors, capabilities, and mitigation techniques.',
        link: 'https://www.pluralsight.com/courses/practical-malware-analysis-triage',
        category: 'malware'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'Network Security & Penetration Testing',
        description: 'Master practical network security with Kali Linux, Wireshark, Metasploit, and other essential penetration testing tools.',
        link: 'https://www.udemy.com/course/network-security-course/',
        category: 'network-security'
      },
      {
        platform: 'Coursera',
        rating: '4.7',
        title: 'Digital Forensics Fundamentals',
        description: 'Learn techniques for collecting, analyzing, and preserving digital evidence for investigations and incident response.',
        link: 'https://www.coursera.org/learn/digital-forensics-concepts',
        category: 'forensics'
      },
      {
        platform: 'Offensive Security',
        rating: '4.9',
        title: 'Web Application Security',
        description: 'Learn to identify and exploit common web vulnerabilities including XSS, CSRF, SQL injection, and other OWASP Top 10 threats.',
        link: 'https://www.offensive-security.com/web-application-security/',
        category: 'web-security'
      },
      {
        platform: 'A Cloud Guru',
        rating: '4.7',
        title: 'Cloud Security Fundamentals',
        description: 'Master essential security concepts for AWS, Azure, and Google Cloud, including identity management, data protection, and compliance.',
        link: 'https://acloudguru.com/course/cloud-security-fundamentals',
        category: 'cloud-security'
      },
      {
        platform: 'Cybrary',
        rating: '4.6',
        title: 'Security Operations & Incident Response',
        description: 'Learn to monitor security events, detect threats, and respond to incidents with SIEM tools and incident response frameworks.',
        link: 'https://www.cybrary.it/course/security-operations-and-incident-response/',
        category: 'soc'
      },
      {
        platform: 'Coursera - Stanford',
        rating: '4.8',
        title: 'Cryptography I',
        description: "Stanford's comprehensive course on cryptographic systems including symmetric encryption, asymmetric cryptography, and secure protocols.",
        link: 'https://www.coursera.org/learn/crypto',
        category: 'cryptography'
      },
      {
        platform: 'SANS',
        rating: '4.9',
        title: 'Practical Threat Intelligence',
        description: 'Learn to gather, analyze, and utilize threat intelligence to improve security posture and respond to emerging threats.',
        link: 'https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/',
        category: 'threat-intelligence'
      },
      {
        platform: 'Pluralsight',
        rating: '4.6',
        title: 'Secure Coding: Preventing Vulnerabilities',
        description: 'Learn how to write secure code that prevents common vulnerabilities and security flaws across multiple programming languages.',
        link: 'https://www.pluralsight.com/courses/secure-coding-preventing-code-vulnerabilities',
        category: 'secure-coding'
      },
      {
        platform: 'YouTube - Hassan Saad',
        rating: '4.7',
        title: 'Cyber Security Course in Arabic',
        description: 'A comprehensive cyber security course in Arabic covering network security, penetration testing, and ethical hacking fundamentals.',
        link: 'https://www.youtube.com/playlist?list=PLtr7R0qHH8fSkpCyPcZIAHrmzNu5lPNW9',
        category: 'arabic'
      }
    ],
    careerIntro: 'Where this skillset can take your career',
    careers: [
      {
        icon: 'fas fa-shield-alt',
        title: 'Security Analyst',
        description: 'Monitor and analyze security threats, implement protective measures, and respond to security incidents for organizations.',
        salary: '$85,000 - $120,000'
      },
      {
        icon: 'fas fa-user-secret',
        title: 'Penetration Tester',
        description: 'Conduct authorized simulated attacks on computer systems to identify and fix security vulnerabilities before malicious hackers can exploit them.',
        salary: '$90,000 - $140,000'
      },
      {
        icon: 'fas fa-fingerprint',
        title: 'Digital Forensics Investigator',
        description: 'Recover and investigate material found in digital devices related to computer crime or security incidents.',
        salary: '$95,000 - $150,000'
      }
    ],
    ctaText: 'Join thousands of students who have successfully transformed their careers through our cyber security track.'
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
