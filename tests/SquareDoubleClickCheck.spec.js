import { test, expect } from '@playwright/test';

test('Clicking a square places X or O depending on the turn', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const squares = page.locator('.square');

  await squares.nth(0).click(); //x

  //Check that X shows
  await expect(squares.nth(0)).toHaveText('X');

  await squares.nth(0).click();

  //Check that X still shows
  await expect(squares.nth(0)).toHaveText('X');

});