'use client';

import { Eye } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface ProjectImagesProps {
  images: string[];
  projectTitle: string;
}

export function ProjectImages({ images, projectTitle }: ProjectImagesProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Imagens do Projeto</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-video group">
            <Image
              src={image}
              alt={`${projectTitle} screenshot ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
            <div
              className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Eye className="w-8 h-8 text-white" />
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] w-full p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative max-w-full max-h-[85vh] w-auto h-auto">
                <Image
                  src={selectedImage}
                  alt="Preview"
                  width={1920}
                  height={1080}
                  className="object-contain rounded-lg"
                  quality={100}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
