import {Injectable} from '@angular/core';
import{Task} from './task.model';
@Injectable({
    providedIn:'root'
})
export class taskservice{
    constructor(){}
    getTasks():Task[]{
        return [
            { id: 1,title:'learn typeScropt basics', isComplete: true, assignee:'Alice' },
            { id: 2, title: 'Master Angular control flow', isComplete: false },
            { id: 3, title: 'Build the final project', isComplete: false, assignee: 'Bob' } 

        ];
    }
}