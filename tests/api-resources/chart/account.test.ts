// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import EmceesProdTesting5 from 'emcees-prod-testing-5';

const client = new EmceesProdTesting5({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource account', () => {
  // Mock server tests are disabled
  test.skip('retrieveOverview: only required params', async () => {
    const responsePromise = client.chart.account.retrieveOverview({ end: '2019-12-27', start: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveOverview: required and optional params', async () => {
    const response = await client.chart.account.retrieveOverview({
      end: '2019-12-27',
      start: '2019-12-27',
      period: '1M',
      preselected: 'all',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });
});
