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
import { LoginComponent } from './Auth/login/login.component';
import { SigninComponent } from './Auth/signin/signin.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { AdminhomeComponent } from './Dashboard/adminhome/adminhome.component';
import { AdminusersComponent } from './Dashboard/adminusers/adminusers.component';
import { UserhomeComponent } from './Dashboard/Users/userhome/userhome.component';
import { TransactionComponent } from './Dashboard/Users/transaction/transaction.component';
import { AdminagentComponent } from './Dashboard/adminagent/adminagent.component';
import { AdmindeliveryComponent } from './Dashboard/admindelivery/admindelivery.component';
import { AdminitemComponent } from './Dashboard/adminitem/adminitem.component';
import { AdminorderComponent } from './Dashboard/adminorder/adminorder.component';
import { AdminsupportComponent } from './Dashboard/adminsupport/adminsupport.component';
import { AdmincontactComponent } from './Dashboard/admincontact/admincontact.component';
import { AdminviewuserComponent } from './Dashboard/adminviewuser/adminviewuser.component';
import { AdminviewagentComponent } from './Dashboard/adminviewagent/adminviewagent.component';
import { AdminviewdeliveryComponent } from './Dashboard/adminviewdelivery/adminviewdelivery.component';
import { AdminviewitemComponent } from './Dashboard/adminviewitem/adminviewitem.component';
import { AdminadditemComponent } from './Dashboard/adminadditem/adminadditem.component';


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
            { path: 'login', component: LoginComponent },
            { path: 'signin', component: SigninComponent },

        ]
    },
    {
        path: 'admin',
        component: DashboardLayoutComponent,
        children: [
            { path: 'dashboard', component: AdminhomeComponent },
            { path: 'users', component: AdminusersComponent, },
            { path: 'users/view/:id', component: AdminviewuserComponent },
            { path: 'agents', component: AdminagentComponent },
            { path: 'agents/view/:id', component: AdminviewagentComponent },
            { path: 'delivery-persons', component: AdmindeliveryComponent },
            { path: 'delivery-persons/view/:id', component: AdminviewdeliveryComponent },
            { path: 'items-listed', component: AdminitemComponent },
            { path: 'items-listed/item/:id', component: AdminviewitemComponent },
            { path: 'items-listed/add-item', component: AdminadditemComponent },
            { path: 'orders', component: AdminorderComponent },
            { path: 'support-tickets', component: AdminsupportComponent },
            { path: 'contact-requests', component: AdmincontactComponent }
        ]
    },
    {
        path: 'user',
        component: DashboardLayoutComponent,
        children: [
            { path: 'dashboard', component: UserhomeComponent },
            { path: 'transactions', component: TransactionComponent },
        ]
    },
    { path: '**', component: NotfoundComponent }
];
