import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test('dashboard page loads', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page.locator('h1')).toHaveText('Welcome, John Doe!');
});
