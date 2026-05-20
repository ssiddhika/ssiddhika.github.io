import Image from 'next/image';

type AboutPhotoProps = {
  src: string;
  alt: string;
  caption: string;
  variant?: 'medium' | 'grid';
  priority?: boolean;
};

const AboutPhoto = ({ src, alt, caption, variant = 'medium', priority }: AboutPhotoProps) => {
  if (variant === 'grid') {
    return (
      <figure className="about-photo-grid-item">
        <div className="about-photo-grid-frame">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={priority}
          />
        </div>
        <figcaption className="about-photo-caption">{caption}</figcaption>
      </figure>
    );
  }

  return (
    <figure className="about-photo about-photo--medium">
      <div className="about-photo-frame about-photo-frame--medium">
        <Image
          src={src}
          alt={alt}
          width={560}
          height={380}
          className="about-photo-img"
          sizes="(max-width: 768px) 100vw, 28rem"
          priority={priority}
        />
      </div>
      <figcaption className="about-photo-caption">{caption}</figcaption>
    </figure>
  );
};

export default AboutPhoto;
