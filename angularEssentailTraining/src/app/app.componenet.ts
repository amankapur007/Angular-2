import { Component } from '@angular/core';

@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
})

export class AppComponent {

    onMediaItemDelete(mediaItem){
        
    }

    firstMediaItem = {
        name: 'The Redemtion',
        watchedOn : null,
        category:'action',
        year:'2016'
    }
}