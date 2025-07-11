// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem('isAuthenticated');
//     if (isAuthenticated === 'true') {
//       router.push('/');
//     }
//   }, []);

//   const handleLogin = () => {
//     if (email === 'admin@gmail.com' && phone === '7894561230') {
//       localStorage.setItem('isAuthenticated', 'true');
//       router.push('/');
//     } else {
//       setError('Invalid email or phone number');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
//         <h2 className="text-2xl text-black font-bold mb-4 text-center">Login</h2>
//         {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 mb-4 border text-black border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="w-full p-2 mb-4 border text-black border-gray-300 rounded"
//         />
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }




// 'use client';
// import { useState, useEffect } from 'react';
// import { Mail, Phone, Shield } from 'lucide-react';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [error, setError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   // For demo purposes - in real Next.js app, you'd use: const router = useRouter();
//   const router = {
//     push: (path) => {
//       console.log(`Navigating to ${path}`);
//       // In a real app, this would actually navigate
//       window.location.href = path;
//     }
//   };

//   useEffect(() => {
//     // Check if user is already logged in
//     const isAuthenticated = localStorage.getItem('isAuthenticated');
//     if (isAuthenticated === 'true') {
//       router.push('/');
//     }
//   }, []);

//   const handleLogin = async () => {
//     setIsLoading(true);
//     setError('');
    
//     // Simulate API call delay
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     if (email === 'admin@gmail.com' && phone === '7894561230') {
//       // Set authentication in localStorage
//       localStorage.setItem('isAuthenticated', 'true');
//       localStorage.setItem('userEmail', email);
//       console.log('Authentication successful');
      
//       // Show success message
//       alert('Login successful! Welcome back.');
      
//       // In a real app, this would redirect to dashboard
//       // For demo, we'll just show success
//       setError(''); // Clear any previous errors
//     } else {
//       setError('Invalid email or phone number. Please check your credentials.');
//     }
    
//     setIsLoading(false);
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleLogin();
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
//       </div>

//       <div className="relative w-full max-w-md">
//         {/* Main login card */}
//         <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
//               <Shield className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
//             <p className="text-gray-600">Please sign in to your account</p>
//           </div>

//           {/* Error message */}
//           {error && (
//             <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
//               <p className="text-red-700 text-sm">{error}</p>
//             </div>
//           )}

//           {/* Demo credentials info */}
//           <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
//             <p className="text-blue-700 text-sm font-medium mb-1">Demo Credentials:</p>
//             <p className="text-blue-600 text-xs">Email: admin@gmail.com</p>
//             <p className="text-blue-600 text-xs">Phone: 7894561230</p>
//           </div>

//           {/* Form */}
//           <div className="space-y-6">
//             {/* Email field */}
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
//                 />
//               </div>
//             </div>

//             {/* Phone field */}
//             <div className="relative">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Phone Number
//               </label>
//               <div className="relative">
//                 <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <input
//                   type="tel"
//                   placeholder="Enter your phone number"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
//                 />
//               </div>
//             </div>

//             {/* Login button */}
//             <button
//               onClick={handleLogin}
//               disabled={isLoading}
//               className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                   Signing in...
//                 </div>
//               ) : (
//                 'Sign In'
//               )}
//             </button>
//           </div>

//           {/* Footer */}
//           <div className="mt-8 text-center">
//             <p className="text-sm text-gray-600">
//               Protected by end-to-end encryption
//             </p>
//           </div>
//         </div>

//         {/* Additional info */}
//         <div className="text-center mt-6">
//           <p className="text-sm text-gray-500">
//             Having trouble signing in? Contact support
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';
import { useState, useEffect } from 'react';
import { Mail, Phone,  Shield } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  // const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // For demo purposes - in real Next.js app, you'd use: const router = useRouter();
  const router = {
    push: (path) => {
      console.log(`Navigating to ${path}`);
      // Force page reload to trigger layout authentication check
      window.location.href = path;
    }
  };

  useEffect(() => {
    // Check if user is already logged in
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'true') {
      router.push('/dashboard');
    }
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);
    setError('');
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'admin@gmail.com' && phone === '7894561230') {
      // Set authentication in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
      console.log('Authentication successful');
      
      // Clear any previous errors
      setError('');
      
      // Force immediate redirect with page reload to ensure layout sees the auth change
      setTimeout(() => {
        window.location.replace('/');
      }, 500);
    } else {
      setError('Invalid email or phone number. Please check your credentials.');
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Main login card */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Please sign in to your account</p>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* Demo credentials info */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
            <p className="text-blue-700 text-sm font-medium mb-1">Demo Credentials:</p>
            <p className="text-blue-600 text-xs">Email: admin@gmail.com</p>
            <p className="text-blue-600 text-xs">Phone: 7894561230</p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Phone field */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Login button */}
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Protected by end-to-end encryption
            </p>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Having trouble signing in? Contact support
          </p>
        </div>
      </div>
    </div>
  );
}