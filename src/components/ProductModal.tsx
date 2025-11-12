import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, open, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-[50vw] min-h-[60vh] max-h-[80vh] p-6 md:p-8 rounded-2xl bg-[#2f472c] flex flex-col md:flex-row gap-6">
        {/* Left: Product Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[60vh] object-contain rounded-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="flex flex-col md:w-1/2 text-white overflow-hidden">
          {/* Product Name */}
          <h2 className="text-xl md:text-2xl font-bold mb-3">{product.name}</h2>

          {/* Description (scrollable) */}
          <div className="flex-1 overflow-y-auto text-sm md:text-base text-white/90 pr-2">
            {product.description || " "}
          </div>

          {/* Fixed Buy Button */}
          <div className="mt-4 flex justify-center">
            <Button
              onClick={() => window.open(product.link, "_blank")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg"
            >
              BUY NOW
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
