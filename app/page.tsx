"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, TwitterIcon as TikTok, ShoppingBag, Users, Truck, Shield, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ZiaSymbol } from "@/components/zia-symbol"

export default function Component() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const phrases = [
    "Funky Fresh Junkies",
    "Fuerza Femenina Juvenil",
    "Fearless Future Journey",
    "Full Force Justice",
    "Fade to Flawless Joy",
    "Fugitives for Justice",
  ]

  useEffect(() => {
    const currentPhrase = phrases[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentPhrase.length) {
            setDisplayText(currentPhrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 1000) // Hold for 1 second
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 10 : 20,
    ) // Faster when deleting

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isDeleting, phrases])

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="lg:col-span-1 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-0 md:py-[57px] md:pb-0 md:pt-0">
        {/* Semi-transparent background overlay behind text only */}
        <div className="bg-transparent rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 space-x-2 sm:space-x-3 mt-16 sm:mt-20 lg:mt-24 xl:mt-32 flex flex-row items-center justify-between md:mt-0 md:px-0 md:py-2.5">
          <Link href="/" className="flex items-center justify-center">
            <ZiaSymbol className="text-yellow-400 mr-3" size={32} />
            <div className="text-2xl font-bold tracking-wider">SIEMPRE NUEVO </div>
          </Link>
          <nav className="ml-auto flex gap-6 justify-center items-center">
            <Link href="#shop" className="text-sm font-medium hover:text-yellow-400 transition-colors">
              SHOP
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-yellow-400 transition-colors">
              ABOUT
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-yellow-400 transition-colors">
              CONTACT
            </Link>
            <Button
              variant="outline"
              size="sm"
              className="bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              CART
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Refactored Hero Section */}
        <section
          className="relative min-h-screen overflow-hidden"
          aria-label="FFJ URBANM Hero Section - Urban streetwear for modern women"
        >
          {/* Background Image Layer - Lowest z-index */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ffj-models.png"
              alt="FFJ Urban Models showcasing streetwear"
              fill
              className="object-cover object-center"
              style={{ objectPosition: "center 30%" }} // Keeps subject visible when cropping
              priority
              loading="eager" // Prevents CLS for hero imagery
            />
          </div>

          {/* Content Container - Uses CSS Grid for responsive layout */}
          <div className="relative z-20 min-h-screen grid grid-cols-1 lg:grid-cols-3 items-center">
            {/* Left Content Area - Occupies left third on desktop */}
            <header className="lg:col-span-1 px-8 lg:px-16 py-12 lg:py-0">
              {/* Semi-transparent background overlay behind text only */}
              <div className="bg-transparent rounded-2xl p-8 lg:p-12 space-y-3 lg:mt-24 mt-32">
                {/* Decorative Zia Symbol - Below text layer */}
                <div className="relative z-10">
                  <ZiaSymbol className="text-yellow-400 opacity-80" size={48} />
                </div>

                {/* Main Headline - Fluid typography using clamp() */}
                <h1 className="relative z-20 font-black tracking-wider leading-tight">
                  <span
                    className="block text-white shadow-xl"
                    style={{ fontSize: "clamp(1rem, 3vw, 2rem)" }} // Responsive font sizing
                  >
                    URBANM
                  </span>
                  <span
                    className="block text-yellow-400 mt-2 text-5xl shadow-xl"
                    style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)" }}
                  >
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </span>
                </h1>

                {/* Subheadline - Consistent spacing tokens */}
                <p
                  className="leading-relaxed max-w-md relative z-20 font-black text-[rgba(191,10,48,1)] shadow-xl"
                  style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}
                >
                  Street culture. <br />
                  Bold statements. <br />
                  Unapologetic style.
                </p>

                {/* CTA Button Group - Enhanced with shadows and hover effects */}
                <div className="flex flex-col sm:flex-row gap-4 relative z-20">
                  <Button
                    size="lg"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    SHOP NOW
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    className="border-white hover:bg-white hover:text-black px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 text-black font-extrabold bg-white"
                  >
                    FOLLOW US
                  </Button>
                </div>

                {/* Social Proof Indicators */}
              </div>
            </header>

            {/* Center and Right Areas - Preserve image focal point */}
            <div className="lg:col-span-2 relative">
              {/* Decorative elements that don't obstruct the subject */}
              <div className="absolute bottom-8 right-8 opacity-20 z-10">
                <ZiaSymbol className="text-yellow-400" size={120} />
              </div>

              {/* Subtle brand watermark */}
              <div className="absolute top-8 right-8 z-10">
                <div className="text-right opacity-60">
                  <div className="text-sm font-bold text-yellow-400">FFJ</div>
                  <div className="text-xs text-gray-400">URBANM</div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
                <div className="animate-bounce"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section id="about" className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-12 items-center">
              <div>
                <div className="flex flex-col items-center gap-4 mb-6">
                  <ZiaSymbol className="text-yellow-400" size={48} />
                  <h2 className="text-4xl md:text-5xl font-bold">
                    <span className="text-yellow-400">VIBRA URBANA</span>
                  </h2>
                </div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Represent the fearless spirit of urban culture. We create clothing for women who aren't afraid to
                  stand out, speak up, and live their truth.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Every piece tells a story of resilience, authenticity, and the unbreakable bond of community. This is
                  more than fashion...Es una fiera.
                </p>
              </div>
              <div className="relative">
                <div className="bg-yellow-400 p-8 rounded-lg relative overflow-hidden">
                  <div className="absolute top-4 right-4 opacity-20">
                    <ZiaSymbol className="text-black" size={64} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10 text-center text-[rgba(191,10,48,1)]">
                    Rebeldía Radiante{" "}
                  </h3>
                  <p className="text-black leading-relaxed relative z-10">
                    We make it our mission empower NM women through bold, authentic streetwear that celebrates culture,
                    community, and individual expression. We stand with those who dare to be different.
                  </p>
                  <div className="absolute bottom-2 left-2 opacity-10">
                    <ZiaSymbol className="text-black" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products - Updated with real product images */}
        <section id="shop" className="py-20 px-4 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <ZiaSymbol className="text-yellow-400 mx-auto mb-4" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold">
                ALMA <span className="text-yellow-400">JUVENIL</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { name: "FFJ Sweatshirt", price: "$65", image: "/images/ffj-sweatshirt.png" },
                { name: "Wide-Leg Jeans", price: "$85", image: "/images/ffj-jeans.png" },
                { name: "Urban Backpack", price: "$45", image: "/images/ffj-backpack.png" },
                { name: "FFJ Cap", price: "$25", image: "/images/ffj-cap.png" },
              ].map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-4 border border-gray-800 bg-gray-100">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-lg">
                        SHOP NOW
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4">
                      <ZiaSymbol className="text-yellow-400 opacity-70" size={24} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-yellow-400 text-lg font-bold">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-black">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              FUEGO <span className="text-yellow-400">INTERIOR</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative group">
                  <Image
                    src={`/images/ffj-model-${i}.png`}
                    alt={`FFJ Model ${i} wearing urban streetwear`}
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 border border-gray-800"
                  />
                  {/* Removed overlay for cleaner image display */}
                  <div className="absolute top-4 right-4">
                    <ZiaSymbol className="text-yellow-400 opacity-70" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <ZiaSymbol className="text-yellow-400 mx-auto mb-4" size={48} />
              <h2 className="text-4xl md:text-5xl font-bold">
                VIDA <span className="text-yellow-400">SIN LÍMITES</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-black rounded-lg border border-gray-800">
                <Truck className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">FREE SHIPPING</h3>
                <p className="text-gray-400 mb-4">On orders over $75</p>
                <ZiaSymbol className="text-red-600 mx-auto opacity-30" size={20} />
              </div>
              <div className="p-6 bg-black rounded-lg border border-gray-800">
                <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">QUALITY GUARANTEE</h3>
                <p className="text-gray-400 mb-4">Premium materials only</p>
                <ZiaSymbol className="text-red-600 mx-auto opacity-30" size={20} />
              </div>
              <div className="p-6 bg-black rounded-lg border border-gray-800">
                <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">COMMUNITY FIRST</h3>
                <p className="text-gray-400 mb-4">Supporting urban culture</p>
                <ZiaSymbol className="text-red-600 mx-auto opacity-30" size={20} />
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-4 bg-yellow-400 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10">
              <ZiaSymbol className="text-black" size={120} />
            </div>
            <div className="absolute bottom-10 right-10">
              <ZiaSymbol className="text-black" size={80} />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <ZiaSymbol className="text-black" size={200} />
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <ZiaSymbol className="text-black mx-auto mb-6" size={48} />
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">CALLE Y CORAZON</h2>
            <p className="text-xl text-black mb-8">
              Get exclusive drops, behind-the-scenes content, and connect with our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-black border-none" />
              <Button className="bg-black text-white hover:bg-gray-800 font-bold px-8 shadow-lg transition-all duration-300 hover:scale-105">
                SUBSCRIBE
              </Button>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <Link href="#" className="text-black hover:text-gray-800 transition-colors">
                <Instagram className="w-8 h-8" />
              </Link>
              <Link href="#" className="text-black hover:text-gray-800 transition-colors">
                <TikTok className="w-8 h-8" />
              </Link>
              <Link href="#" className="text-black hover:text-gray-800 transition-colors">
                <Github className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 px-4 border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-row justify-between gap-8 mx-0">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ZiaSymbol className="text-yellow-400" size={32} />
                <div className="text-2xl font-bold">SIEMPRE NUEVO</div>
              </div>
              <p className="text-gray-400 mb-4">Authentic streetwear for the fearless woman.</p>
              <div className="flex gap-2">
                <ZiaSymbol className="text-red-600 opacity-50" size={16} />
                <ZiaSymbol className="text-red-600 opacity-30" size={12} />
                <ZiaSymbol className="text-red-600 opacity-20" size={8} />
              </div>
            </div>
            <div className="text-right mx-3">
              <h4 className="font-bold mb-4 text-yellow-400">SHOP</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tees
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Jumpers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-900 mt-8 pt-8 text-center text-gray-400 flex items-center justify-center gap-4">
            <ZiaSymbol className="text-yellow-400 opacity-50" size={20} />
            <p>&copy; {new Date().getFullYear()} Digital Herencia. All rights reserved.</p>
            <ZiaSymbol className="text-yellow-400 opacity-50" size={20} />
          </div>
        </div>
      </footer>
    </div>
  )
}
