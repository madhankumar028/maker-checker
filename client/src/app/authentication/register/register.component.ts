import { StoryAlertService } from './../../alert.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector   : 'story-register',
    templateUrl: './register.component.html',
    styleUrls  : ['./register.component.scss'],
})

export class StoryRegisterComponent implements OnInit {

    registerForm: FormGroup;
    registerFormErrors: any;

    constructor(
        private formBuilder: FormBuilder,
        private httpClient: HttpClient,
        private router: Router,
        private alertService: StoryAlertService,
    ) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name           : ['', Validators.required],
            emailId        : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPassword]],
            userType       : ['', Validators.required]
        });
    }

    signupHandler(userDetails) {
        let self = this;
        
        delete userDetails['passwordConfirm'];

        this.signupService(userDetails)
            .subscribe({
                next(res) { 
                    console.log(res);
                    if (!res['err']) {
                        self.alertService.success('Registration successful', true);
                    } else {
                        self.alertService.success(res['err'], true);
                    }
                    self.router.navigateByUrl('/login');
                },
                error(err) { console.warn(err);},
                complete() { console.info('signUp completed'); }
            });
    }

    signupService(userDetails) {
        return this.httpClient.post(`http://localhost:3000/api/signup`, userDetails)
            .pipe(map(res => res));
    }
}

function confirmPassword(control: AbstractControl) {
    if (!control.parent || !control) {
        return;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if (!password || !passwordConfirm) {
        return;
    }

    if (!passwordConfirm.value) {
        return;
    }

    if (password.value !== passwordConfirm.value) {
        return {
            passwordsNotMatch: true
        };
    }
}
