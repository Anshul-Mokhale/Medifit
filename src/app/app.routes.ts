import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { PainReliefComponent } from './shop/pages/pain-relief/pain-relief.component';
import { AllitemComponent } from './shop/pages/allitem/allitem.component';
import { ItempageComponent } from './shop/pages/itempage/itempage.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    {
        path: 'shop',
        component: ShopComponent,
        children: [
            { path: '', component: AllitemComponent },
            { path: 'pain-relief', component: PainReliefComponent },
            { path: 'item/:id', component: ItempageComponent },
            //   { path: 'antibiotics', component: AntibioticsComponent },
            //   { path: 'vitamins', component: VitaminsComponent },
            //   { path: 'skin-care', component: SkinCareComponent },
            //   { path: 'baby-products', component: BabyProductsComponent },
            //   { path: 'first-aid', component: FirstAidComponent },
            //   { path: '', redirectTo: 'all', pathMatch: 'full' }
        ]
    },
];
