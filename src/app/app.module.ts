import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from "src/environments/environment";
const config = {
  apiKey: "AIzaSyCMBHiaqvFtqtWs1g37jOQ48jih3dYrPkk",
  authDomain: "watchbot-83bfe.firebaseapp.com",
  projectId: "watchbot-83bfe",
  storageBucket: "watchbot-83bfe.appspot.com",
  messagingSenderId: "384474922978",
  appId: "1:384474922978:web:d882a0e8da0d6f504b03bb",
  measurementId: "G-0N6YBYQ4E8"
    }

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    ChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
