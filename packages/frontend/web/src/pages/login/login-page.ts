import { WebPage } from "shared-lib"

export class LoginPage extends WebPage {
    async navigateToLoginPage() {
        await this.page.goto("https://web-playground.ultralesson.com/");
      }
}