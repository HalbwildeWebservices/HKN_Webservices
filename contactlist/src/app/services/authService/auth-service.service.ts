import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient) { }

  public login(username: string, password: string ) {
    return this.http.post<{[key: string]: string}>('https://localhost:3000/auth/login', {username, password})
        .pipe(
            tap((res) => {
                const accessToken = res['access_token'];
                if (typeof res['access_token'] === 'string') {
                    localStorage.setItem('access_token', accessToken);
                    console.log(`stored token ${accessToken}`);
                }
            }),
            shareReplay()
        )
}
               

public logout() {
    localStorage.removeItem("access_token");
}

public isLoggedIn() {
    const token = localStorage.getItem('access_token');
    if (token === null) {
        return false;
    } else {
        return true;
    }
}

public isLoggedOut() {
    return !this.isLoggedIn();
}

}
