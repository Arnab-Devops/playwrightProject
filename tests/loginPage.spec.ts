import{test,expect} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';



test('verify valid login', async({page})=>{

let loginPage= new LoginPage(page);
await loginPage.goToLoginPage();
let homePage:HomePage=await loginPage.doLogin('admin' , 'admin'); 
expect(homePage.isUserLogIn()).toBeTruthy(); 
})     