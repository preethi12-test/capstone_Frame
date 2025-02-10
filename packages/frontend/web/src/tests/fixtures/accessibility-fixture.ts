import { test as base, expect } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'
import { workspaceRoot } from '@nx/devkit'
import { join } from 'path'
import { mkdirsSync, writeFileSync } from 'fs-extra'
import { existsSync } from 'fs'

const accessibilityTest = base.extend<{ audit: () => Promise<string> }>({
    audit: async ({ page }, use, testInfo) => {
        const analyze = async () => {
            const results = await new AxeBuilder({ page }).exclude('.dot-flashing-container').analyze()

            const sanitizedTestName = testInfo.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()
            const fileName = `${sanitizedTestName}_report.html`

            const reportHTML = createHtmlReport({
                results: results,
                options: {
                    doNotCreateReportFile: true,
                },
            })

            if (!existsSync(join(workspaceRoot, 'axe-results'))) {
                mkdirsSync(join(workspaceRoot, 'axe-results'))
            }

            writeFileSync(join(workspaceRoot, 'axe-results', fileName), reportHTML)

            const violations = results.violations

            if (violations.length > 0) {
                type ImpactValue = 'minor' | 'moderate' | 'serious' | 'critical'

                const violationImpactMapping: Record<ImpactValue, number> = {
                    minor: 0,
                    moderate: 0,
                    serious: 0,
                    critical: 0,
                }

                const impactValues: ImpactValue[] = results.violations
                    .map((violation) => violation.impact)
                    .filter((impactValue) => impactValue !== undefined && impactValue !== null)

                impactValues.forEach((impact) => {
                    violationImpactMapping[impact] = violations.map((violation) => violation.impact === impact).length
                })

                return `Violations found: ${JSON.stringify(violationImpactMapping, null, 2)}`
            }

            return ''
        }

        await use(analyze)
    },
})

export { accessibilityTest, expect }
