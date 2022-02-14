const Quote = () => {
  const quotes = [
    {
      id: 1,
      name: "Bill Gates",
      imageSrc:
        "https://imageio.forbes.com/specials-images/imageserve/5f4ebe0c87612dab4f12a597/0x0.jpg?format=jpg&crop=3392,3395,x292,y592,safe&fit=crop",
      imageAlt: "Bill Gates",
      blockquote:
        "Don't compare yourself with anyone in this World, if you do so, You are Insulting Yourself.",
      title: "Founder of Microsoft",
    },
    {
      id: 2,
      name: "Confucius",
      imageSrc:
        "http://wagner.edu/wagnermagazine/files/iStock_000015319134Medium1.jpg",
      imageAlt: "Confucius",
      blockquote: "The journey of a thousand miles begins with a single step.",
      title: "Chinese Philosopher",
    },
    {
      id: 3,
      name: "Mark Zuckerberg",
      imageSrc: "https://images.barrons.com/im-292100?width=1280&size=1",
      imageAlt: "Mark",
      blockquote:
        "People don't care about what you say, they care about what you build.",
      title: "Founder & CEO -Facebook",
    },
  ];
  return (
    <div className="w-full items-center">
      <div className="mx-auto max-w-2xl items-center py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="px-4 pt-2 text-center">
          <div className="mb-10 mt-10 text-2xl font-semibold uppercase tracking-wide text-slate-100">
            Quotes
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-4 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          {quotes.map((quote) => (
            <figure
              className="h-auto w-80 rounded-xl bg-slate-800 p-4 pr-6 shadow-md shadow-gray-800 dark:bg-slate-900"
              key={quote.id}
            >
              <img
                className=" mx-auto h-24 w-24 p-6 md:h-auto md:w-48 md:rounded-full"
                src={quote.imageSrc}
                alt={quote.imageAlt}
                width="384"
                height="512"
              />
              <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
                <blackquote>
                  <p className="text-center text-lg font-medium">
                    {quote.blockquote}
                  </p>
                </blackquote>
                <figcaption className="text-center font-medium">
                  <div className="font-sans text-lg text-sky-500 dark:text-sky-400">
                    {quote.name}
                  </div>
                  <div className="text-sm text-slate-200 dark:text-slate-500">
                    {quote.title}
                  </div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Quote;
