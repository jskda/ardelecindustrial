export default function Title({ title, image }) {
  return (
    <section
      className="relative w-full bg-neutral-100 pt-100 pb-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
      }}
    >
      <div className="container mx-auto max-w-[1320px] px-4 relative">
        <div className="relative mb-8">
          <div
            className="
              absolute 
              top-6 
              left-200 
              w-[120%]
              bg-white 
              skew-x-[-45deg]
              py-4
              pl-10
            "
          >
            <span
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
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}