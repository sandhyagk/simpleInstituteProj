import { Component, OnInit } from '@angular/core';
import { EmployServiceService } from '../employ-service.service';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routing';


@Component({
  selector: 'app-view-employ',
  templateUrl: './view-employ.component.html',
  styleUrls: ['./view-employ.component.css']
})
export class ViewEmployComponent implements OnInit {

  employDetails = {};

  constructor(private _serviceFile:EmployServiceService, private _router: Router) { }

  goBack(){
    this._router.navigateByUrl('employRecord');
  }


  ngOnInit() {
   this.employDetails =  this._serviceFile.getFormData()
  }

}
