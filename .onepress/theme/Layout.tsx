import React, { useMemo, useEffect, useRef } from 'react';
import {
  Page,
  Link,
  useNavigationType,
  usePageState,
  usePagesData,
  useLocation,
  matchPath,
  Helmet,
} from 'onepress/client';
import IconGhost from '~icons/mdi/ghost';
import IconGitHub from '~icons/mdi/github';
import IconEmail from '~icons/mdi/email';

const navLinks: { icon: React.ComponentType<any>; link: string }[] = [
  {
    icon: IconGitHub,
    link: 'https://github.com/Codpoe',
  },
  {
    icon: IconEmail,
    link: 'mailto:codpoe.me@gmail.com',
  },
];

const onepressLink = (
  <a
    href="https://github.com/Codpoe/onepress"
    target="_blank"
    className="hover:text-primary-200 transition-colors"
  >
    OnePress
  </a>
);

const useScrollToTop = () => {
  const { loadedPathname } = usePageState();
  const navigationType = useNavigationType();
  const navigationTypeRef = useRef(navigationType);

  navigationTypeRef.current = navigationType;

  useEffect(() => {
    if (navigationTypeRef.current === 'PUSH' && !window.location.hash) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [loadedPathname]);
};

export const Layout = () => {
  const pagesData = usePagesData();
  const { pathname } = useLocation();

  const currentPageData = useMemo(() => {
    const found = Object.keys(pagesData)
      .sort((a, b) => b.length - a.length)
      .find(item => matchPath(item, pathname));
    return found ? pagesData[found] : undefined;
  }, [pagesData, pathname]);

  const siteTitle =
    pathname === '/'
      ? `Codpoe's site`
      : `${currentPageData?.meta.title || ''} - Codpoe`;

  useScrollToTop();

  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content="Codpoe's personal site" />
      </Helmet>
      <div className="min-h-screen max-w-screen-md mx-auto px-4 flex flex-col">
        <header className="py-6 sm:py-10 flex justify-between items-center">
          <div className="flex flex-col">
            <Link to="/">
              <h1 className="text-xl font-semibold hover:text-primary-400 transition-colors">
                Codpoe
              </h1>
            </Link>
            <div className="mt-2 text-sm text-primary-300">
              Front-end Developer @bytedance
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {navLinks.map((x, index) => (
              <a
                className="flex items-center p-1 text-[22px] text-primary-400 hover:text-primary-300 transition-colors"
                href={x.link}
                target="_blank"
              >
                <x.icon />
              </a>
            ))}
          </div>
        </header>
        <main className="flex-1">
          <div className="bg-[#fffcf6] rounded-sm p-3 sm:p-6 shadow-md">
            <div className="relative border sm:border-2 border-[#e9e5d9] p-px">
              <div className="absolute top-[-3px] left-[-3px] w-[3px] h-[3px] sm:top-[-6px] sm:left-[-6px] sm:w-[6px] sm:h-[6px] border sm:border-2 border-[#e9e5d9]"></div>
              <div className="absolute top-[-3px] right-[-3px] w-[3px] h-[3px] sm:top-[-6px] sm:right-[-6px] sm:w-[6px] sm:h-[6px] border sm:border-2 border-[#e9e5d9]"></div>
              <div className="absolute bottom-[-3px] left-[-3px] w-[3px] h-[3px] sm:bottom-[-6px] sm:left-[-6px] sm:w-[6px] sm:h-[6px] border sm:border-2 border-[#e9e5d9]"></div>
              <div className="absolute bottom-[-3px] right-[-3px] w-[3px] h-[3px] sm:bottom-[-6px] sm:right-[-6px] sm:w-[6px] sm:h-[6px] border sm:border-2 border-[#e9e5d9]"></div>
              <div className="border sm:border-2 border-[#e9e5d9] px-5 py-5 sm:px-8 sm:py-6 text-[14px] sm:text-[16px] markdown-body">
                <Page />
              </div>
            </div>
            <div className="mt-1 mb-3 sm:mt-3 ml-2 flex items-center text-primary-500/30 scale-75 sm:scale-100 origin-left">
              <IconGhost className="text-sm sm:text-lg" />
              <span className="ml-2 text-xs sm:text-sm">
                由 {onepressLink} 驱动
                <span className="ml-3">powered by {onepressLink}</span>
              </span>
            </div>
          </div>
        </main>
        <footer className="py-6 sm:py-10 text-center text-primary-300 text-xs sm:text-sm">
          Copyright © 2021-present Codpoe. Built with Vite & React.
        </footer>
      </div>
    </>
  );
};
