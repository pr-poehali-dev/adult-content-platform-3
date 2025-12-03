import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Icon from '@/components/ui/icon';

interface ContentItem {
  id: string;
  title: string;
  type: 'video' | 'live';
  status: 'published' | 'draft' | 'processing';
  views: string;
  revenue: string;
  date: string;
}

interface ContentTableProps {
  items: ContentItem[];
}

export default function ContentTable({ items }: ContentTableProps) {
  const getStatusBadge = (status: string) => {
    const variants = {
      published: 'default',
      draft: 'secondary',
      processing: 'outline',
    };
    const labels = {
      published: 'Опубликовано',
      draft: 'Черновик',
      processing: 'Обработка',
    };
    return (
      <Badge variant={variants[status as keyof typeof variants] as any}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  return (
    <div className="glass-card rounded-xl border border-border/50 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-border/50">
            <TableHead>Контент</TableHead>
            <TableHead>Тип</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Просмотры</TableHead>
            <TableHead>Доход</TableHead>
            <TableHead>Дата</TableHead>
            <TableHead className="text-right">Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id} className="border-border/50">
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Icon
                    name={item.type === 'video' ? 'Video' : 'Radio'}
                    size={16}
                    className="text-muted-foreground"
                  />
                  {item.type === 'video' ? 'Видео' : 'Трансляция'}
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(item.status)}</TableCell>
              <TableCell>{item.views}</TableCell>
              <TableCell className="font-semibold text-green-500">
                {item.revenue}
              </TableCell>
              <TableCell className="text-muted-foreground">{item.date}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2 justify-end">
                  <Button variant="ghost" size="icon">
                    <Icon name="Edit" size={16} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Icon name="BarChart3" size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
