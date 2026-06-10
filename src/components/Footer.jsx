export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full py-lg px-gutter">
      <div className="flex flex-col md:flex-row justify-between items-center gap-md max-w-container-max mx-auto">
        <div className="font-display-lg text-headline-md text-primary">PapayaSense AI</div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="font-body-md text-label-md text-gray-500 hover:text-primary transition-colors cursor-pointer" href="#">Privacy Policy</a>
          <a className="font-body-md text-label-md text-gray-500 hover:text-primary transition-colors cursor-pointer" href="#">Terms of Service</a>
          <a className="font-body-md text-label-md text-gray-500 hover:text-primary transition-colors cursor-pointer" href="#">API Documentation</a>
        </div>
        <div className="font-body-md text-label-md text-secondary">
          © 2026 PapayaSense AI. Precision Agriculture Systems.
        </div>
      </div>
    </footer>
  );
}