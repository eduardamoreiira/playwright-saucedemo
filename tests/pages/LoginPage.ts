import { test, expect } from '@playwright/test';

export class LoginPage {
  readonly page;
  constructor(page: any) {
    this.page = page;
  }

  async realizarLogin(username: string, password: string) {
    await this.page.goto('https://sauce-demo.myshopify.com/account/login');
/*     await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#login-button'); */
    await this.page.getByRole('link', { name: 'Log In' }).click();
    await this.page.getByRole('textbox', { name: 'Email Address' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

}