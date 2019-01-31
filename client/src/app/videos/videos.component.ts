import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';

@Component({
    selector: 'story-video',
    templateUrl: 'videos.component.html',
    styleUrls: ['./videos.component.scss']
})

export class StoryVideoComponent implements OnInit {

    constructor(
        private httpClient: HttpClient
    ) { }

    ngOnInit() { 
        this.getAllVideosHandler();
    }
    
    getAllVideosHandler() {
        this.getAllVideosService()
            .subscribe(res => console.log(res));
    }

    getAllVideosService() {
        return this.httpClient.get(`http://localhost:3000/api/getMediaByArtist`)
            .pipe(map(res => res));
    }
}
