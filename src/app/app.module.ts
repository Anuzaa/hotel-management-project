import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { MenuComponent } from './menu/menu.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DetailComponent } from './detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    TaskComponent,
    MenuComponent,
    ContactsComponent,
    NavigationComponent,
    DetailComponent
   
  ],
  imports: [
    FormsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:"", redirectTo:"/home", pathMatch:"full"},
      {path:"home", component:HomeComponent},
      {path:"detail", component:DetailComponent},
      {path:"task", component:TaskComponent},
      {path:"menu", component:MenuComponent},
      {path:"contacts", component:ContactsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
