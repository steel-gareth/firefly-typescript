// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Firefly from 'firefly';

const client = new Firefly({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource limits', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.budgets.limits.create('123', {
      amount: '123.45',
      end: '2026-04-30',
      start: '2026-04-01',
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
    const response = await client.budgets.limits.create('123', {
      amount: '123.45',
      end: '2026-04-30',
      start: '2026-04-01',
      currency_code: 'EUR',
      currency_id: '5',
      fire_webhooks: true,
      notes: 'Some example notes',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.budgets.limits.retrieve(1, { id: '123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.budgets.limits.retrieve(1, {
      id: '123',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.budgets.limits.update('123', { id: '123' });
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
    const response = await client.budgets.limits.update('123', {
      id: '123',
      amount: '123.45',
      currency_code: 'EUR',
      currency_id: '5',
      currency_name: 'Euro',
      end: '2026-04-30T23:59:59+00:00',
      fire_webhooks: true,
      notes: 'Some example notes',
      start: '2026-04-01T00:00:00+00:00',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.budgets.limits.delete('123', { id: '123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.budgets.limits.delete('123', {
      id: '123',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('list0', async () => {
    const responsePromise = client.budgets.limits.list0('123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list0: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.budgets.limits.list0(
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
  test.skip('list1: only required params', async () => {
    const responsePromise = client.budgets.limits.list1({ end: '2026-04-30', start: '2026-04-01' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list1: required and optional params', async () => {
    const response = await client.budgets.limits.list1({
      end: '2026-04-30',
      start: '2026-04-01',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });

  // Mock server tests are disabled
  test.skip('listTransactions: only required params', async () => {
    const responsePromise = client.budgets.limits.listTransactions('123', { id: '123' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listTransactions: required and optional params', async () => {
    const response = await client.budgets.limits.listTransactions('123', {
      id: '123',
      limit: 10,
      page: 1,
      type: 'all',
      'X-Trace-Id': '40c71bbb-c676-4f24-83cf-cc725d7d7a00',
    });
  });
});
