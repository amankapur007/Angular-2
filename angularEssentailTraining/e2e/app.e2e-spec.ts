import { AngularEssentailTrainingPage } from './app.po';

describe('angular-essentail-training App', () => {
  let page: AngularEssentailTrainingPage;

  beforeEach(() => {
    page = new AngularEssentailTrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
