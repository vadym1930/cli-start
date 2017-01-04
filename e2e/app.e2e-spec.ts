import { CliStartPage } from './app.po';

describe('cli-start App', function() {
  let page: CliStartPage;

  beforeEach(() => {
    page = new CliStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
