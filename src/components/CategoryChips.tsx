import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface CategoryChipsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryChips({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryChipsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      <Button
        variant={activeCategory === 'all' ? 'default' : 'outline'}
        className={`flex-shrink-0 gap-2 ${
          activeCategory === 'all'
            ? 'gradient-primary text-white border-0'
            : 'border-border/50 hover:border-primary'
        }`}
        onClick={() => onCategoryChange('all')}
      >
        <Icon name="Sparkles" size={16} />
        Все
      </Button>

      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'default' : 'outline'}
          className={`flex-shrink-0 ${
            activeCategory === category
              ? 'gradient-primary text-white border-0'
              : 'border-border/50 hover:border-primary'
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
