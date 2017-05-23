import { ScratchPage } from './app.po';

describe('scratch App', () => {
  let page: ScratchPage;

  beforeEach(() => {
    page = new ScratchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
