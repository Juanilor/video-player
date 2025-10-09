import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Video, VideoService } from "../../services/video.services";
import { Observable, Subscription } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { FormsModule } from "@angular/forms";






@Component({

  selector: 'playlist',
  templateUrl: 'playlist.component.html',
  styleUrl: 'playlist.component.scss',
  imports: [AsyncPipe,FormsModule]

})

export class PlaylistComponent implements OnInit {

  videos$!: Observable<Video[]>


  newVideoTitle = '';
  newVideoUrl = '';




  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.loadVideos();

    this.videos$ = this.videoService.videos$

    console.log('[PlaylistComponent] Lista de videos actualizada: ', this.videos$);

  }


  selectVideo(video: Video) {
    // this.videoSelected.emit(video)
    this.videoService.setCurrentVideo(video)
    console.log('[PlaylistComponent] Video seleccionado: ', video);

  }



  addVideo() {
    if (!this.newVideoTitle || !this.newVideoUrl) return;

    const newVideo = {
      title: this.newVideoTitle,
      url: this.newVideoUrl,
      thumbnail: 'PlaceHolder'
    }

    this.videoService.addVideo(newVideo)


    this.newVideoTitle = '';
    this.newVideoUrl = ''

  }

  deleteVideo(id: number) {
    if(confirm('Seguro desea eliminar este video?')){
      this.videoService.deleteVideo(id)
    }
  }



}