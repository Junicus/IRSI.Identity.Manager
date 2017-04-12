import { IRSI.Identity.ManagerPage } from './app.po';

describe('irsi.identity.manager App', () => {
  let page: IRSI.Identity.ManagerPage;

  beforeEach(() => {
    page = new IRSI.Identity.ManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
