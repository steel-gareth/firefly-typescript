// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountAPI from './account';
import {
  Account,
  AccountRetrieveOverviewParams,
  AccountRetrieveOverviewResponse,
  ChartDataPoint,
  ChartDataSet,
} from './account';
import * as BalanceAPI from './balance';
import { Balance, BalanceRetrieveBalanceParams, BalanceRetrieveBalanceResponse } from './balance';
import * as BudgetAPI from './budget';
import { Budget, BudgetRetrieveOverviewParams, BudgetRetrieveOverviewResponse } from './budget';
import * as CategoryAPI from './category';
import { Category, CategoryRetrieveOverviewParams, CategoryRetrieveOverviewResponse } from './category';

export class Chart extends APIResource {
  account: AccountAPI.Account = new AccountAPI.Account(this._client);
  balance: BalanceAPI.Balance = new BalanceAPI.Balance(this._client);
  budget: BudgetAPI.Budget = new BudgetAPI.Budget(this._client);
  category: CategoryAPI.Category = new CategoryAPI.Category(this._client);
}

Chart.Account = Account;
Chart.Balance = Balance;
Chart.Budget = Budget;
Chart.Category = Category;

export declare namespace Chart {
  export {
    Account as Account,
    type ChartDataPoint as ChartDataPoint,
    type ChartDataSet as ChartDataSet,
    type AccountRetrieveOverviewResponse as AccountRetrieveOverviewResponse,
    type AccountRetrieveOverviewParams as AccountRetrieveOverviewParams,
  };

  export {
    Balance as Balance,
    type BalanceRetrieveBalanceResponse as BalanceRetrieveBalanceResponse,
    type BalanceRetrieveBalanceParams as BalanceRetrieveBalanceParams,
  };

  export {
    Budget as Budget,
    type BudgetRetrieveOverviewResponse as BudgetRetrieveOverviewResponse,
    type BudgetRetrieveOverviewParams as BudgetRetrieveOverviewParams,
  };

  export {
    Category as Category,
    type CategoryRetrieveOverviewResponse as CategoryRetrieveOverviewResponse,
    type CategoryRetrieveOverviewParams as CategoryRetrieveOverviewParams,
  };
}
