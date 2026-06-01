// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Firefly from 'firefly';

const client = new Firefly({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource bills', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.bills.create({
      amount_max: '123.45',
      amount_min: '123.45',
      date: '2026-04-01T00:00:00+00:00',
      name: 'Rent',
      repeat_freq: 'monthly',
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
    const response = await client.bills.create({
      amount_max: '123.45',
      amount_min: '123.45',
      date: '2026-04-01T00:00:00+00:00',
      name: 'Rent',
      repeat_freq: 'monthly',
      active: true,
      currency_code: 'EUR',
      currency_id: '5',
      end_date: '2026-04-30T23:59:59+00:00',
      extension_date: '2026-04-30T23:59:59+00:00',
      notes: 'Some example notes',
      object_group_id: '5',
      object_group_title: 'Example Group',
      skip: 0,
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.bills.retrieve('123');
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
      client.bills.retrieve(
        '123',
        {
          end: '2026-04-30',
          start: '2026-04-01',
          'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.bills.update('123', { name: 'Rent' });
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
    const response = await client.bills.update('123', {
      name: 'Rent',
      active: true,
      amount_max: '123.45',
      amount_min: '123.45',
      currency_code: 'EUR',
      currency_id: '5',
      date: '2026-04-01T00:00:00+00:00',
      end_date: '2026-04-30T23:59:59+00:00',
      extension_date: '2026-04-30T23:59:59+00:00',
      notes: 'Some example notes',
      object_group_id: '5',
      object_group_title: 'Example Group',
      repeat_freq: 'monthly',
      skip: 0,
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.bills.list();
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
      client.bills.list(
        {
          end: '2026-04-01',
          limit: 10,
          page: 1,
          start: '2026-04-01',
          'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.bills.delete('123');
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
      client.bills.delete(
        '123',
        { 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listAttachments', async () => {
    const responsePromise = client.bills.listAttachments('123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listAttachments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bills.listAttachments(
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
  test.skip('listRules', async () => {
    const responsePromise = client.bills.listRules('123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listRules: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bills.listRules(
        '123',
        { 'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listTransactions', async () => {
    const responsePromise = client.bills.listTransactions('123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listTransactions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.bills.listTransactions(
        '123',
        {
          end: '2026-04-30',
          limit: 10,
          page: 1,
          start: '2026-04-01',
          type: 'all',
          'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Firefly.NotFoundError);
  });
});
