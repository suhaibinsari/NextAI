'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '@/public/logo.png'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    const year: any = new Date().getFullYear();
    setCurrentYear(year)
  }, [])



  return (
    <>
      <footer className="bottom-0 w-full text-white bg-opacity-50 bg-gray-800 backdrop-filter backdrop-blur-md shadow-lg">
        <div className="w-full flex-col px-6 pt-20 lg:flex lg:px-10 xl:px-24">
          <div className="cursor-default lg:flex lg:flex-row lg:gap-x-16">
            <div>
              <h2 className="text-2xl font-bold">
                AI Works.
              </h2>
              <ul className="mt-4 text-sm flex flex-col items-start justify-start gap-2">
                <li className="flex flex-row items-start">
                  <p className="font-inter">Unixsol LLC</p>
                </li>
                <li className="flex flex-row items-start">
                  <p className="font-inter">
                    81807 E. County Road 22, Deer Trail, CO 80105, US
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-0 lg:mt-0 flex flex-row flex-wrap lg:flex-nowrap lg:justify-center gap-4 lg:gap-x-24">
              <div className="flex flex-col">
                <h2 className="font-mono font-bold text-lg">Contact</h2>
                <ul className="mt-4 grid gap-2 ">
                  <li className="flex items-start text-sm">
                    <a
                      target="javascript:;"
                      className="text-left  break-words  "
                      href="javascript:;"
                    >
                      contact@techsolutionsco.net
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col">
                <h2 className="font-mono font-bold  text-lg">Company</h2>
                <ul className="mt-4 grid gap-2 grid-cols-2">
                  <li className="flex items-start text-sm">
                    <span />
                    <a
                      target="javascript:;"
                      className="text-left  break-words  "
                      href="/services"
                    >
                      Services
                    </a>
                  </li>
                  <li className="flex items-start text-sm">
                    <span />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 py-10 border-t border-zinc-200 font-inter text-center text-xs text-zinc-400">
            Copyright ©{currentYear}-
            Unixsol AI. All rights reserved.
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer