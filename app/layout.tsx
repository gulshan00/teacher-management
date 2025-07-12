// 'use client';

// import './globals.css';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { ReactNode } from 'react';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const checkAuth = () => {
//       try {
//         const isAuthenticated = localStorage.getItem('isAuthenticated');
//         const currentPath = window.location.pathname;

//         console.log('Auth check:', { isAuthenticated, currentPath });

//         if (!isAuthenticated || isAuthenticated === 'false') {
//           if (currentPath !== '/login') {
//             router.push('/login');
//           }
//         } else {
//           if (currentPath === '/login') {
//             router.push('/');
//           }
//         }
//       } catch (error) {
//         console.error('Auth check error:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     setTimeout(checkAuth, 100); // Delay to wait for hydration
//   }, [router]);

//   if (isLoading) {
//     return (
//       <html lang="en">
//         <body>
//           <div className="flex items-center justify-center min-h-screen">
//             <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
//           </div>
//         </body>
//       </html>
//     );
//   }

//   return (
//     <html lang="en">
//       <body className="flex">
//         <main className="flex-1 bg-gray-100 min-h-screen">{children}</main>
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const currentPath = window.location.pathname;

    if (!isAuthenticated || isAuthenticated === 'false') {
      if (currentPath !== '/login') {
        router.push('/login');
      }
    } else {
      if (currentPath === '/login') {
        router.push('/');
      }
    }

    setIsLoading(false);
  }, [router, isClient]);

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
        <main className="flex-1 bg-gray-100 min-h-screen">{children}</main>
      </body>
    </html>
  );
}
