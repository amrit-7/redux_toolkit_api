import classNames from "classnames";

const Skeleton = ({ times, className }) => {
  const outerClassNames = classNames(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerrClassNames = classNames(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-tp-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );
  const boxLoaders = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerrClassNames} />
        </div>
      );
    });
  return boxLoaders;
};

export default Skeleton;
