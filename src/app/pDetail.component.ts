<<<<<<< HEAD
import { Component, Input,OnInit} from '@angular/core';

=======
import { Component, Input,OnInit,OnDestroy} from '@angular/core';
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
import { ActivatedRoute, Router } from '@angular/router';

import { ProjectDetailServiceComponent } from './pDetail.service';
import {Post} from './post';
import {SelectionComponent} from './projectSelection.component';



@Component({
   selector: 'app-detail',
 
  templateUrl:'./html/projectDetail.html',

   styleUrls: ['./css/pDetail.component.css'],

      providers: [ProjectDetailServiceComponent]   

})//componrnt  closing

<<<<<<< HEAD
export class ProjectDetailComponent implements OnInit  {
   moduleChild:Post[];
  // moduleId:Post[];
moduleName:any;

    projectName:string;
    
 //moduleChild:any[]=[];
 indexvalue:number;

 message:string;
    show: boolean;
    mo:boolean;
    execute:boolean;
    con:boolean;
=======
export class ProjectDetailComponent implements OnInit,OnDestroy  {
   moduleChild:Post[];
   increment:Post[];
 selectedMod:Post[];
 sMN:string;
 ind:number;
  mo:boolean;
    execute:boolean;
  //all=[];
  //temp: any[];
moduleName:Post[];
    projectName:string;
 //moduleChild:any[]=[];
 indexvalue:Post[];
 Mnvalid:any;
 validMn:string;

 message:string;
    show: boolean;
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
testExecution:boolean;
displayModule:boolean;
displayFeature:boolean;
displayImport:boolean;
<<<<<<< HEAD
//selectedModule:any;

    constructor(private router: Router,private route:ActivatedRoute,private module:ProjectDetailServiceComponent) {
    this.show = false;
    this.mo=false;
=======
showDropDown:boolean;
everyTime: any;
//selectedModule:any;


    constructor(private router: Router,private route:ActivatedRoute,private module:ProjectDetailServiceComponent) {
    this.show = false;
      this.mo=false;
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
    this.execute=false;
 this.testExecution=false;
 this.displayModule=false;
 this.displayFeature=false;
 this.displayImport=false;
<<<<<<< HEAD
=======

>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
    }
 
 

      ngOnInit(){
<<<<<<< HEAD
//var index=0;

            let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
            this.projectName=dataFromProjectSelectionDropdown;
            this.module.projectDetails().subscribe(moduleData =>this.moduleName=moduleData);
  // this.module.childModuleDetails(index)
  //   .subscribe(moduleData =>{this.oduleChild=moduleData;console.log(this.oduleChild) });
  //     //console.log(this.moduleChild)
      }
 
   showDropDown:boolean;

manualtoggle(index){
 
//alert(index+"000")
 
 
this.module.childModuleDetails(index)
.subscribe(moduleData =>{this.moduleChild=moduleData;
  this.indexvalue=this.moduleChild[0].moduleId;
  console.log(this.moduleChild) });
  console.log(this.moduleChild[0].moduleId);

 
//alert(this.oduleChild.length)

// for (let i = 0; i <=this.moduleChild.length; i++) {
 
  //alert(typeof(this.oduleChild[i].featureName)+this.oduleChild[i].featureName)
  //console.log(this.moduleChild[i].moduleId)

  //this.indexvalue=this.moduleChild[i].moduleId;
  //this.showDropDown=!this.showDropDown;
  //alert(this.showDropDown)
  // this.moduleChild=this.oduleChild;
 //alert(typeof(this.oduleChild[i].moduleId)+this.oduleChild[i].moduleId)
 //var i=0;
 //this.indexvalue=this.moduleChild[i].moduleId
 
 //alert(this.indexvalue)

  // }
//  if(index==this.indexvalue){
   
  
// //console.log(this.moduleChild.featureName)
//   }

}

  



=======
        

             let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
             this.projectName=dataFromProjectSelectionDropdown;
 this.module.projectDetails().subscribe(moduleData =>{this.moduleName=moduleData;
console.log("jjjkk")
 //this.updateLastSeen(this.moduleName);
 });

      }

ngOnDestroy(){
 console.log("destroy")
  clearInterval(this.everyTime);


}

manualtoggle(clickModule,index){
 this.sMN=clickModule;
 this.ind=index;
 //alert(this.ind)
//alert(index)
 
 
// this.module.childModuleDetails(clickModule)
// .subscribe(moduleData =>{this.moduleChild=moduleData;this.indexvalue=this.moduleChild[0].moduleId;console.log(this.moduleChild) });

 
this.module.moId(clickModule).subscribe(moduleData =>{this.selectedMod=moduleData;this.verificationModule(this.selectedMod)
;this.indexvalue=this.selectedMod[0].unitedFM});

//alert(this.validMn)

}

verificationModule(vMF){
  //console.log(vMF)
  this.validMn=vMF[0].moduleName;
  //alert( this.validMn)
 // console.log(vMF[0].unitedFM.length)
  //console.log(this.sMN)
  //for(var i=0;i<=vMF[0].unitedFM.length;i++){
 //console.log(vMF[0].unitedFM[i].featureName)
     //this.indexvalue=vMF[0].unitedFM[i];
  //console.log(vMF[0].unitedFM[0].featureName)
//   if (this.validMn==this.sMN){
// this.indexvalue=vMF[0].unitedFM[0].featureName;
//}

//}  


  }
   //this.Mnvalid=this.selectedMod[0].unitedFM[0].moduleName
    

        mobile(){
          this.mo=true;
          this.execute=false;
          this.show=false;

        }

        execution(){
          this.execute=true;
          this.mo=false;
          this.show=false;

        }


>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
 
        changeShowStatus(){
//alert( this.show)
           this.show = true;
           this.testExecution=false;
<<<<<<< HEAD
           this.mo=false;
=======
             this.mo=false;
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
           this.execute=false; 
 
        }
    
        showTestExecution(){
//alert("2")
<<<<<<< HEAD
   this.show = false;
   this.testExecution=true;
   this.mo=false;
   this.execute=false;
        }

        goCreateModule(){
=======
this.show = false;
   this.testExecution=true;
        }

        goCreateModule(){
      this.everyTime=setInterval(() => {
      this.ngOnInit();
 
 }, 1000);
      //console.log("kk")
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
          //var displayModule:string
          this.displayModule=true;
          this.displayFeature=false;
          this.displayImport=false;
<<<<<<< HEAD
          //alert("yy")
          //this.router.navigate(['CreateModule'],{relativeTo:this.route})
        }
=======

  }



>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
           goCreateFeature(){
          this.displayFeature=true;
          this.displayModule=false;
          this.displayImport=false;
<<<<<<< HEAD
=======
          //console.log("went")
          //this. ngOnDestroy()
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
        }
       goImport(){
         //alert("1st")
          this.displayImport=true;
          this.displayModule=false;
          this.displayFeature=false;
<<<<<<< HEAD
        }

        mobile(){
          this.mo=true;
          this.execute=false;
          this.show=false;

        }

        execution(){
          this.execute=true;
          this.mo=false;
          this.show=false;
        }

        connect(){
          this.con=true;
       } 
=======
        }

  

>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6

}
