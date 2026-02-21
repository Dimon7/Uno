import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonButton,
  IonIcon,
  IonInput,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, trashOutline, addOutline, refreshOutline } from 'ionicons/icons';
import { GameService } from '../../services/game.service';
import { Player } from '../../models/player.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonApp,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonIcon,
    IonInput,
  ],
})
export class HomePage {
  readonly players = this.gameService.players;

  constructor(private gameService: GameService) {
    addIcons({ refresh: refreshOutline, trash: trashOutline, add: addOutline });
  }

  addPlayer(name: string): void {
    this.gameService.addPlayer(name);
  }

  deletePlayer(index: number): void {
    this.gameService.deletePlayer(index);
  }

  addScore(player: Player, points: string): void {
    this.gameService.addScore(player, points);
  }

  resetPlayer(player: Player): void {
    this.gameService.resetPlayer(player);
  }
}
