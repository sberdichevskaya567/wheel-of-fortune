interface IUseFormatTime {
  time: number | null;
}

interface IUseFormatTimeReturn {
  hours: number;
  minutes: number;
  seconds: number;
}

export const useFormatTime = ({
  time,
}: IUseFormatTime): IUseFormatTimeReturn => {
  const totalSeconds = time ? Math.floor(time / 1000) : 0;

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours,
    minutes,
    seconds,
  };
};
