import { Component } from '@angular/core';
import { orderService } from './services/order.service';
import { Observable } from 'rxjs/Observable';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  fstNme : string;
  mob : string;
  rmks: string;
  email: string;
  locBusiness: boolean;
  locSilicon: boolean;
  budget400K700K: boolean;
  budget700K1000K: boolean;
  budget1000K1250K: boolean;
  budget1250K1500K: boolean;
  studio: boolean;
  oneBed: boolean;
  twoBed: boolean;
  retail: boolean;
  immed: boolean;
  months3to6: boolean;
  months6to12: boolean;
  months12to18: boolean;

  username: string = "test";

  constructor(private ordsvc: orderService){
    // ordsvc.getAboutDetails(1)
    //               .subscribe(
    //                   (data) => { 
    //                     this.fstNme = data.firstName,
    //                     this.mob = data.mobile},
                        
    //                   (err) => console.log(err)

    //               );

    
  }

  SaveEF() {
    this.ordsvc.saveBGEnquiry(
        this.fstNme,
        this.mob,
        this.rmks,
        this.email,
        this.locBusiness,
        this.locSilicon,
        this.budget400K700K,
        this.budget700K1000K,
        this.budget1000K1250K,
        this.budget1250K1500K,
        this.studio,
        this.oneBed,
        this.twoBed,
        this.retail,
        this.immed,
        this.months3to6,
        this.months6to12,
        this.months12to18
        
    )
        .subscribe(// FAT ARROW 
          (saveRep) => {
            
            console.log(saveRep);
            
            
            alert(this.fstNme + " ,Your Enquiry Form has been saved successfully and Your ID is: " + saveRep ); 
          this.fstNme = '';
          this.mob = '',
        this.rmks = '',
        this.email = '',
        this.locBusiness = false;
        this.locSilicon = false,
        this.budget400K700K = false,
        this.budget700K1000K = false,
        this.budget1000K1250K = false,
        this.budget1250K1500K = false,
        this.studio = false,
        this.oneBed = false,
        this.twoBed = false,
        this.retail = false,
        this.immed = false,
        this.months3to6 = false,
        this.months6to12 = false,
        this.months12to18 = false

        },
          (err) => { console.log(err) });
  }
}
