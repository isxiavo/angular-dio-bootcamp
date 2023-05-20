import { Component } from '@angular/core'

@Component({
    selector:'entry-data',
    templateUrl:'./entry-data.html',
    styleUrls:['./entry-data.css']
})

export class EntryData{
    placeholder: string ="email";
    placepass:string = "senha";
    color: string = "red"
}