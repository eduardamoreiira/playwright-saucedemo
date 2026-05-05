import { test, expect } from '@playwright/test';

export class SignUpPage {
  readonly page;
  constructor(page: any) {
    this.page = page;
  }
}