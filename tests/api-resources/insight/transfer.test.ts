// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Firefly from 'firefly-iii-api';

const client = new Firefly({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource transfer', () => {
  // Mock server tests are disabled
  test.skip('getTotal: only required params', async () => {
    const responsePromise = client.insight.transfer.getTotal({ end: '2019-12-27', start: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTotal: required and optional params', async () => {
    const response = await client.insight.transfer.getTotal({
      end: '2019-12-27',
      start: '2019-12-27',
      accounts: [1, 2, 3],
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('listByAssetAccount: only required params', async () => {
    const responsePromise = client.insight.transfer.listByAssetAccount({
      end: '2019-12-27',
      start: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listByAssetAccount: required and optional params', async () => {
    const response = await client.insight.transfer.listByAssetAccount({
      end: '2019-12-27',
      start: '2019-12-27',
      accounts: [1, 2, 3],
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('listByCategory: only required params', async () => {
    const responsePromise = client.insight.transfer.listByCategory({
      end: '2019-12-27',
      start: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listByCategory: required and optional params', async () => {
    const response = await client.insight.transfer.listByCategory({
      end: '2019-12-27',
      start: '2019-12-27',
      accounts: [1, 2, 3],
      categories: [1, 2, 3],
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('listByTag: only required params', async () => {
    const responsePromise = client.insight.transfer.listByTag({ end: '2019-12-27', start: '2019-12-27' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listByTag: required and optional params', async () => {
    const response = await client.insight.transfer.listByTag({
      end: '2019-12-27',
      start: '2019-12-27',
      accounts: [1, 2, 3],
      tags: [1, 2, 3],
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('listWithoutCategory: only required params', async () => {
    const responsePromise = client.insight.transfer.listWithoutCategory({
      end: '2019-12-27',
      start: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listWithoutCategory: required and optional params', async () => {
    const response = await client.insight.transfer.listWithoutCategory({
      end: '2019-12-27',
      start: '2019-12-27',
      accounts: [1, 2, 3],
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('listWithoutTag: only required params', async () => {
    const responsePromise = client.insight.transfer.listWithoutTag({
      end: '2019-12-27',
      start: '2019-12-27',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listWithoutTag: required and optional params', async () => {
    const response = await client.insight.transfer.listWithoutTag({
      end: '2019-12-27',
      start: '2019-12-27',
      accounts: [1, 2, 3],
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });
});
