import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrl: './suggestion-details.component.css'
})
export class SuggestionDetailsComponent implements OnInit {
  suggestionId: number | null = null;
  suggestion: Suggestion | undefined;

  // Données mockées (identiques à suggestion-list)
  suggestions: Suggestion[] = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      likes: 12,
      isFavorite: false
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      likes: 5,
      isFavorite: false
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      likes: 8,
      isFavorite: true
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      likes: 15,
      isFavorite: false
    },
    {
      id: 5,
      title: 'Formation à la sécurité informatique',
      description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.',
      category: 'Formation',
      date: new Date('2025-02-05'),
      status: 'acceptee',
      likes: 20,
      isFavorite: true
    },
    {
      id: 6,
      title: 'Améliorer la navigation',
      description: 'Ajouter un menu de navigation plus intuitif',
      category: 'UI/UX',
      date: new Date('2024-01-15'),
      status: 'en_attente',
      likes: 15,
      isFavorite: true
    },
    {
      id: 7,
      title: 'Mode sombre',
      description: 'Implémenter un thème sombre pour l\'application',
      category: 'Feature',
      date: new Date('2024-02-20'),
      status: 'en_attente',
      likes: 42,
      isFavorite: false
    },
    {
      id: 8,
      title: 'Optimisation des performances',
      description: 'Réduire le temps de chargement des pages',
      category: 'Performance',
      date: new Date('2024-03-10'),
      status: 'acceptee',
      likes: 28,
      isFavorite: true
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.suggestionId = +id;
        this.suggestion = this.suggestions.find(s => s.id === this.suggestionId);
      }
    });
  }
}
