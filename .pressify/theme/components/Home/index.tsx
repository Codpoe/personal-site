import { useMemo } from 'react';
import { Link, useAppState } from 'pressify/client';

export function Home() {
  const { pagesData } = useAppState();

  const blogPagesData = useMemo(() => {
    return Object.keys(pagesData)
      .filter(key => key.startsWith('/blog'))
      .map(key => pagesData[key])
      .sort((a, b) => {
        if (a.meta?.date && b.meta?.date) {
          return b.meta.date.localeCompare(a.meta.date);
        }
        return 0;
      });
  }, [pagesData]);

  return (
    <div className="list-none divide-y divide-c-border-1">
      {blogPagesData.map(item => (
        <Link
          key={item.routePath}
          className="group flex items-center py-6 cursor-pointer"
          to={item.routePath}
        >
          <h1 className="flex-1 text-base font-semibold group-hover:text-primary-500 transition-colors">
            {item.meta?.title || 'Untitled'}
          </h1>
          {item.meta?.date && (
            <span className="ml-10 flex-shrink-0 text-sm text-c-text-2">
              {item.meta.date}
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
