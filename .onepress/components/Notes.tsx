import { useMemo } from 'react';
import { usePagesData, Link } from 'onepress/client';

export const Notes = () => {
  const pagesData = usePagesData();

  const notePagesData = useMemo(() => {
    return Object.keys(pagesData)
      .filter(key => key.startsWith('/notes'))
      .map(key => pagesData[key])
      .sort((a, b) => {
        if (a.meta.date && b.meta.date) {
          return b.meta.date.localeCompare(a.meta.date);
        }
        return 0;
      });
  }, [pagesData]);

  return (
    <ul>
      {notePagesData.map((x, index) => (
        <li key={index}>
          <div className="group flex justify-between items-center">
            <Link to={x.routePath}>{x.meta?.title || 'Untitled'}</Link>
            <div className="flex-1 h-px mx-3 bg-primary-500/10 opacity-0 sm:group-hover:opacity-100 transition-all"></div>
            {x.meta.date && (
              <div className="text-sm text-primary-500/30">{x.meta.date}</div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
