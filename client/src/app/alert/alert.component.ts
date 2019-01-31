import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoryAlertService } from '../alert.service';

@Component({
    selector: 'story-alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['./alert.component.scss']
})

export class StoryAlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(private alertService: StoryAlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message;
            setTimeout(() => {
                this.message = undefined;
            }, 3000);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
