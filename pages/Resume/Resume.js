const Resume = () => {
  return (
    <div className="w-full items-center">
      <div className="items-center">
        <div className="px-4 pt-2 text-center">
          <div className="mb-10 mt-20 text-2xl font-semibold uppercase tracking-wide text-slate-100">
            RESUME
          </div>
        </div>
        <div className="grid-flow-row-dense items-center gap-4 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4 pr-6">
            <a href="https://docs.google.com/document/d/e/2PACX-1vQrSOYM4n0ZvhwnJ6_u-ZIhbjhMKHn2nmPcgQzh0By5u5PfngJmveNSuQ3vFfBAb65AGC9EG78SJNjF/pub">
              <img
                src="https://png.pngtree.com/png-vector/20190411/ourlarge/pngtree-vector-resume-icon-png-image_927259.jpg"
                className="inline-block h-20 w-20 rounded-full bg-white ring-2 ring-slate-100"
              />
            </a>

            <div className="mt-4 px-4 pt-2 text-center">
              <p className="text-md mb-4 text-center font-semibold uppercase text-slate-100">
                Here is My Resume
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
