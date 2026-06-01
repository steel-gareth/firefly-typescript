// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExpenseAPI from './expense';
import {
  Expense,
  ExpenseGetTotalParams,
  ExpenseGetTotalResponse,
  ExpenseListByAssetAccountParams,
  ExpenseListByAssetAccountResponse,
  ExpenseListByBillParams,
  ExpenseListByBillResponse,
  ExpenseListByBudgetParams,
  ExpenseListByBudgetResponse,
  ExpenseListByCategoryParams,
  ExpenseListByCategoryResponse,
  ExpenseListByExpenseAccountParams,
  ExpenseListByExpenseAccountResponse,
  ExpenseListByTagParams,
  ExpenseListByTagResponse,
  ExpenseListWithoutBillParams,
  ExpenseListWithoutBillResponse,
  ExpenseListWithoutBudgetParams,
  ExpenseListWithoutBudgetResponse,
  ExpenseListWithoutCategoryParams,
  ExpenseListWithoutCategoryResponse,
  ExpenseListWithoutTagParams,
  ExpenseListWithoutTagResponse,
  InsightGroupEntry,
  InsightTotalEntry,
} from './expense';
import * as IncomeAPI from './income';
import {
  Income,
  IncomeGetTotalParams,
  IncomeGetTotalResponse,
  IncomeListByAssetAccountParams,
  IncomeListByAssetAccountResponse,
  IncomeListByCategoryParams,
  IncomeListByCategoryResponse,
  IncomeListByRevenueAccountParams,
  IncomeListByRevenueAccountResponse,
  IncomeListByTagParams,
  IncomeListByTagResponse,
  IncomeListWithoutCategoryParams,
  IncomeListWithoutCategoryResponse,
  IncomeListWithoutTagParams,
  IncomeListWithoutTagResponse,
} from './income';
import * as TransferAPI from './transfer';
import {
  Transfer,
  TransferGetTotalParams,
  TransferGetTotalResponse,
  TransferListByAssetAccountParams,
  TransferListByAssetAccountResponse,
  TransferListByCategoryParams,
  TransferListByCategoryResponse,
  TransferListByTagParams,
  TransferListByTagResponse,
  TransferListWithoutCategoryParams,
  TransferListWithoutCategoryResponse,
  TransferListWithoutTagParams,
  TransferListWithoutTagResponse,
} from './transfer';

export class Insight extends APIResource {
  expense: ExpenseAPI.Expense = new ExpenseAPI.Expense(this._client);
  income: IncomeAPI.Income = new IncomeAPI.Income(this._client);
  transfer: TransferAPI.Transfer = new TransferAPI.Transfer(this._client);
}

Insight.Expense = Expense;
Insight.Income = Income;
Insight.Transfer = Transfer;

export declare namespace Insight {
  export {
    Expense as Expense,
    type InsightGroupEntry as InsightGroupEntry,
    type InsightTotalEntry as InsightTotalEntry,
    type ExpenseGetTotalResponse as ExpenseGetTotalResponse,
    type ExpenseListByAssetAccountResponse as ExpenseListByAssetAccountResponse,
    type ExpenseListByBillResponse as ExpenseListByBillResponse,
    type ExpenseListByBudgetResponse as ExpenseListByBudgetResponse,
    type ExpenseListByCategoryResponse as ExpenseListByCategoryResponse,
    type ExpenseListByExpenseAccountResponse as ExpenseListByExpenseAccountResponse,
    type ExpenseListByTagResponse as ExpenseListByTagResponse,
    type ExpenseListWithoutBillResponse as ExpenseListWithoutBillResponse,
    type ExpenseListWithoutBudgetResponse as ExpenseListWithoutBudgetResponse,
    type ExpenseListWithoutCategoryResponse as ExpenseListWithoutCategoryResponse,
    type ExpenseListWithoutTagResponse as ExpenseListWithoutTagResponse,
    type ExpenseGetTotalParams as ExpenseGetTotalParams,
    type ExpenseListByAssetAccountParams as ExpenseListByAssetAccountParams,
    type ExpenseListByBillParams as ExpenseListByBillParams,
    type ExpenseListByBudgetParams as ExpenseListByBudgetParams,
    type ExpenseListByCategoryParams as ExpenseListByCategoryParams,
    type ExpenseListByExpenseAccountParams as ExpenseListByExpenseAccountParams,
    type ExpenseListByTagParams as ExpenseListByTagParams,
    type ExpenseListWithoutBillParams as ExpenseListWithoutBillParams,
    type ExpenseListWithoutBudgetParams as ExpenseListWithoutBudgetParams,
    type ExpenseListWithoutCategoryParams as ExpenseListWithoutCategoryParams,
    type ExpenseListWithoutTagParams as ExpenseListWithoutTagParams,
  };

  export {
    Income as Income,
    type IncomeGetTotalResponse as IncomeGetTotalResponse,
    type IncomeListByAssetAccountResponse as IncomeListByAssetAccountResponse,
    type IncomeListByCategoryResponse as IncomeListByCategoryResponse,
    type IncomeListByRevenueAccountResponse as IncomeListByRevenueAccountResponse,
    type IncomeListByTagResponse as IncomeListByTagResponse,
    type IncomeListWithoutCategoryResponse as IncomeListWithoutCategoryResponse,
    type IncomeListWithoutTagResponse as IncomeListWithoutTagResponse,
    type IncomeGetTotalParams as IncomeGetTotalParams,
    type IncomeListByAssetAccountParams as IncomeListByAssetAccountParams,
    type IncomeListByCategoryParams as IncomeListByCategoryParams,
    type IncomeListByRevenueAccountParams as IncomeListByRevenueAccountParams,
    type IncomeListByTagParams as IncomeListByTagParams,
    type IncomeListWithoutCategoryParams as IncomeListWithoutCategoryParams,
    type IncomeListWithoutTagParams as IncomeListWithoutTagParams,
  };

  export {
    Transfer as Transfer,
    type TransferGetTotalResponse as TransferGetTotalResponse,
    type TransferListByAssetAccountResponse as TransferListByAssetAccountResponse,
    type TransferListByCategoryResponse as TransferListByCategoryResponse,
    type TransferListByTagResponse as TransferListByTagResponse,
    type TransferListWithoutCategoryResponse as TransferListWithoutCategoryResponse,
    type TransferListWithoutTagResponse as TransferListWithoutTagResponse,
    type TransferGetTotalParams as TransferGetTotalParams,
    type TransferListByAssetAccountParams as TransferListByAssetAccountParams,
    type TransferListByCategoryParams as TransferListByCategoryParams,
    type TransferListByTagParams as TransferListByTagParams,
    type TransferListWithoutCategoryParams as TransferListWithoutCategoryParams,
    type TransferListWithoutTagParams as TransferListWithoutTagParams,
  };
}
