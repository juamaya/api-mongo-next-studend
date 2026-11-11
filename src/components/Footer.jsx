
"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-slate-900 via-indigo-950 to-slate-900 text-white mt-16">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* LOGO */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">
                            Student<span className="text-indigo-400">Manager</span>
                        </h2>

                        <p className="text-slate-400 text-sm leading-6">
                            Manage your students easily and efficiently.
                            A simple application built with Next.js and MongoDB.
                        </p>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Navigation
                        </h3>

                        <ul className="flex flex-col gap-3 text-slate-400 text-sm">
                            <li>
                                <Link href="/" className="hover:text-indigo-400 transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link href="/create" className="hover:text-indigo-400 transition">
                                    Create Student
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* TECHNOLOGIES */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Technologies
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "React", "MongoDB", "Tailwind CSS"].map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-slate-800 text-indigo-300 px-3 py-2 rounded-lg text-xs font-medium border border-slate-700"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">

                    <p className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Juamaya26. All rights reserved.
                    </p>

                    <p className="text-slate-500 text-xs">
                        Developed with ❤️ using Next.js
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;
