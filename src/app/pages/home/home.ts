import { Component, inject } from '@angular/core';
import { HeroSection } from "../../components/hero-section/hero-section";
import { ProjectsSection } from "../../components/projects-section/projects-section";
import { BreakpointService } from '../../services/breakpoint.service';

@Component({
  selector: 'app-home',
  imports: [HeroSection, ProjectsSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private breakPointService = inject(BreakpointService);

  isMobile = this.breakPointService.isMobile;

}
