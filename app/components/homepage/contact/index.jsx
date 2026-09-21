// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import { SpotlightCard } from '@/app/components/ui/spotlight';
import { HiEnvelope } from 'react-icons/hi2';

function ContactSection() {
  return (
    <div id="contact" className="my-16 lg:my-28 relative">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
          <HiEnvelope size={22} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
          Get In <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-violet-500/30 to-transparent ml-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between">
          <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let&apos;s talk about your project</h3>
              <p className="text-sm text-neutral-400 mb-8">
                Feel free to reach out for collaborations, new opportunities, or just a friendly chat.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                    <MdAlternateEmail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Email</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{personalData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                    <IoMdCall size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Phone</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{personalData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0">
                    <CiLocationOn size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-400">Location</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{personalData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
              {[
                { href: personalData.github, icon: IoLogoGithub },
                { href: personalData.linkedIn, icon: BiLogoLinkedin },
                { href: personalData.twitter, icon: FaXTwitter },
                { href: personalData.stackOverflow, icon: FaStackOverflow },
                { href: personalData.facebook, icon: FaFacebook },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={idx}
                    target="_blank"
                    href={item.href}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
