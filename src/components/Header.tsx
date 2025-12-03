import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Header() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'catalog', label: 'Каталог', icon: 'Grid3x3' },
    { id: 'live', label: 'Трансляции', icon: 'Radio' },
    { id: 'favorites', label: 'Избранное', icon: 'Heart' },
    { id: 'subscriptions', label: 'Подписки', icon: 'Star' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="gradient-primary h-10 w-10 rounded-xl flex items-center justify-center">
              <Icon name="Play" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              VIDSTREAM
            </span>
            <Badge variant="secondary" className="gradient-accent text-white border-0">
              18+
            </Badge>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? 'default' : 'ghost'}
                className={`gap-2 ${
                  activeTab === item.id
                    ? 'gradient-primary text-white'
                    : 'hover:bg-muted'
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <Icon name={item.icon as any} size={18} />
                {item.label}
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-64 hidden lg:block">
            <Icon
              name="Search"
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <Input
              type="search"
              placeholder="Поиск видео..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-border/50"
            />
          </div>

          <Button variant="ghost" size="icon" className="relative">
            <Icon name="Bell" size={20} />
            <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full" />
          </Button>

          <Button variant="ghost" size="icon">
            <Icon name="User" size={20} />
          </Button>

          <Button className="gradient-primary text-white hover:opacity-90 hidden sm:flex">
            <Icon name="Upload" size={18} className="mr-2" />
            Загрузить
          </Button>
        </div>
      </div>

      <div className="md:hidden border-t border-border/40 px-4 py-2">
        <div className="relative">
          <Icon
            name="Search"
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="search"
            placeholder="Поиск видео..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted/50 border-border/50"
          />
        </div>
      </div>
    </header>
  );
}
