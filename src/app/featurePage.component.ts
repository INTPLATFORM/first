<<<<<<< HEAD
import { Component ,OnInit} from '@angular/core';
=======
import { Component ,OnInit,OnDestroy} from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
import{FeatureServiceComponent} from './featurePage.service'
import {ProjectDetailServiceComponent} from './pDetail.service';
import {Post} from './post';
@Component({
   selector: 'app-feature',
 
  templateUrl:'./html/featurePage.component.html',

providers: [ProjectDetailServiceComponent]
   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

<<<<<<< HEAD
export class FeatureComponent implements OnInit   {
  moduleDatas:Post[]; 
    featureName:string;
  

    constructor(private sendFeatureName:FeatureServiceComponent,private data:ProjectDetailServiceComponent) {
=======
export class FeatureComponent implements OnInit,OnDestroy  {
  moduleDatas:Post[]; 
  fShowInc:Post[];
  incfeatureId:string;
    featureName:string;
  selectedValue:string;
  finalSelectedMid:any;
  interval: any;
   idFromModule:Post[];
    constructor(private sendFeatureName:FeatureServiceComponent,private data:ProjectDetailServiceComponent,
      private http:Http) {
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
  //alert("jjj")
  
 
    }
 
 
      ngOnInit(){
<<<<<<< HEAD
  	
=======
    
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6

          this.data.projectDetails()
          .subscribe(Data => this.moduleDatas=Data, error => console.log(error));

<<<<<<< HEAD
          //console.log(this.datas)

          // this.datas=this.projectSelectionData;



      }
=======

   this.interval = setInterval(() => { 
            this.refreshData(); 
        }, 1000);

      }
refreshData(){
 this.sendFeatureName.idFDetails()
.subscribe(moduleData =>{this.fShowInc=moduleData;this.lastIncF(this.fShowInc) });
//console.log("refresh")
}

ngOnDestroy(){
  console.log("destroy")
  clearInterval(this.interval);
}

mData(selectedValue){
//alert(this.selectedValue)
//alert(dd)
this.sendFeatureName.getMId(selectedValue).subscribe(Data =>{this.idFromModule=Data;this.fromMoudle(this.idFromModule)});


}
fromMoudle(takeModuleId){
this.finalSelectedMid=takeModuleId[0].moduleId
}

lastIncF(lastFid){

if(lastFid.length==0){

alert("make responce o")
}
else{
  var iFid=parseInt(lastFid[0].featureId)
  console.log(iFid)

   var uFid=iFid+1;
   this.incfeatureId=uFid.toString();
  console.log(this.incfeatureId)
}

}

>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6

   saveFeatureName(){



     console.log(this.featureName)
      console.log(this.finalSelectedMid)
       let urlSearchParams = new URLSearchParams();
 urlSearchParams.append('featureName', this.featureName);
 urlSearchParams.append('moduleId', this.finalSelectedMid);
 urlSearchParams.append('featureId', this.incfeatureId)
 
     return this.http.post('/postFeatureName', urlSearchParams)
      .subscribe(data => {
      //console.log(data);
    });
 //this.ngOnInit();
//alert(takeModuleId[0].moduleId)
//var combineMidFN=this.finalSelectedMid+this.featureName;
//this.sendFeatureName.featureServiceDetails(combineMidFN)

   }  




}
