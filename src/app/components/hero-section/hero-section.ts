import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [Button, NgClass],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  @Input() isMobile = false;
}
