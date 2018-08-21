import { EdteamAngularPage } from './app.po';

describe('edteam-angular App', () => {
  let page: EdteamAngularPage;

  beforeEach(() => {
    page = new EdteamAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ed!');
  });
});
