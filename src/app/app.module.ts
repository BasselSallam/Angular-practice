import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Commponent/header/header.component';
import { FooterComponent } from './Commponent/footer/footer.component';
import { HomeComponent } from './Commponent/products/home.component';
import { SidebarComponent } from './Commponent/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { BorderBoxDirective } from './directives/border-box.directive';
import { EgyptPipe } from './Pipes/egypt.pipe';
import { ButtonClickDirective } from './directives/button-click.directive';
import { NatIDPipe } from './Pipes/nat-id.pipe';
import {HttpClientModule} from '@angular/common/http'
import { CreditCardPipe } from './Pipes/credit-card.pipe';
import { OrderMasterComponent } from './Commponent/order-master/order-master.component';
import { NotFoundComponent } from './Commponent/not-found/not-found.component';
import { MainLayoutComponent } from './Commponent/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Commponent/product-details/product-details.component';
import { AddProductComponent } from './Commponent/add-product/add-product.component';
import { UserLoginComponent } from './Commponent/user-login/user-login.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    BorderBoxDirective,
    EgyptPipe,
    ButtonClickDirective,
    NatIDPipe,
    CreditCardPipe,
    OrderMasterComponent,
    NotFoundComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UserLoginComponent
  ],
  imports: [
  AngularFireModule.initializeApp(environment.firebase,'angularAPP'),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
