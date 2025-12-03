import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  author: string;
  views: string;
  duration: string;
  isPremium?: boolean;
  tags: string[];
  isLive?: boolean;
}

export default function VideoCard({
  title,
  thumbnail,
  author,
  views,
  duration,
  isPremium = false,
  tags,
  isLive = false,
}: VideoCardProps) {
  return (
    <div className="group glass-card rounded-xl overflow-hidden hover-glow animate-fade-in">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {isLive && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            LIVE
          </div>
        )}
        
        {!isLive && (
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-semibold rounded">
            {duration}
          </div>
        )}

        {isPremium && (
          <div className="absolute top-3 right-3 gradient-accent p-2 rounded-full">
            <Icon name="Crown" size={16} className="text-white" />
          </div>
        )}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
          <Button
            size="icon"
            className="gradient-primary opacity-0 group-hover:opacity-100 transition-opacity scale-0 group-hover:scale-100 transform duration-300 h-14 w-14 rounded-full"
          >
            <Icon name="Play" size={28} className="text-white" />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
            <Icon name="User" size={20} className="text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-2">{author}</p>
            
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Icon name="Eye" size={14} />
                {views}
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          <Button variant="ghost" size="icon" className="flex-shrink-0 text-muted-foreground hover:text-foreground">
            <Icon name="MoreVertical" size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
