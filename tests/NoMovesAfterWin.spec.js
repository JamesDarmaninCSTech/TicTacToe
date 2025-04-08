import { test, expect } from '@playwright/test';

test('No moves allowed after player wins', async ({page}) => {

    await page.goto('http://localhost:3000');


    const squares = page.locator('.sqaure')
    const status = page.locator('.status')

    //Player X wins
    await squares.nth(0).click();//x
    await squares.nth(3).click();//o
    await squares.nth(1).click();//x
    await squares.nth(4).click();//o
    await squares.nth(2).click();//x Player X wins

    await expect(status).toHaveText('Winner: X');

    //Trying to click on an empty square after the game has ended
    const squareBefore = squares.nth(5); // Square 5 is be empty
    await squareBefore.click(); 

    //Seeing that the square is still empty
    await expect(squareBefore).toHaveText(''); //Square 5 should be empty therefore nothing is shown

    //Seeing that the status of the winner is still the same
    await expect(status).toHaveText('Winner: X');
});