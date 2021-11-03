import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { WebcamModule } from 'ngx-webcam';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FavoriteComponent } from './favorite/favorite.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StartComponent } from './start/start.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    HomeheaderComponent,
    AllproductsComponent,
    ProductdetailsComponent,
    AboutComponent,
    FooterComponent,
    CartComponent,
    FavoriteComponent,
    LoginComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule, CarouselModule, ToastrModule.forRoot(), WebcamModule,
    DragDropModule, MatSlideToggleModule, MatStepperModule, CdkStepperModule, MatInputModule, MatButtonModule,
    MatBadgeModule, HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function createTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}