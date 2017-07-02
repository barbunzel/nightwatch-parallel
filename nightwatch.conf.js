module.exports = {
  src_folders: [
    './tests',
  ],
  test_workers: {
    enabled: true,
    workers: 'auto',
  },
  globals_path: 'globals.js',
  page_objects_path: './page-objects',
  output_folder: 'reports',
  selenium: {
    start_process: false,
  },
  test_settings: {
    default: {
      selenium_port: 9515,
      selenium_host: 'localhost',
      launch_url: '',
      skip_testcases_on_fail: false,
      silent: true,
      screenshots: {
        enabled: false,
        path: './error-screenshots/',
        on_failure: true,
      },
      default_path_prefix: '',
      globals: {
        waitForConditionTimeout: 10 * 1000,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: ['--no-sandbox', 'start-maximized'],
          prefs: {
            credentials_enable_service: false,
            'profile.password_manager_enabled': false,
          },
        },
        acceptSslCerts: true,
      },
    },
  },
};
