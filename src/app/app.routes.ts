import { Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { BuildingEthosComponent } from './building-ethos/building-ethos.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CookiePreferencesComponent } from './cookie-preferences/cookie-preferences.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
  { path: '',pathMatch:"full", component: LandingPageComponent },


  { path: 'our-mission', component: OurMissionComponent },

  { path: 'careers', component: CareersComponent },

  { path: 'building-ethos', component: BuildingEthosComponent },

  { path: 'faq', component: FaqComponent },

  { path: 'contact-us', component: ContactComponent },

  { path: 'privacy-policy', component: PrivacyPolicyComponent },

  { path: 'cookie-preferences', component: CookiePreferencesComponent },

  { path: 'terms-of-use', component: TermsOfUseComponent },

  { path: 'blogs', component: BlogsComponent },

];
