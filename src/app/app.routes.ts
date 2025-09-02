import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { TracksComponent } from './tracks/tracks';
import { ComingSoon } from './coming-soon/coming-soon';
import { Cyber } from './tracks-pages/cyber/cyber';
import { DataMl } from './tracks-pages/data-ml/data-ml';
import { Frontend } from './tracks-pages/frontend/frontend';
import { Fullstack } from './tracks-pages/fullstack/fullstack';
import { Mobile } from './tracks-pages/mobile/mobile';
import { Ux } from './tracks-pages/ux/ux';
import { Backend } from './tracks-pages/backend/backend';
import { DevopsCloud } from './tracks-pages/devops-cloud/devops-cloud';
import { NotFoundComponent } from './not-found/not-found';

export const routes: Routes = [
  { 
    path: '', 
    component: Home,
    title: 'Home | FADA\''
  },
  { 
    path: 'about', 
    component: About,
    title: 'About Us | FADA\''
  },
  { 
    path: 'tracks', 
    component: TracksComponent,
    title: 'Learning Tracks | FADA\''
  },
  { 
    path: 'backend', 
    component: Backend,
    title: 'Backend Development | FADA\''
  },
  { 
    path: 'cyber', 
    component: Cyber,
    title: 'Cybersecurity | FADA\''
  },
  { 
    path: 'data-ml', 
    component: DataMl,
    title: 'Data Science & ML | FADA\''
  },
  { 
    path: 'devops-cloud', 
    component: DevopsCloud,
    title: 'DevOps & Cloud | FADA\''
  },
  { 
    path: 'frontend', 
    component: Frontend,
    title: 'Frontend Development | FADA\''
  },
  { 
    path: 'fullstack', 
    component: Fullstack,
    title: 'Full Stack Development | FADA\''
  },
  { 
    path: 'mobile', 
    component: Mobile,
    title: 'Mobile Development | FADA\''
  },
  { 
    path: 'ux', 
    component: Ux,
    title: 'UI/UX Design | FADA\''
  },
  { 
    path: 'coming-soon', 
    component: ComingSoon,
    title: 'Coming Soon | FADA\''
  },
  { 
    path: '**', 
    component: NotFoundComponent,
    title: 'Page Not Found | FADA\''
  }
];
