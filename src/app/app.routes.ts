import { Routes } from '@angular/router';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CollectionsComponent } from './collections/collections.component';

export const routes: Routes = [{path:'',redirectTo:'collections', pathMatch:'full'},
    {path:'men', component: MenComponent}, 
    {path:'women', component: WomenComponent}, 
    {path:'about', component: AboutComponent},
    {path:'contact', component: ContactComponent},
    {path:'collections', component: CollectionsComponent}];
    