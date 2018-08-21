import { browser, by, element } from 'protractor';

export class EdteamAngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ed-root h1')).getText();
  }
}
