import { cookies } from "next/headers";
import { api } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, TwitterIcon } from "lucide-react";
import { PhotoCheckbox } from "@/components/PhotoCheckbox";
import dayjs from "dayjs";
import { TwitterShare } from "@/components/TwitterShare";
import { FacebookShare } from "@/components/FacebookShare";

interface Params {
  params: {
    id: string;
  };
}

interface MemoryDetails {
  id: string;
  userId?: string;
  coverUrl: string;
  content: string;
  createdAt: string;
  isPublic: boolean;
}

export default async function DetailMemory({ params }: Params) {
  const isAuthenticated = cookies().has("token");

  if (!isAuthenticated) {
    return;
  }

  const token = cookies().get("token")?.value;
  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const memoryDetail: MemoryDetails = response.data;

  if (!memoryDetail) {
    return;
  }

  return (
    <div className="py-16 px-8 flex flex-col gap-4 ">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <PhotoCheckbox isPublic={memoryDetail.isPublic}/>

      <div key={memoryDetail.id} className="space-y-4">
        <time className="text-gray-100 text-sm gap-2 flex items-center -ml-8 before:h-px before:w-5 before:bg-gray-50">
          {dayjs(memoryDetail.createdAt).format("D [ de ]MMMM YYYY")}
        </time>

        <Image
          src={memoryDetail.coverUrl}
          width={592}
          height={280}
          alt=""
          className="w-full aspect-video object-cover rounded-lg"
        />
        <p className="text-base md:text-lg leading-relaxed text-gray-100">
          {memoryDetail.content}
        </p>

        {memoryDetail.isPublic && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <TwitterShare title={memoryDetail.content} />
            <FacebookShare />
          </div>
        )}
      </div>
    </div>
  );
}
