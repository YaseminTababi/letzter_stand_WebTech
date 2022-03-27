import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
// https://github.com/ngneat/overview/blob/main/e2e/src/app.po.ts
//https://github.com/KingSora/OverlayScrollbars/blob/master/packages/overlayscrollbars-ngx/example/e2e/src/app.po.ts