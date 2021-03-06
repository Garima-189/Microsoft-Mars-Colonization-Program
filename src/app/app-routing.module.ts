import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MultiplayerComponent } from './multiplayer/multiplayer.component';
import { SingleplayerComponent } from './singleplayer/singleplayer.component';
import { PlayernamesComponent } from './playernames/playernames.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'playernames', component: PlayernamesComponent },
  { path: 'multiplayer', component: MultiplayerComponent },
  { path: 'singleplayer', component: SingleplayerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }