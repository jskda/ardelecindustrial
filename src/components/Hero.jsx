export default function Hero() {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: 'url(/img/your-hero-image.jpg)'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold max-w-4xl text-center px-4">
          ARDELEC industrial Solutions
        </h1>
      </div>
    </div>
  )
}
