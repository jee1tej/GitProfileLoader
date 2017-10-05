import { Injectable,Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IUser } from "./shared/interfaces"

@Injectable()
export class GitHubService {
    
    constructor( private _http:Http){
        
    }
    
    getUserDetails(userName: string) : Observable<IUser>{
         return this._http.get("https://api.github.com/users/"+userName)
                     .map((resp:Response)=>resp.json())
                     .catch(this.handleError);;
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}