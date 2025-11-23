export default function ServiceBlock({ icon, title, description, link }) {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-6 border rounded shadow-sm hover:shadow-md transition">
      <img src={icon} alt={`${title} icon`} className="w-12 h-12"/>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        {link && <a href={link} className="text-primary hover:underline">View More</a>}
      </div>
    </div>
  )
}
