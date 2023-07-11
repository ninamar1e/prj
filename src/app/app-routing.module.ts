import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'barkada',
    loadChildren: () => import('./barkada/barkada.module').then( m => m.BarkadaPageModule)
  },
  {
    path: 'frappuccino',
    loadChildren: () => import('./frappuccino/frappuccino.module').then( m => m.FrappuccinoPageModule)
  },
  {
    path: 'extras',
    loadChildren: () => import('./extras/extras.module').then( m => m.ExtrasPageModule)
  },
  {
    path: 'variation',
    loadChildren: () => import('./variation/variation.module').then( m => m.VariationPageModule)
  },
  {
    path: 'kuchi',
    loadChildren: () => import('./kuchi/kuchi.module').then( m => m.KuchiPageModule)
  },
  {
    path: 'premier',
    loadChildren: () => import('./premier/premier.module').then( m => m.PremierPageModule)
  },
  {
    path: 'variations',
    loadChildren: () => import('./variations/variations.module').then( m => m.VariationsPageModule)
  },
  {
    path: 'hot',
    loadChildren: () => import('./hot/hot.module').then( m => m.HotPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'opening',
    loadChildren: () => import('./opening/opening.module').then( m => m.OpeningPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
