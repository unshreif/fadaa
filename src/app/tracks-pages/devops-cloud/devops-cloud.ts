import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
declare function particlesJS(tagId: string, params: object): void;

@Component({
  selector: 'app-devops-cloud',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './devops-cloud.html',
  styleUrls: ['./devops-cloud.css'] 
})
export class DevopsCloud {
  trackData = {
    title: 'DevOps & Cloud',
    tagline: 'Master the art of automating infrastructure, deployment pipelines, and cloud services',
    meta: [
      { icon: 'fas fa-clock', text: '14 Weeks' },
      { icon: 'fas fa-laptop-code', text: '18 Projects' },
      { icon: 'fas fa-certificate', text: 'Certificate' },
      { icon: 'fas fa-users', text: '24/7 Support' }
    ],
    overview: [
      'DevOps and Cloud Computing represent the modern approach to infrastructure management, deployment automation, and scalable application hosting. This track will take you from the fundamentals of Linux systems to advanced cloud architecture and DevOps practices.',
      "You'll learn how to automate infrastructure provisioning, implement continuous integration/continuous delivery pipelines, containerize applications, and deploy scalable systems across major cloud platforms. By the end of this track, you'll have the skills to design, build, and maintain robust cloud infrastructure for applications of any size."
    ],
    skills: [
      'Linux', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Infrastructure as Code'
    ],
    stats: [
      { value: '32%', label: 'Job Growth' },
      { value: '$115K', label: 'Avg. Salary' },
      { value: '80+', label: 'Difficulty Level' }
    ],
    roadmapIntro: 'Your step-by-step journey to becoming a DevOps and cloud expert',
    roadmap: [
      {
        number: '01',
        title: 'Systems & Networking Fundamentals',
        description: 'Master the core concepts of operating systems, Linux administration, and networking that form the foundation of cloud infrastructure.',
        topics: [
          'Linux Administration', 'Shell Scripting', 'Networking Fundamentals', 'Version Control with Git', 'Web Servers & Security'
        ]
      },
      {
        number: '02',
        title: 'Containerization & Orchestration',
        description: 'Learn how to package applications into containers and manage them at scale with orchestration tools.',
        topics: [
          'Docker Fundamentals', 'Container Best Practices', 'Kubernetes Architecture', 'Deployment Strategies', 'Service Management'
        ]
      },
      {
        number: '03',
        title: 'Cloud Platforms & Services',
        description: 'Master cloud platforms and their core services to build scalable and resilient infrastructure.',
        topics: [
          'AWS Core Services', 'Azure Fundamentals', 'Cloud Storage Solutions', 'Serverless Computing', 'Database Services'
        ]
      },
      {
        number: '04',
        title: 'Infrastructure as Code & CI/CD',
        description: 'Implement automation for infrastructure provisioning and application deployment pipelines.',
        topics: [
          'Terraform & Infrastructure as Code', 'Ansible for Configuration Management', 'CI/CD Pipelines', 'Monitoring & Logging', 'Security & Compliance'
        ]
      }
    ],
    coursesIntro: 'Learn from industry-leading instructors and platforms',
    
    //add courses here
    
    courses: [
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'Docker and Kubernetes: The Complete Guide',
        description: 'Master containerization with Docker and orchestration with Kubernetes. Learn to deploy multi-container applications with CI/CD workflows.',
        link: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/',
        category: 'containers'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'AWS Certified Solutions Architect - Associate',
        description: 'Comprehensive guide to AWS services including EC2, S3, RDS, VPC, and more. Prepare for the AWS certification with hands-on labs.',
        link: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate/',
        category: 'aws'
      },
      {
        platform: 'Microsoft Learn',
        rating: '4.8',
        title: 'Microsoft Azure Fundamentals (AZ-900)',
        description: 'Learn cloud concepts, Azure services, security, privacy, compliance, and trust. Prepare for the Azure Fundamentals certification.',
        link: 'https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/',
        category: 'azure'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'Terraform for AWS - Infrastructure as Code',
        description: 'Master Infrastructure as Code with Terraform. Build, change, and version AWS infrastructure safely and efficiently.',
        link: 'https://www.udemy.com/course/terraform-for-aws-with-sre-iac-devops-real-world-demos/',
        category: 'iac'
      },
      {
        platform: 'Udemy',
        rating: '4.6',
        title: 'DevOps with GitLab CI: Build Pipelines & Deploy',
        description: 'Create CI/CD pipelines with GitLab. Automate build, test, and deployment processes for applications and infrastructure.',
        link: 'https://www.udemy.com/course/devops-with-gitlab-ci-build-pipelines-and-deploy-to-aws/',
        category: 'cicd'
      },
      {
        platform: 'Pluralsight',
        rating: '4.7',
        title: 'Ansible: Getting Started',
        description: 'Learn to automate IT infrastructure with Ansible. Create playbooks, manage inventories, and implement configuration management.',
        link: 'https://www.pluralsight.com/courses/ansible-getting-started',
        category: 'automation'
      },
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'Prometheus & Grafana: Monitoring System',
        description: 'Implement a complete monitoring system with Prometheus and Grafana. Set up alerts, visualize metrics, and monitor application health.',
        link: 'https://www.udemy.com/course/prometheus-monitoring/',
        category: 'monitoring'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'Linux Administration Bootcamp',
        description: 'Master Linux server administration, shell scripting, user management, package installation, and system configuration.',
        link: 'https://www.udemy.com/course/linux-administration-bootcamp/',
        category: 'linux'
      },
      {
        platform: 'LinkedIn Learning',
        rating: '4.6',
        title: 'Networking for DevOps',
        description: 'Learn essential networking concepts for DevOps practitioners including DNS, HTTP, load balancing, and network security.',
        link: 'https://www.linkedin.com/learning/networking-for-devops',
        category: 'networking'
      },
      {
        platform: 'A Cloud Guru',
        rating: '4.8',
        title: 'Cloud Security Essentials',
        description: 'Learn security best practices for cloud environments, identity management, data protection, and compliance requirements.',
        link: 'https://acloudguru.com/course/cloud-security-essentials',
        category: 'security'
      },
      {
        platform: 'Coursera',
        rating: '4.7',
        title: 'Microservices Architecture',
        description: 'Understand microservices design patterns, containerization, service mesh, and deployment strategies for modern applications.',
        link: 'https://www.coursera.org/learn/microservices-architecture',
        category: 'architecture'
      },
      {
        platform: 'YouTube - Mohamed Abuelsaoud',
        rating: '4.8',
        title: 'DevOps Mastery in Arabic',
        description: 'A comprehensive DevOps course in Arabic covering Linux, Docker, Kubernetes, AWS, CI/CD, and infrastructure automation.',
        link: 'https://www.youtube.com/playlist?list=PLdYYj2XLw5Bmz9IInBTYGgb7_0YCxVjO6',
        category: 'arabic'
      }
    ],
    careerIntro: 'Where this skillset can take your career',
    careers: [
      {
        icon: 'fas fa-sync-alt',
        title: 'DevOps Engineer',
        description: 'Build and maintain CI/CD pipelines, infrastructure automation, and deployment processes for development teams.',
        salary: '$95,000 - $145,000'
      },
      {
        icon: 'fas fa-cloud',
        title: 'Cloud Architect',
        description: 'Design and implement scalable, secure, and resilient cloud infrastructures for organizations of all sizes.',
        salary: '$115,000 - $170,000'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Site Reliability Engineer',
        description: 'Ensure system reliability, availability, and performance through monitoring, automation, and operational excellence.',
        salary: '$120,000 - $180,000'
      }
    ],
    ctaText: 'Join thousands of students who have successfully transformed their careers through our DevOps and cloud computing track.'
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
