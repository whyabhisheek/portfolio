import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: "View and download my resume",
};

const BLUR_FADE_DELAY = 0.04;

export default function ResumePage() {
  const resumeUrl = "/resume.pdf";

  return (
    <section className="space-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex items-center justify-between">
          <h1 className="font-medium text-2xl mb-4 tracking-tighter">Resume</h1>
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Download PDF
          </Link>
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="w-full">
          <embed
            src={resumeUrl}
            type="application/pdf"
            width="100%"
            height="800"
            className="border rounded-lg shadow-lg"
          />
        </div>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Having trouble viewing? Try downloading the PDF directly.
          </p>
          <Link
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
          >
            Download Resume
          </Link>
        </div>
      </BlurFade>
    </section>
  );
}
