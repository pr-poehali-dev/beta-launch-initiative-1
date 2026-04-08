const quotes = [
  {
    text: "Эмиграция — это маленькая смерть. Умираешь там, рождаешься здесь, но никогда не живёшь полностью ни там, ни здесь.",
    author: "Иван Бунин",
    year: "1925",
    city: "Париж",
  },
  {
    text: "Россия — это не государство. Это душа. И эту душу не отнять никаким декретом.",
    author: "Марина Цветаева",
    year: "1922",
    city: "Прага",
  },
  {
    text: "Я унёс с собой Россию. Не страну — а звук, запах, цвет. Они живут во мне, пока я жив.",
    author: "Владимир Набоков",
    year: "1930",
    city: "Берлин",
  },
];

export default function Quotes() {
  return (
    <section className="bg-neutral-900 px-6 py-20 lg:py-32" id="identity">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Голоса изгнания</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-16 leading-tight">
          Из первых уст
        </h2>

        <div className="flex flex-col gap-12">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="border-l-2 border-neutral-600 pl-8 hover:border-white transition-colors duration-500"
            >
              <p className="text-white text-2xl lg:text-3xl leading-snug mb-6 font-light italic">
                «{q.text}»
              </p>
              <div className="flex items-center gap-4">
                <span className="text-neutral-300 font-semibold">{q.author}</span>
                <span className="text-neutral-600 text-sm">—</span>
                <span className="text-neutral-500 text-sm">{q.city}, {q.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-white mb-2">~2 млн</p>
            <p className="text-neutral-500 text-sm uppercase tracking-wide">Эмигрантов после 1917 года</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white mb-2">34</p>
            <p className="text-neutral-500 text-sm uppercase tracking-wide">Русских газеты в Париже</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-white mb-2">53</p>
            <p className="text-neutral-500 text-sm uppercase tracking-wide">Страны расселения</p>
          </div>
        </div>
      </div>
    </section>
  );
}
