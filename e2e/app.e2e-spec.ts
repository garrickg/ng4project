import { Ng4projectPage } from './app.po';

describe('ng4project App', () => {
  let page: Ng4projectPage;

  beforeEach(() => {
    page = new Ng4projectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
