import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, } from '@angular/fire/auth-guard';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { LostComponent } from './lost/lost.component';
import { PlansComponent } from './plans/plans.component';
import { PoliticsComponent } from './politics/politics.component';
import { AutismComponent } from './autism/autism.component';
import { CreatorComponent } from './schedules/creator/creator.component';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['home/1']);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome } },
    { path: 'schedules', component: SchedulesComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome } },
    { path: 'schedules/create', component: CreatorComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome } },
    { path: 'plans', component: PlansComponent },
    { path: 'politics', component: PoliticsComponent },
    { path: 'autism', component: AutismComponent },
    { path: 'home/:error', component: HomeComponent },
    { path: '**', component: LostComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
