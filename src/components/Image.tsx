export type Props = {
  alt: string;
  src: string;
};

export default function OrtonEffectImage({ alt, src }: Props) {
  return (
    <figure className="relative opacity-[85]">
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
