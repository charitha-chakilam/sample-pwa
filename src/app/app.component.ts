import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { getDataService } from '../service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [getDataService]
})
export class AppComponent {
  title = 'app';
    
   observableQuestions: Observable<any>
   data:any;
   errorMessage: String;
  constructor(private _dataService: getDataService) {

}
  ngOnInit() {
    this.observableQuestions = this._dataService.getDataWithObservable();
    this.observableQuestions.subscribe(
    data => this.data = data,
            error =>  this.errorMessage = <any>error);
  }
}


