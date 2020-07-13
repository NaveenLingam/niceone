import { FooterModule } from './footer/footer.module';
import { TemplateModule } from './template/template.module';
import { HeaderModule } from './header/header.module';
import { AppComponent } from './app.component';
import { TranslatorModule } from './translator/translator.module';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
  AppComponent
],
  imports: [
  FooterModule,
TemplateModule,
HeaderModule,
TranslatorModule,
AppRoutingModule,
BrowserModule,
LoginModule,
SignupModule,
HomeModule,
UserModule,
HttpClientModule
],
  providers: [
  ],
  bootstrap: [
  AppComponent
]
})
export class AppModule { }