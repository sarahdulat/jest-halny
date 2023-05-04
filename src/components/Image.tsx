export type Props = {
  alt: string;
  src: string;
};

export default function OrtonEffectImage({ alt, src }: Props) {
  return (
    <figure>
      <img
        src={src}
        alt={alt}
        style={{
          mixBlendMode: "lighten",
          filter: "blur(30px)",
          opacity: "70%",
          position: "absolute",
        }}
      />
      <img src={src} alt={alt} />
    </figure>
  );
}
