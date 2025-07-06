'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentMeme, setCurrentMeme] = useState(0);
  const [showExplosion, setShowExplosion] = useState(false);

  const memes = [
    "/6b5358e969ad1406e226e85b20ff6786.jpg",
    "/biaoqing.jpeg",
    "/ef03f514eea822f92ce94190ea5ea705.jpg",
    "/f0288cd0f6877716bf3b2e8a6dc10a0d.jpg",
    "/zerek-pandajak-v0-m9ynw51akicc1.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMeme((prev) => (prev + 1) % memes.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [memes.length]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setShowExplosion(true);
    setTimeout(() => setShowExplosion(false), 1000);
  };

  return (
    <div className="min-h-screen bg-red-600 overflow-hidden">
      {/* Floating Memes Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 animate-bounce">
          <Image src="/biaoqing (1).jpeg" alt="meme" width={60} height={60} className="rounded-full opacity-70" />
        </div>
        <div className="absolute top-32 right-20 animate-pulse">
          <Image src="/Shiyu-Huang-13.png" alt="meme" width={80} height={80} className="rounded-full opacity-60" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-spin">
          <Image src="/e7ef901e856b21dd2b5ad9e50ea8591265d901be_full.jpg" alt="meme" width={70} height={70} className="rounded-full opacity-50" />
        </div>
        <div className="absolute top-1/2 right-10 animate-bounce delay-300">
          <Image src="/1da5dfe4-6f1d-4176-a39a-30955308e443-1680924516127.jpg" alt="meme" width={90} height={90} className="rounded-full opacity-40" />
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src="/6b5358e969ad1406e226e85b20ff6786.jpg" alt="logo" width={50} height={50} className="rounded-full animate-spin" />
          <span className="text-white font-bold text-xl">CHINA TAKEOVER 🇨🇳</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#buy" className="text-white hover:text-red-200 transition-colors font-semibold">BUY NOW</a>
          <a href="#community" className="text-white hover:text-red-200 transition-colors font-semibold">COMMUNITY</a>
        </nav>
      </header>

      {/* Banner Section */}
      <section className="relative z-10 py-8">
        <div className="container mx-auto px-4 text-center">
          <Image 
            src="/chinese-takeover-banner.svg" 
            alt="Chinese Takeover Banner" 
            width={800} 
            height={200} 
            className="mx-auto animate-pulse hover:animate-bounce transition-all duration-300 shadow-2xl rounded-lg"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-black text-white mb-6 animate-pulse">
            🇨🇳 CHINESE WILL TAKEOVER 🇨🇳
          </h1>
          <h2 className="text-3xl font-bold text-red-200 mb-8 animate-bounce">
            THE ULTIMATE MEME REVOLUTION!
          </h2>
          
          {/* Rotating Meme Display */}
          <div className="relative mx-auto w-96 h-96 mb-8">
            <div className="absolute inset-0 animate-spin">
              <Image 
                src={memes[currentMeme]} 
                alt="rotating meme" 
                width={384} 
                height={384} 
                className="rounded-full border-8 border-red-300 shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-bounce">🚀</div>
            </div>
          </div>

          <p className="text-2xl text-white mb-8 max-w-4xl mx-auto">
            The most EPIC meme coin on the blockchain! Join the revolution as China takes over the crypto world! 
            <span className="text-red-200 font-bold">TO THE MOON! 🌙</span>
          </p>

          {/* Contract Address */}
          <div className="bg-red bg-opacity-50 rounded-lg p-6 mb-8 max-w-4xl mx-auto">
            <h3 className="text-red-200 font-bold text-xl mb-4">🎯 CONTRACT ADDRESS 🎯</h3>
            <div 
              className="bg-gray-800 p-4 rounded cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => copyToClipboard("DF1pHt29XfArboSZdePVa3mw8LHEWRL3MvdBpSQybonk")}
            >
              <code className="text-red-200 text-lg break-all">
              DF1pHt29XfArboSZdePVa3mw8LHEWRL3MvdBpSQybonk 
              </code>
              <p className="text-white text-sm mt-2">👆 Click to copy!</p>
            </div>
            {showExplosion && (
              <div className="text-6xl animate-ping">💥 COPIED! 💥</div>
            )}
          </div>

          <button className="bg-red-800 hover:bg-red-700 text-white font-black text-3xl px-12 py-6 rounded-full animate-bounce hover:animate-pulse transition-all duration-300 shadow-2xl">
            🚀 BUY NOW OR CRY LATER! 🚀
          </button>
        </div>
      </section>

      {/* How to Buy Section */}
      <section id="buy" className="relative z-10 py-20 bg-black bg-opacity-80">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center text-red-200 mb-16 animate-pulse">
            🛒 HOW TO BUY & JOIN THE TAKEOVER! 🛒
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-red-600 p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">👻</div>
              <h3 className="text-white font-bold text-xl mb-4">STEP 1</h3>
              <p className="text-white">Get a Solana wallet (Phantom, Solflare)</p>
            </div>
            
            <div className="text-center bg-red-800 p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-white font-bold text-xl mb-4">STEP 2</h3>
              <p className="text-white">Buy SOL FROM Your MOM</p>
            </div>
            
            <div className="text-center bg-red-600 p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🔄</div>
              <h3 className="text-white font-bold text-xl mb-4">STEP 3</h3>
              <p className="text-white">Use Jupiter or Raydium to swap SOL</p>
            </div>
            
            <div className="text-center bg-red-800 p-8 rounded-lg hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-white font-bold text-xl mb-4">STEP 4</h3>
              <p className="text-white">HODL and watch China TAKEOVER!</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Image src="/maxresdefault.jpg" alt="China takeover" width={600} height={300} className="mx-auto rounded-lg shadow-2xl animate-pulse" />
          </div>
        </div>
      </section>



      {/* Community Section */}
      <section id="community" className="relative z-10 py-20 bg-gradient-to-r from-red-800 to-red-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-8 animate-pulse">
            🌍 JOIN THE REVOLUTION! 🌍
          </h2>
          
          <div className="mb-16">
            <Image 
              src="/chinese-takeover-banner.svg" 
              alt="Chinese Takeover Banner" 
              width={600} 
              height={150} 
              className="mx-auto animate-wiggle hover:animate-rainbow transition-all duration-300 shadow-2xl rounded-lg"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <a 
              href="https://x.com/i/communities/1941875476047233176"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 hover:bg-red-600 p-8 rounded-lg transition-all duration-300 hover:scale-105 block"
            >
              <div className="text-6xl mb-4">🐦</div>
              <h3 className="text-white font-bold text-2xl mb-4">Twitter Community</h3>
              <p className="text-white">Join our Twitter community and spread the revolution!</p>
            </a>
            
            <div className="bg-red-700 p-8 rounded-lg opacity-50">
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-white font-bold text-2xl mb-4">Telegram</h3>
              <p className="text-white">Coming Soon! The ultimate meme headquarters!</p>
            </div>
          </div>
          
          <div className="bg-black bg-opacity-70 p-8 rounded-lg">
            <h3 className="text-red-200 font-bold text-3xl mb-6">🎉 THE TAKEOVER IS REAL! 🎉</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Image src="/s-l1600.jpg" alt="meme1" width={200} height={200} className="rounded-lg animate-bounce mx-auto" />
              <Image src="/biaoqing (1).jpeg" alt="meme2" width={200} height={200} className="rounded-lg animate-pulse mx-auto" />
              <Image src="/zerek-pandajak-v0-m9ynw51akicc1.webp" alt="meme3" width={200} height={200} className="rounded-lg animate-bounce mx-auto" />
            </div>
            <p className="text-white text-xl mt-8">
              Don&apos;t miss out on the greatest meme revolution in crypto history! 
              <br />
              <span className="text-red-200 font-bold">CHINA TAKEOVER IS INEVITABLE! 🚀🇨🇳</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-black p-8 text-center">
        <p className="text-white text-lg">
          🇨🇳 CHINA TAKEOVER MEME COIN 🇨🇳
        </p>
        <p className="text-red-200 text-sm mt-2">
          This is a meme coin with no intrinsic value or expectation of financial return. 
          For entertainment purposes only!
        </p>
        <div className="mt-4 animate-bounce">
          <span className="text-6xl">🚀🌙</span>
        </div>
      </footer>
    </div>
  );
}
