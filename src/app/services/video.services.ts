import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";


export interface Video {
  id: number
  title: string,
  url: string,
  thumbnail: string
}


@Injectable({
  providedIn: 'root'
})

export class VideoService {

  private apiUrl = 'http://localhost:3000/videos'



  private videosSubject = new BehaviorSubject<Video[]>([])
  videos$: Observable<Video[]> = this.videosSubject.asObservable();


  private currentVideoSubject = new BehaviorSubject<Video | null>(null);
  currentVideo$: Observable<Video | null> = this.currentVideoSubject.asObservable()



  constructor(private http: HttpClient) { }



  loadVideos() {

    console.log('[VideoService] Cargando Api: ', this.apiUrl);

    this.http.get<Video[]>(this.apiUrl).subscribe({
      next: (videos) => {
        console.log('[VideoService] Videos Recibidos: ', videos);

        if (!videos || videos.length === 0) {
          console.warn('[VideoService] No se recibieron videos, cargando Fallback');
          this.loadFallbackVideos();
          return
        }

        this.videosSubject.next(videos)


        if (!this.currentVideoSubject.value && videos.length > 0) {
          this.currentVideoSubject.next(videos[0])
          console.log('[VideoService] Video actual inicializado', videos[0]);

        }

      },
      error: (err) => {
        console.log('[VideoService] Error al cargar videos: ', err);
        this.loadFallbackVideos()

      }
    })
  }


  private loadFallbackVideos() {
    const fallback: Video[] = [{
      id: 0,
      title: 'Video fallback - Big Buck Bunny',
      url: 'https://www.w3schools.com/html/mov_bbb.mp4',
      thumbnail: ''
    }]
    this.videosSubject.next(fallback)
    this.currentVideoSubject.next(fallback[0])
    console.log('[VideoService] Videos de fallback cargados: ', fallback);

  }


  setCurrentVideo(video: Video) {
    this.currentVideoSubject.next(video)
  }


  addVideo(video: Omit<Video, 'id'>) {
    this.http.post<Video>(this.apiUrl, video).subscribe(newVideo => {
      const current = [...this.videosSubject.value, newVideo]
      this.videosSubject.next(current)
    })
  }

  deleteVideo(id: number) {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      const updated = this.videosSubject.value.filter(v => v.id !== id);
      this.videosSubject.next(updated)
    })
  }

}