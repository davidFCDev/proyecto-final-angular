import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Módulo personalizado que exporta componentes de tipo Lista
import { ListsModule } from './modules/lists/lists.module';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskFormComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavBarComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Importamos nuestro módulo personalizado
    ListsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
