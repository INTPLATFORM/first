<<<<<<< HEAD
import { Component, OnInit} from '@angular/core';
import { Http,Response } from '@angular/http';
//import {ProjectSelectionServiceComponent} from './projectSelection.service';

import { TestExecutionServiceComponent  } from './testExecutuion.service';
import {Post} from './post';
=======


import { Component, OnInit} from '@angular/core';


import { ProjectDetailServiceComponent  } from './pDetail.service';
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
@Component({
selector: 'app-test',

templateUrl:  './html/testExecution.html',
  styleUrls: ['./css/testExecution.css'],
<<<<<<< HEAD
  providers : [ TestExecutionServiceComponent ]


       }) // componrnt  closing
export class TestExecutionComponent implements OnInit  {
      //  modules : Module [] = [
      //    { moduleName : "Features" , moduleId : 1 }
      //  ]
     
=======
  providers : [ ProjectDetailServiceComponent ]


       }) // componrnt  closing

export class TestExecutionComponent implements OnInit  {
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
       moduleNames = [] ;
       featureNames = [];
       typeArray = [];
       priorityArray = [];
<<<<<<< HEAD
       testScriptsData = [];
      // testScript = [];
       demoArrayaData: String = "";
       moduleId:string;
       featureId:string;
       featureName:string;
       lineNum:string;
       srch:boolean;
       test:any;
       var2_featureName:any;
      
      
       a:any; 
       $http: any;



  constructor( private data: TestExecutionServiceComponent , private http:Http) {
    this.srch=false;      
=======
       demoArrayaData: String = "";



  constructor( private data: ProjectDetailServiceComponent) {

>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
  }
  ngOnInit() {
    this.data.projectDetails().subscribe(Data => this.moduleNames = Data) ;
    this.data.childModuleDetails1().subscribe(Data => this.featureNames = Data ) ;
    this.data.typeDetails().subscribe(Data => this.typeArray = Data) ;
    this.data.priorityDetails().subscribe(Data => this.priorityArray = Data) ;
<<<<<<< HEAD
    this.data.testScriptDetails().subscribe(Data => this.testScriptsData = Data)
    // this.data.showDetails().subscribe(Data => this.testScript = Data)
=======
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
    this.demoArrayaData = this.moduleNames[1];

  }

<<<<<<< HEAD
 search(moduleId,featureName) {
   if(moduleId==undefined || featureName==undefined){
     alert("Please select Module and Feature")

   }
   else{
   this.srch=true;
  alert(moduleId+","+featureName) ;
  let c =moduleId+','+featureName ;
  this.http.get('/getTestScriptDetails'+c,{})
  .subscribe(result =>{console.log(result)}); 
   }

 }

 vicky:any
 row(test) {
   alert("Row")   
   alert(test.lineNum);
//   // alert(var2_featureName.featureName);
//   // alert(var2_featureName.featureName+','+test.lineNum) ;
//   // // alert(test.lineNum) ;
//   // console.log(var2_featureName.featureName+','+test.lineNum);
     this.vicky=test.lineNum;
//   this.vicky=test.lineNum;
//  // console.log(test.lineNum);
  }

 run(featureName) { 
  alert("Run");
  alert(featureName)
  alert(this.vicky);
  var lineNum = this.vicky;
  console.log(featureName+','+lineNum);  
  
  var c = lineNum+','+featureName;
 
  this.http.post('/testScript'+c,{})
  .subscribe(result =>{console.log(result)});
  // alert(c);
  // console.log(c);
 }
}
  
    



=======




}

>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
