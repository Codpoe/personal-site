import { Link } from 'pressify/client';

export const A: React.FC<{ href: string; className?: string }> = ({
  href,
  className = '',
  ...restProps
}) => {
  if (href.startsWith('/')) {
    return (
      <Link
        {...restProps}
        className={`${className} hover:text-primary-400`}
        to={href}
      />
    );
  }

  return (
    <a
      {...restProps}
      className={`${className} hover:text-primary-400`}
      href={href}
      target="_blank"
      rel="noreferrer"
    />
  );
};

export function Pre({
  children,
  className,
  style,
}: {
  children: string;
  className: string;
  style: React.CSSProperties;
}) {
  return (
    <pre
      className={className}
      style={style}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
