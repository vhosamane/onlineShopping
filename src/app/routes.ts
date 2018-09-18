import { Routes } from "@angular/router";
import { UserAuthGuard } from "./shared/user-auth.guard";

export const routes : Routes = [
    {path: 'admin', loadChildren:'src/app/admin/admin.module#AdminModule'},
    {path: 'user', loadChildren:'src/app/user/user.module#UserModule', canActivate:[UserAuthGuard]},
    {path: '', loadChildren:'src/app/public/public.module#PublicModule'}
]
