import { WellcomeModule } from './wellcome.module';

describe('WellcomeModule', () => {
  let wellcomeModule: WellcomeModule;

  beforeEach(() => {
    wellcomeModule = new WellcomeModule();
  });

  it('should create an instance', () => {
    expect(wellcomeModule).toBeTruthy();
  });
});
