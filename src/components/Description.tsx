import { Photo } from "pexels";
import Image from "@/src/components/Image";

export default function Description({ photo }: { photo: Photo }) {
  return (
    <div>
      <Image src={photo.src.medium} alt={photo.alt!} />
      <p>
        Halny is a type of foehn wind that occurs in the Carpathian Mountains of
        Poland, Slovakia, and Ukraine. The word "halny" comes from the Polish
        word for "highlander" and refers to the people who live in the
        mountainous regions where these winds occur.
      </p>
      <p>
        Halny winds are warm and dry winds that blow down the slopes of the
        mountains. They can be very strong, with gusts of up to 200 km/h, and
        can cause damage to buildings, trees, and power lines. The winds are
        most common in the fall and winter months when there is a temperature
        difference between the mountains and the surrounding lowlands.
      </p>
      <p>
        The halny winds can also have a significant impact on the local climate.
        They can cause sudden and dramatic changes in temperature and humidity,
        leading to rapid snowmelt and flooding. The winds can also create large
        clouds known as lenticular clouds, which can be mistaken for UFOs due to
        their unusual shape.
      </p>
      <p>
        Despite their potential to cause damage and disruption, halny winds are
        also celebrated for their unique cultural significance. They are an
        important part of the local folklore and are often depicted in art and
        literature. Many people also believe that the winds have healing
        properties and can be used to treat a range of ailments. Overall, halny
        winds are a fascinating natural phenomenon that have both positive and
        negative impacts on the communities that live in the Carpathian
        Mountains.
      </p>
    </div>
  );
}
