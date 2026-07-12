import {Page,Locator} from'@playwright/test'; 
import { ElementUtil } from '../utils/ElementUtils'; 
import {LoginPage} from '../pages/LoginPage'


export class ResultPage {

  private readonly page:Page;
  private readonly eleUtil;
  
  private readonly proResult:Locator;
 

  //Page class constractor

  constructor(page:Page){
    this.page=page;
    this.eleUtil=new ElementUtil(page);
    this.proResult=page.locator('.product-thumb');
  }

//Page Action

async getSearchResultsCount():Promise<number>{
  return await this.proResult.count();
    
}

}



