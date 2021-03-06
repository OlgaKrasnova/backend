import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormGroup } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { RegistrationComponent } from "./registration/registration.component";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { MainComponent } from "./main/main.component";

import { FormsModule } from "@angular/forms";
import { PetitionListComponent } from './petition-list/petition-list.component';
import { PetitionItemComponent } from './petition-item/petition-item.component';
import { CategorySortPipe } from './shared/pipe/category-sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    AuthorizationComponent,
    MainComponent,
    PetitionListComponent,
    PetitionItemComponent,
    CategorySortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
