Playwright Automation Testing with TypeScript
📌 Project Overview

This project is created to practice and implement Playwright Automation Testing using TypeScript.

It covers different Playwright concepts, browser automation techniques, and end-to-end testing scenarios.

The project is designed to understand how to automate web applications using Playwright.

🛠️ Technologies Used
Playwright
TypeScript
Node.js
Visual Studio Code
Git & GitHub
📂 Project Structure
text
Trainingplaywright/
│
├── tests/
│   ├── 01BrowserActions.spec.ts
│   ├── 02Locators.spec.ts
│   ├── 03ActionsOnWebElements.spec.ts
│   ├── 04MultipleElements.spec.ts
│   ├── 05Assertions.spec.ts
│   ├── 06AutoSuggestion.spec.ts
│   ├── 07KeyboardAndMouse.spec.ts
│   ├── 08HandlingAlerts.spec.ts
│   ├── 09BrowserContext.spec.ts
│   ├── 10Frames.spec.ts
│   ├── 11FileUploadDownload.spec.ts
│   ├── 12Hooks.spec.ts
│   ├── 13HooksUsingParallel.spec.ts
│   ├── 14Groups.spec.ts
│   ├── 15Tags.spec.ts
│   ├── 16Annotations.spec.ts
│   ├── 17ScreenshotCapture.spec.ts
│   ├── 18BrowserContextForSignedIn.spec.ts
│   └── example.spec.ts
│
├── test-results/
├── playwright-report/
├── screenshot/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
└── .gitignore

⚙️ Installation and Setup
1. Clone the Repository
bash
git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to Project Folder
bash
cd Trainingplaywright

3. Install Dependencies
bash
npm install

4. Install Playwright Browsers
bash
npx playwright install

▶️ How to Run Tests
Run All Tests
bash
npx playwright test

Run Tests in Headed Mode
bash
npx playwright test --headed

Run Tests in UI Mode
bash
npx playwright test --ui

Run a Specific Test File
bash
npx playwright test tests/02Locators.spec.ts

Run Tests in Debug Mode
bash
npx playwright test --debug

📊 View Test Reports

After executing the tests, generate and view the HTML report:

bash
npx playwright show-report

📚 Topics Covered

This project includes the following Playwright concepts:

Browser Actions
Locators
Actions on Web Elements
Handling Multiple Elements
Assertions
Auto Suggestions
Keyboard and Mouse Actions
Handling Alerts
Browser Context
Handling Frames
File Upload and Download
Hooks (Before and After)
Hooks with Parallel Execution
Test Groups
Test Tags
Test Annotations
Screenshot Capture
Browser Context for Signed-in Users
🎯 Learning Objectives
Understand Playwright fundamentals.
Automate web application test scenarios.
Work with different locator strategies.
Perform browser interactions.
Validate application behavior using assertions.
Handle browser contexts and sessions.
Execute tests in parallel.
Generate and analyze Playwright HTML reports.
👨‍💻 Author

Created as part of my Playwright Automation Testing learning and practice.

Happy Testing! 🚀