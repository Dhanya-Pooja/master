import { SshSamplePage } from './app.po';

describe('ssh-sample App', () => {
  let page: SshSamplePage;

  beforeEach(() => {
    page = new SshSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
