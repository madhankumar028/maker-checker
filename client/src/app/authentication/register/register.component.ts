import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector   : 'story-register',
    templateUrl: './register.component.html',
    styleUrls  : ['./register.component.scss'],
})

export class StoryRegisterComponent implements OnInit {

    registerForm: FormGroup;
    registerFormErrors: any;

    constructor(
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name           : ['', Validators.required],
            email          : ['', [Validators.required, Validators.email]],
            password       : ['', Validators.required],
            passwordConfirm: ['', [Validators.required, confirmPassword]]
        });
    }
}

function confirmPassword(control: AbstractControl) {
    if ( !control.parent || !control ) {
        return;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('passwordConfirm');

    if ( !password || !passwordConfirm ) {
        return;
    }

    if ( passwordConfirm.value === '' ) {
        return;
    }

    if ( password.value !== passwordConfirm.value ) {
        return {
            passwordsNotMatch: true
        };
    }
}
