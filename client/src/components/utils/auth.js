import { jwtDecode as decode } from 'jwt-decode';

class AuthService {
  getProfile() {
    try {
      const token = this.getToken();
      return token ? decode(token) : null;
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }

  loggedIn() {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      const decoded = decode(token);
      return decoded ? { userId: decoded.userId, email: decoded.email } : null;
    }
    return null;  // Return null if no valid token exists
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    // window.location.assign('/');
    window.dispatchEvent(new Event('auth-change'));
  }

  logout() {
    localStorage.removeItem('id_token');
    window.dispatchEvent(new Event('auth-change'));
    window.location.assign('/');
  }
  
}

const authService = new AuthService();
export default authService;
