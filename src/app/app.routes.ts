import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { CommentComponent } from './pages/comment/comment.component';
import { RegisterCommentComponent } from './pages/register-comment/register-comment.component';



const app_routes: Routes = [
    { path: '*', component: SearchComponent},
    { path: 'search', component: SearchComponent},
    { path: 'doctor/:id', component: DoctorComponent},
    { path: 'comments/doctor/:id', component: CommentComponent},
    { path: 'comments/doctor/:id/new', component: RegisterCommentComponent}
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
