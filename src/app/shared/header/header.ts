import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NgClass } from '@angular/common';
import { Popover } from 'primeng/popover';
import { PopoverModule } from 'primeng/popover';
import { BreakpointService } from '../../services/breakpoint.service';

import { DrawerModule } from 'primeng/drawer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, NgClass, PopoverModule, DrawerModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  @ViewChild('op') op!: Popover;
  private breakPointService = inject(BreakpointService);

  selectedColor: string = "Noir"
  colors = [
    { color: "Noir" },
    { color: "Emerald" },
    { color: "Green" },
    { color: "Blue " },
    { color: "Indigo" },
    { color: "Purple" },
    { color: "Teal" },
    { color: "Cyan" },
    { color: "Orange" },
    { color: "Red" },
    { color: "Pink" }
  ]
  darkMode: boolean = false;
  visible: boolean = false;

  private readonly storageKey = 'dark-mode';
  private readonly storageColorPreset = "color-preset";

  isMobile = this.breakPointService.isMobile;

  ngOnInit(): void {
    const saved = localStorage.getItem(this.storageKey);
    const colorSaved = localStorage.getItem(this.storageColorPreset);
    const enabled = saved === 'true';
    this.darkMode = enabled;
    const root = document.documentElement;
    if (enabled) {
      root.classList.add('my-app-dark');
    } else {
      root.classList.remove('my-app-dark');
    }
    if (colorSaved) {
      this.selectedColor = colorSaved;
    }
  }

  togglePopover(event: Event): void {
    this.op.toggle(event);
  }

  selectColor(color: any) {
    this.selectedColor = color.color;
    try {
      localStorage.setItem(this.storageColorPreset, color.color);
    } catch {
      // valen gorro los errores del storage
    }
    this.op.hide();
    location.reload();
  }

  toogleDarkMode(): void {
    const root = document.documentElement;
    const now = root.classList.toggle('my-app-dark');
    this.darkMode = now;
    try {
      localStorage.setItem(this.storageKey, now ? 'true' : 'false');
    } catch {
      // valen gorro los errores del storage
    }
  }

  darkModeEnables(): boolean {
    return this.darkMode;
  }
}
