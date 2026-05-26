import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white text-slate-900 shadow-sm transition-all duration-300 ease-out hover:shadow-lg dark:border-white/10 dark:bg-white/95",
        className
      )}
    >
      <Link
        href={href || "#"}
        className="block cursor-pointer"
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto aspect-[16/9] w-full object-cover object-top"
          />
        )}
        {image ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 768px) 520px, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
                Preview
              </div>
            </div>
          </div>
        )}
      </Link>
      <CardHeader className="p-5 pb-3">
        <div className="space-y-1.5">
          <CardTitle className="mt-0 text-base leading-snug">{title}</CardTitle>
          <time className="font-sans text-xs text-slate-500">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-slate-600">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-5 pb-3">
        {tags && tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1.5">
            {tags?.map((tag) => (
              <Badge
                className="px-2 py-0.5 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-5 pb-5 pt-0">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge
                  key={idx}
                  className="flex gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] text-slate-800 hover:bg-slate-50 dark:border-black/10"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
