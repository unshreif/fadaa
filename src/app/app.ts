import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TitleService } from './services/title.service';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Navbar } from './navbar/navbar';
import { Backend } from './tracks-pages/backend/backend';
import { TracksComponent } from './tracks/tracks';
import { Newsletter } from './newsletter/newsletter';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    Navbar,
    Backend,
    TracksComponent,
    Newsletter
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(private titleService: TitleService, private title: Title) {
    this.title.setTitle("FADA' | Learning Platform");
  }

  ngOnInit() {
    this.titleService.initialize();
  }
}
