"use client";

import { TwitterIcon } from "lucide-react";
import { TwitterShareButton } from "react-share";

interface Props {
  title: string;
}

export function TwitterShare({ title }: Props) {
  const url = window.location.href;
  return (
    <TwitterShareButton
      url={url}
      title={title?.substring(0, 150).concat("...")}
    >
      <div className="group inline-flex items-center space-x-1">
        <div className="w-6 h-6 group-hover:text-blue-400 group-hover:scale-105 transition-all">
          <TwitterIcon width={24} height={24} />
        </div>
        <span className="text-gray-500 group-hover:text-blue-400">
          Compartilhar no Twitter
        </span>
      </div>
    </TwitterShareButton>
  );
}
