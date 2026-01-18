import { Component, inject } from '@angular/core';
import { HeroSection } from "../../components/hero-section/hero-section";
import { ProjectsSection } from "../../components/projects-section/projects-section";
import { BreakpointService } from '../../services/breakpoint.service';
import { HabilitiesSection } from "../../components/habilities-section/habilities-section";
import { ContactSection } from "../../components/contact-section/contact-section";
import { Footer } from "../../shared/footer/footer";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeroSection, ProjectsSection, HabilitiesSection, ContactSection, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private breakPointService = inject(BreakpointService);

  isMobile = this.breakPointService.isMobile;

  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 80]); // Account for header height
  }

  scrollToSection(sectionId: string) {
    this.viewportScroller.scrollToAnchor(sectionId);
  }

}
