const puppeteer = require('puppeteer');
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

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();
  await page.goto('file:///C:/Users/lecin/Documents/repo/js-testing-introduction/index.html');

  await page.click('input#name');
  await page.type('input#name', 'Tony');
  await page.click('input#age');
  await page.type('input#age', '29');
  await page.click('#btnAddUser');
});