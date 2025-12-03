import { useState } from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import LiveCard from '@/components/LiveCard';
import CategoryChips from '@/components/CategoryChips';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'Популярное',
    'Новинки',
    'Рекомендации',
    'Геймплей',
    'Музыка',
    'Обучение',
    'Влоги',
  ];

  const liveStreams = [
    {
      title: 'Вечерний стрим: общаемся и отдыхаем',
      thumbnail: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&h=450&fit=crop',
      author: 'StreamerPro',
      viewers: '2.3K',
      category: 'Общение',
    },
    {
      title: 'Играем в новинки 2024',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop',
      author: 'GameMaster',
      viewers: '5.1K',
      category: 'Игры',
    },
    {
      title: 'Музыкальный марафон',
      thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop',
      author: 'MusicLive',
      viewers: '1.8K',
      category: 'Музыка',
    },
    {
      title: 'Кулинарное шоу: готовим вместе',
      thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=450&fit=crop',
      author: 'ChefOnline',
      viewers: '890',
      category: 'Кулинария',
    },
  ];

  const videos = [
    {
      title: 'Как создать успешный канал: полный гайд для новичков',
      thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=450&fit=crop',
      author: 'CreatorHub',
      views: '1.2M',
      duration: '24:15',
      isPremium: false,
      tags: ['обучение', 'советы', 'маркетинг'],
    },
    {
      title: 'Эксклюзивный контент: за кулисами съемок',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=450&fit=crop',
      author: 'FilmStudio',
      views: '856K',
      duration: '18:42',
      isPremium: true,
      tags: ['премиум', 'кино', 'закулисье'],
    },
    {
      title: 'Топ 10 трендов 2024: что нужно знать',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop',
      author: 'TrendWatch',
      views: '2.1M',
      duration: '15:30',
      isPremium: false,
      tags: ['тренды', 'топ', 'обзор'],
    },
    {
      title: 'Мастер-класс по видеомонтажу',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop',
      author: 'EditPro',
      views: '445K',
      duration: '32:18',
      isPremium: true,
      tags: ['монтаж', 'обучение', 'премиум'],
    },
    {
      title: 'Вирусное видео дня: смотреть всем!',
      thumbnail: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800&h=450&fit=crop',
      author: 'ViralKing',
      views: '5.3M',
      duration: '8:45',
      isPremium: false,
      tags: ['вирусное', 'развлечения', 'хиты'],
    },
    {
      title: 'Эксклюзивное интервью со звездой',
      thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=450&fit=crop',
      author: 'StarTalk',
      views: '923K',
      duration: '45:12',
      isPremium: true,
      tags: ['интервью', 'знаменитости', 'премиум'],
    },
    {
      title: 'Подборка лучших моментов недели',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop',
      author: 'BestMoments',
      views: '1.7M',
      duration: '12:34',
      isPremium: false,
      tags: ['подборка', 'развлечения', 'топ'],
    },
    {
      title: 'Обучение фотографии: от новичка до профи',
      thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=450&fit=crop',
      author: 'PhotoSchool',
      views: '678K',
      duration: '28:56',
      isPremium: false,
      tags: ['фотография', 'обучение', 'курс'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-8 space-y-12">
        <section className="relative overflow-hidden rounded-2xl gradient-primary p-8 md:p-12 animate-fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Создавай. Смотри. Зарабатывай.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-6">
              Присоединяйся к крупнейшей платформе для взрослого контента. Загружай видео, проводи трансляции и получай доход от подписок.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Icon name="Play" size={20} className="mr-2" />
                Начать смотреть
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Icon name="Upload" size={20} className="mr-2" />
                Стать автором
              </Button>
            </div>
          </div>
        </section>

        <section className="space-y-6 animate-slide-up">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <div className="w-1 h-8 gradient-primary rounded-full" />
                Прямые трансляции
              </h2>
              <p className="text-muted-foreground mt-1">Смотри в режиме реального времени</p>
            </div>
            <Button variant="ghost" className="gap-2 text-primary">
              Все трансляции
              <Icon name="ArrowRight" size={18} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {liveStreams.map((stream, index) => (
              <LiveCard key={index} {...stream} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2">
                <div className="w-1 h-8 gradient-accent rounded-full" />
                Рекомендуемые видео
              </h2>
              <p className="text-muted-foreground mt-1">Подобрано специально для тебя</p>
            </div>
          </div>

          <CategoryChips
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Button variant="outline" size="lg" className="gap-2">
              Загрузить еще
              <Icon name="ChevronDown" size={18} />
            </Button>
          </div>
        </section>

        <section className="glass-card rounded-2xl p-8 md:p-12 text-center space-y-6 animate-scale-in">
          <div className="inline-block gradient-primary p-4 rounded-2xl mb-4">
            <Icon name="Crown" size={48} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold">Стань Premium автором</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Размещай эксклюзивный контент, получай доход от подписок и выводи средства без комиссий
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white">
              <Icon name="Zap" size={20} className="mr-2" />
              Узнать подробнее
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 mt-20">
        <div className="container px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Как работает</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Для авторов</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Сообщество</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Партнеры</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Twitter" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={18} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Youtube" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/40">
            © 2024 VIDSTREAM. Все права защищены. 18+
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
