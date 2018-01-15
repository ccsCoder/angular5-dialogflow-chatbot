import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
	
@Injectable()
export class DialogFlowService {

	private baseURL: string = "https://console.dialogflow.com/api/query?v=20170712";
	private token: string = environment.token;


  	constructor(private http: Http) { 

  	}

  	public getResponse(query: string) {
  		let data = {
  			query: query,
  			lang: 'en',
  			sessionId: '770212345'
  		}
			return this.http.post(this.baseURL, data, { headers: this.getHeaders() }).map(res => {
				return res.json()
			});
  	}

  	public getHeaders() {
		let headers = new Headers();
		headers.append("Authorization", `Bearer ${this.token}`);
		return headers;

  	}

}
