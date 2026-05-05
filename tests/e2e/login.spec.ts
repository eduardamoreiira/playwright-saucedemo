import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const{ USER, PASSWORD } = process.env;

test.describe('Login Tests', () => {

    test('Realizar login com sucesso', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.realizarLogin(USER!, PASSWORD!);
    });
});