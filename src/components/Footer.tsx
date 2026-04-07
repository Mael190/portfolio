export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-slate-800">
              maël<span className="text-primary-500">.</span>dev
            </span>
          </div>
          <p className="text-sm text-slate-400">
            © {currentYear} Maël. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-primary-600 transition-colors"
            >
              Haut de page ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
