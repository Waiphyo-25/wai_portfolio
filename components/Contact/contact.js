const Contact = () => {
  return (
    <div className="w-full items-center">
      <div className="mx-auto max-w-2xl items-center py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 pt-2 text-center">
          <div className="text-2xl font-bold uppercase tracking-wide text-slate-100">
            Get In Touch
          </div>
        </div>

        <div className="mt-6">
          <div className="items-center justify-center space-y-5 text-center">
            <div className="p-3 shadow">
              <p className="font-sans text-slate-400">
                I’m currently looking for any new opportunities, my inbox is
                always open. <br />
                Whether you have a question or just want to say hi,
                <br /> I’ll try my best to get back to you!
              </p>
            </div>
            <div className="items-center justify-center text-center">
              <a
                href="mailto:waiphyo.us@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="rounded-sm border border-green-700 p-2 font-mono hover:bg-slate-800"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
