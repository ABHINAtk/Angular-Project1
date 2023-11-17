import {NgModule} from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    {
        component:AboutComponent,
        path:"About"
    },
    {
        component:ContactsComponent,
        path:"Contact"
    },
];
