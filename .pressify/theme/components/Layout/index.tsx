import { useEffect, useMemo, useRef } from 'react';
import {
  useNavigationType,
  useAppState,
  useLocation,
  Helmet,
} from 'pressify/client';
import { Home } from '../Home';
import { Blog } from '../Blog';
import { Header } from '../Header';

const useScrollToTop = () => {
  const { pagePath } = useAppState();
  const navigationType = useNavigationType();
  const navigationTypeRef = useRef(navigationType);

  navigationTypeRef.current = navigationType;

  useEffect(() => {
    if (navigationTypeRef.current === 'PUSH' && !window.location.hash) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [pagePath]);
};

export function Layout() {
  const { pageData } = useAppState();
  const { pathname } = useLocation();

  const siteTitle =
    pathname === '/'
      ? `Codpoe's site`
      : `${pageData?.meta?.title || ''} - Codpoe`;

  const layout = useMemo(() => {
    switch (pageData?.meta?.layout) {
      case 'home':
        return <Home />;
      default:
        return <Blog />;
    }
  }, [pageData]);

  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content="Codpoe's personal site" />
      </Helmet>
      <div className="min-h-screen max-w-3xl min-w-0 w-full mx-auto px-6 flex flex-col items-stretch">
        <Header />
        <main className="flex-1">{layout}</main>
        <footer className="py-6 sm:py-10 mt-10 text-center text-c-text-2 text-sm">
          Copyright © 2021-present Codpoe.
          <br />
          Built with Vite & React. Powered by{' '}
          <a
            className="hover:text-primary-500 transition-colors"
            href="https://github.com/Codpoe/pressify"
          >
            Pressify
          </a>
          .
        </footer>
      </div>
    </>
  );
}
