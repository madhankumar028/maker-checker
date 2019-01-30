import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector   : 'story-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.scss'],
})

export class StoryLoginComponent implements OnInit {
    
    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
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
}
