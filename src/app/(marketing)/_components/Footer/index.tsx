import Icons from "@/components/global/icons";
import { Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import GithubLogo from '@/public/images/svg/Github-Logo.svg';
import InstagramLogo from '@/public/images/svg/Instagram-Logo.svg';
import LinkedinLogo from '@/public/images/svg/LinkedIn-Logo.svg';
import TiktokLogo from '@/public/images/svg/Tiktok-Logo.svg';
import TwitterLogo from '@/public/images/svg/X-Twitter-Logo.svg';
import YouTubeLogo from '@/public/images/svg/Youtube-Logo.svg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative bg-bg-default text-white">
            <div className="absolute -top-1/3 -right-1/4 lg:block bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
            <div className="absolute bottom-0 -left-1/4 lg:block bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <div className="px-4 py-8 lg:px-6 lg:py-16 max-w-6xl mx-auto">
                <nav className="mb-8 flex justify-center space-x-6">
                    <Link href="/discord" className="transition-colors hover:text-purple-600">Discord</Link>
                    <Link href="/contact" className="transition-colors hover:text-purple-600">Contact Me</Link>
                    <Link href="/hire" className="transition-colors hover:text-purple-600">Hire Me</Link>
                    <Link href="/shop" className="transition-colors hover:text-purple-600">Shop</Link>
                </nav>
               
            

                <div className="mt-16 grid gap-8 xl:grid-cols-3 xl:gap-8">
                    <div className="flex flex-col items-start md:max-w-[200px]">
                        <Icons.logo className="w-7 h-7" />
                        <p className="text-muted-foreground mt-4 text-sm">
                            AI Healthcare Platform
                        </p>
                        <span className="mt-4 text-fuchsia-400 text-sm flex items-center">
                            Get Super Personalized Healthcare reports with AI✨🩷
                            <Heart className="w-3.5 h-3.5 ml-1 fill-primary text-primary" />
                        </span>
                    </div>

                    <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-white">Product</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                <li className="mt-2"><Link href="/dashboard" className="hover:text-foreground transition-all duration-300">Dashboard</Link></li>
                                    <li className="mt-2"><Link href="/dashboard" className="hover:text-foreground transition-all duration-300">Features</Link></li>
                                    <li className="mt-2"><Link href="/pricing" className="hover:text-foreground transition-all duration-300">Pricing</Link></li>
                                    <li className="mt-2"><Link href="/dashboard" className="hover:text-foreground transition-all duration-300">Testimonials</Link></li>
                                    <li className="mt-2"><Link href="/dashboard" className="hover:text-foreground transition-all duration-300">Integration</Link></li>
                            
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">Integrations</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">Facebook</Link></li>
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">Instagram</Link></li>
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">Twitter</Link></li>
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">LinkedIn</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-base font-medium text-white">Resources</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">Blog</Link></li>
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">Case Studies</Link></li>
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">Support</Link></li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">Company</h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">About Us</Link></li>
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">Privacy Policy</Link></li>
                                    <li className="mt-2"><Link href="" className="hover:text-foreground transition-all duration-300">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 flex items-center justify-between">
                    <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} NEXAURA.AI AI INC. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
