import { Component } from "@angular/core";
import { VideoPlayerComponent } from "../../components/video-player/video-player.component";
import { PlaylistComponent } from "../../components/playlist/playlist.component";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.scss',
    imports: [VideoPlayerComponent, PlaylistComponent]
})

export class HomeComponent{

}