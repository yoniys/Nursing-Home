import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecwestComponent } from './comps/add-recwest/add-recwest.component';
import { AddWorkerComponent } from './comps/add-worker/add-worker.component';
import { HistoryComponent } from './comps/history/history.component';
import { LogInComponent } from './comps/log-in/log-in.component';
import { MainComponent } from './comps/main/main.component';
import { MainscreenComponent } from './comps/mainscreen/mainscreen.component';
import { MonthListComponent } from './comps/month-list/month-list.component';
import { WorkersListComponent } from './comps/workers-list/workers-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path:'log-in',component:LogInComponent},
  {path:'main screen',component:MainscreenComponent,children:[
    {path:'main',component:MainComponent},
    {path:'history',component:HistoryComponent},
    {path:'add-worker',component:AddWorkerComponent},
  {path:'workers',component:WorkersListComponent},
  {path:'month list',component:MonthListComponent},
  {path:'requests',component:AddRecwestComponent}
]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
