import Image from "next/image"

const images = [
  {
    src: "/images/gallery/1.jpg",
    alt: "Image 1",
    caption: "Add your caption here",
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "Image 2",
    caption: "Add your caption here",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "Image 3",
    caption: "Add your caption here",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "Image 4",
    caption: "Add your caption here",
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "Image 5",
    caption: "Add your caption here",
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "Image 6",
    caption: "Add your caption here",
  },
]

export default function Gallery() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-center">Moments</h2>
        <p className="text-center text-black/50 mb-20 max-w-2xl mx-auto">
          Work is abstract. These are real.
        </p>
        
        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] bg-black/5 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="mt-3 text-sm text-black/50 group-hover:text-black transition-colors">
                {image.caption}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-black/40 italic">
            Place your images in /public/images/gallery/ (1.jpg, 2.jpg, etc.)
          </p>
        </div>
      </div>
    </section>
  )
}

