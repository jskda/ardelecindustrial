export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-12 text-center text-gray-600 text-sm">
      <p>ARDELEC © 2025. All Rights Reserved.</p>
      <div className="flex justify-center space-x-6 mt-4 text-xl">
        <a href="http://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-primary">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="http://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-primary">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="http://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="Linkedin" className="hover:text-primary">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  )
}
