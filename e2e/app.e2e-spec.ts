import { CollectionsJsPage } from './app.po';

describe('collections-js App', function() {
  let page: CollectionsJsPage;

  beforeEach(() => {
    page = new CollectionsJsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
