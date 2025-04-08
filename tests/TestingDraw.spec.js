//Testing Draw
import { test, expect } from '@playwright/test';

test('Game ends in a draw', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const squares = page.locator('.square');

  await squares.nth(4).click(); // x
  await squares.nth(0).click(); // o
  await squares.nth(1).click(); // x
  await squares.nth(2).click(); // o
  await squares.nth(3).click(); // x
  await squares.nth(5).click(); // o
  await squares.nth(6).click(); // x
  await squares.nth(7).click(); // o
  await squares.nth(8).click(); // x

  //Last player to do there move is X therefore next text is "Next player: O"
  await expect(page.locator('.status')).toHaveText('Next player: O');
});
