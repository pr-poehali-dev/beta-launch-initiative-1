const newspapers = [
  {
    title: "Последние новости",
    city: "Париж",
    years: "1920–1940",
    editor: "П.Н. Милюков",
    type: "Ежедневная газета",
    description: "Крупнейшая русская газета в эмиграции. Либерально-демократического направления, тираж достигал 35 000 экземпляров. Публиковала Бунина, Куприна, Тэффи.",
  },
  {
    title: "Возрождение",
    city: "Париж",
    years: "1925–1940",
    editor: "П.Б. Струве",
    type: "Ежедневная газета",
    description: "Консервативно-монархическое издание, оппонент «Последних новостей». Отстаивало идею реставрации и непримиримость к советской власти.",
  },
  {
    title: "Руль",
    city: "Берлин",
    years: "1920–1931",
    editor: "И.В. Гессен",
    type: "Ежедневная газета",
    description: "Главная газета берлинской эмиграции. Публиковала ранние рассказы Набокова-Сирина. Закрылась с экономическим крахом русского Берлина.",
  },
  {
    title: "Современные записки",
    city: "Париж",
    years: "1920–1940",
    editor: "Коллегия редакторов",
    type: "Толстый журнал",
    description: "Главный литературный журнал эмиграции. Публиковал Бунина, Цветаеву, Набокова, Ремизова. Выдержал 70 номеров — феноменальный результат для эмигрантского издания.",
  },
  {
    title: "Числа",
    city: "Париж",
    years: "1930–1934",
    editor: "Н. Оцуп",
    type: "Литературный журнал",
    description: "Журнал «молодой эмиграции» — тех, кто вырос уже за рубежом. Экспериментальный, дерзкий, полемизировал со старшим поколением.",
  },
  {
    title: "Харбинское время",
    city: "Харбин",
    years: "1919–1943",
    editor: "Разные редакторы",
    type: "Ежедневная газета",
    description: "Главная газета восточной ветви эмиграции. Освещала жизнь русской общины Китая, печатала местных авторов и новости из Европы.",
  },
];

const publishers = [
  { name: "YMCA-Press", city: "Париж", note: "Выпускал религиозную и философскую литературу, работает до сих пор" },
  { name: "Петрополис", city: "Берлин", note: "Крупнейшее светское издательство 1920-х" },
  { name: "Слово", city: "Берлин", note: "Публиковало классиков и современников" },
  { name: "Посев", city: "Франкфурт", note: "НТС, антисоветская литература с 1945 года" },
];

export default function Press() {
  return (
    <section className="bg-neutral-900 px-6 py-20 lg:py-32" id="press">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Слово на чужбине</p>
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Пресса и книгоиздание
        </h2>
        <p className="text-neutral-400 text-lg mb-16 max-w-2xl">
          Эмиграция создала полноценный медиамир: десятки газет, журналов и издательств, которые сохраняли живой русский язык и культуру.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-700">
          {newspapers.map((paper) => (
            <div key={paper.title} className="bg-neutral-900 p-6 hover:bg-neutral-800 transition-colors duration-300">
              <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{paper.type} · {paper.city}</p>
              <h3 className="text-xl font-bold text-white mb-1">«{paper.title}»</h3>
              <p className="text-neutral-500 text-xs mb-3">{paper.years} · {paper.editor}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{paper.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-neutral-700 p-8">
          <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Крупнейшие издательства</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publishers.map((p) => (
              <div key={p.name}>
                <p className="text-white font-bold mb-1">{p.name}</p>
                <p className="text-neutral-500 text-xs mb-2 uppercase tracking-wide">{p.city}</p>
                <p className="text-neutral-400 text-sm">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
