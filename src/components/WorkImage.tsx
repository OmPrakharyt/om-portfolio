import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({
  image,
  alt,
  video,
  link,
}: Props) => {
  const [isVideo, setIsVideo] =
    useState(false);

  const [videoSrc, setVideoSrc] =
    useState("");

  const handleMouseEnter = async () => {
    if (video) {
      setIsVideo(true);

      try {
        const response = await fetch(
          `/videos/${video}`
        );

        const blob =
          await response.blob();

        const blobUrl =
          URL.createObjectURL(blob);

        setVideoSrc(blobUrl);
      } catch (err) {
        console.log(
          "Video load failed"
        );
      }
    }
  };

  return (
    <div className="work-image">

      <a
        className="work-image-in"
        href={link || "#"}
        onMouseEnter={
          handleMouseEnter
        }
        onMouseLeave={() =>
          setIsVideo(false)
        }
        target={
          link && link !== "#"
            ? "_blank"
            : "_self"
        }
        rel="noreferrer"
        data-cursor="disable"
      >

        {link && link !== "#" && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}

        <img
          src={image}
          alt={alt || "Project"}
        />

        {isVideo && videoSrc && (
          <video
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop
          />
        )}

      </a>
    </div>
  );
};

export default WorkImage;