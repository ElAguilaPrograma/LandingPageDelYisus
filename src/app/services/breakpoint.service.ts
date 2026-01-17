import { Injectable, signal, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  private readonly breakpointObserver = inject(BreakpointObserver);

  isMobile = signal(false);

  constructor() {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .subscribe(result => {
        this.isMobile.set(result.matches);
      });
  }

}
