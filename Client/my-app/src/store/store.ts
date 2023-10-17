import { IUser } from "../models/response/IUser";
import { makeObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../models/response/AuthReponse";
import { API_URL } from "../http";
import { error } from "console";

export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;


    constructor() {
        makeObservable(this);

   }
   setAuth(bool: boolean) {
        this.isAuth = bool;

   }
   setUser(user:IUser) {
        this.user = user;


   }
   async login (email:string, password:string) {
    try {
        const response = await AuthService.login(email,password);
        console.log(response)
        localStorage.setItemI('token', response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
    } catch (e) {
        console.log(e.response?.data?.message);
    }
   }
    async registration (email:string, password:string) {
    try {
        const response = await AuthService.registration(email,password);
        console.log(response)
        localStorage.setItemI('token', response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
    } catch (e) {
        console.log(e.response?.data?.message);
    }
   }
   async logout () {
    try {
        const response = await AuthService.logout();
        localStorage.removeItem('token');
        this.setAuth(false);
        this.setUser({} as IUser);
    } catch (e) {
        console.log(e.response?.data?.message);
    }
   }
   async checkAuth () {
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/refresh`,{withCredentials:true});
        console.log(response);
        localStorage.removeItem('token');
        this.setAuth(false);
        this.setUser({} as IUser);
    } catch (e) {
        console.log(e.response?.data?.message);
    }
   }
   
}





