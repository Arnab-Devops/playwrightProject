  import {Page,Locator} from'@playwright/test'; 
  import { ElementUtil } from '../utils/ElementUtils'; 
  import {LoginPage} from '../pages/LoginPage';
  import {ResultPage} from '../pages/ResultPage';

   export class HomePage {

  private readonly page:Page;
  private readonly eleUtil;

  //Locator
  private readonly logoutLink:Locator;
  private readonly loginLink:Locator;
  private readonly search:Locator;
  private readonly searchIcon:Locator;
 

  //Page class constractor

  constructor(page:Page){
    this.page=page;
    this.eleUtil=new ElementUtil(page);

    this.logoutLink=page.getByRole('');
    this.loginLink=page.getByRole('');
    this.search=page.getByRole('');
    this.searchIcon=page.locator('');
  }

 // page Action method or behevior:

 async isUserLogIn():Promise<boolean>    {
    return this.eleUtil.isVisible(this.logoutLink, 0);
 }

 async logOut(): Promise<LoginPage>{
   await this.eleUtil.click(this.logoutLink,{timeout:5000},1);
   await this.eleUtil.click(this.loginLink,{timeout:3000});
   return new LoginPage(this.page);
 }  


 async doSearch(searchKey:string): Promise<ResultPage>{
  console.log(`searchKey: ${searchKey}`);
  await this.eleUtil.fill(this.search, searchKey);
  await this.eleUtil.click(this.searchIcon);
  return new ResultPage(this.page);
 }
 
 


   }                                