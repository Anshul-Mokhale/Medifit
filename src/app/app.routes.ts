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
import { AdminmedicineComponent } from './Dashboard/adminmedicine/adminmedicine.component';
import { AdminhealthComponent } from './Dashboard/adminhealth/adminhealth.component';
import { AdminbeautyComponent } from './Dashboard/adminbeauty/adminbeauty.component';
import { AdminfitnessComponent } from './Dashboard/adminfitness/adminfitness.component';
import { AdminequipmentComponent } from './Dashboard/adminequipment/adminequipment.component';
import { AdminmedikitComponent } from './Dashboard/adminmedikit/adminmedikit.component';
import { AdminorderpendingComponent } from './Dashboard/adminorderpending/adminorderpending.component';
import { AdminorderprocessedComponent } from './Dashboard/adminorderprocessed/adminorderprocessed.component';
import { AdminorderdeliveredComponent } from './Dashboard/adminorderdelivered/adminorderdelivered.component';
import { AdminordercancledComponent } from './Dashboard/adminordercancled/adminordercancled.component';
import { AdminorderdetailsComponent } from './Dashboard/adminorderdetails/adminorderdetails.component';
import { AdminprintComponent } from './Dashboard/adminprint/adminprint.component';
import { AdminsupportchatComponent } from './Dashboard/adminsupportchat/adminsupportchat.component';
import { AdminorderprocessComponent } from './Dashboard/adminorderprocess/adminorderprocess.component';
import { AdmintransactionComponent } from './Dashboard/admintransaction/admintransaction.component';
import { AdmincontactviewComponent } from './Dashboard/admincontactview/admincontactview.component';
import { UserordersComponent } from './Dashboard/Users/userorders/userorders.component';
import { UserorderviewComponent } from './Dashboard/Users/userorderview/userorderview.component';
import { UseraccountupdateComponent } from './Dashboard/Users/useraccountupdate/useraccountupdate.component';
import { UserupdatepasswordComponent } from './Dashboard/Users/userupdatepassword/userupdatepassword.component';
import { UseraddressComponent } from './Dashboard/Users/useraddress/useraddress.component';
import { UseraccountdeleteComponent } from './Dashboard/Users/useraccountdelete/useraccountdelete.component';
import { DeliveryhomeComponent } from './Dashboard/Delivery/deliveryhome/deliveryhome.component';
import { DeliveryordersComponent } from './Dashboard/Delivery/deliveryorders/deliveryorders.component';
import { DeliverydeleteaccountComponent } from './Dashboard/Delivery/deliverydeleteaccount/deliverydeleteaccount.component';
import { DeliveryupdateprofileComponent } from './Dashboard/Delivery/deliveryupdateprofile/deliveryupdateprofile.component';
import { DeliveryupdatepasswordComponent } from './Dashboard/Delivery/deliveryupdatepassword/deliveryupdatepassword.component';
import { DeliveryordersviewComponent } from './Dashboard/Delivery/deliveryordersview/deliveryordersview.component';


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
            { path: 'print-receipt', component: AdminprintComponent }

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
            { path: 'items-listed/all-items', component: AdminitemComponent },
            { path: 'items-listed/item/:id', component: AdminviewitemComponent },
            { path: 'items-listed/add-item', component: AdminadditemComponent },
            { path: 'items-listed/medicine', component: AdminmedicineComponent },
            { path: 'items-listed/health-care', component: AdminhealthComponent },
            { path: 'items-listed/beauty-care', component: AdminbeautyComponent },
            { path: 'items-listed/fitness', component: AdminfitnessComponent },
            { path: 'items-listed/equipment', component: AdminequipmentComponent },
            { path: 'items-listed/medikit', component: AdminmedikitComponent },
            { path: 'orders', component: AdminorderComponent },
            { path: 'orders/orders-pending', component: AdminorderpendingComponent },
            { path: 'orders/orders-processed', component: AdminorderprocessedComponent },
            { path: 'orders/orders-delivered', component: AdminorderdeliveredComponent },
            { path: 'orders/orders-cancled', component: AdminordercancledComponent },
            { path: 'orders/orders-details/:id', component: AdminorderdetailsComponent },
            { path: 'orders/orders-process/:id', component: AdminorderprocessComponent },
            { path: 'support-tickets', component: AdminsupportComponent },
            { path: 'support-tickets/view-ticket/:id', component: AdminsupportchatComponent },
            { path: 'transactions', component: AdmintransactionComponent },
            { path: 'contact-requests', component: AdmincontactComponent },
            { path: 'contact-requests/view/:id', component: AdmincontactviewComponent }
        ]
    },
    {
        path: 'user',
        component: DashboardLayoutComponent,
        children: [
            { path: 'dashboard', component: UserhomeComponent },
            { path: 'transactions', component: TransactionComponent },
            { path: 'orders', component: UserordersComponent },
            { path: 'orders/orders-details/:id', component: UserorderviewComponent },
            { path: 'settings/update-profile', component: UseraccountupdateComponent },
            { path: 'settings/update-password', component: UserupdatepasswordComponent },
            { path: 'settings/address-management', component: UseraddressComponent },
            {
                path: 'settings/delete-account', component: UseraccountdeleteComponent
            }

        ]
    },
    {
        path: 'delivery',
        component: DashboardLayoutComponent,
        children: [
            { path: 'dashboard', component: DeliveryhomeComponent },
            { path: 'orders', component: DeliveryordersComponent },
            { path: 'orders/orders-details/:id', component: DeliveryordersviewComponent },
            { path: 'settings/delete-account', component: DeliverydeleteaccountComponent },
            { path: 'settings/update-profile', component: DeliveryupdateprofileComponent },
            { path: 'settings/update-password', component: DeliveryupdatepasswordComponent }
        ]
    },
    { path: '**', component: NotfoundComponent }
];
