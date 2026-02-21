import { Injectable, signal } from '@angular/core';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly STORAGE_KEY = 'game';

  readonly players = signal<Player[]>([]);

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      try {
        this.players.set(JSON.parse(stored));
      } catch (e) {
        console.error('Failed to load game data', e);
      }
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.players()));
  }

  addPlayer(name: string): void {
    if (name.trim()) {
      this.players.update(players => [
        ...players,
        { name: name.trim(), rate: 0, history: [] },
      ]);
      this.saveToStorage();
    }
  }

  deletePlayer(index: number): void {
    this.players.update(players => players.filter((_, i) => i !== index));
    this.saveToStorage();
  }

  addScore(player: Player, points: string): void {
    if (points.trim()) {
      const score = parseInt(points, 10);
      if (!isNaN(score)) {
        this.players.update(players =>
          players.map(p => {
            if (p === player) {
              const newHistory = [...p.history, score];
              return {
                ...p,
                history: newHistory,
                rate: p.rate + score,
              };
            }
            return p;
          })
        );
        this.saveToStorage();
      }
    }
  }

  resetPlayer(player: Player): void {
    this.players.update(players =>
      players.map(p =>
        p === player ? { ...p, history: [], rate: 0 } : p
      )
    );
    this.saveToStorage();
  }

  clearAll(): void {
    this.players.set([]);
    this.saveToStorage();
  }

  formatHistory(history: number[]): string {
    return history.join(', ');
  }
}
