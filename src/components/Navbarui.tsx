'use client';

import React, { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";

import { cn } from "@/lib/utils";

const Navbarui = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">AI doctar</HoveredLink>
            <HoveredLink href="/interface-design">Hyperpersonalized treatments</HoveredLink>
            <HoveredLink href="/seo">laboritaty free tests🎉 </HoveredLink>
            <HoveredLink href="/branding">personalized suplements</HoveredLink>
           
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title=""
              href=""
              src=""
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
               href=""
              src=""
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
               href=""
              src=""
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href=""
              src=""
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
            <ProductItem
              title="Algochurn"
              href=""
              src=""
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Algochurn"
              href=""
              src=""
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Algochurn"
              href=""
              src=""
              description="Prepare for tech interviews like never before."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/dashboard">Basic</HoveredLink>
            <HoveredLink href="/pricing">Premium</HoveredLink>
            <HoveredLink href="/pricing">Enterprice</HoveredLink>
            <HoveredLink href="/enterprise">Customize✨</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
    
  );
};

export default Navbarui;