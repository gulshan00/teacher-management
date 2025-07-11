// 'use client';
// import './globals.css';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { ReactNode } from 'react';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const router = useRouter();

//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem('isAuthenticated');
//     const currentPath = window.location.pathname;

//     if (!isAuthenticated && currentPath !== '/login') {
//       router.push('/login');
//     }

//     if (isAuthenticated && currentPath === '/login') {
//       router.push('/');
//     }
//   }, []);

//   return (
//     <html lang="en">
//       <body className="flex">
//         <main className="flex-1 bg-gray-100 min-h-screen">
//           {children}
//         </main>
//       </body>
//     </html>
//   );
// }



'use client';
import './globals.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a small delay to ensure localStorage is accessible
    const checkAuth = () => {
      try {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const currentPath = window.location.pathname;
        
        console.log('Auth check:', { isAuthenticated, currentPath });
        
        if (!isAuthenticated && currentPath !== '/login') {
          router.push('/login');
        } else if (isAuthenticated === 'true' && currentPath === '/login') {
          router.push('/');
        }
      } catch (error) {
        console.error('Auth check error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Small delay to ensure client-side hydration
    setTimeout(checkAuth, 100);
  }, [router]);

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <html lang="en">
        <body>
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body className="flex">
        <main className="flex-1 bg-gray-100 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}