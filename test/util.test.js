const { generateText, checkAndGenerate } = require('../util');

test('should output name and age', () => {
  const text = generateText('Cindy', 28);
  expect(text).toBe('Cindy (28 years old)');
  const text2 = generateText('Tony', 29);
  expect(text2).toBe('Tony (29 years old)');
});

test('should output data-less text', () => {
  const text = generateText('', null);
  expect(text).toBe(' (null years old)');
});

test('should output undefined', () => {
  const text = generateText();
  expect(text).toBe('undefined (undefined years old)');
});

test('should generate a valid text output', () => {
  const text = checkAndGenerate('Cindy', 28);
  expect(text).toBe('Cindy (28 years old)');
});