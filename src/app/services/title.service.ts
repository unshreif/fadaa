import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  initialize() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data)
    ).subscribe(data => {
      const title = data['title'] ? `${data['title']} | FADA'` : "FADA' | Learning Platform";
      this.title.setTitle(title);
    });
  }
}
