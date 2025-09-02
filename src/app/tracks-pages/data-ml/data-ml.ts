import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
declare function particlesJS(tagId: string, params: object): void;

@Component({
  selector: 'app-data-ml',
  imports: [
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './data-ml.html',
  styleUrl: './data-ml.css'
})
export class DataMl {
  trackData = {
    title: 'Data Science & Machine Learning',
    tagline: 'Master the art of extracting insights from data and building intelligent systems',
    meta: [
      { icon: 'fas fa-clock', text: '16 Weeks' },
      { icon: 'fas fa-laptop-code', text: '20 Projects' },
      { icon: 'fas fa-certificate', text: 'Certificate' },
      { icon: 'fas fa-users', text: '24/7 Support' }
    ],
    overview: [
      'Data Science and Machine Learning is the field at the intersection of statistics, programming, and domain expertise that transforms raw data into actionable insights and intelligent systems. This track will take you from the fundamentals of data analysis to advanced machine learning algorithms and deep learning models.',
      "You'll learn how to collect, clean, and process data, build predictive models, evaluate their performance, and deploy them into production environments. By the end of this track, you'll have a portfolio of projects showcasing your ability to solve complex problems using data-driven approaches and AI technologies."
    ],
    skills: [
      'Python', 'Statistics', 'Data Analysis', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'SQL', 'Big Data'
    ],
    stats: [
      { value: '35%', label: 'Job Growth' },
      { value: '$120K', label: 'Avg. Salary' },
      { value: '18+', label: 'Difficulty Level' }
    ],
    roadmapIntro: 'Your step-by-step journey to becoming a data scientist and ML engineer',
    roadmap: [
      {
        number: '01',
        title: 'Foundations of Data Science',
        description: 'Master the essential tools and concepts for working with data, including programming, statistics, and data manipulation.',
        topics: [
          'Python Programming', 'Statistics & Probability', 'Data Cleaning & Preprocessing', 'Pandas & NumPy', 'SQL & Database Fundamentals'
        ]
      },
      {
        number: '02',
        title: 'Data Analysis & Visualization',
        description: 'Learn how to analyze datasets, extract meaningful patterns, and communicate insights through effective visualizations.',
        topics: [
          'Exploratory Data Analysis', 'Data Visualization with Matplotlib & Seaborn', 'Interactive Dashboards with Plotly', 'Statistical Analysis', 'Business Intelligence Principles'
        ]
      },
      {
        number: '03',
        title: 'Machine Learning',
        description: 'Master the core algorithms and techniques of machine learning to build predictive models and automated systems.',
        topics: [
          'Supervised Learning', 'Unsupervised Learning', 'Model Evaluation & Validation', 'Feature Engineering', 'Scikit-learn & ML Pipeline'
        ]
      },
      {
        number: '04',
        title: 'Deep Learning & Advanced ML',
        description: 'Explore cutting-edge techniques in artificial intelligence, including neural networks and natural language processing.',
        topics: [
          'Neural Networks Fundamentals', 'Deep Learning with TensorFlow & PyTorch', 'Computer Vision', 'Natural Language Processing', 'ML Model Deployment'
        ]
      }
    ],
    coursesIntro: 'Learn from industry-leading instructors and platforms',
    
    //add your courses here
    
    courses: [
      {
        platform: 'Udemy',
        rating: '4.8',
        title: 'Python for Data Science and Machine Learning Bootcamp',
        description: 'Learn how to use NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, and other libraries in this comprehensive data science and machine learning course.',
        link: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
        category: 'python'
      },
      {
        platform: 'Udemy',
        rating: '4.7',
        title: 'Machine Learning A-Z: Hands-On Python & R',
        description: 'Learn to create machine learning algorithms in Python and R, master supervised and unsupervised learning, and solve real-world business cases.',
        link: 'https://www.udemy.com/course/machinelearning/',
        category: 'ml'
      },
      {
        platform: 'Coursera - deeplearning.ai',
        rating: '4.9',
        title: 'Deep Learning Specialization',
        description: "Andrew Ng's comprehensive program covering neural networks, improving deep learning algorithms, structuring ML projects, CNNs, and sequence models.",
        link: 'https://www.coursera.org/specializations/deep-learning',
        category: 'deep-learning'
      },
      {
        platform: 'Coursera - University of Michigan',
        rating: '4.6',
        title: 'Applied Data Science with Python Specialization',
        description: 'Master data science techniques including machine learning, visualization, text analysis, and social network analysis with Python.',
        link: 'https://www.coursera.org/specializations/data-science-python',
        category: 'data-science'
      },
      {
        platform: 'Coursera - deeplearning.ai',
        rating: '4.8',
        title: 'TensorFlow Developer Professional Certificate',
        description: 'Learn to build and train neural networks with TensorFlow for computer vision, NLP, time series forecasting, and more.',
        link: 'https://www.coursera.org/professional-certificates/tensorflow-in-practice',
        category: 'tensorflow'
      },
      {
        platform: 'Coursera - UC Davis',
        rating: '4.7',
        title: 'SQL for Data Science',
        description: 'Master SQL fundamentals and learn how to perform complex queries to extract insights from databases for data analysis.',
        link: 'https://www.coursera.org/learn/sql-for-data-science',
        category: 'sql'
      },
      {
        platform: 'edX - Harvard',
        rating: '4.8',
        title: 'Data Science with R Professional Certificate',
        description: "Harvard's comprehensive program teaching probability, statistics, visualization, machine learning, and data wrangling with R.",
        link: 'https://www.edx.org/professional-certificate/harvardx-data-science',
        category: 'r'
      },
      {
        platform: 'Udacity',
        rating: '4.7',
        title: 'Computer Vision Nanodegree',
        description: 'Learn to apply computer vision techniques using PyTorch to analyze images, implement CNNs, and build applications with real-world impact.',
        link: 'https://www.udacity.com/course/computer-vision-nanodegree--nd891',
        category: 'computer-vision'
      },
      {
        platform: 'Coursera - deeplearning.ai',
        rating: '4.8',
        title: 'Natural Language Processing Specialization',
        description: 'Learn to build and train neural networks for sentiment analysis, text classification, word embeddings, translation, and more.',
        link: 'https://www.coursera.org/specializations/natural-language-processing',
        category: 'nlp'
      },
      {
        platform: 'LinkedIn Learning',
        rating: '4.6',
        title: 'Statistics for Data Science and Business Analysis',
        description: 'Master statistical concepts essential for data science including probability, distributions, hypothesis testing, and regression analysis.',
        link: 'https://www.linkedin.com/learning/statistics-for-data-science-probability',
        category: 'statistics'
      },
      {
        platform: 'edX - UC San Diego',
        rating: '4.7',
        title: 'Big Data Analytics Using Spark',
        description: 'Learn to apply big data processing techniques with Apache Spark to analyze large datasets and extract meaningful insights at scale.',
        link: 'https://www.edx.org/professional-certificate/uc-san-diegox-big-data-analytics-using-spark',
        category: 'big-data'
      },
      {
        platform: 'YouTube - Hesham Asem',
        rating: '4.8',
        title: 'Data Science and Machine Learning in Arabic',
        description: 'A comprehensive Arabic course covering Python, data analysis, visualization, machine learning algorithms, and deep learning fundamentals.',
        link: 'https://www.youtube.com/playlist?list=PLvLvlVqNQGHD1XUJSYfYezvs9gLdaWTAP',
        category: 'arabic'
      }
    ],
    careerIntro: 'Where this skillset can take your career',
    careers: [
      {
        icon: 'fas fa-chart-line',
        title: 'Data Scientist',
        description: 'Extract insights from complex datasets and build predictive models to solve business problems at tech companies, startups, or research institutions.',
        salary: '$100,000 - $150,000'
      },
      {
        icon: 'fas fa-brain',
        title: 'Machine Learning Engineer',
        description: 'Design and implement machine learning systems and deploy models into production environments to automate processes and decisions.',
        salary: '$110,000 - $165,000'
      },
      {
        icon: 'fas fa-database',
        title: 'AI Research Scientist',
        description: 'Advance the field of artificial intelligence by researching and developing new algorithms and approaches to solve complex problems.',
        salary: '$130,000 - $180,000'
      }
    ],
    ctaText: 'Join thousands of students who have successfully transformed their careers through our data science and machine learning track.'
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
