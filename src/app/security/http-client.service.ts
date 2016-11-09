import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

export var loading: boolean = false;

// Wrapper class for Http operations
// Possible to add default headers
// http operations can be mapped and/or subscribed from outside
@Injectable()
export class HttpClient {
    private headers: Headers;

    constructor(private http: Http) {
      this.headers = new Headers();
      this.headers.append('Content-Type',  'application/json');
    }

    addDefaultHeader(name: string, value: string) {
      this.headers.append(name, value);
    }

    get(url: string) {
        loading = true;
        let response = this.http.get(url);
        return response;
    }

    post(url: string, data: any) {
        loading = true;
        let response = this.http.post(url, data, {
          headers: this.headers
        });
        return response;
    }

    getLoading() {
        return loading;
    }

    disableLoading() {
        loading = false;
    }
}
