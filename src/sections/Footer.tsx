import { Container } from "../components/Container";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="bg-neutral-950 py-8">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className="text-xs text-neutral-400 sm:text-sm">
            <span className="transition-colors duration-300 hover:text-[#4285F4]">
              Developed &amp; Maintained by
            </span>
            <span className="ml-1 text-[#4185F4] transition-colors duration-300 hover:text-[#2bba51]">
              {profile.name}
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
