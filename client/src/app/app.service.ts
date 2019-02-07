import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class StoryService {
    
    constructor() { }
    
    getHeaders(): HttpHeaders {
        const headers = new HttpHeaders({
            'userToken': localStorage.getItem('token')
        });
        return headers;
    }
}
