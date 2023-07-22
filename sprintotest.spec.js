const {test, expect} = require('@playwright/test')


test('flightbookingtest', async ({page})=> {

    await page.goto('https://www.cleartrip.com/')
    await page.locator('[placeholder="Where from?"]').click()
    await page.locator('[placeholder="Where from?"]').fill('Bangalore')
    await page.locator("//p[contains(text(),'Bangalore, IN - Kempegowda International Airport (BLR)')]").click()
    await page.locator('[placeholder="Where to?"]').click()
    await page.locator('[placeholder="Where to?"]').fill('Delhi')
    await page.locator("//p[contains(text(),'New Delhi, IN - Indira Gandhi Airport (DEL)')]").click()
    await page.locator("//div[contains(@class,'homeCalender')]//button[1]").click()
    await page.locator("//div[@aria-label='Sat Jul 29 2023']").click()
    await page.locator("//span[contains(text(),'Search flights')]").click()
    const [newtab] = await Promise.all([ // getting page object for new tab opened
        page.waitForEvent('popup'),
        await page.locator("(//div[@class='flex']//button)[1]").click()
    ]);
    await newtab.locator("//div[contains(@class,'px-1')]").click()  // using new tab page object to close the Signin popup
    await newtab.locator("//h2[contains(text(),'Review your itinerary')]").isDisabled()
})