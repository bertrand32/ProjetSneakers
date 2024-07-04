import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @ViewChildren('section')
  sections!: QueryList<ElementRef>;
  currentSection: string = 'Collections';

  scrollToSection(section: string) {
    this.currentSection = section;
    const sectionElement = this.sections.find(s => s.nativeElement.id === section);
    if (sectionElement) {
      sectionElement.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
