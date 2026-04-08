interface ILogoProps {
  textSize: number;
  subTextSize: number;
  color?: string;
}

const Logo = ({ textSize, subTextSize, color }: ILogoProps) => {
  return (
    <div className="relative flex inline-flex items-center text-text-additional-grey-primary">
      <span style={{ fontSize: textSize, color: color }}>HIRO</span>
      <span
        className={`absolute rotate-270`}
        style={{
          fontSize: subTextSize,
          right: -(subTextSize * 2 - subTextSize * 0.5),
          color: color,
        }}
      >
        VPN
      </span>
    </div>
  );
};

export default Logo;
