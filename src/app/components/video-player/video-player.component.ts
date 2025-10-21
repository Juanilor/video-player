import { Component } from "@angular/core";
import { Video, VideoService } from "../../services/video.services";
import { AsyncPipe } from "@angular/common";
import { Observable } from "rxjs";


@Component({
    selector: 'video-player',
    templateUrl: 'video-player.component.html',
    styleUrl: 'video-player.component.scss',
    imports: [AsyncPipe]
})

export class VideoPlayerComponent {


    currentVideo$: Observable<Video | null>


    constructor(private videoService: VideoService) {
        this.currentVideo$ = this.videoService.currentVideo$
    }

}