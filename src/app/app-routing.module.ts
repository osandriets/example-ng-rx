import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', loadChildren: './modules/users/users.module#UsersModule'},
  {path: 'errors', loadChildren: './modules/errors/errors.module#ErrorsModule'},
  {path: '**', redirectTo: 'errors', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'corrected',
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
