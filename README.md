# MarsAir Test Automation

This project contains automated tests for the MarsAir flight booking application using Playwright.

## Project Structure

```
thoughtwork-testscripts/
├── playwright.config.js    # Playwright configuration
├── tests/
│   └── marsair.spec.js    # Test specifications
├── package.json           # Project dependencies
└── README.md             # This file
```

## Features

- **Page Object Model (POM)**: Clean separation of test logic and page interactions
- **Helper Functions**: Promo code generator with checksum validation
- **Multi-browser Testing**: Runs tests on Chromium and Firefox
- **Comprehensive Test Coverage**: 
  - Story #1: Basic Search Flow
  - Story #2: Promotional Codes
  - Story #3: Navigation Links
  - Story #4: Invalid Return Dates

## Installation

1. Install Node.js (if not already installed)
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Install Playwright browsers:
   ```powershell
   npx playwright install
   ```

## Running Tests

### Run all tests
```powershell
npm test
```

### Run tests in headed mode (visible browser)
```powershell
npm run test:headed
```

### Run tests on specific browser
```powershell
npm run test:chromium
npm run test:firefox
```

### Run tests in debug mode
```powershell
npm run test:debug
```

### Run tests with UI mode
```powershell
npm run test:ui
```

## Test Cases

### Story #1: Basic Search Flow
- **TC001**: Valid search shows seats available
- **TC002**: Only July and December dates available

### Story #2: Promotional Codes
- **TC003**: Valid promo code with 20% discount
- **TC004**: Invalid promo code shows error
- **TC005**: Invalid format promo code

### Story #3: Navigation Links
- **TC006**: Book now link returns to home
- **TC007**: Logo click returns to home

### Story #4: Invalid Return Dates
- **TC008**: Return date less than 1 year shows error
- **TC009**: Return date exactly 1 year

## Configuration

The tests are configured to:
- Use base URL: `https://marsair.recruiting.thoughtworks.net/HoangPham`
- Take screenshots only on failure
- Record video only on failure
- Run on both Chromium and Firefox browsers

## Page Object Model

The `MarsAirPage` class provides the following methods:
- `goto()`: Navigate to the home page
- `search(departure, returnDate, promoCode)`: Perform a flight search
- `getSearchResultMessage()`: Retrieve the search result message

## Promo Code Generator

The `PromoCodeGenerator` class generates valid/invalid promotional codes with the following format:
- `XX#-XXX-####` where:
  - X = Random letter
  - \# = Random digit
  - Last digit is a checksum for validation

## Reports

After running tests, you can view the HTML report:
```powershell
npx playwright show-report
```
