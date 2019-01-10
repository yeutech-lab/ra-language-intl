import messages from '../index';

describe('messages', () => {
  it('should have messages defined', () => {
    expect(messages).toBeDefined();
  });
  it('should have id defined', () => {
    expect(messages[Object.keys(messages)[0]].id).toBeDefined();
  });
  it('should have defaultMessage defined', () => {
    expect(messages[Object.keys(messages)[0]].defaultMessage).toBeDefined();
  });
});
