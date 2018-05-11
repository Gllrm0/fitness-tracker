import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';



const routes: Routes = [
    { path: '', component: WellcomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'training', component: TrainingComponent },
    
    // { path: '**', component: PageNotFoundComponent },
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
