interface ProductCardProps {
  name: string;
  image: string;
}
export function ProductCard({
  name,
  image
}: ProductCardProps) {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group">
      <div className="bg-[#2f472c] h-64 flex items-center justify-center p-6">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">{name}</h3>
      </div>
    </div>;
}