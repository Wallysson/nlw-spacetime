"use client";

import { Camera } from "lucide-react";
import { MediaPicker } from "./MediaPicker";

export function PhotoCheckbox() {
  return (
    <form
      action=""
      className="flex flex-1 flex-col gap-4"
      //   onSubmit={handleCreateMemory}
    >
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <Camera className="h-4 w-4" />
          Anexar mídia
        </label>

        <label
          htmlFor="isPublic"
          className="flex items-center cursor-pointer gap-1.5 text-sm text-gray-200 hover:text-gray-100"
        >
          <input
            type="checkbox"
            name="isPublic"
            id="isPublic"
            value="true"
            accept="image/*"
            className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
          />
          Tornar memória pública
        </label>
      </div>
      <MediaPicker />
    </form>
  );
}
