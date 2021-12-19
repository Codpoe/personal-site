import IconQuoteOpen from '~icons/oi/double-quote-serif-left';

export const Blockquote: React.FC = props => {
  return (
    <div className="relative">
      <IconQuoteOpen className="absolute top-[3px] left-0 text-primary-300/60 scale-[0.5]" />
      <blockquote {...props} className="relative" />
    </div>
  );
};
