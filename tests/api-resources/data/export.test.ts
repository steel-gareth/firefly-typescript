// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Firefly from 'firefly-iii-api';

const client = new Firefly({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource export', () => {
  // Mock server tests are disabled
  test.skip('exportAccounts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.export.exportAccounts(
        { type: 'csv', 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportBills: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.export.exportBills(
        { type: 'csv', 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportBudgets: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.export.exportBudgets(
        { type: 'csv', 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportCategories: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.export.exportCategories(
        { type: 'csv', 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportPiggyBanks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.export.exportPiggyBanks(
        { type: 'csv', 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportRecurring: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.export.exportRecurring(
        { type: 'csv', 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.export.exportRules(
        { type: 'csv', 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportTags: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.data.export.exportTags(
        { type: 'csv', 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('exportTransactions: required and optional params', async () => {
    const response = await client.data.export.exportTransactions({
      end: '2019-12-27',
      start: '2019-12-27',
      accounts: 'accounts',
      type: 'csv',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });
});
