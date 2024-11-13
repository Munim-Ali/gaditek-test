export interface Credentials {
  username: string;
  password: string;
}

export interface ExposureMetric {
  metric: string;
  total: number;
  pnl: number;
}

export interface Metrics {
  exposure?: ExposureMetric[];
  sales?: SalesMetric[];
}

export interface SalesMetric {
  metric: string;
  total: number;
  pnl: number;
}
export interface Sales {
  sales: SalesMetric[];
}
export interface OrderMetric {
  metric: string;
  total: number;
  pnl: number;
}
export interface Orders {
  orders: OrderMetric[];
}
export interface FullData {
  credentials: Credentials;
  metrics: Metrics;
  sales: Sales;
  orders: Orders;
}
