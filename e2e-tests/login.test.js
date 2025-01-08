const { test, expect, beforeEach, describe } = require('@playwright/test')

describe('Blog app', () => {
  beforeEach(async ({ page }) => {
    await page.goto('')
  })

  test('Login form is displayed correctly with header, textbox and submit button', async ({ page }) => {
    // check header
    const loginHeader = page.locator('text=Log in to application')
    await expect(loginHeader).toBeVisible()

    // check form
    const loginForm = page.locator('form')
    await expect(loginForm).toBeVisible()

    // check form input box and submit button
    await expect(page.locator('input[placeholder="Enter username"]')).toBeVisible()
    await expect(page.locator('input[placeholder="Enter password"]')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toBeVisible()
  })
})