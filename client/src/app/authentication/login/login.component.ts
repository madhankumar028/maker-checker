import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { StoryAlertService } from 'src/app/alert.service';

import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

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
        private alertService: StoryAlertService,
    ) {}

    ngOnInit() {
        this.buildLoginForm();
    }

    buildLoginForm() {
        this.loginForm = this.formBuilder.group({
            emailId : ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            userType: ['', Validators.required]
        });
    }

    loginHandler(userCredentials) {
        let self = this;
        self.loginService(userCredentials)
            .subscribe({
                next(res) {
                    console.log(res);
                    if (!res['err']) {
                        localStorage.setItem('token', res['userData'].userToken);
                        
                        localStorage.setItem('userType', res['userData'].userType);
                        self.router.navigateByUrl('/home');
                    } else {
                        self.alertService.error(res['err'], true);
                    }
                },
                error(err) {
                    console.warn(err);
                    self.alertService.error(err, true);
                },
                complete() {
                    console.info('User Login completed');
                }
            });
    }

    loginService(userCredentials) {
        return this.httpClient.post(`http://localhost:3000/api/login`, userCredentials)
            .pipe(
                map(res => res),
                catchError(err => { console.warn(err); return err})
            );
    }
}
