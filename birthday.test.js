const isBirthday = require('./birthday');

describe('Checks if today is birthdate', () => {
  let _Date;
  beforeAll(() => {
    _Date = Date; // Save origial date module
  });

  afterAll(() => {
    Date = _Date; // Reset Date
  });

  beforeEach(() => {
    // Set a fixed date
    Date.now = jest.fn(() => new Date('01 Jan 2018').valueOf());
  });

  test('Correctly asserts birthday', () => {
    expect(isBirthday('2018-01-01')).toBe(true);
  });
});
