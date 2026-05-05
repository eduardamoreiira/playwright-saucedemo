import { test, expect } from '@playwright/test';

export class LoginPage {
  readonly page;
  constructor(page: any) {
    this.page = page;
  }

  async acessarLogin(){
    await this.page.goto('https://sauce-demo.myshopify.com/account/login');
  }

/*   async realizarLogin(username: string, password: string) {
    await this.page.goto('https://sauce-demo.myshopify.com/account/login');
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button');
  } */

}