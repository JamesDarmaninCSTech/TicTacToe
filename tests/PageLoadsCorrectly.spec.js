//Checks if page loads correctly
import { test, expect } from '@playwright/test';

test('Page loads correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    await expect(page.locator('.game-board')).toBeVisible();
    await expect(page.locator('.status')).toBeVisible();
    await expect(page.locator('.square')).toHaveCount(9); //9 squares
  });