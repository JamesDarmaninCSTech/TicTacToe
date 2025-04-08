import { test, expect } from '@playwright/test';

test('Checking that game text updates correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const squares = page.locator('.square');
  const status = page.locator('.status')

  await squares.nth(0).click(); //x
  await expect(status).toHaveText('Next player: O')//After X played, next player O is next

  await squares.nth(1).click(); //o
  await expect(status).toHaveText('Next player: X')//After O played, next player X is next

  await squares.nth(3).click(); //x
  await expect(status).toHaveText('Next player: O')//After X played, next player O is next

  await squares.nth(2).click(); //o
  await expect(status).toHaveText('Next player: X')//After O played, next player X is next

  await squares.nth(6).click(); //x
  await expect(status).toHaveText('Winner: X');//Check winner

  
  
});