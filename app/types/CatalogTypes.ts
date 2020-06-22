export interface CatalogItem {
  blockedInfo: BlockItemInfo;
  code: string;
  description: string;
  id: number;
  last: string;
  names: string[];
  poster: string;
  season: string;
  series: string;
  statusCode: string;
}

export interface BlockItemInfo {
  blocked: boolean,
  reason: string | null,
  bakanim: boolean,
}

export interface CatalogPagination {
  allItems: number;
  allPages: number;
  page: number;
  perPage: number
}
