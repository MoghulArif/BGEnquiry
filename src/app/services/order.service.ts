import {Injectable} from "@angular/core";
//import { orderDetailModel} from "../models/orderDetailModel.model";
import {UsersModel} from '../../models/usersModel.model';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { orderDetailModel } from "../../models/orderDetailModel.model";
//import { get } from "https";

@Injectable()
export class orderService{
    public static BASE_USER_ENDPOINT = 'http://localhost:3000/api/home/';
    private ordDets : orderDetailModel[] = [];
    private count : number = 0;

    url: string = "http://jsonplaceholder.typicode.com/users";
    //  bgUrl : string = "http://localhost:3000/api/";
    //  bgUrl : string = "http://localhost:8085/api/";
    bgUrl : string = "http://localhost:92/api/";


    constructor(private http: Http){}

    // getOrderDetails(){
    //     this.ordDets = [
    //         new orderDetailModel ('BTM', 'Bangalore'),
    //         new orderDetailModel ('Bellandur', 'Devarabeesanahalli'),
    //         new orderDetailModel ('Maruti Nager', 'Marthalli')
    // ]
    //     return this.ordDets;
    // } 

     
    
    getAboutDetails(id : number) : Observable<any>{
       // return "I am data from order service";
       //return this.http.get('http://localhost:3000/api/home/');

       return this.http.get('http://localhost:3000/api/home/' + id)
                .map((resp) => {
                    console.log(resp.json());
                    return resp.json()
                });
       
    }

    getWebAPItest(){
        return this.http.get(this.bgUrl + '/home')        
        .map((resp) => {
            console.log(resp.json());
            return resp.json()
        });

    }

    saveBGEnquiry(fname, mob, rmks, email, 
            locBusiness, locSilicon,
            budget400K700K, budget700K1000K, budget1000K1250K, budget1250K1500K,
            studio, oneBed, twoBed, retail,
            immed, months3to6, months6to12, months12to18) : Observable<any>{
        return this.http.post(
            this.bgUrl + 'home/',
            {firstName: fname, mobile: mob, remarks: rmks, email:email, 
                locDubaiBusiness: locBusiness, 
                locDubaiSilicon: locSilicon, 
                budget400K700K: budget400K700K, budget700K1000K: budget700K1000K, 
                budget1000K1250K: budget1000K1250K, budget1250K1500K:budget1250K1500K,
                studio: studio, oneBed: oneBed, twoBed: twoBed, retail: retail,
                immed: immed, months3to6: months3to6, months6to12: months6to12, months12to18: months12to18},
        ).map(res => res.json());

    }

    getUsersFromWebAPI() {
        return this.http.get(this.url)
            .map((resp) => {
                return resp.json();
            });

    }
}