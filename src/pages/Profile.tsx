import { useState } from 'react';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import ContentTable from '@/components/ContentTable';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Общий доход',
      value: '₽124,590',
      change: '+12.5%',
      icon: 'DollarSign',
      trend: 'up' as const,
    },
    {
      title: 'Подписчики',
      value: '8,456',
      change: '+5.2%',
      icon: 'Users',
      trend: 'up' as const,
    },
    {
      title: 'Просмотры',
      value: '1.2M',
      change: '+8.7%',
      icon: 'Eye',
      trend: 'up' as const,
    },
    {
      title: 'Рейтинг',
      value: '4.8',
      change: '-0.2',
      icon: 'Star',
      trend: 'down' as const,
    },
  ];

  const contentItems = [
    {
      id: '1',
      title: 'Вечерний стрим: общаемся и отдыхаем',
      type: 'live' as const,
      status: 'published' as const,
      views: '2.3K',
      revenue: '₽4,200',
      date: '01.12.2024',
    },
    {
      id: '2',
      title: 'Эксклюзивный контент: за кулисами',
      type: 'video' as const,
      status: 'published' as const,
      views: '856K',
      revenue: '₽32,100',
      date: '28.11.2024',
    },
    {
      id: '3',
      title: 'Новое видео в обработке',
      type: 'video' as const,
      status: 'processing' as const,
      views: '-',
      revenue: '₽0',
      date: '03.12.2024',
    },
    {
      id: '4',
      title: 'Черновик: идеи для следующего контента',
      type: 'video' as const,
      status: 'draft' as const,
      views: '-',
      revenue: '₽0',
      date: '02.12.2024',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-24 w-24 border-4 border-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop" />
                <AvatarFallback className="gradient-primary text-white text-2xl">
                  SP
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold mb-1">StreamerPro</h1>
                <p className="text-muted-foreground mb-2">@streamerpro • Автор Premium</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-sm">
                    <Icon name="Users" size={16} className="text-muted-foreground" />
                    <span className="font-semibold">8.5K</span> подписчиков
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Icon name="Video" size={16} className="text-muted-foreground" />
                    <span className="font-semibold">142</span> видео
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Icon name="Share2" size={18} />
                Поделиться
              </Button>
              <Button className="gradient-primary text-white gap-2">
                <Icon name="Upload" size={18} />
                Загрузить контент
              </Button>
            </div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
              <TabsTrigger value="overview" className="gap-2">
                <Icon name="BarChart3" size={16} />
                Обзор
              </TabsTrigger>
              <TabsTrigger value="content" className="gap-2">
                <Icon name="Video" size={16} />
                Контент
              </TabsTrigger>
              <TabsTrigger value="earnings" className="gap-2">
                <Icon name="DollarSign" size={16} />
                Доходы
              </TabsTrigger>
              <TabsTrigger value="settings" className="gap-2">
                <Icon name="Settings" size={16} />
                Настройки
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <StatsCard key={index} {...stat} />
                ))}
              </div>

              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Аналитика за месяц
                  </CardTitle>
                  <CardDescription>
                    Ваши показатели растут на 12% по сравнению с прошлым месяцем
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                    <div className="text-center text-muted-foreground">
                      <Icon name="BarChart3" size={48} className="mx-auto mb-2 opacity-50" />
                      <p>График статистики</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} />
                      Топ видео
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <div className="h-16 w-24 rounded bg-muted flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold truncate">Видео #{i}</p>
                          <p className="text-sm text-muted-foreground">
                            {(Math.random() * 500 + 100).toFixed(0)}K просмотров
                          </p>
                        </div>
                        <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageSquare" size={20} />
                      Последние отзывы
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { name: 'Viewer123', text: 'Отличный контент!', rating: 5 },
                      { name: 'Fan456', text: 'Жду новых видео', rating: 5 },
                      { name: 'User789', text: 'Супер стримы', rating: 4 },
                    ].map((review, i) => (
                      <div key={i} className="p-3 rounded-lg bg-muted/30">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center">
                            <Icon name="User" size={16} className="text-white" />
                          </div>
                          <span className="font-semibold">{review.name}</span>
                          <div className="flex gap-0.5 ml-auto">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Icon key={i} name="Star" size={14} className="fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.text}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">Управление контентом</h2>
                  <p className="text-muted-foreground">Все ваши видео и трансляции</p>
                </div>
                <Button className="gradient-primary text-white gap-2">
                  <Icon name="Plus" size={18} />
                  Добавить контент
                </Button>
              </div>

              <ContentTable items={contentItems} />
            </TabsContent>

            <TabsContent value="earnings" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle>Доступно для вывода</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                      ₽24,890
                    </p>
                    <Button className="w-full mt-4 gradient-primary text-white">
                      Вывести средства
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle>Доход за месяц</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">₽78,320</p>
                    <p className="text-sm text-green-500 mt-2 flex items-center gap-1">
                      <Icon name="TrendingUp" size={14} />
                      +15.3% к прошлому месяцу
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-border/50">
                  <CardHeader>
                    <CardTitle>Всего заработано</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">₽456,720</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      За всё время работы
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>История транзакций</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { type: 'Подписка', amount: '+₽2,500', date: '01.12.2024' },
                      { type: 'Донат', amount: '+₽500', date: '01.12.2024' },
                      { type: 'Вывод средств', amount: '-₽10,000', date: '28.11.2024' },
                      { type: 'Подписка', amount: '+₽2,500', date: '27.11.2024' },
                    ].map((transaction, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                      >
                        <div>
                          <p className="font-semibold">{transaction.type}</p>
                          <p className="text-sm text-muted-foreground">{transaction.date}</p>
                        </div>
                        <p
                          className={`font-bold ${
                            transaction.amount.startsWith('+')
                              ? 'text-green-500'
                              : 'text-red-500'
                          }`}
                        >
                          {transaction.amount}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Профиль</CardTitle>
                  <CardDescription>Обновите информацию о себе</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" defaultValue="StreamerPro" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Никнейм</Label>
                    <Input id="username" defaultValue="@streamerpro" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">О себе</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Создаю контент для взрослых. Подписывайтесь!"
                      rows={4}
                    />
                  </div>
                  <Button className="gradient-primary text-white">Сохранить изменения</Button>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Монетизация</CardTitle>
                  <CardDescription>Настройте способы получения дохода</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Платные подписки</p>
                      <p className="text-sm text-muted-foreground">
                        Зрители могут оформить подписку на ваш контент
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Донаты</p>
                      <p className="text-sm text-muted-foreground">
                        Принимайте добровольные пожертвования
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Реклама</p>
                      <p className="text-sm text-muted-foreground">
                        Показывайте рекламу в своих видео
                      </p>
                    </div>
                    <Switch />
                  </div>
                  <div className="space-y-2 pt-4 border-t border-border">
                    <Label htmlFor="subscription-price">Цена подписки (₽/месяц)</Label>
                    <Input id="subscription-price" type="number" defaultValue="2500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle>Конфиденциальность</CardTitle>
                  <CardDescription>Управление видимостью профиля</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Публичный профиль</p>
                      <p className="text-sm text-muted-foreground">
                        Ваш профиль виден всем пользователям
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">Показывать статистику</p>
                      <p className="text-sm text-muted-foreground">
                        Количество подписчиков и просмотров
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
