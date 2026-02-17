import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top border */}
        <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 h-px bg-dark-border" />

        {/* Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-sm text-gray-500">
            © 2025 Aditya Kankarwal. All rights reserved.
          </p>
          
          <p className="flex items-center gap-2 text-sm text-gray-500">
            Designed & Built with
            <Heart className="w-4 h-4 text-accent fill-accent" />
            and passion
          </p>
        </div>
      </div>
    </footer>
  );
}
