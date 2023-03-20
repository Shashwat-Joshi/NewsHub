import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { User } from '../../../core/models/user.model';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

export class AuthenticationResult {
  isSuccess: boolean;
  error: string;

  constructor(isValid: boolean, error: string) {
    this.isSuccess = isValid;
    this.error = error;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private apiService: ApiService) {
  }

  signIn(user: User): Observable<any> {
    const body = JSON.stringify(user);
    return this.apiService.post(environment.baseUrl, '/login', body);
  }

  registerUser(user: User): Observable<any> {
    const body = JSON.stringify(user);
    return this.apiService.post(environment.baseUrl, '/register', body);
  }
}
