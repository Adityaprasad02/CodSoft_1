import React from 'react';

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-extrabold text-white text-center">Login</h2>
                <form className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className="mb-4">
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A1 1 0 0017.997 4H2.003a1 1 0 00-.956 1.884zM18 8.118l-8 4-8-4V14a1 1 0 001 1h14a1 1 0 001-1V8.118z" />
                                    </svg>
                                </span>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-3 pl-10 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md bg-gray-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 4a4 4 0 00-4 4v2H5a1 1 0 000 2h10a1 1 0 100-2h-1V8a4 4 0 00-4-4zm0 2a2 2 0 00-2 2v2h4V8a2 2 0 00-2-2z" clipRule="evenodd" />
                                        <path fillRule="evenodd" d="M4 10v6a2 2 0 002 2h8a2 2 0 002-2v-6H4zm4 4a1 1 0 112-0 1 1 0 01-2 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-3 pl-10 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-b-md bg-gray-700 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-orange-500 group-hover:text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 102 0V7zm-1 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
