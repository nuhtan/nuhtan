import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/performance';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutismComponent } from './autism/autism.component';
import { HomeComponent } from './home/home.component';
import { LostComponent } from './lost/lost.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlansComponent } from './plans/plans.component';
import { PoliticsComponent } from './politics/politics.component';
import { ProfileComponent } from './profile/profile.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreatorComponent } from './schedules/creator/creator.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SchedulesComponent,
        NavigationComponent,
        LostComponent,
        ProfileComponent,
        PlansComponent,
        PoliticsComponent,
        AutismComponent,
        CreatorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAnalyticsModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFirePerformanceModule,
        MatIconModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatListModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatSelectModule,
        MatTabsModule,
        MatInputModule,
        FormsModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatDividerModule,
        NgxMaterialTimepickerModule
    ],
    providers: [
        ScreenTrackingService,
        UserTrackingService,
        PerformanceMonitoringService,
        MatDatepickerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
