import { Component, signal } from '@angular/core';
import { VideoPlayerComponent } from "./components/video-player/video-player.component";
import { PlaylistComponent } from "./components/playlist/playlist.component";

@Component({
  selector: 'app-root',
  imports: [ VideoPlayerComponent, PlaylistComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {



}
