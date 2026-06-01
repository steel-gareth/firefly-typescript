// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Firefly from 'firefly-iii-api';

const client = new Firefly({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource exchangeRates', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.exchangeRates.create({
      date: '2026-04-01',
      from: 'USD',
      rates: {},
      to: 'EUR',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.exchangeRates.create({
      date: '2026-04-01',
      from: 'USD',
      rates: {},
      to: 'EUR',
      rate: '2.3456',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.exchangeRates.retrieve('123');
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
      client.exchangeRates.retrieve(
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
  test.skip('update: only required params', async () => {
    const responsePromise = client.exchangeRates.update('123', { date: '2026-04-01', rate: '2.3456' });
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
    const response = await client.exchangeRates.update('123', {
      date: '2026-04-01',
      rate: '2.3456',
      from: 'USD',
      to: 'EUR',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.exchangeRates.list();
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
      client.exchangeRates.list(
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
    const responsePromise = client.exchangeRates.delete('123');
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
      client.exchangeRates.delete(
        '123',
        { 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('createByCurrencies: only required params', async () => {
    const responsePromise = client.exchangeRates.createByCurrencies('USD', {
      from: 'EUR',
      body: { '2025-08-01': '1.2345', '2025-08-02': '6.3456' },
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
  test.skip('createByCurrencies: required and optional params', async () => {
    const response = await client.exchangeRates.createByCurrencies('USD', {
      from: 'EUR',
      body: { '2025-08-01': '1.2345', '2025-08-02': '6.3456' },
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('createByDate: only required params', async () => {
    const responsePromise = client.exchangeRates.createByDate('2026-04-01', {
      date: {},
      from: 'EUR',
      rates: { USD: '1.2345', GBP: '6.3456' },
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
  test.skip('createByDate: required and optional params', async () => {
    const response = await client.exchangeRates.createByDate('2026-04-01', {
      date: {},
      from: 'EUR',
      rates: { USD: '1.2345', GBP: '6.3456' },
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteAllByCurrencies: only required params', async () => {
    const responsePromise = client.exchangeRates.deleteAllByCurrencies('USD', { from: 'EUR' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteAllByCurrencies: required and optional params', async () => {
    const response = await client.exchangeRates.deleteAllByCurrencies('USD', {
      from: 'EUR',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('deleteByDate: only required params', async () => {
    const responsePromise = client.exchangeRates.deleteByDate('2026-04-01', { from: 'EUR', to: 'USD' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deleteByDate: required and optional params', async () => {
    const response = await client.exchangeRates.deleteByDate('2026-04-01', {
      from: 'EUR',
      to: 'USD',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('listByCurrencies: only required params', async () => {
    const responsePromise = client.exchangeRates.listByCurrencies('USD', { from: 'EUR' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listByCurrencies: required and optional params', async () => {
    const response = await client.exchangeRates.listByCurrencies('USD', {
      from: 'EUR',
      limit: 10,
      page: 1,
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieveByDate: only required params', async () => {
    const responsePromise = client.exchangeRates.retrieveByDate('2026-04-01', { from: 'EUR', to: 'USD' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveByDate: required and optional params', async () => {
    const response = await client.exchangeRates.retrieveByDate('2026-04-01', {
      from: 'EUR',
      to: 'USD',
      limit: 10,
      page: 1,
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('updateByDate: only required params', async () => {
    const responsePromise = client.exchangeRates.updateByDate('2026-04-01', {
      from: 'EUR',
      to: 'USD',
      rate: '2.3456',
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
  test.skip('updateByDate: required and optional params', async () => {
    const response = await client.exchangeRates.updateByDate('2026-04-01', {
      from: 'EUR',
      to: 'USD',
      rate: '2.3456',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });
});
