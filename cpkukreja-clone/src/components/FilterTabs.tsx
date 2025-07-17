'use client';

interface FilterTabsProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function FilterTabs({ categories, selectedCategory, onSelectCategory }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-black text-white'
              : 'bg-white text-black border border-gray-300 hover:bg-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
