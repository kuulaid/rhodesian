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
      <DialogContent className="min-w-[50vw] min-h-[60vh] w-full max-h-[70vh] p-6 md:p-8 rounded-2xl bg-[#2f472c]">
        <div className="flex flex-col md:flex-row gap-6 h-full">
          {/* Left: Product Image */}
          <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center h-full">
            <img
              src={product.image}
              alt={product.name}
              className="h-full object-cover rounded-lg"
            />
          </div>

          {/* Right: Name, Description, Buy Button */}
          <div className="flex flex-col justify-between flex-1 md:w-1/2 text-white h-full">
            {/* Name */}
            <h2 className="text-xl md:text-2xl font-bold mb-4">{product.name}</h2>

            {/* Scrollable Description */}
            <div className="overflow-y-auto text-sm md:text-base text-white/90 mb-4 h-[calc(100%-4rem)]">
              {product.description || " "} {/* empty space if no description */}
            </div>

            {/* Buy Button */}
            <div>
              <Button
                onClick={() => window.open(product.link, "_blank")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg"
              >
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
