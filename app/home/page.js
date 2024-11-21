"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const images = [
    '/upload/insta/Image 8.png',
    '/upload/insta/Image 9.png',
    '/upload/insta/Image 10.png',
    '/upload/insta/Image 11.png',
    '/upload/insta/Image 12.png',
    '/upload/insta/Image 13.png',
    '/upload/insta/Image 14.png',
    '/upload/insta/Image 15.png',
    '/upload/insta/Image 16.png',
    '/upload/insta/Image 17.png',
    '/upload/insta/Image 18.png',
    '/upload/insta/Image 19.png',
  ];

export default function page() {
    const [selected, setSelected] =  useState("Best-sellers"); 

    const toggleButton = (button) => {
         setSelected(button); 
    };

  return (
    <div className="flex-col justify-center items-center">
        <div className="flex justify-center items-center">
            <div className="flex-1 justify-center items-center my-5 ml-20" >
            <Image
                src="/upload/Image2.png"
                alt="Description of the image"
                width={100}  
                height={150} 
            />
            </div>
            <div className="flex flex-1 justify-center items-center gap-2">
            <Button variant="ghost">Shop</Button>
            <Button variant="ghost">Offers</Button>
            <Button variant="ghost">Our story</Button>
            <Button variant="ghost">Blog</Button>
            </div>
            <div className="flex flex-1 gap-3">
            <div className="flex justify-center items-center relative">
                <Search className="w-5 absolute left-2 "/>
                <Input/>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <ShoppingCart />
                <Button variant="ghost">Cart (0)</Button>
                <Button variant="ghost"><User /></Button>
            </div>
            </div>
        </div>  
        <div className="h-[650px] bg-[url('/upload/Image1.png')] bg-cover bg-center flex justify-center items-center" style={{width:'100%'}}>
            <div className="" style={{
            width:'80%'
            }}>
            <p className="text-6xl">Gift for your skin</p>
            <p className="text-1xl">Aliquip fugiat ipsum nostrud ex et eu incididunt</p>
            <p className="text-1xl">quis minim dolore excepteur voluptate</p>
            <Button className="my-5">Shop Now</Button>
            </div>
        </div>
        <div>
        <div className="flex-col justify-items-center contents-center mt-20">
            <div className="p-8 flex-col justify-items-center contents-center">
                <h2 className="text-4xl font-bold">Our Products</h2>
                <div className="flex justify-center items-center mt-10">
                <button
                    onClick={() => toggleButton("Best-sellers")}
                    className={`px-10 py-3 rounded-md shadow-none ${
                        selected === "Best-sellers"
                            ? "bg-[#00BDD6] text-white"
                            : "bg-[#FFF] text-[#00BDD6]"
                    } hover:bg-[#00BDD6] hover:text-white`}
                >
                    Best-sellers
                </button>
                <button
                    onClick={() => toggleButton("New products")}
                    className={`px-10 py-3 rounded-md shadow-none ${
                        selected === "New products"
                            ? "bg-[#00BDD6] text-white"
                            : "bg-[#FFF] text-[#00BDD6]"
                    } hover:bg-[#00BDD6] hover:text-white`}
                >
                    New products
                </button>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 p-8" style={{
                width:'90%',
                margin: '0 auto',
            }}>
                <Button className="h-200" variant="ghost">
                    <div className="bg-white rounded-lg relative flex-cols">
                        <Button className="bg-[#8353E2] absolute right-2 top-2 rounded-full px-2 py-0 text-xs">Best-seller</Button>
                        <Image src="/upload/Image20.png" alt="Product 1" width={300} height={200} />
                        <h3 className="text-xl font-bold mt-2 text-left">Product Title 1</h3>
                        <p className="text-gray-600 text-left">Deserunt non fugiat aute cons</p>
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex gap-1 justify-center items-center">
                                <span className="text-xl font-bold">$32</span>
                                <span className="text-sx font-bold line-through text-[#b1b1b1]">$22</span>  
                            </div>
                            <Button variant="ghost">
                                <Image src="/upload/Button13.png" width={50} height={50}/>
                            </Button>
                        </div>
                    </div>
                </Button>

                <Button className="h-200" variant="ghost">
                    <div className="bg-white rounded-lg relative flex-cols">
                        <Button className="bg-[#8353E2] absolute right-2 top-2 rounded-full px-2 py-0 text-xs">Best-seller</Button>
                        <Image src="/upload/Image21.png" alt="Product 1" width={300} height={200} />
                        <h3 className="text-xl font-bold mt-2 text-left">Product Title 2</h3>
                        <p className="text-gray-600 text-left">Deserunt non fugiat aute cons</p>
                        <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-1 justify-center items-center">
                            <span className="text-xl font-bold">$22</span>
                            <span className="text-sx font-bold line-through text-[#b1b1b1]">$22</span>  
                        </div>
                            <Button variant="primary">
                                <Image src="/upload/Button13.png" width={50} height={50}/>
                            </Button>
                        </div>
                    </div>
                </Button>

                <Button className="h-200" variant="ghost">
                    <div className="bg-white rounded-lg relative flex-cols">
                        <Button className="bg-[#8353E2] absolute right-2 top-2 rounded-full px-2 py-0 text-xs">Best-seller</Button>
                        <Image src="/upload/Image22.png" alt="Product 1" width={300} height={200} />
                        <h3 className="text-xl font-bold mt-2 text-left">Product Title 3</h3>
                        <p className="text-gray-600 text-left">Deserunt non fugiat aute cons</p>
                        <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-1 justify-center items-center">
                            <span className="text-xl font-bold">$32</span>
                            <span className="text-sx font-bold line-through text-[#b1b1b1]">$22</span>  
                        </div>
                            <Button variant="primary">
                                <Image src="/upload/Button13.png" width={50} height={50}/>
                            </Button>
                        </div>
                    </div>
                </Button>

                <Button className="h-200" variant="ghost">
                    <div className="bg-white rounded-lg relative flex-cols">
                        <Button className="bg-[#8353E2] absolute right-2 top-2 rounded-full px-2 py-0 text-xs">Best-seller</Button>
                        <Image src="/upload/Image23.png" alt="Product 1" width={300} height={200} />
                        <h3 className="text-xl font-bold mt-2 text-left">Product Title 4</h3>
                        <p className="text-gray-600 text-left">Deserunt non fugiat aute cons</p>
                        <div className="flex justify-between items-center mt-4">
                        <div className="flex gap-1 justify-center items-center">
                            <span className="text-xl font-bold">$32</span>
                            <span className="text-sx font-bold line-through text-[#b1b1b1]">$22</span>  
                        </div>
                            <Button variant="primary">
                                <Image src="/upload/Button13.png" width={50} height={50}/>
                            </Button>
                        </div>
                    </div>
                </Button>
            </div>
        </div>
        <div className="flex-col justify-items-center contents-center mt-20">
            <div className="flex justify-center items-center relative " style={{width:'85%'}}>
                <p className="text-4xl font-bold">Event promotion</p>
                <Button variant="link" className="text-[#00BDD8] absolute right-0">See all</Button>
            </div>
                <div className="grid grid-cols-2 gap-10 p-8" style={{
                        width:'90%',
                        margin: '0 auto',
                    }}>
                    <div className="h-[300px] bg-[url('/upload/Image3.png')] bg-cover bg-center flex justify-start items-center pl-6" style={{width:'100%'}}>
                        <div  style={{
                            width:'50%'
                        }}>
                            <p className="text-3xl font-bold leading-10">Relaxing & Pampering</p>
                            <p className="text-1xl leading-9">Pariatur ad nisi ex tempor ea</p>
                            <Button className="my-5 px-10 bg-[#00BDD6]">Explore</Button>
                        </div>
                    </div>
                    <div className="h-[300px] bg-[url('/upload/Image4.png')] bg-cover bg-center flex justify-start items-center pl-6" style={{width:'100%'}}>
                        <div  style={{
                            width:'35%'
                        }}>
                            <p className="text-3xl font-bold leading-10">Smooth & Bright Skin</p>
                            <p className="text-1xl leading-9">Pariatur ad nisi ex tempor ea</p>
                            <Button className="my-5 px-10 bg-[#00BDD6]">Explore</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-col justify-items-center contents-center mt-20">
            <div className="flex justify-center items-center relative " style={{width:'85%'}}>
                <p className="text-4xl font-bold">Our story</p>
                <Button variant="link" className="text-[#00BDD8] absolute right-0">See all</Button>
            </div>
            <div className="h-[650px] bg-[url('/upload/Image7.png')] bg-cover bg-center flex justify-center items-center mt-8 relative" style={{width:'100%'}}>
                <Button className="py-2 absolute bottom-10 right-20">Watch video <Play/></Button>
            </div> 
        </div>
        <div className="flex justify-center items-center max-w-8xl mx-auto p-6 mt-20">
            <div className="mb-8 flex-col contents-center" style={{height:250}}>
                <div>
                    <h2 className="text-3xl font-bold">Read what’s new</h2>
                    <p className="text-gray-600">
                    Sint consequat in ipsum irure adipisicing dolore culpa incididunt. Veniam elit magna anim ipsum eiusmod eu.
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-blue-500 font-semibold">Explore more</button>
                    <button className="text-gray-400 p-2 rounded-full hover:bg-gray-200">
                        ←
                    </button>
                    <button className="text-gray-400 p-2 rounded-full hover:bg-gray-200">
                        →
                    </button>
                </div>
            </div>
        
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <div className="w-[300px] rounded-lg shadow-lg border p-4">
                        <img 
                        src="/upload/Image 5.png" 
                        alt="Product 1" 
                        className="h-40 w-full object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-lg mb-2">Anim sint Lorem excepteur commodo</h3>
                        <p className="text-gray-500 text-sm">Oct 12, 2022</p>
                    </div>
                    <div className="w-[300px] rounded-lg shadow-lg border p-4">
                        <img 
                        src="/upload/Image 6.png" 
                        alt="Product 2" 
                        className="h-40 w-full object-cover rounded-lg mb-4"
                        />
                        <h3 className="font-semibold text-lg mb-2">Adipisicing elit proident in elit magna deser</h3>
                        <p className="text-gray-500 text-sm">Oct 12, 2022</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-8xl mx-auto p-6 mt-20" style={{width:'90%'}}>
            {/* Title Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">Instagram</h2>
                <p className="text-gray-500">@yourinstagram_official</p>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-6 gap-4">
                {images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                    <img 
                    src={image} 
                    alt={`Instagram image ${index + 1}`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
                ))}
            </div>
        </div>
        <footer className="bg-gray-900 text-gray-400 py-12" >
            <div className="max-w-7xl mx-auto px-6">
                {/* Top Footer Content */}
                <div className="grid grid-cols-4 gap-8 mb-12">
                {/* About Section */}
                <div>
                    <h3 className="text-white font-semibold mb-4">About</h3>
                    <ul>
                    <li className="mb-2 hover:text-white cursor-pointer">Home</li>
                    <li className="mb-2 hover:text-white cursor-pointer">Shop</li>
                    <li className="mb-2 hover:text-white cursor-pointer">Our story</li>
                    <li className="mb-2 hover:text-white cursor-pointer">Blogs</li>
                    {/* Language Selector */}
                    <div className="mt-4">
                        <select className="bg-gray-800 text-gray-400 py-2 px-4 rounded">
                        <option>English</option>
                        <option>Español</option>
                        <option>Français</option>
                        </select>
                    </div>
                    </ul>
                </div>

                {/* Help Section */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Help</h3>
                    <ul>
                    <li className="mb-2 hover:text-white cursor-pointer">Shipping & Returns</li>
                    <li className="mb-2 hover:text-white cursor-pointer">Track Order</li>
                    <li className="mb-2 hover:text-white cursor-pointer">FAQs</li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact</h3>
                    <ul>
                    <li className="mb-2">Phone: <a href="tel:+11234567893" className="hover:text-white">(+1) 123 456 7893</a></li>
                    <li className="mb-2">Email: <a href="mailto:name@email.com" className="hover:text-white">name@email.com</a></li>
                    </ul>
                </div>

                {/* Subscription Section */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Receive new promotions</h3>
                    <p className="text-gray-500 mb-4">Duis ea tempor commodo amet reprehende</p>
                    <div className="flex mb-4">
                    <input 
                        type="email" 
                        placeholder="Input your email" 
                        className="w-full px-4 py-2 rounded-l bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
                        Subscribe
                    </button>
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaYoutube /></a>
                    </div>
                </div>
                </div>

                {/* Bottom Footer Content */}
                <div className="border-t border-gray-700 pt-6 flex justify-between items-center text-gray-500 text-sm">
                <p>© 2022 Brand, Inc.</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-white">Privacy</a>
                    <a href="#" className="hover:text-white">Terms</a>
                    <a href="#" className="hover:text-white">Sitemap</a>
                </div>
                </div>
            </div>
        </footer>
    </div>
  );
}
