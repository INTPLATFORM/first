import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { RouterModule,Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule} from '@angular/forms';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { LoginComponent } from './login.component';
import { ProjectDetailComponent } from './pDetail.component';
import { LoginServiceComponent } from './login.service';
import { ProjectSelectionServiceComponent } from './projectSelection.service';
import {SelectionComponent } from './projectSelection.component';
import { ModuleComponent } from './module.component';
import { FeatureComponent } from './featurePage.component';
import { TestExecutionComponent } from './testExecution.component';
<<<<<<< HEAD
=======

>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
import { CaptureLabComponent } from './captureLab.component';



import{ModuleServiceComponent} from './modulePage.service';
import{FeatureServiceComponent} from './featurePage.service';
import{ImportComponent} from './importPage.component';
import{ImportServiceComponent} from './importPage.service';
import{ProjectDetailServiceComponent} from './pDetail.service'
<<<<<<< HEAD
import { CaptureLabServiceComponent } from './captureLab.service';
import { TestExecutionServiceComponent } from './testExecutuion.service';


=======
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
const appRoutes: Routes = [
{ path: '', component: LoginComponent },

 { path: 'ImportPage', component: ImportComponent },

 { path: 'projectDetail', component: ProjectDetailComponent,

children:[

{ path: 'CreateModule', component: ModuleComponent },

{ path: 'CreateFeature', component: FeatureComponent },

] 
},

 { path: 'projectSelection', component: SelectionComponent },



];


@NgModule({
	 imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(appRoutes)
      ,NgbModule,FormsModule
  ],
  declarations: [
<<<<<<< HEAD
   AppComponent,TestExecutionComponent , CaptureLabComponent , ProjectDetailComponent,ImportComponent,LoginComponent,SelectionComponent,ModuleComponent,FeatureComponent],
 
 
  providers: [LoginServiceComponent,ProjectDetailServiceComponent,TestExecutionServiceComponent,CaptureLabServiceComponent,ImportServiceComponent,ProjectSelectionServiceComponent,ModuleServiceComponent,FeatureServiceComponent],
=======

   AppComponent,HeaderComponent,TestExecutionComponent , CaptureLabComponent , ProjectDetailComponent,ImportComponent,LoginComponent,SelectionComponent,ModuleComponent,FeatureComponent],

 
  providers: [LoginServiceComponent,ProjectDetailServiceComponent,ImportServiceComponent,ProjectSelectionServiceComponent,ModuleServiceComponent,FeatureServiceComponent],
>>>>>>> 77ce3be70065bde173043ce957adf01d124cecc6
  bootstrap: [ AppComponent]
})
export class AppModule { }
 
 //export const routingComponents = [ProjectDetailComponent];