import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return(
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName="text-white"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Arun Rowan
                    </NavLink>
                    <NavLink to="/post"
                    className="inliinflex-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bgv-red-700">
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project"
                    className="inliinflex-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bgv-red-700">
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inliinflex-flex items-center py-6 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bgv-red-700">
                        About Me!
                    </NavLink>
                </nav>

                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://drive.google.com/file/d/1pLnBAyOF7IMN16od6G-KKewGVenYq0Ds/view?usp=share_link" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://github.com/Arunrowan-70" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/arunkumar-r-30b1a01b4/" className="mr-4" target="_blank" fgColor="#fff" style={{height:35,width:35}}/>

                </div>
            </div>
        </header>
    )
}