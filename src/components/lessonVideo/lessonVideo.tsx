import YouTube, { YouTubeProps } from 'react-youtube';

interface LessonVideoProps {
  video_id: string;
}

export function LessonVideo({ video_id }: LessonVideoProps) {
    const opts: YouTubeProps['opts'] = {
        width: "100%", // Делаем видео адаптивным
        height: "100%", // Делаем видео адаптивным
        playerVars: {
          modestbranding: 1, // Убираем логотип YouTube
          rel: 0, // Убираем рекомендации в конце видео
          showinfo: 0, // Убираем заголовок видео
          controls: 1, // Показываем только минимальные контроллы
        },
      };

  return (
    <div className="w-full">
      <div className="w-full aspect-video">
        <YouTube videoId={video_id} opts={opts} className="w-full h-full" />
      </div>
    </div>
    
  );
}
