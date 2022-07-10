import { Link } from 'pressify/client';
import { ThemeModeSwitch } from '../ThemeModeSwitch';
import IconSmile from '~icons/tabler/mood-smile';
import IconGitHub from '~icons/tabler/brand-github';
import IconEmail from '~icons/tabler/mail';

const navLinks: { icon: React.ComponentType<any>; link: string }[] = [
  {
    icon: IconSmile,
    link: '/about',
  },
  {
    icon: IconEmail,
    link: 'mailto:codpoe.me@gmail.com',
  },
  {
    icon: IconGitHub,
    link: 'https://github.com/Codpoe',
  },
];

export function Header() {
  return (
    <header className="py-6 sm:py-10 mb-3 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
      <div className="flex flex-col">
        <Link to="/">
          <h1 className="text-xl font-semibold text-c-text-0 hover:text-primary-500 transition-colors">
            Codpoe
          </h1>
        </Link>
        <div className="mt-2 text-base text-c-text-2">
          Front-end Developer @bytedance
        </div>
      </div>
      <div className="mt-3 -ml-1.5 sm:mt-0 sm:ml-4 flex items-center space-x-3">
        {navLinks.map((item, index) =>
          item.link.startsWith('/') ? (
            <Link
              key={index}
              className="w-8 h-8 inline-flex justify-center items-center text-base hover:text-primary-500 transition-colors"
              to={item.link}
            >
              <item.icon />
            </Link>
          ) : (
            <a
              key={index}
              className="w-8 h-8 inline-flex justify-center items-center text-base hover:text-primary-500 transition-colors"
              href={item.link}
              target="_blank"
              rel="noreferrer"
            >
              <item.icon />
            </a>
          )
        )}
        <ThemeModeSwitch />
      </div>
    </header>
  );
}
