import { HumanizePipe } from './humanize.pipe';

describe('NumanizePipe', () => {
  it('create an instance', () => {
    const pipe = new HumanizePipe();
    expect(pipe).toBeTruthy();
  });
});
