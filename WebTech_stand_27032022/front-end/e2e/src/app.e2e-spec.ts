import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('myApp2 app is running!');
  });

  afterEach(async () => {
    // Bestätigung, dass keine Fehler vom Browser ausgegeben werden
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

//https://github.com/angular/protractor/issues/5168
//https://angularquestions.com/2021/04/21/detect-console-errors-as-error-and-make-test-fail/
