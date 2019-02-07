import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { StoryService } from '../app.service';

@Component({
    selector: 'story-video',
    templateUrl: 'videos.component.html',
    styleUrls: ['./videos.component.scss']
})

export class StoryVideoComponent implements OnInit {

    constructor(
        private httpClient: HttpClient,
        private appService: StoryService,
    ) { }

    ngOnInit() { 
        this.getAllVideosHandler();
    }
    
    getAllVideosHandler() {
        this.getAllVideosService()
            .subscribe(res => console.log(res));
    }

    getAllVideosService() {
        const headers = this.appService.getHeaders();
        return this.httpClient.get(`http://localhost:3000/api/getMediaByArtist`, {headers})
            .pipe(map(res => res));
    }
}
