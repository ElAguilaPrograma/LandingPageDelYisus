import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [Button, NgClass],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  @Input() isMobile = false;

  constructor(private router: Router) { }

  navigateToProjects() {
    this.router.navigate(['/home'], { fragment: 'projects' });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = "cv/CV - Eduardo Muñoz 2026.pdf";
    link.download = "CV - Eduardo Muñoz 2026.pdf";
    link.click();
  }
}
