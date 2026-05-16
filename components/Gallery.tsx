import React from "react";

const Gallery = () => {
  return (
    <div className="bg-base-100 py-8 sm:py-16 lg:py-24 px-24">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-4 text-center sm:mb-16 lg:mb-24">
          <h2 className="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">
            <span className="relative z-1 font-bold">
              Explore our
              <span
                className="from-primary absolute inset-s-0 bottom-1 -z-1 h-0.5 w-full bg-linear-to-r to-transparent to-80%"
                aria-hidden="true"
              ></span>
            </span>{" "}
            Gallery
          </h2>
          <p className="text-base-content/80 text-xl">
            Explore our gallery to learn more about our amazing products and
            their features.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-8.png"
              alt="Coastal cliffs and ocean view"
              className="rounded-box aspect-5/4 min-h-121.75 object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-9.png"
              alt="Silhouettes on beach"
              className="rounded-box aspect-5/4 min-h-57.75 object-cover"
            />
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-10.png"
              alt="Snowy mountain peaks"
              className="rounded-box aspect-5/4 min-h-57.75 object-cover"
            />
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-11.png"
              alt="Rolling green hills"
              className="rounded-box aspect-5/4 min-h-57.75 object-cover"
            />
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-12.png"
              alt="Sunset landscape"
              className="rounded-box aspect-5/4 min-h-57.75 object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-13.png"
              alt="Silhouettes on beach"
              className="rounded-box aspect-5/4 min-h-57.75 object-cover"
            />
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-14.png"
              alt="Snowy mountain peaks"
              className="rounded-box aspect-5/4 min-h-57.75 object-cover"
            />
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-15.png"
              alt="Rolling green hills"
              className="rounded-box aspect-5/4 min-h-57.75 object-cover"
            />
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-16.png"
              alt="Sunset landscape"
              className="rounded-box aspect-5/4 min-h-57.75 object-cover"
            />
          </div>
          <div>
            <img
              src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/gallery/gallery-17.png"
              alt="Coastal cliffs and ocean view"
              className="rounded-box aspect-5/4 min-h-121.75 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
