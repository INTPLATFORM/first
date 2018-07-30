import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaptureLabServiceComponent} from './captureLab.service';
import { Post } from './post';
@Component({
  selector: 'app-cap',
 
  templateUrl:'./html/captureLab.html',
    // styleUrls:['./css/testExecution.css']    
           
     })//componrnt  closing

export class CaptureLabComponent implements OnInit  {
 
   devicesName:String;
   devicesId:String;
   dvc:boolean;
   result:Post[];

   constructor(private mobileApps:CaptureLabServiceComponent) {
    //alert("jjj")
    this.dvc=false;   
   
      }

      ngOnInit() {

        this.mobileApps.mobileAppDetails().subscribe(mobileData => this.result = mobileData);
    
       // this.datas=this.projectSelectionData;
    
    
    
    }
   

//    connect(){
     
// this.dvc=true;
// alert('aaaaaaaaaaaa');
// this.sendDevicesName.CaptureLabServiceDetails(this.devicesName)

//  }

 connect(){
  // alert(this.opalName+"mmmm")
   //alert(this.moduleIdincrement++)
   this.dvc=true;
   this.mobileApps.captureLabServiceDetails();
 
      }
      

   }
