import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'video/:id',
        component: VideoPlayerComponent
    },
    {
        path: '**',
        redirectTo: ''
    }

];
