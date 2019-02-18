import { StoryService } from './../app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'story-video',
    templateUrl: 'videos.component.html',
    styleUrls: ['./videos.component.scss']
})

export class StoryVideoComponent implements OnInit {

    mediaForm: FormGroup;

    media: Observable<Array<any>>;

    constructor(
        private httpClient: HttpClient,
        public router: Router,
        private formBuilder: FormBuilder,
        private util: StoryService
    ) {}

    ngOnInit() {
        localStorage.getItem('userType') === 'MAKER'
            ? this.media = this.getAllVideosService()
            : this.media = this.getPendingApprovalMediaService();

        this.buildMediaForm();
    }

    buildMediaForm() {
        this.mediaForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(3)]],
            mediaFile: ['', Validators.required]
        });
    }
    
    readFile(event: any) {
        if (event.target.files && event.target.files[0]) {
            if(event.target.files[0].size > 50000000) {
                return;
            }
            this.mediaForm.controls['mediaFile'].setValue(event.target.files[0]);
        }
    }

    mediaSubmitHandler(mediaDetails) {
        this.mediaUploadService(mediaDetails)
            .subscribe({
                next(res) {
                    console.log(res);
                    //TODO: handle the routing part and showing the alert to user
                },
                error(err) {
                    console.log(err);
                    //TODO: handle the routing part and showing the alert to user
                }
            });
    }

    getPendingApprovalMediaService(): Observable<Array<any>> {
        let headers = this.util.getHeaders();

        return this.httpClient.get(`http://localhost:3000/api/getAllPendingRequests`, {headers})
            .pipe(map(res => res['mediaList']))
    }

    getAllVideosService(): Observable<Array<any>> {
        let headers = this.util.getHeaders();

        return this.httpClient.get(`http://localhost:3000/api/getMediaByArtist`, {headers})
            .pipe(map(res => res['mediaList']));
    }

    mediaUploadService(mediaDetails) {
        let data = new FormData();
        let headers = this.util.getHeaders();
        data.append('title', mediaDetails.title);
        data.append('mediaFile', mediaDetails.mediaFile);


        return this.httpClient.post(`http://localhost:3000/api/submitMedia`, data, {headers})
            .pipe(map(res => res));
    }

    logoutHandler() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
}
