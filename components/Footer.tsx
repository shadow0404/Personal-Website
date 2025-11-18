export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-black/10">
      <div className="max-w-2xl mx-auto">
        <div className="text-sm text-black/40">
          © {new Date().getFullYear()} Anmol Rathi
        </div>
      </div>
    </footer>
  )
}
