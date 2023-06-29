import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'

const user = process.env.USER
const password = process.env.PASSWORD

test('Login', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.login(user, password)

    await expect(page.getByText('You logged into a secure area! ×')).toBeVisible();
});

test('Username Invalid', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.login("Teste", password)

    await expect(page.getByText('Your username is invalid!')).toBeVisible();
});

test('Password Invalid', async ({ page }) => {

    const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.login(user, "Teste")

    await expect(page.getByText('Your password is invalid!')).toBeVisible();
});