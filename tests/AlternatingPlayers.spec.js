//Testing that players alternate correctly
import { test, expect } from '@playwright/test';

test('Game ends in a draw', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const squares = page.locator('.square');

  await squares.nth(4).click(); // x
  await squares.nth(0).click(); // o
  await squares.nth(1).click(); // x
  

  // Next player should be Player O
  await expect(page.locator('.status')).toHaveText('Next player: O');
});
