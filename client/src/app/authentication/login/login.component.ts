import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { StoryAlertService } from 'src/app/alert.service';

@Component({
    selector   : 'story-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss'],
})

export class StoryLoginComponent implements OnInit {
    
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private httpClient: HttpClient,
        private router: Router,
        private alertService: StoryAlertService
    ) {}

    ngOnInit() {
        this.buildLoginForm();
    }

    buildLoginForm() {
        this.loginForm = this.formBuilder.group({
            email   : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    loginHandler(userCredentials) {
        let self = this;
        self.loginService(userCredentials)
            .subscribe({
                next(res) {
                    console.log(res);
                    if (!res['err']) {
                        self.router.navigateByUrl('/videos');
                    } else {
                        self.alertService.error(res['err'], true);
                    }
                },
                error(err) {
                    console.log(err);
                    self.alertService.error(err, true);
                },
                complete() { console.log('completed');}
            });
    }

    loginService(userCredentials) {
        return this.httpClient.post(`http://localhost:3000/api/login`, userCredentials)
            .pipe(map(res => res));
    }
}
