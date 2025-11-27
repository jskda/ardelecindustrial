export default function Title({ title, image }) {
  return (
    <section
      className="
      relative 
      w-full 
      bg-neutral-100 
      pt-48 
      md:pt-60 
      lg:pt-80 
      pb-20 
      overflow-hidden 
      bg-cover 
      bg-center"
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
      }}
    >
      <div className="container mx-auto max-w-[1320px] px-6 relative">
        <div className="relative mb-8">
          <div
            className="
              absolute 
              top-10 
              w-[200vw]
              bg-white 
              skew-x-[-45deg]
              py-4
              pl-10
              left-[50vw]"
          >
            <h1
              className="
                block 
                skew-x-45 
                text-gray-800 
                font-semibold 
                text-[24px] 
                leading-none 
                whitespace-nowrap
              "
            >
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}