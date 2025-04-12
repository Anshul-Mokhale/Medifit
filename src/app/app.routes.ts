import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { CartComponent } from './Pages/cart/cart.component';
import { PaymentComponent } from './Pages/payment/payment.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { AllitemComponent } from './shop/pages/allitem/allitem.component';
import { PainReliefComponent } from './shop/pages/pain-relief/pain-relief.component';
import { ItempageComponent } from './shop/pages/itempage/itempage.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'cart', component: CartComponent },
            { path: 'payment', component: PaymentComponent },
            {
                path: 'shop',
                component: ShopComponent,
                children: [
                    { path: '', component: AllitemComponent },
                    { path: 'pain-relief', component: PainReliefComponent },
                    { path: 'item/:id', component: ItempageComponent }
                ]
            }
        ]
    },
    {
        path: '',
        component: BlankLayoutComponent,
        children: [
            { path: '**', component: NotfoundComponent }
        ]
    }
];
