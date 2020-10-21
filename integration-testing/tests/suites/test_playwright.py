import pytest
from playwright import sync_playwright


@pytest.fixture
def browser():
    pw_context = sync_playwright()
    pw = pw_context.__enter__()
    browser = getattr(pw, "chromium").connect(wsEndpoint='wss://chrome.headlesstesting.com?token=[YOUR-TOKEN]')
    browser._close = browser.close

    def _handle_close() -> None:
        browser._close()
        pw_context.__exit__(None, None, None)

    browser.close = _handle_close

    return browser


def test_title(browser):
    page = browser.newPage()
    page.goto('https://headlesstesting.com')
    assert page.title() == 'Headless Testing with Puppeteer and Playwright in the Cloud.'
    browser.close()
