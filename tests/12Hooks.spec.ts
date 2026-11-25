import { test } from '@playwright/test';

test.describe('First Group', () => {

    test.beforeAll(async () => {
        console.log('First Group - Before All');
    });

    test.afterAll(async () => {
        console.log('First Group - After All');
    });

    test('A', async ({ page }) => {
        console.log('Test A');
    });

    test('B', async ({ page }) => {
        console.log('Test B');
    });

    test('C', async ({ page }) => {
        console.log('Test C');
    });

});

test.describe('Second Group', () => {

    test.beforeAll(async () => {
        console.log('Second Group - Before All');
    });

    test.afterAll(async () => {
        console.log('Second Group - After All');
    });

    test('D', async ({ page }) => {
        console.log('Test D');
    });

    test('E', async ({ page }) => {
        console.log('Test E');
    });

    test('F', async ({ page }) => {
        console.log('Test F');
    });

});

test.beforeEach(async () => {
    console.log('Global Before Each');
});

test.afterEach(async () => {
    console.log('Global After Each');
});