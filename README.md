# PlaywrightDemo

Follow below Steps to run the playwright case:
1. Download Visual Studio Code.
2. Download and install node js (https://nodejs.org/en/download)
3. Once installed, confirm the same in terminal using below cmds
a) npm --version
b) node --version
If above cmds are giving the version then you are good to go else installation is not successful.
4. Create a new folder with any project name and open the same with vscode.
5. Then open terminal inside Vscode and run below cmd
a) Run->   npm init playwright@latest
Above cmd will install playwright and will prompt below questions(choose below options):
b) Select language -> javascript
c) end to end tests should be -> tests
d) Github action workflow-> False
6. Once playwright project is successfully created add sprintotest.spec.js file under tests folder
7. Replace the existing playwright.config.js with the file playwright.config.js added here.
8. You are all set just open terminal in vscode and run Below cmd to execute test.
npx playwright test ./tests/sprintotest.spec.js --headed
