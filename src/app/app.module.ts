import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { CodigoPageComponent } from './componentes/codigo-page/codigo-page.component';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import {Routes,RouterModule} from '@angular/router';
import { AuthService } from './servicio/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'registrar',component:RegisterPageComponent},
  {path:'codigo',component:CodigoPageComponent},
  {path:'privado',component:PrivatePageComponent,canActivate: [AuthGuard]},
  {path:'**',component:NotFoundPageComponent},
];

export const firebaseConfig = {
  apiKey: "AIzaSyAcKYnx4Qej4UE9HGXcWGpAla-ZEh8mj5I",
  authDomain: "angularlogin-ef26d.firebaseapp.com",
  databaseURL: "https://angularlogin-ef26d.firebaseio.com",
  projectId: "angularlogin-ef26d",
  storageBucket: "angularlogin-ef26d.appspot.com",
  messagingSenderId: "657716599461"
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    CodigoPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
