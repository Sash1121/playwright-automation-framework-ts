// LoginPage extending BaseClass

import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    private usernameField = '[data-qa="login-email"]';
    private passwordField = '[data-qa="login-password"]';
    private loginButton = '[data-qa="login-button"]';

    private nameField = '[data-qa="signup-name"]';
    private emailField = '[data-qa="signup-email"]';
    private signupButton = '[data-qa="signup-button"]';

    async login(username: string, password: string): Promise<void>{
        await this.enterText(this.usernameField, username);
        await this.enterText(this.passwordField, password);
        await this.clickElement(this.loginButton);
    }

    async signUp(username: string, password: string): Promise<void>{
        await this.enterText(this.nameField, username);
        await this.enterText(this.emailField, password);
        await this.clickElement(this.signupButton);
    }
}