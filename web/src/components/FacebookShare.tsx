"use client";

import { FacebookIcon } from "lucide-react";
import { FacebookShareButton } from "react-share";

export function FacebookShare() {
  const url = window.location.href;
  return (
    <FacebookShareButton url={url}>
      <div className="group inline-flex items-center space-x-1">
        <div className="w-6 h-6 group-hover:text-blue-400 group-hover:scale-105 transition-all">
          <FacebookIcon width={24} height={24} />
        </div>
        <span className="text-gray-500 group-hover:text-blue-400">
          Compartilhar no Facebook
        </span>
      </div>
    </FacebookShareButton>
  );
}
