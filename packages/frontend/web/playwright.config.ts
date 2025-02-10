import { devices, PlaywrightTestConfig } from '@playwright/test'
import { config } from 'dotenv'
import { join } from 'path'
import { workspaceRoot } from '@nx/devkit'

config({ path: join(workspaceRoot, 'packages/frontend/web', '.env') })

const frontendConfig: PlaywrightTestConfig = {
    reporter: 'html',
    timeout: 300000,
    workers: 2,
    use: {
        trace: 'retain-on-failure',
        headless: JSON.parse(process.env['HEADLESS'] ?? 'true'),
        ignoreHTTPSErrors: true,
        viewport: {
            width: 1280,
            height: 1024,
        },
        baseURL: process.env['BASE_URL'],
        permissions: ['geolocation'],
        actionTimeout: 10000,
        navigationTimeout: 60000,
        screenshot: 'only-on-failure',
        testIdAttribute: 'data-testid',
        storageState: undefined,
        userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.6778.86 Safari/537.36',
    },
    grep: (process.env['TAGS'] ?? /@/) as RegExp,
    projects: [
        {
            name: 'chromium',
            ...devices['Desktop Chrome'],
            use: {
                contextOptions: {
                    acceptDownloads: true,
                    ignoreHTTPSErrors: true,
                    bypassCSP: true,
                },
                launchOptions: {
                    args: [
                        '--no-sandbox',
                        '--disable-gpu',
                        '--disable-dev-shm-usage',
                        '--enable-features=NetworkService,NetworkServiceInProcess',
                        '--enable-logging=stderr',
                        '--disable-features=site-per-process',
                        '--v=1',
                    ],
                },
            },
        },
        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
            },
        },
        {
            name: 'safari',
            use: {
                browserName: 'webkit',
            },
        },
    ],
}

export default frontendConfig
