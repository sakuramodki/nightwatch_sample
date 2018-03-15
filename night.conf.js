module.exports = {
  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
      }
    }
  }
}

