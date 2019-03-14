const { openBrowser, goto, click, scrollTo, hover, inputField, near, into, write, below, above, button } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("http://automationpractice.com/index.php");
        await click("Women");
        await scrollTo("Faded Short Sleeve T-shirts");
        await hover("Faded Short Sleeve T-shirts");
        await click("Add to cart");
        await click("Proceed to checkout");
        await scrollTo("Proceed to checkout");
        await click("Proceed to checkout");
        await write("abcd123@asd.com",into(inputField("Email address",below("Already registered?"))));
        await write("abcd123",into(inputField("Password")));
        await click("Sign in",below("Forgot your password?"));
        await click(button("Sign in",below("Password")));
    } catch (e) {
        console.error(e);
    } finally {
        closeBrowser();
    }
})();
