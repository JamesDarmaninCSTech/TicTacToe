//Testing Player O Winning Veritcally
import { test, expect } from '@playwright/test';

test('Player O can win the game', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const squares = page.locator('.square');

  await squares.nth(0).click(); // x
  await squares.nth(1).click(); // o
  await squares.nth(2).click(); // x
  await squares.nth(4).click(); // o
  await squares.nth(5).click(); // x
  await squares.nth(7).click(); // o Player O wins

  //Check winner
  await expect(page.locator('.status')).toHaveText('Winner: O');
});
