import{test,expect}from '@playwright/test';
import{LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ResultPage } from '../pages/ResultPage';


let searchData=[
 {searchkey: 'macbook', resultcount: 3},
 {searchkey:'sumsong', resultcount: 3},

]


for (let product of searchData){
test('verify product search ${product.searchkey}', async({page})=>{
let loginPage=new LoginPage(page);
await loginPage.goToLoginPage();
let homePage:HomePage=await loginPage.doLogin('arnab@mail.com', 'test123');
let resultPage:ResultPage= await homePage.doSearch('macbook');
expect(await resultPage.getSearchResultsCount()).toBe(3);
});
} 

