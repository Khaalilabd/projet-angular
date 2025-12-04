import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  totalSuggestions = 0;
  acceptedSuggestions = 0;
  pendingSuggestions = 0;
  totalUsers = 0;

  ngOnInit() {
    // Animation des compteurs
    this.animateCounter('totalSuggestions', 156);
    this.animateCounter('acceptedSuggestions', 89);
    this.animateCounter('pendingSuggestions', 42);
    this.animateCounter('totalUsers', 234);
  }

  animateCounter(property: keyof HomeComponent, target: number) {
    const duration = 2000; // 2 secondes
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        (this as any)[property] = target;
        clearInterval(timer);
      } else {
        (this as any)[property] = Math.floor(current);
      }
    }, duration / steps);
  }
}
