import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { of, from, interval, timer, merge } from 'rxjs';
import { mapTo, take } from 'rxjs/operators';

@Component({
    selector: 'stream',
    templateUrl: 'stream.component.html',
    styleUrls: ['stream.component.css']
})
export class StreamComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        //console.log('ngOninit');
        //of(1, 2, 3).subscribe(item => console.log('of', item));
        //from([1, 2, 3]).subscribe(item => console.log('from', item));

        const source1$ = interval(1000).pipe(
            take(4),
            mapTo('First')
        );

        const source2$ = interval(1000).pipe(
            take(4),
            mapTo('Second')
        );

        const source3$ = interval(2000).pipe(
            take(2),
            mapTo('Third')
        );

        merge(
            source1$,
            source2$,
            source3$
        ).subscribe(value => console.log('Merge', value))


    }
}