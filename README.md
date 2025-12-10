Playwright Automation Framework (TypeScript)

A modern, scalable automation framework built using Playwright + TypeScript following industry best practices:

Page Object Model (POM)

Fixtures for clean test flow

Config-driven test execution

Smart Locator Strategy

UI + API Test Coverage

Reusable Utils & Test Data Layer

GitHub Actions CI/CD Pipeline

Ideal for SDET, QA Automation, and Product-Based Interviews.

Project Structure
playwright-automation-framework-ts/
│── playwright.config.ts
│── package.json
│── README.md
└── src/
    ├── tests/
    │   ├── ui/
    │   └── api/
    ├── pages/
    ├── fixtures/
    ├── utils/
    ├── test-data/
    └── types/

Features
UI Testing

POM-based test design

Smart Locator Strategy

Reusable UI flows

API Testing

Playwright APIRequestContext

Schema validations

Request/Response hooks

Fixtures

Authentication fixture

Browser context fixture

Reusable global setup

CI/CD (GitHub Actions)

Headless test execution

HTML report

Build badges

How to Run Tests
Install dependencies:
npm install

Run UI Tests:
npx playwright test tests/ui

Run API Tests:
npx playwright test tests/api

Run with Report:
npx playwright show-report

Upcoming Enhancements

Allure Report Integration

Test Data from JSON/Excel

Performance Testing using k6

API Contract Testing using Zod

Docker Integration for CI

Author

Shashank
SDET | Automation Test Lead
Expert in Playwright, TypeScript, API & UI Automation
