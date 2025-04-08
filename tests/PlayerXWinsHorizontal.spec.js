//Testing Player X Winning horizontally 
import { test, expect } from '@playwright/test';

test('Player X can win the game horizontally', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const squares = page.locator('.square');

  await squares.nth(0).click(); // x
  await squares.nth(1).click(); // o
  await squares.nth(4).click(); // x
  await squares.nth(2).click(); // o
  await squares.nth(8).click(); // x Player X wins horizontal

  //Check winner
  await expect(page.locator('.status')).toHaveText('Winner: X');
});
