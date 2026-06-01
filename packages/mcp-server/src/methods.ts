// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.autocomplete.listAccounts',
    fullyQualifiedName: 'autocomplete.listAccounts',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/accounts',
  },
  {
    clientCallName: 'client.autocomplete.listBills',
    fullyQualifiedName: 'autocomplete.listBills',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/bills',
  },
  {
    clientCallName: 'client.autocomplete.listBudgets',
    fullyQualifiedName: 'autocomplete.listBudgets',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/budgets',
  },
  {
    clientCallName: 'client.autocomplete.listCategories',
    fullyQualifiedName: 'autocomplete.listCategories',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/categories',
  },
  {
    clientCallName: 'client.autocomplete.listCurrencies',
    fullyQualifiedName: 'autocomplete.listCurrencies',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/currencies',
  },
  {
    clientCallName: 'client.autocomplete.listCurrenciesWithCode',
    fullyQualifiedName: 'autocomplete.listCurrenciesWithCode',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/currencies-with-code',
  },
  {
    clientCallName: 'client.autocomplete.listObjectGroups',
    fullyQualifiedName: 'autocomplete.listObjectGroups',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/object-groups',
  },
  {
    clientCallName: 'client.autocomplete.listPiggyBanks',
    fullyQualifiedName: 'autocomplete.listPiggyBanks',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/piggy-banks',
  },
  {
    clientCallName: 'client.autocomplete.listPiggyBanksWithBalance',
    fullyQualifiedName: 'autocomplete.listPiggyBanksWithBalance',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/piggy-banks-with-balance',
  },
  {
    clientCallName: 'client.autocomplete.listRecurringTransactions',
    fullyQualifiedName: 'autocomplete.listRecurringTransactions',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/recurring',
  },
  {
    clientCallName: 'client.autocomplete.listRuleGroups',
    fullyQualifiedName: 'autocomplete.listRuleGroups',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/rule-groups',
  },
  {
    clientCallName: 'client.autocomplete.listRules',
    fullyQualifiedName: 'autocomplete.listRules',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/rules',
  },
  {
    clientCallName: 'client.autocomplete.listSubscriptions',
    fullyQualifiedName: 'autocomplete.listSubscriptions',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/subscriptions',
  },
  {
    clientCallName: 'client.autocomplete.listTags',
    fullyQualifiedName: 'autocomplete.listTags',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/tags',
  },
  {
    clientCallName: 'client.autocomplete.listTransactionTypes',
    fullyQualifiedName: 'autocomplete.listTransactionTypes',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/transaction-types',
  },
  {
    clientCallName: 'client.autocomplete.listTransactions',
    fullyQualifiedName: 'autocomplete.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/transactions',
  },
  {
    clientCallName: 'client.autocomplete.listTransactionsWithID',
    fullyQualifiedName: 'autocomplete.listTransactionsWithID',
    httpMethod: 'get',
    httpPath: '/v1/autocomplete/transactions-with-id',
  },
  {
    clientCallName: 'client.chart.account.retrieveOverview',
    fullyQualifiedName: 'chart.account.retrieveOverview',
    httpMethod: 'get',
    httpPath: '/v1/chart/account/overview',
  },
  {
    clientCallName: 'client.chart.balance.retrieveBalance',
    fullyQualifiedName: 'chart.balance.retrieveBalance',
    httpMethod: 'get',
    httpPath: '/v1/chart/balance/balance',
  },
  {
    clientCallName: 'client.chart.budget.retrieveOverview',
    fullyQualifiedName: 'chart.budget.retrieveOverview',
    httpMethod: 'get',
    httpPath: '/v1/chart/budget/overview',
  },
  {
    clientCallName: 'client.chart.category.retrieveOverview',
    fullyQualifiedName: 'chart.category.retrieveOverview',
    httpMethod: 'get',
    httpPath: '/v1/chart/category/overview',
  },
  {
    clientCallName: 'client.data.destroy',
    fullyQualifiedName: 'data.destroy',
    httpMethod: 'delete',
    httpPath: '/v1/data/destroy',
  },
  {
    clientCallName: 'client.data.purge',
    fullyQualifiedName: 'data.purge',
    httpMethod: 'delete',
    httpPath: '/v1/data/purge',
  },
  {
    clientCallName: 'client.data.bulk.updateTransactions',
    fullyQualifiedName: 'data.bulk.updateTransactions',
    httpMethod: 'post',
    httpPath: '/v1/data/bulk/transactions',
  },
  {
    clientCallName: 'client.data.export.exportAccounts',
    fullyQualifiedName: 'data.export.exportAccounts',
    httpMethod: 'get',
    httpPath: '/v1/data/export/accounts',
  },
  {
    clientCallName: 'client.data.export.exportBills',
    fullyQualifiedName: 'data.export.exportBills',
    httpMethod: 'get',
    httpPath: '/v1/data/export/bills',
  },
  {
    clientCallName: 'client.data.export.exportBudgets',
    fullyQualifiedName: 'data.export.exportBudgets',
    httpMethod: 'get',
    httpPath: '/v1/data/export/budgets',
  },
  {
    clientCallName: 'client.data.export.exportCategories',
    fullyQualifiedName: 'data.export.exportCategories',
    httpMethod: 'get',
    httpPath: '/v1/data/export/categories',
  },
  {
    clientCallName: 'client.data.export.exportPiggyBanks',
    fullyQualifiedName: 'data.export.exportPiggyBanks',
    httpMethod: 'get',
    httpPath: '/v1/data/export/piggy-banks',
  },
  {
    clientCallName: 'client.data.export.exportRecurring',
    fullyQualifiedName: 'data.export.exportRecurring',
    httpMethod: 'get',
    httpPath: '/v1/data/export/recurring',
  },
  {
    clientCallName: 'client.data.export.exportRules',
    fullyQualifiedName: 'data.export.exportRules',
    httpMethod: 'get',
    httpPath: '/v1/data/export/rules',
  },
  {
    clientCallName: 'client.data.export.exportTags',
    fullyQualifiedName: 'data.export.exportTags',
    httpMethod: 'get',
    httpPath: '/v1/data/export/tags',
  },
  {
    clientCallName: 'client.data.export.exportTransactions',
    fullyQualifiedName: 'data.export.exportTransactions',
    httpMethod: 'get',
    httpPath: '/v1/data/export/transactions',
  },
  {
    clientCallName: 'client.insight.expense.getTotal',
    fullyQualifiedName: 'insight.expense.getTotal',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/total',
  },
  {
    clientCallName: 'client.insight.expense.listByAssetAccount',
    fullyQualifiedName: 'insight.expense.listByAssetAccount',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/asset',
  },
  {
    clientCallName: 'client.insight.expense.listByBill',
    fullyQualifiedName: 'insight.expense.listByBill',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/bill',
  },
  {
    clientCallName: 'client.insight.expense.listByBudget',
    fullyQualifiedName: 'insight.expense.listByBudget',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/budget',
  },
  {
    clientCallName: 'client.insight.expense.listByCategory',
    fullyQualifiedName: 'insight.expense.listByCategory',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/category',
  },
  {
    clientCallName: 'client.insight.expense.listByExpenseAccount',
    fullyQualifiedName: 'insight.expense.listByExpenseAccount',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/expense',
  },
  {
    clientCallName: 'client.insight.expense.listByTag',
    fullyQualifiedName: 'insight.expense.listByTag',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/tag',
  },
  {
    clientCallName: 'client.insight.expense.listWithoutBill',
    fullyQualifiedName: 'insight.expense.listWithoutBill',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/no-bill',
  },
  {
    clientCallName: 'client.insight.expense.listWithoutBudget',
    fullyQualifiedName: 'insight.expense.listWithoutBudget',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/no-budget',
  },
  {
    clientCallName: 'client.insight.expense.listWithoutCategory',
    fullyQualifiedName: 'insight.expense.listWithoutCategory',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/no-category',
  },
  {
    clientCallName: 'client.insight.expense.listWithoutTag',
    fullyQualifiedName: 'insight.expense.listWithoutTag',
    httpMethod: 'get',
    httpPath: '/v1/insight/expense/no-tag',
  },
  {
    clientCallName: 'client.insight.income.getTotal',
    fullyQualifiedName: 'insight.income.getTotal',
    httpMethod: 'get',
    httpPath: '/v1/insight/income/total',
  },
  {
    clientCallName: 'client.insight.income.listByAssetAccount',
    fullyQualifiedName: 'insight.income.listByAssetAccount',
    httpMethod: 'get',
    httpPath: '/v1/insight/income/asset',
  },
  {
    clientCallName: 'client.insight.income.listByCategory',
    fullyQualifiedName: 'insight.income.listByCategory',
    httpMethod: 'get',
    httpPath: '/v1/insight/income/category',
  },
  {
    clientCallName: 'client.insight.income.listByRevenueAccount',
    fullyQualifiedName: 'insight.income.listByRevenueAccount',
    httpMethod: 'get',
    httpPath: '/v1/insight/income/revenue',
  },
  {
    clientCallName: 'client.insight.income.listByTag',
    fullyQualifiedName: 'insight.income.listByTag',
    httpMethod: 'get',
    httpPath: '/v1/insight/income/tag',
  },
  {
    clientCallName: 'client.insight.income.listWithoutCategory',
    fullyQualifiedName: 'insight.income.listWithoutCategory',
    httpMethod: 'get',
    httpPath: '/v1/insight/income/no-category',
  },
  {
    clientCallName: 'client.insight.income.listWithoutTag',
    fullyQualifiedName: 'insight.income.listWithoutTag',
    httpMethod: 'get',
    httpPath: '/v1/insight/income/no-tag',
  },
  {
    clientCallName: 'client.insight.transfer.getTotal',
    fullyQualifiedName: 'insight.transfer.getTotal',
    httpMethod: 'get',
    httpPath: '/v1/insight/transfer/total',
  },
  {
    clientCallName: 'client.insight.transfer.listByAssetAccount',
    fullyQualifiedName: 'insight.transfer.listByAssetAccount',
    httpMethod: 'get',
    httpPath: '/v1/insight/transfer/asset',
  },
  {
    clientCallName: 'client.insight.transfer.listByCategory',
    fullyQualifiedName: 'insight.transfer.listByCategory',
    httpMethod: 'get',
    httpPath: '/v1/insight/transfer/category',
  },
  {
    clientCallName: 'client.insight.transfer.listByTag',
    fullyQualifiedName: 'insight.transfer.listByTag',
    httpMethod: 'get',
    httpPath: '/v1/insight/transfer/tag',
  },
  {
    clientCallName: 'client.insight.transfer.listWithoutCategory',
    fullyQualifiedName: 'insight.transfer.listWithoutCategory',
    httpMethod: 'get',
    httpPath: '/v1/insight/transfer/no-category',
  },
  {
    clientCallName: 'client.insight.transfer.listWithoutTag',
    fullyQualifiedName: 'insight.transfer.listWithoutTag',
    httpMethod: 'get',
    httpPath: '/v1/insight/transfer/no-tag',
  },
  {
    clientCallName: 'client.accounts.create',
    fullyQualifiedName: 'accounts.create',
    httpMethod: 'post',
    httpPath: '/v1/accounts',
  },
  {
    clientCallName: 'client.accounts.retrieve',
    fullyQualifiedName: 'accounts.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/accounts/{id}',
  },
  {
    clientCallName: 'client.accounts.update',
    fullyQualifiedName: 'accounts.update',
    httpMethod: 'put',
    httpPath: '/v1/accounts/{id}',
  },
  {
    clientCallName: 'client.accounts.list',
    fullyQualifiedName: 'accounts.list',
    httpMethod: 'get',
    httpPath: '/v1/accounts',
  },
  {
    clientCallName: 'client.accounts.delete',
    fullyQualifiedName: 'accounts.delete',
    httpMethod: 'delete',
    httpPath: '/v1/accounts/{id}',
  },
  {
    clientCallName: 'client.accounts.listAttachments',
    fullyQualifiedName: 'accounts.listAttachments',
    httpMethod: 'get',
    httpPath: '/v1/accounts/{id}/attachments',
  },
  {
    clientCallName: 'client.accounts.listPiggyBanks',
    fullyQualifiedName: 'accounts.listPiggyBanks',
    httpMethod: 'get',
    httpPath: '/v1/accounts/{id}/piggy-banks',
  },
  {
    clientCallName: 'client.accounts.listTransactions',
    fullyQualifiedName: 'accounts.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/accounts/{id}/transactions',
  },
  {
    clientCallName: 'client.attachments.create',
    fullyQualifiedName: 'attachments.create',
    httpMethod: 'post',
    httpPath: '/v1/attachments',
  },
  {
    clientCallName: 'client.attachments.retrieve',
    fullyQualifiedName: 'attachments.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/attachments/{id}',
  },
  {
    clientCallName: 'client.attachments.update',
    fullyQualifiedName: 'attachments.update',
    httpMethod: 'put',
    httpPath: '/v1/attachments/{id}',
  },
  {
    clientCallName: 'client.attachments.list',
    fullyQualifiedName: 'attachments.list',
    httpMethod: 'get',
    httpPath: '/v1/attachments',
  },
  {
    clientCallName: 'client.attachments.delete',
    fullyQualifiedName: 'attachments.delete',
    httpMethod: 'delete',
    httpPath: '/v1/attachments/{id}',
  },
  {
    clientCallName: 'client.attachments.download',
    fullyQualifiedName: 'attachments.download',
    httpMethod: 'get',
    httpPath: '/v1/attachments/{id}/download',
  },
  {
    clientCallName: 'client.attachments.upload',
    fullyQualifiedName: 'attachments.upload',
    httpMethod: 'post',
    httpPath: '/v1/attachments/{id}/upload',
  },
  {
    clientCallName: 'client.availableBudgets.retrieve',
    fullyQualifiedName: 'availableBudgets.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/available-budgets/{id}',
  },
  {
    clientCallName: 'client.availableBudgets.list',
    fullyQualifiedName: 'availableBudgets.list',
    httpMethod: 'get',
    httpPath: '/v1/available-budgets',
  },
  {
    clientCallName: 'client.bills.create',
    fullyQualifiedName: 'bills.create',
    httpMethod: 'post',
    httpPath: '/v1/bills',
  },
  {
    clientCallName: 'client.bills.retrieve',
    fullyQualifiedName: 'bills.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/bills/{id}',
  },
  {
    clientCallName: 'client.bills.update',
    fullyQualifiedName: 'bills.update',
    httpMethod: 'put',
    httpPath: '/v1/bills/{id}',
  },
  {
    clientCallName: 'client.bills.list',
    fullyQualifiedName: 'bills.list',
    httpMethod: 'get',
    httpPath: '/v1/bills',
  },
  {
    clientCallName: 'client.bills.delete',
    fullyQualifiedName: 'bills.delete',
    httpMethod: 'delete',
    httpPath: '/v1/bills/{id}',
  },
  {
    clientCallName: 'client.bills.listAttachments',
    fullyQualifiedName: 'bills.listAttachments',
    httpMethod: 'get',
    httpPath: '/v1/bills/{id}/attachments',
  },
  {
    clientCallName: 'client.bills.listRules',
    fullyQualifiedName: 'bills.listRules',
    httpMethod: 'get',
    httpPath: '/v1/bills/{id}/rules',
  },
  {
    clientCallName: 'client.bills.listTransactions',
    fullyQualifiedName: 'bills.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/bills/{id}/transactions',
  },
  {
    clientCallName: 'client.budgets.create',
    fullyQualifiedName: 'budgets.create',
    httpMethod: 'post',
    httpPath: '/v1/budgets',
  },
  {
    clientCallName: 'client.budgets.retrieve',
    fullyQualifiedName: 'budgets.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/budgets/{id}',
  },
  {
    clientCallName: 'client.budgets.update',
    fullyQualifiedName: 'budgets.update',
    httpMethod: 'put',
    httpPath: '/v1/budgets/{id}',
  },
  {
    clientCallName: 'client.budgets.list',
    fullyQualifiedName: 'budgets.list',
    httpMethod: 'get',
    httpPath: '/v1/budgets',
  },
  {
    clientCallName: 'client.budgets.delete',
    fullyQualifiedName: 'budgets.delete',
    httpMethod: 'delete',
    httpPath: '/v1/budgets/{id}',
  },
  {
    clientCallName: 'client.budgets.listAttachments',
    fullyQualifiedName: 'budgets.listAttachments',
    httpMethod: 'get',
    httpPath: '/v1/budgets/{id}/attachments',
  },
  {
    clientCallName: 'client.budgets.listTransactions',
    fullyQualifiedName: 'budgets.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/budgets/{id}/transactions',
  },
  {
    clientCallName: 'client.budgets.listTransactionsWithoutBudget',
    fullyQualifiedName: 'budgets.listTransactionsWithoutBudget',
    httpMethod: 'get',
    httpPath: '/v1/budgets/transactions-without-budget',
  },
  {
    clientCallName: 'client.budgets.limits.create',
    fullyQualifiedName: 'budgets.limits.create',
    httpMethod: 'post',
    httpPath: '/v1/budgets/{id}/limits',
  },
  {
    clientCallName: 'client.budgets.limits.retrieve',
    fullyQualifiedName: 'budgets.limits.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/budgets/{id}/limits/{limitId}',
  },
  {
    clientCallName: 'client.budgets.limits.update',
    fullyQualifiedName: 'budgets.limits.update',
    httpMethod: 'put',
    httpPath: '/v1/budgets/{id}/limits/{limitId}',
  },
  {
    clientCallName: 'client.budgets.limits.delete',
    fullyQualifiedName: 'budgets.limits.delete',
    httpMethod: 'delete',
    httpPath: '/v1/budgets/{id}/limits/{limitId}',
  },
  {
    clientCallName: 'client.budgets.limits.list0',
    fullyQualifiedName: 'budgets.limits.list0',
    httpMethod: 'get',
    httpPath: '/v1/budgets/{id}/limits',
  },
  {
    clientCallName: 'client.budgets.limits.list1',
    fullyQualifiedName: 'budgets.limits.list1',
    httpMethod: 'get',
    httpPath: '/v1/budget-limits',
  },
  {
    clientCallName: 'client.budgets.limits.listTransactions',
    fullyQualifiedName: 'budgets.limits.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/budgets/{id}/limits/{limitId}/transactions',
  },
  {
    clientCallName: 'client.categories.create',
    fullyQualifiedName: 'categories.create',
    httpMethod: 'post',
    httpPath: '/v1/categories',
  },
  {
    clientCallName: 'client.categories.retrieve',
    fullyQualifiedName: 'categories.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/categories/{id}',
  },
  {
    clientCallName: 'client.categories.update',
    fullyQualifiedName: 'categories.update',
    httpMethod: 'put',
    httpPath: '/v1/categories/{id}',
  },
  {
    clientCallName: 'client.categories.list',
    fullyQualifiedName: 'categories.list',
    httpMethod: 'get',
    httpPath: '/v1/categories',
  },
  {
    clientCallName: 'client.categories.delete',
    fullyQualifiedName: 'categories.delete',
    httpMethod: 'delete',
    httpPath: '/v1/categories/{id}',
  },
  {
    clientCallName: 'client.categories.listAttachments',
    fullyQualifiedName: 'categories.listAttachments',
    httpMethod: 'get',
    httpPath: '/v1/categories/{id}/attachments',
  },
  {
    clientCallName: 'client.categories.listTransactions',
    fullyQualifiedName: 'categories.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/categories/{id}/transactions',
  },
  {
    clientCallName: 'client.exchangeRates.create',
    fullyQualifiedName: 'exchangeRates.create',
    httpMethod: 'post',
    httpPath: '/v1/exchange-rates',
  },
  {
    clientCallName: 'client.exchangeRates.retrieve',
    fullyQualifiedName: 'exchangeRates.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/exchange-rates/{id}',
  },
  {
    clientCallName: 'client.exchangeRates.update',
    fullyQualifiedName: 'exchangeRates.update',
    httpMethod: 'put',
    httpPath: '/v1/exchange-rates/{id}',
  },
  {
    clientCallName: 'client.exchangeRates.list',
    fullyQualifiedName: 'exchangeRates.list',
    httpMethod: 'get',
    httpPath: '/v1/exchange-rates',
  },
  {
    clientCallName: 'client.exchangeRates.delete',
    fullyQualifiedName: 'exchangeRates.delete',
    httpMethod: 'delete',
    httpPath: '/v1/exchange-rates/{id}',
  },
  {
    clientCallName: 'client.exchangeRates.createByCurrencies',
    fullyQualifiedName: 'exchangeRates.createByCurrencies',
    httpMethod: 'post',
    httpPath: '/v1/exchange-rates/by-currencies/{from}/{to}',
  },
  {
    clientCallName: 'client.exchangeRates.createByDate',
    fullyQualifiedName: 'exchangeRates.createByDate',
    httpMethod: 'post',
    httpPath: '/v1/exchange-rates/by-date/{date}',
  },
  {
    clientCallName: 'client.exchangeRates.deleteAllByCurrencies',
    fullyQualifiedName: 'exchangeRates.deleteAllByCurrencies',
    httpMethod: 'delete',
    httpPath: '/v1/exchange-rates/{from}/{to}',
  },
  {
    clientCallName: 'client.exchangeRates.deleteByDate',
    fullyQualifiedName: 'exchangeRates.deleteByDate',
    httpMethod: 'delete',
    httpPath: '/v1/exchange-rates/{from}/{to}/{date}',
  },
  {
    clientCallName: 'client.exchangeRates.listByCurrencies',
    fullyQualifiedName: 'exchangeRates.listByCurrencies',
    httpMethod: 'get',
    httpPath: '/v1/exchange-rates/{from}/{to}',
  },
  {
    clientCallName: 'client.exchangeRates.retrieveByDate',
    fullyQualifiedName: 'exchangeRates.retrieveByDate',
    httpMethod: 'get',
    httpPath: '/v1/exchange-rates/{from}/{to}/{date}',
  },
  {
    clientCallName: 'client.exchangeRates.updateByDate',
    fullyQualifiedName: 'exchangeRates.updateByDate',
    httpMethod: 'put',
    httpPath: '/v1/exchange-rates/{from}/{to}/{date}',
  },
  {
    clientCallName: 'client.linkTypes.create',
    fullyQualifiedName: 'linkTypes.create',
    httpMethod: 'post',
    httpPath: '/v1/link-types',
  },
  {
    clientCallName: 'client.linkTypes.retrieve',
    fullyQualifiedName: 'linkTypes.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/link-types/{id}',
  },
  {
    clientCallName: 'client.linkTypes.update',
    fullyQualifiedName: 'linkTypes.update',
    httpMethod: 'put',
    httpPath: '/v1/link-types/{id}',
  },
  {
    clientCallName: 'client.linkTypes.list',
    fullyQualifiedName: 'linkTypes.list',
    httpMethod: 'get',
    httpPath: '/v1/link-types',
  },
  {
    clientCallName: 'client.linkTypes.delete',
    fullyQualifiedName: 'linkTypes.delete',
    httpMethod: 'delete',
    httpPath: '/v1/link-types/{id}',
  },
  {
    clientCallName: 'client.linkTypes.listTransactions',
    fullyQualifiedName: 'linkTypes.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/link-types/{id}/transactions',
  },
  {
    clientCallName: 'client.transactionLinks.create',
    fullyQualifiedName: 'transactionLinks.create',
    httpMethod: 'post',
    httpPath: '/v1/transaction-links',
  },
  {
    clientCallName: 'client.transactionLinks.retrieve',
    fullyQualifiedName: 'transactionLinks.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/transaction-links/{id}',
  },
  {
    clientCallName: 'client.transactionLinks.update',
    fullyQualifiedName: 'transactionLinks.update',
    httpMethod: 'put',
    httpPath: '/v1/transaction-links/{id}',
  },
  {
    clientCallName: 'client.transactionLinks.list',
    fullyQualifiedName: 'transactionLinks.list',
    httpMethod: 'get',
    httpPath: '/v1/transaction-links',
  },
  {
    clientCallName: 'client.transactionLinks.delete',
    fullyQualifiedName: 'transactionLinks.delete',
    httpMethod: 'delete',
    httpPath: '/v1/transaction-links/{id}',
  },
  {
    clientCallName: 'client.objectGroups.retrieve',
    fullyQualifiedName: 'objectGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/object-groups/{id}',
  },
  {
    clientCallName: 'client.objectGroups.update',
    fullyQualifiedName: 'objectGroups.update',
    httpMethod: 'put',
    httpPath: '/v1/object-groups/{id}',
  },
  {
    clientCallName: 'client.objectGroups.list',
    fullyQualifiedName: 'objectGroups.list',
    httpMethod: 'get',
    httpPath: '/v1/object-groups',
  },
  {
    clientCallName: 'client.objectGroups.delete',
    fullyQualifiedName: 'objectGroups.delete',
    httpMethod: 'delete',
    httpPath: '/v1/object-groups/{id}',
  },
  {
    clientCallName: 'client.objectGroups.listBills',
    fullyQualifiedName: 'objectGroups.listBills',
    httpMethod: 'get',
    httpPath: '/v1/object-groups/{id}/bills',
  },
  {
    clientCallName: 'client.objectGroups.listPiggyBanks',
    fullyQualifiedName: 'objectGroups.listPiggyBanks',
    httpMethod: 'get',
    httpPath: '/v1/object-groups/{id}/piggy-banks',
  },
  {
    clientCallName: 'client.piggyBanks.create',
    fullyQualifiedName: 'piggyBanks.create',
    httpMethod: 'post',
    httpPath: '/v1/piggy-banks',
  },
  {
    clientCallName: 'client.piggyBanks.retrieve',
    fullyQualifiedName: 'piggyBanks.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/piggy-banks/{id}',
  },
  {
    clientCallName: 'client.piggyBanks.update',
    fullyQualifiedName: 'piggyBanks.update',
    httpMethod: 'put',
    httpPath: '/v1/piggy-banks/{id}',
  },
  {
    clientCallName: 'client.piggyBanks.list',
    fullyQualifiedName: 'piggyBanks.list',
    httpMethod: 'get',
    httpPath: '/v1/piggy-banks',
  },
  {
    clientCallName: 'client.piggyBanks.delete',
    fullyQualifiedName: 'piggyBanks.delete',
    httpMethod: 'delete',
    httpPath: '/v1/piggy-banks/{id}',
  },
  {
    clientCallName: 'client.piggyBanks.listAttachments',
    fullyQualifiedName: 'piggyBanks.listAttachments',
    httpMethod: 'get',
    httpPath: '/v1/piggy-banks/{id}/attachments',
  },
  {
    clientCallName: 'client.piggyBanks.listEvents',
    fullyQualifiedName: 'piggyBanks.listEvents',
    httpMethod: 'get',
    httpPath: '/v1/piggy-banks/{id}/events',
  },
  {
    clientCallName: 'client.recurrences.create',
    fullyQualifiedName: 'recurrences.create',
    httpMethod: 'post',
    httpPath: '/v1/recurrences',
  },
  {
    clientCallName: 'client.recurrences.retrieve',
    fullyQualifiedName: 'recurrences.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/recurrences/{id}',
  },
  {
    clientCallName: 'client.recurrences.update',
    fullyQualifiedName: 'recurrences.update',
    httpMethod: 'put',
    httpPath: '/v1/recurrences/{id}',
  },
  {
    clientCallName: 'client.recurrences.list',
    fullyQualifiedName: 'recurrences.list',
    httpMethod: 'get',
    httpPath: '/v1/recurrences',
  },
  {
    clientCallName: 'client.recurrences.delete',
    fullyQualifiedName: 'recurrences.delete',
    httpMethod: 'delete',
    httpPath: '/v1/recurrences/{id}',
  },
  {
    clientCallName: 'client.recurrences.listTransactions',
    fullyQualifiedName: 'recurrences.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/recurrences/{id}/transactions',
  },
  {
    clientCallName: 'client.recurrences.triggerTransaction',
    fullyQualifiedName: 'recurrences.triggerTransaction',
    httpMethod: 'post',
    httpPath: '/v1/recurrences/{id}/trigger',
  },
  {
    clientCallName: 'client.ruleGroups.create',
    fullyQualifiedName: 'ruleGroups.create',
    httpMethod: 'post',
    httpPath: '/v1/rule-groups',
  },
  {
    clientCallName: 'client.ruleGroups.retrieve',
    fullyQualifiedName: 'ruleGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/rule-groups/{id}',
  },
  {
    clientCallName: 'client.ruleGroups.update',
    fullyQualifiedName: 'ruleGroups.update',
    httpMethod: 'put',
    httpPath: '/v1/rule-groups/{id}',
  },
  {
    clientCallName: 'client.ruleGroups.delete',
    fullyQualifiedName: 'ruleGroups.delete',
    httpMethod: 'delete',
    httpPath: '/v1/rule-groups/{id}',
  },
  {
    clientCallName: 'client.ruleGroups.listAll',
    fullyQualifiedName: 'ruleGroups.listAll',
    httpMethod: 'get',
    httpPath: '/v1/rule-groups',
  },
  {
    clientCallName: 'client.ruleGroups.listRules',
    fullyQualifiedName: 'ruleGroups.listRules',
    httpMethod: 'get',
    httpPath: '/v1/rule-groups/{id}/rules',
  },
  {
    clientCallName: 'client.ruleGroups.testTransactions',
    fullyQualifiedName: 'ruleGroups.testTransactions',
    httpMethod: 'get',
    httpPath: '/v1/rule-groups/{id}/test',
  },
  {
    clientCallName: 'client.ruleGroups.triggerRules',
    fullyQualifiedName: 'ruleGroups.triggerRules',
    httpMethod: 'post',
    httpPath: '/v1/rule-groups/{id}/trigger',
  },
  {
    clientCallName: 'client.rules.create',
    fullyQualifiedName: 'rules.create',
    httpMethod: 'post',
    httpPath: '/v1/rules',
  },
  {
    clientCallName: 'client.rules.retrieve',
    fullyQualifiedName: 'rules.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/rules/{id}',
  },
  {
    clientCallName: 'client.rules.update',
    fullyQualifiedName: 'rules.update',
    httpMethod: 'put',
    httpPath: '/v1/rules/{id}',
  },
  {
    clientCallName: 'client.rules.list',
    fullyQualifiedName: 'rules.list',
    httpMethod: 'get',
    httpPath: '/v1/rules',
  },
  {
    clientCallName: 'client.rules.delete',
    fullyQualifiedName: 'rules.delete',
    httpMethod: 'delete',
    httpPath: '/v1/rules/{id}',
  },
  {
    clientCallName: 'client.rules.test',
    fullyQualifiedName: 'rules.test',
    httpMethod: 'get',
    httpPath: '/v1/rules/{id}/test',
  },
  {
    clientCallName: 'client.rules.trigger',
    fullyQualifiedName: 'rules.trigger',
    httpMethod: 'post',
    httpPath: '/v1/rules/{id}/trigger',
  },
  {
    clientCallName: 'client.tags.create',
    fullyQualifiedName: 'tags.create',
    httpMethod: 'post',
    httpPath: '/v1/tags',
  },
  {
    clientCallName: 'client.tags.retrieve',
    fullyQualifiedName: 'tags.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/tags/{tag}',
  },
  {
    clientCallName: 'client.tags.update',
    fullyQualifiedName: 'tags.update',
    httpMethod: 'put',
    httpPath: '/v1/tags/{tag}',
  },
  {
    clientCallName: 'client.tags.list',
    fullyQualifiedName: 'tags.list',
    httpMethod: 'get',
    httpPath: '/v1/tags',
  },
  {
    clientCallName: 'client.tags.delete',
    fullyQualifiedName: 'tags.delete',
    httpMethod: 'delete',
    httpPath: '/v1/tags/{tag}',
  },
  {
    clientCallName: 'client.tags.listAttachments',
    fullyQualifiedName: 'tags.listAttachments',
    httpMethod: 'get',
    httpPath: '/v1/tags/{tag}/attachments',
  },
  {
    clientCallName: 'client.tags.listTransactions',
    fullyQualifiedName: 'tags.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/tags/{tag}/transactions',
  },
  {
    clientCallName: 'client.currencies.create',
    fullyQualifiedName: 'currencies.create',
    httpMethod: 'post',
    httpPath: '/v1/currencies',
  },
  {
    clientCallName: 'client.currencies.retrieve',
    fullyQualifiedName: 'currencies.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/currencies/{code}',
  },
  {
    clientCallName: 'client.currencies.update',
    fullyQualifiedName: 'currencies.update',
    httpMethod: 'put',
    httpPath: '/v1/currencies/{code}',
  },
  {
    clientCallName: 'client.currencies.list',
    fullyQualifiedName: 'currencies.list',
    httpMethod: 'get',
    httpPath: '/v1/currencies',
  },
  {
    clientCallName: 'client.currencies.delete',
    fullyQualifiedName: 'currencies.delete',
    httpMethod: 'delete',
    httpPath: '/v1/currencies/{code}',
  },
  {
    clientCallName: 'client.currencies.disable',
    fullyQualifiedName: 'currencies.disable',
    httpMethod: 'post',
    httpPath: '/v1/currencies/{code}/disable',
  },
  {
    clientCallName: 'client.currencies.enable',
    fullyQualifiedName: 'currencies.enable',
    httpMethod: 'post',
    httpPath: '/v1/currencies/{code}/enable',
  },
  {
    clientCallName: 'client.currencies.listAccounts',
    fullyQualifiedName: 'currencies.listAccounts',
    httpMethod: 'get',
    httpPath: '/v1/currencies/{code}/accounts',
  },
  {
    clientCallName: 'client.currencies.listAvailableBudgets',
    fullyQualifiedName: 'currencies.listAvailableBudgets',
    httpMethod: 'get',
    httpPath: '/v1/currencies/{code}/available-budgets',
  },
  {
    clientCallName: 'client.currencies.listBills',
    fullyQualifiedName: 'currencies.listBills',
    httpMethod: 'get',
    httpPath: '/v1/currencies/{code}/bills',
  },
  {
    clientCallName: 'client.currencies.listBudgetLimits',
    fullyQualifiedName: 'currencies.listBudgetLimits',
    httpMethod: 'get',
    httpPath: '/v1/currencies/{code}/budget-limits',
  },
  {
    clientCallName: 'client.currencies.listRecurrences',
    fullyQualifiedName: 'currencies.listRecurrences',
    httpMethod: 'get',
    httpPath: '/v1/currencies/{code}/recurrences',
  },
  {
    clientCallName: 'client.currencies.listRules',
    fullyQualifiedName: 'currencies.listRules',
    httpMethod: 'get',
    httpPath: '/v1/currencies/{code}/rules',
  },
  {
    clientCallName: 'client.currencies.listTransactions',
    fullyQualifiedName: 'currencies.listTransactions',
    httpMethod: 'get',
    httpPath: '/v1/currencies/{code}/transactions',
  },
  {
    clientCallName: 'client.currencies.primary.retrieve',
    fullyQualifiedName: 'currencies.primary.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/currencies/primary',
  },
  {
    clientCallName: 'client.currencies.primary.makePrimary',
    fullyQualifiedName: 'currencies.primary.makePrimary',
    httpMethod: 'post',
    httpPath: '/v1/currencies/{code}/primary',
  },
  {
    clientCallName: 'client.transactionJournals.retrieve',
    fullyQualifiedName: 'transactionJournals.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/transaction-journals/{id}',
  },
  {
    clientCallName: 'client.transactionJournals.delete',
    fullyQualifiedName: 'transactionJournals.delete',
    httpMethod: 'delete',
    httpPath: '/v1/transaction-journals/{id}',
  },
  {
    clientCallName: 'client.transactionJournals.listLinks',
    fullyQualifiedName: 'transactionJournals.listLinks',
    httpMethod: 'get',
    httpPath: '/v1/transaction-journals/{id}/links',
  },
  {
    clientCallName: 'client.transactions.create',
    fullyQualifiedName: 'transactions.create',
    httpMethod: 'post',
    httpPath: '/v1/transactions',
  },
  {
    clientCallName: 'client.transactions.retrieve',
    fullyQualifiedName: 'transactions.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/transactions/{id}',
  },
  {
    clientCallName: 'client.transactions.update',
    fullyQualifiedName: 'transactions.update',
    httpMethod: 'put',
    httpPath: '/v1/transactions/{id}',
  },
  {
    clientCallName: 'client.transactions.list',
    fullyQualifiedName: 'transactions.list',
    httpMethod: 'get',
    httpPath: '/v1/transactions',
  },
  {
    clientCallName: 'client.transactions.delete',
    fullyQualifiedName: 'transactions.delete',
    httpMethod: 'delete',
    httpPath: '/v1/transactions/{id}',
  },
  {
    clientCallName: 'client.transactions.listAttachments',
    fullyQualifiedName: 'transactions.listAttachments',
    httpMethod: 'get',
    httpPath: '/v1/transactions/{id}/attachments',
  },
  {
    clientCallName: 'client.transactions.listPiggyBankEvents',
    fullyQualifiedName: 'transactions.listPiggyBankEvents',
    httpMethod: 'get',
    httpPath: '/v1/transactions/{id}/piggy-bank-events',
  },
  {
    clientCallName: 'client.userGroups.retrieve',
    fullyQualifiedName: 'userGroups.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/user-groups/{id}',
  },
  {
    clientCallName: 'client.userGroups.update',
    fullyQualifiedName: 'userGroups.update',
    httpMethod: 'put',
    httpPath: '/v1/user-groups/{id}',
  },
  {
    clientCallName: 'client.userGroups.list',
    fullyQualifiedName: 'userGroups.list',
    httpMethod: 'get',
    httpPath: '/v1/user-groups',
  },
  {
    clientCallName: 'client.search.accounts',
    fullyQualifiedName: 'search.accounts',
    httpMethod: 'get',
    httpPath: '/v1/search/accounts',
  },
  {
    clientCallName: 'client.search.transactions',
    fullyQualifiedName: 'search.transactions',
    httpMethod: 'get',
    httpPath: '/v1/search/transactions',
  },
  {
    clientCallName: 'client.summary.retrieveBasic',
    fullyQualifiedName: 'summary.retrieveBasic',
    httpMethod: 'get',
    httpPath: '/v1/summary/basic',
  },
  {
    clientCallName: 'client.about.retrieveInfo',
    fullyQualifiedName: 'about.retrieveInfo',
    httpMethod: 'get',
    httpPath: '/v1/about',
  },
  {
    clientCallName: 'client.about.retrieveUser',
    fullyQualifiedName: 'about.retrieveUser',
    httpMethod: 'get',
    httpPath: '/v1/about/user',
  },
  {
    clientCallName: 'client.batch.finish',
    fullyQualifiedName: 'batch.finish',
    httpMethod: 'post',
    httpPath: '/v1/batch/finish',
  },
  {
    clientCallName: 'client.configuration.retrieve',
    fullyQualifiedName: 'configuration.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/configuration',
  },
  {
    clientCallName: 'client.configuration.retrieveValue',
    fullyQualifiedName: 'configuration.retrieveValue',
    httpMethod: 'get',
    httpPath: '/v1/configuration/{name}',
  },
  {
    clientCallName: 'client.configuration.updateValue',
    fullyQualifiedName: 'configuration.updateValue',
    httpMethod: 'put',
    httpPath: '/v1/configuration/{name}',
  },
  {
    clientCallName: 'client.cron.run',
    fullyQualifiedName: 'cron.run',
    httpMethod: 'get',
    httpPath: '/v1/cron/{cliToken}',
  },
  {
    clientCallName: 'client.users.create',
    fullyQualifiedName: 'users.create',
    httpMethod: 'post',
    httpPath: '/v1/users',
  },
  {
    clientCallName: 'client.users.retrieve',
    fullyQualifiedName: 'users.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/users/{id}',
  },
  {
    clientCallName: 'client.users.update',
    fullyQualifiedName: 'users.update',
    httpMethod: 'put',
    httpPath: '/v1/users/{id}',
  },
  {
    clientCallName: 'client.users.list',
    fullyQualifiedName: 'users.list',
    httpMethod: 'get',
    httpPath: '/v1/users',
  },
  {
    clientCallName: 'client.users.delete',
    fullyQualifiedName: 'users.delete',
    httpMethod: 'delete',
    httpPath: '/v1/users/{id}',
  },
  {
    clientCallName: 'client.preferences.create',
    fullyQualifiedName: 'preferences.create',
    httpMethod: 'post',
    httpPath: '/v1/preferences',
  },
  {
    clientCallName: 'client.preferences.retrieve',
    fullyQualifiedName: 'preferences.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/preferences/{name}',
  },
  {
    clientCallName: 'client.preferences.update',
    fullyQualifiedName: 'preferences.update',
    httpMethod: 'put',
    httpPath: '/v1/preferences/{name}',
  },
  {
    clientCallName: 'client.preferences.list',
    fullyQualifiedName: 'preferences.list',
    httpMethod: 'get',
    httpPath: '/v1/preferences',
  },
  {
    clientCallName: 'client.webhooks.create',
    fullyQualifiedName: 'webhooks.create',
    httpMethod: 'post',
    httpPath: '/v1/webhooks',
  },
  {
    clientCallName: 'client.webhooks.retrieve',
    fullyQualifiedName: 'webhooks.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.update',
    fullyQualifiedName: 'webhooks.update',
    httpMethod: 'put',
    httpPath: '/v1/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.list',
    fullyQualifiedName: 'webhooks.list',
    httpMethod: 'get',
    httpPath: '/v1/webhooks',
  },
  {
    clientCallName: 'client.webhooks.delete',
    fullyQualifiedName: 'webhooks.delete',
    httpMethod: 'delete',
    httpPath: '/v1/webhooks/{id}',
  },
  {
    clientCallName: 'client.webhooks.submit',
    fullyQualifiedName: 'webhooks.submit',
    httpMethod: 'post',
    httpPath: '/v1/webhooks/{id}/submit',
  },
  {
    clientCallName: 'client.webhooks.triggerTransaction',
    fullyQualifiedName: 'webhooks.triggerTransaction',
    httpMethod: 'post',
    httpPath: '/v1/webhooks/{id}/trigger-transaction/{transactionId}',
  },
  {
    clientCallName: 'client.webhooks.messages.retrieve',
    fullyQualifiedName: 'webhooks.messages.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/webhooks/{id}/messages/{messageId}',
  },
  {
    clientCallName: 'client.webhooks.messages.list',
    fullyQualifiedName: 'webhooks.messages.list',
    httpMethod: 'get',
    httpPath: '/v1/webhooks/{id}/messages',
  },
  {
    clientCallName: 'client.webhooks.messages.delete',
    fullyQualifiedName: 'webhooks.messages.delete',
    httpMethod: 'delete',
    httpPath: '/v1/webhooks/{id}/messages/{messageId}',
  },
  {
    clientCallName: 'client.webhooks.messages.attempts.retrieve',
    fullyQualifiedName: 'webhooks.messages.attempts.retrieve',
    httpMethod: 'get',
    httpPath: '/v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}',
  },
  {
    clientCallName: 'client.webhooks.messages.attempts.list',
    fullyQualifiedName: 'webhooks.messages.attempts.list',
    httpMethod: 'get',
    httpPath: '/v1/webhooks/{id}/messages/{messageId}/attempts',
  },
  {
    clientCallName: 'client.webhooks.messages.attempts.delete',
    fullyQualifiedName: 'webhooks.messages.attempts.delete',
    httpMethod: 'delete',
    httpPath: '/v1/webhooks/{id}/messages/{messageId}/attempts/{attemptId}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
