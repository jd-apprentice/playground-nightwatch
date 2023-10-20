describe('open browser and search', function () {
    it('should add a todo using custom commands', async function (browser) {
        await browser.navigateTo('https://google.com')
        await browser.end()
    });
});