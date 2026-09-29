# Crossfunctional-v2 — Recruitment Procedures Flowchart (V1.0)

A cross-functional (swimlane) flowchart of the recruitment procedures (إجراءات إدارة التعيينات), with the SLA days shown on every step.

## What's inside

| Path | Contents |
|---|---|
| `index.html` | Interactive web version (Arabic, RTL). Three tabs: workforce planning, external hiring, experienced hires. Click any step to see the full action text, SLA, time taken, and challenges. |
| `pdf/Recruitment-Procedures-Flowchart-V1.pdf` | Print version: A3 landscape, 14 pages. It has the flowchart pages plus a detail table for each process. |
| `data/recruitment-steps.json` | The steps extracted from the source Excel file. Each step has its owner, participant, action, time, SLA, and challenges. |
| `scripts/` | Scripts used to build the outputs: extraction from Excel, the web and print templates, and PDF rendering with Playwright. |

## View it as a website (GitHub Pages)

1. In the repo, go to **Settings → Pages**.
2. Under *Build and deployment*, choose **Deploy from a branch**. Set the branch to `main` and the folder to `/ (root)`, then click **Save**.
3. After a minute, the site is live at `https://peter-az.github.io/crossfunctional-v2/`.

## Legend

- **SLA · N days**: the SLA is defined in the source file.
- **SLA · 0**: the SLA is recorded as zero in the source file.
- **SLA · غير محدد**: no SLA value is given in the source file.
- **مشارك · N**: the department participating in step N.
- **!**: the step has recorded challenges.

## Open points for V2

1. The workforce planning steps have time windows but no SLA values.
2. Experienced-hire steps 23–28 have no SLA. These are the salary, job offer and regulatory-check steps.
3. The experienced-hire total in the sheet is 131 days, but the numbered rows add up to 127.
4. Salary, job offer and negotiation (experienced hires 23–26) probably happen before contract signing, but they follow the sheet's order.
5. The security-clearance and bank-account branches could be drawn as decision points.
