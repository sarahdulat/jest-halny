export type Props = {
  alt: string;
  src: string;
};

export default function OrtonEffectImage({ alt, src }: Props) {
  return (
    <figure className="relative bg-black/5 blur-[2] border border-black/20 border-r-black/10 border-l-black/10 shadow-[0_20px_30px_rgba(0,0,0,0.1)]">
      <img
        src={src}
        alt={alt}
        className="absolute mix-blend-lighten opacity-70"
        style={{
          filter: "blur(30px)",
          clipPath: "inset(0 0 0 0)",
        }}
      />
      <img src={src} alt={alt} />
    </figure>
  );
}
