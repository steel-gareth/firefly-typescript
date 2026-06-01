// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Firefly from 'firefly';

const client = new Firefly({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource objectGroups', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.objectGroups.retrieve('123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objectGroups.retrieve(
        '123',
        { 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.objectGroups.update('123', { title: 'My object group' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.objectGroups.update('123', {
      title: 'My object group',
      order: 1,
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.objectGroups.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objectGroups.list(
        {
          limit: 10,
          page: 1,
          'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.objectGroups.delete('123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objectGroups.delete(
        '123',
        { 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listBills', async () => {
    const responsePromise = client.objectGroups.listBills('123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listBills: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objectGroups.listBills(
        '123',
        {
          limit: 10,
          page: 1,
          'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listPiggyBanks', async () => {
    const responsePromise = client.objectGroups.listPiggyBanks('123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listPiggyBanks: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.objectGroups.listPiggyBanks(
        '123',
        {
          limit: 10,
          page: 1,
          'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });
});
