import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";
import { NAV, CONTACT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-brand-navy text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo className="h-10 w-auto" variant="onDark" />
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Youth Equipped helps young people build future-ready skills through hands-on, real-world programs.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-white">Contact & apply</Link></li>
              <li><a href={"mailto:" + CONTACT_EMAIL} className="hover:text-white">{CONTACT_EMAIL}</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400">
          <p>
            Youth Equipped is an independent youth nonprofit. Some programs receive production, technology, and mentorship
            support from Impact Loop, a social-impact storytelling company — disclosed openly.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} Youth Equipped. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
