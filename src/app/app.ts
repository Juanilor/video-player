import { Component, signal } from '@angular/core';
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { PlaylistComponent } from "./components/playlist/playlist.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {



}
