import conf from '../conf/conf.js';
import {Client,Account,ID} from "appwrite"

// This allows other files to import the class if needed.
export class AuthService{

    client=new Client(); //appwrite connection obj
    account;
// all appwrite return are promises which can be handled using .then .catch
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) //Connect to your Appwrite backend
        .setProject(conf.appwriteProjectId); // now frontend know Send all requests to this Appwrite project
        this.account=new Account(this.client);
    }
    async createAccount({email,password,name})
    {
        try {
            const userAccount= await this.account.create(ID.unique(),email,password,name);
            if(userAccount)
            {
                return this.login({email,password});
            }
            else
            {
                return userAccount;
            }
            
        } 
        catch (error) {
            throw error;
        }
    }

    async login({email,password})
    {
        try{
            return await this.account.createEmailSession(email,password);
        }
        catch(error)
        {
            throw error;
        }
    }
    
    async getCurrentUser() // to check if someone is curr logged in
    {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error",error);
        }

        return null;
    }
    
    async logout()
    {
        try {
            await this.account.deleteSession('current')
        } catch (error) {
            console.log("Appwrite service::logout::error", error);
            
        }
    }
}

const authService=new AuthService() // becoz of this , only one object exists in the entire app.
// authService.login()
// authService.logout()
// authService.getCurrentUser()
// all use the same Appwrite connection.
// This pattern is called Singleton Pattern.
export default authService