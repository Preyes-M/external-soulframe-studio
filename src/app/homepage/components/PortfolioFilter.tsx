'use client';
import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface PortfolioImage {
  id: string;
  category: string;
  src: string;
  alt: string;
  title: string;
}

const portfolioImages: PortfolioImage[] = [
{
  id: 'port_mat_1',
  category: 'maternity',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_13740548c-1767937841542.png",
  alt: 'Expecting mother in white dress standing near window with soft natural lighting',
  title: 'Maternity Elegance'
},
{
  id: 'port_mat_2',
  category: 'maternity',
  src: "https://images.unsplash.com/photo-1704137908075-e9e659f9ec43",
  alt: 'Pregnant woman in flowing pink gown outdoors with golden hour lighting',
  title: 'Golden Hour Maternity'
},
{
  id: 'port_kids_1',
  category: 'kids',
  src: "https://images.unsplash.com/photo-1622288664652-96211d818e8b",
  alt: 'Toddler in blue denim overalls laughing with colorful balloons',
  title: 'Joyful Moments'
},
{
  id: 'port_kids_2',
  category: 'kids',
  src: "https://images.unsplash.com/photo-1626691555009-8730512fb8d2",
  alt: 'Young child in yellow dress sitting on wooden floor with toys',
  title: 'Playful Innocence'
},
{
  id: 'port_kids_3',
  category: 'kids',
  src: "https://images.unsplash.com/photo-1733759348560-c774faca9b39",
  alt: 'Baby in white onesie lying on soft blanket with smile',
  title: 'Precious First Moments'
},
{
  id: 'port_fashion_1',
  category: 'fashion',
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_113209b2b-1765518970060.png",
  alt: 'Fashion model in red evening gown posing against white studio backdrop',
  title: 'Haute Couture'
},
{
  id: 'port_fashion_2',
  category: 'fashion',
  src: "https://images.unsplash.com/photo-1691447442210-96fa18ef9f93",
  alt: 'Male model in black suit with dramatic studio lighting',
  title: 'Editorial Fashion'
},
{
  id: 'port_product_1',
  category: 'product',
  src: "https://images.unsplash.com/photo-1700422626723-c6276ef5b47a",
  alt: 'Luxury watch on marble surface with dramatic lighting',
  title: 'Product Excellence'
},
{
  id: 'port_product_2',
  category: 'product',
  src: "https://images.unsplash.com/photo-1680726231110-8507cf457ef1",
  alt: 'Wireless headphones on white background with soft shadows',
  title: 'Tech Products'
},
{
  id: 'port_product_3',
  category: 'product',
  src: "https://images.unsplash.com/photo-1620115245672-8ebe8d671170",
  alt: 'Red sneakers on reflective surface with studio lighting',
  title: 'Footwear Photography'
}];


const categories = [
{ id: 'cat_all', value: 'all', label: 'All' },
{ id: 'cat_maternity', value: 'maternity', label: 'Maternity' },
{ id: 'cat_kids', value: 'kids', label: 'Kids' },
{ id: 'cat_fashion', value: 'fashion', label: 'Fashion' },
{ id: 'cat_product', value: 'product', label: 'Product' }];


export default function PortfolioFilter() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredImages =
  activeFilter === 'all' ?
  portfolioImages :
  portfolioImages.filter((img) => img.category === activeFilter);

  return (
    <div className="space-y-8">
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) =>
        <button
          key={category.id}
          onClick={() => setActiveFilter(category.value)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
          activeFilter === category.value ?
          'bg-primary text-primary-foreground shadow-lg scale-105' :
          'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'}`
          }>
          
            {category.label}
          </button>
        )}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) =>
        <div
          key={image.id}
          className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-zoom-in"
          style={{ animationDelay: `${index * 50}ms` }}>
          
            <AppImage
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover grayscale-hover group-hover:scale-110 transition-all duration-500" />
          
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <h3 className="text-white font-semibold text-lg">{image.title}</h3>
            </div>
          </div>
        )}
      </div>
    </div>);

}