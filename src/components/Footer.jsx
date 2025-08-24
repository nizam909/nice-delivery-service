export default function Footer() {
    return (
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-8 grid gap-4 sm:flex sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} Nice Delivery Service. All rights reserved.
          </p>
          <div className="text-sm text-slate-500">
            Fast • Reliable • Pan-India
          </div>
        </div>
      </footer>
    );
  }
  