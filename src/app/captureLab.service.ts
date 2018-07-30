import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { URLSearchParams } from '@angular/http';

import {Post} from './post';

@Injectable()
export class CaptureLabServiceComponent {


 constructor(private http: Http) {

 }

 mobileAppDetails(): Observable<Post[]>{
  // alert("ll00")
     return this.http.get("/mobileAppsDetails")
    .map((response: Response) => <Post[]>response.json());
  
    }

 captureLabServiceDetails() {

  // var devicesName = "Shivu";
  
  // var devicesId:  "1";
  //  var abc=devicesName+","+devicesId;
  let urlSearchParams = new URLSearchParams();
  urlSearchParams.append('devicesName',"Manish" );
  urlSearchParams.append('devicesId',"7345y713833434" );
 //alert(urlSearchParams)
// console.log(urlSearchParams)
    return this.http.post('/postDevicesName',urlSearchParams)
      .subscribe(data => {console.log(data);
    });


  }

  }