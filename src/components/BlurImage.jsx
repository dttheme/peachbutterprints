import React from "react";

// Shows a stretched, heavily blurred preview until the real file arrives, so
// images resolve into place instead of appearing out of nowhere.
const BlurImage = ({
  src,
  placeholder,
  width,
  height,
  alt,
  loading,
  className = "",
  imageClassName = "",
}) => {
  const image = React.useRef(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    // A cached image can finish before React attaches the load handler.
    if (image.current?.complete) setLoaded(true);
  }, [src]);

  const reveal = () => setLoaded(true);

  return (
    <div
      className={`blur-image ${className}`.trim()}
      style={{ backgroundImage: `url("${placeholder}")` }}
    >
      <img
        ref={image}
        className={`${imageClassName}${loaded ? " is-loaded" : ""}`.trim()}
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        onLoad={reveal}
        onError={reveal}
      />
    </div>
  );
};

export default BlurImage;
