import { useState, useMemo } from 'react';

export function usePagination<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState(1);
  const maxPage = Math.ceil(items.length / pageSize);

  const data = useMemo(() => items.slice(0, page * pageSize), [items, page, pageSize]);
  const hasMore = page < maxPage;
  const loadMore = () => {
    if (hasMore) setPage(p => p + 1);
  };

  return { data, hasMore, loadMore };
}
