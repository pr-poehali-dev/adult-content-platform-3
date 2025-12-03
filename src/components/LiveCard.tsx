import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface LiveCardProps {
  title: string;
  thumbnail: string;
  author: string;
  viewers: string;
  category: string;
}

export default function LiveCard({
  title,
  thumbnail,
  author,
  viewers,
  category,
}: LiveCardProps) {
  return (
    <div className="group glass-card rounded-xl overflow-hidden hover-glow animate-scale-in relative">
      <div className="absolute -top-1 -left-1 -right-1 -bottom-1 gradient-primary opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-opacity" />
      
      <div className="relative">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 bg-red-600 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
            <div className="w-2 h-2 bg-white rounded-full" />
            LIVE
          </div>

          <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 bg-black/70 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
            <Icon name="Users" size={14} />
            {viewers}
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <Badge className="gradient-accent text-white border-0 mb-2">
              {category}
            </Badge>
          </div>

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
            <Button
              size="icon"
              className="gradient-primary opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100 transform duration-300 h-16 w-16 rounded-full shadow-2xl"
            >
              <Icon name="Play" size={32} className="text-white" />
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-full gradient-secondary flex items-center justify-center flex-shrink-0 ring-2 ring-accent/50">
              <Icon name="Radio" size={20} className="text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <Icon name="User" size={14} />
                {author}
              </p>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="flex-shrink-0 text-muted-foreground hover:text-red-500 transition-colors"
            >
              <Icon name="Heart" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
