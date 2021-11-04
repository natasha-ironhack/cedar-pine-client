import axios from "axios";

class AuthService {
  constructor() {
      //goes to backend auth route
    this.service = axios.create({
      baseURL: `{process.env.REACT_APP_API_HOST}/auth`,
      withCredentials: true,
    });
  }


  signup = (firstName, lastName, email, password) => {
    //this.service is axios
    //just need to do /signup since we alr. have basURL above
    //goes to backend auth route signup route, and passes
    //the info to it
    return this.service.post("/signup", {
      firstName,
      lastName,
      email,
      password,
    });
  };
}

const authService = new AuthService();
export default authService;

//idea is we don't want to repeat axios post and with credentials all
//the time. so doing service with has methods and promises.
