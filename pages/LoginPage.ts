  import {Page,Locator} from'@playwright/test'; 
  import { ElementUtil } from '../utils/ElementUtils'; 
  import {HomePage} from '../pages/HomePage'

   export class LoginPage {

  private readonly page:Page;
  private readonly eleUtil;

  //Locator
  private readonly emailId:Locator;
  private readonly pswd:Locator;
  private readonly loginBtn:Locator;

  //Page class constractor

  constructor(page:Page){
    this.page=page;
    this.eleUtil=new ElementUtil(page);

    this.emailId=page.getByRole('textbox',{name:'E-Mail Address'});
    this.pswd=page.getByRole('textbox',{name:'Password'});
    this.loginBtn=page.locator('input[type="submit"][value="Login"]');
  }

 // page Action method or behevior
 
 async goToLoginPage(){

     await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
 }

//  async doLogin(email:string,password:string ){
//    await this.emailId.fill(email);
//    await this.password.fill(password);
//    await this.loginBtn.click();
//  }

 async doLogin(email:string,password:string ): Promise<HomePage>{ 
   await this.eleUtil.fill(this.emailId,email);
  await this.eleUtil.fill(this.pswd, password);
  await this.eleUtil.click(this.loginBtn);
  return new HomePage(this.page);

  //  const pageTitle=await this.page.title();
  //  console.log(pageTitle);
  //  return pageTitle;
 }


   }                                